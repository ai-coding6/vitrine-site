# FIX 6 — Add Google Analytics 4 + cookie consent banner

Integrate GA4 tracking with a privacy-respecting cookie consent banner. **Measurement ID:** `G-P50LSGCPE5`. The site is already live at https://vitrineasia.com.

---

## STEP 1 — Investigate the site's templating structure (no edits yet)

Before any changes, understand how to add code to every page:

1. **Find every HTML file** that needs the script:
   ```powershell
   Get-ChildItem -Recurse -File -Filter *.html | Where-Object { $_.FullName -notlike "*node_modules*" }
   ```
   List them with paths.

2. **Check if there's a build step** — open `package.json` and look at scripts. If there's a templating system (Eleventy, Astro, Vite + EJS, Handlebars, Pug, etc.), the GA4 snippet should go in the shared head template, not in every HTML file individually. Check for files like:
   - `_includes/head.html` or `_layouts/default.html` (Jekyll/Eleventy)
   - `src/layouts/Layout.astro` (Astro)
   - `templates/base.html` (custom)
   - `partials/head.html` (general partials)

3. **If there's NO shared head template** (which is likely given the masthead is inline-duplicated across 16 files), the script goes directly in every HTML file's `<head>` — same approach as how the masthead is currently maintained.

**Show me what you found before doing anything else:**
- List of HTML files affected
- Whether there's a shared head template or not
- If there is, the file path; if not, the count of files needing the inline edit

**STOP.** Wait for my OK on the placement strategy before continuing.

---

## STEP 2 — Add GA4 + cookie banner code

Once placement is decided, add the following code block to the `<head>` of every page (or to the shared head template, whichever applies).

The block has three parts: a CSS style, the cookie banner HTML, and the consent + GA4 logic.

```html
<!-- Vitrine — Analytics & cookie consent -->
<style>
  #vitrine-cookie-banner {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: #F5EFE0;
    border-top: 2px solid #B08A3A;
    padding: 0.9rem 1.4rem;
    display: none;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    box-shadow: 0 -4px 16px rgba(26, 26, 26, 0.06);
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #vitrine-cookie-banner.show { display: flex; }
  #vitrine-cookie-banner .vcb-text {
    flex: 1 1 320px;
    color: #2A2A2A;
    font-size: 0.78rem;
    line-height: 1.5;
    margin: 0;
  }
  #vitrine-cookie-banner .vcb-text em {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 0.92rem;
    font-style: italic;
    color: #0F3D2E;
    margin-right: 0.3rem;
  }
  #vitrine-cookie-banner .vcb-buttons {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }
  #vitrine-cookie-banner button {
    font-family: inherit;
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0.6rem 1.1rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s;
  }
  #vitrine-cookie-banner .vcb-accept {
    background: #0F3D2E;
    color: #F5EFE0;
    border-color: #0F3D2E;
  }
  #vitrine-cookie-banner .vcb-accept:hover {
    background: #082619;
  }
  #vitrine-cookie-banner .vcb-reject {
    background: transparent;
    color: #2A2A2A;
    border-color: #2A2A2A;
  }
  #vitrine-cookie-banner .vcb-reject:hover {
    background: #2A2A2A;
    color: #F5EFE0;
  }
  @media (max-width: 600px) {
    #vitrine-cookie-banner {
      padding: 0.8rem 1rem;
      flex-direction: column;
      align-items: stretch;
    }
    #vitrine-cookie-banner .vcb-buttons {
      justify-content: flex-end;
    }
  }
</style>

<div id="vitrine-cookie-banner" role="dialog" aria-label="Cookie consent">
  <p class="vcb-text">
    <em>Vitrine uses cookies for analytics</em> to understand how the publication is read. No advertising, no profile-building.
  </p>
  <div class="vcb-buttons">
    <button class="vcb-reject" type="button">Reject</button>
    <button class="vcb-accept" type="button">Accept</button>
  </div>
</div>

<script>
(function() {
  var STORAGE_KEY = 'vitrine-cookie-consent';
  var GA_ID = 'G-P50LSGCPE5';

  function loadGA4() {
    if (window.gtagLoaded) return;
    window.gtagLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function showBanner() {
    var banner = document.getElementById('vitrine-cookie-banner');
    if (banner) banner.classList.add('show');
  }
  function hideBanner() {
    var banner = document.getElementById('vitrine-cookie-banner');
    if (banner) banner.classList.remove('show');
  }

  function initConsent() {
    var consent;
    try { consent = localStorage.getItem(STORAGE_KEY); } catch (e) {}

    if (consent === 'accepted') {
      loadGA4();
      return;
    }
    if (consent === 'rejected') {
      return;
    }

    showBanner();

    var acceptBtn = document.querySelector('#vitrine-cookie-banner .vcb-accept');
    var rejectBtn = document.querySelector('#vitrine-cookie-banner .vcb-reject');

    if (acceptBtn) acceptBtn.addEventListener('click', function() {
      try { localStorage.setItem(STORAGE_KEY, 'accepted'); } catch (e) {}
      hideBanner();
      loadGA4();
    });
    if (rejectBtn) rejectBtn.addEventListener('click', function() {
      try { localStorage.setItem(STORAGE_KEY, 'rejected'); } catch (e) {}
      hideBanner();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConsent);
  } else {
    initConsent();
  }
})();
</script>
<!-- End Vitrine analytics & consent -->
```

