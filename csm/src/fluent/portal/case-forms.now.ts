import {
    CatalogItemRecordProducer,
    SingleLineTextVariable,
    MultiLineTextVariable,
    ReferenceVariable,
} from '@servicenow/sdk/core'

// SP-80: standard portal case forms for all accounts. Mandatory fields are enforced by the catalog variables themselves;
// contact and account are auto-filled by the producer script from the signed-in user (not shown to the customer).
// Priority is derived from Impact x Urgency by the matrix business rule, so customers only pick impact / urgency.
// ASSUMPTION: "limit to some accounts" for the product form is done with User Criteria on the item after go-live.
// Catalog / category sys_ids are the OOB "Service Catalog" and are placed on the csmgnd portal via the catalogs list.

const SERVICE_CATALOG = 'e0d08b13c3330100c8b837659bba8fb4'

const AUTOFILL_SCRIPT = `(function executeProducerScript(current, producer) {
    var contact = new GlideRecord('customer_contact');
    contact.addQuery('user', gs.getUserID());
    contact.setLimit(1);
    contact.query();
    if (contact.next()) {
        current.contact = contact.getUniqueValue();
        current.account = contact.getValue('account');
        if (!producer.location && contact.getValue('location')) current.location = contact.getValue('location');
    }
    current.contact_type = 'web';
    current.x_1863667_csm_channel = 'portal';
})(current, producer);`

export const basicCaseForm = CatalogItemRecordProducer({
    $id: Now.ID['rp-case-basic'],
    name: 'Create case',
    shortDescription: 'Raise a support case',
    table: 'sn_customerservice_case',
    catalogs: [SERVICE_CATALOG],
    script: AUTOFILL_SCRIPT,
    redirectUrl: 'generatedRecord',
    variables: {
        short_description: SingleLineTextVariable({
            question: 'Subject',
            mandatory: true,
            mapToField: true,
            field: 'short_description',
            order: 100,
        }),
        description: MultiLineTextVariable({
            question: 'Description',
            mapToField: true,
            field: 'description',
            order: 200,
        }),
        location: ReferenceVariable({
            question: 'Location',
            referenceTable: 'cmn_location',
            mapToField: true,
            field: 'location',
            order: 300,
        }),
    },
})

export const productCaseForm = CatalogItemRecordProducer({
    $id: Now.ID['rp-case-product'],
    name: 'Create case for product',
    shortDescription: 'Raise a case for one of your products',
    table: 'sn_customerservice_case',
    catalogs: [SERVICE_CATALOG],
    script: AUTOFILL_SCRIPT,
    redirectUrl: 'generatedRecord',
    variables: {
        product: ReferenceVariable({
            question: 'Product',
            referenceTable: 'cmdb_model',
            mapToField: true,
            field: 'product',
            order: 100,
        }),
        location: ReferenceVariable({
            question: 'Location',
            referenceTable: 'cmn_location',
            mandatory: true,
            mapToField: true,
            field: 'location',
            order: 200,
        }),
        asset: ReferenceVariable({
            question: 'Asset',
            referenceTable: 'alm_asset',
            mapToField: true,
            field: 'asset',
            order: 300,
        }),
        short_description: SingleLineTextVariable({
            question: 'Subject',
            mandatory: true,
            mapToField: true,
            field: 'short_description',
            order: 400,
        }),
        description: MultiLineTextVariable({
            question: 'Description',
            mapToField: true,
            field: 'description',
            order: 500,
        }),
    },
})

export const installBaseCaseForm = CatalogItemRecordProducer({
    $id: Now.ID['rp-case-install-base'],
    name: 'Create case for install base',
    shortDescription: 'Raise a case for an installed item',
    table: 'sn_customerservice_case',
    catalogs: [SERVICE_CATALOG],
    // account and location are filled from the selected install base item
    script: `(function executeProducerScript(current, producer) {
    var contact = new GlideRecord('customer_contact');
    contact.addQuery('user', gs.getUserID());
    contact.setLimit(1);
    contact.query();
    if (contact.next()) {
        current.contact = contact.getUniqueValue();
        current.account = contact.getValue('account');
        if (!producer.location && contact.getValue('location')) current.location = contact.getValue('location');
    }
    current.contact_type = 'web';
    current.x_1863667_csm_channel = 'portal';
})(current, producer);
(function (current, producer) {
    if (!producer.install_base_item) return;
    var item = new GlideRecord('sn_install_base_item');
    if (item.get(producer.install_base_item)) {
        if (item.getValue('account')) current.account = item.getValue('account');
        if (item.getValue('location')) current.location = item.getValue('location');
        if (item.getValue('asset')) current.asset = item.getValue('asset');
    }
})(current, producer);`,
    redirectUrl: 'generatedRecord',
    variables: {
        install_base_item: ReferenceVariable({
            question: 'Install base item',
            referenceTable: 'sn_install_base_item',
            mandatory: true,
            order: 100,
        }),
        short_description: SingleLineTextVariable({
            question: 'Subject',
            mandatory: true,
            mapToField: true,
            field: 'short_description',
            order: 200,
        }),
        description: MultiLineTextVariable({
            question: 'Description',
            mapToField: true,
            field: 'description',
            order: 300,
        }),
    },
})
