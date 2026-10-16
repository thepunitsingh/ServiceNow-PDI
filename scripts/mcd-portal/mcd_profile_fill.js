function mcdFillProfile(d,u){
 var D='—';function v(x){return (x===undefined||x===null||x==='')?D:x;}
 function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
 var L={'salutation':'','first name':u.first_name,'middle name':u.middle_name,'third name':'','last name':u.last_name,
  'alternate first name':'','alternate middle name':'','alternate third name':'','alternate last name':'','gender':u.gender,
  'marital status':'','nationality':'','religion':'','gosi number':'','company accommodation':'','employee needs special care':'',
  'employee id':u.employee_number,'eid':u.user_name,'date of birth':'','country / region':u.country,'home airport':'',
  'employee registered in gosi':'','social insurance grouping':'','non-registered reason':''};
 [].forEach.call(d.querySelectorAll('p.uppercase'),function(p){
  var k=p.textContent.trim().toLowerCase();
  if(!(k in L))return;
  var val=p.nextElementSibling&&p.nextElementSibling.querySelector('p');
  if(val){val.textContent=v(L[k]);}
 });
 var h1=d.querySelector('h1');if(h1){h1.textContent=u.name;var jl=h1.nextElementSibling;
  if(jl){var parts=[u.title,u.department,u.employee_number].filter(Boolean);jl.innerHTML=parts.length?parts.map(esc).join(' &nbsp;·&nbsp; '):esc(u.user_name);}}
 var ini=((u.first_name||u.name||'?').charAt(0)+(u.last_name?u.last_name.charAt(0):'')).toUpperCase();
 [].forEach.call(d.querySelectorAll('div,span'),function(e){if(e.children.length===0&&e.textContent.trim()==='VL')e.textContent=ini;});
 function cardOf(titleRe){var hs=d.querySelectorAll('h2');for(var i=0;i<hs.length;i++){if(titleRe.test(hs[i].textContent)){var c=hs[i];while(c&&!/rounded-2xl/.test(c.className))c=c.parentElement;return c;}}return null;}
 function emptyCard(re,msg){var c=cardOf(re);if(!c)return;var kids=[].slice.call(c.children);for(var i=1;i<kids.length;i++)kids[i].remove();
  var m=d.createElement('div');m.className='px-6 pb-6 text-[14px] text-muted-foreground';m.textContent=msg||'No records on file.';c.appendChild(m);}
 var TD='px-5 py-3.5 text-[14px] text-foreground',TR='border-border border-t transition-colors',TDR='px-5 py-3.5 text-[14px] text-brand-red font-medium';
 var T='inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em] uppercase bg-nav text-brand-yellow',F='inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em] uppercase border-border text-muted-foreground border bg-transparent';
 function rows(list){return list.length?list.map(function(r){return '<tr class="'+TR+'"><td class="'+TDR+'">'+esc(r[0])+'</td><td class="'+TD+'">'+esc(r[1])+'</td><td class="'+TD+'"><span class="'+(r[2]?T:F)+'">'+(r[2]?'True':'False')+'</span></td></tr>';}).join(''):'<tr class="'+TR+'"><td class="'+TD+'" colspan="3">No records on file.</td></tr>';}
 [].forEach.call(d.querySelectorAll('table'),function(t){
  var h=(t.querySelector('th')||{}).textContent;h=(h||'').trim().toLowerCase();var tb=t.querySelector('tbody');
  if(h==='email type'){tb.innerHTML=rows(u.email?[['Business',u.email,true]]:[]);}
  else if(h==='phone type'){var ph=[];if(u.mobile_phone)ph.push(['Mobile (Work)',u.mobile_phone,true]);if(u.phone)ph.push(['Business',u.phone,!u.mobile_phone]);if(u.home_phone)ph.push(['Home',u.home_phone,false]);tb.innerHTML=rows(ph);}
 });
 var addr=[u.street,u.city,u.state,u.zip,u.country].filter(Boolean);
 var ac=cardOf(/My Addresses/);
 if(ac){var k=[].slice.call(ac.children);for(var i=1;i<k.length;i++)k[i].remove();var m=d.createElement('div');m.className='px-6 pb-6';
  m.innerHTML=addr.length?'<div class="border-border rounded-xl border p-5"><div class="mb-3 flex items-center justify-between"><span class="text-[14px] font-semibold">Home Address</span><span class="'+T+'">Primary</span></div><p class="text-[13px] text-muted-foreground">'+esc(u.street||'')+'</p><p class="text-[13px] text-muted-foreground">'+esc([u.city,u.state,u.zip].filter(Boolean).join(', '))+'</p><p class="text-[13px] text-muted-foreground">'+esc(u.country||'')+'</p></div>':'<p class="text-[14px] text-muted-foreground">No address on file.</p>';ac.appendChild(m);}
 emptyCard(/National ID/);emptyCard(/Emergency Contacts/);emptyCard(/My Dependents/);emptyCard(/Dependents of Special Needs/);emptyCard(/Family Protection/);emptyCard(/Payment Information/);
}
