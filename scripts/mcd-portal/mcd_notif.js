(function(){
 var btn=document.querySelector('header button[aria-label="Notifications"]');
 if(!btn)return;
 var P='/esc?id=';
 var ic={
  ok:['#4ade80','<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 12l2 2 4-4"/>'],
  info:['#60a5fa','<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'],
  doc:['#fbbf24','<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>'],
  mega:['#818cf8','<path d="M3 10v4l12 5V5L3 10zM19 9a4 4 0 0 1 0 6"/>'],
  star:['#f87171','<path d="M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8z"/>']};
 var N=[['Your IT ticket #4892 has been resolved','2 min ago','ok',P+'ec_requests',1],
  ['New payslip available for July 2026','1 hr ago','info',P+'esc_search&spa=1&q=payslip',1],
  ['Annual leave balance updated','3 hrs ago','doc',P+'ec_requests',1],
  ['Mandatory training due in 5 days','Yesterday','mega',P+'esc_search&spa=1&q=training',0],
  ["You've earned a recognition badge",'2 days ago','star',P+'esc_search&spa=1&q=recognition',0]];
 var badge=null,sp=btn.querySelectorAll('span');
 for(var i=0;i<sp.length;i++){if(/^\d+$/.test((sp[i].innerText||'').trim()))badge=sp[i];}
 var m=document.createElement('div');m.setAttribute('role','menu');
 m.style.cssText='display:none;position:fixed;width:320px;background:#1a1a1a;color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,.45);z-index:100;overflow:hidden;font-size:13px';
 var gold='#fbbf24';
 function render(){
  var h='<div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.12)"><b style="font-size:14px">Notifications</b><button data-act="read" style="background:none;border:0;color:'+gold+';font-size:12px;cursor:pointer">Mark all read</button></div>';
  N.forEach(function(n,i){var c=ic[n[2]];
   h+='<a role="menuitem" href="'+n[3]+'" target="_top" data-i="'+i+'" style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);text-decoration:none;color:'+(n[4]?'#fff':'#8a8a8a')+'"><span style="flex:none;width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="'+c[0]+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+c[1]+'</svg></span><span style="flex:1"><span style="display:block">'+n[0]+'</span><span style="display:block;font-size:11px;color:#8a8a8a;margin-top:3px">'+n[1]+'</span></span>'+(n[4]?'<span style="width:6px;height:6px;border-radius:50%;background:'+gold+'"></span>':'')+'</a>';});
  h+='<a href="'+P+'ec_notifications_page" target="_top" style="display:block;text-align:center;padding:12px;color:'+gold+';text-decoration:none;font-size:12px">View all notifications</a>';
  m.innerHTML=h;
  var rb=m.querySelector('[data-act=read]');
  rb.onclick=function(e){e.stopPropagation();N.forEach(function(n){n[4]=0;});if(badge)badge.style.display='none';render();};
  [].forEach.call(m.querySelectorAll('a'),function(a){a.onmouseenter=function(){a.style.background='rgba(255,255,255,.06)';};a.onmouseleave=function(){a.style.background='';};});
 }
 render();document.body.appendChild(m);
 function place(){var r=btn.getBoundingClientRect();m.style.top=(r.bottom+12)+'px';m.style.left=Math.max(8,Math.min(innerWidth-328,r.right-160))+'px';}
 function toggle(v){if(v)place();m.style.display=v?'block':'none';btn.setAttribute('aria-expanded',v);}
 btn.style.cursor='pointer';
 btn.addEventListener('click',function(e){e.stopPropagation();toggle(m.style.display==='none');});
 document.addEventListener('click',function(e){if(!m.contains(e.target))toggle(false);});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')toggle(false);});
 addEventListener('resize',function(){toggle(false);});
})();
