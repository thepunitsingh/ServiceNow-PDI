import { gs, GlideRecord } from '@servicenow/glide'

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
