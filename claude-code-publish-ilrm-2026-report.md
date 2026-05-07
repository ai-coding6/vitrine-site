# FIX 9 — Publish the flagship: The Indonesian Luxury Retail Map 2026

The inaugural annual flagship report (Volume One) is finalised, audited, and ready to land at `/reports/the-indonesian-luxury-retail-map-2026/`. The report is delivered as a complete, self-contained HTML document — its own cover, executive summary, contents page, sticky chapter nav, eleven chapters, back matter, and colophon. It is not gated. It is free to read.

This push **replaces the existing placeholder** at that URL completely. It adds cover artwork to the hero, registers the report in the sitemap, updates the listing page and homepage, adds an Open Graph image for social sharing, and adds a print stylesheet so the report renders cleanly when readers print or save-as-PDF from their browser.

---

## Files to save before launching Claude Code

Before launching Claude Code, place these files in the `vitrine-site` folder:

1. **`vitrine-web-edition-revised.html`** → save in `vitrine-site/` root (~272 KB, 3,463 lines)
2. **`claude-code-publish-ilrm-2026-report.md`** → this prompt → save in `vitrine-site/` root
3. **`cover.jpg`** → save at `vitrine-site/assets/reports/ilrm-2026/cover.jpg` (1920×1080, under 350 KB)
4. **`og-ilrm-2026.png`** → save at `vitrine-site/assets/og/og-ilrm-2026.png` (1200×630 PNG, under 250 KB)

If the `assets/reports/ilrm-2026/` and `assets/og/` directories don't exist, create them first. The cover and OG images must be in place before running this push so Claude Code can verify they exist and integrate them.

---

## How to launch Claude Code (PowerShell)

```powershell
cd "D:\Information\Information\abdullah_asraf\My Documents\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once Claude Code launches, paste:

```
Read claude-code-publish-ilrm-2026-report.md and proceed.
```

---

## Editorial register reminder

This is the **flagship** publication — the inaugural Volume One. Treat it accordingly:

- The report is the deliverable. Site infrastructure exists to deliver it cleanly to readers.
- No PDF download gate. No email capture form on the report page itself. The colophon already invites readers to share and quote with attribution.
- The report has its own typography (Cormorant Garamond + Source Serif 4 + Inter via Google Fonts). It will not match the site's Fraunces + Manrope. **This is intentional and correct.** Long-form trade publications routinely break site type for the report itself — Stratechery, BoF reports, Stripe Press all do this. Don't try to convert.
- The report has its own sticky chapter nav, reading-progress bar, and inline CSS. It is fully self-contained. Don't try to merge its CSS into `vitrine.css`.
- Email capture stays where it already lives — homepage, briefing-subscribe page, footer. Not on the report page.

---

## STEP 1 — Survey existing structure

Before writing anything, view these files so you understand what exists today:

1. `/reports/index.html` — the Reports listing page. Identify the featured-report card and confirm whether the ILRM 2026 placeholder is already there.
2. `/reports/the-indonesian-luxury-retail-map-2026/index.html` — the existing detail page if it exists. Note its current contents (likely placeholder content with a download form from the earlier launch spec).
3. `/index.html` — the site homepage. Identify the featured-report block.
4. `/sitemap.xml` — confirm the existing structure for adding new entries.
5. `/vitrine.css` — read only to confirm we are NOT touching it.
6. Confirm the existence of `/assets/reports/ilrm-2026/cover.jpg` and `/assets/og/og-ilrm-2026.png` — these must be in place before proceeding.

If either image is missing, **STOP and tell me** — the user needs to place them before the push proceeds.

If a placeholder cover or OG image exists at those paths from earlier launch work, we are overwriting them with the new artwork. That's expected.

Report back what you found. **STOP.** Wait for my OK before proceeding.

---

## STEP 2 — Place the report at the report URL with full integration

The report HTML lives at `vitrine-site/vitrine-web-edition-revised.html`. Move it into the right location, then make four additions inside the `<head>`/`<style>` blocks: meta layer, cover artwork CSS, OG image meta tags (already in the meta layer), and print stylesheet.

### 2a — Replace existing detail-page content entirely

If `/reports/the-indonesian-luxury-retail-map-2026/index.html` exists with placeholder content (cover, standfirst, ToC, methodology, download form, email capture, anything from the earlier launch spec): **delete it completely and replace with the new HTML.** Do not preserve any of the placeholder content. The new HTML is the complete report — cover, exec summary, contents, all eleven chapters, back matter, colophon — and it carries everything readers need.

If the directory doesn't exist, create it.

### 2b — Add the meta layer inside `<head>`

Find the existing `<meta name="description"...>` line in the report's `<head>`. Immediately after it, add this block:

```html

