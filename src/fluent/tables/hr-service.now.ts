import { Table, StringColumn, BooleanColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_hr_agent_ws_service = Table({
    name: 'x_hr_agent_ws_service',
    label: 'HR Service',
    display: 'name',
    schema: {
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 100 }),
        description: StringColumn({ label: 'Description', maxLength: 1000 }),
        category: StringColumn({
            label: 'Category',
            choices: {
                employee_relations: 'Employee Relations',
                benefits: 'Benefits',
                payroll: 'Payroll',
                leave: 'Leave of Absence',
                onboarding: 'Onboarding',
                offboarding: 'Offboarding',
                general: 'General Inquiry',
            },
            default: 'general',
        }),
        sla_hours: IntegerColumn({ label: 'Target resolution (hours)', default: 72 }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
})
