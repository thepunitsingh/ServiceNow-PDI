import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-27: Assets import -> alm_asset
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_asset = Table({
    name: 'x_1863667_csm_stg_asset',
    label: 'Assets Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        asset_tag: StringColumn({ label: 'Asset tag', maxLength: 80 }),
        serial_number: StringColumn({ label: 'Serial number', maxLength: 100 }),
        model_number: StringColumn({ label: 'Model number', maxLength: 80 }),
        account_code: StringColumn({ label: 'Account code', maxLength: 40 }),
        location_code: StringColumn({ label: 'Location code', maxLength: 40 }),
        install_status: StringColumn({ label: 'Install status', maxLength: 40 }),
        install_date: StringColumn({ label: 'Install date', maxLength: 20 }),
        warranty_expiration: StringColumn({ label: 'Warranty expiration', maxLength: 20 }),
    },
})

export const assetDataSource = Record({
    $id: Now.ID['ds-asset'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Assets (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_asset',
        import_set_table_label: 'Assets Import Staging',
        batch_size: 500,
    },
})

export const assetTransform = ImportSet({
    $id: Now.ID['tm-asset'],
    name: 'Veridos CSM - Assets',
    sourceTable: 'x_1863667_csm_stg_asset',
    targetTable: 'alm_asset',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        asset_tag: { sourceField: 'asset_tag', coalesce: true, coalesceCaseSensitive: false },
        serial_number: 'serial_number',
        install_status: { sourceField: 'install_status', choiceAction: 'reject' },
        install_date: { sourceField: 'install_date', dateFormat: 'yyyy-MM-dd' },
        warranty_expiration: { sourceField: 'warranty_expiration', dateFormat: 'yyyy-MM-dd' },
        model: { sourceField: 'model_number', referenceValueField: 'model_number' },
        account: { sourceField: 'account_code', referenceValueField: 'account_code' },
        location: { sourceField: 'location_code', referenceValueField: 'correlation_id' },
    },
    scripts: [
        {
            $id: Now.ID['tm-asset-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['asset_tag', 'model_number'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-27 Assets: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
    var rmodel_number = new GlideRecord('cmdb_model');
    rmodel_number.addQuery('model_number', String(source.model_number).trim());
    rmodel_number.setLimit(1);
    rmodel_number.query();
    if (!rmodel_number.hasNext()) {
        ignore = true;
        log.error('SP-27 Assets: row ' + source.sys_import_row + ' rejected - Product model "' + source.model_number + '" not found');
        return;
    }
})(source, map, log, target);`,
        },
    ],
})
