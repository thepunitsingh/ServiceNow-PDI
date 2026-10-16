#!/usr/bin/env python3
"""Build a ServiceNow implementation project plan from the generic best-practice skeleton.

  build_plan.py --product "Field Service Management" [--slug field-service-management-digital-foundations]
                [--additions extra.csv] [--format csv|jira|spm] [--out plan.csv]

additions.csv columns: Phase,Workstream,Process,Task,Notes  (inserted after the last task of the same Process, else at end of Phase)
spm format creates a pm_project + phase tasks + tasks on the instance (needs scripts/sn-login.sh credentials).
"""
import argparse,csv,os,re,sys
H=os.path.dirname(os.path.abspath(__file__))
BASE="https://mynow.servicenow.com/now/best-practices/tasks/"
ap=argparse.ArgumentParser()
ap.add_argument("--product",required=True)
ap.add_argument("--slug",help="mynow best-practice slug; if omitted the link is left blank")
ap.add_argument("--additions")
ap.add_argument("--format",default="csv",choices=["csv","jira","spm"])
ap.add_argument("--out")
ap.add_argument("--start",default="")
a=ap.parse_args()
sk=list(csv.DictReader(open(os.path.join(H,"skeleton.csv"),encoding="utf-8")))
plan=[dict(r,Source="Skeleton",Notes="",Link=(BASE+a.slug+"/"+r["LinkTail"]) if a.slug else "") for r in sk]
if a.additions:
    for x in csv.DictReader(open(a.additions,encoding="utf-8-sig")):
        item={"Phase":x["Phase"],"Workstream":x["Workstream"],"Process":x["Process"],"Task":x["Task"],"Gate":"","LinkTail":"","Source":"Added (not from ServiceNow guide)","Notes":x.get("Notes",""),"Link":""}
        idx=[i for i,p in enumerate(plan) if p["Phase"]==item["Phase"] and p["Process"]==item["Process"]] or [i for i,p in enumerate(plan) if p["Phase"]==item["Phase"]]
        if not idx: sys.exit("Unknown phase: "+item["Phase"])
        plan.insert(idx[-1]+1,item)
phases=list(dict.fromkeys(p["Phase"] for p in plan))
slug=re.sub(r"[^a-z0-9]+","_",a.product.lower()).strip("_")
out=a.out or f"{slug}_plan.{'csv'}"
title=f"{a.product} - Implementation"
if a.format=="csv":
    w=csv.writer(open(out,"w",newline="",encoding="utf-8"))
    w.writerow(["Phase","Workstream","Process","Task","Gate","Source","Guidance link","Notes"])
    for p in plan: w.writerow([p["Phase"],p["Workstream"],p["Process"],p["Task"],p["Gate"],p["Source"],p["Link"],p["Notes"]])
elif a.format=="jira":
    w=csv.writer(open(out,"w",newline="",encoding="utf-8"))
    w.writerow(["Issue Id","Issue Type","Summary","Parent Id","Description","Labels"])
    n=0;pid={}
    for ph in phases:
        n+=1;pid[ph]=n;w.writerow([n,"Epic",f"{ph}","",f"{title} - {ph} phase",slug])
    for p in plan:
        n+=1
        d=f"Workstream: {p['Workstream']}\nProcess: {p['Process']}\n"+(f"Guidance: {p['Link']}\n" if p["Link"] else "")+(f"Note: {p['Notes']}\n" if p["Notes"] else "")+f"Source: {p['Source']}"
        w.writerow([n,"Story",p["Task"],pid[p["Phase"]],d,slug+(",gate" if p["Gate"] else "")])
else:
    sys.path.insert(0,os.path.join(H,"..","..","..","scripts","mcd-portal"))
    from mcd import call,find
    pj=find("pm_project","short_description="+title)
    if not pj:
        b={"short_description":title,"description":f"Generated from the ServiceNow best-practice skeleton for {a.product}."}
        if a.start: b["start_date"]=a.start
        pj=call("POST","/api/now/table/pm_project",b)["result"]["sys_id"]
    def task(parent,name,desc,proc=None):
        q=f"parent={parent}^short_description={name}"+(f"^descriptionLIKEProcess: {proc}" if proc else "")
        s=find("pm_project_task",q)
        return s or call("POST","/api/now/table/pm_project_task",{"parent":parent,"short_description":name,"description":desc})["result"]["sys_id"]
    for ph in phases:
        ps=task(pj,ph,f"Phase: {ph}")
        for p in (x for x in plan if x["Phase"]==ph):
            d=f"Workstream: {p['Workstream']}\nProcess: {p['Process']}\n"+(f"Guidance: {p['Link']}\n" if p["Link"] else "")+(f"Note: {p['Notes']}\n" if p["Notes"] else "")+f"Source: {p['Source']}"
            task(ps,p["Task"],d,p["Process"])
        print(ph,"done")
    print("project",pj); sys.exit(0)
print(f"{len(plan)} tasks, {len(phases)} phases -> {out}")
