# CIS Data Foundations (CMDB and CSDM): scenario practice questions

40 original questions, written after reviewing the exam outline from community sources (see "Sources"). The real exam is
75 questions in 90 minutes and leans on **situations and reasoning**, not recall, so most items here are scenarios.
They are study questions, not real exam items. Answers and reasons are at the bottom.

Domain split used here follows the weights reported by community study guides (**unofficial**; confirm against the
current blueprint, KB0012913, on ServiceNow University): Configuration 15% (6 questions), Ingest 19% (8),
Govern 35% (12), Insight 20% (8), CSDM Fundamentals 11% (6).

Lab hooks refer to the `CDF-*` records created by `scripts/cmdb-practice.py` on `dev181171`.
This set avoids repeating `docs/cmdb-data-foundations-quiz.md` and `quiz/`.

---
## 1. Configuration (CI classes, attributes, relationships)

**C1.** A team wants a *Cost Centre Owner* attribute on Linux servers and all their child classes, but not on other CIs. What is the best approach?
- A) Add the field to `cmdb_ci` so every class inherits it
- B) Add the attribute to the Linux Server class in CI Class Manager
- C) Create a separate table that does not extend `cmdb_ci`
- D) Store it as a note on each relationship

**C2.** A developer creates a new table extending `cmdb_ci` with the standard table builder, skipping CI Class Manager. Which problem is **most** likely?
- A) The table cannot hold records
- B) No identification or reconciliation rules exist for the class, so integrations can create duplicates
- C) Relationships can no longer be created for any class
- D) All existing CIs are reclassified

**C3.** What does a *dependent relationship* defined on a class in CI Class Manager enable?
- A) Identifying a CI using the CI that contains or hosts it, such as a database instance on a server
- B) Automatically deleting the child when the parent is retired
- C) Hiding the CI from reports
- D) Copying the parent's ACLs

**C4.** You want CMDB Health to report when `serial_number` is missing on computers, **without** blocking users from saving a record. What should you do?
- A) Mark the attribute Mandatory on the dictionary
- B) Mark the attribute Required or Recommended for the class so the Completeness metrics score it
- C) Add a UI policy that clears the field
- D) Delete the attribute

**C5.** An integration writes servers with `sys_class_name = cmdb_ci_computer` when they should be `cmdb_ci_linux_server`. What is the main consequence?
- A) None, the class never matters
- B) The attributes, identification rules and Health rules of the wrong (parent) class apply to those records
- C) The records disappear from the CMDB
- D) Relationships are deleted

**C6.** Which is a valid reason to extend an existing CI class rather than model a new type at the top level?
- A) The child inherits attributes, identification, reconciliation and Health settings from the parent
- B) Child classes cannot have extra attributes
- C) It removes the need for identification rules
- D) It makes the data read-only

---
## 2. Ingest (IRE, data sources, integrations)

**I1.** Why should integrations send CI data through IRE instead of inserting rows directly into CI tables?
- A) IRE is faster at bulk deletes
- B) IRE looks for an existing CI before creating one and applies data-source precedence, preventing duplicates and overwrites
- C) Direct inserts are blocked by the platform
- D) IRE converts CIs to assets

**I2.** (lab) ServiceNow has reconciliation priority 100, ImportSet 200 and Manual Entry 300 for `ip_address` on Linux servers. All three send different values for CDF-web-01. Which value does the CI keep?
- A) ImportSet, the middle value
- B) The ServiceNow value, because the lowest number has the highest priority
- C) Manual Entry, because it was entered last
- D) The average of the three

**I3.** An attribute is not listed in any reconciliation definition for the class. A lower-priority source sends a new value. What typically happens?
- A) The write is always blocked
- B) The value can be written, because precedence only governs attributes the definitions list
- C) The CI is deleted
- D) A duplicate CI is created

**I4.** A vendor offers a Service Graph Connector for an inventory tool. What is the main benefit over a hand-built import?
- A) It bypasses IRE
- B) It brings source data into the CMDB through IRE with pre-built mappings aligned to the CSDM, with little custom code
- C) It stores data outside the CMDB
- D) It removes the need for any data source ranking

**I5.** A payload describes a database instance. Why must it include information about the host or containing CI?
- A) Dependent identification needs the container to tell two databases with the same name apart
- B) Hosts are always optional
- C) Databases have no names
- D) IRE ignores the payload otherwise

**I6.** An IRE payload matches no existing CI, and the payload has enough data for the class's identification rules. What is the expected result?
- A) A new CI is inserted
- B) The payload is silently dropped
- C) The oldest CI of the class is overwritten
- D) The payload is merged into the first CI found

**I7.** You must load 5,000 servers from a CSV. Duplicates must be avoided, and values from Discovery must win over the CSV. What is the best design?
- A) Transform straight into `cmdb_ci_server` and let the last load win
- B) Load through an IRE-aware import, with the import set ranked below Discovery in the reconciliation rules
- C) Delete all Discovery CIs first
- D) Load the CSV as relationships only

