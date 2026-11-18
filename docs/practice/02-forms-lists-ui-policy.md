# Activity 02 — Forms, lists & UI Policy

**Level:** 🟢 Beginner · **Time:** ~60 min · **Prev:** [01](01-explore-and-create-app.md) · **Next:** [03](03-client-scripts-ui-actions.md)

## Objective
Customize the Incident form and list without code, and enforce field behaviour with a **UI Policy**.

## Scenario
Service desk agents want a cleaner form. When an incident has **High impact**, the number of **Affected users** must be provided; otherwise that field should stay hidden.

## Tasks
1. Create a **form view** called `prac` for Incident (or use the default) and add a new section **PRAC Details**.
2. Add a new field to Incident: **Prac Business Impact** (String, 100). In your app scope its name becomes `x_<scope>_prac_business_impact`.
3. Place the field in the new section using **Form Layout** or **Form Designer**.
4. Personalize the Incident **list layout**: show Number, Caller, Priority, State, Assignment group, Updated.
5. Add a second field **Affected users** (Integer) to the PRAC Details section. Create a **UI Policy** `PRAC Affected users when High impact` (condition: *Impact is 1 - High*) that makes it *visible* and *mandatory*; with **Reverse if false** it is hidden and optional otherwise.
6. Make **Business impact** mandatory when Priority is 1 – Critical or 2 – High.
7. Save a **filter** `PRAC Open P1/P2` (State != Closed, Priority <= 2) as a named list filter.

## Hints
<details><summary>Hint 1</summary>

Right-click the form header → **Configure > Form Layout / Form Design**. List: gear icon on the list header.
</details>
<details><summary>Hint 2</summary>

UI Policy: *System UI > UI Policies*. Set **Table** = Incident, **Conditions** = `Impact is 1 - High`. Under **UI Policy Actions** add your Affected users field → Mandatory = True, Visible = True. Check **Reverse if false** so the field hides again.
</details>
<details><summary>Hint 3</summary>

For the priority condition use the condition builder: `Priority is 1 - Critical` **OR** `Priority is 2 - High`. Use *Add OR Clause*. Remember the **Global** checkbox and **On load** option.
</details>

## Support
- Scripts in a *scoped* UI policy on a global table (like `incident`) are blocked: the stock client script "Limit out-of-scope table actions" makes **Run scripts** read-only. Do conditional defaults with a Client Script instead (Activity 03).
- Note: ServiceNow already ships a global policy for *On Hold → On hold reason*; don't duplicate stock policies. This activity uses a custom field instead.
- UI Policy vs Data Policy: UI Policy runs in the browser (forms), Data Policy also applies server-side/imports.
- Doc: *Create a UI policy*, *Form Designer*.

## Acceptance checklist
- [ ] New field appears under section "PRAC Details"
- [ ] High impact → Affected users visible & mandatory ; hidden otherwise
- [ ] P1/P2 → Business impact mandatory
- [ ] List shows requested columns; filter saved

## Verify
```bash
node scripts/sn-browser.js get '/api/now/table/sys_ui_policy?sysparm_query=table=incident^short_descriptionLIKEPRAC&sysparm_fields=short_description,conditions,reverse_if_false,active'
node scripts/sn-browser.js get '/api/now/table/sys_dictionary?sysparm_query=name=incident^elementLIKEbusiness_impact^ORelementLIKEaffected_users&sysparm_fields=element,column_label,max_length,internal_type'
```

## Stretch
Add a **UI Policy script** (*Execute if true*) (global scope only) that sets focus on the Affected users field, and a **Related list** (e.g. Problem tasks) to the form.
