import { gs, GlideRecord } from '@servicenow/glide'

const AGENT_ROLE = '3120f52cc312310015519f2974d3ae83' // sn_customerservice_agent

/** Returns the existing record's sys_id for a one-field match, or '' when none. */
function findOne(table: string, field: string, value: string): string {
    const gr = new GlideRecord(table)
    gr.addQuery(field, value)
    gr.setLimit(1)
    gr.query()
    return gr.next() ? gr.getUniqueValue() : ''
}

/**
 * SP-87: UI action on the account form. Creates the standard set for a new project - L2 group (with the agent role,
 * linked to the account), a default routing rule - and lists the non-standard items for manual follow-up instead of
 * blocking. Safe to re-run: existing records are reused.
 */
export function onboardProject(current: any) {
    const accountName = current.getValue('name')
    const done: string[] = []
    const manual: string[] = []

    // 1. L2 group
    const groupName = 'Veridos L2 - ' + accountName
    let groupId = findOne('sys_user_group', 'name', groupName)
    if (!groupId) {
        const g = new GlideRecord('sys_user_group')
        g.initialize()
        g.setValue('name', groupName)
        g.setValue('description', 'L2 support for ' + accountName)
        g.setValue('x_1863667_csm_account', current.getUniqueValue())
        groupId = g.insert()
        done.push('Created group ' + groupName)
    } else {
        done.push('Group ' + groupName + ' already exists')
    }
    if (groupId) {
        const hasRole = new GlideRecord('sys_group_has_role')
        hasRole.addQuery('group', groupId)
        hasRole.addQuery('role', AGENT_ROLE)
        hasRole.setLimit(1)
        hasRole.query()
        if (!hasRole.hasNext()) {
            hasRole.initialize()
            hasRole.setValue('group', groupId)
            hasRole.setValue('role', AGENT_ROLE)
            hasRole.insert()
            done.push('Granted the CSM agent role to ' + groupName)
        }
    }

    // 2. default routing rule (Account only)
    const rule = new GlideRecord('x_1863667_csm_routing_rule')
    rule.addQuery('account', current.getUniqueValue())
    rule.addNullQuery('location')
    rule.addNullQuery('contract')
    rule.setLimit(1)
    rule.query()
    if (!rule.hasNext()) {
        rule.initialize()
        rule.setValue('account', current.getUniqueValue())
        rule.setValue('l2_group', groupId)
        rule.insert()
        done.push('Created default routing rule to ' + groupName)
    }

    // 3. customer code
    if (!current.getValue('x_1863667_csm_customer_code')) {
        current.setValue('x_1863667_csm_customer_code', 'other')
        current.update()
    }

    // 4. everything else needs client data -> manual follow-up (not blocking)
    manual.push('Load contacts, group members, locations, contracts, product models, assets and entitlements with the import sets')
    manual.push('Set the portal logo / banner colour on the account (optional, falls back to the Veridos default)')
    manual.push('Account-specific schedule and SLAs are only needed for non-standard support hours (see LVA / GEO)')
    manual.push('Add the account to the portal case form User Criteria if the product form must be limited')

    gs.addInfoMessage('Project onboarding for ' + accountName + ': ' + done.join('; ') + '. Manual follow-up: ' + manual.join('; ') + '.')
}
