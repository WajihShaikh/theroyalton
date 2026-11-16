/* The Royalton v9 – extra section motion. Everything stays visible without JS. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  if (reduce) return;
  var raf = window.requestAnimationFrame || function (f) { return setTimeout(f, 16); };
  var targets = [];
  function watch(el) { targets.push(el); }

  /* 1. Section headings: split into words that rise in */
  document.querySelectorAll('.ry .ry-h2, .rg .rg-h2').forEach(function (h) {
    if (h.closest('.ry-hero') || h.querySelector('*') || h.classList.contains('ry9-split')) return;
    var words = h.textContent.trim().split(/\s+/);
    if (!words.length || words.length > 22) return;
    h.setAttribute('aria-label', h.textContent.trim());
    h.innerHTML = words.map(function (w, i) {
      return '<span class="ry9-w" aria-hidden="true"><span style="--wd:' + (i * 0.05).toFixed(2) + 's">' + w.replace(/</g, '&lt;') + '</span></span>';
    }).join(' ');
    h.classList.add('ry9-split'); watch(h);
  });

  /* 2. Kicker rules draw in */
  document.querySelectorAll('.ry .ry-kicker, .rg .rg-kicker').forEach(function (k) {
    if (k.closest('.ry-hero')) return; k.classList.add('ry9-kick'); watch(k);
  });

  /* 3. Gold seam on navy sections */
  document.querySelectorAll('.ry.ry--navy').forEach(function (s) { if (!s.classList.contains('ry-hero')) { s.classList.add('ry9-seam'); watch(s); } });

  /* 4. Review stars light up one by one; capacity figures and fact boxes pop in */
  document.querySelectorAll('.ry-reviews .ry-stars').forEach(function (st) {
    var icons = st.querySelectorAll('svg');
    icons.forEach(function (svg, i) {
      var w = document.createElement('i'); w.style.setProperty('--sd', (0.25 + i * 0.09).toFixed(2) + 's');
      svg.parentNode.insertBefore(w, svg); w.appendChild(svg);
    });
    st.classList.add('ry9-stars'); watch(st);
  });
  document.querySelectorAll('.ry .ry-cap > div, .ry .ry-facts > div, .rg .rg-stats > div').forEach(function (el, i) {
    if (el.classList.contains('ry-rv') || el.classList.contains('rg-in')) return;
    el.classList.add('ry9-pop'); el.style.setProperty('--d', ((i % 4) * 0.08) + 's'); watch(el);
  });

  /* 5. Fade-up for content that had no entrance yet (lists, forms, tickets, chef copy, route cards) */
  var upSel = '.ry .ry-enquiry__intro, .ry .ry-form-panel, .ry .ry-kitchen__copy, .ry .ry-menu-route, .ry .ry-tabs, .ry .ry-promo-card, .ry .ry-steps li, .ry .ry-details, .ry .ry-shop__cart, .ry .ry-hallpick, .ry .ry-event-tile';
  document.querySelectorAll(upSel).forEach(function (el) {
    if (el.classList.contains('ry-rv') || el.classList.contains('is-in') || el.hasAttribute('data-ry-reveal')) return;
    var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.matches(upSel); });
    el.classList.add('ry9-up'); el.style.setProperty('--d', (Math.min(sibs.indexOf(el), 5) * 0.08).toFixed(2) + 's'); watch(el);
  });

  /* 6. Images inside cards ease in from a slight zoom */
  document.querySelectorAll('.ry .ry-post .ry-zoom, .ry .ry-menu article, .ry .ry-shop__item .ry-zoom').forEach(function (el) {
    el.classList.add('ry9-img'); watch(el);
  });

  /* observer */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('is-in'); io.unobserve(x.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
    // safety net: never leave content hidden
    setTimeout(function () { targets.forEach(function (t) { if (t.getBoundingClientRect().top < window.innerHeight * 1.2) t.classList.add('is-in'); }); }, 2500);
    window.addEventListener('load', function () { setTimeout(function () { targets.forEach(function (t) { if (t.getBoundingClientRect().bottom < 0) t.classList.add('is-in'); }); }, 600); });
  } else { targets.forEach(function (t) { t.classList.add('is-in'); }); }

  /* 7. Gentle parallax on large section photos (desktop only) */
  if (fine && window.innerWidth > 900) {
    var par = Array.prototype.slice.call(document.querySelectorAll('.ry .ry-split__media img, .ry .ry-hall__media img, .ry .ry-features__media img, .ry .ry-kitchen__photo img, .ry .ry-wedding-collage img, .ry .ry-chef__collage img'));
    par.forEach(function (im) { im.classList.add('ry9-par'); });
    var ticking = false;
    function move() {
      var vh = window.innerHeight;
      par.forEach(function (im) {
        var r = im.parentNode.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var p = ((r.top + r.height / 2) - vh / 2) / vh; // -1..1
        im.style.transform = 'translate3d(0,' + (p * -26).toFixed(1) + 'px,0) scale(1.08)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; raf(move); } }, { passive: true });
    move();
  }

  /* 8. 3D tilt on cards (desktop, fine pointer) */
  if (fine) {
    document.querySelectorAll('.ry .ry-card, .ry .ry-promo-card, .ry .ry-reviews blockquote, .rg .rg-space, .ry .ry-event-tile').forEach(function (c) {
      c.classList.add('ry9-tilt');
      c.addEventListener('mousemove', function (e) {
        var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        c.classList.add('is-tilting');
        c.style.transform = 'perspective(900px) rotateX(' + (-y * 5).toFixed(2) + 'deg) rotateY(' + (x * 6).toFixed(2) + 'deg) translateY(-4px)';
      });
      c.addEventListener('mouseleave', function () { c.classList.remove('is-tilting'); c.style.transform = ''; });
    });
  }

  /* 9. Floating seals */
  document.querySelectorAll('.ry .ry-cta__seal, .ry-footer__logo img').forEach(function (s) { s.classList.add('ry9-float'); });
})();
