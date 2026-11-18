# Activity 03 — Client Scripts & UI Actions

**Level:** 🟡 Easy · **Time:** ~60 min · **Prev:** [02](02-forms-lists-ui-policy.md) · **Next:** [04](04-business-rules.md)

## Objective
Write your first client-side scripts (`g_form`, `g_user`) and add a form button with a **UI Action**.

## Scenario
Agents often forget to ask about the affected service. You want live guidance on the form and a one-click **Escalate** button.

## Tasks
1. **onChange Client Script** on `impact` and `urgency`: when both are `1`, show an info message *"This is a P1 – consider a Major Incident"* (`g_form.addInfoMessage`).
2. **onLoad Client Script**: if the logged-in user does **not** have role `itil`, make `assignment_group` read-only (`g_user.hasRole`).
3. **onSubmit Client Script**: block save when Short description has fewer than 10 characters (return `false` + `g_form.showFieldMsg`).
4. **UI Action** (form button) `PRAC Escalate`: sets Urgency = 1, Impact = 1, adds a work note "Escalated by <user>", saves, and stays on the form. Visible only when State is not Closed/Resolved.
5. **UI Action** (list context menu) `PRAC Assign to me`: assigns the selected incidents to the logged-in user.

6. **onChange Client Script** on `impact` (Activity 02 follow-up): when Impact becomes `1`, default your **Affected users** field to 1 if it is empty.

## Hints
<details><summary>Hint 1</summary>

Client scripts: *System Definition > Client Scripts*. Types: onLoad, onChange, onSubmit, onCellEdit. Parameters for onChange: `control, oldValue, newValue, isLoading, isTemplate`. Always return early if `isLoading`.
</details>
<details><summary>Hint 2</summary>

```js
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') return;
    if (g_form.getValue('impact') == '1' && g_form.getValue('urgency') == '1') {
        g_form.addInfoMessage('This is a P1 – consider a Major Incident');
    }
}
```
</details>
<details><summary>Hint 3 — UI Action structure</summary>

Check **Client** + **Form button**, set **Onclick** = `escalate()` and use *both* a client function and a server branch:

```js
function escalate() {
    g_form.setValue('urgency', 1);
    g_form.setValue('impact', 1);
    gsftSubmit(null, g_form.getFormElement(), 'prac_escalate');
}
if (typeof window == 'undefined') serverEscalate();
function serverEscalate() {
    current.work_notes = 'Escalated by ' + gs.getUserDisplayName();
    current.update();
    action.setRedirectURL(current);
}
```
(Action name must equal `prac_escalate`.) List action: use `GlideRecord`-free `current` loop via **List context menu** + `new GlideRecord('incident')` on `g_list.getChecked()` if client, or server-side with `current` per row.
</details>

## Support
- Client-side APIs: `g_form`, `g_user`, `g_list`, `g_scratchpad`, `GlideAjax` (next activities).
- Never use `GlideRecord` in client scripts (sync, slow) — Activity 05 covers GlideAjax.

## Acceptance checklist
- [ ] P1 message appears on impact/urgency change
- [ ] Non-ITIL user cannot edit assignment group
- [ ] Short description < 10 chars blocks save
- [ ] Escalate button works and writes work note
- [ ] "Assign to me" assigns multiple selected rows

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sys_script_client?sysparm_query=nameLIKEPRAC^table=incident&sysparm_fields=name,type,field,active'
scripts/sn-login.sh get '/api/now/table/sys_ui_action?sysparm_query=nameLIKEPRAC&sysparm_fields=name,table,client,form_button,list_context_menu'
```

## Stretch
Use `g_form.getReference('caller_id', cb)` (async) to show the caller's VIP status as a message.
