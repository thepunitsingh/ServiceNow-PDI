"""Build a LOCAL (not SPM) Field Service Management project plan: generic 159-task skeleton + clearly-flagged FSM additions."""
import csv,os
H=os.path.dirname(__file__)
SLUG="field-service-management"   # guessed slug, NOT verified against mynow
rows=list(csv.DictReader(open(os.path.join(H,"itsm_task_skeleton.csv"),encoding="utf-8-sig")))
G="Generic skeleton"; A="Claude-added (FSM, unverified)"
add=[ # phase, workstream, process, task, note
("Get started","Value management and analytics","Discover Value","Define Field Service Scope and Service Lines","Work order types, customer/asset types served, regions, in-house vs contractor technicians"),
("Get started","Architecture and technical governance","Prepare for Technical Governance","Confirm Field Service Licensing and Fulfiller Roles","Dispatcher, agent, technician license types; mobile user counts"),
("Initiate","Architecture and technical governance","Review Current Environment","Confirm FSM Plugins and Prerequisites","Field Service Management, Field Service Mobile, scheduling/optimization, Customer Service/CSM dependency, CMDB/asset data"),
("Initiate","Project and program management","Project Planning","Define Mobile Device and MDM Strategy","BYOD vs corporate devices, OS versions, MDM, connectivity"),
("Plan","Design, build and unit test","Conduct Process Workshops","Workshop: Work Order Lifecycle and Task Types","States, task types, templates, completion codes, customer sign-off"),
("Plan","Design, build and unit test","Conduct Process Workshops","Workshop: Territories, Skills, Crews and Schedules","Service territories, skills/certifications, crews, shifts, calendars, travel"),
("Plan","Design, build and unit test","Conduct Process Workshops","Workshop: Scheduling and Dispatch Model","Manual vs dynamic scheduling, optimization rules, dispatcher workspace, SLAs"),
("Plan","Design, build and unit test","Conduct Process Workshops","Workshop: Parts, Inventory and Stockrooms","Parts catalog, truck/stockroom stock, requests, returns, procurement link"),
("Plan","Design, build and unit test","Conduct Process Workshops","Workshop: Service Contracts, Entitlements and Billing","Contracts, SLAs, warranty, billable vs non-billable work, invoicing"),
("Plan","Design, build and unit test","Conduct Process Workshops","Workshop: Mobile Experience and Offline Needs","Forms, checklists, photos, signatures, offline sync, notifications"),
("Plan","Design, build and unit test","Conduct Process Workshops","Workshop: Customer Appointments and Communications","Appointment booking, ETA/arrival notifications, rescheduling, self-service"),
("Plan","Design, build and unit test","Conduct Integrations Workshops","Workshop: FSM Integrations","ERP/finance, maps/GPS, CSM cases, CMDB/assets, inventory, telematics"),
("Plan","Value management and analytics","Plan Value","Define Field Service KPIs","First-time fix rate, travel time, utilization, on-time arrival, SLA attainment, cost per visit"),
("Execute","Design, build and unit test","Execute Sprints","Configure Work Order Types, Tasks and Templates",""),
("Execute","Design, build and unit test","Execute Sprints","Configure Territories, Skills, Crews and Resource Calendars",""),
("Execute","Design, build and unit test","Execute Sprints","Configure Scheduling, Dispatch and Optimization",""),
("Execute","Design, build and unit test","Execute Sprints","Configure Parts, Inventory and Stockrooms",""),
("Execute","Design, build and unit test","Execute Sprints","Configure Mobile App (Forms, Offline, Signature)",""),
("Execute","Design, build and unit test","Execute Sprints","Configure Appointment Booking and Customer Notifications",""),
("Execute","Design, build and unit test","Execute Sprints","Configure Service Contracts and Entitlements",""),
("Execute","Value management and analytics","Create Value","Build Field Service Dashboards and Reports",""),
("Execute","Design, build and unit test","Execute Integration Sprints","Load Technician, Location, Territory and Asset Data",""),
("Execute","Testing","Plan System Testing","Plan Field and Offline Testing","Real-device testing, poor connectivity, GPS, sync conflicts"),
("Deliver","Design, build and unit test","Go-Live Transition","Provision and Roll Out Mobile Devices",""),
("Deliver","Testing","Conduct User Acceptance Testing","Run Field Pilot with Live Work Orders","Pilot territory/crew before wider rollout"),
("Deliver","Organizational change management","Enable Training","Train Technicians (Mobile) and Dispatchers",""),
("Deliver","Support","Confirm Operational Readiness","Confirm Field Support and Escalation Model","Dispatcher on-call, technician helpdesk, device support"),
("Close","Value management and analytics","Transition Value","Review Field Service KPIs vs Baseline","First-time fix, utilization, travel time after stabilization"),
("Close","Support","Hypercare","Field Hypercare for Technicians and Dispatch",""),
]
ph=list(dict.fromkeys(r["Phase"] for r in rows))
out=[]
for p in ph:
    for r in rows:
        if r["Phase"]==p:
            u=r["Task URL"].replace("itsm-modernize-it-service-management",SLUG)
            out.append([p,r["Workstream"],r["Process"],r["Task"],G,u+" (slug unverified)",""])
    for a in add:
        if a[0]==p: out.append([p,a[1],a[2],a[3],A,"",a[4]])
w=csv.writer(open(os.path.join(H,"plans","fsm_project_plan.csv"),"w",newline="",encoding="utf-8"))
w.writerow(["Phase","Workstream","Process","Task","Source","Guidance link","Notes"]); w.writerows(out)
print(len(out),"tasks:",sum(1 for o in out if o[4]==G),"generic +",len(add),"added")
