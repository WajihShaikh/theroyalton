/* "for all occasions" cards – same behaviour as the client's original QW Case portfolio:
   the first card starts open; hovering (or focusing) a card opens it. On touch screens the
   first tap opens a closed card and the second tap follows its link. */
(function () {
  'use strict';
  document.querySelectorAll('[data-ry-occ]').forEach(function (list) {
    var items = Array.prototype.slice.call(list.querySelectorAll('.ry-occ__item'));
    if (!items.length) return;
    function open(it) { items.forEach(function (x) { x.classList.toggle('is-active', x === it); }); }
    var hover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    var stacked = function () { return window.matchMedia('(max-width: 767px)').matches; };
    items.forEach(function (it) {
      it.addEventListener('mouseenter', function () { if (!stacked()) open(it); });
      it.addEventListener('focusin', function () { if (!stacked()) open(it); });
      var a = it.querySelector('.ry-occ__inner');
      a.addEventListener('click', function (e) {
        if (!hover && !stacked() && !it.classList.contains('is-active')) { e.preventDefault(); open(it); }
      });
    });
  });
})();

/* "The Royalton Event Venue / for all occasions" heading: words glide in from opposite sides
   when the section scrolls into view, then the two lines drift apart slightly on scroll. */
(function () {
  'use strict';
  var title = document.querySelector('.ry-occ__title');
  if (!title) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  var lines = title.querySelectorAll('.ry-occ__l1, .ry-occ__l2');
  title.setAttribute('aria-label', title.textContent.replace(/\s+/g, ' ').trim());
  lines.forEach(function (line, li) {
    var words = line.textContent.trim().split(/\s+/);
    line.setAttribute('aria-hidden', 'true');
    line.innerHTML = words.map(function (w, i) {
      var order = li === 1 ? (words.length - 1 - i) : i; // line 2 slides in from the left, so its last word leads
      return '<span class="ry-occ__w" style="--wd:' + (0.1 + li * 0.3 + order * 0.09).toFixed(2) + 's">' + w + '</span>';
    }).join(' ');
  });
  title.classList.add('ry-occ__title--anim');
  var io = new IntersectionObserver(function (en) {
    en.forEach(function (x) { if (x.isIntersecting) { title.classList.add('is-in'); io.disconnect(); } });
  }, { threshold: 0.25 });
  io.observe(title);
  // gentle opposite drift of the two lines while scrolling (desktop)
  if (!(window.matchMedia && window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches)) return;
  var ticking = false;
  function drift() {
    var r = title.getBoundingClientRect(), vh = window.innerHeight;
    if (r.bottom > 0 && r.top < vh) {
      var p = ((r.top + r.height / 2) - vh / 2) / vh; // about -1..1
      title.style.setProperty('--drift', (p * 46).toFixed(1) + 'px');
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(drift); } }, { passive: true });
  drift();
})();
