/* Royalton v16: event promotion UX + defensive mobile and accessibility behaviours. */
(function () {
 'use strict';
 function ready(fn){ if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn,{once:true}); else fn(); }
 ready(function(){
  var modal=document.getElementById('ry-event-modal');
  if(modal){
   var lastFocus=null,shown=false;
   function close(){if(modal.hidden)return;modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('ry-modal-open');try{sessionStorage.setItem('ry-nye-2027-modal-seen','1');}catch(e){} if(lastFocus&&lastFocus.focus)lastFocus.focus();}
   function open(){if(!modal.hidden)return;lastFocus=document.activeElement;modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('ry-modal-open');var closeButton=modal.querySelector('.ry-event-modal__close');if(closeButton)closeButton.focus();shown=true;}
   modal.querySelectorAll('[data-ry-modal-close]').forEach(function(btn){btn.addEventListener('click',close)});
   document.addEventListener('keydown',function(e){if(modal.hidden)return;if(e.key==='Escape'){e.preventDefault();close();return;}if(e.key==='Tab'){var nodes=Array.prototype.slice.call(modal.querySelectorAll('a[href],button:not([disabled])'));if(!nodes.length)return;var first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
   var visited=false;try{visited=sessionStorage.getItem('ry-nye-2027-modal-seen')==='1'}catch(e){}
   if(!visited && !location.hash){window.setTimeout(open,1400)}
  }
  // Ensure relative accessibility labels and visible countdown never imply an event has zero days remaining due to placeholder markup.
  document.querySelectorAll('[data-ry-countdown]').forEach(function(timer){
   var date=Date.parse(timer.getAttribute('data-ry-countdown')||'');
   if(!Number.isFinite(date)){timer.setAttribute('aria-label','Event countdown temporarily unavailable');return;}
   var str=timer.querySelectorAll('strong');
   if(date>Date.now() && str.length>=4){
    var ms=date-Date.now(),vals=[Math.floor(ms/86400000),Math.floor(ms/3600000)%24,Math.floor(ms/60000)%60,Math.floor(ms/1000)%60];
    Array.prototype.forEach.call(str,function(el,i){el.textContent=String(vals[i]).padStart(2,'0')});
   }
  });
  // Ensure that back-to-top always targets the document and stays separate from the third-party chat UI.
  document.querySelectorAll('a.trx_addons_scroll_to_top').forEach(function(btn){
   btn.addEventListener('click',function(e){var top=document.getElementById('top');if(!top){e.preventDefault();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}});
  });
 });
})();
