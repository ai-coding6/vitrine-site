# Add Insight Nº 08 — The Bridge Brand: How Havaianas Redefines Premium in Indonesia (9-slide carousel)

Add ONE new Insight: a 9-slide carousel following the established Insights pattern. Insight-only — no Movements. This REPLACES any earlier "Havaianas premiumization" draft.

> The cover (slide 1) is a full-bleed photographic cover. Interior slides carry embedded editorial photos. One slide (slide 4) contains a CC BY-SA licensed Gigi Hadid photo whose credit line is baked into the image and MUST stay visible.

---

## How to launch Claude Code (PowerShell)

```powershell
cd "C:\Users\abdullah_asraf\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once launched, paste:

```
Read claude-code-add-insight-havaianas-bridge.md and proceed.
```

**Before launching, save the 9 slide images into:**
`assets/insights/havaianas-bridge-brand-indonesia/`
(slide-1-cover.png … slide-9-direction.png). If your existing Insights store images at a different path, use that path and tell me when I ask.

---

## STEP 0 — Asset check

Confirm these exist in `assets/insights/havaianas-bridge-brand-indonesia/`:
- `slide-1-cover.png`
- `slide-2-paradox.png`
- `slide-3-collab-engine.png`
- `slide-4-influencers.png`
- `slide-5-indonesia-play.png`
- `slide-6-price-bridge.png`
- `slide-7-mechanism.png`
- `slide-8-tension.png`
- `slide-9-direction.png`

(Optional `.svg` of each.) The Gigi Hadid CC credit is baked into slide 4 itself — do not crop or overlay the image. List the folder and report what's present; adapt to the real path/filenames if they differ. **STOP.** Wait for my OK.

---

## STEP 1 — Survey existing Insights pattern

View and match exactly:
1. `/insights/index.html` — listing card markup
2. The most recent Insight detail page — the vertical slide-stack layout, lazy-loading, per-slide alt text, sources block, back-link. **The slide-1 cover IS the title — do NOT render a text eyebrow / H1 / issue-label in the page body.**
3. `/sitemap.xml`

Confirm structure, then **STOP** for my OK.

---

## STEP 2 — Add card to /insights/index.html

New card at the **top** (newest first). Match existing card markup exactly.

- **Issue:** Nº 08  *(confirm against live count before saving)*
- **Slug / href:** `/insights/havaianas-bridge-brand-indonesia`
- **Cover image:** `assets/insights/havaianas-bridge-brand-indonesia/slide-1-cover.png` (4:5)
- **Card eyebrow:** match your existing card pattern (e.g. `Nº 08 · Brand Strategy · 8 Oct 2026`)
- **Title:** `The Bridge Brand`
- **Dek:** `How Havaianas redefines premium in Indonesia — luxury collaborations, a supermodel ambassador and local influencers pull desirability up while the Rp 200k classic holds the base.`

> If this replaces an already-published Havaianas Nº 08 at a different slug, either keep the old slug and swap the content, or publish at this slug and 301-redirect the old one. Ask me which.

**Show me the diff. STOP.**

---

## STEP 3 — Create detail page: /insights/havaianas-bridge-brand-indonesia/index.html

Copy the most recent Insight detail page exactly, then swap:

- **Page title:** `The Bridge Brand — Vitrine` (match existing `… — Vitrine` pattern)
- **Meta description:** `A Vitrine brand analysis of how Havaianas redefines premium in Indonesia — through luxury collaborations, a supermodel ambassador, local influencers, and a two-speed price architecture.`
- **Canonical:** `https://vitrineasia.com/insights/havaianas-bridge-brand-indonesia`
- **OG title:** `The Bridge Brand: How Havaianas Redefines Premium in Indonesia`
- **OG description:** Same as meta description
- **OG image:** `assets/insights/havaianas-bridge-brand-indonesia/slide-1-cover.png`
- **article:published_time:** `2026-10-08`
- **Do NOT render an in-body eyebrow / H1 / issue-label** — the slide-1 cover is the title.

