# Activity 05 — Script Include + GlideAjax

**Level:** 🟠 Intermediate · **Time:** ~90 min · **Prev:** [04](04-business-rules.md) · **Next:** [06](06-acls-roles-security.md)

## Objective
Write a reusable, class-based **Script Include** and call it from the client with **GlideAjax**.

## Scenario
When the agent selects a *Caller*, the form should instantly show how many open incidents that caller already has — and warn if there are 3+. Logic must be reusable server-side (BRs, flows, REST).

## Tasks
1. Create a **client-callable** Script Include `PRACIncidentUtil` (extends `AbstractAjaxProcessor`) with:
   - `getOpenCount()` — reads `sysparm_caller` and returns the number of active incidents for that caller.
   - `getTopCategory()` — returns the caller's most frequent category.
2. Add a plain (non-ajax) helper method `openIncidentsFor(callerSysId)` that the ajax function reuses.
3. **onChange Client Script** on `caller_id`: use `GlideAjax('PRACIncidentUtil')` with `addParam('sysparm_name','getOpenCount')`; show a field message; warn if >= 3.
4. Add a Business Rule (before insert) that reuses `new PRACIncidentUtil().openIncidentsFor(current.caller_id)` to add a work note when >= 3.
5. Write a **Background Script** that tests the class with 3 callers.

## Hints
<details><summary>Hint 1</summary>

Script Include checkbox **Client callable** must be ticked and the class must extend `global.AbstractAjaxProcessor` (in scoped: `global.AbstractAjaxProcessor`).
</details>
<details><summary>Hint 2 — server side</summary>

```js
var PRACIncidentUtil = Class.create();
PRACIncidentUtil.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    getOpenCount: function () {
        return String(this.openIncidentsFor(this.getParameter('sysparm_caller')));
    },
    openIncidentsFor: function (callerId) {
        var ga = new GlideAggregate('incident');
        ga.addActiveQuery();
        ga.addQuery('caller_id', callerId);
        ga.addAggregate('COUNT');
        ga.query();
        return ga.next() ? parseInt(ga.getAggregate('COUNT'), 10) : 0;
    },
    type: 'PRACIncidentUtil'
});
```
</details>
<details><summary>Hint 3 — client side</summary>

```js
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || !newValue) return;
    var ga = new GlideAjax('PRACIncidentUtil');
    ga.addParam('sysparm_name', 'getOpenCount');
    ga.addParam('sysparm_caller', newValue);
    ga.getXMLAnswer(function (answer) {
        g_form.hideFieldMsg('caller_id');
        g_form.showFieldMsg('caller_id', 'Open incidents: ' + answer, parseInt(answer, 10) >= 3 ? 'error' : 'info');
    });
}
```
Always use the **async callback** (never `getXMLWait`).
</details>

## Support
- Debug the ajax call: browser DevTools → Network → `xmlhttp.do`; server logs for errors.
- Naming: Script Include name **must equal** class name.

## Acceptance checklist
- [ ] Changing caller shows a live count
- [ ] 3+ open incidents → error-style message
- [ ] Same class reused in the BR and a background script
- [ ] No GlideRecord in client code

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sys_script_include?sysparm_query=nameLIKEPRAC&sysparm_fields=name,client_callable,api_name,active'
```

## Stretch
Add **unit-test-style** background scripts and cache results with `GlideSession` / `gs.getSession().putProperty`.
