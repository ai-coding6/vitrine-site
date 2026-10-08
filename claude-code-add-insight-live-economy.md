# Add Insight Nº 09 — The Live Economy: How Indonesia Became Social Commerce's Capital (8-slide carousel)

Add ONE new Insight: an 8-slide carousel following the established Insights pattern. Insight-only — no Movements.

---

## How to launch Claude Code (PowerShell)

```powershell
cd "C:\Users\abdullah_asraf\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once launched, paste:

```
Read claude-code-add-insight-live-economy.md and proceed.
```

**Before launching, save the 8 slide images into:**
`assets/insights/live-economy-social-commerce-indonesia/`
(slide-1-cover.png … slide-8-direction.png — see STEP 0). If your existing Insights store images at a different path, use that path and tell me when I ask.

---

## STEP 0 — Asset check

Confirm these exist in `assets/insights/live-economy-social-commerce-indonesia/`:
- `slide-1-cover.png`
- `slide-2-scale.png`
- `slide-3-paradox.png`
- `slide-4-live-engine.png`
- `slide-5-beauty.png`
- `slide-6-2026-turn.png`
- `slide-7-for-brands.png`
- `slide-8-direction.png`

(Optional `.svg` of each.) List the folder and report what's present. Adapt to the real path/filenames if they differ — render whatever PNG slides exist in numeric order. **STOP.** Wait for my OK.

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

- **Issue:** Nº 09  *(confirm against live count before saving)*
- **Slug / href:** `/insights/live-economy-social-commerce-indonesia`
- **Cover image:** `assets/insights/live-economy-social-commerce-indonesia/slide-1-cover.png` (4:5)
- **Card eyebrow:** match your existing card pattern (e.g. `Nº 09 · Digital Commerce · 28 May 2026`)
- **Title:** `The Live Economy`
- **Dek:** `How Indonesia became the world's #2 social-commerce market — built on a regulatory paradox, a live-selling culture with no Western parallel, and the first signs the land-grab is over.`

**Show me the diff. STOP.**

---

## STEP 3 — Create detail page: /insights/live-economy-social-commerce-indonesia/index.html

Copy the most recent Insight detail page exactly, then swap:

- **Page title:** `The Live Economy — Vitrine` (match existing `… — Vitrine` pattern)
- **Meta description:** `A Vitrine market analysis of Indonesian social commerce: how a 2023 ban made the country TikTok Shop's #2 market, the live-selling and creator-affiliate engine, beauty's dominance, and the 2026 cooling.`
- **Canonical:** `https://vitrineasia.com/insights/live-economy-social-commerce-indonesia`
- **OG title:** `The Live Economy: How Indonesia Became Social Commerce's Capital`
- **OG description:** Same as meta description
- **OG image:** `assets/insights/live-economy-social-commerce-indonesia/slide-1-cover.png`
- **article:published_time:** `2026-05-28`
- **Do NOT render an in-body eyebrow / H1 / issue-label** — the slide-1 cover is the title.

**Eight slides in order**, each with descriptive alt text:
1. `slide-1-cover.png` — "Cover — The Live Economy: how Indonesia became social commerce's capital"
2. `slide-2-scale.png` — "The scale — Indonesia is TikTok Shop's second-largest market globally"
3. `slide-3-paradox.png` — "The paradox — TikTok re-enters Indonesia by pairing with local platform Tokopedia"
4. `slide-4-live-engine.png` — "The live engine — livestream selling and the creator-affiliate network"
5. `slide-5-beauty.png` — "Beauty is the kingdom — the dominant category on Indonesian TikTok Shop"
6. `slide-6-2026-turn.png` — "The 2026 turn — TikTok Shop's share peaks and cools as Shopee counterattacks"
7. `slide-7-for-brands.png` — "What it means for brands — content as distribution, the two-system funnel"
8. `slide-8-direction.png` — "Signals and direction — where the live economy goes next"

- **Sources block** (footer, match existing one-line `·` format):

