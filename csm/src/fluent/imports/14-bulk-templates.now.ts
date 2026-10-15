import { Record } from '@servicenow/sdk/core'

// SP-56: one data source per programme (LVA / GEO) for assets and install base items, loading into the Sprint 1
// staging tables so the existing transform maps are reused. CSV header templates live in csm/templates/.

export const lvaassetDataSource = Record({
    $id: Now.ID['ds-lva-asset'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Assets LVA (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_asset',
        import_set_table_label: 'Assets Import Staging',
        batch_size: 500,
    },
})

export const lvainstallbaseDataSource = Record({
    $id: Now.ID['ds-lva-install-base'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Install base items LVA (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_install_base_item',
        import_set_table_label: 'Install base items Import Staging',
        batch_size: 500,
    },
})

export const geoassetDataSource = Record({
    $id: Now.ID['ds-geo-asset'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Assets GEO (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_asset',
        import_set_table_label: 'Assets Import Staging',
        batch_size: 500,
    },
})

export const geoinstallbaseDataSource = Record({
    $id: Now.ID['ds-geo-install-base'],
    table: 'sys_data_source',
    data: {
        name: 'Veridos CSM - Install base items GEO (CSV)',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_1863667_csm_stg_install_base_item',
        import_set_table_label: 'Install base items Import Staging',
        batch_size: 500,
    },
})
