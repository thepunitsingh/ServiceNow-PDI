# Activity 01 — Explore the ITSM data model & create your app

**Level:** 🟢 Beginner · **Time:** ~45 min · **Next:** [02](02-forms-lists-ui-policy.md)

## Objective
Understand how ITSM data is structured and create the scoped application that will hold all your practice work.

## Scenario
You join a service desk team as a new developer. Before changing anything you must understand the Incident table and set up a proper development container.

## Tasks
1. Open **Incident > All**. Create 3 test incidents with different categories, impacts and urgencies. Note how **Priority** is calculated.
2. Open **System Definition > Tables**, find `incident`. Answer:
   - What table does it **extend**? (and what fields come from there?)
   - How many columns does it have? Which are *inherited*?
3. Open the **Dictionary** entry for `state`. What type is it? Where are the choices stored (`sys_choice`)?
4. Find the **Priority Lookup** data (`dl_u_priority`): which Impact/Urgency combo gives Priority 1?
5. Open **Studio** (or **App Engine Studio**) and create a **scoped application** named `PRAC ITSM Practice`.
6. Create a **Update Set / application** note: write the scope name down — you will use it all along.
7. Create a **user** `prac.itil` with roles `itil` and set a password; create a group `PRAC Service Desk` and add the user.

## Hints
<details><summary>Hint 1 — where to look</summary>

Use the filter navigator (top-left) and type `incident`, `Tables`, `Studio`, `Users`, `Groups`. Everything is a table: users = `sys_user`, groups = `sys_user_group`.
</details>
<details><summary>Hint 2 — extends & priority</summary>

`incident` extends `task`. In the Tables list use the **Extends table** column. For priority, search the navigator for **Data Lookup Definitions** / *Priority Data Lookup Rules* (table `dl_u_priority`).
</details>
<details><summary>Hint 3 — creating the app</summary>

Studio → *Create Application* → *Let's get started* → name `PRAC ITSM Practice`. After creating, the **application picker** (gear → Developer tab → Application) shows your scope. Make sure it is selected before you create records.
</details>

## Support
- Concepts: *Table extension*, *Dictionary*, *Application scope*, *Data Lookup*.
- Useful URL pattern: `https://dev181171.service-now.com/incident_list.do`, `/sys_db_object_list.do`.

## Acceptance checklist
- [ ] 3 incidents exist with different priorities
- [ ] You can explain `incident` → `task` inheritance
- [ ] Scoped app `PRAC ITSM Practice` exists
- [ ] User `prac.itil` is in group `PRAC Service Desk` and has role `itil`

## Verify (Claude can run these)
```bash
scripts/sn-login.sh get '/api/now/table/sys_scope?sysparm_query=nameLIKEPRAC&sysparm_fields=name,scope'
scripts/sn-login.sh get '/api/now/table/sys_user?sysparm_query=user_name=prac.itil&sysparm_fields=user_name,roles'
scripts/sn-login.sh get '/api/now/table/sys_user_group?sysparm_query=nameLIKEPRAC&sysparm_fields=name'
```

## Stretch
Export the **Incident** table schema through REST: `/api/now/table/sys_dictionary?sysparm_query=name=incident^internal_type=string&sysparm_fields=element,column_label`.
