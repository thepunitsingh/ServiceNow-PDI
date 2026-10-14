import { gs, GlideDateTime, GlideRecord } from '@servicenow/glide'

/** Before insert/update: stamp the target resolution date from the HR service SLA. */
export function setTargetResolution(current: any) {
    if (!current.getValue('hr_service') || current.getValue('target_resolution')) return
    const svc = current.hr_service.getRefRecord()
    const hours = parseInt(svc.getValue('sla_hours'), 10)
    if (!hours) return
    const target = new GlideDateTime()
    target.addSeconds(hours * 3600)
    current.setValue('target_resolution', target.getValue())
}

/** Before update: stamp resolved_at when the case reaches Resolved/Closed and require a resolution code. */
export function handleResolution(current: any) {
    const state = parseInt(current.getValue('state'), 10)
    if (state < 6) return
    if (!current.getValue('resolution_code')) {
        gs.addErrorMessage('Resolution code is required to resolve or close an HR case.')
        current.setAbortAction(true)
        return
    }
    if (!current.getValue('resolved_at')) {
        current.setValue('resolved_at', new GlideDateTime().getValue())
    }
}

/** Before insert: copy the template defaults when a case is created from a service. */
export function applyServiceDefaults(current: any) {
    if (!current.getValue('opened_for')) current.setValue('opened_for', gs.getUserID())
    if (!current.getValue('subject_person')) current.setValue('subject_person', current.getValue('opened_for'))
    const gr = new GlideRecord('x_hr_agent_ws_profile')
    gr.addQuery('user', current.getValue('subject_person'))
    gr.setLimit(1)
    gr.query()
    if (gr.next()) current.setValue('hr_profile', gr.getUniqueValue())
}

/** After resolve/close: cancel open child HR tasks. */
export function closeChildTasks(current: any) {
    const gr = new GlideRecord('x_hr_agent_ws_task')
    gr.addQuery('hr_case', current.getUniqueValue())
    gr.addActiveQuery()
    gr.query()
    while (gr.next()) {
        gr.setValue('state', '7')
        gr.setValue('work_notes', 'Closed automatically because HR case ' + current.getValue('number') + ' was closed.')
        gr.update()
    }
}
