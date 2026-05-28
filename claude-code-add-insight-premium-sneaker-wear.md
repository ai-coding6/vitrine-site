# Add Insight Nº 07 — Premium Sneaker Wear in Indonesia (8-slide carousel)

Add ONE new Insight to the site: an 8-slide carousel following the established Insights pattern (winning-indonesia / kanmo-luxury-push template). This is Insight-only — no Movements in this task.

---

## How to launch Claude Code (PowerShell)

```powershell
cd "$env:USERPROFILE\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once Claude Code launches, paste:

```
Read claude-code-add-insight-premium-sneaker-wear.md and proceed.
```

**Before launching, save the 8 slide images into:**
`assets/insights/premium-sneaker-wear-indonesia/`
(slide-1-cover.png … slide-8-direction.png — see STEP 0). If your existing Insights store images at a different path, use that path and tell me when I ask.

---

## STEP 0 — Asset check

Confirm these files exist in `assets/insights/premium-sneaker-wear-indonesia/`:
- `slide-1-cover.png`
- `slide-2-defining-category.png`
- `slide-3-sizing.png`
- `slide-4-drivers.png`
- `slide-5-brands.png`
- `slide-6-culture.png`
- `slide-7-digital.png`
- `slide-8-direction.png`

(Optional editable sources: matching `.svg` of each.) List the folder and report what's present. If filenames or the path differ, adapt — render whatever PNG slides exist, in numeric order. **STOP.** Wait for my OK.

---

## STEP 1 — Survey existing Insights pattern

View these so you match the exact pattern (do not guess markup):
1. `/insights/index.html` — the Insights listing page (card markup)
2. `/insights/winning-indonesia/index.html` (or any existing Insight) — the detail-page template: the vertical slide-stack layout, lazy-loading, per-slide alt text, eyebrow/title/issue-label structure, sources block, and back-link
3. `/sitemap.xml` — to match existing Insight entry pattern

Note: existing Insights are 6 slides; this one is **8** — same layout, just two more image slots. Confirm the structure, then **STOP** for my OK.

---

## STEP 2 — Add card to /insights/index.html

New card at the **top** of the Insights listing (newest first). Match existing card markup exactly (same classes, image ratio, eyebrow/title/dek structure).

- **Issue:** Nº 07  *(confirm this is the correct next number against the live count before saving)*
- **Slug / href:** `/insights/premium-sneaker-wear-indonesia`
- **Cover image:** `assets/insights/premium-sneaker-wear-indonesia/slide-1-cover.png` (4:5)
- **Eyebrow:** `MAY 2026 · PREMIUM SNEAKER WEAR`
- **Title:** `Premium Sneaker Wear in Indonesia`
- **Dek:** `A category analysis of Indonesia's Rp 2.5m+ sneaker tier — the price ladder, the demand drivers, the brands, the culture, and the digital shift defining premium.`

**Show me the diff. STOP.**

---

## STEP 3 — Create detail page: /insights/premium-sneaker-wear-indonesia/index.html

Use an existing Insight detail page as the template (Layout 1: vertical slide stack, lazy-loaded images, descriptive alt text per slide, sources block, back-link). Copy it exactly, then swap:

- **Page title:** `Premium Sneaker Wear in Indonesia — Vitrine Insights — Vitrine Asia`
- **Meta description:** `A Vitrine category analysis of Indonesia's premium sneaker tier (Rp 2.5m+): market sizing, demand drivers, the brand landscape, sneaker culture, and the social-commerce shift.`
- **Canonical URL:** `https://vitrineasia.com/insights/premium-sneaker-wear-indonesia`
- **OG title:** `Premium Sneaker Wear in Indonesia`
- **OG description:** Same as meta description
- **OG image:** `assets/insights/premium-sneaker-wear-indonesia/slide-1-cover.png`
- **Eyebrow:** `MAY 2026 · PREMIUM SNEAKER WEAR`
- **H1:** `Premium Sneaker Wear in Indonesia`
- **Issue label:** `Vitrine Insights Nº 07`

**Eight slides in order**, each with descriptive alt text:
1. `slide-1-cover.png` — alt: "Cover — Premium Sneaker Wear in Indonesia"
2. `slide-2-defining-category.png` — alt: "Defining the category — the Rp 2.5m+ premium price ladder"
3. `slide-3-sizing.png` — alt: "Market structure — global to Indonesia sneaker-market funnel"
4. `slide-4-drivers.png` — alt: "The demand drivers — middle class, Gen Z, running boom, wellness status"
5. `slide-5-brands.png` — alt: "The brands — incumbents versus running insurgents"
6. `slide-6-culture.png` — alt: "Culture and community — Urban Sneaker Society and local sneaker culture"
7. `slide-7-digital.png` — alt: "The digital shift — TikTok Shop and social commerce"
8. `slide-8-direction.png` — alt: "Signals and direction — where premium sneaker wear is heading"