<!-- Canonical -->
<link rel="canonical" href="https://vitrineasia.com/reports/the-indonesian-luxury-retail-map-2026">

<!-- Open Graph -->
<meta property="og:type" content="article">
<meta property="og:title" content="The Indonesian Luxury Retail Map 2026 — Vitrine">
<meta property="og:description" content="The inaugural annual flagship publication of Vitrine. A market in five charts. The Big Six malls and the listed-property landscape behind them. The 2025 luxury VAT regime, read against its actual scope.">
<meta property="og:url" content="https://vitrineasia.com/reports/the-indonesian-luxury-retail-map-2026">
<meta property="og:site_name" content="Vitrine">
<meta property="og:image" content="https://vitrineasia.com/assets/og/og-ilrm-2026.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="The Indonesian Luxury Retail Map 2026 — Vitrine. Inaugural annual flagship report, Volume One, May 2026.">
<meta property="article:published_time" content="2026-05-07">
<meta property="article:section" content="Reports">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="The Indonesian Luxury Retail Map 2026 — Vitrine">
<meta name="twitter:description" content="The inaugural annual flagship publication of Vitrine. A market in five charts. The Big Six malls and the property landscape behind them.">
<meta name="twitter:image" content="https://vitrineasia.com/assets/og/og-ilrm-2026.png">
<meta name="twitter:image:alt" content="The Indonesian Luxury Retail Map 2026 — Vitrine">

<!-- JSON-LD Article schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Report",
  "headline": "The Indonesian Luxury Retail Map 2026",
  "alternativeHeadline": "Volume One — Inaugural Annual Flagship",
  "datePublished": "2026-05-07",
  "publisher": {
    "@type": "Organization",
    "name": "Vitrine",
    "url": "https://vitrineasia.com"
  },
  "url": "https://vitrineasia.com/reports/the-indonesian-luxury-retail-map-2026",
  "image": "https://vitrineasia.com/assets/og/og-ilrm-2026.png",
  "description": "The inaugural annual flagship publication of Vitrine. A market in five charts. The Big Six malls and the listed-property landscape behind them. The 2025 luxury VAT regime, read against its actual scope.",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

```

### 2c — Modify `.hero` CSS to layer cover artwork under the typography

Find the existing `.hero` rule inside the report's `<style>` block. It currently looks like this:

```css
.hero{
  position:relative;
  background:
    radial-gradient(circle at 85% 15%, rgba(176,138,58,.15) 0%, transparent 45%),
    radial-gradient(circle at 15% 85%, rgba(176,138,58,.10) 0%, transparent 50%),
    linear-gradient(135deg, var(--emerald-deep) 0%, var(--emerald) 70%);
  color:var(--cream);
  padding:90px 56px 60px;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  position:relative;
  overflow:hidden;
}
```

Replace the `background:` declaration with this — it adds the cover image as the bottom layer, with a darker emerald gradient over it for typography legibility. The brass radial accents stay on top:

```css
.hero{
  position:relative;
  background:
    radial-gradient(circle at 85% 15%, rgba(176,138,58,.10) 0%, transparent 45%),
    radial-gradient(circle at 15% 85%, rgba(176,138,58,.08) 0%, transparent 50%),
    linear-gradient(135deg, rgba(10,45,34,.78) 0%, rgba(15,61,46,.88) 70%),
    url('/assets/reports/ilrm-2026/cover.jpg') center/cover no-repeat;
  color:var(--cream);
  padding:90px 56px 60px;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  position:relative;
  overflow:hidden;
}
```

Layer order, bottom to top: cover image → emerald gradient overlay (78–88% opacity, ensures cream typography stays legible regardless of image content) → faint brass radial accents.

If the cover image fails to load, the emerald gradient still renders and the hero degrades gracefully.

### 2d — Add print stylesheet at the end of the existing `<style>` block

Find the closing `</style>` tag in the report's `<head>`. Immediately before it, add this `@media print` block:

```css
/* ============== PRINT STYLESHEET ============== */
@media print {
  /* Hide interactive elements */
  .progress, .subnav { display: none !important; }

  /* Paper presentation */
  body {
    background: white;
    color: var(--ink);
    font-size: 11pt;
    line-height: 1.5;
  }

  /* Hero compresses to a clean cover page, breaks before contents */
  .hero {
    min-height: auto;
    padding: 60px 50px 50px;
    background: var(--emerald-deep) !important;
    color: var(--cream) !important;
    page-break-after: always;
  }
  .hero__title { font-size: 42pt; line-height: 1.05; }
  .hero__standfirst { font-size: 13pt; }

  /* Each chapter and part starts on a new page */
  .chapter, .part { page-break-before: always; padding: 40px 0 20px; }
  .chapter:first-of-type { page-break-before: auto; }
  .page { padding: 0 40px; }

  /* Don't break figures, pull quotes, or grids across pages */
  .figure, .pullquote, .kpi-grid, .opmap, .matrix, .digital, .pmksplit {
    page-break-inside: avoid;
  }

  /* Strip link URLs in print, keep readable */
  a { color: var(--ink); text-decoration: none; }
  a[href]:after { content: none !important; }

  /* Tighten chapter heads */
  .chapter__head { padding-bottom: 20px; }
  .chapter__title { font-size: 28pt; }
}

