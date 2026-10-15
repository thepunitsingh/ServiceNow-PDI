import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

// scoped script includes are resolved at runtime through the application namespace
declare const x_1863667_csm: any

const STATE_RESOLVED = '6'

/** SP-39: before insert/update - fill CI and Location from the selected asset (install base). */
export function populateFromInstallBase(current: any) {
    if (!current.getValue('asset')) return
    if (!current.changes() && !current.isNewRecord()) return
    const asset = new GlideRecord('alm_asset')
    if (!asset.get(current.getValue('asset'))) return
    if (!current.getValue('cmdb_ci') && asset.getValue('ci')) current.setValue('cmdb_ci', asset.getValue('ci'))
    if (!current.getValue('location') && asset.getValue('location')) current.setValue('location', asset.getValue('location'))
}

const HW_TASKS: { [type: string]: { action: string; label: string }[] } = {
    ship_install: [{ action: 'ship_install', label: 'Ship & Install' }],
    remove_return: [{ action: 'remove_return', label: 'Remove & Return' }],
    repair: [{ action: 'repair_tracking', label: 'Repair Tracking' }],
    both: [
        { action: 'ship_install', label: 'Ship & Install' },
        { action: 'remove_return', label: 'Remove & Return' },
    ],
}

/** SP-38/40/41/42/43: after insert/update - create the hardware Case Tasks once per request. */
export function createHardwareTasks(current: any) {
    const type = current.getValue('x_1863667_csm_hw_request_type')
    if (!type || current.getValue('x_1863667_csm_hw_tasks_created') === 'yes') return
    const defs = HW_TASKS[type]
    if (!defs) return
    for (const def of defs) {
        const task = new GlideRecord('sn_customerservice_task')
        task.initialize()
        task.setValue('parent', current.getUniqueValue())
        task.setValue('account', current.getValue('account'))
        task.setValue('contact', current.getValue('contact'))
        task.setValue('cmdb_ci', current.getValue('cmdb_ci'))
        task.setValue('location', current.getValue('location'))
        task.setValue('assignment_group', current.getValue('assignment_group'))
        task.setValue('short_description', def.label + ' - ' + current.getValue('number'))
        task.setValue('x_1863667_csm_hw_action', def.action)
        task.setValue('x_1863667_csm_task_type', 'service_request')
        task.insert()
    }
    // flag the case without re-running business rules
    const flag = new GlideRecord('sn_customerservice_case')
    if (flag.get(current.getUniqueValue())) {
        flag.setValue('x_1863667_csm_hw_tasks_created', 'yes')
        flag.setWorkflow(false)
        flag.update()
    }
}

/** SP-45: after update on a hardware Case Task - resolve the Case once every hardware task is closed. */
export function resolveCaseWhenTasksClosed(current: any) {
    if (!current.getValue('x_1863667_csm_hw_action') || !current.getValue('parent')) return
    if (current.getValue('active') === 'true' || current.getValue('active') === '1') return
    const open = new GlideRecord('sn_customerservice_task')
    open.addQuery('parent', current.getValue('parent'))
    open.addNotNullQuery('x_1863667_csm_hw_action')
    open.addActiveQuery()
    open.setLimit(1)
    open.query()
    if (open.hasNext()) return
    const parent = new GlideRecord('sn_customerservice_case')
    if (!parent.get(current.getValue('parent')) || parent.getValue('active') !== '1' && parent.getValue('active') !== 'true') return
    parent.setValue('state', STATE_RESOLVED)
    parent.setValue('x_1863667_csm_closed_by', gs.getUserID())
    parent.setValue('close_notes', 'All hardware case tasks closed.')
    parent.update()
}

/** SP-47 / SP-91: before update - default Case closed by to the resolving user and require it for Resolved. */
export function enforceClosedBy(current: any, previous: any) {
    if (current.getValue('state') !== STATE_RESOLVED) return
    if (previous && previous.getValue('state') === STATE_RESOLVED && !current.changes()) return
    if (!current.getValue('x_1863667_csm_closed_by') && gs.getUserID()) {
        current.setValue('x_1863667_csm_closed_by', gs.getUserID())
    }
    if (!current.getValue('x_1863667_csm_closed_by')) {
        gs.addErrorMessage('Case closed by is required to resolve a case.')
        current.setAbortAction(true)
    }
}

const STATE_AWAITING_INFO = '18'

