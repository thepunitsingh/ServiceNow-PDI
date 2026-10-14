import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-26: Sold Products import -> sn_install_base_sold_product
// ASSUMPTION: sn_install_base_* tables are not present on dev181171; field names are assumptions to verify once Install Base is activated.
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_sold_product = Table({
    name: 'x_1863667_csm_stg_sold_product',
    label: 'Sold Products Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        sold_product_id: StringColumn({ label: 'Sold product ID', maxLength: 40 }),
        account_code: StringColumn({ label: 'Account code', maxLength: 40 }),
        model_number: StringColumn({ label: 'Model number', maxLength: 80 }),
        quantity: StringColumn({ label: 'Quantity', maxLength: 10 }),
        sold_date: StringColumn({ label: 'Sold date', maxLength: 20 }),
        contract_number: StringColumn({ label: 'Contract number', maxLength: 40 }),
    },
})

export const sold_productDataSource = Record({
    $id: Now.ID['ds-sold_product'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Sold Products (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_sold_product',
        import_set_table_label: 'Sold Products Import Staging',
        batch_size: 500,
    },
})

export const sold_productTransform = ImportSet({
    $id: Now.ID['tm-sold_product'],
    name: 'Veridos CSM - Sold Products',
    sourceTable: 'x_1863667_csm_stg_sold_product',
    targetTable: 'sn_install_base_sold_product',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        number: { sourceField: 'sold_product_id', coalesce: true, coalesceCaseSensitive: false },
        quantity: 'quantity',
        sold_date: { sourceField: 'sold_date', dateFormat: 'yyyy-MM-dd' },
        account: { sourceField: 'account_code', referenceValueField: 'account_code' },
        product: { sourceField: 'model_number', referenceValueField: 'model_number' },
        contract: { sourceField: 'contract_number', referenceValueField: 'number' },
    },
    scripts: [
        {
            $id: Now.ID['tm-sold_product-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['sold_product_id', 'account_code', 'model_number'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-26 Sold Products: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
    var raccount_code = new GlideRecord('customer_account');
    raccount_code.addQuery('account_code', String(source.account_code).trim());
    raccount_code.setLimit(1);
    raccount_code.query();
    if (!raccount_code.hasNext()) {
        ignore = true;
        log.error('SP-26 Sold Products: row ' + source.sys_import_row + ' rejected - Account "' + source.account_code + '" not found');
        return;
    }
    var rmodel_number = new GlideRecord('cmdb_model');
    rmodel_number.addQuery('model_number', String(source.model_number).trim());
    rmodel_number.setLimit(1);
    rmodel_number.query();
    if (!rmodel_number.hasNext()) {
        ignore = true;
        log.error('SP-26 Sold Products: row ' + source.sys_import_row + ' rejected - Product model "' + source.model_number + '" not found');
        return;
    }
})(source, map, log, target);`,
        },
    ],
})
