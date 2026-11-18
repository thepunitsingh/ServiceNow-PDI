# Activity 09 — Service Catalog item with fulfilment

**Level:** 🔴 Advanced · **Time:** ~120 min · **Prev:** [08](08-flow-designer.md) · **Next:** [10](10-sla-scheduled-jobs.md)

## Objective
Build a **catalog item** with variables, catalog client scripts, a variable set and a fulfilment flow.

## Scenario
Employees request a **Laptop Accessory Pack**. Different accessories need different approvals, and the fulfilment team must receive a task.

## Tasks
1. Create a catalog `PRAC Hardware` and category `Accessories`.
2. Catalog item `PRAC Laptop Accessory Pack` with variables:
   - `accessory` (Select Box: Mouse / Keyboard / Dock / Monitor)
   - `justification` (Multi-line text; mandatory if accessory = Monitor)
   - `needed_by` (Date; must be ≥ 3 days from today)
   - `deliver_to` (Reference → Location)
3. **Catalog Client Script** (onChange `accessory`): show/hide `justification`, set it mandatory for Monitor.
4. **Catalog Client Script** (onSubmit): validate `needed_by` ≥ 3 days ahead.
5. Create a **Variable Set** `PRAC Contact Info` (phone, preferred time) and attach it.
6. **Flow** triggered by *Service Catalog*: approval for Monitor; then create a **Catalog Task** for `PRAC Service Desk` with variable values in the description.
7. Add **User Criteria** so only members of `PRAC Service Desk` or role `itil` can see it.
8. Order it as a user; verify RITM → Catalog Task → Approval chain.

## Hints
<details><summary>Hint 1</summary>

*Maintain Items* (Service Catalog > Catalog Definitions > Maintain Items). Variables live in the **Variables** related list on the item.
</details>
<details><summary>Hint 2</summary>

Catalog client scripts: set **Applies to = A Catalog Item**; use `g_form.setMandatory('justification', true)` / `g_form.setDisplay(...)`. In scripts, variable names are the **Name** not the **Question**.
</details>
<details><summary>Hint 3 — date check</summary>

```js
function onSubmit() {
    var needed = g_form.getValue('needed_by');
    var min = new Date(); min.setDate(min.getDate() + 3);
    if (getDateFromFormat(needed, g_user_date_format) < min.getTime()) {
        g_form.showFieldMsg('needed_by', 'Must be at least 3 days away', 'error');
        return false;
    }
}
```
(Alternatively validate server-side in a Script Include for reliability.) In the flow, read variables with the *Get Catalog Variables* action.
</details>

## Support
- Doc: *Service Catalog*, *Catalog flows*, *User Criteria*.
- Debug: open the RITM → *Variables* related list shows submitted values.

## Acceptance checklist
- [ ] Item visible in the portal/catalog to the right users only
- [ ] Monitor requires justification; client validation works
- [ ] Order creates RITM + Catalog Task + approval (for Monitor)
- [ ] Variable set appears

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sc_cat_item?sysparm_query=nameLIKEPRAC&sysparm_fields=name,active,category'
scripts/sn-login.sh get '/api/now/table/item_option_new?sysparm_query=cat_item.nameLIKEPRAC&sysparm_fields=name,question_text,type,mandatory'
scripts/sn-login.sh get '/api/now/table/sc_req_item?sysparm_query=cat_item.nameLIKEPRAC&sysparm_limit=3&sysparm_fields=number,state'
```

## Stretch
Create a **Record Producer** that creates an Incident from the catalog with a **producer script** mapping variables to fields.
