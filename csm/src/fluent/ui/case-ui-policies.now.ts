import { Record } from '@servicenow/sdk/core'

// UiPolicy() only accepts tables in this app's scope, so policies on CSM tables use the generic Record API.

// SP-47: Case closed by is mandatory and visible when the case is Resolved (server side enforced by business rule).
export const uipClosedBy = Record({
    $id: Now.ID['uip-case-closed-by'],
    table: 'sys_ui_policy',
    data: {
        table: 'sn_customerservice_case',
        short_description: 'Case closed by is mandatory when resolving',
        conditions: 'state=6',
        on_load: true,
        reverse_if_false: true,
        global: true,
        active: true,
    },
})

export const uipClosedByAction = Record({
    $id: Now.ID['uipa-case-closed-by'],
    table: 'sys_ui_policy_action',
    data: {
        ui_policy: uipClosedBy,
        field: 'x_1863667_csm_closed_by',
        visible: 'true',
        mandatory: 'true',
        disabled: 'ignore',
        cleared: false,
    },
})

// SP-48: Service is not used at Case Task level. The field stays in the schema; existing values are retained.
export const uipHideService = Record({
    $id: Now.ID['uip-task-hide-service'],
    table: 'sys_ui_policy',
    data: {
        table: 'sn_customerservice_task',
        short_description: 'Hide Service on Case Task',
        conditions: '',
        on_load: true,
        reverse_if_false: false,
        global: true,
        active: true,
    },
})

export const uipHideServiceAction = Record({
    $id: Now.ID['uipa-task-hide-service'],
    table: 'sys_ui_policy_action',
    data: {
        ui_policy: uipHideService,
        field: 'service',
        visible: 'false',
        mandatory: 'false',
        disabled: 'ignore',
        cleared: false,
    },
})

// SP-38: hardware requests need an asset to derive CI and location from.
export const uipHwAsset = Record({
    $id: Now.ID['uip-case-hw-asset'],
    table: 'sys_ui_policy',
    data: {
        table: 'sn_customerservice_case',
        short_description: 'Asset mandatory for hardware replacement requests',
        conditions: 'x_1863667_csm_hw_request_typeISNOTEMPTY',
        on_load: true,
        reverse_if_false: true,
        global: true,
        active: true,
    },
})

export const uipHwAssetAction = Record({
    $id: Now.ID['uipa-case-hw-asset'],
    table: 'sys_ui_policy_action',
    data: {
        ui_policy: uipHwAsset,
        field: 'asset',
        visible: 'true',
        mandatory: 'true',
        disabled: 'ignore',
        cleared: false,
    },
})

// SP-65: On hold reason is visible and mandatory whenever the case is Awaiting Info.
export const uipOnHold = Record({
    $id: Now.ID['uip-case-on-hold'],
    table: 'sys_ui_policy',
    data: {
        table: 'sn_customerservice_case',
        short_description: 'On hold reason mandatory when Awaiting Info',
        conditions: 'state=18',
        on_load: true,
        reverse_if_false: true,
        global: true,
        active: true,
    },
})

export const uipOnHoldAction = Record({
    $id: Now.ID['uipa-case-on-hold'],
    table: 'sys_ui_policy_action',
    data: {
        ui_policy: uipOnHold,
        field: 'x_1863667_csm_on_hold_reason',
        visible: 'true',
        mandatory: 'true',
        disabled: 'ignore',
        cleared: false,
    },
})

// SP-74: cancellation reason is visible and mandatory when cancelling (business rule enforces server side).
export const uipCancel = Record({
    $id: Now.ID['uip-case-cancel'],
    table: 'sys_ui_policy',
    data: {
        table: 'sn_customerservice_case',
        short_description: 'Cancellation reason mandatory when cancelling',
        conditions: 'state=7',
        on_load: true,
        reverse_if_false: true,
        global: true,
        active: true,
    },
})

export const uipCancelAction = Record({
    $id: Now.ID['uipa-case-cancel'],
    table: 'sys_ui_policy_action',
    data: {
        ui_policy: uipCancel,
        field: 'x_1863667_csm_cancel_reason',
        visible: 'true',
        mandatory: 'true',
        disabled: 'ignore',
        cleared: false,
    },
})
