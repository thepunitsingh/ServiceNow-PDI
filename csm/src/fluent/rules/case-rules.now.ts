import { BusinessRule } from '@servicenow/sdk/core'
import {
    populateFromInstallBase,
    createHardwareTasks,
    resolveCaseWhenTasksClosed,
    enforceClosedBy,
    defaultOnHoldReason,
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
