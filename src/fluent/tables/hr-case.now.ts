import { Table, StringColumn, ReferenceColumn, DateTimeColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_hr_agent_ws_case = Table({
    name: 'x_hr_agent_ws_case',
    label: 'HR Case',
    extends: 'task',
    extensible: true,
    autoNumber: { prefix: 'HRC', number: 1000, numberOfDigits: 7 },
    schema: {
        subject_person: ReferenceColumn({ label: 'Subject person', referenceTable: 'sys_user' }),
        opened_for: ReferenceColumn({ label: 'Opened for', referenceTable: 'sys_user' }),
        hr_service: ReferenceColumn({ label: 'HR service', referenceTable: 'x_hr_agent_ws_service' }),
        hr_profile: ReferenceColumn({ label: 'HR profile', referenceTable: 'x_hr_agent_ws_profile' }),
        confidential: BooleanColumn({ label: 'Confidential', default: false }),
        resolution_code: StringColumn({
            label: 'Resolution code',
            choices: {
                resolved: 'Resolved',
                not_applicable: 'Not applicable',
                duplicate: 'Duplicate',
                referred: 'Referred to another team',
                withdrawn: 'Withdrawn by employee',
            },
        }),
        resolution_notes: StringColumn({ label: 'Resolution notes', maxLength: 4000 }),
        resolved_at: DateTimeColumn({ label: 'Resolved at' }),
        target_resolution: DateTimeColumn({ label: 'Target resolution' }),
    },
})
