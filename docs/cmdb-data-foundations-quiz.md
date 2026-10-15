# CMDB Data Foundations: practice quiz

30 questions, answers at the bottom. Questions marked (lab) use the `CDF-*` practice data. These are original study questions, not real exam items.

## A. CMDB basics
1. Which table is the parent of all configuration items?
   a) `cmdb` b) `cmdb_ci` c) `cmdb_rel_ci` d) `task_ci`
2. Where are the individual relationships between two CIs stored?
   a) `cmdb_rel_type` b) `cmdb_rel_ci` c) `cmdb_ci_relationship` d) `sys_relationship`
3. Where are the relationship *types* (such as "Runs on::Runs") defined?
   a) `cmdb_rel_type` b) `cmdb_rel_ci` c) `sys_choice` d) `cmdb_group`
4. A Linux server record is created in `cmdb_ci_linux_server`. Which field tells you its class on any CI table query?
   a) `sys_class_path` b) `sys_class_name` c) `ci_type` d) `sys_scope`
5. What is the benefit of CI class inheritance?
   a) Child classes inherit parent attributes and rules, so common data is defined once. b) Each class needs its own identification rule. c) It prevents relationships between classes. d) It makes all CIs one table.

## B. Identification and Reconciliation Engine (IRE)
6. What are the two main jobs of IRE?
   a) Discovery and sensors b) Identifying whether a CI already exists, and reconciling attribute values from multiple sources c) Backup and restore d) Archiving and deleting
7. Which describes an *independent* identifier entry?
   a) It needs a related CI (such as a host) to identify the CI b) It identifies a CI using its own attributes, such as serial number c) It only applies to relationships d) It is used only by Discovery
8. A *dependent* identifier entry (for example, a database or application) typically identifies a CI using:
   a) Its own attributes plus a related (containing) CI b) Its sys_id only c) Its name only d) Nothing, it always creates a new CI
9. (lab) You send IRE a payload for a Linux server with a serial number that matches `CDF-dup-a`. What should IRE do?
   a) Always insert a new CI b) Match the existing CI and update it, if the identifier rule uses serial number c) Reject the payload d) Delete the older CI
10. Which REST API sends payloads to IRE?
    a) `/api/now/table/cmdb_ci` b) `/api/now/identifyreconcile` c) `/api/sn_cicd/ire` d) `/api/now/import`
11. What does `maskedAttributes` in an IRE response indicate?
    a) Fields hidden by ACLs b) Attributes that were not written because a higher-priority data source owns them c) Fields that failed validation d) Encrypted fields
12. If no identifier entry matches and the payload has no data to identify the CI, IRE may:
    a) Create the CI, or report an error depending on the rule and payload b) Always silently skip it c) Always merge into the oldest CI d) Escalate to Discovery

## C. Data sources and reconciliation rules
13. (lab) ServiceNow has priority 100 and ImportSet has priority 200. For a field covered by both, whose value wins?
    a) ImportSet, as the larger number wins b) ServiceNow, as the lower number is higher priority c) The most recent write d) Neither, an error is raised
14. (lab) Manual Entry sends `ip_address` after ServiceNow already set it. The attribute is in both reconciliation definitions. What happens?
    a) The CI is overwritten b) The value is masked and the CI keeps the ServiceNow value c) A duplicate CI is created d) The payload is queued for approval
15. Which field on a CI records its data source?
    a) `source` b) `discovery_source` c) `data_origin` d) `managed_by`
16. A reconciliation definition lists attributes `ip_address, cpu_count`. What does that mean for `os`?
    a) It is also governed by this definition b) This definition does not restrict `os`; other definitions, or none, apply c) `os` becomes read-only d) `os` is deleted
17. Why define reconciliation rules at a parent class like Server instead of each child?
    a) Child classes inherit them unless overridden b) They only work on parents c) It is required d) It reduces table size
18. What is the purpose of the "Update with null" setting?
    a) Allow a data source to blank out an attribute b) Delete the CI c) Mask null values d) Reset priority

