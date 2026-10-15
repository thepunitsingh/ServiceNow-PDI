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

## Sprint 2 (Jira "Sprint: Sprint 2")

| Story | Artifact |
|---|---|
| SP-33/34/46 | `scripts/case-filters` (`CsmCaseFilters` script include + `sys_dictionary_override` reference qualifiers on Case Product / Assignment group / Parent); `sys_user_group.x_1863667_csm_account` links groups to accounts |
| SP-35/36 | `schedules/account-schedules` (LVA, GEO) |
| SP-37 | `sla/account-slas` (LVA/GEO Response + Resolution by priority); generic SLAs now exclude LVA/GEO via `account.x_1863667_csm_customer_code` |
| SP-38..43 | `tables/case-extensions` (hardware request type), `server/case-rules` + `rules/case-rules` (CI/location from asset, auto-create Ship & Install / Remove & Return / Repair Tracking / both tasks) |
| SP-44 | `sla/task-olas` (OLA per hardware task action) |
| SP-45 | `resolveCaseWhenTasksClosed` business rule (case -> Resolved when every hardware task is closed) |
| SP-47 | `x_1863667_csm_closed_by`, UI policy + business rule |
| SP-48 | UI policy hiding Service on Case Task |
| SP-49 | related list of survey answers on Assessment Instance |
| SP-50/51/52 | `portal/csmgnd-portal` (portal + "CSM Account Branding" widget) |
| SP-32 | **Not built**: depends on the existing GEO transform maps, which are not in the repo |

Assumptions: LVA/GEO schedule hours, SLA durations and task OLA durations are placeholders; accounts are tagged LVA/GEO
through `x_1863667_csm_customer_code` (set on the account); the Install Base sold-product/item tables are only used by
the Product filter when they exist; the widget must still be placed on the csmgnd header; "global support users" for
Case closed by are members of the group named in system property `x_1863667_csm.global_support_group`.
Built successfully; not deployed or tested on an instance.

## Sprint 3

| Story | Artifact |
|---|---|
| SP-54 | `imports/13-stockroom` (staging table, CSV data source, transform map to `alm_stockroom`) |
| SP-56 | `imports/14-bulk-templates` (LVA / GEO data sources for assets and install base) + `templates/*.csv` header templates |
| SP-60 | `sla/account-slas`: Response, Workaround, Resolution, Escalation per priority for LVA and GEO; priority change completes the running Resolution SLA and the SLA for the new priority attaches with a retroactive start (elapsed time carries over). Generic Resolution SLAs got the same behaviour |
| SP-61 | GEO SLAs pick their schedule from `location.x_1863667_csm_sla_schedule` and the location's time zone; locations without a schedule fall back to the GEO schedule (`tables/case-extensions` adds schedule + location type to `cmn_location`) |
| SP-62 | Resolution/Workaround/Escalation clocks pause on Awaiting Info (state 18) and resume when it is left |
| SP-65 | `x_1863667_csm_on_hold_reason` (Awaiting Customer default / Supplier / Spare part), UI policy (visible + mandatory on Awaiting Info) and a business rule that defaults the value |

Cancelled in Jira and not built: SP-53, 55, 57, 58, 59, 63, 64, 66, 67. Reassignment now also counts resolution time from case creation (retroactive start).

## Sprint 4

| Story | Artifact |
|---|---|
| SP-68 | `imports/02-contact`: extra `onBefore` script sets `password_needs_reset` and the default password from system property `x_1863667_csm.default_contact_password` (password2; set it on the instance, never in the repo) |
| SP-69 | `email/inbound-email`: inbound email action handling only mail addressed to `x_1863667_csm.support_mailbox` |
| SP-70 | `data/support-groups`: `Veridos L2 - LVA/GEO`, `L3.1 - Global Service & Maintenance`, `L3.2 - Supplier/OEM/SID/R&D`, `Global Support` with the CSM agent role. Tier is read from `x_1863667_csm_tier` or the group name |
| SP-71 | `security/roles`: admin, L2 agent, L3.1 agent, L3.2 specialist, case viewer, customer contact + marker role `account_scoped` |
| SP-72 | `security/access` (`CsmAccess` + Deny-Unless ACLs on Case, Case Task, `task_sla`, `sys_attachment`, `sys_email`) and `rules/query-rules` (list/report level) |
| SP-73 | field ACLs: `work_notes` (case, task) and `ast_contract.discount / payment_amount / total_cost` internal roles only |
| SP-74 | `x_1863667_csm_cancel_reason`, UI policy, `handleCancellation` (journal entry + event) and customer notification |
| SP-75 | `x_1863667_csm_priority_matrix` (9 rows) + `applyPriorityMatrix`; manual change sets `x_1863667_csm_priority_override` |
| SP-76 | `handleEscalation`: adjacent tiers only, reason mandatory, supplier reference mandatory for L3.2, `x_1863667_csm_escalation_log` |
| SP-77 | `x_1863667_csm_routing_rule` (Account / Location / Contract, most specific wins) + `routeToL2Group`, fallback property `x_1863667_csm.default_l2_group` |
| SP-78 | threading + duplicate prevention in the inbound email action (case number in subject, In-Reply-To / References, same sender + subject within 10 minutes) |
| SP-79 | `x_1863667_csm_channel` (Portal / Email / Phone / Internal), set by `captureChannel` and the email action |

