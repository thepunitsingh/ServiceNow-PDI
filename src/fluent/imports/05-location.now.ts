import { Table, Record, ImportSet, StringColumn } from '@servicenow/sdk/core'

// SP-23: Locations import -> cmn_location
// ASSUMPTION: staging columns below stand in for the client's source field list; adjust when the client file layout is confirmed.

export const x_1863667_csm_stg_location = Table({
    name: 'x_1863667_csm_stg_location',
    label: 'Locations Import Staging',
    extends: 'sys_import_set_row',
    schema: {
        location_code: StringColumn({ label: 'Location code', maxLength: 40 }),
        name: StringColumn({ label: 'Location name', maxLength: 100 }),
        street: StringColumn({ label: 'Street', maxLength: 255 }),
        city: StringColumn({ label: 'City', maxLength: 80 }),
        state: StringColumn({ label: 'State', maxLength: 80 }),
        zip: StringColumn({ label: 'Zip', maxLength: 40 }),
        country: StringColumn({ label: 'Country', maxLength: 80 }),
        phone: StringColumn({ label: 'Phone', maxLength: 40 }),
        time_zone: StringColumn({ label: 'Time zone', maxLength: 40 }),
        latitude: StringColumn({ label: 'Latitude', maxLength: 20 }),
        longitude: StringColumn({ label: 'Longitude', maxLength: 20 }),
        parent_location_code: StringColumn({ label: 'Parent location code', maxLength: 40 }),
        account_name: StringColumn({ label: 'Account name', maxLength: 160 }),
    },
})

export const locationDataSource = Record({
    $id: Now.ID['ds-location'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Locations (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_location',
        import_set_table_label: 'Locations Import Staging',
        batch_size: 500,
    },
})

export const locationTransform = ImportSet({
    $id: Now.ID['tm-location'],
    name: 'Veridos CSM - Locations',
    sourceTable: 'x_1863667_csm_stg_location',
    targetTable: 'cmn_location',
    active: true,
    runBusinessRules: false,
    enforceMandatoryFields: 'onlyMappedFields',
    createOnEmptyCoalesce: true,
    copyEmptyFields: false,
    fields: {
        correlation_id: { sourceField: 'location_code', coalesce: true, coalesceCaseSensitive: false },
        name: 'name',
        street: 'street',
        city: 'city',
        state: 'state',
        zip: 'zip',
        country: 'country',
        phone: 'phone',
        time_zone: 'time_zone',
        latitude: 'latitude',
        longitude: 'longitude',
        company: { sourceField: 'account_name', referenceValueField: 'name' },
    },
    scripts: [
        {
            $id: Now.ID['tm-location-validate'],
            when: 'onBefore',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var required = ['location_code', 'name'];
    for (var i = 0; i < required.length; i++) {
        var v = source[required[i]];
        if (v === undefined || v === null || String(v).trim() === '') {
            ignore = true;
            log.error('SP-23 Locations: row ' + source.sys_import_row + ' rejected - missing mandatory field ' + required[i]);
            return;
        }
    }
})(source, map, log, target);`,
        },
        {
            $id: Now.ID['tm-location-after'],
            when: 'onAfter',
            order: 100,
            active: true,
            script: `(function runTransformScript(source, map, log, target) {
    var pc = source.parent_location_code ? String(source.parent_location_code).trim() : '';
    if (pc) {
        var parent = new GlideRecord('cmn_location');
        parent.addQuery('correlation_id', pc);
        parent.setLimit(1);
        parent.query();
        var loc = new GlideRecord('cmn_location');
        if (parent.next() && loc.get(target.sys_id)) { loc.setValue('parent', parent.getUniqueValue()); loc.setWorkflow(false); loc.update(); }
    }
})(source, map, log, target);`,
        },
    ],
})
