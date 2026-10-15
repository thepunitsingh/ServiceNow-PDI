import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-30: Entitlements import -> service_entitlement
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_entitlement = Table({
    name: 'x_1863667_csm_stg_entitlement',
    label: 'Entitlements Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        entitlement_name: StringColumn({ label: 'Entitlement name', maxLength: 100 }),
        account_code: StringColumn({ label: 'Account code', maxLength: 40 }),
        contract_number: StringColumn({ label: 'Contract number', maxLength: 40 }),
        model_number: StringColumn({ label: 'Product model number', maxLength: 80 }),
        asset_tag: StringColumn({ label: 'Asset tag', maxLength: 80 }),
        start_date: StringColumn({ label: 'Start date', maxLength: 20 }),
        end_date: StringColumn({ label: 'End date', maxLength: 20 }),
        total_units: StringColumn({ label: 'Total units', maxLength: 10 }),
        active: StringColumn({ label: 'Active', maxLength: 5 }),
    },
})

export const entitlementDataSource = Record({
    $id: Now.ID['ds-entitlement'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Entitlements (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_entitlement',
        import_set_table_label: 'Entitlements Import Staging',
        batch_size: 500,
    },
})

export const entitlementTransform = ImportSet({
    $id: Now.ID['tm-entitlement'],
    name: 'Veridos CSM - Entitlements',
    sourceTable: 'x_1863667_csm_stg_entitlement',
    targetTable: 'service_entitlement',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        entitlement_name: { sourceField: 'entitlement_name', coalesce: true, coalesceCaseSensitive: false },
        start_date: { sourceField: 'start_date', dateFormat: 'yyyy-MM-dd' },
        end_date: { sourceField: 'end_date', dateFormat: 'yyyy-MM-dd' },
        total_units: 'total_units',
        active: 'active',
        account: { sourceField: 'account_code', referenceValueField: 'account_code', coalesce: true },
        contract: { sourceField: 'contract_number', referenceValueField: 'number' },
        product: { sourceField: 'model_number', referenceValueField: 'model_number' },
        asset: { sourceField: 'asset_tag', referenceValueField: 'asset_tag' },
    },
    scripts: [
        {
            $id: Now.ID['tm-entitlement-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['entitlement_name', 'account_code'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-30 Entitlements: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
    var raccount_code = new GlideRecord('customer_account');
    raccount_code.addQuery('account_code', String(source.account_code).trim());
    raccount_code.setLimit(1);
    raccount_code.query();
    if (!raccount_code.hasNext()) {
        ignore = true;
        log.error('SP-30 Entitlements: row ' + source.sys_import_row + ' rejected - Account "' + source.account_code + '" not found');
        return;
    }
})(source, map, log, target);`,
        },
    ],
})