**Placement notes:**
- Insert at the END of `<head>` (just before `</head>`) so it doesn't block earlier critical resources from loading
- The `<style>` block uses Vitrine's existing brand colors (cream, brass, emerald, charcoal) — no new CSS variables needed
- The Inter and Cormorant Garamond fonts are already loaded by the rest of the site, so the banner inherits them
- The script is self-contained — no external dependencies, no jQuery, no consent libraries

**Show me before saving:**
- The exact file(s) you'll edit
- A diff for one file showing where the block is inserted in `<head>`

**STOP.** Wait for my OK before propagating to other files.

---

## STEP 3 — Propagate to all HTML files

Once I confirm the first file looks right, replicate the same insertion across every HTML file you listed in STEP 1.

If there's a shared head template, this is one edit.
If not, it's the same paste in every file.

Show me a count after — "added to N files" — and run a verification:

```powershell
Get-ChildItem -Recurse -File -Filter *.html | Where-Object { $_.FullName -notlike "*node_modules*" } | Select-String "G-P50LSGCPE5" | Group-Object -Property Path | Select-Object Name, Count
```

Should show one match per HTML file.

**STOP.** Wait for my OK before next step.

---

## STEP 4 — Local test

Restart `npm run dev` if needed.

In your local browser:

1. **Open `http://localhost:8080/` in incognito** (clean state)
2. **Verify the cookie banner appears** at the bottom of the page after a moment
3. **Open DevTools (F12) → Network tab → filter for "google"**
4. **Without clicking anything in the banner:** confirm NO requests to `googletagmanager.com` or `google-analytics.com` (script hasn't loaded — correct)
5. **Click "Reject"**: banner disappears, no GA4 requests appear in Network. Reload the page. Banner should NOT reappear (localStorage saved the rejection).
6. **Open a new incognito window** and navigate to the site again. Click "Accept" this time: banner disappears, you should now see requests to `googletagmanager.com` and `google-analytics.com`. Reload — no banner reappears.

This proves:
- Banner shows only on first visit
- Persistence works
- Reject genuinely blocks GA4
- Accept genuinely loads GA4

**STOP.** Tell me what you see at each step.

---

## STEP 5 — Verify in Google Analytics dashboard

Once accept-flow is confirmed locally:

1. Open `https://analytics.google.com`
2. Navigate to your **Vitrine** property
3. Look at the **Reports → Realtime** view
4. **In a separate browser**, visit the live site at `https://vitrineasia.com` (after the next deploy has gone live), accept the cookie banner, and reload the report URL once or twice
5. Within ~30 seconds, you should see at least 1 active user appear in Realtime

If Realtime shows traffic from your test, GA4 is working end-to-end.

**STOP.** Confirm before commit.

---

## STEP 6 — Commit and push

Propose commit message:

> Add Google Analytics 4 with cookie consent banner

The commit will touch many files (one edit per HTML file, or one edit if there's a template). Show me the file count, then I'll OK the commit through GitHub Desktop.

**Don't run git commands yourself** — I'm using GitHub Desktop to commit/push.

---

## Rules

- Don't change the GA4 measurement ID — it's `G-P50LSGCPE5`
- Don't load any external consent library (Klaro, OneTrust, CookieBot) — the inline implementation above is enough
- Don't add any tracking beyond standard GA4 page views in this commit (no event tracking, no scroll tracking) — those are Week 2 if wanted
- The banner must NOT appear if localStorage has either 'accepted' or 'rejected' — test this
- GA4 must NOT load if user clicks Reject — test this
- Show me a diff at every STOP marker

---

## Notes for Week 2 (don't act on these now)

- Add event tracking for PDF downloads (helpful conversion data)
- Add scroll-depth tracking for the inaugural report (engagement signal)
- Consider linking GA4 to Google Search Console for SEO insights
- If site grows, consider extracting the cookie banner into a shared snippet
