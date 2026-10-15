import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-29: Installed Products import -> sn_install_base_m2m_installed_product
// ASSUMPTION: sn_install_base_* tables are not present on dev181171; field names are assumptions to verify once Install Base is activated.
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_installed_product = Table({
    name: 'x_1863667_csm_stg_installed_product',
    label: 'Installed Products Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        sold_product_id: StringColumn({ label: 'Sold product ID', maxLength: 40 }),
        item_id: StringColumn({ label: 'Install base item ID', maxLength: 40 }),
    },
})

export const installed_productDataSource = Record({
    $id: Now.ID['ds-installed_product'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Installed Products (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_installed_product',
        import_set_table_label: 'Installed Products Import Staging',
        batch_size: 500,
    },
})

export const installed_productTransform = ImportSet({
    $id: Now.ID['tm-installed_product'],
    name: 'Veridos CSM - Installed Products',
    sourceTable: 'x_1863667_csm_stg_installed_product',
    targetTable: 'sn_install_base_m2m_installed_product',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        sold_product: { sourceField: 'sold_product_id', referenceValueField: 'number', coalesce: true },
        install_base_item: { sourceField: 'item_id', referenceValueField: 'number', coalesce: true },
    },
    scripts: [
        {
            $id: Now.ID['tm-installed_product-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['sold_product_id', 'item_id'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-29 Installed Products: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
    var rsold_product_id = new GlideRecord('sn_install_base_sold_product');
    rsold_product_id.addQuery('number', String(source.sold_product_id).trim());
    rsold_product_id.setLimit(1);
    rsold_product_id.query();
    if (!rsold_product_id.hasNext()) {
        ignore = true;
        log.error('SP-29 Installed Products: row ' + source.sys_import_row + ' rejected - Sold product "' + source.sold_product_id + '" not found');
        return;
    }
    var ritem_id = new GlideRecord('sn_install_base_item');
    ritem_id.addQuery('number', String(source.item_id).trim());
    ritem_id.setLimit(1);
    ritem_id.query();
    if (!ritem_id.hasNext()) {
        ignore = true;
        log.error('SP-29 Installed Products: row ' + source.sys_import_row + ' rejected - Install base item "' + source.item_id + '" not found');
        return;
    }
})(source, map, log, target);`,
        },
    ],
})
