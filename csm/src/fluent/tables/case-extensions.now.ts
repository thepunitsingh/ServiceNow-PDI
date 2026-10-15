import { Table, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

// SP-34: groups are tied to an account so the Case form can filter Assignment Group by Account.
export const sys_user_group = Table({
    augments: 'sys_user_group',
    schema: {
        x_1863667_csm_account: ReferenceColumn({
            label: 'Support account',
            referenceTable: 'customer_account',
            hint: 'Account this group supports; used to filter Assignment Group on the Case form',
        }),
    },
})

// SP-47: Case Closed by; SP-38/39: hardware replacement request type and install-base source.
export const sn_customerservice_case = Table({
    augments: 'sn_customerservice_case',
    schema: {
        x_1863667_csm_closed_by: ReferenceColumn({
            label: 'Case closed by',
            referenceTable: 'sys_user',
            useReferenceQualifier: 'advanced',
            referenceQual: 'javascript:new x_1863667_csm.CsmCaseFilters().closedByQualifier(current)',
        }),
        x_1863667_csm_hw_request_type: ChoiceColumn({
            label: 'Hardware request type',
            choices: {
                ship_install: 'Ship & Install',
                remove_return: 'Remove & Return',
                both: 'Both (full swap)',
                repair: 'Repair Tracking',
            },
        }),
        x_1863667_csm_hw_tasks_created: ChoiceColumn({
            label: 'Hardware tasks created',
            choices: { no: 'No', yes: 'Yes' },
            default: 'no',
        }),
    },
})

// SP-92 (task type), SP-40/41/42: action type of hardware case tasks.
export const sn_customerservice_task = Table({
    augments: 'sn_customerservice_task',
    schema: {
        x_1863667_csm_hw_action: ChoiceColumn({
            label: 'Hardware action',
            choices: {
                ship_install: 'Ship & Install',
                remove_return: 'Remove & Return',
                repair_tracking: 'Repair Tracking',
            },
        }),
        x_1863667_csm_task_type: ChoiceColumn({
            label: 'Task type',
            choices: {
                general: 'General',
                change_request: 'Change Request',
                service_request: 'Service Request',
                supplier: 'Supplier',
            },
            default: 'general',
        }),
    },
})
