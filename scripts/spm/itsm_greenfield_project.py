"""Create a greenfield OOB ITSM project in SPM (pm_project) with 6 phases and the best-practice tasks beneath them."""
import csv,os,sys,urllib.parse
sys.path.insert(0,os.path.join(os.path.dirname(__file__),"..","mcd-portal"))
from mcd import call,find
HERE=os.path.dirname(__file__)
NAME="ITSM Greenfield - Out-of-the-box Implementation"
rows=list(csv.DictReader(open(os.path.join(HERE,"itsm_task_skeleton.csv"),encoding="utf-8-sig")))
phases=list(dict.fromkeys(r["Phase"] for r in rows))
pid=find("pm_project","short_description="+NAME)
if not pid:
    r=call("POST","/api/now/table/pm_project",{"short_description":NAME,
      "description":"Greenfield, out-of-the-box ServiceNow ITSM (Incident, Request, Problem, Change, Knowledge, CMDB, Service Portal/Employee Center). Plan generated from the ServiceNow Best Practice implementation skeleton (6 phases, 159 tasks).",
      "start_date":"2026-10-19 08:00:00"})
    pid=r["result"]["sys_id"]
print("project",pid)
def task(parent,name,desc=""):
    q=f"parent={parent}^short_description={name}"+(f"^descriptionLIKE{desc.splitlines()[1]}" if "Process:" in desc else "")
    s=find("pm_project_task",q)
    if s: return s
    r=call("POST","/api/now/table/pm_project_task",{"parent":parent,"short_description":name,"description":desc})
    return r["result"]["sys_id"]
n=0
for ph in phases:
    psid=task(pid,ph,f"Phase: {ph}")
    for r in (x for x in rows if x["Phase"]==ph):
        d=f"Workstream: {r['Workstream']}\nProcess: {r['Process']}\nGuidance: {r['Task URL']}"
        task(psid,r["Task"],d); n+=1
    print(ph,"done",n)
print("tasks",n)
