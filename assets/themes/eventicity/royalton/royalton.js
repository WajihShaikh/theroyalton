/* The Royalton – motion and interactions. Content is fully visible without JS. */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.add('ry-js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var raf = window.requestAnimationFrame || function (f) { return setTimeout(f, 16); };

  /* ---------- Header: transparent over the banner, solid after scrolling ---------- */
  var topbar = document.querySelector('.ry-topbar');
  function setTB() { doc.style.setProperty('--ry-tb', (topbar ? topbar.offsetHeight : 0) + 'px'); }
  setTB(); window.addEventListener('resize', setTB);
  var progress = document.createElement('div'); progress.className = 'ry-progress'; progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);
  var stuck = false, ticking = false;
  function onScroll() {
    var y = window.pageYOffset || doc.scrollTop;
    var s = y > 160;
    if (s !== stuck) { stuck = s; document.body.classList.toggle('ry-stuck', s); }
    var h = doc.scrollHeight - window.innerHeight;
    progress.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, y / h) : 0) + ')';
    if (!reduce && !doc.classList.contains('ry-motion-paused')) parallax(y);
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; raf(onScroll); } }, { passive: true });

  /* ---------- Hero: word-by-word title, slideshow, parallax ---------- */
  var heroes = document.querySelectorAll('.ry-hero');
  heroes.forEach(function (hero) {
    var h1 = hero.querySelector('.ry-h1');
    if (h1 && !h1.querySelector('.ry-w')) {
      var lines = h1.innerHTML.split(/<br\s*\/?>/i).map(function (l) { var d = document.createElement('div'); d.innerHTML = l; return d.textContent.replace(/\s+/g, ' ').trim(); }).filter(Boolean);
      var label = lines.join(' ');
      var k = 0;
      h1.setAttribute('aria-label', label);
      h1.innerHTML = lines.map(function (line) {
        return line.split(/\s+/).map(function (w) {
          return '<span class="ry-w" aria-hidden="true"><span style="--d:' + (0.15 + (k++) * 0.08).toFixed(2) + 's">' + w + '</span></span>';
        }).join(' ');
      }).join('<br>');
    }
    setTimeout(function () { hero.classList.add('is-in'); }, 60);
  });
  var media = Array.prototype.slice.call(document.querySelectorAll('.ry-hero:not([data-ry-carousel-root]) .ry-hero__media'));
  function parallax(y) {
    media.forEach(function (m) {
      var r = m.parentNode.getBoundingClientRect();
      if (r.bottom > 0 && window.innerWidth > 900) m.style.transform = 'translate3d(0,' + (Math.max(0, -r.top) * 0.12).toFixed(2) + 'px,0)';
    });
  }
  document.querySelectorAll('[data-ry-slides]').forEach(function (wrap) {
    var imgs = wrap.querySelectorAll('img');
    if (!imgs.length) return;
    imgs[0].classList.add('is-on');
    if (imgs.length < 2) return;
    var dots = document.createElement('div'); dots.className = 'ry-hero__dots'; dots.setAttribute('aria-hidden', 'true');
    imgs.forEach(function (_, k) { var d = document.createElement('span'); if (!k) d.className = 'is-on'; dots.appendChild(d); });
    wrap.parentNode.appendChild(dots);
    if (reduce) return;
    var i = 0;
    setInterval(function () {
      if (document.hidden || doc.classList.contains('ry-motion-paused') || wrap.parentNode.getBoundingClientRect().bottom < 0) return;
      imgs[i].classList.remove('is-on'); dots.children[i].className = '';
      i = (i + 1) % imgs.length;
      var next = imgs[i];
      if (next.dataset.src) { next.src = next.dataset.src; next.removeAttribute('data-src'); }
      next.classList.add('is-on');
      void dots.children[i].offsetWidth; dots.children[i].className = 'is-on';
    }, 7000);
    // preload the next slides once the page is idle
    setTimeout(function () { imgs.forEach(function (im) { if (im.dataset.src) { var p = new Image(); p.src = im.dataset.src; } }); }, 2500);
  });

  /* ---------- Scroll reveal ---------- */
  function mark(sel, cls, stagger) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (el.closest('.ry-hero') || el.classList.contains('ry-rv')) return;
      el.classList.add(cls || 'ry-rv');
      if (stagger) {
        var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.matches(sel); });
        el.style.setProperty('--d', (Math.min(sibs.indexOf(el), 6) * 0.09).toFixed(2) + 's');
      }
    });
  }
  mark('[data-ry-reveal="up"]', 'ry-rv', true);
  mark('[data-ry-reveal="image"]', 'ry-rv-img');
  // Royalton sections
  mark('.ry .ry-head>div, .ry .ry-split__body, .ry .ry-hall>div, .ry .ry-offer>div, .ry .ry-cta>*, .ry .ry-narrow');
  mark('.ry .ry-card, .ry .ry-hallnav>a, .ry .ry-carousel__track>a, .ry .ry-features li, .ry .ry-reviews blockquote, .ry .ry-menu article, .ry .ry-post, .ry .ry-facts>div, .ry .ry-steps li, .ry .ry-gallery figure, .ry .ry-details, .ry .ry-ticks li, .ry .ry-tags li, .ry .ry-chips li, .ry .ry-faq details', 'ry-rv', true);
  mark('.ry .ry-split__media, .ry .ry-hall__media, .ry .ry-features__media, .ry .ry-strip>figure, .ry .ry-flyer', 'ry-rv-img');
  mark('.ry .ry-faq, .ry .ry-cap, .ry .ry-price', 'ry-rv-line');
  mark('.ry .ry-tickets, .ry .ry-offer__aside, .ry .ry-chef__collage, .ry .ry-chef__body, .ry .ry-wwd__media', 'ry-rv');
  document.querySelectorAll('.ry .ry-strip>figure').forEach(function (f, i) { f.style.setProperty('--d', (i * 0.12) + 's'); });
  // The client's existing Elementor sections and the footer
  var ew = document.querySelectorAll('.post_content .elementor-widget:not(.elementor-invisible):not(.elementor-widget-spacer):not(.elementor-widget-divider) > .elementor-widget-container, .footer_wrap .elementor-column > .elementor-widget-wrap > .elementor-widget > .elementor-widget-container');
  ew.forEach(function (el) {
    if (el.closest('.swiper, .swiper-container, .ry, sr7-module, [data-settings*="_animation"], [data-settings*="motion_fx"], .sc_portfolio, .elementor-widget-trx_sc_portfolio')) return;
    var col = el.closest('.elementor-column, .e-con');
    var list = col ? Array.prototype.slice.call(col.querySelectorAll('.ry-ew')) : [];
    el.classList.add('ry-ew');
    el.style.setProperty('--d', (Math.min(list.length, 5) * 0.08).toFixed(2) + 's');
  });

  var targets = document.querySelectorAll('.ry-rv, .ry-rv-img, .ry-rv-line, .ry-ew, [data-ry-count]');
  if (!('IntersectionObserver' in window) || reduce) {
    targets.forEach(function (t) { t.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        if (en.target.hasAttribute('data-ry-count')) countUp(en.target);
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -24px 0px', threshold: 0 });
    targets.forEach(function (t) { io.observe(t); });
    // safety net: anything still hidden after load becomes visible when scrolled past
    window.addEventListener('load', function () {
      setTimeout(function () {
        targets.forEach(function (t) { if (t.getBoundingClientRect().bottom < 0) t.classList.add('is-in'); });
      }, 400);
    });
  }

  /* ---------- Number count-up ---------- */
  document.querySelectorAll('.ry .ry-facts strong, .ry .ry-cap dd, .ry .ry-price strong').forEach(function (el) {
    var m = el.textContent.trim().match(/^(\$?)(\d{1,4})$/);
    if (m) { el.setAttribute('data-ry-count', m[2]); el.setAttribute('data-ry-prefix', m[1]); if (io) io.observe(el); }
  });
  function countUp(el) {
    var end = parseInt(el.getAttribute('data-ry-count'), 10), pre = el.getAttribute('data-ry-prefix') || '';
    var suffix = el.getAttribute('data-ry-suffix') || '';
    if (reduce || !end) return;
    var t0 = null, dur = 1600;
    function step(t) {
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = pre + Math.round(end * e).toLocaleString('en-CA') + suffix;
      if (k < 1) raf(step);
    }
    raf(step);
  }

  /* ---------- Marquee: duplicate content for a seamless loop ---------- */
  document.querySelectorAll('.ry-marquee__track').forEach(function (t) {
    t.innerHTML += t.innerHTML;
    t.querySelectorAll('span').forEach(function (s, i) { if (i >= t.children.length / 2) s.setAttribute('aria-hidden', 'true'); });
  });

  /* ---------- Countdown to New Year's Eve ---------- */
  document.querySelectorAll('[data-ry-countdown]').forEach(function (box) {
    var end = new Date(box.getAttribute('data-ry-countdown')).getTime();
    var f = box.querySelectorAll('strong');
    function tick() {
      var d = Math.max(0, end - Date.now());
      if (!d) { box.innerHTML = '<div><strong>See you</strong><span>at The Royalton</span></div>'; return; }
      var v = [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
      v.forEach(function (n, i) { f[i].textContent = (i && n < 10 ? '0' : '') + n; });
      setTimeout(tick, 1000);
    }
    tick();
  });

  /* ---------- Hall carousel ---------- */
  document.querySelectorAll('[data-ry-carousel]').forEach(function (c) {
    var track = c.querySelector('.ry-carousel__track'), prev = c.querySelector('[data-dir="-1"]'), next = c.querySelector('[data-dir="1"]'), bar = c.querySelector('.ry-carousel__bar i');
    function upd() {
      var max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft < 4; next.disabled = track.scrollLeft > max - 4;
      var vis = track.clientWidth / track.scrollWidth;
      bar.style.width = (vis * 100) + '%';
      bar.style.transform = 'translateX(' + (max ? (track.scrollLeft / max) * ((1 - vis) / vis) * 100 : 0) + '%)';
    }
    [prev, next].forEach(function (b) {
      b.addEventListener('click', function () {
        var card = track.children[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 24);
        track.scrollBy({ left: card * parseInt(b.getAttribute('data-dir'), 10), behavior: reduce ? 'auto' : 'smooth' });
      });
    });
    track.addEventListener('scroll', function () { raf(upd); }, { passive: true });
    window.addEventListener('resize', upd); upd();
    // drag with the mouse
    var down = false, x0 = 0, s0 = 0, moved = false;
    track.addEventListener('mousedown', function (e) { down = true; moved = false; x0 = e.pageX; s0 = track.scrollLeft; track.classList.add('is-drag'); });
    window.addEventListener('mouseup', function () { if (down) { down = false; track.classList.remove('is-drag'); } });
    track.addEventListener('mousemove', function (e) { if (!down) return; var dx = e.pageX - x0; if (Math.abs(dx) > 4) moved = true; track.scrollLeft = s0 - dx; });
    track.addEventListener('click', function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);
    track.addEventListener('dragstart', function (e) { e.preventDefault(); });
  });

  /* ---------- Gallery filter + lightbox ---------- */
  document.querySelectorAll('[data-ry-filter]').forEach(function (bar) {
    var grid = document.getElementById(bar.getAttribute('data-ry-filter'));
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      bar.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var f = b.getAttribute('data-f'), k = 0;
      grid.querySelectorAll('figure').forEach(function (fig) {
        var show = f === 'all' || (fig.getAttribute('data-cat') || '').split(' ').indexOf(f) > -1;
        fig.hidden = !show;
        if (show && !reduce) { fig.classList.remove('is-in'); fig.style.setProperty('--d', (Math.min(k++, 8) * 0.05) + 's'); void fig.offsetWidth; fig.classList.add('is-in'); }
      });
    });
  });
  var dlg = document.querySelector('.ry-lightbox');
  if (dlg && dlg.showModal) {
    var big = dlg.querySelector('img'), cap = dlg.querySelector('p');
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ry-full]'); if (!b) return;
      big.src = b.getAttribute('data-ry-full'); big.alt = b.querySelector('img').alt;
      cap.textContent = b.querySelector('img').alt; dlg.showModal();
    });
    dlg.querySelector('button').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }

  /* ---------- Ticket selector ---------- */
  document.querySelectorAll('[data-ry-tickets]').forEach(function (box) {
    var totalEl = box.querySelector('[data-ry-total]'), go = box.querySelector('[data-ry-checkout]'), note = box.querySelector('[data-ry-note]');
    function money(n) { return '$' + n.toFixed(2); }
    function update() {
      var t = 0, q = 0;
      box.querySelectorAll('[data-price]').forEach(function (row) {
        var n = parseInt(row.querySelector('output').value, 10) || 0;
        t += n * parseFloat(row.getAttribute('data-price')); q += n;
      });
      totalEl.textContent = money(t);
      go.setAttribute('aria-disabled', q ? 'false' : 'true');
    }
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-step]'); if (!b) return;
      var out = b.parentNode.querySelector('output');
      var v = Math.max(0, Math.min(20, (parseInt(out.value, 10) || 0) + parseInt(b.getAttribute('data-step'), 10)));
      out.value = v; out.textContent = v; update();
      if (!reduce && out.animate) out.animate([{ transform: 'scale(1.35)' }, { transform: 'scale(1)' }], { duration: 260, easing: 'ease-out' });
    });
    go.addEventListener('click', function (e) {
      if (go.getAttribute('href') && go.getAttribute('href') !== '#' && go.getAttribute('aria-disabled') !== 'true') return;
      e.preventDefault();
      if (go.getAttribute('aria-disabled') === 'true') { note.textContent = 'Choose at least one ticket to continue.'; note.hidden = false; return; }
      note.textContent = 'Online checkout opens here once payments are connected. To reserve now, call 905-851-2325.';
      note.hidden = false;
    });
    update();
  });

  onScroll();
})();

