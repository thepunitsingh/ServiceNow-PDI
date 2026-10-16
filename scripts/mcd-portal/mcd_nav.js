(function(){
 var P='/esc?id=';
 function s(q){return P+'esc_search&spa=1&q='+encodeURIComponent(q);}
 var MAP={
  'home':'/mcd','switch to old portal':'/esc','my favorites':P+'favorites_list','recent history':null,
  'it':s('IT'),'hr':s('HR'),'payroll':s('payroll'),'facilities':s('facilities'),'learning':s('learning'),
  'software & app registry':s('software'),'service catalog':P+'esc_sc_category','knowledge base':P+'esc_knowledge_home',
  'asset management':s('asset'),'hr connect':s('HR'),'my documents':s('documents'),
  'my approvals':P+'approvals','my requests':P+'ec_requests','my tasks':P+'ec_requests','view all':P+'ec_requests',
  'catalog items':P+'esc_sc_category','knowledge articles':P+'esc_knowledge_home',
  'privacy policy':s('privacy policy'),'terms of use':s('terms of use'),'accessibility':s('accessibility'),
  'contact service desk':s('service desk'),
  'click to update your contact info':s('contact info'),'mcd*connect':s('McD Connect')
 };
 var BADGE={0:P+'approvals',1:P+'ec_requests',2:s('announcements'),3:P+'sc_cart'};
 var badgeIdx=0;
 function go(u){if(u)window.top.location.href=u;}
 function label(b){
  var a=b.getAttribute('aria-label');if(a)return a.replace(/^(Favourite|Toggle favourite)\s+/i,'').trim();
  return (b.innerText||'').trim();
 }
 var fix=document.querySelectorAll('button');
 for(var i=0;i<fix.length;i++){(function(b){
  if((b.innerText||'').trim()==='N'||b.getAttribute('aria-label')==='Notifications')return;
  var raw=label(b),l=raw.split('\n')[0].trim().toLowerCase();
  if(b.closest('aside')&&l!=='home')return;
  if(!b.closest('header')&&/^(my approvals|my requests|my tasks|catalog items|knowledge articles)$/.test(l))return;
  if(/^(previous slide|next slide|pause carousel|provide feedback|give feedback|english|tours|n)$/.test(l))return;
  var u;
  if(/^\d+$/.test(l)){u=BADGE[badgeIdx++];}
  else if(l in MAP){u=MAP[l];}
  else if(/^favourite |toggle favourite/i.test(b.getAttribute('aria-label')||'')){
   b.addEventListener('click',function(e){e.stopPropagation();var h=b.querySelector('svg,span');b.classList.toggle('mcd-fav');});return;}
  else if(l){u=s(raw.split('\n')[0].trim());}
  if(u){b.style.cursor='pointer';b.addEventListener('click',function(e){e.preventDefault();go(u);});}
 })(fix[i]);}
 var inp=document.querySelector('input');
 if(inp){inp.addEventListener('keydown',function(e){if(e.key==='Enter'&&inp.value.trim())go(s(inp.value.trim()));});
  var sb=inp.parentElement&&inp.parentElement.querySelector('svg');
  if(sb)sb.style.cursor='pointer',sb.addEventListener('click',function(){if(inp.value.trim())go(s(inp.value.trim()));});}
})();
