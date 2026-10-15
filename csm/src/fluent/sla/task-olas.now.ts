import { Sla } from '@servicenow/sdk/core'

// SP-44: each hardware Case Task carries its own OLA (own timer, independent of the parent Case SLA).
// ASSUMPTION: durations are placeholders (business days at 8-5 weekdays).

export const taskOla_ship_install = Sla({
    $id: Now.ID['sla-task-ship_install'],
    name: 'Veridos Case Task OLA Ship & Install',
    table: 'sn_customerservice_task',
    type: 'OLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 72 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'x_1863667_csm_hw_action=ship_install^active=true',
        stop: 'active=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const taskOla_remove_return = Sla({
    $id: Now.ID['sla-task-remove_return'],
    name: 'Veridos Case Task OLA Remove & Return',
    table: 'sn_customerservice_task',
    type: 'OLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 72 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'x_1863667_csm_hw_action=remove_return^active=true',
        stop: 'active=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const taskOla_repair_tracking = Sla({
    $id: Now.ID['sla-task-repair_tracking'],
    name: 'Veridos Case Task OLA Repair Tracking',
    table: 'sn_customerservice_task',
    type: 'OLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 240 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'x_1863667_csm_hw_action=repair_tracking^active=true',
        stop: 'active=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})