Role -> licence mapping (SP-71): admin, L2 agent, L3.1 agent, L3.2 specialist -> CSM fulfiller (`sn_customerservice_agent`);
case viewer -> read-only (`sn_customerservice.case_viewer`); customer contact -> customer light user (`sn_customerservice.customer`).
Review consumption against the subscription before go-live.

### Mailbox cutover (SP-69)
1. Set `x_1863667_csm.support_mailbox` and enable the instance inbound email account; 2. keep the old mailbox forwarding to
the new address in parallel for a week; 3. switch MX / forwarding rule for the Veridos mailbox to ServiceNow outside business
hours; 4. send test mails (new, reply, duplicate) and check the cases; 5. retire the old forwarding once no mail arrives.

Assumptions: customer/partner scoping uses the marker role, so users without it are unrestricted; contract field ACL list
(discount, payment amount, total cost) is a guess for the "financial fields" in the requirement register; the matrix maps
Impact 3 x Urgency 3 to P4 because SLAs only exist for P1-P4.

## Sprint 5

| Story | Artifact |
|---|---|
| SP-80 | `portal/case-forms`: three record producers (basic, for product, for install base) with the mandatory fields from the story; contact / account / channel auto-filled |
| SP-81 | `portal/case-lists`: "CSM Case Lists" widget (All Cases, Action Needed = Resolved / Awaiting Info, My Cases = opened by me) with highlighting |
| SP-83 | `portal/case-lists`: Cases search source + the OOB Knowledge source on the csmgnd portal; results use the user's ACLs |
| SP-87 | `ui/onboarding-action` + `server/onboarding`: "Onboard project" button on the account (L2 group, agent role, routing rule; non-standard items listed as manual follow-up) |
| SP-88 | `data/portal-properties` (default logo / header colour / font colour) and the branding widget fallback chain account -> default |
| SP-89 | `routeToL2Group`: LVA / GEO accounts map to their own L2 group (`x_1863667_csm.l2_group_lva/geo` or the seeded group names); only the group is set, so state and SLAs are untouched |
| SP-90 | `security/access` + `rules/query-rules`: assets, product models and install base items restricted to the user's authorised accounts |
| SP-91 | `enforceClosedBy` fills Case closed by with the resolving user (Propose Solution sets state Resolved); the field stays editable and its picker is limited to account + global support users (`CsmCaseFilters.closedByQualifier`) |
| SP-92 | `x_1863667_csm_task_type` on Case Task (General default, Change Request, Service Request, Supplier) |
| SP-93 | `logAssignmentGroupChange`: every group change writes a work-note entry (previous, new, user, time) |
| SP-94 | `imports/15-agent` (staging, data source, transform to `sys_user`, onAfter adds group memberships) |

Not built (Jira "Ignore"): SP-82, 84, 85, 86. `ui/form-layout` places the new fields on the Case form; Task type still has to
be placed on the Case Task form (its section sys_id could not be looked up - the instance was unreachable).
Install-base objects (SP-26/28/29/80/90) need the Install Base plugin, which is not active on dev181171.

## Open items before go-live
- Deploy (`npm run build && npm run deploy` in `csm/`) and run the ATF / manual checks from the acceptance criteria - nothing here was deployed.
- Confirm placeholders: SLA durations, schedules, priority matrix, contract fields, role -> licence mapping.
- Set system properties: `x_1863667_csm.support_mailbox`, `default_contact_password` (password2), `default_l2_group`, `l2_group_lva/geo`, `global_support_group`, portal default logo.
- Tag LVA / GEO accounts via `x_1863667_csm_customer_code`; assign `x_1863667_csm.account_scoped` (through the L2/L3/viewer/customer roles) to restricted personas.
