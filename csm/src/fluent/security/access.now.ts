import { ScriptInclude, Acl } from '@servicenow/sdk/core'
import { l2Agent, l31Agent, l32Specialist, adminRole } from './roles.now'

// SP-72 / SP-90: account-based visibility. Users holding x_1863667_csm.account_scoped (L2, L3.1, L3.2, viewers,
// customer contacts) only see records of their authorised accounts:
//   - the account of their customer_contact record, and
//   - the accounts of the support groups (sys_user_group.x_1863667_csm_account) they belong to.
// Admins and users without the marker role are unrestricted. Allow-ACLs elsewhere still apply; the Deny-Unless ACLs
// below only remove access (direct URL, related lists, reports). Query business rules (rules/query-rules) filter lists.
export const csmAccess = ScriptInclude({
    $id: Now.ID['si-csm-access'],
    name: 'CsmAccess',
    apiName: 'x_1863667_csm.CsmAccess',
    active: true,
    accessibleFrom: 'package_private',
    description: 'Account-based visibility helper',
    script: `var CsmAccess = Class.create();
CsmAccess.prototype = {
    initialize: function () {},

    MARKER: 'x_1863667_csm.account_scoped',
    NONE: 'sys_id=-1',

    isRestricted: function () {
        return gs.getUserID() && gs.hasRole(this.MARKER) && !gs.hasRole('admin') && !gs.hasRole('x_1863667_csm.admin');
    },

    // returns null when unrestricted, otherwise an array of account sys_ids
    authorizedAccounts: function () {
        if (!this.isRestricted()) return null;
        var cache = gs.getSession().getProperty('x_1863667_csm.accounts');
        if (cache) return cache === '-' ? [] : cache.split(',');
        var ids = {};
        var c = new GlideRecord('customer_contact');
        c.addQuery('user', gs.getUserID());
        c.query();
        while (c.next()) if (c.getValue('account')) ids[c.getValue('account')] = true;
        var m = new GlideRecord('sys_user_grmember');
        m.addQuery('user', gs.getUserID());
        m.query();
        while (m.next()) {
            var g = m.group.getRefRecord();
            if (g.isValidRecord() && g.getValue('x_1863667_csm_account')) ids[g.getValue('x_1863667_csm_account')] = true;
        }
        var list = Object.keys(ids);
        gs.getSession().putProperty('x_1863667_csm.accounts', list.length ? list.join(',') : '-');
        return list;
    },

    canAccessAccount: function (accountId) {
        var accounts = this.authorizedAccounts();
        if (accounts === null) return true;
        return !!accountId && accounts.indexOf(String(accountId)) > -1;
    },

    // encoded query restricting <field> (dot-walk allowed) to the authorised accounts; '' when unrestricted
    accountQuery: function (field) {
        var accounts = this.authorizedAccounts();
        if (accounts === null) return '';
        return accounts.length ? field + 'IN' + accounts.join(',') : this.NONE;
    },

    canAccessRecordOf: function (table, sysId) {
        if (!this.isRestricted()) return true;
        var gr = new GlideRecord(table);
        if (!sysId || !gr.get(sysId)) return false;
        return this.canAccessAccount(gr.getValue('account'));
    },

    canAccessAttachment: function (att) {
        if (!this.isRestricted()) return true;
        var t = att.getValue('table_name');
        if (t !== 'sn_customerservice_case' && t !== 'sn_customerservice_task') return true;
        return this.canAccessRecordOf(t, att.getValue('table_sys_id'));
    },

    type: 'CsmAccess'
};`,
})

const SCRIPT_RECORD = `answer = new x_1863667_csm.CsmAccess().canAccessAccount(current.getValue('account'));`

export const caseAccountRead = Acl({
    $id: Now.ID['acl-case-account-read'],
    type: 'record',
    table: 'sn_customerservice_case',
    operation: 'read',
    decisionType: 'deny',
    adminOverrides: true,
    description: 'SP-72: cases are only readable for authorised accounts',
    script: SCRIPT_RECORD,
})

export const caseAccountWrite = Acl({
    $id: Now.ID['acl-case-account-write'],
    type: 'record',
    table: 'sn_customerservice_case',
    operation: 'write',
    decisionType: 'deny',
    adminOverrides: true,
    script: SCRIPT_RECORD,
})

export const taskAccountRead = Acl({
    $id: Now.ID['acl-task-account-read'],
    type: 'record',
    table: 'sn_customerservice_task',
    operation: 'read',
    decisionType: 'deny',
    adminOverrides: true,
    script: SCRIPT_RECORD,
})