/** SP-65: before insert/update - an Awaiting Info case always carries an On Hold reason (default: Awaiting Customer). */
export function defaultOnHoldReason(current: any) {
    if (current.getValue('state') !== STATE_AWAITING_INFO) return
    if (!current.getValue('x_1863667_csm_on_hold_reason')) {
        current.setValue('x_1863667_csm_on_hold_reason', 'awaiting_customer')
    }
}

// ---------------------------------------------------------------- Sprint 4

/** SP-72: before query - restrict lists / reports to the authorised accounts of the user. */
export function restrictQueryToAccounts(current: any) {
    const access = new x_1863667_csm.CsmAccess()
    const q = access.accountQuery('account')
    if (q) current.addEncodedQuery(q)
}

/** SP-75: before insert/update - derive Priority from the Impact x Urgency matrix; a manual change is flagged. */
export function applyPriorityMatrix(current: any, previous: any) {
    const inputsChanged = current.isNewRecord() || current.impact.changes() || current.urgency.changes()
    if (!inputsChanged) {
        if (current.priority.changes()) current.setValue('x_1863667_csm_priority_override', true)
        return
    }
    const m = new GlideRecord('x_1863667_csm_priority_matrix')
    m.addQuery('impact', current.getValue('impact'))
    m.addQuery('urgency', current.getValue('urgency'))
    m.setLimit(1)
    m.query()
    if (m.next()) {
        // an explicit priority on insert is kept and marked as an override
        if (current.isNewRecord() && current.priority.changes() && current.getValue('priority') !== m.getValue('priority')) {
            current.setValue('x_1863667_csm_priority_override', true)
            return
        }
        current.setValue('priority', m.getValue('priority'))
        current.setValue('x_1863667_csm_priority_override', false)
    }
}

/** Tier of a support group: explicit x_1863667_csm_tier, otherwise taken from the naming standard ("... L3.2 - ..."). */
function tierOf(group: any): string {
    const explicit = group.getValue('x_1863667_csm_tier')
    if (explicit) return explicit
    const name = group.getValue('name') || ''
    if (/\bL3\.2\b/.test(name)) return 'l3_2'
    if (/\bL3\.1\b/.test(name)) return 'l3_1'
    if (/\bL2\b/.test(name)) return 'l2'
    return ''
}

const TIER_ORDER: { [tier: string]: number } = { l2: 1, l3_1: 2, l3_2: 3 }

/** SP-76: before update - validate and log L2 <-> L3.1 <-> L3.2 escalation / de-escalation. */
export function handleEscalation(current: any, previous: any) {
    const from = new GlideRecord('sys_user_group')
    const to = new GlideRecord('sys_user_group')
    if (!from.get(previous.getValue('assignment_group')) || !to.get(current.getValue('assignment_group'))) return
    const fromTier = tierOf(from)
    const toTier = tierOf(to)
    if (!fromTier || !toTier || fromTier === toTier) return
    if (Math.abs(TIER_ORDER[fromTier] - TIER_ORDER[toTier]) !== 1) {
        gs.addErrorMessage('Escalation must move one tier at a time (L2 <-> L3.1 <-> L3.2).')
        current.setAbortAction(true)
        return
    }
    const reason = current.getValue('x_1863667_csm_escalation_reason')
    const ref = current.getValue('x_1863667_csm_supplier_reference')
    if (!reason) {
        gs.addErrorMessage('A reason is required for every escalation / de-escalation.')
        current.setAbortAction(true)
        return
    }
    if (toTier === 'l3_2' && !ref) {
        gs.addErrorMessage('A supplier / specialist reference number is required when escalating to L3.2.')
        current.setAbortAction(true)
        return
    }
    const log = new GlideRecord('x_1863667_csm_escalation_log')
    log.initialize()
    log.setValue('case', current.getUniqueValue())
    log.setValue('direction', TIER_ORDER[toTier] > TIER_ORDER[fromTier] ? 'escalation' : 'deescalation')
    log.setValue('from_group', previous.getValue('assignment_group'))
    log.setValue('to_group', current.getValue('assignment_group'))
    log.setValue('reason', reason)
    log.setValue('reference_number', ref || '')
    log.setValue('performed_by', gs.getUserID())
    log.insert()
    current.work_notes = 'Case ' + (TIER_ORDER[toTier] > TIER_ORDER[fromTier] ? 'escalated' : 'de-escalated') +
        ' from ' + from.getValue('name') + ' to ' + to.getValue('name') + '. Reason: ' + reason + (ref ? ' (ref ' + ref + ')' : '')
    current.setValue('x_1863667_csm_escalation_reason', '')
    current.setValue('x_1863667_csm_supplier_reference', '')
}