## D. CMDB Health
19. Name the three CMDB Health categories.
    a) Completeness, Correctness, Compliance b) Coverage, Cost, Currency c) Create, Change, Close d) Required, Recommended, Optional
20. Which metrics belong to **Correctness**?
    a) Required and Recommended b) Orphan, Duplicate, Staleness c) Audit d) Relationship only
21. (lab) `CDF-incomplete-01` has no serial number or IP. Which health area flags it?
    a) Completeness b) Staleness c) Duplicate d) Compliance
22. (lab) `CDF-stale-01` was last discovered in 2024. Which metric flags it?
    a) Orphan b) Duplicate c) Staleness d) Recommended
23. (lab) `CDF-orphan-01` has no relationships. Which metric flags it?
    a) Orphan b) Required c) Audit d) Duplicate
24. The Compliance category measures:
    a) How well CIs match expected, certified or audited state, such as audit and certification results b) Disk usage c) Number of CIs d) Relationship depth
25. CMDB Health scores are produced by:
    a) Scheduled jobs that calculate metrics and store results b) A real-time business rule on every insert c) Manual spreadsheets d) Discovery

## E. CSDM and relationships
26. Which CSDM domain holds Application Service and similar technical services?
    a) Manage Technical Services b) Design c) Sell/Consume d) Foundation
27. Where does a Business Application (`cmdb_ci_business_app`) sit in CSDM?
    a) Design domain b) Foundation domain c) Build domain d) Sell/Consume domain
28. (lab) In the practice data, `CDF-Payments-App` runs on `CDF-app-01`. Which is the correct parent/child direction for "Runs on::Runs"?
    a) Parent = application (Runs on), child = server (Runs) b) Parent = server, child = application c) Either way d) Neither, it is bidirectional only
29. Which tool shows upstream and downstream dependencies of a service?
    a) Dependency View (Service Map) b) Update Sets c) Flow Designer d) Transform Maps
30. What does CMDB Data Manager help you do?
    a) Manage CI lifecycle actions such as retire, archive or delete stale CIs, with policies b) Edit ACLs c) Build forms d) Run Discovery

---
## Answers
1 b. `cmdb_ci` is the base CI table.
2 b. `cmdb_rel_ci` holds relationship instances.
3 a. `cmdb_rel_type`.
4 b. `sys_class_name`.
5 a. Inheritance shares attributes and rules.
6 b. Identify (does it exist?) and reconcile (which source's value wins).
7 b. Independent entries use the CI's own attributes (serial number, name).
8 a. Dependent entries use own attributes plus a related CI.
9 b. A match on the identifier updates the existing CI (this depends on the serial number rule; check the class's identifier entries).
10 b. `/api/now/identifyreconcile` (also `createOrUpdateCI`).
11 b. Masked attributes were not written because a higher-priority source owns them (seen in the lab).
12 a. Behavior depends on the identifier rule and payload (often creates, sometimes an error).
13 b. Lower priority number = higher priority.
14 b. The value is masked; the CI keeps the ServiceNow value.
15 b. `discovery_source`.
16 b. Attributes not listed are not governed by that definition.
17 a. Child classes inherit unless overridden.
18 a. Lets a source write null/empty values over existing ones.
19 a. Completeness, Correctness, Compliance.
20 b. Orphan, Duplicate, Staleness.
21 a. Completeness (Required / Recommended).
22 c. Staleness.
23 a. Orphan.
24 a. Audit and certification results against the expected state.
25 a. Scheduled jobs calculate and store the results.
26 a. Manage Technical Services domain.
27 a. Design domain (CSDM 4 and later).
28 a. Parent runs on child: the application is the parent, the server is the child.
29 a. Dependency View.
30 a. Data Manager policies for retiring, archiving and deleting.

Questions 9, 12 and 27 depend on the instance's identifier rules and CSDM version; verify them against your release's documentation before the exam.
