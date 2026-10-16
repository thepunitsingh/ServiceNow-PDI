function mcdProfileTabs(d,u){
 var ft=d.querySelector('footer');if(ft)ft.remove();
 var PTABS=/*PTABS*/null,PBARS=/*PBARS*/null,UPLOAD=/*UPLOAD*/null;
 var D='—';
 function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
 var bar=d.querySelector('.sticky.bg-nav');
 var personal=bar.nextElementSibling.cloneNode(true);
 var LABEL={'username':u.user_name,'first name':u.first_name,'middle name':u.middle_name,'last name':u.last_name,'title':u.title,'job title':u.title,
  'department':u.department,'location':u.location,'gender':u.gender,'manager':u.manager,'direct manager':u.manager,'email':u.email,'employee id':u.employee_number,
  'country':u.country,'employee status':u.active==='false'?'Inactive':'Active','company':u.company,'cost center':u.cost_center,'division':''};
 function fillLabels(root){
  [].forEach.call(root.querySelectorAll('p'),function(p){
   if(!/uppercase/.test(p.className))return;
   var k=p.textContent.trim().toLowerCase();var val=p.nextElementSibling&&p.nextElementSibling.querySelector('p');
   if(!val)return;var x=LABEL[k];val.textContent=(x===undefined||x===null||x==='')?D:x;
  });
  [].forEach.call(root.querySelectorAll('table'),function(t){
   var th=(t.querySelector('th')||{}).textContent;if(!th||!/Relationship Type/i.test(th))return;
   var rows=t.querySelectorAll('tbody tr');
   rows.forEach(function(r,i){if(i===0){var a=r.querySelectorAll('td')[1];if(a){var tn=null,w=d.createTreeWalker(a,NodeFilter.SHOW_TEXT,null),n;while(n=w.nextNode()){if(n.nodeValue.trim()){tn=n;break;}}
     if(u.manager){if(tn)tn.nodeValue=u.manager;}else{a.textContent=D;}}}else r.remove();});
  });
  [].forEach.call(root.querySelectorAll('p'),function(p){ if(/Riyadh International Catering/.test(p.textContent))p.textContent=(u.company||"McDonald's"); if(/Present .{1,3}[0-9]+ yrs/.test(p.textContent))p.textContent='Current position'; });
 }
 function show(label){
  var cur=d.querySelector('.sticky.bg-nav');
  var tmp=d.createElement('div');tmp.innerHTML=PBARS[label];var nb=tmp.firstElementChild;
  var body=cur.nextElementSibling;var nbody;
  if(label==='Personal Data'){nbody=personal.cloneNode(true);}
  else{var t2=d.createElement('div');t2.innerHTML=PTABS[label];nbody=t2.firstElementChild;fillLabels(nbody);}
  cur.replaceWith(nb);body.replaceWith(nbody);
  d.defaultView.scrollTo(0,0);
 }
 function scrollTo(label){
  var hs=d.querySelectorAll('h2,h3');for(var i=0;i<hs.length;i++){if(hs[i].textContent.trim().toLowerCase()===label.toLowerCase()){hs[i].scrollIntoView({behavior:'smooth',block:'start'});return;}}
 }
 function closeM(){var m=d.querySelector('[data-mcd-modal]');if(m)m.remove();}
 function openUpload(){
  closeM();var w=d.createElement('div');w.setAttribute('data-mcd-modal','1');w.innerHTML=UPLOAD;d.body.appendChild(w);
  var fe=d.defaultView.frameElement,fr=fe?fe.getBoundingClientRect():{top:0},ph=d.defaultView.parent.innerHeight;
  w.style.cssText='position:absolute;left:0;width:100%;z-index:100;top:'+(-fr.top)+'px;height:'+ph+'px';
  var root=w.firstElementChild;root.style.position='absolute';root.style.inset='0';
  var bk=w.firstElementChild.children[0];bk.addEventListener('click',closeM);
  [].forEach.call(w.querySelectorAll('button'),function(b){var t=(b.textContent||'').trim();if(t==='Cancel'||t==='Save'||b.getAttribute('aria-label')==='Close')b.addEventListener('click',closeM);});
 }
 d.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  var t=(b.textContent||'').trim(),al=b.getAttribute('aria-label')||'';
  if(PBARS[t]&&b.closest('.sticky')){e.preventDefault();show(t);return;}
  if(/^(Edit |Change photo)/.test(al)){openUpload();return;}
  var nav=b.closest('nav');if(nav&&nav.classList.contains('sticky')&&t&&!PBARS[t]){scrollTo(t);return;}
 },true);
 d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
}
