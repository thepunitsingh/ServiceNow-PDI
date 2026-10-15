import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-24: Contracts import -> ast_contract
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_contract = Table({
    name: 'x_1863667_csm_stg_contract',
    label: 'Contracts Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        contract_number: StringColumn({ label: 'Contract number', maxLength: 40 }),
        account_code: StringColumn({ label: 'Account code', maxLength: 40 }),
        short_description: StringColumn({ label: 'Short description', maxLength: 160 }),
        description: StringColumn({ label: 'Description', maxLength: 1000 }),
        starts: StringColumn({ label: 'Start date', maxLength: 20 }),
        ends: StringColumn({ label: 'End date', maxLength: 20 }),
        po_number: StringColumn({ label: 'PO number', maxLength: 40 }),
        total_cost: StringColumn({ label: 'Total cost', maxLength: 20 }),
        active: StringColumn({ label: 'Active', maxLength: 5 }),
    },
})

export const contractDataSource = Record({
    $id: Now.ID['ds-contract'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Contracts (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_contract',
        import_set_table_label: 'Contracts Import Staging',
        batch_size: 500,
    },
})

export const contractTransform = ImportSet({
    $id: Now.ID['tm-contract'],
    name: 'Veridos CSM - Contracts',
    sourceTable: 'x_1863667_csm_stg_contract',
    targetTable: 'ast_contract',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        number: { sourceField: 'contract_number', coalesce: true, coalesceCaseSensitive: false },
        short_description: 'short_description',
        description: 'description',
        starts: { sourceField: 'starts', dateFormat: 'yyyy-MM-dd' },
        ends: { sourceField: 'ends', dateFormat: 'yyyy-MM-dd' },
        po_number: 'po_number',
        total_cost: 'total_cost',
        active: 'active',
        account: { sourceField: 'account_code', referenceValueField: 'account_code' },
    },
    scripts: [
        {
            $id: Now.ID['tm-contract-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['contract_number', 'account_code'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-24 Contracts: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
    var raccount_code = new GlideRecord('customer_account');
    raccount_code.addQuery('account_code', String(source.account_code).trim());
    raccount_code.setLimit(1);
    raccount_code.query();
    if (!raccount_code.hasNext()) {
        ignore = true;
        log.error('SP-24 Contracts: row ' + source.sys_import_row + ' rejected - Account "' + source.account_code + '" not found');
        return;
    }
})(source, map, log, target);`,
        },
    ],
})