/** SP-74: before update - cancelling requires a reason, which is journaled and triggers the customer notification. */
export function handleCancellation(current: any) {
    const reason = current.getValue('x_1863667_csm_cancel_reason')
    if (!reason) {
        gs.addErrorMessage('A cancellation reason is required.')
        current.setAbortAction(true)
        return
    }
    current.work_notes = 'Case cancelled (out of scope) by ' + gs.getUserDisplayName() + ' on ' + new GlideDateTime().getDisplayValue() + '. Reason: ' + reason
    gs.eventQueue('x_1863667_csm.case.cancelled', current, reason, gs.getUserID())
}

/** SP-79: before insert - derive Source / channel from the creation path when it was not set explicitly. */
export function captureChannel(current: any) {
    if (current.getValue('x_1863667_csm_channel')) return
    const type = (current.getValue('contact_type') || '').toLowerCase()
    let channel = 'internal'
    if (type === 'email') channel = 'email'
    else if (type === 'phone') channel = 'phone'
    else if (type === 'web' || type === 'self-service' || type === 'portal') channel = 'portal'
    else if (gs.getSession().getClientIP() && gs.getSession().isInteractive() === false && type === '') channel = 'portal'
    current.setValue('x_1863667_csm_channel', channel)
}

/** SP-77: before insert - route to the L2 group by Account + Location + Contract (most specific wins, then default). */
export function routeToL2Group(current: any) {
    if (current.getValue('assignment_group') || !current.getValue('account')) return
    const rules = new GlideRecord('x_1863667_csm_routing_rule')
    rules.addQuery('active', true)
    rules.addQuery('account', current.getValue('account'))
    rules.query()
    let best = ''
    let bestScore = -1
    while (rules.next()) {
        const loc = rules.getValue('location')
        const con = rules.getValue('contract')
        if (loc && loc !== current.getValue('location')) continue
        if (con && con !== current.getValue('contract')) continue
        const score = (loc ? 2 : 0) + (con ? 1 : 0)
        if (score > bestScore) {
            best = rules.getValue('l2_group')
            bestScore = score
        }
    }
    if (!best) best = l2GroupForCustomerCode(current.getValue('account'))
    if (!best) best = gs.getProperty('x_1863667_csm.default_l2_group', '')
    if (best) current.setValue('assignment_group', best)
}

/** SP-89: LVA / GEO accounts map to their own L2 group (independent properties, falling back to the seeded group names). */
function l2GroupForCustomerCode(accountId: string): string {
    const account = new GlideRecord('customer_account')
    if (!account.get(accountId)) return ''
    const code = account.getValue('x_1863667_csm_customer_code')
    if (code !== 'lva' && code !== 'geo') return ''
    const configured = gs.getProperty('x_1863667_csm.l2_group_' + code, '')
    if (configured) return configured
    const group = new GlideRecord('sys_user_group')
    group.addQuery('name', code === 'lva' ? 'Veridos L2 - LVA' : 'Veridos L2 - GEO')
    group.setLimit(1)
    group.query()
    return group.next() ? group.getUniqueValue() : ''
}

// ---------------------------------------------------------------- Sprint 5

/** SP-93: before update - every Assignment group change is journaled (previous, new, user, time). */
export function logAssignmentGroupChange(current: any, previous: any) {
    if (current.work_notes.changes()) return // escalation / cancellation already wrote an entry
    const was = previous.assignment_group.getDisplayValue() || '(empty)'
    const now = current.assignment_group.getDisplayValue() || '(empty)'
    current.work_notes =
        'Assignment group changed from ' + was + ' to ' + now + ' by ' + gs.getUserDisplayName() +
        ' on ' + new GlideDateTime().getDisplayValue()
}

/** SP-90: before query on models / assets / install base - limit to the authorised accounts. */
export function restrictAssetQueryToAccounts(current: any) {
    const access = new x_1863667_csm.CsmAccess()
    const q = access.accountQuery('account')
    if (q) current.addEncodedQuery(q)
}

/** SP-90: before query on product models - only models of the authorised accounts' assets. */
export function restrictModelQueryToAccounts(current: any) {
    const access = new x_1863667_csm.CsmAccess()
    const q = access.modelQuery()
    if (q) current.addEncodedQuery(q)
}
