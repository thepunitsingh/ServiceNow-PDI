# Activity 04 — Business Rules & GlideRecord

**Level:** 🟡 Easy · **Time:** ~75 min · **Prev:** [03](03-client-scripts-ui-actions.md) · **Next:** [05](05-script-include-glideajax.md)

## Objective
Master server-side logic: Business Rule timing (before/after/async/display) and `GlideRecord` queries.

## Scenario
Process rules the service desk wants automated, regardless of how incidents are created (UI, email, REST).

## Tasks
1. **Before (insert)** BR: if `category = network` and Assignment group empty → set group to `Network` (use a group lookup by name, don't hardcode sys_id).
2. **Before (update)** BR: when State changes to *Resolved* and `close_notes` is empty → `current.setAbortAction(true)` with an error message.
3. **After (insert/update)** BR: when Priority becomes 1 → add a work note "P1 raised by <user>" **without** causing recursion (hint: `setWorkflow(false)` / don't `update()` in before).
4. **Async** BR: when an incident is **Closed**, count how many *closed* incidents the caller has and log it with `gs.info`.
5. **Display** BR: store `g_scratchpad.openCount` = caller's open incident count (used later by a client script).
6. Use a **Background Script** to bulk-query: list all open P1 incidents with `GlideRecord` and print number + caller using `gs.print`.
7. Use `GlideAggregate` to print the incident count per category.

## Hints
<details><summary>Hint 1 — when does each type run?</summary>

Before: before DB write (modify `current`, never call `update()`). After: after DB write (can touch other records). Async: queued, runs later. Display: when form loads, before sending to the client.
</details>
<details><summary>Hint 2 — conditions</summary>

Use the **Condition** field (`current.category == 'network' && current.assignment_group.nil()`) and `current.state.changesTo(6)`. Check `gs.getProperty` for state values if unsure (6 = Resolved, 7 = Closed in the default).
</details>
<details><summary>Hint 3 — skeletons</summary>

```js
(function executeRule(current, previous) {
    var grp = new GlideRecord('sys_user_group');
    if (grp.get('name', 'Network')) current.assignment_group = grp.sys_id;
})(current, previous);
```
```js
var ga = new GlideAggregate('incident');
ga.addAggregate('COUNT');
ga.groupBy('category');
ga.query();
while (ga.next()) gs.print(ga.category + ': ' + ga.getAggregate('COUNT'));
```
</details>

## Support
- Best practice: never `current.update()` in a before rule; avoid `current.update()` loops; query with `addQuery` + `setLimit`.
- `GlideRecord` cheat sheet: `get`, `addQuery`, `addEncodedQuery`, `orderBy`, `setLimit`, `next`, `insert`, `update`, `deleteRecord`, `getRowCount`.

## Acceptance checklist
- [ ] Network incidents auto-assigned
- [ ] Cannot resolve without close notes (both via UI and REST)
- [ ] P1 work note added once, no recursion
- [ ] Display BR sets scratchpad; async log appears
- [ ] Background script outputs correct lists

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sys_script?sysparm_query=nameLIKEPRAC^collection=incident&sysparm_fields=name,when,action_insert,action_update,active'
# prove the server-side rule works through REST (should be rejected):
#   PATCH an incident to state=6 without close_notes and check the error.
```

## Stretch
Write the same logic as one **Script Include**-based BR (call `new PRACIncidentUtil().assignByCategory(current)` — you build it in Activity 05).
