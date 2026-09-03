/* Voltoro Engineering Solutions - site scripts */
(function () {
  'use strict';

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- Services dropdown on touch / small screens ---- */
  var drops = document.querySelectorAll('.has-drop > a');
  Array.prototype.forEach.call(drops, function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        link.parentNode.classList.toggle('is-open');
      }
    });
  });

  /* Close the mobile menu when the viewport grows back to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900 && nav) {
      nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      Array.prototype.forEach.call(
        document.querySelectorAll('.has-drop.is-open'),
        function (el) { el.classList.remove('is-open'); }
      );
    }
  });

  /* ---- Footer year ---- */
  var year = document.querySelectorAll('[data-year]');
  Array.prototype.forEach.call(year, function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Enquiry form ----
     Static site: there is no backend, so the form hands the message to the
     visitor's mail client and shows a confirmation. Swap the handler for a
     POST to your endpoint (Formspree, a PHP mailer, etc.) when hosting. */
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var body = [
        'Name: ' + (data.get('name') || ''),
        'Company: ' + (data.get('company') || ''),
        'Email: ' + (data.get('email') || ''),
        'Phone: ' + (data.get('phone') || ''),
        'Service: ' + (data.get('service') || ''),
        '',
        (data.get('message') || '')
      ].join('\n');

      window.location.href =
        'mailto:info@vesengineering.co' +
        '?subject=' + encodeURIComponent('Project enquiry - ' + (data.get('name') || 'Website')) +
        '&body=' + encodeURIComponent(body);

      var msg = document.getElementById('form-msg');
      if (msg) msg.classList.add('is-visible');
      form.reset();
    });
  }
})();