**Nine slides in order**, each with descriptive alt text:
1. `slide-1-cover.png` — "Cover — The Bridge Brand: how Havaianas redefines premium in Indonesia"
2. `slide-2-paradox.png` — "The paradox — the US$30 Havaianas was the world's most-desired product, Lyst Q3 2025"
3. `slide-3-collab-engine.png` — "The collab engine — Dolce & Gabbana, Isabel Marant, Maison Kitsuné"
4. `slide-4-influencers.png` — "The faces — Gigi Hadid global ambassador to Luna Maya local ambassador"
5. `slide-5-indonesia-play.png` — "The Indonesia play — a named priority market, US$50m Asia investment"
6. `slide-6-price-bridge.png` — "The price bridge — classic Rp 200k to limited drops Rp 2.5m+"
7. `slide-7-mechanism.png` — "The mechanism — borrowed luxury equity on a protected accessible base"
8. `slide-8-tension.png` — "The tension — redefinition has a limit"
9. `slide-9-direction.png` — "Signals and direction — where the bridge leads next"

- **Sources block** (footer, match existing one-line `·` format):

```
Lyst Index Q3 2025, WWD, Fashionista, Highsnobiety (Havaianas Nº 1 most-desired product) · WWD, Footwear News, Highxtar (Isabel Marant collab, 22 May 2026, Havaianas Puffed; Dolce & Gabbana US$139) · WWD, Havaianas press (Gigi Hadid global ambassador, 19 Mar 2025) · Marketing-Interactive, Monks (US$50m Asia investment, Indonesia priority, Luna Maya) · havaianas.co.id & Kanmo Group · Photo on slide 4: Manuela Muniz Feijó Scarpa, via Wikimedia Commons, CC BY-SA 4.0 · Vitrine analysis · October 2026
```

> **Do not edit slide content.** The Gigi Hadid photo on slide 4 is licensed CC BY-SA 4.0 and its credit line is baked into the image — keep the image intact and uncropped. Gigi Hadid's verified title is "Global Brand Ambassador" (not "creative director"). If asked to summarise: the thesis is a BRIDGE (cheap classic anchor + luxury-collab/influencer desirability), with Indonesia a declared priority market.

**Show me the diff. STOP.**

---

## STEP 4 — Update /sitemap.xml

Match existing Insight priority/changefreq:

```xml
<url>
  <loc>https://vitrineasia.com/insights/havaianas-bridge-brand-indonesia</loc>
  <lastmod>2026-10-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Show me the diff. STOP.**

---

## STEP 5 — (Optional) Homepage Insights section

If `/index.html` surfaces recent Insights, add this at the top per the existing pattern. If not, skip. **Show me the diff if changed. STOP.**

---

## STEP 6 — Local verification

Restart `npm run dev` if needed and check:
1. **Listing** — `/insights` — Nº 08 card at top, cover renders, title/dek correct
2. **Detail** — `/insights/havaianas-bridge-brand-indonesia` — all 9 slides render in order, alt text present, sources block, back-link, no stray in-body title, slide 4 Gigi photo intact with visible credit
3. **Images** — lazy-load at 4:5, no broken images
4. **Sitemap** — new URL present
5. **Click-through** — card opens detail page

**STOP** for my final OK before commit.

---

## STEP 7 — Commit message proposal

When I OK verification, propose:

> Add Insight Nº 08: The Bridge Brand — Havaianas redefines premium in Indonesia (9-slide carousel)

Wait for my explicit OK before committing/pushing via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules
- Match the existing Insight detail page exactly for layout, classes, slide-stack, sources block, back-link — 9 image slots.
- Slide-1 cover is the title — no in-body eyebrow/H1/issue-label.
- Don't reorder/restyle existing Insights. Don't edit the slide images. Confirm Nº 08 against the live count.
- The slide-4 Gigi Hadid CC BY-SA 4.0 credit (baked into the image) must stay visible — don't crop it.
- Show me the diff at every STOP. Don't push without my explicit OK.
