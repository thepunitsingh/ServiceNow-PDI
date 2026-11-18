# Activity 12 — Capstone: Major Incident Management app + ATF

**Level:** ⚫ Expert · **Time:** 4–6 h · **Prev:** [11](11-scripted-rest-integration.md)

## Objective
Combine everything: build a small, testable application — **Major Incident Management** — with its own table, security, automation, UI, integration and automated tests.

## Scenario
When a P1 is declared as a Major Incident, a dedicated record tracks the bridge call, communications and post-incident review (PIR).

## Requirements
### Data
1. Table `x_..._major_incident` **extends Task**, with fields: `incident` (ref), `commander` (ref user), `bridge_url`, `impact_summary`, `communication_log` (journal), `pir_required` (boolean), `state` choices (Declared → Bridge Open → Mitigated → Resolved → PIR → Closed).
2. Related list on Incident + UI Action `Declare Major Incident` (creates the record, only for P1/P2).

### Logic
3. Script Include `PRACMajorIncidentUtil` (create, add comm entry, close).
4. Business Rule: state transition validation (no skipping states); PIR must be completed before Closed.
5. Flow: on creation → notify stakeholders, add 30-min recurring "update due" reminder until Mitigated, create PIR task when Resolved.

### Security
6. Roles `major_incident_manager` (all CRUD) and `major_incident_viewer` (read). ACLs per field + table. Group-based commander restriction.

### UI / UX
7. Form sections, UI Policy, client script, and a **Workspace/UI Builder** page or at least a **Dashboard** with open Major Incidents.

### Integration
8. Scripted REST `POST /major/declare` + outbound webhook to a chat tool (simulated).

### Quality
9. **ATF** suite `PRAC Major Incident Suite` with ≥ 5 tests: create record, validation fail, P1 only declare, ACL for viewer, flow creates PIR task.
10. Package with an **Update Set** or **Now SDK** (`servicenow-sdk:now-sdk` skill — use `now-sdk` in this repo) and commit to git.

## Hints
<details><summary>Hint 1 — plan it</summary>

Build in this order: **Table → Roles/ACLs → Script Include → BRs → UI Action → Flow → REST → ATF**. Keep each piece working before the next. Commit after each.
</details>
<details><summary>Hint 2 — ATF</summary>

*Automated Test Framework > Tests*. Step types: *Create a User*, *Impersonate*, *Open a New Form*, *Set Field Values*, *Submit a Form*, *Record Validation*, *Run Server Side Script*. Enable ATF in *Properties* and use a **Test Suite** for the full run.
</details>
<details><summary>Hint 3 — Now SDK</summary>

Check `now.config.json` and `package.json` in this repo; run `npx now-sdk --help` to see `build`, `install`, `transform`. Tip: let the SDK pull existing config from the instance with `transform` to learn the fluent syntax, then author new records in `src/`.
</details>

## Support
- Docs: *Table extension*, *ATF*, *Workspace*, *UI Builder*, *Now SDK*.
- Ask Claude for a **code review** of any piece — paste your script or run `/code-review`.

## Acceptance checklist
- [ ] All 10 requirement groups implemented
- [ ] ATF suite green
- [ ] No hard-coded sys_ids; properties used for config
- [ ] Everything committed (update set / SDK source)

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sys_db_object?sysparm_query=nameLIKEmajor_incident&sysparm_fields=name,super_class.name'
scripts/sn-login.sh get '/api/now/table/sys_atf_test_suite?sysparm_query=nameLIKEPRAC&sysparm_fields=name,active'
scripts/sn-login.sh get '/api/now/table/sys_atf_test?sysparm_query=nameLIKEPRAC&sysparm_fields=name,active'
```

## Stretch
Add **Performance Analytics** indicators (MTTR, # of Major Incidents/month), a **Virtual Agent** topic to declare a Major Incident, and a **Scoped app store-ready** `README` + **ATF run in CI**.
