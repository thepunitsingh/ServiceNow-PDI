import { Workspace, UxListMenuConfig, Applicability } from '@servicenow/sdk/core'
import { hrAgent, hrAdmin } from '../roles/roles.now'

const audience = Applicability({
    $id: Now.ID['hr-workspace-audience'],
    name: 'HR Agent Workspace Audience',
    roles: [hrAgent, hrAdmin],
})

const listConfig = UxListMenuConfig({
    $id: Now.ID['hr-workspace-lists'],
    name: 'HR Agent Workspace Lists',
    description: 'Case, task and profile lists for HR agents',
    categories: [
        {
            $id: Now.ID['hr-cat-cases'],
            title: 'HR Cases',
            order: 100,
            lists: [
                {
                    $id: Now.ID['hr-l-my'],
                    title: 'My open cases',
                    order: 100,
                    table: 'x_hr_agent_ws_case',
                    columns: 'number,short_description,subject_person,hr_service,priority,state,assigned_to,target_resolution',
                    condition: 'active=true^assigned_to=javascript:gs.getUserID()^EQ',
                    applicabilities: [{ $id: Now.ID['hr-l-my-app'], applicability: audience }],
                },
                {
                    $id: Now.ID['hr-l-unassigned'],
                    title: 'Unassigned',
                    order: 200,
                    table: 'x_hr_agent_ws_case',
                    columns: 'number,short_description,subject_person,hr_service,priority,state,assigned_to,target_resolution',
                    condition: 'active=true^assigned_toISEMPTY^EQ',
                    applicabilities: [{ $id: Now.ID['hr-l-unassigned-app'], applicability: audience }],
                },
                {
                    $id: Now.ID['hr-l-breach'],
                    title: 'Past target resolution',
                    order: 300,
                    table: 'x_hr_agent_ws_case',
                    columns: 'number,short_description,subject_person,hr_service,priority,state,assigned_to,target_resolution',
                    condition: 'active=true^target_resolution<javascript:gs.nowDateTime()^EQ',
                    applicabilities: [{ $id: Now.ID['hr-l-breach-app'], applicability: audience }],
                },
                {
                    $id: Now.ID['hr-l-confidential'],
                    title: 'Confidential',
                    order: 400,
                    table: 'x_hr_agent_ws_case',
                    columns: 'number,short_description,subject_person,hr_service,priority,state,assigned_to,target_resolution',
                    condition: 'active=true^confidential=true^EQ',
                    applicabilities: [{ $id: Now.ID['hr-l-confidential-app'], applicability: audience }],
                },
                {
                    $id: Now.ID['hr-l-all'],
                    title: 'All cases',
                    order: 500,
                    table: 'x_hr_agent_ws_case',
                    columns: 'number,short_description,subject_person,hr_service,priority,state,assigned_to,target_resolution',
                    condition: '',
                    applicabilities: [{ $id: Now.ID['hr-l-all-app'], applicability: audience }],
                },
            ],
        },
        {
            $id: Now.ID['hr-cat-tasks'],
            title: 'HR Tasks',
            order: 200,
            lists: [
                {
                    $id: Now.ID['hr-l-mytasks'],
                    title: 'My open tasks',
                    order: 100,
                    table: 'x_hr_agent_ws_task',
                    columns: 'number,short_description,hr_case,task_type,state,due_date',
                    condition: 'active=true^assigned_to=javascript:gs.getUserID()^EQ',
                    applicabilities: [{ $id: Now.ID['hr-l-mytasks-app'], applicability: audience }],
                },
                {
                    $id: Now.ID['hr-l-alltasks'],
                    title: 'All tasks',
                    order: 200,
                    table: 'x_hr_agent_ws_task',
                    columns: 'number,short_description,hr_case,task_type,state,assigned_to',
                    condition: '',
                    applicabilities: [{ $id: Now.ID['hr-l-alltasks-app'], applicability: audience }],
                },
            ],
        },
        {
            $id: Now.ID['hr-cat-people'],
            title: 'Employees',
            order: 300,
            lists: [
                {
                    $id: Now.ID['hr-l-profiles'],
                    title: 'HR profiles',
                    order: 100,
                    table: 'x_hr_agent_ws_profile',
                    columns: 'user,employee_number,job_title,department,manager,employment_status',
                    condition: '',
                    applicabilities: [{ $id: Now.ID['hr-l-profiles-app'], applicability: audience }],
                },
            ],
        },
    ],
})

export const hrWorkspace = Workspace({
    $id: Now.ID['hr-agent-workspace'],
    title: 'HR Agent Workspace',
    path: 'hr-agent-workspace',
    landingPath: 'home',
    order: 100,
    tables: ['x_hr_agent_ws_case', 'x_hr_agent_ws_task', 'x_hr_agent_ws_profile', 'sys_user'],
    listConfig: listConfig,
})
