import re
exec(open('mcd.py').read())
th="1f56085cc3c897107d295312b40131d8"
hdr=open('shell_header.html').read()
ftr=open('shell_footer.html').read()
shell_css=open('shell.css').read()
root=re.search(r':root\{--radius.*?\}',open('lov/styles-COuwaa9r.css').read(),re.S).group(0)
def _cls(h): return re.sub(r'class="([^"]*)"',lambda m:'class="'+re.sub(r'(?<![\w:-])hidden(?![\w:-])','mcd-hidden',m.group(1))+'"',h)
hdr=_cls(hdr); ftr=_cls(ftr)
shell_css=re.sub(r'\.mcd-shell \.hidden\b','.mcd-shell .mcd-hidden',shell_css)
# avatar markup: show initial from data
hdr=re.sub(r'(<button[^>]*aria-label="My Profile"[^>]*>.*?)>N<',r'\1>{{c.data.initial}}<',hdr,count=1,flags=re.S)
assert '{{c.data.initial}}' in hdr
PFXDEF="var PFX='/'+((window.top.location.pathname.match(/^\\/(mcd(?:-[a-z]+)?)/)||[0,'mcd'])[1]);"
def pfx(js):
    js=re.sub(r"'/mcd\?id=","PFX+'?id=",js)
    js=js.replace("'/mcd'","PFX")
    return PFXDEF+js
def adapt(js):
    js=js.replace("/esc?id=","/mcd?id=")
    js=js.replace("(b.innerText||'').trim()==='N'","b.getAttribute('aria-label')==='My Profile'")
    js=js.replace("if((bs[i].innerText||'').trim()==='N'){btn=bs[i];}","if(bs[i].getAttribute('aria-label')==='My Profile'){btn=bs[i];}")
    return pfx(js)
nav=adapt(open('mcd_nav.js').read()); menu=adapt(open('mcd_menu.js').read()); notif=adapt(open('mcd_notif.js').read())
menu=menu.replace("'__NAME__'","JSON.stringify(c.data.name)".replace('JSON.stringify(c.data.name)',"c.data.name") ) if False else menu
pre="var U0=c.data;"
menu=(menu.replace("name:'__NAME__'","name:U0.name").replace("email:'__EMAIL__'","email:U0.email").replace("id:'__SYSID__'","id:U0.sysId").replace("'__IMP__'==='true'","U0.imp==='true'"))
hdr_client='''function($scope,$location,$timeout,$window){
 var SHELL_CSS=%s;
 var c=this; var id=($location.search().id||'');
 c.isHome=(id===''||id==='mcd_home');
 document.body.setAttribute('data-mcd-page',id||'mcd_home');
 var thTimer=setInterval(function(){var rc=document.querySelector('.requests-container');if(rc&&rc.parentElement&&!rc.parentElement.querySelector('.mcd-th')){var h=document.createElement('div');h.className='mcd-th';h.innerHTML='<span>Status</span><span>Request</span><span>Details</span><span>Updated</span>';rc.parentElement.insertBefore(h,rc);}},700);
 [600,1500,3000,5500].forEach(function(t){$timeout(function(){[].forEach.call(document.querySelectorAll('.sp-row-content.row'),function(r){if(r.querySelector('dl.ticket-fields'))r.classList.add('mcd-ticket-row');});},t);});
 if(!c.isHome){document.body.classList.add('mcd-inner');[300,1200,2500].forEach(function(t){$timeout(function(){var sc=document.querySelector('section.sp-scroll');if(sc&&!sc.__mcdTouched&&sc.scrollTop<200)sc.scrollTop=0;},t);});}
 if(!document.getElementById('mcd-shell-css')){var st=document.createElement('style');st.id='mcd-shell-css';st.textContent=SHELL_CSS;document.head.appendChild(st);}
 if(c.isHome)return;
 $timeout(function(){
  var root=document.querySelector('.mcd-shell');if(!root)return;
  var home=root.querySelector('aside button');
  if(home){home.classList.remove('bg-brand-gold/15');var bar=home.querySelector('span.absolute');if(bar)bar.remove();[].forEach.call(home.querySelectorAll('span'),function(s){s.classList.remove('text-brand-gold');s.classList.remove('text-white');s.classList.add('text-white/70');});}
  %s
 },0);
}'''%(json.dumps(shell_css),"(function(){"+pre+menu+"\n"+notif+"\n"+nav+"\nwindow.PFX=PFX;window.MCD_WRAP='mcd-shell';\n"+open('mcd_overlays.js').read()+"})();")
ftr_client='''function($scope,$location){var c=this;var id=($location.search().id||'');c.isHome=(id===''||id==='mcd_home');}'''
srv='''(function(){
 data.name=gs.getUserDisplayName();
 data.email=gs.getUser().getEmail()+'';
 data.sysId=gs.getUserID();
 data.imp=(gs.hasRole('admin')||gs.hasRole('impersonator'))?'true':'false';
 var n=(data.name||'?').split(' ');data.initial=((n[0]||'?').charAt(0)+(n.length>1?n[n.length-1].charAt(0):'')).toUpperCase();
})();'''
inner_css='''
body.mcd-inner{background:var(--background)}
body.mcd-inner #mainContent,body.mcd-inner main,body.mcd-inner .sp-page-root>.page{margin-left:88px}
body.mcd-inner .sp-page-root{padding-top:56px}
'''
H=upsert("sp_header_footer","name=McD Header",{"name":"McD Header","template":hdr,"css":"","script":srv,"client_script":hdr_client})
F=upsert("sp_header_footer","name=McD Footer",{"name":"McD Footer","template":ftr,"css":"","script":"(function(){})();","client_script":ftr_client})
call("PATCH",f"/api/now/table/sp_theme/{th}",{"header":H,"footer":F})
css_id="6f56085cc3c897107d295312b40131e8"
call("PATCH",f"/api/now/table/sp_css/{css_id}",{"css":root+open('mcd_theme.css').read()})
print(H,F)
