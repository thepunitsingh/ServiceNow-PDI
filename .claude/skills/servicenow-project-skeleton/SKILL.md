---
name: servicenow-project-skeleton
description: Create an implementation project plan (phases and tasks) for any ServiceNow product or module from ServiceNow's standard Best Practice skeleton (6 phases, 159 tasks). Use when the user wants a project plan, WBS, task list, Jira import or SPM project for a ServiceNow implementation such as ITSM, CSM, HRSD, FSM, ITAM, SPM, FSO.
---

# ServiceNow project skeleton

ServiceNow's Best Practice implementation plans share one task list across every product checked (21 products: ITSM, CSM, HR, FSM, FSO, ITAM, portfolio, DevOps and others). The skeleton is 6 phases (Get started, Initiate, Plan, Execute, Deliver, Close), 7 workstreams, 69 processes and 159 tasks. Only the guidance link differs per product: `https://mynow.servicenow.com/now/best-practices/tasks/<slug>/<LinkTail>`.

`skeleton.csv` in this folder holds the skeleton (Seq, Phase, Workstream, Process, Task, Gate, LinkTail). `build_plan.py` turns it into a plan.

## Steps
1. Ask for the product name. Ask for the best-practice slug only if the user knows it (it is the part after `/tasks/` in a mynow link, e.g. `field-service-management-digital-foundations`). If unknown, build without links. Never guess a slug.
2. Ask what output they want if not stated: `csv` (default, local), `jira` (import CSV: one Epic per phase, one Story per task) or `spm` (creates pm_project and pm_project_task records on the instance).
3. If the user supplied product-specific tasks or a success-pack CSV, pass the extras as `--additions` (columns Phase, Workstream, Process, Task, Notes). Added tasks are labelled "Added (not from ServiceNow guide)" in the Source column so they stay separate from the official 159. If you write extras yourself from general product knowledge, say so and keep that label.
4. Run:
   `python3 .claude/skills/servicenow-project-skeleton/build_plan.py --product "<name>" [--slug <slug>] [--additions extra.csv] [--format csv|jira|spm] [--out <file>] [--start "YYYY-MM-DD HH:MM:SS"]`
5. Report the task count, phase count and the file path.

## Rules
- Default to a local file. Only use `--format spm` when the user explicitly asks to create it on the instance; it needs credentials from `scripts/sn-login.sh` (see CLAUDE.md) and is slow on the PDI because the instance resets connections (the script is idempotent, so re-run if it stops).
- The skeleton has no product-specific work (for example work orders, case management, regulatory steps). Say so, and offer to add it, labelled as added.
- If the user shares a success-pack CSV, validate it first: same 159 Phase/Workstream/Process/Task rows in the same order means it is the standard skeleton, and the slug is the folder name in its `Task URL` column. Report any difference rather than silently adopting it.
- Repeated task names exist (for example "Sprint Review" in two processes), so match by Process as well as Task name.
- Do not claim links resolve: they require a mynow.servicenow.com login.
