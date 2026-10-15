import { BusinessRule } from '@servicenow/sdk/core'
import {
    populateFromInstallBase,
    createHardwareTasks,
    resolveCaseWhenTasksClosed,
    enforceClosedBy,
    defaultOnHoldReason,
    applyPriorityMatrix,
    handleEscalation,
    handleCancellation,
    captureChannel,
    routeToL2Group,
    logAssignmentGroupChange,
} from '../../server/case-rules'

BusinessRule({
    $id: Now.ID['br-case-install-base'],
    name: 'CSM Case: populate CI and location from install base',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    script: populateFromInstallBase,
})

BusinessRule({
    $id: Now.ID['br-case-hw-tasks'],
    name: 'CSM Case: create hardware case tasks',
    table: 'sn_customerservice_case',
    when: 'after',
    action: ['insert', 'update'],
    order: 200,
    filterCondition: 'x_1863667_csm_hw_request_type!=NULL^x_1863667_csm_hw_tasks_created!=yes',
    script: createHardwareTasks,
})

BusinessRule({
    $id: Now.ID['br-task-resolve-case'],
    name: 'CSM Case Task: resolve case when all hardware tasks are closed',
    table: 'sn_customerservice_task',
    when: 'after',
    action: ['update'],
    order: 200,
    filterCondition: 'activeCHANGESTO false',
    script: resolveCaseWhenTasksClosed,
})

BusinessRule({
    $id: Now.ID['br-case-closed-by'],
    name: 'CSM Case: require case closed by on resolve',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['update'],
    order: 300,
    filterCondition: 'state=6',
    script: enforceClosedBy,
})

BusinessRule({
    $id: Now.ID['br-case-on-hold-reason'],
    name: 'CSM Case: default on hold reason',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['insert', 'update'],
    order: 150,
    filterCondition: 'state=18',
    script: defaultOnHoldReason,
})

BusinessRule({
    $id: Now.ID['br-case-priority-matrix'],
    name: 'CSM Case: priority from impact x urgency',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['insert', 'update'],
    order: 120,
    script: applyPriorityMatrix,
})

BusinessRule({
    $id: Now.ID['br-case-escalation'],
    name: 'CSM Case: escalation / de-escalation',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['update'],
    order: 130,
    filterCondition: 'assignment_groupCHANGES',
    script: handleEscalation,
})

BusinessRule({
    $id: Now.ID['br-case-cancellation'],
    name: 'CSM Case: cancellation reason',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['update'],
    order: 140,
    filterCondition: 'stateCHANGESTO7',
    script: handleCancellation,
})

BusinessRule({
    $id: Now.ID['br-case-channel'],
    name: 'CSM Case: capture source / channel',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['insert'],
    order: 90,
    script: captureChannel,
})

BusinessRule({
    $id: Now.ID['br-case-routing'],
    name: 'CSM Case: route to L2 group',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['insert'],
    order: 95,
    script: routeToL2Group,
})

BusinessRule({
    $id: Now.ID['br-case-group-log'],
    name: 'CSM Case: log assignment group change',
    table: 'sn_customerservice_case',
    when: 'before',
    action: ['update'],
    order: 400,
    filterCondition: 'assignment_groupCHANGES',
    script: logAssignmentGroupChange,
})
