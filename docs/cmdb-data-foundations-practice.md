# CMDB Data Foundations: practice guide

Instance: dev181171 (Australia release). The CMDB, IRE, CMDB Health and CSDM tables are already present, so nothing needs installing.
Practice data is created by `scripts/cmdb-practice.py seed` (all records named `CDF-*`; `clean` removes them).

## Practice dataset and the problem each record teaches
| Records | Exam topic | Exercise |
|---|---|---|
| CDF-dup-a / CDF-dup-b (same serial) | IRE, duplicates | Run the CMDB Health **Duplicate** metric; use *CMDB Workspace > Duplicates* or CI Identifier rules to explain why IRE would merge them. Which identifier entry matches on serial number? |
| CDF-incomplete-01/02 | Completeness | Find them under CMDB Health **Completeness** (Required / Recommended). Open the Linux Server CI class in **CI Class Manager** and mark a field mandatory/recommended. |
| CDF-bad-data-01 (cpu -3, ip 999.1.1.1) | Correctness | Which Correctness check flags it? Add a Compliance/Correctness rule. |
| CDF-stale-01 (last discovered 2024) | Staleness | Check **Staleness** metric and the *Stale CI* threshold (`cmdb_health_metric`). |
| CDF-orphan-01 | Orphan | Find it under the **Orphan** metric (no relationships). |
| CDF-Online-Store > Payments > Payments-App > app-01/db-01; Orders-App > web-01 | Relationships, CSDM | Open the Dependency View for CDF-Online-Store. Which CSDM layer is each CI in? |

## Data sources and reconciliation (`scripts/cmdb-practice.py sources`)
Three **Reconciliation Definitions** on Linux Server (auto-named "Linux Server rule by <source>") (`cmdb_reconciliation_definition`, lower priority number wins), governing `ip_address, cpu_count, ram, os`:
ServiceNow = 100, ImportSet = 200, Manual Entry = 300.
The script then sends conflicting IRE payloads for CDF-web-01 (`/api/now/identifyreconcile`): ServiceNow sets ip 10.50.0.11/cpu 4; ImportSet (10.99.0.1/2) and Manual Entry (10.77.0.1/1) come back with `maskedAttributes: [cpu_count, ip_address]` and CI values do not change.
Exercises:
1. Open CDF-web-01 and compare values with the payloads. Why did the CI keep the ServiceNow values?
2. Change ImportSet priority to 50 and re-run `sources`. What changes? (Note `discovery_source` also changes; it is not a reconciled attribute here.)
3. Look at `sys_object_source` for the CI, and at the IRE `identificationAttempts` (run the payload in REST API Explorer). Which identifier entry matched?
4. Add `serial_number` to a definition's attributes. Is it still reconcilable if it is also an identifier?

## Exam topics checklist (map to NOW Learn "CMDB Data Foundations" learning path)
1. CMDB architecture: `cmdb_ci` hierarchy, `sys_class_name`, `cmdb_rel_ci`, `cmdb_rel_type`, dot-walking via `u_` fields.
2. **CI Class Manager**: class hierarchy, attributes, dependent relationships, identification rules, reconciliation rules.
3. **IRE** (Identification and Reconciliation Engine): identifier entries (`cmdb_identifier_entry`), hybrid/dependent/independent rules, `sncmdb.IdentificationEngine`/`CMDBTransformUtil`, reconciliation rules (`cmdb_reconciliation_definition`) and data source precedence.
4. **Data sources** and `discovery_source`; payload and `sys_object_source`.
5. **CMDB Health**: Completeness (Required, Recommended), Correctness (Orphan, Duplicate, Staleness), Compliance (Audit); scorecards and dashboards, scheduled jobs.
6. **CSDM**: Foundation, Sell/Consume, Design, Build, Manage Technical Services domains; Business Application, Service Offering, Application Service vs Business Service.
7. **CMDB Groups/Query-Based Services**, CMDB Data Manager (retire, archive, delete stale CIs), Certification, Audit.
8. Reference tools: **CMDB Workspace**, **Data Manager**, **CMDB Query Builder**.

## Quick API snippets (via `scripts/sn-login.sh get`)
- CI count by class: `/api/now/stats/cmdb_ci?sysparm_count=true&sysparm_group_by=sys_class_name`
- Identifier entries per class: `/api/now/table/cmdb_identifier_entry?sysparm_fields=name,table,priority`
- Health metrics: `/api/now/table/cmdb_health_metric?sysparm_fields=name,type,active`
- Practice records: `/api/now/table/cmdb_ci?sysparm_query=nameSTARTSWITHCDF-`

## Self-quiz
1. Which table stores CI relationships, and which stores relationship types?
2. What decides which source wins when two data sources report the same attribute?
3. Name the three Health categories and what each metric measures.
4. What does IRE do if no identifier entry matches and the class allows create?
5. Which CSDM domain holds Application Service? Which holds Business Application? (see docs/cmdb-data-foundations-quiz.md for a longer quiz)
