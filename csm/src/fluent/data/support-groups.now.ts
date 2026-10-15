import { Record } from '@servicenow/sdk/core'

// SP-70: tiered assignment groups. Naming standard: "Veridos <tier> - <scope>" (scope = account / location / supplier name).
// Sprint 1's Groups import may already have created groups with these names - the Record coalesces on name so only missing ones are added.
// Each group gets the CSM agent role (sn_customerservice_agent); members come from the Group members import (SP-22).
// The tier is derived from the name (L2 / L3.1 / L3.2) unless x_1863667_csm_tier is set explicitly (see handleEscalation).
// ASSUMPTION: the L2 groups are linked to accounts (x_1863667_csm_account) once the LVA / GEO accounts are imported.

export const grp_l2_lva = Record({
    $id: Now.ID['grp-l2-lva'],
    table: 'sys_user_group',
    data: { name: 'Veridos L2 - LVA', description: 'LVA L2 support', active: true },
})

export const grp_l2_lva_role = Record({
    $id: Now.ID['grp-l2-lva-role'],
    table: 'sys_group_has_role',
    data: { group: grp_l2_lva, role: '3120f52cc312310015519f2974d3ae83' },
})

export const grp_l2_geo = Record({
    $id: Now.ID['grp-l2-geo'],
    table: 'sys_user_group',
    data: { name: 'Veridos L2 - GEO', description: 'GEO L2 support', active: true },
})

export const grp_l2_geo_role = Record({
    $id: Now.ID['grp-l2-geo-role'],
    table: 'sys_group_has_role',
    data: { group: grp_l2_geo, role: '3120f52cc312310015519f2974d3ae83' },
})

export const grp_l31_global = Record({
    $id: Now.ID['grp-l31-global'],
    table: 'sys_user_group',
    data: { name: 'Veridos L3.1 - Global Service & Maintenance', description: 'Global Veridos Service & Maintenance', active: true },
})

export const grp_l31_global_role = Record({
    $id: Now.ID['grp-l31-global-role'],
    table: 'sys_group_has_role',
    data: { group: grp_l31_global, role: '3120f52cc312310015519f2974d3ae83' },
})

export const grp_l32_supplier = Record({
    $id: Now.ID['grp-l32-supplier'],
    table: 'sys_user_group',
    data: { name: 'Veridos L3.2 - Supplier', description: 'Supplier L3.2 specialists', active: true },
})

export const grp_l32_supplier_role = Record({
    $id: Now.ID['grp-l32-supplier-role'],
    table: 'sys_group_has_role',
    data: { group: grp_l32_supplier, role: '3120f52cc312310015519f2974d3ae83' },
})

export const grp_l32_oem = Record({
    $id: Now.ID['grp-l32-oem'],
    table: 'sys_user_group',
    data: { name: 'Veridos L3.2 - OEM', description: 'OEM L3.2 specialists', active: true },
})

export const grp_l32_oem_role = Record({
    $id: Now.ID['grp-l32-oem-role'],
    table: 'sys_group_has_role',
    data: { group: grp_l32_oem, role: '3120f52cc312310015519f2974d3ae83' },
})

export const grp_l32_sid = Record({
    $id: Now.ID['grp-l32-sid'],
    table: 'sys_user_group',
    data: { name: 'Veridos L3.2 - SID', description: 'SID L3.2 specialists', active: true },
})

export const grp_l32_sid_role = Record({
    $id: Now.ID['grp-l32-sid-role'],
    table: 'sys_group_has_role',
    data: { group: grp_l32_sid, role: '3120f52cc312310015519f2974d3ae83' },
})

export const grp_l32_rd = Record({
    $id: Now.ID['grp-l32-rd'],
    table: 'sys_user_group',
    data: { name: 'Veridos L3.2 - R&D', description: 'R&D L3.2 specialists', active: true },
})

export const grp_l32_rd_role = Record({
    $id: Now.ID['grp-l32-rd-role'],
    table: 'sys_group_has_role',
    data: { group: grp_l32_rd, role: '3120f52cc312310015519f2974d3ae83' },
})

export const grp_global_support = Record({
    $id: Now.ID['grp-global-support'],
    table: 'sys_user_group',
    data: { name: 'Veridos Global Support', description: 'Global support users selectable as Case closed by', active: true },
})
