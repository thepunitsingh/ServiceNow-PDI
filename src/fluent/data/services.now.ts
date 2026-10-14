import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['svc-benefits-enrollment'],
    table: 'x_hr_agent_ws_service',
    data: { name: 'Benefits enrollment', category: 'benefits', sla_hours: 48, active: true },
})

Record({
    $id: Now.ID['svc-payroll-inquiry'],
    table: 'x_hr_agent_ws_service',
    data: { name: 'Payroll inquiry', category: 'payroll', sla_hours: 24, active: true },
})

Record({
    $id: Now.ID['svc-leave-request'],
    table: 'x_hr_agent_ws_service',
    data: { name: 'Leave of absence', category: 'leave', sla_hours: 72, active: true },
})

Record({
    $id: Now.ID['svc-employee-relations'],
    table: 'x_hr_agent_ws_service',
    data: { name: 'Employee relations concern', category: 'employee_relations', sla_hours: 48, active: true },
})

Record({
    $id: Now.ID['svc-onboarding'],
    table: 'x_hr_agent_ws_service',
    data: { name: 'New hire onboarding', category: 'onboarding', sla_hours: 120, active: true },
})

Record({
    $id: Now.ID['svc-general'],
    table: 'x_hr_agent_ws_service',
    data: { name: 'General HR question', category: 'general', sla_hours: 72, active: true },
})