```
Momentum Works & Tabcut (TikTok Shop GMV: Indonesia US$13.1bn, SEA US$45.6bn, global US$64.3bn; livestream share; top categories) · Magpie IQ & Cube Asia (Indonesia tracked-GMV share 23.1%→37.8%→32.4%, +66% in 2025) · KPPU, Reuters, CNN, Rest of World, MoT Regulation 31/2023 (the 2023 ban and TikTok's ~US$1.5bn Tokopedia acquisition) · Statista, Involve Asia, MomentIQ (beauty dominance, live conversion, creator affiliates) · Vitrine analysis · May 2026
```

> **Do not edit slide content.** If asked to summarise: Indonesia is TikTok Shop's #2 market; the structural spine is TikTok's 2023 re-entry via a ~$1.5bn 75% Tokopedia stake after the social/commerce separation rules (described neutrally, not as policy failure); the engine is live-selling + creator affiliates; beauty dominates; and 2026 shows the first cooling (share 37.8%→32.4%) as Shopee counterattacks. Share figures are "tracked platform GMV" (Magpie IQ), not official TikTok numbers.

**Show me the diff. STOP.**

---

## STEP 4 — Update /sitemap.xml

Match existing Insight priority/changefreq:

```xml
<url>
  <loc>https://vitrineasia.com/insights/live-economy-social-commerce-indonesia</loc>
  <lastmod>2026-05-28</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Show me the diff. STOP.**

---

## STEP 5 — (Optional) Homepage Insights section

If `/index.html` surfaces recent Insights, add this at the top per the existing pattern (respect existing max count). If not, skip. **Show me the diff if changed. STOP.**

---

## STEP 6 — Local verification

Restart `npm run dev` if needed and check:
1. **Listing** — `/insights` — Nº 09 card at top, cover renders, title/dek correct, link resolves
2. **Detail** — `/insights/live-economy-social-commerce-indonesia` — all 8 slides render in order, alt text present, sources block, back-link, no stray in-body title
3. **Images** — lazy-load at 4:5, no broken images
4. **Sitemap** — new URL present
5. **Click-through** — card opens detail page

**STOP** for my final OK before commit.

---

## STEP 7 — Commit message proposal

When I OK verification, propose:

> Add Insight Nº 09: The Live Economy — Indonesia social commerce (8-slide carousel)

Wait for my explicit OK before committing/pushing via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules
- Match the existing Insight detail page exactly for layout, classes, slide-stack, sources block, back-link — 8 image slots.
- Slide-1 cover is the title — no in-body eyebrow/H1/issue-label.
- Don't reorder/restyle existing Insights. Don't edit the slide images. Confirm Nº 09 against the live count.
- Show me the diff at every STOP. Don't push without my explicit OK.

---

## Reference — what's on each slide (for alt text / SEO)
1. Cover: The Live Economy — how Indonesia became social commerce's capital
2. The scale: Indonesia $13.1bn (#2 globally), SEA $45.6bn (71% of global), +111% YoY growth, ~35% Shop|Tokopedia share of Indonesia's e-commerce
3. The paradox: Oct 2023 social/commerce separation rules → Dec 2023 TikTok invests ~$1.5bn for 75% of Tokopedia → a global platform re-enters via a local one → Indonesia's framework now a regional reference point (NEUTRAL framing — no policy critique)
4. The live engine: 33% of SEA GMV via livestream (vs 14% US), 7M+ creator affiliates, 5-12% live conversion vs 2-3% traditional
5. Beauty is the kingdom: beauty+fashion ~66% of ID TikTok Shop GMV; TikTok Shop beauty share 17%→37% (2023-25); Skintific & Glad2Glow lead the leaderboard
6. The 2026 turn: peak 37.8% (Mar) → 32.4% (May); beauty share 47% vs Shopee 50% (closing but behind); yet Indonesia GMV +111% in 2025 — maturing not falling
7. For brands: content is distribution; two-system funnel (TikTok discovery + Tokopedia transaction); beauty/fashion convert; omnichannel hedge
8. Direction: social commerce capital; regulatory split as ASEAN template; live+creator+beauty moat; 2026 inflection from land-grab to discipline
