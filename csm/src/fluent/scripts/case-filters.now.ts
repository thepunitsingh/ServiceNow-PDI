import { ScriptInclude, Record } from '@servicenow/sdk/core'

// SP-33 / SP-34 / SP-46 / SP-47 / SP-91: account-based reference qualifiers on the Case form.
// Each qualifier returns an empty result set until an Account is selected (AC 3).
export const caseFilters = ScriptInclude({
    $id: Now.ID['si-case-filters'],
    name: 'CsmCaseFilters',
    apiName: 'x_1863667_csm.CsmCaseFilters',
    active: true,
    accessibleFrom: 'package_private',
    description: 'Reference qualifiers for account-based filtering on the Case form',
    script: `var CsmCaseFilters = Class.create();
CsmCaseFilters.prototype = {
    initialize: function () {},

    NONE: 'sys_id=-1',

    _account: function (current) {
        return current && current.account ? current.account.toString() : '';
    },

    // Product (cmdb_model): models sold to / installed for the account.
    productQualifier: function (current) {
        var account = this._account(current);
        if (!account) return this.NONE;
        var ids = {};
        var tables = [
            { table: 'sn_install_base_sold_product', accountField: 'account', modelField: 'product_model' },
            { table: 'sn_install_base_item', accountField: 'account', modelField: 'model' }
        ];
        for (var i = 0; i < tables.length; i++) {
            var t = tables[i];
            if (!new GlideTableDescriptor(t.table).isValid()) continue;
            var gr = new GlideRecord(t.table);
            gr.addQuery(t.accountField, account);
            gr.addNotNullQuery(t.modelField);
            gr.query();
            while (gr.next()) ids[gr.getValue(t.modelField)] = true;
        }
        var list = Object.keys(ids);
        return list.length ? 'sys_idIN' + list.join(',') : this.NONE;
    },

    // Assignment group: groups mapped to the account (x_1863667_csm_account) plus unmapped global groups are NOT included.
    groupQualifier: function (current) {
        var account = this._account(current);
        if (!account) return this.NONE;
        return 'x_1863667_csm_account=' + account;
    },

    // Parent case: same account, not the case itself.
    parentQualifier: function (current) {
        var account = this._account(current);
        if (!account) return this.NONE;
        var q = 'account=' + account;
        if (current && current.sys_id && !current.isNewRecord()) q += '^sys_id!=' + current.sys_id;
        return q;
    },

    // Case closed by: members of the account's support groups + members of the configured global support group.
    closedByQualifier: function (current) {
        var account = this._account(current);
        var groups = [];
        if (account) {
            var g = new GlideRecord('sys_user_group');
            g.addQuery('x_1863667_csm_account', account);
            g.query();
            while (g.next()) groups.push(g.getUniqueValue());
        }
        var globalName = gs.getProperty('x_1863667_csm.global_support_group', 'Veridos Global Support');
        var gg = new GlideRecord('sys_user_group');
        gg.addQuery('name', globalName);
        gg.query();
        while (gg.next()) groups.push(gg.getUniqueValue());
        if (!groups.length) return this.NONE;
        var users = {};
        var m = new GlideRecord('sys_user_grmember');
        m.addQuery('group', 'IN', groups.join(','));
        m.query();
        while (m.next()) users[m.getValue('user')] = true;
        var list = Object.keys(users);
        return list.length ? 'sys_idIN' + list.join(',') : this.NONE;
    },

    type: 'CsmCaseFilters'
};`,
})

export const productOverride = Record({
    $id: Now.ID['dict-ovr-case-product'],
    table: 'sys_dictionary_override',
    data: {
        base_table: 'task',
        name: 'sn_customerservice_case',
        element: 'product',
        reference_qual_override: true,
        reference_qual: 'javascript:new x_1863667_csm.CsmCaseFilters().productQualifier(current)',
    },
})

export const groupOverride = Record({
    $id: Now.ID['dict-ovr-case-group'],
    table: 'sys_dictionary_override',
    data: {
        base_table: 'task',
        name: 'sn_customerservice_case',
        element: 'assignment_group',
        reference_qual_override: true,
        reference_qual: 'javascript:new x_1863667_csm.CsmCaseFilters().groupQualifier(current)',
    },
})

export const parentOverride = Record({
    $id: Now.ID['dict-ovr-case-parent'],
    table: 'sys_dictionary_override',
    data: {
        base_table: 'task',
        name: 'sn_customerservice_case',
        element: 'parent',
        reference_qual_override: true,
        reference_qual: 'javascript:new x_1863667_csm.CsmCaseFilters().parentQualifier(current)',
    },
})

