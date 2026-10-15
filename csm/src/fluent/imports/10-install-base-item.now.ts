import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-28: Install Base Items import -> sn_install_base_item
// ASSUMPTION: sn_install_base_* tables are not present on dev181171; field names are assumptions to verify once Install Base is activated.
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_install_base_item = Table({
    name: 'x_1863667_csm_stg_install_base_item',
    label: 'Install Base Items Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        item_id: StringColumn({ label: 'Install base item ID', maxLength: 40 }),
        account_code: StringColumn({ label: 'Account code', maxLength: 40 }),
        sold_product_id: StringColumn({ label: 'Sold product ID', maxLength: 40 }),
        model_number: StringColumn({ label: 'Model number', maxLength: 80 }),
        asset_tag: StringColumn({ label: 'Asset tag', maxLength: 80 }),
        serial_number: StringColumn({ label: 'Serial number', maxLength: 100 }),
        install_date: StringColumn({ label: 'Install date', maxLength: 20 }),
    },
})

export const install_base_itemDataSource = Record({
    $id: Now.ID['ds-install_base_item'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Install Base Items (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_install_base_item',
        import_set_table_label: 'Install Base Items Import Staging',
        batch_size: 500,
    },
})

export const install_base_itemTransform = ImportSet({
    $id: Now.ID['tm-install_base_item'],
    name: 'Veridos CSM - Install Base Items',
    sourceTable: 'x_1863667_csm_stg_install_base_item',
    targetTable: 'sn_install_base_item',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        number: { sourceField: 'item_id', coalesce: true, coalesceCaseSensitive: false },
        serial_number: 'serial_number',
        install_date: { sourceField: 'install_date', dateFormat: 'yyyy-MM-dd' },
        account: { sourceField: 'account_code', referenceValueField: 'account_code' },
        sold_product: { sourceField: 'sold_product_id', referenceValueField: 'number' },
        product: { sourceField: 'model_number', referenceValueField: 'model_number' },
        asset: { sourceField: 'asset_tag', referenceValueField: 'asset_tag' },
    },
    scripts: [
        {
            $id: Now.ID['tm-install_base_item-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['item_id', 'account_code'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-28 Install Base Items: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
    var raccount_code = new GlideRecord('customer_account');
    raccount_code.addQuery('account_code', String(source.account_code).trim());
    raccount_code.setLimit(1);
    raccount_code.query();
    if (!raccount_code.hasNext()) {
        ignore = true;
        log.error('SP-28 Install Base Items: row ' + source.sys_import_row + ' rejected - Account "' + source.account_code + '" not found');
        return;
    }
})(source, map, log, target);`,
        },
    ],
})
