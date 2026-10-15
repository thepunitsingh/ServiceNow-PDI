import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-20: Contacts import -> customer_contact
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_contact = Table({
    name: 'x_1863667_csm_stg_contact',
    label: 'Contacts Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        user_name: StringColumn({ label: 'User name', maxLength: 80 }),
        first_name: StringColumn({ label: 'First name', maxLength: 80 }),
        last_name: StringColumn({ label: 'Last name', maxLength: 80 }),
        email: StringColumn({ label: 'Email', maxLength: 100 }),
        phone: StringColumn({ label: 'Phone', maxLength: 40 }),
        mobile_phone: StringColumn({ label: 'Mobile phone', maxLength: 40 }),
        title: StringColumn({ label: 'Title', maxLength: 100 }),
        account_code: StringColumn({ label: 'Account code', maxLength: 40 }),
        active: StringColumn({ label: 'Active', maxLength: 5 }),
    },
})

export const contactDataSource = Record({
    $id: Now.ID['ds-contact'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Contacts (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_contact',
        import_set_table_label: 'Contacts Import Staging',
        batch_size: 500,
    },
})

export const contactTransform = ImportSet({
    $id: Now.ID['tm-contact'],
    name: 'Veridos CSM - Contacts',
    sourceTable: 'x_1863667_csm_stg_contact',
    targetTable: 'customer_contact',
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
        mobile_phone: 'mobile_phone',
        title: 'title',
        active: 'active',
        account: { sourceField: 'account_code', referenceValueField: 'account_code' },
    },
    scripts: [
        {
            $id: Now.ID['tm-contact-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['user_name', 'last_name', 'account_code'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-20 Contacts: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
    var raccount_code = new GlideRecord('customer_account');
    raccount_code.addQuery('account_code', String(source.account_code).trim());
    raccount_code.setLimit(1);
    raccount_code.query();
    if (!raccount_code.hasNext()) {
        ignore = true;
        log.error('SP-20 Contacts: row ' + source.sys_import_row + ' rejected - Account "' + source.account_code + '" not found');
        return;
    }
})(source, map, log, target);`,
        },
    ],
})
