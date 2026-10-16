(function(){
 var U={name:'__NAME__',email:'__EMAIL__',id:'__SYSID__',imp:'__IMP__'==='true'};
 var btn=null,bs=document.querySelectorAll('header button');
 for(var i=0;i<bs.length;i++){if((bs[i].innerText||'').trim()==='N'){btn=bs[i];}}
 if(!btn)return;
 btn.style.cursor='pointer';
 var wrap=btn.parentElement;wrap.style.position='relative';
 var icons={
  profile:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  prefs:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  imp:'<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6M16 11l5 5-5 5"/>',
  out:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>'};
 var items=[['My Profile','profile','/esc?id=mcd_profile'],
  ['Preferences','prefs','/esc?id=preferences']];
 if(U.imp)items.push(['Impersonate','imp','#impersonate']);
 items.push(['Logout','out','/logout.do']);
 var m=document.createElement('div');
 m.setAttribute('role','menu');
 m.style.cssText='display:none;position:absolute;right:0;top:calc(100% + 12px);width:240px;background:#1a1a1a;color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,.45);z-index:100;overflow:hidden;font-size:13px';
 var h='<div style="padding:16px 16px 12px;border-bottom:1px solid rgba(255,255,255,.12)"><div style="font-weight:700;font-size:14px">'+U.name+'</div><div style="color:#9a9a9a;margin-top:2px;font-size:12px">'+U.email+'</div></div><div style="padding:6px 0">';
 items.forEach(function(it){h+='<a role="menuitem" href="'+it[2]+'" target="_top" style="display:flex;align-items:center;gap:12px;padding:11px 16px;color:#e5e5e5;text-decoration:none"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+icons[it[1]]+'</svg>'+it[0]+'</a>';});
 m.innerHTML=h+'</div>';

 /* ---- Impersonate popup ---- */
 function openImp(){
  var T=window.top;if(document.querySelector('[data-mcd-imp]'))return;
  var w=document.createElement('div');w.setAttribute('data-mcd-imp','1');
  w.style.cssText='position:fixed;left:0;top:0;right:0;bottom:0;z-index:400;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);font-family:inherit';
  w.innerHTML='<div style="width:440px;max-width:92vw;background:#fff;color:#1a1a1a;border-radius:16px;box-shadow:0 24px 60px rgba(0,0,0,.4);overflow:hidden">'
   +'<div style="background:#1a1a1a;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:16px 22px"><span style="font-size:14px;font-weight:700">Impersonate User</span><button data-x style="background:none;border:0;color:#bbb;font-size:20px;line-height:1;cursor:pointer">&times;</button></div>'
   +'<div style="padding:18px 22px 6px"><p style="margin:0 0 10px;font-size:13px;color:#6b6b6b">Search for the user you want to act as.</p>'
   +'<input data-q type="text" placeholder="Search by name, user ID or email" style="width:100%;box-sizing:border-box;padding:11px 14px;border:1px solid #d6d3ca;border-radius:12px;font-size:14px;outline:none"></div>'
   +'<div data-list style="max-height:300px;overflow:auto;padding:6px 10px 14px"></div></div>';
  document.body.appendChild(w);
  var q=w.querySelector('[data-q]'),list=w.querySelector('[data-list]'),t=null;
  function close(){w.remove();}
  w.addEventListener('click',function(e){if(e.target===w)close();});
  w.querySelector('[data-x]').addEventListener('click',close);
  document.addEventListener('keydown',function k(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',k);}});
  function msg(s){list.innerHTML='<div style="padding:14px;font-size:13px;color:#6b6b6b">'+s+'</div>';}
  function esc(x){return String(x||'').replace(/&/g,'&amp;').replace(/</g,'&lt;');}
  function load(term){
   var enc=encodeURIComponent(term);
   var qs='active=true'+(term?'^nameLIKE'+term+'^ORuser_nameLIKE'+term+'^ORemailLIKE'+term:'')+'^ORDERBYname';
   fetch('/api/now/table/sys_user?sysparm_fields=sys_id,name,user_name,title,email&sysparm_limit=8&sysparm_query='+encodeURIComponent(qs),{headers:{'Accept':'application/json','X-UserToken':T.g_ck||''},credentials:'same-origin'})
   .then(function(r){return r.json();}).then(function(j){
    var rows=j.result||[];if(!rows.length){msg('No users found.');return;}
    list.innerHTML=rows.map(function(u){var ini=(u.name||'?').split(' ').map(function(p){return p.charAt(0);}).slice(0,2).join('').toUpperCase();
     return '<button data-id="'+u.sys_id+'" style="display:flex;align-items:center;gap:12px;width:100%;text-align:left;background:none;border:0;border-radius:10px;padding:9px 12px;cursor:pointer"><span style="flex:none;width:34px;height:34px;border-radius:50%;background:#FFC72C;color:#1a1a1a;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700">'+esc(ini)+'</span><span style="min-width:0"><span style="display:block;font-size:14px;font-weight:600">'+esc(u.name)+'</span><span style="display:block;font-size:12px;color:#6b6b6b">'+esc(u.user_name)+(u.title?' · '+esc(u.title):'')+'</span></span></button>';}).join('');
    [].forEach.call(list.querySelectorAll('button'),function(b){
     b.onmouseenter=function(){b.style.background='rgba(255,199,44,.18)';};b.onmouseleave=function(){b.style.background='none';};
     b.addEventListener('click',function(){msg('Switching user…');
      fetch('/api/now/ui/impersonate/'+b.getAttribute('data-id'),{method:'POST',headers:{'Accept':'application/json','X-UserToken':T.g_ck||''},credentials:'same-origin'})
      .then(function(r){if(!r.ok)throw new Error(r.status);T.location.reload();}).catch(function(){msg('Could not impersonate this user.');});});});
   }).catch(function(){msg('Could not load users.');});
  }
  q.addEventListener('input',function(){clearTimeout(t);t=setTimeout(function(){load(q.value.trim());},250);});
  load('');setTimeout(function(){q.focus();},50);
 }
 wrap.appendChild(m);
 [].forEach.call(m.querySelectorAll('a[href="#impersonate"]'),function(a){a.addEventListener('click',function(e){e.preventDefault();toggle(false);openImp();});});
 [].forEach.call(m.querySelectorAll('a'),function(a){a.onmouseenter=function(){a.style.background='rgba(255,255,255,.08)';};a.onmouseleave=function(){a.style.background='';};});
 function toggle(v){m.style.display=v?'block':'none';btn.setAttribute('aria-expanded',v);}
 btn.addEventListener('click',function(e){e.stopPropagation();toggle(m.style.display==='none');});
 document.addEventListener('click',function(e){if(!m.contains(e.target))toggle(false);});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')toggle(false);});
})();
