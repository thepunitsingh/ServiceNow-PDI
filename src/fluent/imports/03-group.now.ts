import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-21: Groups import -> sys_user_group
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_group = Table({
    name: 'x_1863667_csm_stg_group',
    label: 'Groups Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        name: StringColumn({ label: 'Group name', maxLength: 100 }),
        description: StringColumn({ label: 'Description', maxLength: 255 }),
        email: StringColumn({ label: 'Email', maxLength: 100 }),
        manager_user_name: StringColumn({ label: 'Manager (user name)', maxLength: 80 }),
        parent_group_name: StringColumn({ label: 'Parent group name', maxLength: 100 }),
        active: StringColumn({ label: 'Active', maxLength: 5 }),
    },
})

export const groupDataSource = Record({
    $id: Now.ID['ds-group'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Groups (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_group',
        import_set_table_label: 'Groups Import Staging',
        batch_size: 500,
    },
})

export const groupTransform = ImportSet({
    $id: Now.ID['tm-group'],
    name: 'Veridos CSM - Groups',
    sourceTable: 'x_1863667_csm_stg_group',
    targetTable: 'sys_user_group',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        name: { sourceField: 'name', coalesce: true, coalesceCaseSensitive: false },
        description: 'description',
        email: 'email',
        active: 'active',
        manager: { sourceField: 'manager_user_name', referenceValueField: 'user_name' },
    },
    scripts: [
        {
            $id: Now.ID['tm-group-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['name'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-21 Groups: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
})(source, map, log, target);`,
        },
        {
            $id: Now.ID['tm-group-after'],
            when: 'onAfter',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var pn = source.parent_group_name ? String(source.parent_group_name).trim() : '';
    if (pn) {
        var parent = new GlideRecord('sys_user_group');
        parent.addQuery('name', pn);
        parent.setLimit(1);
        parent.query();
        var grp = new GlideRecord('sys_user_group');
        if (parent.next() && grp.get(target.sys_id)) { grp.setValue('parent', parent.getUniqueValue()); grp.setWorkflow(false); grp.update(); }
    }
    // Every imported group gets the Customer Service Agent role so cases can be assigned to it.
    var role = new GlideRecord('sys_user_role');
    if (role.get('name', 'sn_customerservice_agent')) {
        var ghr = new GlideRecord('sys_group_has_role');
        ghr.addQuery('group', target.sys_id);
        ghr.addQuery('role', role.getUniqueValue());
        ghr.setLimit(1);
        ghr.query();
        if (!ghr.hasNext()) {
            ghr.initialize();
            ghr.setValue('group', target.sys_id);
            ghr.setValue('role', role.getUniqueValue());
            ghr.insert();
        }
    } else {
        log.error('Role sn_customerservice_agent not found; group ' + source.name + ' has no role.');
    }
})(source, map, log, target);`,
        },
    ],
})
