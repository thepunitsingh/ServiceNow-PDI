import { Record } from '@servicenow/sdk/core'

// SP-75: agreed Impact x Urgency x Priority mapping (ASSUMPTION: standard 3x3 matrix, P5 folded into P4 because SLAs exist for P1-P4).

export const matrix11 = Record({
    $id: Now.ID['pm-1-1'],
    table: 'x_1863667_csm_priority_matrix',
    data: { impact: 1, urgency: 1, priority: 1 },
})

export const matrix12 = Record({
    $id: Now.ID['pm-1-2'],
    table: 'x_1863667_csm_priority_matrix',
    data: { impact: 1, urgency: 2, priority: 2 },
})

export const matrix13 = Record({
    $id: Now.ID['pm-1-3'],
    table: 'x_1863667_csm_priority_matrix',
    data: { impact: 1, urgency: 3, priority: 3 },
})

export const matrix21 = Record({
    $id: Now.ID['pm-2-1'],
    table: 'x_1863667_csm_priority_matrix',
    data: { impact: 2, urgency: 1, priority: 2 },
})

export const matrix22 = Record({
    $id: Now.ID['pm-2-2'],
    table: 'x_1863667_csm_priority_matrix',
    data: { impact: 2, urgency: 2, priority: 3 },
})

export const matrix23 = Record({
    $id: Now.ID['pm-2-3'],
    table: 'x_1863667_csm_priority_matrix',
    data: { impact: 2, urgency: 3, priority: 4 },
})

export const matrix31 = Record({
    $id: Now.ID['pm-3-1'],
    table: 'x_1863667_csm_priority_matrix',
    data: { impact: 3, urgency: 1, priority: 3 },
})

export const matrix32 = Record({
    $id: Now.ID['pm-3-2'],
    table: 'x_1863667_csm_priority_matrix',
    data: { impact: 3, urgency: 2, priority: 4 },
})

export const matrix33 = Record({
    $id: Now.ID['pm-3-3'],
    table: 'x_1863667_csm_priority_matrix',
    data: { impact: 3, urgency: 3, priority: 4 },
})
