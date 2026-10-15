import { Sla } from '@servicenow/sdk/core'
import { lvaSchedule, geoSchedule } from '../schedules/account-schedules.now'

// SP-35/36/37 (Sprint 2) + SP-60/61/62 (Sprint 3): LVA and GEO SLA clocks - Response, Workaround, Resolution, Escalation.
// ASSUMPTION: durations are placeholders until the requirement sheet is available.
// Response   : starts on creation, stops when assigned to a user.
// Workaround : starts on creation, stops when 'Workaround provided' is set (or the case ends).
// Resolution : pauses on Awaiting Info (all On Hold reasons), resumes on leaving it, stops on Resolved/Closed/Cancelled.
//              A reassignment OR a priority change completes the running SLA (history kept) and the SLA matching the
//              new priority attaches, counting from case creation with pauses applied (retroactive start).
// Escalation : starts on creation, stops when the case reaches an L3 group (name contains 'L3') or ends.
// GEO        : schedule comes from the case Location (x_1863667_csm_sla_schedule) with time zone of the location;
//              cases whose location has no schedule fall back to the GEO schedule.

export const lvaResponse1 = Sla({
    $id: Now.ID['sla-lva-response-p1'],
    name: 'Veridos LVA Response P1 Critical',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 1 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=lva',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaWorkaround1 = Sla({
    $id: Now.ID['sla-lva-workaround-p1'],
    name: 'Veridos LVA Workaround P1 Critical',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 2 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaResolution1 = Sla({
    $id: Now.ID['sla-lva-resolution-p1'],
    name: 'Veridos LVA Resolution P1 Critical',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaEscalation1 = Sla({
    $id: Now.ID['sla-lva-escalation-p1'],
    name: 'Veridos LVA Escalation P1 Critical',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaResponse2 = Sla({
    $id: Now.ID['sla-lva-response-p2'],
    name: 'Veridos LVA Response P2 High',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 2 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=lva',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaWorkaround2 = Sla({
    $id: Now.ID['sla-lva-workaround-p2'],
    name: 'Veridos LVA Workaround P2 High',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaResolution2 = Sla({
    $id: Now.ID['sla-lva-resolution-p2'],
    name: 'Veridos LVA Resolution P2 High',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaEscalation2 = Sla({
    $id: Now.ID['sla-lva-escalation-p2'],
    name: 'Veridos LVA Escalation P2 High',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaResponse3 = Sla({
    $id: Now.ID['sla-lva-response-p3'],
    name: 'Veridos LVA Response P3 Moderate',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=lva',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaWorkaround3 = Sla({
    $id: Now.ID['sla-lva-workaround-p3'],
    name: 'Veridos LVA Workaround P3 Moderate',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaResolution3 = Sla({
    $id: Now.ID['sla-lva-resolution-p3'],
    name: 'Veridos LVA Resolution P3 Moderate',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 24 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaEscalation3 = Sla({
    $id: Now.ID['sla-lva-escalation-p3'],
    name: 'Veridos LVA Escalation P3 Moderate',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 16 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaResponse4 = Sla({
    $id: Now.ID['sla-lva-response-p4'],
    name: 'Veridos LVA Response P4 Low',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=lva',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaWorkaround4 = Sla({
    $id: Now.ID['sla-lva-workaround-p4'],
    name: 'Veridos LVA Workaround P4 Low',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 24 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaResolution4 = Sla({
    $id: Now.ID['sla-lva-resolution-p4'],
    name: 'Veridos LVA Resolution P4 Low',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 48 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const lvaEscalation4 = Sla({
    $id: Now.ID['sla-lva-escalation-p4'],
    name: 'Veridos LVA Escalation P4 Low',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 32 }),
    schedule: lvaSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=lva',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse1Loc = Sla({
    $id: Now.ID['sla-geo-response-p1-loc'],
    name: 'Veridos GEO Response P1 Critical (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 1 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoWorkaround1Loc = Sla({
    $id: Now.ID['sla-geo-workaround-p1-loc'],
    name: 'Veridos GEO Workaround P1 Critical (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 2 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution1Loc = Sla({
    $id: Now.ID['sla-geo-resolution-p1-loc'],
    name: 'Veridos GEO Resolution P1 Critical (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoEscalation1Loc = Sla({
    $id: Now.ID['sla-geo-escalation-p1-loc'],
    name: 'Veridos GEO Escalation P1 Critical (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse1 = Sla({
    $id: Now.ID['sla-geo-response-p1-def'],
    name: 'Veridos GEO Response P1 Critical (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 1 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoWorkaround1 = Sla({
    $id: Now.ID['sla-geo-workaround-p1-def'],
    name: 'Veridos GEO Workaround P1 Critical (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 2 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution1 = Sla({
    $id: Now.ID['sla-geo-resolution-p1-def'],
    name: 'Veridos GEO Resolution P1 Critical (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoEscalation1 = Sla({
    $id: Now.ID['sla-geo-escalation-p1-def'],
    name: 'Veridos GEO Escalation P1 Critical (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse2Loc = Sla({
    $id: Now.ID['sla-geo-response-p2-loc'],
    name: 'Veridos GEO Response P2 High (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 2 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoWorkaround2Loc = Sla({
    $id: Now.ID['sla-geo-workaround-p2-loc'],
    name: 'Veridos GEO Workaround P2 High (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution2Loc = Sla({
    $id: Now.ID['sla-geo-resolution-p2-loc'],
    name: 'Veridos GEO Resolution P2 High (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoEscalation2Loc = Sla({
    $id: Now.ID['sla-geo-escalation-p2-loc'],
    name: 'Veridos GEO Escalation P2 High (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse2 = Sla({
    $id: Now.ID['sla-geo-response-p2-def'],
    name: 'Veridos GEO Response P2 High (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 2 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoWorkaround2 = Sla({
    $id: Now.ID['sla-geo-workaround-p2-def'],
    name: 'Veridos GEO Workaround P2 High (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution2 = Sla({
    $id: Now.ID['sla-geo-resolution-p2-def'],
    name: 'Veridos GEO Resolution P2 High (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoEscalation2 = Sla({
    $id: Now.ID['sla-geo-escalation-p2-def'],
    name: 'Veridos GEO Escalation P2 High (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse3Loc = Sla({
    $id: Now.ID['sla-geo-response-p3-loc'],
    name: 'Veridos GEO Response P3 Moderate (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 4 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoWorkaround3Loc = Sla({
    $id: Now.ID['sla-geo-workaround-p3-loc'],
    name: 'Veridos GEO Workaround P3 Moderate (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution3Loc = Sla({
    $id: Now.ID['sla-geo-resolution-p3-loc'],
    name: 'Veridos GEO Resolution P3 Moderate (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 24 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoEscalation3Loc = Sla({
    $id: Now.ID['sla-geo-escalation-p3-loc'],
    name: 'Veridos GEO Escalation P3 Moderate (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 16 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse3 = Sla({
    $id: Now.ID['sla-geo-response-p3-def'],
    name: 'Veridos GEO Response P3 Moderate (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoWorkaround3 = Sla({
    $id: Now.ID['sla-geo-workaround-p3-def'],
    name: 'Veridos GEO Workaround P3 Moderate (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution3 = Sla({
    $id: Now.ID['sla-geo-resolution-p3-def'],
    name: 'Veridos GEO Resolution P3 Moderate (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 24 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoEscalation3 = Sla({
    $id: Now.ID['sla-geo-escalation-p3-def'],
    name: 'Veridos GEO Escalation P3 Moderate (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 16 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse4Loc = Sla({
    $id: Now.ID['sla-geo-response-p4-loc'],
    name: 'Veridos GEO Response P4 Low (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 8 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoWorkaround4Loc = Sla({
    $id: Now.ID['sla-geo-workaround-p4-loc'],
    name: 'Veridos GEO Workaround P4 Low (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 24 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution4Loc = Sla({
    $id: Now.ID['sla-geo-resolution-p4-loc'],
    name: 'Veridos GEO Resolution P4 Low (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 48 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoEscalation4Loc = Sla({
    $id: Now.ID['sla-geo-escalation-p4-loc'],
    name: 'Veridos GEO Escalation P4 Low (Location schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 32 }),
    scheduleSource: 'task_field',
    scheduleSourceField: 'location.x_1863667_csm_sla_schedule',
    timezoneSource: 'task.location.time_zone',
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISNOTEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse4 = Sla({
    $id: Now.ID['sla-geo-response-p4-def'],
    name: 'Veridos GEO Response P4 Low (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoWorkaround4 = Sla({
    $id: Now.ID['sla-geo-workaround-p4-def'],
    name: 'Veridos GEO Workaround P4 Low (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 24 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'x_1863667_csm_workaround_providedISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution4 = Sla({
    $id: Now.ID['sla-geo-resolution-p4-def'],
    name: 'Veridos GEO Resolution P4 Low (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 48 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES^ORpriorityCHANGES',
    },
    resetAction: 'complete',
    retroactive: { start: true, setStartTo: 'sys_created_on', pause: true },
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoEscalation4 = Sla({
    $id: Now.ID['sla-geo-escalation-p4-def'],
    name: 'Veridos GEO Escalation P4 Low (GEO default schedule)',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 32 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo^location.x_1863667_csm_sla_scheduleISEMPTY',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'assignment_group.nameLIKEL3^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})
