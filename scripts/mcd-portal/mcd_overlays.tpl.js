(function(){
 var FLY=/*FLY*/null,FEED=/*FEEDBACK*/null,LANG=/*LANG*/null;
 var PFXV=window.PFX||'/mcd';
 function S(q){return PFXV+'?id=esc_search&spa=1&q='+encodeURIComponent(q);}
 function go(u){window.top.location.href=u;}
 var wrap=document.createElement('div');wrap.className=window.MCD_WRAP||'';document.body.appendChild(wrap);
 function closeOv(kind){[].forEach.call(wrap.querySelectorAll('[data-mcd-ov'+(kind?'="'+kind+'"':'')+']'),function(n){n.remove();});
  if(!kind||kind==='fly'){[].forEach.call(document.querySelectorAll('aside button[data-mcd-open]'),function(b){b.removeAttribute('data-mcd-open');b.style.background='';var bar=b.querySelector('[data-mcd-bar]');if(bar)bar.remove();});}}
 function opener(){return wrap;}
 /* ---- rail flyouts ---- */
 [].forEach.call(document.querySelectorAll('aside button'),function(b){
  var label=(b.textContent||'').trim();
  if(!FLY[label])return;
  b.style.cursor='pointer';
  b.addEventListener('click',function(e){
   e.stopPropagation();
   var was=b.hasAttribute('data-mcd-open');closeOv();if(was)return;
   var h='<div data-mcd-ov="fly">'+FLY[label][0]+FLY[label][1]+'</div>';wrap.insertAdjacentHTML('beforeend',h);
   b.setAttribute('data-mcd-open','1');b.style.background='rgba(255,199,44,.15)';
   var bar=document.createElement('span');bar.setAttribute('data-mcd-bar','1');bar.style.cssText='position:absolute;top:8px;bottom:8px;right:0;width:3.5px;border-radius:4px 0 0 4px;background:var(--brand-gold,#FFC72C)';b.appendChild(bar);
   var ov=wrap.querySelector('[data-mcd-ov="fly"]');
   var back=ov.children[0],panel=ov.children[1];
   back.addEventListener('click',function(){closeOv('fly');closeOv();});
   [].forEach.call(panel.querySelectorAll('button'),function(x){
    var t=(x.textContent||'').trim();
    if(!t){x.addEventListener('click',function(){closeOv();});return;}
    x.addEventListener('click',function(){go(/^browse all/i.test(t)?S(label):S(t));});
   });
  });
 });
 /* ---- feedback modal ---- */
 function openFeedback(){
  closeOv();wrap.insertAdjacentHTML('beforeend','<div data-mcd-ov="feed">'+FEED+'</div>');
  var m=wrap.querySelector('[data-mcd-ov="feed"]');var rating=0;
  var stars=m.querySelectorAll('button[aria-label^="Rate"]'),submit=m.querySelector('button[disabled]');
  function paint(n){[].forEach.call(stars,function(s,i){var sv=s.querySelector('svg');sv.setAttribute('class',sv.getAttribute('class').replace(/ ?(text-border fill-transparent|text-brand-gold fill-current)/,'')+(i<n?' text-brand-gold fill-current':' text-border fill-transparent'));});}
  [].forEach.call(stars,function(s,i){s.addEventListener('click',function(){rating=i+1;paint(rating);if(submit)submit.disabled=false;});});
  var btns=m.querySelectorAll('button');
  m.children[0].children[0].addEventListener('click',function(){closeOv('feed');});
  [].forEach.call(btns,function(x){var t=(x.textContent||'').trim();
   if(t==='Cancel'||(!t&&!x.getAttribute('aria-label')))x.addEventListener('click',function(){closeOv('feed');});
   if(/^Submit/.test(t))x.addEventListener('click',function(){
    closeOv('feed');var d=document.createElement('div');d.setAttribute('data-mcd-ov','toast');
    d.style.cssText='position:fixed;left:50%;bottom:32px;transform:translateX(-50%);background:#1a1a1a;color:#fff;padding:12px 20px;border-radius:12px;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,.35);z-index:200';
    d.textContent='Thanks for your feedback ('+rating+'/5)';wrap.appendChild(d);setTimeout(function(){d.remove();},2600);});});
 }
 [].forEach.call(document.querySelectorAll('button'),function(b){if(/Provide feedback/.test(b.textContent||''))b.addEventListener('click',function(e){e.stopPropagation();openFeedback();});});
 /* ---- language menu ---- */
 var lb=null;[].forEach.call(document.querySelectorAll('header button'),function(b){if(/^English|^العربية/.test((b.textContent||'').trim()))lb=b;});
 if(lb){var lw=lb.parentElement;if(getComputedStyle(lw).position==='static')lw.style.position='relative';
  lb.style.cursor='pointer';
  lb.addEventListener('click',function(e){
   e.stopPropagation();var ex=lw.querySelector('[data-mcd-ov="lang"]');if(ex){ex.remove();return;}
   closeOv();var holder=document.createElement('div');holder.setAttribute('data-mcd-ov','lang');holder.innerHTML=LANG;lw.appendChild(holder);
   [].forEach.call(holder.querySelectorAll('button'),function(x){x.addEventListener('click',function(ev){ev.stopPropagation();
    var txt=(x.textContent||'').trim();var tn=null;var w=document.createTreeWalker(lb,NodeFilter.SHOW_TEXT,null);var n;while(n=w.nextNode()){if(n.nodeValue.trim()){tn=n;break;}}
    if(tn)tn.nodeValue=txt;holder.remove();});});
  });}
 document.addEventListener('click',function(e){if(!wrap.contains(e.target)){var l=document.querySelector('[data-mcd-ov="lang"]');if(l)l.remove();}});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeOv();var l=document.querySelector('[data-mcd-ov="lang"]');if(l)l.remove();}});
 window.mcdOpenFeedback=openFeedback;
})();
