/* Static form handler for The Royalton.
   Set FORM_ENDPOINT to any service that accepts a POST (Formspree, Getform, Basin, your own PHP mailer…)
   e.g.  var FORM_ENDPOINT = "https://formspree.io/f/xxxxxxx";
   On Netlify you can instead leave it empty: forms carry data-netlify="true" and work automatically. */
var FORM_ENDPOINT = "";
(function () {
  function note(form, msg, ok) {
    var n = form.querySelector('.ry-form-note');
    if (!n) { n = document.createElement('p'); n.className = 'ry-form-note'; n.setAttribute('role', 'status'); form.appendChild(n); }
    n.textContent = msg; n.style.cssText = 'margin-top:14px;padding:12px 14px;font-size:15px;background:' + (ok ? '#E7F2E7' : '#F4ECE4') + ';color:#221F1E';
  }
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form.matches('form.wpcf7-form, form.ry-form')) return;
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var consent = form.querySelector('input[type=checkbox][name*=acceptance], input[type=checkbox][required]');
    if (consent && !consent.checked) { note(form, 'Please tick the consent box to send your request.'); return; }
    var isNetlify = form.hasAttribute('data-netlify') && location.hostname.indexOf('netlify') > -1;
    var url = FORM_ENDPOINT || (isNetlify ? '/' : '');
    if (!url) { note(form, 'Online forms are not connected yet. Please call 905-851-2325 or email info@theroyalton.ca.'); return; }
    var data = new FormData(form);
    if (isNetlify && !FORM_ENDPOINT) data.append('form-name', form.getAttribute('name') || 'contact');
    var btn = form.querySelector('[type=submit]'); if (btn) btn.disabled = true;
    fetch(url, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.reset(); note(form, 'Thank you. Your request was sent and our team will be in touch shortly.', true);
      })
      .catch(function () { note(form, 'Your request could not be sent. Please call 905-851-2325 or email info@theroyalton.ca.'); })
      .then(function () { if (btn) btn.disabled = false; });
  }, true);
})();
