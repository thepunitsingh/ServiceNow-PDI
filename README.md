# HR Agent Workspace (`x_hr_agent_ws`)

A ServiceNow Fluent (now-sdk) scoped app that re-creates the core of HR Service Delivery's HR Agent Workspace.

| Area | Artifacts |
|---|---|
| Data model | `HR Case` and `HR Task` (extend `task`, auto-numbered HRC/HRT), `HR Profile`, `HR Service`, `HR Case Template` |
| Security | Roles `x_hr_agent_ws.agent` and `x_hr_agent_ws.admin`; table ACLs; deny ACL for confidential cases |
| Automation | Business rules: defaults and profile lookup on insert, target resolution from service SLA, resolution-code enforcement, auto-close child tasks |
| Workspace | `HR Agent Workspace` (`/now/hr-agent-workspace`) with list menus: my/unassigned/overdue/confidential/all cases, my/all tasks, HR profiles |
| Navigation | Classic application menu with modules for each table |
| Demo data | Six HR services |

```
npm install
npx now-sdk auth --add <instance-url> --type basic
npm run build && npm run deploy
```

Not included: Record/form UI Builder pages beyond the generated defaults, templates UI, knowledge, and surveys.
