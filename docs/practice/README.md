# ServiceNow ITSM Development Practice Path

12 hands-on activities on your PDI (`dev469616`), ordered **easy → advanced**. Every activity is its own file, so you can open one at a time.

## How to use this path

1. Open the next activity file and read **Scenario** + **Tasks**.
2. Try it yourself first. Stuck? Open **Hint 1**, then **Hint 2**, then **Hint 3** (each is hidden in a collapsible block, going from nudge to near-solution).
3. Tick the **Acceptance checklist**.
4. Ask Claude to **check** it: *"Check activity 04"*. Claude can verify your work through the REST API (`scripts/sn-login.sh get ...`). Each activity has a ready-made verification query.
5. Ask Claude for **help** any time: *"I'm stuck on activity 05, here's my script"*.

## Ground rules

- Prefix everything you create with **`PRAC`** (e.g. `PRAC - Set priority`) so it is easy to find and clean up.
- Do all work inside the scoped app created in Activity 01 (stay in its application scope).
- Test with a dedicated test user/records, not shared data.
- Use the **Script Debugger** and `gs.info()` / `gs.log` + **System Logs > System Log > Script Log Statements** for debugging.

## The path

| # | Level | Activity | Core skills | Time |
|---|-------|----------|-------------|------|
| [01](01-explore-and-create-app.md) | 🟢 Beginner | Explore ITSM data model & create your app | Navigation, tables, dictionary, scoped app | 45 min |
| [02](02-forms-lists-ui-policy.md) | 🟢 Beginner | Form, list & UI Policy | Form Designer, list layout, UI Policy | 60 min |
| [03](03-client-scripts-ui-actions.md) | 🟡 Easy | Client Script & UI Action | `g_form`, onChange, UI Action | 60 min |
| [04](04-business-rules.md) | 🟡 Easy | Business Rules | before/after, `current`, GlideRecord | 75 min |
| [05](05-script-include-glideajax.md) | 🟠 Intermediate | Script Include + GlideAjax | Client↔server, reusable code | 90 min |
| [06](06-acls-roles-security.md) | 🟠 Intermediate | ACLs, roles & data security | ACL, roles, impersonation | 75 min |
| [07](07-events-notifications.md) | 🟠 Intermediate | Events & email notifications | `gs.eventQueue`, notifications | 75 min |
| [08](08-flow-designer.md) | 🟠 Intermediate | Flow Designer automation | Flows, actions, subflows | 90 min |
| [09](09-service-catalog.md) | 🔴 Advanced | Service Catalog item + fulfilment | Variables, catalog client scripts, flow | 120 min |
| [10](10-sla-scheduled-jobs.md) | 🔴 Advanced | SLA & scheduled jobs | SLA definitions, scheduled scripts | 90 min |
| [11](11-scripted-rest-integration.md) | 🔴 Advanced | Scripted REST API & outbound REST | REST in/out, JSON, auth | 120 min |
| [12](12-capstone-major-incident.md) | ⚫ Expert | Capstone: Major Incident app + ATF | Table extension, flows, ATF, Now SDK | 4–6 h |

## Progress tracker

- [ ] 01  - [ ] 02  - [ ] 03  - [ ] 04  - [ ] 05  - [ ] 06
- [ ] 07  - [ ] 08  - [ ] 09  - [ ] 10  - [ ] 11  - [ ] 12

## Quick reference

| Need | Where |
|------|-------|
| Run server code | **System Definition > Scripts - Background** (use a scoped scope selector) |
| Debug | `gs.info()`, Script Debugger, **System Logs > All** |
| API docs | developer.servicenow.com → *API Reference* (GlideRecord, GlideSystem, GlideForm, GlideAjax, RESTMessageV2) |
| Test as another user | Avatar menu → **Impersonate User** |
| Verify via REST | `scripts/sn-login.sh get '/api/now/table/<table>?sysparm_limit=5'` |