/* ---------- v3: What we do, menu tabs, catering cart, back to top ---------- */
(function () {
  'use strict';
  // What we do: hovering or focusing an item swaps the photo
  document.querySelectorAll('[data-ry-wwd]').forEach(function (box) {
    var pics = box.querySelectorAll('.ry-wwd__pic'), links = box.querySelectorAll('.ry-wwd__list a');
    function show(i) {
      pics.forEach(function (p) { p.classList.toggle('is-on', p.getAttribute('data-i') === i); });
      links.forEach(function (l) { l.classList.toggle('is-on', l.getAttribute('data-i') === i); });
    }
    links.forEach(function (l) {
      l.addEventListener('mouseenter', function () { show(l.getAttribute('data-i')); });
      l.addEventListener('focus', function () { show(l.getAttribute('data-i')); });
    });
  });

  // Tabs (keyboard: arrow keys, Home, End)
  document.querySelectorAll('[data-ry-tabs]').forEach(function (t) {
    var tabs = Array.prototype.slice.call(t.querySelectorAll('[role=tab]'));
    function select(tab) {
      tabs.forEach(function (x) {
        var on = x === tab;
        x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
    }
    t.addEventListener('click', function (e) { var b = e.target.closest('[role=tab]'); if (b) select(b); });
    t.addEventListener('keydown', function (e) {
      var i = tabs.indexOf(document.activeElement); if (i < 0) return;
      var n = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (n === undefined) return;
      e.preventDefault(); var tab = tabs[(n + tabs.length) % tabs.length]; tab.focus(); select(tab);
    });
  });

  // Catering cart
  document.querySelectorAll('[data-ry-shop]').forEach(function (shop) {
    var cart = {}, lines = shop.querySelector('[data-ry-lines]'), empty = shop.querySelector('[data-ry-empty]'),
      total = shop.querySelector('[data-ry-carttotal]'), toCheckout = shop.querySelector('[data-ry-tocheckout]'),
      form = shop.querySelector('[data-ry-checkout-form]'), orderField = shop.querySelector('[data-ry-order]'),
      aside = shop.querySelector('.ry-shop__cart');
    function render() {
      var keys = Object.keys(cart), sum = 0, priced = true;
      lines.innerHTML = '';
      keys.forEach(function (k) {
        var it = cart[k], li = document.createElement('li');
        if (it.price) sum += it.price * it.qty; else priced = false;
        li.innerHTML = '<span><strong></strong></span><span>Qty ' + it.qty + '</span><button type="button" aria-label="Remove ' + it.name.replace(/"/g, '') + '"><svg class="ry-ico ry-ico--close" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg></button>';
        li.querySelector('strong').textContent = it.name;
        li.querySelector('button').addEventListener('click', function () { delete cart[k]; render(); });
        lines.appendChild(li);
      });
      empty.hidden = keys.length > 0;
      toCheckout.hidden = !keys.length || !form.hidden;
      if (!keys.length) form.hidden = true;
      total.hidden = !keys.length;
      total.textContent = priced && sum ? 'Estimated total: $' + sum.toFixed(2) + ' + tax' : 'Pricing is confirmed by our team before payment.';
      orderField.value = keys.map(function (k) { return cart[k].qty + ' x ' + cart[k].name; }).join('; ');
    }
    shop.addEventListener('click', function (e) {
      var step = e.target.closest('.ry-shop__item button[data-step]');
      if (step) {
        var out = step.parentNode.querySelector('output');
        var v = Math.max(1, Math.min(50, (parseInt(out.value, 10) || 1) + parseInt(step.getAttribute('data-step'), 10)));
        out.value = v; out.textContent = v; return;
      }
      var add = e.target.closest('[data-ry-add]');
      if (add) {
        var item = add.closest('.ry-shop__item'), id = item.getAttribute('data-id'), q = parseInt(item.querySelector('output').value, 10) || 1;
        var price = parseFloat(item.getAttribute('data-price')) || 0;
        cart[id] = cart[id] || { name: item.getAttribute('data-name'), qty: 0, price: price };
        cart[id].qty += q; render();
        add.innerHTML = 'Added <svg class="ry-ico ry-ico--check" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7"/></svg>'; setTimeout(function () { add.textContent = 'Add to order'; }, 1400);
        aside.classList.remove('ry-bump'); void aside.offsetWidth; aside.classList.add('ry-bump');
      }
    });
    toCheckout.addEventListener('click', function () { form.hidden = false; toCheckout.hidden = true; form.querySelector('input:not([type=hidden])').focus(); });
    render();
  });

  // Back to top
  document.querySelectorAll('.ry-totop').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); });
  });

  // Footer columns reveal with stagger
  if ('IntersectionObserver' in window && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    var els = document.querySelectorAll('.ry-footer__cta>*, .ry-footer__brand, .ry-footer__col, .ry-footer__bottom');
    els.forEach(function (el, i) { el.classList.add('ry-rv'); el.style.setProperty('--d', ((i % 6) * 0.08) + 's'); });
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('is-in'); io.unobserve(x.target); } }); }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  }
})();

