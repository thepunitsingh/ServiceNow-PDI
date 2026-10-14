import { BusinessRule } from '@servicenow/sdk/core'
import { applyServiceDefaults, setTargetResolution, handleResolution, closeChildTasks } from '../../server/case-rules'

BusinessRule({
    $id: Now.ID['hr-case-defaults'],
    name: 'HR Case: apply defaults',
    table: 'x_hr_agent_ws_case',
    when: 'before',
    action: ['insert'],
    order: 100,
    script: applyServiceDefaults,
})

BusinessRule({
    $id: Now.ID['hr-case-target'],
    name: 'HR Case: set target resolution',
    table: 'x_hr_agent_ws_case',
    when: 'before',
    action: ['insert', 'update'],
    order: 200,
    script: setTargetResolution,
})

BusinessRule({
    $id: Now.ID['hr-case-resolution'],
    name: 'HR Case: validate resolution',
    table: 'x_hr_agent_ws_case',
    when: 'before',
    action: ['update'],
    order: 300,
    script: handleResolution,
})

BusinessRule({
    $id: Now.ID['hr-case-close-tasks'],
    name: 'HR Case: close child tasks',
    table: 'x_hr_agent_ws_case',
    when: 'after',
    action: ['update'],
    order: 100,
    filterCondition: 'stateIN6,7^EQ',
    script: closeChildTasks,
})
