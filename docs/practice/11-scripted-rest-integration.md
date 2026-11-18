# Activity 11 — Scripted REST API & outbound REST integration

**Level:** 🔴 Advanced · **Time:** ~120 min · **Prev:** [10](10-sla-scheduled-jobs.md) · **Next:** [12](12-capstone-major-incident.md)

## Objective
Expose a custom **Scripted REST API** and consume an external API using **RESTMessageV2**.

## Scenario
A monitoring tool must create incidents in ServiceNow, and ServiceNow must push P1 details to an external webhook (use https://webhook.site or similar).

## Tasks
1. **Scripted REST API** `PRAC Monitoring` (API ID `prac_monitoring`), resource `POST /alert` accepting JSON: `{ "host": "...", "severity": 1-3, "message": "..." }`.
2. In the script: validate input (400 on bad payload), map severity → impact/urgency, de-duplicate (if an open incident exists for same host → add a work note instead), return `201` with `{ number, sys_id }`.
3. Secure it with **role/ACL** `itil` and Basic auth; test with `prac.itil` (not admin).
4. **Resource** `GET /alert/{host}`: list open incidents for a host.
5. **Outbound REST Message** `PRAC Webhook` (POST) + **business rule (async)** that sends P1 details as JSON on insert; log HTTP status.
6. Handle failure: retry once, log to `gs.error`, and write a work note on failure.
7. Test everything with `curl` through the proxy-friendly script.

## Hints
<details><summary>Hint 1</summary>

*System Web Services > Scripted REST APIs*. Endpoint becomes `/api/<scope>/prac_monitoring/alert`. Use **Explore REST API** in the nav for a built-in tester.
</details>
<details><summary>Hint 2 — inbound skeleton</summary>

```js
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    var b = request.body.data;
    if (!b.host || !b.message) {
        response.setStatus(400);
        return { error: 'host and message required' };
    }
    var gr = new GlideRecord('incident');
    gr.initialize();
    gr.short_description = '[' + b.host + '] ' + b.message;
    gr.impact = gr.urgency = b.severity || 3;
    gr.insert();
    response.setStatus(201);
    return { number: gr.number + '', sys_id: gr.getUniqueValue() };
})(request, response);
```
</details>
<details><summary>Hint 3 — outbound</summary>

```js
var r = new sn_ws.RESTMessageV2();
r.setEndpoint('https://webhook.site/<your-id>');
r.setHttpMethod('POST');
r.setRequestHeader('Content-Type', 'application/json');
r.setRequestBody(JSON.stringify({ number: current.number + '', priority: current.priority + '' }));
var resp = r.execute();
gs.info('PRAC webhook status ' + resp.getStatusCode());
```
Outbound hosts may be blocked by the PDI/network policy — test with the **REST Message Test** button first.
</details>

## Support
- Test inbound from this repo: `scripts/sn-login.sh get '/api/<scope>/prac_monitoring/alert/myhost'`.
- Docs: *Scripted REST APIs*, *RESTMessageV2*, *Basic auth*, *API access policies*.

## Acceptance checklist
- [ ] POST with valid payload → 201 and incident created
- [ ] Duplicate host → work note, no new incident
- [ ] Invalid payload → 400
- [ ] Non-ITIL user → 403
- [ ] Outbound webhook fires for new P1

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sys_ws_definition?sysparm_query=nameLIKEPRAC&sysparm_fields=name,base_uri,active'
scripts/sn-login.sh get '/api/now/table/sys_ws_operation?sysparm_query=web_service_definition.nameLIKEPRAC&sysparm_fields=name,http_method,operation_uri'
```

## Stretch
Add **versioning** (`v1`/`v2`), **pagination** (`sysparm_limit/offset`) and an **API access policy**.