- **Sources block** (footer):

```
Buccheri & Blibli (price taxonomy); Expatistan (avg Jakarta price); Cognitive/IMARC/MRFR (global sneakers ~US$95bn); Dataintelo (APAC US$38.5bn/35.5%); Statista (SEA sneakers ~US$2bn; luxury-footwear share 3%→5%); World Bank & McKinsey (middle class 141m by 2030; consumption >US$2.5tn); Market Research Indonesia (Gen Z spending; mobile-first); WWD & China Daily (running boom); Ken Research (Indonesia brand roster, Nike/adidas ~40%); CNBC (New Balance +19%/$9.2bn, ASP +30%); Sportsverse (On +24.9%; Hoka decelerating); Mordor (APAC athletic footwear); Urban Sneaker Society 2025 (Koran Jakarta, Berita Jakarta, Kompas, CommonGoods — 320 tenants, 80% local, 45k target); Momentum Works/Tabcut & Intura (TikTok Shop US$13.1bn; social commerce →US$22bn); TMO Group (8/10 official stores; livestream 1.7x). Primary verification by Vitrine, May 2026.
```

> **Do not edit slide content.** Slides are final, fact-checked images. If asked to summarise: category is strictly the Rp 2.5m+ band; slide 3 sizing is a nested funnel (global ~US$95bn → APAC ~35% → SEA ~2% → Indonesia — do NOT call SEA 35% of global); brand growth figures are global, labelled as such; local brands (Compass, Brodo, Ortuseight) are premium-positioned but priced below Rp 2.5m.

**Show me the diff. STOP.**

---

## STEP 4 — Update /sitemap.xml

Add one URL, matching the priority/changefreq of existing Insight entries:

```xml
<url>
  <loc>https://vitrineasia.com/insights/premium-sneaker-wear-indonesia</loc>
  <lastmod>2026-05-28</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

**Show me the diff. STOP.**

---

## STEP 5 — (Optional) Homepage Insights section

If `/index.html` features recent Insights, add this one at the top per the existing pattern (keep the section to its existing max count). If the homepage does NOT surface Insights, skip this step. **Show me the diff if changed. STOP.**

---

## STEP 6 — Local verification

Restart `npm run dev` if needed and check:
1. **Insights listing** — `http://localhost:8080/insights` — Nº 07 card at top, cover renders, title/dek correct, link resolves
2. **Detail page** — `http://localhost:8080/insights/premium-sneaker-wear-indonesia` — all 8 slides render in order, alt text present, eyebrow/H1/issue label correct, sources block at bottom, back-link works
3. **Image loading** — slides lazy-load and display at correct 4:5 ratio, no broken images
4. **Sitemap** — `http://localhost:8080/sitemap.xml` — new URL present
5. **Click-through** — clicking the listing card opens the detail page

**STOP** for my final OK before commit.

---

## STEP 7 — Commit message proposal

When I OK verification, propose:

> Add Insight Nº 07: Premium Sneaker Wear in Indonesia (8-slide carousel)

Wait for my explicit OK before committing/pushing via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules

- Match the existing Insight detail page exactly for layout, classes, slide-stack structure, sources block, and back-link — this one just has 8 image slots instead of 6.
- Don't reorder or restyle existing Insights.
- Don't edit the slide images — they are final.
- Confirm the issue number (Nº 07) against the live count before saving.
- Show me the diff at every STOP marker.
- Don't push without my explicit OK.

---

## Reference — what's on each slide (for alt text / SEO, not to be rendered as text)

1. Cover: Premium Sneaker Wear in Indonesia
2. Defining the category: price ladder — Entry (Rp 500k–1.5m) / Mid (Rp 1.5m–3.5m) / PREMIUM (Rp 2.5m–5m) / Grail (Rp 5m+)
3. Market structure: global ~US$95bn → APAC US$38.5bn (35%) → SEA ~US$2bn → Indonesia; luxury-footwear share 3%→5% rising
4. Demand drivers: rising middle class (141m by 2030); Gen Z (~70% productive-age, top spender by 2030); the running boom; status-through-wellness
5. The brands: Nike & adidas ceding; New Balance +19%/ASP +30%; On +24.9% vs Hoka decelerating; Asics comeback; local premium below the band
6. Culture & community: Urban Sneaker Society 2025 — 320 tenants (80% local), 45k visitors, governor-opened, cross-border collabs
7. The digital shift: Indonesia = TikTok Shop #2 globally (US$13.1bn 2025); social commerce →US$22bn by 2026; ~75% mobile-first; authenticity moat
8. Signals & direction: running engine / rising premium share / home-grown culture vs price ceiling / social commerce + authenticity
