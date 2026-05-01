// Vitrine subscribe form
// Posts to https://vitrineasia.substack.com/api/v1/free
// Uses no-cors mode if direct CORS fails (opaque response = success for our purposes)
// Fallback path: replace with Substack iframe embed at https://vitrineasia.substack.com/embed if posting fails entirely

(function () {
  'use strict';

  var ENDPOINT = 'https://vitrineasia.substack.com/api/v1/free';
  var FORM_SELECTOR = 'form.form-row, form.gate__form, form.briefing-cta__form';
  var LOG = '[vitrine-subscribe]';

  function findSibling(form, selectors) {
    // Look for a success/error element in the form's parent or grandparent block.
    var roots = [form.parentElement, form.parentElement && form.parentElement.parentElement];
    for (var r = 0; r < roots.length; r++) {
      var root = roots[r];
      if (!root) continue;
      for (var s = 0; s < selectors.length; s++) {
        var el = root.querySelector(selectors[s]);
        if (el) return el;
      }
    }
    return null;
  }

  function wireForm(form) {
    if (form.dataset.subscribeWired === 'true') return;
    form.dataset.subscribeWired = 'true';

    var btn = form.querySelector('button[type="submit"]');
    var emailInput = form.querySelector('input[type="email"]');
    if (!btn || !emailInput) {
      console.warn(LOG, 'form missing button or email input — skipping', form);
      return;
    }

    var btnOriginal = btn.innerHTML;
    var success = findSibling(form, ['.gate__success', '.form-success', '[data-subscribe-success]']);
    var error = findSibling(form, ['.gate__error', '.form-error', '[data-subscribe-error]']);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log(LOG, 'submit clicked on', form);

      if (!emailInput.value || !emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
      }

      if (error) error.hidden = true;

      btn.disabled = true;
      btn.textContent = 'Sending…';

      var data = new URLSearchParams();
      data.append('email', emailInput.value);
      var roleInput = form.querySelector('select[name="role"]');
      if (roleInput && roleInput.value) {
        data.append('role', roleInput.value);
      }

      console.log(LOG, 'form data:', data.toString());
      console.log(LOG, 'POST to', ENDPOINT);

      // Option A — cors mode. If Substack returns proper CORS headers we get a real status code.
      fetch(ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString()
      })
        .then(function (res) {
          console.log(LOG, 'cors response — status:', res.status, 'ok:', res.ok, 'type:', res.type);
          if (res.ok) {
            showSuccess('cors-' + res.status);
          } else {
            console.warn(LOG, 'non-2xx in cors mode (' + res.status + ') — surfacing error');
            showError(new Error('HTTP ' + res.status));
          }
        })
        .catch(function (err) {
          console.warn(LOG, 'cors mode threw — likely CORS-blocked. Falling back to no-cors. Error:', err);
          // Option B — no-cors. Response is opaque; we treat any non-network-failure as success.
          fetch(ENDPOINT, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: data.toString()
          })
            .then(function (res) {
              console.log(LOG, 'no-cors response — type:', res.type, '(opaque = treated as success)');
              showSuccess('no-cors-opaque');
            })
            .catch(function (err2) {
              console.error(LOG, 'no-cors mode also threw — surfacing error to user:', err2);
              showError(err2);
            });
        });

      function showSuccess(via) {
        console.log(LOG, 'showing success state (via ' + via + ')');

        // Restore the button BEFORE hiding the form. Guarantees a clean state if anything ever re-reveals the form
        // (e.g. user navigates back, dev tools un-hides it) — they get a fresh "Subscribe" button, not a frozen "Sending…".
        btn.disabled = false;
        btn.innerHTML = btnOriginal;

        // Hide the form entirely. The form's class CSS sets `display: flex`, which beats the user-agent
        // `[hidden] { display: none }` rule — so the `hidden` attribute alone is not enough. Set both:
        // inline style for visual hiding (wins specificity), and the attribute for the accessibility tree.
        form.hidden = true;
        form.style.display = 'none';

        if (success) {
          success.hidden = false;
          if (typeof success.scrollIntoView === 'function') {
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }

      function showError(err) {
        console.log(LOG, 'showing error state:', err && err.message);
        // Form stays visible so the user can retry. Restore the button to its original label and re-enable it.
        btn.disabled = false;
        btn.innerHTML = btnOriginal;
        if (error) error.hidden = false;
      }
    });
  }

  function init() {
    var forms = document.querySelectorAll(FORM_SELECTOR);
    console.log(LOG, 'init — found ' + forms.length + ' form(s)');
    forms.forEach(wireForm);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
