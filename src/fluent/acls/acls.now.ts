import { Acl } from '@servicenow/sdk/core'
import { hrAgent, hrAdmin } from '../roles/roles.now'

Acl({
    $id: Now.ID['x_hr_agent_ws_case-read'],
    type: 'record',
    table: 'x_hr_agent_ws_case',
    operation: 'read',
    roles: [hrAgent],
    description: 'HR agents can read x_hr_agent_ws_case',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_case-write'],
    type: 'record',
    table: 'x_hr_agent_ws_case',
    operation: 'write',
    roles: [hrAgent],
    description: 'HR agents can write x_hr_agent_ws_case',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_case-create'],
    type: 'record',
    table: 'x_hr_agent_ws_case',
    operation: 'create',
    roles: [hrAgent],
    description: 'HR agents can create x_hr_agent_ws_case',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_case-delete'],
    type: 'record',
    table: 'x_hr_agent_ws_case',
    operation: 'delete',
    roles: [hrAdmin],
    description: 'Only HR admins can delete x_hr_agent_ws_case',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_task-read'],
    type: 'record',
    table: 'x_hr_agent_ws_task',
    operation: 'read',
    roles: [hrAgent],
    description: 'HR agents can read x_hr_agent_ws_task',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_task-write'],
    type: 'record',
    table: 'x_hr_agent_ws_task',
    operation: 'write',
    roles: [hrAgent],
    description: 'HR agents can write x_hr_agent_ws_task',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_task-create'],
    type: 'record',
    table: 'x_hr_agent_ws_task',
    operation: 'create',
    roles: [hrAgent],
    description: 'HR agents can create x_hr_agent_ws_task',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_task-delete'],
    type: 'record',
    table: 'x_hr_agent_ws_task',
    operation: 'delete',
    roles: [hrAdmin],
    description: 'Only HR admins can delete x_hr_agent_ws_task',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_profile-read'],
    type: 'record',
    table: 'x_hr_agent_ws_profile',
    operation: 'read',
    roles: [hrAgent],
    description: 'HR agents can read x_hr_agent_ws_profile',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_profile-write'],
    type: 'record',
    table: 'x_hr_agent_ws_profile',
    operation: 'write',
    roles: [hrAgent],
    description: 'HR agents can write x_hr_agent_ws_profile',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_profile-create'],
    type: 'record',
    table: 'x_hr_agent_ws_profile',
    operation: 'create',
    roles: [hrAgent],
    description: 'HR agents can create x_hr_agent_ws_profile',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_profile-delete'],
    type: 'record',
    table: 'x_hr_agent_ws_profile',
    operation: 'delete',
    roles: [hrAdmin],
    description: 'Only HR admins can delete x_hr_agent_ws_profile',
})

Acl({
    $id: Now.ID['x_hr_agent_ws_service-read'],
    type: 'record',
    table: 'x_hr_agent_ws_service',
    operation: 'read',
    roles: [hrAgent],
})

Acl({
    $id: Now.ID['x_hr_agent_ws_service-write'],
    type: 'record',
    table: 'x_hr_agent_ws_service',
    operation: 'write',
    roles: [hrAdmin],
})

Acl({
    $id: Now.ID['x_hr_agent_ws_service-create'],
    type: 'record',
    table: 'x_hr_agent_ws_service',
    operation: 'create',
    roles: [hrAdmin],
})

Acl({
    $id: Now.ID['x_hr_agent_ws_service-delete'],
    type: 'record',
    table: 'x_hr_agent_ws_service',
    operation: 'delete',
    roles: [hrAdmin],
})

Acl({
    $id: Now.ID['x_hr_agent_ws_template-read'],
    type: 'record',
    table: 'x_hr_agent_ws_template',
    operation: 'read',
    roles: [hrAgent],
})

Acl({
    $id: Now.ID['x_hr_agent_ws_template-write'],
    type: 'record',
    table: 'x_hr_agent_ws_template',
    operation: 'write',
    roles: [hrAdmin],
})

Acl({
    $id: Now.ID['x_hr_agent_ws_template-create'],
    type: 'record',
    table: 'x_hr_agent_ws_template',
    operation: 'create',
    roles: [hrAdmin],
})

Acl({
    $id: Now.ID['x_hr_agent_ws_template-delete'],
    type: 'record',
    table: 'x_hr_agent_ws_template',
    operation: 'delete',
    roles: [hrAdmin],
})

// Confidential cases are visible only to their assignee and HR admins.
Acl({
    $id: Now.ID['hr-case-confidential-read'],
    type: 'record',
    table: 'x_hr_agent_ws_case',
    operation: 'read',
    roles: [hrAgent],
    decisionType: 'deny',
    condition: 'confidential=true^assigned_toNOT ONjavascript:gs.getUserID()',
    description: 'Deny access to confidential cases not assigned to the agent',
    adminOverrides: true,
})
