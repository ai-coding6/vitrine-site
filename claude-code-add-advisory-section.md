# Establish the Advisory section + first report (Tendam's Indonesia Roadmap)

Stand up **Advisory** — a new, distinct section of Vitrine positioned as the consulting arm, separate from editorial Movements and Insights. This adds: a nav item, an Advisory landing page (the conversion hub), the first report, and sitemap entries.

> Two self-contained styled HTML pages are supplied (landing + report). Both already match the Vitrine identity and carry the `editor@vitrineasia.com` contact. Do not edit their body copy — the report is fact-checked and legally worded (independent-analysis disclaimer; no brand named negatively).

---

## How to launch Claude Code (PowerShell)

```powershell
cd "C:\Users\abdullah_asraf\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once launched, paste:

```
Read claude-code-add-advisory-section.md and proceed.
```

**Asset prerequisites — save before running:**
- `advisory-landing.html` — the Advisory section landing page
- `tendam-indonesia-roadmap.html` — the first report (two store images are embedded inline as base64 — no separate image files needed; the page is self-contained but ~2.7MB as a result)

Save both to the site root temporarily; STEP 2 moves them to their final paths.

---

## STEP 1 — Survey & confirm the pattern

Report:
1. How Movements/Insights are structured on disk (`/movements/<slug>/index.html`, `/movements/index.html`, etc.) — Advisory will mirror this.
2. How the **header nav** is built (shared include vs. duplicated per page) and where "Advisory" should sit (recommended: between **Insights** and **About**).
3. How `sitemap.xml` lists pages.
4. Whether the site wraps every page in a shared global header/footer, OR treats pages as standalone. **This decides STEP 2:** the supplied pages are standalone (own masthead + footer styled to match Vitrine). If the site uses a shared wrapper, note it and recommend whether to (a) use the supplied pages as-is, or (b) inject their `<main>`/content into the site template.

**STOP** for my OK.

---

## STEP 2 — Place the two Advisory pages

Create this structure (mirroring Movements/Insights):

```
/advisory/index.html                          ← from advisory-landing.html
/advisory/tendam-indonesia-roadmap/index.html ← from tendam-indonesia-roadmap.html
```

- The supplied files are self-contained (inline CSS, Google Fonts, own masthead/footer in Vitrine style). Use them as-is **unless** STEP 1 found a shared site wrapper you recommend injecting into — in which case do (b) from STEP 1 and keep the pages' internal content/section styling intact.
- **Internal links:** the landing page links the report card to `/advisory/tendam-indonesia-roadmap`. Confirm that resolves to the report's folder. The report's CTA and the landing CTA both link to `mailto:editor@vitrineasia.com` — leave as-is.

**Show me the file placement + any wrapper changes. STOP.**

---

## STEP 3 — Add "Advisory" to the header nav (site-wide)

Add an **Advisory** nav link (recommended position: between Insights and About), matching existing nav item styling exactly, linking to `/advisory`. If nav is a shared include → one change; if duplicated per page → update each page consistently and report how many.

**Show me the diff. STOP.**

---

## STEP 4 — Update sitemap.xml

Add two URLs, matching existing section/detail priority & changefreq:

```xml
<url>
  <loc>https://vitrineasia.com/advisory</loc>
  <lastmod>2026-10-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://vitrineasia.com/advisory/tendam-indonesia-roadmap</loc>
  <lastmod>2026-10-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

**Show me the diff. STOP.**

---

## STEP 5 — (Optional) Homepage surfacing

Do NOT force this. If the homepage has a natural "Latest" or section-teaser slot and you think an Advisory teaser fits, propose it and ask me first. Otherwise skip. **STOP** only if proposing something.

---

## STEP 6 — Local verification

Run `npm run dev` and check:
1. `/advisory` — landing renders fully: emerald hero ("Where retail goes next."), the statement, the 2×2 services grid, the report-series card for Tendam, and the emerald "Commission a report" CTA with `editor@vitrineasia.com`. Fonts load.
2. `/advisory/tendam-indonesia-roadmap` — report renders fully: emerald hero ("Tendam's Indonesia Roadmap"), the "Vitrine View" verdict callout, the figures band, **two embedded store photos** (a Cortefiel storefront in "The Situation" — which MUST show its visible "Photo: Tendam, via Wikimedia Commons, CC BY-SA 4.0" credit — and an in-store image in "The Prize"), both tables, the "Work with Vitrine Advisory" CTA block, sources + disclaimer, footer.
3. Clicking the report card on `/advisory` opens the report.
4. **Nav** — "Advisory" appears on every page, links to `/advisory`.
5. **Mobile** — both pages readable; services grid reflows to 1 column; figures band to 2 columns; tables scroll rather than overflow; CTAs legible.
6. **Sitemap** — both URLs present.
7. Movements / Insights / homepage UNCHANGED.

**STOP** for my final OK before commit.

---

## STEP 7 — Commit message proposal

When I OK verification, propose:

> Add Advisory section: landing page + first report (Tendam's Indonesia Roadmap)

Wait for my explicit OK before committing/pushing via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules
- Do NOT edit the report's body copy — fact-checked, legally worded, no brand named negatively.
- Keep both `mailto:editor@vitrineasia.com` links intact.
- Keep the façade photo's visible credit ("Photo: Tendam, via Wikimedia Commons, CC BY-SA 4.0") — required by the image's CC BY-SA 4.0 licence; do not crop or remove it.
- Match the site's existing section/listing/nav patterns.
- Preserve the pages' Vitrine visual identity (emerald/brass/cream, Fraunces/Source Serif/Inter).
- Show me the diff at every STOP. Don't push without my explicit OK.

---

## Context (not for publishing)
- **Advisory** is Vitrine's consulting arm — the conversion layer of the business. The landing page sells the practice; the reports are the free, credibility-building samples; the CTA converts to `editor@vitrineasia.com`.
- **Services listed:** Brand-Entry Scoping · Market & Category Research · Operator & Partner Mapping · Feasibility & Go-to-Market.
- **First report verdict:** Springfield — ENTER with conditions (committed master-franchise + digital-first); Cortefiel — watch/phase two. All figures verified Oct 2026 (Tendam FY2025 results + primary reporting).
- **Series ahead:** more Entry Scopes (brands circling SEA) + category studies. Each future report = a new card on `/advisory` + its own `/advisory/<slug>/` page, same pattern.
