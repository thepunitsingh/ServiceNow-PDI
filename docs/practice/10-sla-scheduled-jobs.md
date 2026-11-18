# Activity 10 — SLA definitions & scheduled jobs

**Level:** 🔴 Advanced · **Time:** ~90 min · **Prev:** [09](09-service-catalog.md) · **Next:** [11](11-scripted-rest-integration.md)

## Objective
Measure service targets with **SLA definitions** and automate housekeeping with **Scheduled Script Executions**.

## Scenario
P1 incidents must be responded within 15 min and resolved in 4 h (business hours schedule). Stale incidents waiting for customer for > 5 days must be auto-closed.

## Tasks
1. Create a **Schedule** `PRAC 8-5 Weekdays` (Schedules) and a **SLA definition** `PRAC P1 Resolution`: type SLA, duration 4h, schedule = yours, start = Priority is 1, stop = State is Resolved.
2. Add a second SLA `PRAC P1 Response` of 15 min stopping when *Assigned to is not empty*.
3. Add **pause conditions** (State = On Hold).
4. Create **SLA Workflow/Flow** (or SLA percentage notifications) that notifies at 50% and 100%.
5. Create **Scheduled Script Execution** `PRAC Auto-close stale`: daily; incidents with state = *On Hold* and reason *Awaiting Caller*, `sys_updated_on < 5 days ago` → set Closed with close notes.
6. Test by creating a P1; inspect **Task SLAs** (`task_sla`) and use a background script to **advance** dates for testing.
7. Add a **System Property** `x_..._prac.stale_days` and read it with `gs.getProperty` in the job.

## Hints
<details><summary>Hint 1</summary>

*Service Level Management > SLA > SLA Definitions*. Make sure plugin **Service Level Management** is active in the PDI. Attach the SLA to the **Incident** table, type **SLA**.
</details>
<details><summary>Hint 2</summary>

Encoded query for stale: `state=3^hold_reason=1^sys_updated_on<javascript:gs.daysAgoStart(5)`. Test it in the list filter first, then **Copy query**.
</details>
<details><summary>Hint 3 — job script</summary>

```js
var days = parseInt(gs.getProperty('x_..._prac.stale_days', '5'), 10);
var gr = new GlideRecord('incident');
gr.addEncodedQuery('state=3^sys_updated_on<javascript:gs.daysAgoStart(' + days + ')');
gr.query();
while (gr.next()) {
    gr.state = 7;
    gr.close_code = 'Resolved by caller';
    gr.close_notes = 'Auto-closed by PRAC stale job';
    gr.update();
}
```
Use **Execute Now** to test (not wait for the schedule).
</details>

## Support
- Docs: *Create an SLA definition*, *SLA retroactive start*, *Scheduled Jobs*.
- Always use `setLimit` and a safe condition when mass-updating.

## Acceptance checklist
- [ ] Task SLA records appear on new P1 incidents
- [ ] Pause condition works on On Hold
- [ ] Scheduled job closes stale incidents; property is used

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/contract_sla?sysparm_query=nameLIKEPRAC&sysparm_fields=name,duration,table,active'
scripts/sn-login.sh get '/api/now/table/sysauto_script?sysparm_query=nameLIKEPRAC&sysparm_fields=name,run_type,active'
scripts/sn-login.sh get '/api/now/table/task_sla?sysparm_query=sla.nameLIKEPRAC&sysparm_limit=3&sysparm_fields=task,stage,has_breached'
```

## Stretch
Build a **Performance Analytics-style** report (Reports) for SLA breach % by assignment group.
