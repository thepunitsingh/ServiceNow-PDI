#!/usr/bin/env python3
"""Build the CMDB quiz: hand-written banks (quiz/bank-*.txt) + questions generated from instance metadata
(quiz/instance-data.json: class hierarchy, relationship types, identifier entries) -> quiz/dist/*.html.
Usage: scripts/build-quiz.py [total]   (default 500)"""
import json, os, random, re, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "quiz")
TOTAL = int(sys.argv[1]) if len(sys.argv) > 1 else 500
rnd = random.Random(20261015)
TOPICS = {"FUN": "CMDB fundamentals", "CLS": "Classes and hierarchy", "IRE": "Identification (IRE)", "REC": "Reconciliation",
          "HLT": "CMDB Health", "CSDM": "CSDM and services", "REL": "Relationships", "SRC": "Data sources and discovery", "LIF": "Lifecycle and governance"}

def hand():
    out = []
    for fn in sorted(os.listdir(ROOT)):
        if fn.startswith("bank-") and fn.endswith(".txt"):
            for line in open(os.path.join(ROOT, fn), encoding="utf-8"):
                if line.strip():
                    t, q, a, w1, w2, w3, e = line.rstrip("\n").split("|")
                    out.append(dict(t=t, q=q, a=a, w=[w1, w2, w3], e=e))
    return out

def generated(D):
    classes = {c["name"]: c for c in D["classes"]}
    labels = {}
    for c in D["classes"]:
        labels.setdefault(c["label"], []).append(c["name"])
    uniq = [c for c in D["classes"] if len(labels[c["label"]]) == 1 and c["name"].count("_") <= 5 and 2 < len(c["label"]) < 38]
    def near(c, key, n=3):
        stem = "_".join(c["name"].split("_")[:3])
        pool = [x[key] for x in uniq if x["name"] != c["name"] and x["name"].startswith(stem)]
        rest = [x[key] for x in uniq if x["name"] != c["name"] and x[key] not in pool]
        rnd.shuffle(pool); rnd.shuffle(rest)
        return (pool + rest)[:n]
    g1, g2, g3, g4 = [], [], [], []
    for c in uniq:  # label -> table
        g1.append(dict(t="CLS", q=f"Which table (class) has the label \"{c['label']}\" in this release?", a=f"`{c['name']}`",
                       w=[f"`{x}`" for x in near(c, "name")], e=f"The class labelled \"{c['label']}\" is `{c['name']}` on the instance."))
    for c in uniq:  # parent class
        p = classes.get(c["parent"])
        if not p or len(labels[p["label"]]) != 1: continue
        w = [x for x in near(c, "label", 6) if x != p["label"]][:3]
        g2.append(dict(t="CLS", q=f"What is the parent class (super class) of \"{c['label']}\" (`{c['name']}`)?", a=f"{p['label']} (`{p['name']}`)",
                       w=[f"{x} (`{[k for k,v in labels.items() if k==x][0] and labels[x][0]}`)" for x in w],
                       e=f"`{c['name']}` extends `{p['name']}` ({p['label']}) on this instance."))
    pc = {}
    for r in D["rel"]: pc.setdefault(r["p"], []).append(r)
    cc = {}
    for r in D["rel"]: cc.setdefault(r["c"], []).append(r)
    allc = sorted({r["c"] for r in D["rel"]}); allp = sorted({r["p"] for r in D["rel"]})
    for r in D["rel"]:
        if len(pc[r["p"]]) == 1 and r["p"] != r["c"]:
            w = rnd.sample([x for x in allc if x not in (r["c"], r["p"])], 3)
            g3.append(dict(t="REL", q=f"Relationship type \"{r['name']}\": what is the child descriptor when the parent descriptor is \"{r['p']}\"?", a=r["c"], w=w,
                           e=f"In `cmdb_rel_type`, \"{r['name']}\" has parent descriptor \"{r['p']}\" and child descriptor \"{r['c']}\"."))
        if len(cc[r["c"]]) == 1 and r["p"] != r["c"]:
            w = rnd.sample([x for x in allp if x not in (r["c"], r["p"])], 3)
            g3.append(dict(t="REL", q=f"Which parent descriptor pairs with the child descriptor \"{r['c']}\" in the relationship type \"{r['name']}\"?", a=r["p"], w=w,
                           e=f"The type is stored as parent::child, \"{r['p']}::{r['c']}\"."))
    byt = {}
    for i in D["ident"]: byt.setdefault(i["table"], []).append(i["attributes"])
    sets = lambda s: frozenset(x.strip() for x in s.split(",") if x.strip())
    cand = [(t, a[0]) for t, a in byt.items() if len(a) == 1 and t in classes and t in {c["name"] for c in uniq} and 1 <= len(sets(a[0])) <= 5]
    allattrs = [a for _, a in cand]
    for t, a in cand:
        pool = [x for x in allattrs if sets(x) != sets(a)]
        w = rnd.sample(sorted(set(pool)), 3)
        if len({sets(x) for x in w + [a]}) < 4: continue
        fmt = lambda s: ", ".join(f"`{x}`" for x in s.split(","))
        g4.append(dict(t="IRE", q=f"Which attributes make up the identifier entry for \"{classes[t]['label']}\" (`{t}`)?", a=fmt(a), w=[fmt(x) for x in w],
                       e=f"The identification rule for `{t}` uses: {', '.join(x.strip() for x in a.split(','))}."))
    return g1, g2, g3, g4

def main():
    D = json.load(open(os.path.join(ROOT, "instance-data.json")))
    H = hand(); g1, g2, g3, g4 = generated(D)
    for g in (g1, g2, g3, g4): rnd.shuffle(g)
    need = TOTAL - len(H)
    take = [("g3", g3, min(len(g3), 60)), ("g4", g4, min(len(g4), 60))]
    gen = g3[:take[0][2]] + g4[:take[1][2]]
    rest = []
    for a, b in zip(g1, g2): rest += [a, b]
    rest += g1[len(g2):] + g2[len(g1):]
    gen += rest[:max(0, need - len(gen))]
    qs = H + gen[:need]
    if len(qs) < TOTAL: print("warning: only", len(qs), "questions available")
    seen = set()
    final = []
    for q in qs:
        if q["q"] in seen or len(set([q["a"]] + q["w"])) < 4: continue
        seen.add(q["q"]); final.append(q)
    for i, q in enumerate(final, 1): q["id"] = i
    tpl = open(os.path.join(ROOT, "template.html"), encoding="utf-8").read()
    body = tpl.replace("/*DATA*/[]", json.dumps(final, ensure_ascii=False).replace("</", "<\\/")).replace("/*TOPICS*/{}", json.dumps(TOPICS))
    os.makedirs(os.path.join(ROOT, "dist"), exist_ok=True)
    open(os.path.join(ROOT, "dist", "cmdb-quiz-artifact.html"), "w", encoding="utf-8").write(body)
    title, rest_ = re.match(r"(<title>.*?</title>)(.*)", body, re.S).groups()
    head_extra = '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
    open(os.path.join(ROOT, "dist", "cmdb-quiz.html"), "w", encoding="utf-8").write(
        f"<!doctype html><html lang=\"en\"><head>{head_extra}{title}{rest_.split('</style>')[0]}</style></head><body>{rest_.split('</style>',1)[1]}</body></html>")
    from collections import Counter
    print(len(final), "questions", dict(Counter(q["t"] for q in final)), "hand", len(H), "gen", len(final) - len(H))

main()
