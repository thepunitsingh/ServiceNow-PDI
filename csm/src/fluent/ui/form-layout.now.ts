import { Record } from '@servicenow/sdk/core'

// Adds the Veridos fields to the existing OOB Case form (Default view) without redefining the form.
// Section sys_ids are the OOB sections of sn_customerservice_case in the Default view:
//   9484277dc312310015519f2974d3aecd = main section, 6b6a0163eb123100a618afcef106fea2 = Closure Information.
export const feChannel = Record({
    $id: Now.ID['fe-case-channel'],
    table: 'sys_ui_element',
    data: { sys_ui_section: '9484277dc312310015519f2974d3aecd', element: 'x_1863667_csm_channel', position: 100 },
})

export const feHwType = Record({
    $id: Now.ID['fe-case-hw-type'],
    table: 'sys_ui_element',
    data: { sys_ui_section: '9484277dc312310015519f2974d3aecd', element: 'x_1863667_csm_hw_request_type', position: 101 },
})

export const fePriorityOverride = Record({
    $id: Now.ID['fe-case-priority-override'],
    table: 'sys_ui_element',
    data: { sys_ui_section: '9484277dc312310015519f2974d3aecd', element: 'x_1863667_csm_priority_override', position: 102 },
})

export const feOnHold = Record({
    $id: Now.ID['fe-case-on-hold'],
    table: 'sys_ui_element',
    data: { sys_ui_section: '9484277dc312310015519f2974d3aecd', element: 'x_1863667_csm_on_hold_reason', position: 103 },
})

export const feWorkaround = Record({
    $id: Now.ID['fe-case-workaround'],
    table: 'sys_ui_element',
    data: { sys_ui_section: '9484277dc312310015519f2974d3aecd', element: 'x_1863667_csm_workaround_provided', position: 104 },
})

export const feEscalationReason = Record({
    $id: Now.ID['fe-case-escalation-reason'],
    table: 'sys_ui_element',
    data: { sys_ui_section: '9484277dc312310015519f2974d3aecd', element: 'x_1863667_csm_escalation_reason', position: 105 },
})

export const feSupplierRef = Record({
    $id: Now.ID['fe-case-supplier-ref'],
    table: 'sys_ui_element',
    data: { sys_ui_section: '9484277dc312310015519f2974d3aecd', element: 'x_1863667_csm_supplier_reference', position: 106 },
})

export const feClosedBy = Record({
    $id: Now.ID['fe-case-closed-by'],
    table: 'sys_ui_element',
    data: { sys_ui_section: '6b6a0163eb123100a618afcef106fea2', element: 'x_1863667_csm_closed_by', position: 20 },
})

export const feCancelReason = Record({
    $id: Now.ID['fe-case-cancel-reason'],
    table: 'sys_ui_element',
    data: { sys_ui_section: '6b6a0163eb123100a618afcef106fea2', element: 'x_1863667_csm_cancel_reason', position: 21 },
})
