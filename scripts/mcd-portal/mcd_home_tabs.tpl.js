(function(){
 var TABS=/*TABS*/null;
 var PFXV=window.PFX||'/mcd';
 function S(q){return PFXV+'?id=esc_search&spa=1&q='+encodeURIComponent(q);}
 function go(u){window.top.location.href=u;}
 var GROUP={'My Approvals':'a','My Requests':'a','My Tasks':'a','Catalog Items':'r','Knowledge Articles':'r'};
 var VIEW={'My Approvals':'approvals','My Requests':'ec_requests','My Tasks':'ec_requests'};
 function swap(card,label){
  var tmp=document.createElement('div');tmp.innerHTML=TABS[label];var n=tmp.firstElementChild;
  n.setAttribute('data-mcd-card',label);card.replaceWith(n);
 }
 document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('button');if(!b)return;
  var label=(b.textContent||'').trim().split('\n')[0].trim();
  var card=b.closest('.bg-card');if(!card)return;
  if(TABS[label]&&GROUP[label]&&(card.getAttribute('data-mcd-card')!==label)&&b.closest('[class*="border-b"],[class*="rounded-full"],div')){
   if(card.querySelector('button')&&[].some.call(card.querySelectorAll('button'),function(x){return (x.textContent||'').trim()===label;})){e.preventDefault();e.stopPropagation();swap(card,label);return;}
  }
  var cur=card.getAttribute('data-mcd-card');
  if(cur&&/^view all/i.test(label)){go(PFXV+'?id='+(VIEW[cur]||'esc_knowledge_home'));return;}
  if(cur&&GROUP[cur]==='r'&&!TABS[label]){var t=(b.getAttribute('aria-label')||label).replace(/^Favourite\s+/,'');if(/^Favourite/.test(b.getAttribute('aria-label')||''))return;go(S(t));return;}
  if(cur&&GROUP[cur]==='a'&&label&&!TABS[label]){go(S(label));}
 },true);
})();
