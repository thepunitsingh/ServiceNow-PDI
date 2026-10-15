import { Record } from '@servicenow/sdk/core'

// SP-35 / SP-36: dedicated schedules for LVA and GEO.
// ASSUMPTION: agreed support hours were not in the requirement sheet. LVA = Mon-Fri 08:00-17:00 Europe/Riga,
// GEO = Mon-Fri 07:00-19:00 Europe/Berlin. Replace spans / add holiday exceptions when the sheet is confirmed.

export const lvaSchedule = Record({
    $id: Now.ID['sched-lva'],
    table: 'cmn_schedule',
    data: { name: 'Veridos LVA Support Hours', label: 'Veridos LVA Support Hours', calendar_name: 'Veridos LVA Support Hours', plural_label: 'Veridos LVA Support Hours', time_zone: 'Europe/Riga' },
})

export const lvaSpan = Record({
    $id: Now.ID['sched-lva-span'],
    table: 'cmn_schedule_span',
    data: {
        schedule: lvaSchedule,
        name: 'LVA Monday-Friday 8-17',
        repeat_type: 'weekdays',
        repeat_count: 1,
        days_of_week: '1',
        show_as: 'busy',
        all_day: false,
        start_date_time: '20240101T080000',
        end_date_time: '20240101T170000',
    },
})

export const geoSchedule = Record({
    $id: Now.ID['sched-geo'],
    table: 'cmn_schedule',
    data: { name: 'Veridos GEO Support Hours', label: 'Veridos GEO Support Hours', calendar_name: 'Veridos GEO Support Hours', plural_label: 'Veridos GEO Support Hours', time_zone: 'Europe/Berlin' },
})

export const geoSpan = Record({
    $id: Now.ID['sched-geo-span'],
    table: 'cmn_schedule_span',
    data: {
        schedule: geoSchedule,
        name: 'GEO Monday-Friday 7-19',
        repeat_type: 'weekdays',
        repeat_count: 1,
        days_of_week: '1',
        show_as: 'busy',
        all_day: false,
        start_date_time: '20240101T070000',
        end_date_time: '20240101T190000',
    },
})
