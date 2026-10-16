import re
exec(open('mcd.py').read())
src=open('mcd_shell_deploy.py').read()
m=re.search(r'PFXDEF=.*?\ndef adapt\(js\):.*?return pfx\(js\)\n',src,re.S)
exec(m.group(0).replace('return pfx(js)\nnav','return pfx(js)'))
d=open('mcd_doc.html').read()
body_i=d.index('<body')
head,body=d[:body_i],d[body_i:]
body=re.sub(r'<script>.*?</script>','',body,flags=re.S)
scripts=''.join('<script>'+adapt(open(f).read())+'</script>' for f in ['mcd_menu.js','mcd_notif.js','mcd_nav.js'])
scripts+='<script>'+PFXDEF+'window.PFX=PFX;'+open('mcd_overlays.js').read()+'</script><script>'+PFXDEF+'window.PFX=PFX;'+open('mcd_home_tabs.js').read()+'</script>'
body=body.replace('</body>',scripts+'</body>')
# logo/home anchors follow variant
body=body.replace('<body>','<body>')
d2=head+body
open('mcd_doc.html','w').write(d2)
wid="cc66485cc3c897107d295312b4013151"
for o in call("GET",f"/api/now/attachment?sysparm_query=table_sys_id={wid}^file_name=mcd_portal.html")["result"]:
    curl(["-X","DELETE",f"{B}/api/now/attachment/{o['sys_id']}"])
sid=json.loads(curl(["-X","POST","-H","Content-Type: text/html","-H","Accept: application/json",f"{B}/api/now/attachment/file?table_name=sp_widget&table_sys_id={wid}&file_name=mcd_portal.html","--data-binary","@mcd_doc.html"]))["result"]["sys_id"]
cs=call("GET",f"/api/now/table/sp_widget/{wid}?sysparm_fields=client_script")["result"]["client_script"]
cs=re.sub(r'sys_id=[0-9a-f]{32}',f'sys_id={sid}',cs,count=1)
call("PATCH",f"/api/now/table/sp_widget/{wid}",{"client_script":cs})
print('ok','theme-' in cs, d2.count('<script>'))
