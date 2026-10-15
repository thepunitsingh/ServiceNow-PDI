import { Sla } from '@servicenow/sdk/core'
import { lvaSchedule, geoSchedule } from '../schedules/account-schedules.now'

// SP-35 / SP-36 / SP-37: Response + Resolution SLAs for the LVA and GEO accounts, driven by their dedicated schedules.
// ASSUMPTION: durations mirror the generic SLAs (placeholders until the requirement sheet is available).
// Response  : starts on creation, stops when assigned to a user.
// Resolution: pauses on Awaiting Info, stops on Resolved/Closed/Cancelled; reassignment completes the running SLA
//             (history kept) and a new Resolution SLA starts.

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
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
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
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
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
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
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
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse1 = Sla({
    $id: Now.ID['sla-geo-response-p1'],
    name: 'Veridos GEO Response P1 Critical',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 1 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution1 = Sla({
    $id: Now.ID['sla-geo-resolution-p1'],
    name: 'Veridos GEO Resolution P1 Critical',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=1^active=true^account.x_1863667_csm_customer_code=geo',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse2 = Sla({
    $id: Now.ID['sla-geo-response-p2'],
    name: 'Veridos GEO Response P2 High',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 2 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution2 = Sla({
    $id: Now.ID['sla-geo-resolution-p2'],
    name: 'Veridos GEO Resolution P2 High',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=2^active=true^account.x_1863667_csm_customer_code=geo',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse3 = Sla({
    $id: Now.ID['sla-geo-response-p3'],
    name: 'Veridos GEO Response P3 Moderate',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 4 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution3 = Sla({
    $id: Now.ID['sla-geo-resolution-p3'],
    name: 'Veridos GEO Resolution P3 Moderate',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 24 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=3^active=true^account.x_1863667_csm_customer_code=geo',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResponse4 = Sla({
    $id: Now.ID['sla-geo-response-p4'],
    name: 'Veridos GEO Response P4 Low',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'response',
    active: true,
    duration: Duration({ hours: 8 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo',
        stop: 'assigned_toISNOTEMPTY^ORactive=false',
    },
    resetAction: 'cancel',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})

export const geoResolution4 = Sla({
    $id: Now.ID['sla-geo-resolution-p4'],
    name: 'Veridos GEO Resolution P4 Low',
    table: 'sn_customerservice_case',
    type: 'SLA',
    target: 'resolution',
    active: true,
    duration: Duration({ hours: 48 }),
    schedule: geoSchedule,
    conditions: {
        start: 'priority=4^active=true^account.x_1863667_csm_customer_code=geo',
        pause: 'state=18',
        resume: 'state!=18',
        stop: 'stateIN6,3,7',
        reset: 'assignment_groupCHANGES^ORassigned_toCHANGES',
    },
    resetAction: 'complete',
    whenTo: { resume: 'on_condition', cancel: 'on_condition' },
})