@page {
  margin: 18mm 16mm;
}
```

### 2e — Clean up

Once the meta layer, cover CSS, and print stylesheet are added, **delete the source file `vitrine-web-edition-revised.html` from the `vitrine-site` root** — it served its purpose and shouldn't sit at root.

Show me the diff (or a focused summary of the four addition blocks if the file is too large for full diff) and the final file size. **STOP.**

---

## STEP 3 — Update `/reports/index.html` (the listing page)

The Reports listing page already has a featured-report card structured for the ILRM 2026 (per the original launch spec). **Replace the placeholder content** in that card with the live publication details:

**Featured-report card:**
- Eyebrow: `THE INAUGURAL REPORT · MAY 2026`
- Heading: `The Indonesian Luxury Retail Map 2026`
- Standfirst: `The first published reading of Indonesia's luxury retail market — operator architecture, property landscape, categories, dynamics, and outlook. Volume One.`
- Summary paragraph (use as-is):

> *Vitrine's inaugural annual report. The Indonesian luxury retail market mapped across seven parts and eleven chapters: the consumer (wealth, geography, offshore split), the property (Big Six malls and the broader listed-property landscape), the operator architecture (direct deployment and the Indonesian intermediated tier), the goods (categories, dominance, what's growing), the dynamics (digital, the gap map), the recent past (2024–26 in review), and the outlook for 2026–27. Approximately 22,000 words. Free to read.*

- CTA button: `Read the report →` linking to `/reports/the-indonesian-luxury-retail-map-2026/`
- Metadata row beneath the CTA: `Long-form web edition · Free · Published May 2026 · Data cutoff 28 April 2026`

**If the existing card has any of these — delete them entirely:**
- "Download PDF" CTA / button
- Inline email-capture form
- "Subscribe to read" gate
- Any reference to a paywall or registration

The report is HTML, not PDF, and it isn't gated.

**Card thumbnail image (if the listing card displays a thumbnail):** point it at `/assets/reports/ilrm-2026/cover.jpg`.

**On the editorial calendar block** (forward-look section beneath the featured card): leave the three forward-look entries as-is. No changes.

Show me the diff. **STOP.**

---

## STEP 4 — Update homepage `/index.html` featured-report block

Update the homepage featured-report block:
- CTA links to `/reports/the-indonesian-luxury-retail-map-2026/`
- Format label reads `Long-form web edition` (not "PDF")
- Thumbnail (if displayed) points at `/assets/reports/ilrm-2026/cover.jpg`
- Headline and standfirst match the listing page

Don't change the surrounding homepage architecture — Movements block, Insights block, briefing signup block all stay as they are. Only the report CTA and image references update.

Show me the diff. **STOP.**

---

## STEP 5 — Update `/sitemap.xml`

Add a new entry. The flagship gets priority 0.9 (highest-value publication on the site):

```xml
<url>
  <loc>https://vitrineasia.com/reports/the-indonesian-luxury-retail-map-2026</loc>
  <lastmod>2026-05-07</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

If a placeholder entry for the same URL already exists, update its `<lastmod>` to `2026-05-07` and ensure `<priority>0.9</priority>`. Match the surrounding indentation pattern.

Show me the diff. **STOP.**

---

## STEP 6 — Local verification

After all files are saved, restart `npm run dev` if needed and walk through these checks.

**The report itself — `http://localhost:8080/reports/the-indonesian-luxury-retail-map-2026/`**
1. Page loads. Cover hero renders with the new artwork visible under the emerald-gradient scrim. Cormorant title, "INAUGURAL ANNUAL · VOLUME ONE" masthead, and "Published / Edition / Format / Data Cutoff" footer all clearly legible against the image-plus-scrim background.
2. Sticky chapter nav appears below cover and stays sticky on scroll.
3. Click each sticky-nav link — anchor jumps work for all 13 (Summary, Contents, Ch01–Ch11).
4. Reading-progress bar advances as you scroll.
5. Executive Summary renders with 5 facts numbered 01–05.
6. Contents page renders as compact two-column grid.
7. Each chapter loads cleanly — drop cap, head-eyebrow markers, pull quotes, charts.
8. All charts render: Macro Frame KPIs, Real Sales Index timeseries, UHNWI Growth bars (Indonesia, Saudi, Poland, Vietnam — four bars), Bain & Altagamma 6-bar grid, Big Six map, MAP FY2024 chart, six-gap map, PMK 131 split, category map, digital architecture.
9. Pull quotes render with brass-soft background and Cormorant italic.
10. Back Matter renders with seven source tiers.
11. Colophon renders with VITRINE wordmark and citation block.

