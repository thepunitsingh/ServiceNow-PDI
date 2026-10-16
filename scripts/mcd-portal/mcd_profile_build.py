import re,mimetypes
exec(open('mcd.py').read())
h=open('prof/profile.html').read()
main=re.search(r'<main\b.*?</main>',h,re.S).group(0)
main=main.replace('<main class="pt-14 pl-[88px]">','<main>').replace('href="/"','href="/mcd"')
css=open('lov/styles-COuwaa9r.css').read()
# widget shell
wid=upsert("sp_widget","id=mcd_profile_widget",{"id":"mcd_profile_widget","name":"McD Employee Profile","template":"<div></div>","script":"(function(){})();","client_script":"function(){}"})
def up(path,name,ct):
    d=json.loads(curl(["-X","POST","-H","Content-Type: "+ct,"-H","Accept: application/json",f"{B}/api/now/attachment/file?table_name=sp_widget&table_sys_id={wid}&file_name={name}","--data-binary","@"+path]))
    return d["result"]["sys_id"]
for o in call("GET",f"/api/now/attachment?sysparm_query=table_sys_id={wid}")["result"]:
    curl(["-X","DELETE",f"{B}/api/now/attachment/{o['sys_id']}"])
ban=up('lov/profile-banner.jpg','profile-banner.jpg','image/jpeg')
logo=up('lov/mcd-logo.png','mcd-logo.png','image/png')
main=main.replace('/assets/profile-banner-DTR8Ua5a.jpg','/sys_attachment.do?sys_id='+ban)
main=re.sub(r'/__l5e/assets-v1/[^"\')]*mcd-logo\.png','/sys_attachment.do?sys_id='+logo,main)
js='''(function(){
 var secs={};
 [].forEach.call(document.querySelectorAll('h2,h3'),function(h){secs[h.textContent.trim().toLowerCase()]=h;});
 var map={'information':'information','my contacts':'my contacts','my addresses':'my addresses','national id':'national id','emergency contacts':'emergency contacts','my dependents':'my dependents','dependents of special needs employee':'dependents of special needs employee','family protection & beneficiary details':'family protection & beneficiary details','payment information':'payment information'};
 [].forEach.call(document.querySelectorAll('button'),function(b){
  var t=b.textContent.trim().toLowerCase();
  if(t==='view org chart'){b.onclick=function(){top.location.href='/mcd?id=my_org_chart';};b.style.cursor='pointer';return;}
  if(map[t]&&secs[map[t]]){b.style.cursor='pointer';b.onclick=function(){secs[map[t]].scrollIntoView({behavior:'smooth',block:'start'});};}
 });
})();'''
doc='<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="__ORIGIN__/" target="_top"><style>'+css+'html,body{overflow:hidden;background:transparent}</style></head><body>'+main+'<script>'+js+'</script></body></html>'
open('mcd_profile_doc.html','w').write(doc)
did=up('mcd_profile_doc.html','mcd_profile.html','text/html')
srv='''(function(){
 data.name=gs.getUserDisplayName();
 data.email=gs.getUser().getEmail()+'';
 var gr=new GlideRecord('sys_user');
 if(gr.get(gs.getUserID())){data.phone=gr.getValue('mobile_phone')||gr.getValue('phone')||'';data.title=gr.getValue('title')||'';}
 var n=(data.name||'?').split(' ');data.initial=((n[0]||'?').charAt(0)+(n.length>1?n[n.length-1].charAt(0):'')).toUpperCase();
})();'''
cs='''function($scope,$element,$window){
 var c=$scope.data,f=$element.find('iframe')[0];
 fetch('/sys_attachment.do?sys_id=%s',{credentials:'same-origin'}).then(function(r){return r.text();}).then(function(t){
  var esc=function(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};
  t=t.split('__ORIGIN__').join($window.location.origin).split('Vasu Laxman').join(esc(c.name)).split('>VL<').join('>'+esc(c.initial)+'<');
  if(c.email)t=t.split('vasu.laxman@enterprise.corp.sa').join(esc(c.email));
  if(c.phone)t=t.split('+966 50 123 4567').join(esc(c.phone));
  f.srcdoc=t;
  f.onload=function(){var d=f.contentDocument;function fit(){f.style.height=d.documentElement.scrollHeight+'px';}
   fit();if($window.ResizeObserver){new ResizeObserver(fit).observe(d.body);}};
 });
}'''%did
call("PATCH",f"/api/now/table/sp_widget/{wid}",{"template":'<iframe title="Employee Profile" style="width:100%;border:0;display:block;min-height:900px"></iframe>',"script":srv,"client_script":cs})
pg=upsert("sp_page","id=mcd_profile",{"id":"mcd_profile","title":"Employee Profile","internal":"false","public":"false"})
if not find("sp_container",f"sp_page={pg}"):
    c=call("POST","/api/now/table/sp_container",{"sp_page":pg,"width":"container","order":"1"})["result"]["sys_id"]
    r=call("POST","/api/now/table/sp_row",{"sp_container":c,"order":"1"})["result"]["sys_id"]
    col=call("POST","/api/now/table/sp_column",{"sp_row":r,"size":"12","order":"1"})["result"]["sys_id"]
    call("POST","/api/now/table/sp_instance",{"sp_widget":wid,"sp_column":col,"order":"1"})
print(wid,pg)
