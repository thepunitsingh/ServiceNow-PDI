# Activity 08 — Flow Designer automation

**Level:** 🟠 Intermediate · **Time:** ~90 min · **Prev:** [07](07-events-notifications.md) · **Next:** [09](09-service-catalog.md)

## Objective
Automate ITSM processes with **Flow Designer**: triggers, conditions, actions, subflows, and a custom action.

## Scenario
When a P1 is created, the process must create a Problem record, ask the group manager for approval to start a Major Incident review, and post updates.

## Tasks
1. **Flow** `PRAC - P1 Response`: trigger **Created** on Incident, condition `Priority is 1`.
2. Action **Create Record** on `problem` (short description from the incident, link back via `first_reported_by_task`).
3. Action **Ask for Approval** to the assignment group's manager; on *Approved* → set Incident `work_notes`; on *Rejected* → add a rejection note.
4. Use a **Flow Logic: If/Else** + **Wait for condition** (incident state = Resolved) then **Update Record** the problem.
5. Create a **Subflow** `PRAC - Notify Stakeholders` (input: incident, text) and call it from the flow.
6. Create a **custom Action** (Action Designer) `PRAC Get Open Count` that reuses your Script Include from Activity 05 and returns a number; use it in a flow condition.
7. Run it with **Test** and inspect the **Flow Execution** (Operations > Executions).

## Hints
<details><summary>Hint 1</summary>

*Process Automation > Flow Designer*. Flows must be **Activated**. Data pills: drag from the data panel on the right.
</details>
<details><summary>Hint 2</summary>

*Ask For Approval* needs the approver user pill (e.g. `Trigger → Incident → Assignment group → Manager`). Approval rules: *Approve* when anyone approves.
</details>
<details><summary>Hint 3 — custom action</summary>

Action Designer → New → *Inputs*: `caller` (Reference to User). Step: **Script** with
```js
(function execute(inputs, outputs) {
    outputs.count = new PRACIncidentUtil().openIncidentsFor(inputs.caller);
})(inputs, outputs);
```
Add output `count` (Integer) and map it in the *Outputs* tab.
</details>

## Support
- Flow vs Business Rule vs Workflow: Flow is the strategic automation tool; BRs for tight data logic.
- Docs: *Flow Designer*, *Action Designer*, *Subflows*, *Flow Execution Details*.

## Acceptance checklist
- [ ] Creating a P1 incident auto-creates a Problem
- [ ] Approval request is generated and drives outcomes
- [ ] Subflow + custom action both work
- [ ] Execution shows green steps

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sys_hub_flow?sysparm_query=nameLIKEPRAC&sysparm_fields=name,active,status,type'
scripts/sn-login.sh get '/api/now/table/sys_flow_context?sysparm_query=nameLIKEPRAC^ORDERBYDESCsys_created_on&sysparm_limit=3&sysparm_fields=name,state'
```

## Stretch
Add a **Flow Variable** to count retries and a **For Each** over the incident's related tasks.
