# Activity 07 — Events & Email Notifications

**Level:** 🟠 Intermediate · **Time:** ~75 min · **Prev:** [06](06-acls-roles-security.md) · **Next:** [08](08-flow-designer.md)

## Objective
Fire a custom **event** from a Business Rule and send an **email notification** with dynamic content.

## Scenario
When a P1 incident is created, notify the assignment group manager and the caller. Also send a daily digest of open P1s.

## Tasks
1. Register an event `prac.incident.p1` in **System Policy > Events > Registry**.
2. **After insert** BR: if priority = 1 → `gs.eventQueue('prac.incident.p1', current, current.caller_id, current.assignment_group)`.
3. **Notification** triggered by that event: recipients = *Event parm 1* (caller) + group manager.
4. Add a **Notification Email Script** that prints a table of the caller's last 3 incidents.
5. Make the notification show the incident link using `${URI_REF}` and include `${short_description}`.
6. Review **System Mailboxes > Outbound > Emails** (PDI sends are simulated) and **Event Log** to verify.
7. (Bonus) **Scheduled digest** notification for open P1s (use Activity 10 knowledge or "Run once" now).

## Hints
<details><summary>Hint 1</summary>

Events: *System Policy > Events > Registry* (`sysevent_register`). Event log: *System Policy > Events > Event Log* — check the **State** column (ready/processed/error).
</details>
<details><summary>Hint 2</summary>

Notification: *System Notification > Email > Notifications*. **When to send** = *Event is fired*, select your event. **Who will receive** → *Users/Groups in fields* or *Event parm 1 contains recipient*.
</details>
<details><summary>Hint 3 — email script</summary>

```js
(function runMailScript(current, template, email, email_action, event) {
    var gr = new GlideRecord('incident');
    gr.addQuery('caller_id', current.caller_id);
    gr.orderByDesc('sys_created_on');
    gr.setLimit(3);
    gr.query();
    while (gr.next()) template.print(gr.number + ' - ' + gr.short_description + '<br/>');
})(current, template, email, email_action, event);
```
Call it in the message body with `${mail_script:prac_recent_incidents}`.
</details>

## Support
- Docs: *Email notifications*, *Email scripts*, *Events*.
- Preview a notification: **Notification → Preview Notification**.

## Acceptance checklist
- [ ] Event queued on P1 creation (Event Log row)
- [ ] Notification created and enabled
- [ ] Outbound email shows incident link and recent incidents

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sysevent_register?sysparm_query=event_nameSTARTSWITHprac&sysparm_fields=event_name,table'
scripts/sn-login.sh get '/api/now/table/sysevent?sysparm_query=name=prac.incident.p1^ORDERBYDESCsys_created_on&sysparm_limit=3&sysparm_fields=name,state,parm1,sys_created_on'
scripts/sn-login.sh get '/api/now/table/sysevent_email_action?sysparm_query=nameLIKEPRAC&sysparm_fields=name,event_name,active'
```

## Stretch
Add an **inbound email action** that creates incidents from emails with subject `PRAC:` and parses the caller.
