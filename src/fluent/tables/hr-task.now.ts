import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_hr_agent_ws_task = Table({
    name: 'x_hr_agent_ws_task',
    label: 'HR Task',
    extends: 'task',
    autoNumber: { prefix: 'HRT', number: 1000, numberOfDigits: 7 },
    schema: {
        hr_case: ReferenceColumn({ label: 'HR case', referenceTable: 'x_hr_agent_ws_case', mandatory: true }),
        task_type: StringColumn({
            label: 'Task type',
            choices: {
                review: 'Document review',
                approval: 'Approval',
                fulfillment: 'Fulfillment',
                followup: 'Follow-up',
            },
            default: 'fulfillment',
        }),
    },
})