**Mobile responsive — narrow viewport to ~380px**
12. Cover scales cleanly, image still fills hero, scrim keeps title legible. Sticky nav scrollable horizontally. Two-column Contents collapses. Charts remain readable. No horizontal overflow.

**Print preview — `Ctrl/Cmd + P` from the report page**
13. Sticky nav and progress bar are hidden. Hero compresses to a cover page (emerald background, cream typography). Contents and each chapter start on a new page. Figures don't break across pages. Total page count is reasonable (60–90 pages depending on browser).

**Cover image direct check — `http://localhost:8080/assets/reports/ilrm-2026/cover.jpg`**
14. Image loads. File size matches what was saved (under 350 KB).

**OG image direct check — `http://localhost:8080/assets/og/og-ilrm-2026.png`**
15. Image loads. 1200×630 PNG. Title and Vitrine wordmark visible.

**Listing page — `http://localhost:8080/reports/`**
16. Featured-report card displays new copy. CTA reads "Read the report →" and links to detail page. Format label reads "Long-form web edition." Thumbnail (if displayed) shows cover artwork. No "Download PDF" or email-capture form remaining.
17. Click CTA — lands on the report.

**Homepage — `http://localhost:8080/`**
18. Featured-report block displays with updated CTA, format label, and thumbnail.
19. Click CTA — lands on the report.

**Sitemap — `http://localhost:8080/sitemap.xml`**
20. Valid XML. New entry for `/reports/the-indonesian-luxury-retail-map-2026` is present with lastmod 2026-05-07 and priority 0.9.

**Meta and SEO — view source on the report detail page**
21. `<title>` reads "The Indonesian Luxury Retail Map 2026 — Vitrine".
22. `<link rel="canonical">` points to absolute URL.
23. Open Graph tags present, including `og:image` pointing to the OG PNG.
24. Twitter card tags present, including `twitter:image`.
25. JSON-LD `<script type="application/ld+json">` parses as valid JSON.

**Optional but recommended — paste the production URL into a social card validator** *after deploy*
- LinkedIn Post Inspector (linkedin.com/post-inspector)
- Twitter/X Card Validator (cards-dev.twitter.com/validator)

Confirms the OG image renders correctly when the URL is shared.

**STOP** for my final OK before commit.

---

## STEP 7 — Commit message proposal

When I OK the verification, propose this commit message for GitHub Desktop:

> Publish flagship: The Indonesian Luxury Retail Map 2026 (Volume One)
>
> - Replaces placeholder at /reports/the-indonesian-luxury-retail-map-2026/
> - Adds cover artwork to report hero, OG image for social sharing
> - Adds print stylesheet for clean print/save-as-PDF rendering
> - Updates listing page and homepage featured-report blocks
> - Sitemap entry with priority 0.9

Wait for my explicit OK before I commit and push via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules

- The report HTML is complete and self-contained. Don't merge its CSS into `vitrine.css`. Don't convert its typography. Don't restructure its sticky nav. Don't relocate its charts.
- The only additions to the report file in Step 2 are: meta layer, `.hero` cover-image CSS, print stylesheet. Nothing else inside `<head>` or `<body>` changes.
- Don't add a download CTA, an email-capture gate, or a "share" widget on the report page itself. The colophon's existing language ("free to download, share, and quote with attribution") is the only sharing language needed.
- Don't change the existing Insights or Movements sections.
- Show me the diff at every STOP marker.
- Don't push without my explicit OK.

---

## Deferred to a later push

Two items are intentionally not in this push because they need separate decisions and tooling:

**PDF download.** The print stylesheet added in Step 2d means readers can already save the report as PDF via their browser's "Save as PDF" option in the print dialog — the output is clean and presentable. A *commissioned* PDF (rendered server-side via wkhtmltopdf or Puppeteer, hosted at `/assets/reports/ilrm-2026.pdf`) is a separate workflow. Decide later whether download metrics justify the build pipeline cost — most sophisticated readers prefer the web edition.

**Citation tracking.** Operational, not code. Set up Google Alerts for `"Indonesian Luxury Retail Map 2026" OR "Vitrine luxury report"`, plus monitor Inside Retail Asia, Jakarta Post, BoF Asia, Jing Daily, Knight Frank Indonesia, and Bain & Company outputs for citations. When citations appear, log them in a simple spreadsheet (date, publisher, context, URL) — useful for the 2027 edition's introduction and for any sponsor or partnership conversations.