**I8.** Which approach gives the most accurate **top-down** view of the CIs that make up one application service?
- A) Horizontal Discovery alone
- B) Service Mapping from the application's entry point
- C) Manual CSV import
- D) Asset management

---
## 3. Govern (Health, Data Manager, lifecycle, ownership)

**G1.** 40% of Linux servers have no value for an attribute flagged **Recommended**. Which Health area reports this?
- A) Correctness (Staleness)
- B) Completeness (Recommended)
- C) Compliance (Audit)
- D) Correctness (Orphan)

**G2.** Two CI records share the same serial number. Which Health metric highlights this?
- A) Duplicate
- B) Orphan
- C) Staleness
- D) Required

**G3.** (lab) CDF-orphan-01 has no relationships to any other CI. Which metric flags it?
- A) Orphan
- B) Duplicate
- C) Recommended
- D) Audit

**G4.** A CI has not been updated by any source for longer than the class's configured threshold. Which metric flags it?
- A) Staleness
- B) Required
- C) Orphan
- D) Duplicate

**G5.** Which Health area checks CIs against defined expectations, for example through audits?
- A) Completeness
- B) Compliance
- C) Staleness
- D) Duplicate

**G6.** The Health dashboard shows scores from last night, but a user fixed 200 CIs this morning. Why has the score not changed?
- A) Health is calculated by scheduled jobs, so the dashboard shows the last completed run
- B) The fix did not save
- C) Scores update only yearly
- D) Dashboards are read-only copies of a spreadsheet

**G7.** You need to retire CIs automatically after they reach end of life, based on a filter condition, with a review step first. Which capability fits?
- A) A Data Manager policy
- B) A business rule on `sys_user`
- C) A UI action on incident
- D) An email notification

**G8.** What is the purpose of attestation in CMDB governance?
- A) To ask CI owners to confirm the data on their CIs is correct
- B) To encrypt CI data
- C) To import CIs faster
- D) To change relationship types

**G9.** Duplicate CIs keep reappearing weekly after bulk clean-ups. What is the best long-term fix?
- A) Run the clean-up job every day
- B) Find the sources creating them, make sure they go through IRE, and fix the identification rules, then remediate the existing duplicates
- C) Make the serial number optional
- D) Archive the CMDB

**G10.** Class owners do not know how to act on Health findings. What should the CMDB manager provide?
- A) A remediation playbook with documented steps per finding type
- B) More dashboards only
- C) A list of deleted tables
- D) Nothing, the engine fixes everything

**G11.** Before deleting CIs that look stale, what is the safest governance step?
- A) Delete immediately
- B) Check the lifecycle and ownership, confirm with owners, and retire or archive per policy instead of hard-deleting
- C) Hide them from the list view
- D) Rename them

**G12.** Completeness for the *Network Gear* class is very low, while other classes are healthy. What is the best response?
- A) Delete the class
- B) Assign the class an owner, find which sources populate the attributes, and fix mappings or collection for that class
- C) Lower the Recommended list for every class
- D) Ignore it, because dashboards are informational only

---
## 4. Insight (dashboards, queries, visibility)

**N1.** What is the main value of CMDB Workspace for a data steward?
- A) A single place to see and act on data-quality and governance tasks
- B) It replaces IRE
- C) It stores backups
- D) It deploys update sets

**N2.** You need a reusable report of all load balancers connected to servers that run a given application. Which tool fits best?
- A) CMDB Query Builder
- B) Update Set Preview
- C) Flow Designer
- D) Transform map

**N3.** Which record set shows which data source contributed a CI or its attributes? (lab: open it for CDF-web-01)
- A) `sys_object_source`
- B) `sys_properties`
- C) `sys_ui_list`
- D) `sys_audit_delete`

**N4.** Two sources report different CPU counts for one server and the CI keeps one of them. What helps you see the values each source reported?
- A) Multisource comparison of the CI's source data
- B) The incident list
- C) A pivot table of users
- D) The scheduled jobs list

**N5.** A change manager asks which services would be affected if one database fails. Which view answers it?
- A) Dependency view or service map from that CI
- B) A user group report
- C) A list of catalog items
- D) The knowledge base

**N6.** A dashboard shows Completeness at 96% but Duplicate at 14%. What is the right reading?
- A) Data is complete but not trustworthy, because duplicates distort counts and relationships
- B) Everything is healthy
- C) Completeness must be wrong
- D) Duplicates do not affect decisions

**N7.** You must pick one class to improve first for the biggest overall effect. What approach is best?
- A) Pick the class alphabetically
- B) Drill into Health by class and pick the class with the highest CI count and lowest score
- C) Improve the smallest class
- D) Improve classes that have no owner

**N8.** Before a clean-up programme starts, what should you capture to prove improvement later?
- A) A baseline of the Health scores and counts, then track the trend
- B) Nothing
- C) A screenshot of the login page
- D) The list of active users

---
## 5. CSDM fundamentals

