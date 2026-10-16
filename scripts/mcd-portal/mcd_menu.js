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
 if(U.imp)items.push(['Impersonate','imp','/impersonate_dialog.do']);
 items.push(['Logout','out','/logout.do']);
 var m=document.createElement('div');
 m.setAttribute('role','menu');
 m.style.cssText='display:none;position:absolute;right:0;top:calc(100% + 12px);width:240px;background:#1a1a1a;color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,.45);z-index:100;overflow:hidden;font-size:13px';
 var h='<div style="padding:16px 16px 12px;border-bottom:1px solid rgba(255,255,255,.12)"><div style="font-weight:700;font-size:14px">'+U.name+'</div><div style="color:#9a9a9a;margin-top:2px;font-size:12px">'+U.email+'</div></div><div style="padding:6px 0">';
 items.forEach(function(it){h+='<a role="menuitem" href="'+it[2]+'" target="_top" style="display:flex;align-items:center;gap:12px;padding:11px 16px;color:#e5e5e5;text-decoration:none"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+icons[it[1]]+'</svg>'+it[0]+'</a>';});
 m.innerHTML=h+'</div>';
 wrap.appendChild(m);
 [].forEach.call(m.querySelectorAll('a'),function(a){a.onmouseenter=function(){a.style.background='rgba(255,255,255,.08)';};a.onmouseleave=function(){a.style.background='';};});
 function toggle(v){m.style.display=v?'block':'none';btn.setAttribute('aria-expanded',v);}
 btn.addEventListener('click',function(e){e.stopPropagation();toggle(m.style.display==='none');});
 document.addEventListener('click',function(e){if(!m.contains(e.target))toggle(false);});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')toggle(false);});
})();
