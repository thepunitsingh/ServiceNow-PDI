import { Table, StringColumn, ReferenceColumn, DateColumn } from '@servicenow/sdk/core'

export const x_hr_agent_ws_profile = Table({
    name: 'x_hr_agent_ws_profile',
    label: 'HR Profile',
    display: 'user',
    schema: {
        user: ReferenceColumn({ label: 'Employee', referenceTable: 'sys_user', mandatory: true }),
        employee_number: StringColumn({ label: 'Employee number', maxLength: 40 }),
        job_title: StringColumn({ label: 'Job title', maxLength: 100 }),
        department: ReferenceColumn({ label: 'Department', referenceTable: 'cmn_department' }),
        manager: ReferenceColumn({ label: 'Manager', referenceTable: 'sys_user' }),
        location: ReferenceColumn({ label: 'Location', referenceTable: 'cmn_location' }),
        hire_date: DateColumn({ label: 'Hire date' }),
        employment_type: StringColumn({
            label: 'Employment type',
            choices: { full_time: 'Full time', part_time: 'Part time', contractor: 'Contractor' },
            default: 'full_time',
        }),
        employment_status: StringColumn({
            label: 'Employment status',
            choices: { active: 'Active', on_leave: 'On leave', terminated: 'Terminated' },
            default: 'active',
        }),
    },
    index: [{ name: 'user_idx', unique: true, element: 'user' }],
})
