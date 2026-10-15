import { Table, ReferenceColumn, ChoiceColumn, IntegerColumn, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

// SP-75: Impact x Urgency -> Priority matrix for Cases (own table: the OOB dl_u_priority is shared with ITSM).
export const x_1863667_csm_priority_matrix = Table({
    name: 'x_1863667_csm_priority_matrix',
    label: 'Case Priority Matrix',
    schema: {
        impact: IntegerColumn({ label: 'Impact', mandatory: true }),
        urgency: IntegerColumn({ label: 'Urgency', mandatory: true }),
        priority: IntegerColumn({ label: 'Priority', mandatory: true }),
    },
})

// SP-76: every escalation / de-escalation event (case history).
export const x_1863667_csm_escalation_log = Table({
    name: 'x_1863667_csm_escalation_log',
    label: 'Case Escalation Log',
    schema: {
        case: ReferenceColumn({ label: 'Case', referenceTable: 'sn_customerservice_case', mandatory: true }),
        direction: ChoiceColumn({
            label: 'Direction',
            choices: { escalation: 'Escalation', deescalation: 'De-escalation' },
        }),
        from_group: ReferenceColumn({ label: 'From group', referenceTable: 'sys_user_group' }),
        to_group: ReferenceColumn({ label: 'To group', referenceTable: 'sys_user_group' }),
        reason: StringColumn({ label: 'Reason', maxLength: 1000 }),
        reference_number: StringColumn({ label: 'Supplier / specialist reference', maxLength: 100 }),
        performed_by: ReferenceColumn({ label: 'Performed by', referenceTable: 'sys_user' }),
    },
})

// SP-77: routing table - most specific match wins (Account + Location + Contract), then Account + Location,
// then Account only, then the default group (system property x_1863667_csm.default_l2_group).
export const x_1863667_csm_routing_rule = Table({
    name: 'x_1863667_csm_routing_rule',
    label: 'Case Routing Rule',
    schema: {
        account: ReferenceColumn({ label: 'Account', referenceTable: 'customer_account', mandatory: true }),
        location: ReferenceColumn({ label: 'Location', referenceTable: 'cmn_location' }),
        contract: ReferenceColumn({ label: 'Contract', referenceTable: 'ast_contract' }),
        l2_group: ReferenceColumn({ label: 'L2 group', referenceTable: 'sys_user_group', mandatory: true }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
})
