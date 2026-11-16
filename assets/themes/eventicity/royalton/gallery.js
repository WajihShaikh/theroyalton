/* The Royalton – gallery page: filters, full-screen viewer, entrance motion. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.querySelector('[data-rg]');
  if (!root) return;

  /* ---------- entrance motion ---------- */
  var ins = root.querySelectorAll('.rg-in');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('is-in'); io.unobserve(x.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
    ins.forEach(function (el) { io.observe(el); });
  } else { ins.forEach(function (el) { el.classList.add('is-in'); }); }

  /* ---------- filters ---------- */
  var grid = root.querySelector('.rg-grid'), figs = Array.prototype.slice.call(grid.querySelectorAll('figure'));
  var bar = root.querySelector('.rg-filter'), status = root.querySelector('.rg-status');
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var f = b.getAttribute('data-f');
    bar.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    var show = figs.filter(function (fig) { return f === 'all' || (fig.getAttribute('data-cat') || '').split(' ').indexOf(f) > -1; });
    if (reduce) {
      figs.forEach(function (fig) { fig.hidden = show.indexOf(fig) < 0; });
    } else {
      figs.forEach(function (fig) { fig.classList.add('is-out'); });
      setTimeout(function () {
        figs.forEach(function (fig) { fig.hidden = show.indexOf(fig) < 0; });
        show.forEach(function (fig, i) { setTimeout(function () { fig.classList.remove('is-out'); }, Math.min(i, 10) * 45); });
      }, 260);
    }
    if (status) status.textContent = 'Showing ' + show.length + ' photo' + (show.length === 1 ? '' : 's') + (f === 'all' ? '' : ' in ' + b.firstChild.textContent.trim());
  });

  /* ---------- full-screen viewer ---------- */
  var lb = document.querySelector('.rg-lb');
  var img = lb.querySelector('.rg-lb__img'), cap = lb.querySelector('.rg-lb__cap'), count = lb.querySelector('.rg-lb__count');
  var list = [], idx = 0, lastFocus = null;
  function visibleTiles(origin) {
    var scope = origin.closest('.rg-grid') ? Array.prototype.slice.call(grid.querySelectorAll('figure:not([hidden]) .rg-tile'))
      : Array.prototype.slice.call(origin.closest('[data-rg-set]').querySelectorAll('.rg-tile'));
    return scope;
  }
  function show(i, dir) {
    idx = (i + list.length) % list.length;
    var t = list[idx], full = t.getAttribute('data-full'), alt = t.querySelector('img').alt;
    if (!reduce) img.classList.add('is-swap');
    var pre = new Image();
    pre.onload = pre.onerror = function () {
      img.src = full; img.alt = alt; cap.textContent = alt;
      count.textContent = (idx + 1) + ' / ' + list.length;
      requestAnimationFrame(function () { img.classList.remove('is-swap'); });
    };
    pre.src = full;
  }
  function open(tile) {
    lastFocus = tile; list = visibleTiles(tile);
    lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); document.body.classList.add('rg-lock');
    show(list.indexOf(tile)); lb.querySelector('.rg-lb__close').focus();
  }
  function close() {
    lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); document.body.classList.remove('rg-lock');
    if (lastFocus) lastFocus.focus();
  }
  root.addEventListener('click', function (e) { var t = e.target.closest('.rg-tile'); if (t) open(t); });
  lb.querySelector('.rg-lb__close').addEventListener('click', close);
  lb.querySelector('.rg-lb__prev').addEventListener('click', function () { show(idx - 1); });
  lb.querySelector('.rg-lb__next').addEventListener('click', function () { show(idx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('rg-lb__stage')) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'Tab') { // keep focus inside the viewer
      var f = lb.querySelectorAll('button'), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  var x0 = null;
  lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
  });
})();
