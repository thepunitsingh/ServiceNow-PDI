import { Role } from '@servicenow/sdk/core'

export const hrAgent = Role({
    name: 'x_hr_agent_ws.agent',
    description: 'HR agent: works HR cases and tasks in the HR Agent Workspace',
})

export const hrAdmin = Role({
    name: 'x_hr_agent_ws.admin',
    description: 'HR administrator: configures services, templates and sees all HR data',
    containsRoles: [hrAgent],
})
