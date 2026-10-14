import { ApplicationMenu, Record } from '@servicenow/sdk/core'

const menu = ApplicationMenu({
    $id: Now.ID['hr-agent-menu'],
    title: 'HR Agent Workspace',
    hint: 'HR case management',
    roles: ['x_hr_agent_ws.agent'],
    active: true,
})

Record({
    $id: Now.ID['hr-mod-cases'],
    table: 'sys_app_module',
    data: {
        title: 'HR Cases',
        application: menu,
        link_type: 'LIST',
        name: 'x_hr_agent_ws_case',
        roles: ['x_hr_agent_ws.agent'],
        active: true,
        order: 100,
    },
})

Record({
    $id: Now.ID['hr-mod-tasks'],
    table: 'sys_app_module',
    data: {
        title: 'HR Tasks',
        application: menu,
        link_type: 'LIST',
        name: 'x_hr_agent_ws_task',
        roles: ['x_hr_agent_ws.agent'],
        active: true,
        order: 200,
    },
})

Record({
    $id: Now.ID['hr-mod-profiles'],
    table: 'sys_app_module',
    data: {
        title: 'HR Profiles',
        application: menu,
        link_type: 'LIST',
        name: 'x_hr_agent_ws_profile',
        roles: ['x_hr_agent_ws.agent'],
        active: true,
        order: 300,
    },
})

Record({
    $id: Now.ID['hr-mod-services'],
    table: 'sys_app_module',
    data: {
        title: 'HR Services',
        application: menu,
        link_type: 'LIST',
        name: 'x_hr_agent_ws_service',
        roles: ['x_hr_agent_ws.agent'],
        active: true,
        order: 400,
    },
})

Record({
    $id: Now.ID['hr-mod-templates'],
    table: 'sys_app_module',
    data: {
        title: 'Case Templates',
        application: menu,
        link_type: 'LIST',
        name: 'x_hr_agent_ws_template',
        roles: ['x_hr_agent_ws.agent'],
        active: true,
        order: 500,
    },
})

