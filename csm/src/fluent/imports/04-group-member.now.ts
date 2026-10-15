import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-22: Group Members import -> sys_user_grmember
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_group_member = Table({
    name: 'x_1863667_csm_stg_group_member',
    label: 'Group Members Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        group_name: StringColumn({ label: 'Group name', maxLength: 100 }),
        user_name: StringColumn({ label: 'User name', maxLength: 80 }),
    },
})

export const group_memberDataSource = Record({
    $id: Now.ID['ds-group_member'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Group Members (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_group_member',
        import_set_table_label: 'Group Members Import Staging',
        batch_size: 500,
    },
})

export const group_memberTransform = ImportSet({
    $id: Now.ID['tm-group_member'],
    name: 'Veridos CSM - Group Members',
    sourceTable: 'x_1863667_csm_stg_group_member',
    targetTable: 'sys_user_grmember',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        group: { sourceField: 'group_name', referenceValueField: 'name', coalesce: true },
        user: { sourceField: 'user_name', referenceValueField: 'user_name', coalesce: true },
    },
    scripts: [
        {
            $id: Now.ID['tm-group_member-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['group_name', 'user_name'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-22 Group Members: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
    var rgroup_name = new GlideRecord('sys_user_group');
    rgroup_name.addQuery('name', String(source.group_name).trim());
    rgroup_name.setLimit(1);
    rgroup_name.query();
    if (!rgroup_name.hasNext()) {
        ignore = true;
        log.error('SP-22 Group Members: row ' + source.sys_import_row + ' rejected - Group "' + source.group_name + '" not found');
        return;
    }
    var ruser_name = new GlideRecord('sys_user');
    ruser_name.addQuery('user_name', String(source.user_name).trim());
    ruser_name.setLimit(1);
    ruser_name.query();
    if (!ruser_name.hasNext()) {
        ignore = true;
        log.error('SP-22 Group Members: row ' + source.sys_import_row + ' rejected - User "' + source.user_name + '" not found');
        return;
    }
})(source, map, log, target);`,
        },
    ],
})
