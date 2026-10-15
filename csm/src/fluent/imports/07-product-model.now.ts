import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-25: Product Models import -> cmdb_model
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_product_model = Table({
    name: 'x_1863667_csm_stg_product_model',
    label: 'Product Models Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        model_number: StringColumn({ label: 'Model number', maxLength: 80 }),
        name: StringColumn({ label: 'Model name', maxLength: 100 }),
        manufacturer_name: StringColumn({ label: 'Manufacturer name', maxLength: 100 }),
        description: StringColumn({ label: 'Description', maxLength: 1000 }),
    },
})

export const product_modelDataSource = Record({
    $id: Now.ID['ds-product_model'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Product Models (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_product_model',
        import_set_table_label: 'Product Models Import Staging',
        batch_size: 500,
    },
})

export const product_modelTransform = ImportSet({
    $id: Now.ID['tm-product_model'],
    name: 'Veridos CSM - Product Models',
    sourceTable: 'x_1863667_csm_stg_product_model',
    targetTable: 'cmdb_model',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        name: { sourceField: 'name', coalesce: true, coalesceCaseSensitive: false },
        model_number: { sourceField: 'model_number', coalesce: true, coalesceCaseSensitive: false },
        short_description: 'description',
        manufacturer: { sourceField: 'manufacturer_name', referenceValueField: 'name' },
    },
    scripts: [
        {
            $id: Now.ID['tm-product_model-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['model_number', 'name'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-25 Product Models: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
})(source, map, log, target);`,
        },
    ],
})