**S1.** In CSDM v4, what is the difference between *Life Cycle Stage* and *Life Cycle Stage Status*?
- A) Stage is the broad phase of the CI's life; stage status is a finer state within that phase
- B) They are the same field
- C) Status is only for users
- D) Stage applies only to assets

**S2.** A Business Application has Production and Test environments. How should it be modelled in CSDM?
- A) One Business Application, with a separate Application Service for each environment
- B) Two unrelated Business Applications with no link
- C) One CI that stores both environments in a text field
- D) As two Locations

**S3.** What is the main business benefit of adopting CSDM?
- A) A common service data model that ITSM, ITOM, SAM and other products can reuse
- B) It removes the need for a CMDB
- C) It reduces the number of users
- D) It replaces Discovery

**S4.** Which statement about the **Foundation** domain is correct?
- A) It holds shared reference data such as locations, groups and users, and is usually set up first
- B) It holds only incidents
- C) It is optional and rarely used
- D) It contains only network devices

**S5.** What is the purpose of lifecycle mapping?
- A) To keep lifecycle stage and status values consistent across related records
- B) To rename tables
- C) To schedule Discovery
- D) To import users

**S6.** An auditor asks which regulations apply to a Business Application. Where should that be tracked?
- A) As compliance identifiers recorded against the relevant CSDM object
- B) In a spreadsheet kept by each engineer
- C) In incident short descriptions
- D) It cannot be tracked

---
## Answers

| Q | Ans | Why |
|---|---|---|
| C1 | B | Attributes are added at the class and inherited by children; `cmdb_ci` would add it to every class. |
| C2 | B | Class Manager is where identification/reconciliation rules are managed; skipping it risks duplicates. |
| C3 | A | Dependent identification identifies a CI through its container, such as a database on a host. |
| C4 | B | Required/Recommended feed Completeness without blocking saves; Mandatory blocks saves. |
| C5 | B | The class decides which attributes and rules apply, so the wrong class applies the wrong ones. |
| C6 | A | Extending lets the child reuse the parent's attributes and rules. |
| I1 | B | IRE identifies existing CIs and applies source precedence. |
| I2 | B | Lower priority number wins in reconciliation definitions; the lab confirms it with `maskedAttributes`. |
| I3 | B | Reconciliation precedence only restricts attributes the definitions govern. |
| I4 | B | Connectors use IRE and CSDM-aligned mappings. |
| I5 | A | Dependent identification uses the containing CI to disambiguate. |
| I6 | A | With enough identifying data, IRE inserts a new CI. |
| I7 | B | Use an IRE-aware import and rank the import set below Discovery. |
| I8 | B | Service Mapping works top-down from an entry point; Discovery is inventory-focused. |
| G1 | B | Recommended attributes feed the Recommended completeness metric. |
| G2 | A | Duplicate CI metric. |
| G3 | A | Orphan metric. |
| G4 | A | Staleness metric. |
| G5 | B | Compliance covers audits against defined expectations. |
| G6 | A | Health scores come from scheduled calculations. |
| G7 | A | Data Manager policies act on CIs matching a filter, with review. |
| G8 | A | Attestation has owners validate their data. |
| G9 | B | Remove the cause, not just the symptom. |
| G10 | A | A remediation playbook tells owners how to act. |
| G11 | B | Confirm lifecycle and ownership, then retire or archive per policy. |
| G12 | B | Find the cause (mappings/collection) and give the class an owner. |
| N1 | A | Workspace brings governance tasks together. |
| N2 | A | Query Builder builds reusable relationship queries. |
| N3 | A | `sys_object_source` ties CIs to their sources. |
| N4 | A | Multisource comparison shows what each source reported. |
| N5 | A | Dependency views show impact through relationships. |
| N6 | A | Complete but duplicated data cannot be trusted. |
| N7 | B | Prioritise by size and score. |
| N8 | A | A baseline makes improvement measurable. |
| S1 | A | Stage is the phase; status is finer detail within it. |
| S2 | A | One Business Application, an Application Service per environment. |
| S3 | A | Common model reused across products. |
| S4 | A | Foundation data is shared and set up first. |
| S5 | A | Lifecycle mapping keeps values aligned. |
| S6 | A | Compliance identifiers sit against CSDM objects. |

## Sources
- [ServiceNow CIS-DF (Data Foundations) Exam Study Guide](https://www.servicenow.com/community/cmdb-forum/servicenow-cis-df-data-foundations-exam-study-guide/td-p/3562184) (community)
- [The New CIS-Data Foundations Exam](https://www.servicenow.com/community/developer-blog/the-new-cis-data-foundations-exam/ba-p/3456101) (community)
- [ServiceNow CIS-DF Exam Weightings & Topic Analysis](https://www.servicenow.com/community/cmdb-forum/servicenow-cis-df-exam-weightings-amp-topic-analysis/td-p/3490731) (community, unofficial weights)
- Official blueprint: KB0012913 on ServiceNow University (needs a browser; not fetched here)
