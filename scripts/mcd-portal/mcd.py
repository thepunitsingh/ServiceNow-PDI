import json,os,re,subprocess,urllib.parse
B="https://dev181171.service-now.com"
U=subprocess.check_output(["bash","-c","source ~/.config/servicenow-pdi/creds.env; echo -n ${SN_USER:-claudecode}:$SN_PASS"]).decode()
def curl(args):
    for i in range(6):
        try: return subprocess.check_output(["curl","-sS","-m","180","-u",U]+args)
        except subprocess.CalledProcessError: import time;time.sleep(4)
    raise SystemExit("curl failed")
def call(m,p,body=None):
    a=["-X",m,"-H","Content-Type: application/json","-H","Accept: application/json",B+p]
    if body is not None: a+=["-d",json.dumps(body)]
    return json.loads(curl(a))
def find(t,q):
    r=call("GET",f"/api/now/table/{t}?sysparm_limit=1&sysparm_fields=sys_id&sysparm_query="+urllib.parse.quote(q))
    return (r.get("result") or [{}])[0].get("sys_id")
def upsert(t,q,b):
    s=find(t,q)
    if s: call("PATCH",f"/api/now/table/{t}/{s}",b); return s
    r=call("POST",f"/api/now/table/{t}",b); return r["result"]["sys_id"]
