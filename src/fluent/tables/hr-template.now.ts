import { Table, StringColumn, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_hr_agent_ws_template = Table({
    name: 'x_hr_agent_ws_template',
    label: 'HR Case Template',
    display: 'name',
    schema: {
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 100 }),
        hr_service: ReferenceColumn({ label: 'HR service', referenceTable: 'x_hr_agent_ws_service' }),
        short_description: StringColumn({ label: 'Short description', maxLength: 160 }),
        description: StringColumn({ label: 'Description', maxLength: 4000 }),
        assignment_group: ReferenceColumn({ label: 'Assignment group', referenceTable: 'sys_user_group' }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
})
