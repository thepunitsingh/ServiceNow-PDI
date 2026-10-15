import { Table, ReferenceColumn, ChoiceColumn, DateTimeColumn, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

// SP-34: groups are tied to an account so the Case form can filter Assignment Group by Account.
export const sys_user_group = Table({
    augments: 'sys_user_group',
    schema: {
        x_1863667_csm_tier: ChoiceColumn({
            label: 'Support tier',
            choices: { l2: 'L2', l3_1: 'L3.1', l3_2: 'L3.2' },
        }),
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
        // SP-65: standard On Hold reasons (shown when state = Awaiting Info).
        x_1863667_csm_on_hold_reason: ChoiceColumn({
            label: 'On hold reason',
            choices: {
                awaiting_customer: 'Awaiting Customer',
                awaiting_supplier: 'Awaiting Supplier',
                awaiting_spare_part: 'Awaiting Spare part',
            },
            default: 'awaiting_customer',
        }),
        // SP-60: stops the Workaround SLA clock.
        x_1863667_csm_workaround_provided: DateTimeColumn({ label: 'Workaround provided' }),
        // SP-74: mandatory reason for out-of-scope cancellation.
        x_1863667_csm_cancel_reason: StringColumn({ label: 'Cancellation reason', maxLength: 1000 }),
        // SP-75: set when an agent changes Priority away from the Impact x Urgency matrix value (audit trail).
        x_1863667_csm_priority_override: BooleanColumn({ label: 'Priority manually overridden', default: false }),
        // SP-76: reason and supplier/specialist reference captured on (de-)escalation.
        x_1863667_csm_escalation_reason: StringColumn({ label: 'Escalation / de-escalation reason', maxLength: 1000 }),
        x_1863667_csm_supplier_reference: StringColumn({ label: 'Supplier / specialist reference number', maxLength: 100 }),
        // SP-79: how the case was created.
        x_1863667_csm_channel: ChoiceColumn({
            label: 'Source / channel',
            choices: { portal: 'Portal', email: 'Email', phone: 'Phone', internal: 'Internal' },
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

// SP-61: location drives GEO SLA schedule selection (schedule + type), time zone comes from the location itself.
export const cmn_location = Table({
    augments: 'cmn_location',
    schema: {
        x_1863667_csm_sla_schedule: ReferenceColumn({
            label: 'SLA schedule',
            referenceTable: 'cmn_schedule',
            hint: 'Business hours used by location-based SLAs (GEO)',
        }),
        x_1863667_csm_location_type: ChoiceColumn({
            label: 'Location type',
            choices: { headquarters: 'Headquarters', site: 'Site', depot: 'Depot / Stockroom' },
        }),
    },
})