export const taskAccountWrite = Acl({
    $id: Now.ID['acl-task-account-write'],
    type: 'record',
    table: 'sn_customerservice_task',
    operation: 'write',
    decisionType: 'deny',
    adminOverrides: true,
    script: SCRIPT_RECORD,
})

export const taskSlaAccountRead = Acl({
    $id: Now.ID['acl-task-sla-account-read'],
    type: 'record',
    table: 'task_sla',
    operation: 'read',
    decisionType: 'deny',
    adminOverrides: true,
    description: 'SP-72: SLA records of cases follow the account restriction',
    script: `var t = current.getValue('task');
answer = true;
if (t) {
    var tr = new GlideRecord('task');
    if (tr.get(t) && (tr.getValue('sys_class_name') === 'sn_customerservice_case' || tr.getValue('sys_class_name') === 'sn_customerservice_task')) {
        answer = new x_1863667_csm.CsmAccess().canAccessRecordOf(tr.getValue('sys_class_name'), t);
    }
}`,
})

export const attachmentAccountRead = Acl({
    $id: Now.ID['acl-attachment-account-read'],
    type: 'record',
    table: 'sys_attachment',
    operation: 'read',
    decisionType: 'deny',
    adminOverrides: true,
    description: 'SP-72: attachments of cases / case tasks follow the account restriction',
    script: `answer = new x_1863667_csm.CsmAccess().canAccessAttachment(current);`,
})

export const emailAccountRead = Acl({
    $id: Now.ID['acl-email-account-read'],
    type: 'record',
    table: 'sys_email',
    operation: 'read',
    decisionType: 'deny',
    adminOverrides: true,
    description: 'SP-72: emails (communications) linked to cases follow the account restriction',
    script: `answer = true;
if (current.getValue('instance') && current.getValue('target_table') === 'sn_customerservice_case') {
    answer = new x_1863667_csm.CsmAccess().canAccessRecordOf('sn_customerservice_case', current.getValue('instance'));
}`,
})

// SP-73: work notes and financial / contract fields are internal-only.
export const workNotesRead = Acl({
    $id: Now.ID['acl-case-worknotes-read'],
    type: 'record',
    table: 'sn_customerservice_case',
    field: 'work_notes',
    operation: 'read',
    decisionType: 'deny',
    roles: ['sn_customerservice_agent', 'sn_customerservice_manager', adminRole, l2Agent, l31Agent, l32Specialist],
    description: 'SP-73: customers / partners cannot see work notes',
})

export const workNotesWrite = Acl({
    $id: Now.ID['acl-case-worknotes-write'],
    type: 'record',
    table: 'sn_customerservice_case',
    field: 'work_notes',
    operation: 'write',
    decisionType: 'deny',
    roles: ['sn_customerservice_agent', 'sn_customerservice_manager', adminRole, l2Agent, l31Agent, l32Specialist],
    description: 'SP-73: customers / partners cannot add work notes',
})

export const taskWorkNotesRead = Acl({
    $id: Now.ID['acl-task-worknotes-read'],
    type: 'record',
    table: 'sn_customerservice_task',
    field: 'work_notes',
    operation: 'read',
    decisionType: 'deny',
    roles: ['sn_customerservice_agent', 'sn_customerservice_manager', adminRole, l2Agent, l31Agent, l32Specialist],
})

export const contractDiscountRead = Acl({
    $id: Now.ID['acl-contract-discount-read'],
    type: 'record',
    table: 'ast_contract',
    field: 'discount',
    operation: 'read',
    decisionType: 'deny',
    roles: ['sn_customerservice_agent', 'sn_customerservice_manager', adminRole, l2Agent, l31Agent, l32Specialist],
    description: 'SP-73: financial / contract fields are internal-only',
})

export const contractPaymentRead = Acl({
    $id: Now.ID['acl-contract-payment-read'],
    type: 'record',
    table: 'ast_contract',
    field: 'payment_amount',
    operation: 'read',
    decisionType: 'deny',
    roles: ['sn_customerservice_agent', 'sn_customerservice_manager', adminRole, l2Agent, l31Agent, l32Specialist],
})

export const contractTotalCostRead = Acl({
    $id: Now.ID['acl-contract-totalcost-read'],
    type: 'record',
    table: 'ast_contract',
    field: 'total_cost',
    operation: 'read',
    decisionType: 'deny',
    roles: ['sn_customerservice_agent', 'sn_customerservice_manager', adminRole, l2Agent, l31Agent, l32Specialist],
})
