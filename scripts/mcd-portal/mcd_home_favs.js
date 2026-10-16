(function(){
 var T=window.top,UID='__SYSID__',PFXV=window.PFX||'/mcd';
 var h=null;[].forEach.call(document.querySelectorAll('h2'),function(x){if(x.textContent.trim()==='My Favorites')h=x;});
 if(!h)return;
 var section=h.closest('section'),list=section.children[1],tpl=list.firstElementChild.cloneNode(true);
 var viewAll=section.querySelector('button');
 if(viewAll)viewAll.addEventListener('click',function(e){e.stopImmediatePropagation();T.location.href=PFXV+'?id=favorites_list';},true);
 var HDR={'Accept':'application/json','X-UserToken':T.g_ck||''};
 function href(t,id){
  if(t==='sc_cat_item')return PFXV+'?id=sc_cat_item&sys_id='+id;
  if(t==='kb_knowledge')return PFXV+'?id=kb_article&sys_id='+id;
  if(t==='sc_cat_item_guide')return PFXV+'?id=sc_cat_item_guide&sys_id='+id;
  if(t==='sp_page')return PFXV+'?id='+id;
  return PFXV+'?id=form&table='+t+'&sys_id='+id;
 }
 function empty(){list.innerHTML='<p class="text-muted-foreground px-2 py-4 text-[13px]">You haven’t favorited anything yet. Tap the heart on a catalog item or article to save it here.</p>';}
 function render(rows){
  list.innerHTML='';
  if(!rows.length){empty();return;}
  rows.forEach(function(r){
   var row=tpl.cloneNode(true);
   var title=(r.reference_document&&r.reference_document.display_value)||(r.reference_table&&r.reference_table.display_value)||'Favorite';
   title=String(title).replace(/^[^:]{2,30}: /,'');
   var t=(r.reference_table&&r.reference_table.value)||'',id=(r.reference_document&&r.reference_document.value)||'';
   var span=row.querySelector('span.text-foreground');if(span)span.textContent=title;
   var btn=row.querySelector('button');btn.setAttribute('aria-label','Remove favourite '+title);btn.style.cursor='pointer';
   var left=row.firstElementChild;left.style.cursor='pointer';
   left.addEventListener('click',function(){T.location.href=href(t,id);});
   btn.addEventListener('click',function(e){e.stopPropagation();e.preventDefault();
    row.style.opacity='.4';
    fetch('/api/now/table/sp_favorite/'+r.sys_id.value,{method:'DELETE',headers:HDR,credentials:'same-origin'}).then(function(x){
     if(x.ok||x.status===204){row.remove();if(!list.children.length)empty();}else{row.style.opacity='1';}}).catch(function(){row.style.opacity='1';});
   },true);
   list.appendChild(row);
  });
 }
 var q='user='+UID+'^ORDERBYDESClast_viewed^ORDERBYDESCsys_created_on';
 fetch('/api/now/table/sp_favorite?sysparm_display_value=all&sysparm_limit=5&sysparm_query='+encodeURIComponent(q),{headers:HDR,credentials:'same-origin'})
  .then(function(r){return r.json();}).then(function(j){render(j.result||[]);}).catch(function(){empty();});
})();
