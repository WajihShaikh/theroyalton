/* Royalton v7. No jQuery, Elementor or Slider Revolution dependency. */
(function(){
 'use strict';
 var header=document.querySelector('.ry-site-header'),menu=document.querySelector('.ry-navigation'),toggle=document.querySelector('.ry-menu-toggle');
 function closeMenu(){if(!menu)return;menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');}
 if(toggle)toggle.addEventListener('click',function(){var open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');});
 if(header){
  header.querySelectorAll('.ry-submenu-toggle').forEach(function(button){button.addEventListener('click',function(){var item=button.parentElement,open=!item.classList.contains('is-open');header.querySelectorAll('.ry-has-submenu').forEach(function(li){li.classList.remove('is-open');li.querySelector('button').setAttribute('aria-expanded','false');});item.classList.toggle('is-open',open);button.setAttribute('aria-expanded',String(open));});});
  document.addEventListener('click',function(e){if(!header.contains(e.target)){closeMenu();header.querySelectorAll('.ry-has-submenu').forEach(function(li){li.classList.remove('is-open');li.querySelector('button').setAttribute('aria-expanded','false');});}});
  header.addEventListener('keydown',function(e){if(e.key==='Escape'){var sub=e.target.closest('.ry-has-submenu');if(sub&&sub.classList.contains('is-open')){sub.classList.remove('is-open');sub.querySelector('button').setAttribute('aria-expanded','false');sub.querySelector('button').focus();}else{closeMenu();toggle.focus();}}});
  window.addEventListener('resize',function(){if(window.innerWidth>980)closeMenu();});
 }
 var preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 document.querySelectorAll('[data-ry-carousel-root]').forEach(function(hero){
  var media=hero.querySelector('[data-ry-hero-media]'),slides=Array.from(media.querySelectorAll('img'));if(slides.length<2)return;
  var index=0,paused=preference.matches,hovered=false,focused=false,visible=true,elapsed=0,last=0,frame=0,duration=8000;
  var controls=document.createElement('div');controls.className='ry-slider-controls';
  controls.innerHTML='<div class="ry-slider-navigation"><button class="ry-slider-button ry-slider-prev" type="button" aria-label="Previous slide"><svg class="ry-ico ry-ico--arrow-left" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg></button><span class="ry-slider-count"></span><button class="ry-slider-button ry-slider-next" type="button" aria-label="Next slide"><svg class="ry-ico ry-ico--arrow-right" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg></button><button class="ry-slider-button ry-slider-pause" type="button"></button></div><p class="ry-slider-caption"></p><div class="ry-slider-thumbs" role="group" aria-label="Choose a slide"></div>';
  var count=controls.querySelector('.ry-slider-count'),caption=controls.querySelector('.ry-slider-caption'),pause=controls.querySelector('.ry-slider-pause'),thumbs=controls.querySelector('.ry-slider-thumbs');
  var status=document.createElement('span');status.className='ry-slider-status';status.setAttribute('aria-live','polite');status.setAttribute('aria-atomic','true');hero.appendChild(status);
  var progress=document.createElement('div');progress.className='ry-slider-progress';progress.setAttribute('aria-hidden','true');progress.innerHTML='<span></span>';hero.appendChild(progress);var fill=progress.firstChild;
  slides.forEach(function(img,i){
   img.setAttribute('aria-hidden',i?'true':'false');
   var b=document.createElement('button');b.type='button';b.className='ry-slider-thumb';b.setAttribute('aria-label','Show slide '+(i+1)+': '+img.alt);b.setAttribute('aria-pressed',String(!i));
   var thumbnail=document.createElement('img');thumbnail.src=img.currentSrc||img.src;thumbnail.alt='';b.appendChild(thumbnail);thumbs.appendChild(b);b.addEventListener('click',function(){show(i,true);});
  });
  function updatePause(){pause.innerHTML=paused?'<svg class="ry-ico ry-ico--play" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" stroke="none" aria-hidden="true" focusable="false"><path d="M8 5.5v13l11-6.5z"/></svg>':'<svg class="ry-ico ry-ico--pause" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" stroke="none" aria-hidden="true" focusable="false"><rect x="6.5" y="5" width="3.5" height="14" rx="1"/><rect x="14" y="5" width="3.5" height="14" rx="1"/></svg>';pause.setAttribute('aria-label',paused?'Play slideshow':'Pause slideshow');pause.setAttribute('aria-pressed',String(paused));}
  function show(next,manual){
   index=(next+slides.length)%slides.length;elapsed=0;fill.style.transform='scaleX(0)';
   slides.forEach(function(im,i){im.classList.toggle('is-on',i===index);im.setAttribute('aria-hidden',String(i!==index));thumbs.children[i].setAttribute('aria-pressed',String(i===index));});
   count.textContent=String(index+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');caption.textContent=slides[index].alt;
   if(manual)status.textContent='Slide '+(index+1)+' of '+slides.length+'. '+slides[index].alt;
   if(!preference.matches&&caption.animate)caption.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.22,.61,.36,1)'});
  }
  controls.querySelector('.ry-slider-prev').addEventListener('click',function(){show(index-1,true);});
  controls.querySelector('.ry-slider-next').addEventListener('click',function(){show(index+1,true);});
  pause.addEventListener('click',function(){paused=!paused;updatePause();schedule();});
  controls.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(index+(e.key==='ArrowRight'?1:-1),true);}});
  hero.appendChild(controls);show(0,false);updatePause();
  function running(){return !paused&&!hovered&&!focused&&visible&&!document.hidden;}
  function tick(now){frame=0;if(!running()){last=0;return;}if(last)elapsed+=Math.min(now-last,100);last=now;if(elapsed>=duration)show(index+1,false);fill.style.transform='scaleX('+Math.min(1,elapsed/duration)+')';frame=requestAnimationFrame(tick);}
  function schedule(){if(running()&&!frame){last=0;frame=requestAnimationFrame(tick);}}
  hero.addEventListener('mouseenter',function(){hovered=true;});hero.addEventListener('mouseleave',function(){hovered=false;schedule();});
  hero.addEventListener('focusin',function(){focused=true;});hero.addEventListener('focusout',function(e){focused=hero.contains(e.relatedTarget);schedule();});
  document.addEventListener('visibilitychange',schedule);
  if('IntersectionObserver' in window)new IntersectionObserver(function(entries){visible=entries[0].isIntersecting;schedule();},{threshold:0}).observe(hero);
  preference.addEventListener('change',function(){paused=preference.matches;updatePause();schedule();});
  var start=null;hero.addEventListener('touchstart',function(e){if(e.target.closest('a,button'))return;start={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};},{passive:true});
  hero.addEventListener('touchend',function(e){if(!start)return;var dx=e.changedTouches[0].clientX-start.x,dy=e.changedTouches[0].clientY-start.y;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)show(index+(dx<0?1:-1),true);start=null;},{passive:true});
  schedule();
 });
})();
