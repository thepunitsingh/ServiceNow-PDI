# Activity 02 — Forms, lists & UI Policy

**Level:** 🟢 Beginner · **Time:** ~60 min · **Prev:** [01](01-explore-and-create-app.md) · **Next:** [03](03-client-scripts-ui-actions.md)

## Objective
Customize the Incident form and list without code, and enforce field behaviour with a **UI Policy**.

## Scenario
Service desk agents want a cleaner form. When an incident is put **On Hold**, a **Hold reason** must be provided; otherwise that field should be hidden.

## Tasks
1. Create a **form view** called `prac` for Incident (or use the default) and add a new section **PRAC Details**.
2. Add a new field to Incident: `u_prac_business_impact` (String, 100) — in your app scope this becomes `x_..._business_impact`.
3. Place the field in the new section using **Form Layout** or **Form Designer**.
4. Personalize the Incident **list layout**: show Number, Caller, Priority, State, Assignment group, Updated.
5. Create a **UI Policy** on Incident: *When State is On Hold* → make **Hold reason** (`hold_reason`) *mandatory* and *visible*; otherwise hide it.
6. Make **Business impact** mandatory when Priority is 1 – Critical or 2 – High.
7. Save a **filter** `PRAC Open P1/P2` (State != Closed, Priority <= 2) as a named list filter.

## Hints
<details><summary>Hint 1</summary>

Right-click the form header → **Configure > Form Layout / Form Design**. List: gear icon on the list header.
</details>
<details><summary>Hint 2</summary>

UI Policy: *System UI > UI Policies*. Set **Table** = Incident, **Conditions** = `State is On hold`. Under **UI Policy Actions** add `hold_reason` → Mandatory = True, Visible = True. Check **Reverse if false** so the field hides again.
</details>
<details><summary>Hint 3</summary>

For the priority condition use the condition builder: `Priority is 1 - Critical` **OR** `Priority is 2 - High`. Use *Add OR Clause*. Remember the **Global** checkbox and **On load** option.
</details>

## Support
- UI Policy vs Data Policy: UI Policy runs in the browser (forms), Data Policy also applies server-side/imports.
- Doc: *Create a UI policy*, *Form Designer*.

## Acceptance checklist
- [ ] New field appears under section "PRAC Details"
- [ ] On Hold state → Hold reason visible & mandatory; hidden otherwise
- [ ] P1/P2 → Business impact mandatory
- [ ] List shows requested columns; filter saved

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sys_ui_policy?sysparm_query=table=incident^short_descriptionLIKEPRAC^ORnameLIKEPRAC&sysparm_fields=short_description,conditions,reverse_if_false'
scripts/sn-login.sh get '/api/now/table/sys_dictionary?sysparm_query=name=incident^elementLIKEbusiness_impact&sysparm_fields=element,column_label,max_length'
```

## Stretch
Add a **UI Policy script** (*Execute if true*) that sets focus on the Hold reason field, and a **Related list** (e.g. Problem tasks) to the form.
