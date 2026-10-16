import json,re
exec(open('mcd.py').read())
R=json.load(open('cap/cap.json'))
att={x['file_name']:x['sys_id'] for x in call("GET","/api/now/attachment?sysparm_query=table_sys_id=cc66485cc3c897107d295312b4013151&sysparm_fields=file_name,sys_id&sysparm_limit=100")["result"]}
def fix(h):
    return re.sub(r'/__l5e/assets-v1/[^/]+/([A-Za-z0-9_.-]+)',lambda m:'/sys_attachment.do?sys_id='+att.get(m.group(1),''),h)
J=lambda o:json.dumps(o,ensure_ascii=False)
# ---------- overlays (rail flyouts, feedback modal, language menu) ----------
fly={k[4:]:[fix(x) for x in v] for k,v in R.items() if k.startswith('fly_')}
over=open('mcd_overlays.tpl.js').read()
over=over.replace('/*FLY*/null',J(fly)).replace('/*FEEDBACK*/null',J(fix(R['feedback'][0]))).replace('/*LANG*/null',J(fix(R['lang'])))
open('mcd_overlays.js','w').write(over)
# ---------- home tabs ----------
tabs={'My Approvals':fix(R['tab_My Approvals']),'My Requests':fix(R['tab_My Requests']),'My Tasks':fix(R['tab_My Tasks']),'Catalog Items':fix(R['rec_cat']),'Knowledge Articles':fix(R['rec_kb'])}
ht=open('mcd_home_tabs.tpl.js').read().replace('/*TABS*/null',J(tabs))
open('mcd_home_tabs.js','w').write(ht)
# ---------- profile tabs ----------
pt={k[5:]:R[k] for k in R if k.startswith('ptab_')}
pb={k[8:]:R[k] for k in R if k.startswith('ptabbar_')}
pb['Personal Data']=R['prof_tabbar']
upload=fix(R['modal_Edit Information'][0])
pj=open('mcd_profile_tabs.tpl.js').read().replace('/*PTABS*/null',J(pt)).replace('/*PBARS*/null',J(pb)).replace('/*UPLOAD*/null',J(upload))
open('mcd_profile_tabs.js','w').write(pj)
print(len(over),len(ht),len(pj))
