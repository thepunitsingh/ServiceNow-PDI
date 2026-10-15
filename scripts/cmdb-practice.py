#!/usr/bin/env python3
"""Seed / clean a CMDB Data Foundations practice dataset on the PDI.

  scripts/cmdb-practice.py seed     create tagged practice records
  scripts/cmdb-practice.py status   count tagged records
  scripts/cmdb-practice.py clean    delete everything tagged

Every record is tagged with the name prefix "CDF-" (CIs/services) so it is easy to find and remove.
Credentials: same sources as sn-login.sh (env SN_PASS/SN_USER/SN_INSTANCE, then ~/.config/servicenow-pdi/creds.env).
"""
import base64, json, os, shlex, sys, time, urllib.parse, urllib.request

def creds():
    env = {}
    path = os.environ.get("SN_CREDS_FILE", os.path.expanduser("~/.config/servicenow-pdi/creds.env"))
    if os.path.exists(path):
        for line in open(path):
            if "=" in line:
                k, v = line.strip().split("=", 1)
                env[k] = shlex.split(v)[0] if v else ""
    g = lambda k, d="": os.environ.get(k) or env.get(k) or d
    return g("SN_INSTANCE", "https://dev181171.service-now.com"), g("SN_USER", "claudecode"), g("SN_PASS")

INST, USER, PASS = creds()
AUTH = "Basic " + base64.b64encode(f"{USER}:{PASS}".encode()).decode()

def call(method, path, body=None):
    for i in range(5):
        try:
            req = urllib.request.Request(INST + path, method=method,
                data=json.dumps(body).encode() if body is not None else None,
                headers={"Authorization": AUTH, "Accept": "application/json", "Content-Type": "application/json"})
            with urllib.request.urlopen(req, timeout=45) as r:
                t = r.read()
                return json.loads(t) if t else {}
        except urllib.error.HTTPError as e:
            raise SystemExit(f"HTTP {e.code} on {method} {path}: {e.read()[:300]!r}")
        except Exception:
            time.sleep(3)
    raise SystemExit("instance unreachable")

def create(table, rec):
    return call("POST", f"/api/now/table/{table}?sysparm_fields=sys_id,name", rec)["result"]

def find(table, query, fields="sys_id,name"):
    q = urllib.parse.quote(query)
    return call("GET", f"/api/now/table/{table}?sysparm_query={q}&sysparm_fields={fields}&sysparm_limit=500")["result"]

# table, name, extra fields. Each group teaches/tests one exam topic.
SERVERS = [
    # Healthy baseline
    ("cmdb_ci_linux_server", "CDF-web-01", dict(serial_number="CDFSN0001", ip_address="10.50.0.11", os="Linux Red Hat", cpu_count="4", ram="8192", location="", discovery_source="ServiceNow")),
    ("cmdb_ci_linux_server", "CDF-web-02", dict(serial_number="CDFSN0002", ip_address="10.50.0.12", os="Linux Red Hat", cpu_count="4", ram="8192", discovery_source="ServiceNow")),
    ("cmdb_ci_win_server",   "CDF-app-01", dict(serial_number="CDFSN0003", ip_address="10.50.0.21", os="Windows 2019", cpu_count="8", ram="16384", discovery_source="ServiceNow")),
    ("cmdb_ci_win_server",   "CDF-db-01",  dict(serial_number="CDFSN0004", ip_address="10.50.0.31", os="Windows 2019", cpu_count="16", ram="65536", discovery_source="ServiceNow")),
    # Duplicate pair: same serial number (IRE / Duplicate metric exercise)
    ("cmdb_ci_linux_server", "CDF-dup-a", dict(serial_number="CDFDUP-777", ip_address="10.50.1.10", discovery_source="Manual")),
    ("cmdb_ci_linux_server", "CDF-dup-b", dict(serial_number="CDFDUP-777", ip_address="10.50.1.11", discovery_source="Import")),
    # Incomplete: no serial, IP, OS (Completeness / Required / Recommended exercise)
    ("cmdb_ci_linux_server", "CDF-incomplete-01", dict()),
    ("cmdb_ci_win_server",   "CDF-incomplete-02", dict(os="Windows 2016")),
    # Correctness: CPU count absurd / name mismatch (Correctness exercise)
    ("cmdb_ci_linux_server", "CDF-bad-data-01", dict(serial_number="CDFSN0090", cpu_count="-3", ram="0", ip_address="999.1.1.1")),
    # Stale: old discovery date (Staleness exercise)
    ("cmdb_ci_linux_server", "CDF-stale-01", dict(serial_number="CDFSN0100", ip_address="10.50.2.10", last_discovered="2024-01-15 00:00:00", discovery_source="ServiceNow")),
    # Orphan: no relationships, never used by a service
    ("cmdb_ci_linux_server", "CDF-orphan-01", dict(serial_number="CDFSN0200", ip_address="10.50.3.10")),
]
APPS = [("cmdb_ci_appl", "CDF-Payments-App"), ("cmdb_ci_appl", "CDF-Orders-App")]
SERVICES = [("cmdb_ci_service", "CDF-Online-Store", dict(service_classification="Business Service")),
            ("cmdb_ci_service", "CDF-Payments", dict(service_classification="Technical Service"))]
# parent, relation type name, child
RELS = [("CDF-Online-Store", "Depends on::Used by", "CDF-Payments"),
        ("CDF-Payments", "Depends on::Used by", "CDF-Payments-App"),
        ("CDF-Orders-App", "Runs on::Runs", "CDF-web-01"),
        ("CDF-Payments-App", "Runs on::Runs", "CDF-app-01"),
        ("CDF-Payments-App", "Depends on::Used by", "CDF-db-01"),
        ("CDF-Online-Store", "Depends on::Used by", "CDF-Orders-App"),
        ("CDF-web-01", "Cluster of::Cluster", "CDF-web-02")]

def seed():
    ids = {}
    for table, name, extra in SERVERS + [(t, n, {}) for t, n in APPS] + SERVICES:
        if isinstance(extra, tuple):
            extra = {}
        existing = find(table, f"name={name}")
        if existing:
            ids[name] = existing[0]["sys_id"]; print("exists ", name); continue
        r = create(table, {"name": name, **extra})
        ids[name] = r["sys_id"]; print("created", table, name)
    rtypes = {r["name"]: r["sys_id"] for r in find("cmdb_rel_type", "nameISNOTEMPTY", "sys_id,name")}
    for p, rt, c in RELS:
        if rt not in rtypes:
            print("skip rel (type not found):", rt); continue
        if find("cmdb_rel_ci", f"parent={ids[p]}^child={ids[c]}", "sys_id"):
            continue
        create("cmdb_rel_ci", {"parent": ids[p], "child": ids[c], "type": rtypes[rt]})
        print("rel    ", p, "--", rt, "->", c)

def cis():
    return find("cmdb_ci", "nameSTARTSWITHCDF-", "sys_id,name,sys_class_name")

def status():
    c = cis(); print(len(c), "tagged CIs"); [print(" ", x["sys_class_name"], x["name"]) for x in c]

def clean():
    for x in cis():
        call("DELETE", f"/api/now/table/cmdb_ci/{x['sys_id']}"); print("deleted", x["name"])

if __name__ == "__main__":
    {"seed": seed, "status": status, "clean": clean}.get(sys.argv[1] if len(sys.argv) > 1 else "", lambda: print(__doc__))()
