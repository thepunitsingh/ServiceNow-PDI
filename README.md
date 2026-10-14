# Veridos CSM Foundation (`x_1863667_csm`) - Sprint 1

Fluent (now-sdk) app for Jira project **SP**, epic SP-1 *Foundation Data*, stories SP-19 to SP-31.

| Story | Artifact | Target |
|---|---|---|
| SP-19 | `imports/01-account` (+ `00-account-extension` adds `classification`) | `customer_account` |
| SP-20 | `imports/02-contact` | `customer_contact` |
| SP-21 | `imports/03-group` (assigns `sn_customerservice_agent`) | `sys_user_group` |
| SP-22 | `imports/04-group-member` | `sys_user_grmember` |
| SP-23 | `imports/05-location` | `cmn_location` |
| SP-24 | `imports/06-contract` | `ast_contract` |
| SP-25 | `imports/07-product-model` | `cmdb_model` |
| SP-26 | `imports/08-sold-product` | `sn_install_base_sold_product` |
| SP-27 | `imports/09-asset` | `alm_asset` |
| SP-28 | `imports/10-install-base-item` | `sn_install_base_item` |
| SP-29 | `imports/11-installed-product` | `sn_install_base_m2m_installed_product` |
| SP-30 | `imports/12-entitlement` | `service_entitlement` |
| SP-31 | `sla/case-slas` (4 Response + 4 Resolution, by priority) | `sn_customerservice_case` |

Each import = staging table (extends `sys_import_set_row`) + CSV data source + transform map with coalesce,
an `onBefore` script that rejects rows with missing mandatory fields or unresolved references (logged as errors),
and, where needed, an `onAfter` script (account/location/group parent, group role).
`src/fluent/imports/*.now.ts` and `sla/case-slas.now.ts` are generated; edit the definitions, not the output, if regenerating.

## Assumptions to confirm
- The client's source field lists and SLA requirement sheet were not available: staging columns, mappings,
  SLA durations (placeholder 1/4/8/24/48h, 8-5 weekdays schedule) and priority split are placeholders.
- SP-26/28/29: `sn_install_base_*` tables do not exist on dev181171 (Install Base plugin not active). Field names are
  assumed and **untested** until it is activated.
- Account hierarchy is resolved in an `onAfter` script, so parents may load in any order; unresolved parents are logged.
- SLA history on reassignment relies on `reset` condition + `resetAction: complete` (completes the running SLA and
  starts a new one). Verify with multiple reassignments (SP-31 AC 10-12).
- SP-31 schedules: LVA/GEO-specific schedules are Sprint 2 (SP-35/36); this uses the OOB "8-5 weekdays".
- Not deployed or tested on an instance.

```
npm install
npx now-sdk auth --add <instance-url> --type basic
npm run build && npm run deploy
```
