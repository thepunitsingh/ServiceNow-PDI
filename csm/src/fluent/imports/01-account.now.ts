import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-19: Accounts import -> customer_account
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_account = Table({
    name: 'x_1863667_csm_stg_account',
    label: 'Accounts Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        account_code: StringColumn({ label: 'Account code', maxLength: 40 }),
        name: StringColumn({ label: 'Account name', maxLength: 160 }),
        parent_account_code: StringColumn({ label: 'Parent account code', maxLength: 40 }),
        classification: StringColumn({ label: 'Classification', maxLength: 80 }),
        owner_user_name: StringColumn({ label: 'Owner (user name)', maxLength: 80 }),
        email: StringColumn({ label: 'Email', maxLength: 100 }),
        phone: StringColumn({ label: 'Phone', maxLength: 40 }),
        street: StringColumn({ label: 'Street', maxLength: 255 }),
        city: StringColumn({ label: 'City', maxLength: 80 }),
        state: StringColumn({ label: 'State', maxLength: 80 }),
        zip: StringColumn({ label: 'Zip', maxLength: 40 }),
        country: StringColumn({ label: 'Country', maxLength: 80 }),
        website: StringColumn({ label: 'Website', maxLength: 255 }),
        active: StringColumn({ label: 'Active', maxLength: 5 }),
    },
})

export const accountDataSource = Record({
    $id: Now.ID['ds-account'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Accounts (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_account',
        import_set_table_label: 'Accounts Import Staging',
        batch_size: 500,
    },
})

export const accountTransform = ImportSet({
    $id: Now.ID['tm-account'],
    name: 'Veridos CSM - Accounts',
    sourceTable: 'x_1863667_csm_stg_account',
    targetTable: 'customer_account',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        account_code: { sourceField: 'account_code', coalesce: true, coalesceCaseSensitive: false },
        name: 'name',
        email: 'email',
        phone: 'phone',
        street: 'street',
        city: 'city',
        state: 'state',
        zip: 'zip',
        country: 'country',
        website: 'website',
        active: 'active',
        x_1863667_csm_classification: 'classification',
        contact: { sourceField: 'owner_user_name', referenceValueField: 'user_name' },
    },
    scripts: [
        {
            $id: Now.ID['tm-account-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['account_code', 'name'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-19 Accounts: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
})(source, map, log, target);`,
        },
        {
            $id: Now.ID['tm-account-after'],
            when: 'onAfter',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var pc = source.parent_account_code ? String(source.parent_account_code).trim() : '';
    if (pc) {
        var parent = new GlideRecord('customer_account');
        parent.addQuery('account_code', pc);
        parent.setLimit(1);
        parent.query();
        if (parent.next()) {
            var acc = new GlideRecord('customer_account');
            if (acc.get(target.sys_id)) { acc.setValue('account_parent', parent.getUniqueValue()); acc.setWorkflow(false); acc.update(); }
        } else {
            log.warn('Account ' + source.account_code + ': parent account ' + pc + ' not found; hierarchy not set.');
        }
    }
})(source, map, log, target);`,
        },
    ],
})
