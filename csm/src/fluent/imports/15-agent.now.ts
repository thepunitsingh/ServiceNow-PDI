import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-94: Agents import -> sys_user (coalesce on user_name).
// Agents get workspace access through the CSM agent role carried by their support groups: the onAfter script adds the
// user to the groups listed in group_names ("|" separated), so they inherit sn_customerservice_agent.
// ASSUMPTION: staging columns stand in for the client's agent list. Reconcile source vs. target counts with the
// import set's inserted/updated/ignored/error totals; rejected rows are logged by the onBefore script.

export const x_1863667_csm_stg_agent = Table({
    name: 'x_1863667_csm_stg_agent',
    label: 'Agents Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        user_name: StringColumn({ label: 'User name', maxLength: 80 }),
        first_name: StringColumn({ label: 'First name', maxLength: 80 }),
        last_name: StringColumn({ label: 'Last name', maxLength: 80 }),
        email: StringColumn({ label: 'Email', maxLength: 100 }),
        phone: StringColumn({ label: 'Phone', maxLength: 40 }),
        title: StringColumn({ label: 'Title', maxLength: 80 }),
        active: StringColumn({ label: 'Active', maxLength: 5 }),
        group_names: StringColumn({ label: 'Group names (|-separated)', maxLength: 500 }),
    },
})

export const agentDataSource = Record({
    $id: Now.ID['ds-agent'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Agents (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_agent',
        import_set_table_label: 'Agents Import Staging',
        batch_size: 500,
    },
})

export const agentTransform = ImportSet({
    $id: Now.ID['tm-agent'],
    name: 'Veridos CSM - Agents',
    sourceTable: 'x_1863667_csm_stg_agent',
    targetTable: 'sys_user',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        user_name: { sourceField: 'user_name', coalesce: true, coalesceCaseSensitive: false },
        first_name: 'first_name',
        last_name: 'last_name',
        email: 'email',
        phone: 'phone',
        title: 'title',
        active: 'active',
    },
    scripts: [
        {
            $id: Now.ID['tm-agent-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['user_name', 'last_name', 'email'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-94 Agents: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
})(source, map, log, target);`,
        },
        {
            $id: Now.ID['tm-agent-groups'],
            when: 'onAfter',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var names = String(source.group_names || '').split('|');
    for (var i = 0; i < names.length; i++) {
        var name = names[i].trim();
        if (!name) continue;
        var group = new GlideRecord('sys_user_group');
        group.addQuery('name', name);
        group.setLimit(1);
        group.query();
        if (!group.next()) {
            log.error('SP-94 Agents: row ' + source.sys_import_row + ' - group "' + name + '" not found');
            continue;
        }
        var member = new GlideRecord('sys_user_grmember');
        member.addQuery('user', target.sys_id);
        member.addQuery('group', group.getUniqueValue());
        member.setLimit(1);
        member.query();
        if (!member.hasNext()) {
            member.initialize();
            member.setValue('user', target.sys_id);
            member.setValue('group', group.getUniqueValue());
            member.insert();
        }
    }
})(source, map, log, target);`,
        },
    ],
})