/* v4: cancellable FAQ height transitions and user-controlled ambient motion. */
(function () {
  'use strict';
  var pref = window.matchMedia('(prefers-reduced-motion: reduce)');
  var root = document.documentElement;
  var hero = document.querySelector('.ry-hero');
  if (hero && !pref.matches && !hero.hasAttribute('data-ry-carousel-root')) {
    var button = document.createElement('button');
    button.type = 'button'; button.className = 'ry-motion-toggle';
    button.textContent = 'Pause motion'; button.setAttribute('aria-pressed', 'false');
    hero.appendChild(button);
    button.addEventListener('click', function () {
      var paused = root.classList.toggle('ry-motion-paused');
      button.textContent = paused ? 'Resume motion' : 'Pause motion';
      button.setAttribute('aria-pressed', String(paused));
    });
  }
  document.querySelectorAll('.ry-faq details').forEach(function (details) {
    var summary = details.querySelector('summary');
    if (!summary || !details.animate) return;
    var animation = null, opening = details.open;
    summary.addEventListener('click', function (event) {
      if (pref.matches) return;
      event.preventDefault();
      var from = details.getBoundingClientRect().height;
      opening = animation ? !opening : !details.open;
      if (animation) { animation.onfinish = null; animation.cancel(); }
      details.style.height = ''; details.style.overflow = 'hidden';
      details.open = true;
      var to = opening ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + 1;
      animation = details.animate([{height:from+'px'},{height:to+'px'}], {duration:360,easing:'cubic-bezier(.22,.61,.36,1)'});
      animation.onfinish = function () {
        details.open = opening; details.style.overflow = ''; details.style.height = ''; animation = null;
      };
    });
  });
  // Reveal focused content immediately, even before its scroll entrance.
  document.addEventListener('focusin', function (event) {
    var target = event.target.closest('.ry-rv,.ry-ew');
    if (target) target.classList.add('is-in');
  });
  function motionPreference() {
    root.classList.toggle('ry-motion-paused', pref.matches);
    if (pref.matches) {
      document.querySelectorAll('.ry-hero:not([data-ry-carousel-root]) .ry-hero__media').forEach(function (el) { el.style.transform = 'none'; });
      document.querySelectorAll('.ry-rv,.ry-ew,.ry-rv-img,.ry-rv-line').forEach(function (el) { el.classList.add('is-in'); });
    }
  }
  pref.addEventListener('change', motionPreference);
})();
