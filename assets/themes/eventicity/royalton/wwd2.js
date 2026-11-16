/* "What we do" list – the client's original hover photo that follows the mouse (desktop only). */
(function () {
  'use strict';
  var list = document.querySelector('[data-ry-wwd2]');
  var box = document.querySelector('.ry-wwd2__cursor');
  if (!list || !box) return;
  var img = box.querySelector('img');
  var fine = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = list.querySelectorAll('.ry-wwd2__item');
  items.forEach(function (a) { var p = new Image(); p.src = a.getAttribute('data-img'); }); // preload
  if (!fine) return;
  var tx = 0, ty = 0, x = 0, y = 0, raf = null, active = false;
  function loop() {
    x += (tx - x) * (reduce ? 1 : 0.18); y += (ty - y) * (reduce ? 1 : 0.18);
    box.style.transform = 'translate3d(' + (x + 28).toFixed(1) + 'px,' + (y - 160).toFixed(1) + 'px,0)';
    if (active || Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) raf = requestAnimationFrame(loop); else raf = null;
  }
  function start() { if (!raf) raf = requestAnimationFrame(loop); }
  items.forEach(function (a) {
    a.addEventListener('mouseenter', function (e) {
      var src = a.getAttribute('data-img');
      if (img.getAttribute('src') !== src) {
        img.classList.add('is-swap');
        setTimeout(function () { img.src = src; img.classList.remove('is-swap'); }, 120);
      }
      if (!active) { tx = x = e.clientX; ty = y = e.clientY; }
      active = true; box.classList.add('is-on'); start();
    });
  });
  list.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; start(); });
  list.addEventListener('mouseleave', function () { active = false; box.classList.remove('is-on'); });
  window.addEventListener('scroll', function () { if (active) { active = false; box.classList.remove('is-on'); } }, { passive: true });
})();
