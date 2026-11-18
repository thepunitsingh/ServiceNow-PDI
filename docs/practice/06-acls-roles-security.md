# Activity 06 — ACLs, roles & data security

**Level:** 🟠 Intermediate · **Time:** ~75 min · **Prev:** [05](05-script-include-glideajax.md) · **Next:** [07](07-events-notifications.md)

## Objective
Control who can read/write/create/delete data with **roles** and **Access Control Lists (ACLs)**.

## Scenario
Security review: only the `PRAC Service Desk` group may close incidents; business impact must be readable only by `itil` users; no one outside ITIL may see work notes.

## Tasks
1. Create role `x_..._prac_manager` (or `prac_manager`) and give it to `prac.itil`'s manager account (create `prac.manager`).
2. Create a **write ACL** on `incident.close_notes` requiring role `prac_manager`.
3. Create a **read ACL** on `incident.<business impact field>` requiring `itil`.
4. Create a **table-level write ACL** on `incident` with a **script** condition: only members of group `PRAC Service Desk` may write when `state == 7` (Closed).
5. Test everything by **impersonating** `prac.itil`, `prac.manager`, and `abel.tuter` (non-ITIL).
6. Turn on **Security Debugging** and read the ACL evaluation trail.
7. Explain the difference between `table.*`, `table.field` and `*` ACLs and evaluation order.

## Hints
<details><summary>Hint 1</summary>

First elevate yourself: **Admin → Elevate role → security_admin**. ACLs live in *System Security > Access Control (ACL)*.
</details>
<details><summary>Hint 2</summary>

ACL evaluation: operation + name match → *roles* AND *condition* AND *script*; most specific ACL (field) is checked and table-level is also checked. A user gets access only if **all matching** ACL pass for the field and the table.
</details>
<details><summary>Hint 3 — script ACL</summary>

```js
answer = false;
var g = new GlideRecord('sys_user_grmember');
g.addQuery('user', gs.getUserID());
g.addQuery('group.name', 'PRAC Service Desk');
g.query();
answer = g.hasNext();
```
Use `gs.hasRole('prac_manager')` for role checks in scripts.
</details>

## Support
- Docs: *Access control rules*, *Security Debugger* (**System Security > Debugging > Debug Security Rules**).
- Remember to also protect via REST — ACLs apply there too.

## Acceptance checklist
- [ ] Non-ITIL user cannot read business impact
- [ ] Only `prac_manager` can edit close notes
- [ ] Closed incidents locked for others
- [ ] You can describe ACL evaluation order

## Verify
```bash
scripts/sn-login.sh get '/api/now/table/sys_security_acl?sysparm_query=nameSTARTSWITHincident^descriptionLIKEPRAC^ORnameLIKEclose_notes&sysparm_fields=name,operation,roles,active'
```

## Stretch
Create a **data filter** with a *Query Business Rule* to hide incidents from callers' other companies (row-level security).
