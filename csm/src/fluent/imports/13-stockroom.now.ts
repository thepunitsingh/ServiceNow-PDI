import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-54: Stockroom setup using import set -> alm_stockroom
// ASSUMPTION: staging columns stand in for the client's stockroom list (name, location, manager, type).

export const x_1863667_csm_stg_stockroom = Table({
    name: 'x_1863667_csm_stg_stockroom',
    label: 'Stockrooms Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        name: StringColumn({ label: 'Stockroom name', maxLength: 100 }),
        location_code: StringColumn({ label: 'Location code', maxLength: 40 }),
        manager_user_name: StringColumn({ label: 'Manager (user name)', maxLength: 80 }),
        stockroom_type: StringColumn({ label: 'Stockroom type', maxLength: 80 }),
        account_code: StringColumn({ label: 'Account code', maxLength: 40 }),
    },
})

export const stockroomDataSource = Record({
    $id: Now.ID['ds-stockroom'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Stockrooms (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_stockroom',
        import_set_table_label: 'Stockrooms Import Staging',
        batch_size: 500,
    },
})

export const stockroomTransform = ImportSet({
    $id: Now.ID['tm-stockroom'],
    name: 'Veridos CSM - Stockrooms',
    sourceTable: 'x_1863667_csm_stg_stockroom',
    targetTable: 'alm_stockroom',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        name: { sourceField: 'name', coalesce: true, coalesceCaseSensitive: false },
        location: { sourceField: 'location_code', referenceValueField: 'correlation_id' },
        manager: { sourceField: 'manager_user_name', referenceValueField: 'user_name' },
        type: { sourceField: 'stockroom_type', choiceAction: 'ignore' },
    },
    scripts: [
        {
            $id: Now.ID['tm-stockroom-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    if (!source.name || String(source.name).trim() === '') {
        ignore = true;
        log.error('SP-54 Stockrooms: row ' + source.sys_import_row + ' rejected - missing mandatory field name');
    }
})(source, map, log, target);`,
        },
    ],
})
