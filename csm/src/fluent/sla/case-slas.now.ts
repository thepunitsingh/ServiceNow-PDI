import { Sla } from '@servicenow/sdk/core'

// SP-31: Response and Resolution SLAs on sn_customerservice_case.
// ASSUMPTION: durations and the 8-5 weekdays schedule are placeholders for the client's SLA requirement sheet.
// Response  : starts on case creation, stops when the case is assigned to a user.
// Resolution: starts on case creation, pauses on Awaiting Info, stops on Resolved/Closed/Cancelled.
//             A change of assignment group/assignee completes the running SLA (kept as history) and starts a new one.

export const responseP1 = Sla({
    $id: Now.ID['sla-response-p1'],
    name: 'Veridos Response P1 Critical',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 1 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'priority=1^active=true',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const resolutionP1 = Sla({
    $id: Now.ID['sla-resolution-p1'],
    name: 'Veridos Resolution P1 Critical',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'priority=1^active=true',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const responseP2 = Sla({
    $id: Now.ID['sla-response-p2'],
    name: 'Veridos Response P2 High',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 2 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'priority=2^active=true',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const resolutionP2 = Sla({
    $id: Now.ID['sla-resolution-p2'],
    name: 'Veridos Resolution P2 High',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'priority=2^active=true',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const responseP3 = Sla({
    $id: Now.ID['sla-response-p3'],
    name: 'Veridos Response P3 Moderate',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'priority=3^active=true',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const resolutionP3 = Sla({
    $id: Now.ID['sla-resolution-p3'],
    name: 'Veridos Resolution P3 Moderate',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 24 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'priority=3^active=true',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const responseP4 = Sla({
    $id: Now.ID['sla-response-p4'],
    name: 'Veridos Response P4 Low',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'priority=4^active=true',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const resolutionP4 = Sla({
    $id: Now.ID['sla-resolution-p4'],
    name: 'Veridos Resolution P4 Low',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 48 }),
    schedule: '08fcd0830a0a0b2600079f56b1adb9ae',
    conditions: {
        start: 'priority=4^active=true',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

