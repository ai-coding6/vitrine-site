# FIX 11 — Correct Insight dates AND add "Our Analysis" homepage section

Two related tasks bundled into one session. Phase 1 corrects two future-dated Insight pieces. Phase 2 adds a new "Our Analysis" section to the homepage featuring three editorially-selected Insights. Each phase has its own STOP markers.

---

## How to launch Claude Code (PowerShell)

```powershell
cd "$env:USERPROFILE\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once Claude Code launches, paste:

```
Read claude-code-insights-dates-and-homepage-section.md and proceed.
```

(Save this file to the `vitrine-site` folder before launching Claude Code.)

---

## Editorial register reminder

The new homepage section is named **"Our Analysis"** and mirrors the existing `From the floor` Movements section structurally and stylistically. Same card geometry, same date/category/headline/dek/read pattern, same hairline rules, same brass diamond divider. Same vertical rhythm. The only differences are: heading text, card content, and the category prefix ("Long Read · ..." instead of "[Movement type] · ...").

The dek copy for each Insight is the standfirst already published on each Insight detail page. Paste verbatim. Do not rewrite.

---

## STEP 1 — Survey existing files

Before writing anything, view these files so the existing patterns are fully understood:

1. `/index.html` — the homepage. Locate the `From the floor` Movements section. Note its exact wrapper, classes, heading geometry, eyebrow (if any), intro line (if any), card pattern, "View all" link, and any wrapping `<section>` element with its class names.
2. `/insights/index.html` — the Insights listing page. Note the current dates on Kanmo (`kanmo-luxury-push`) and Modest Fashion (`modest-fashion-crown`). These are the two pieces being corrected in Phase 1.
3. `/insights/kanmo-luxury-push/index.html` — the Kanmo detail page. Note any visible date or `article:published_time` meta tag.
4. `/insights/modest-fashion-crown/index.html` — the Modest Fashion detail page. Note any visible date or `article:published_time` meta tag.
5. `/sitemap.xml` — note `<lastmod>` entries for these two Insights.
6. `/assets/vitrine.css` — locate CSS for `.movements__list`, `.movement`, `.movement__meta`, etc. Confirm the section wrapper class names (likely `home-section`, `home-section__head`, `home-section__heading`, etc., or whatever they actually are).

Confirm the file layout looks as expected before proceeding. **STOP.** Wait for my OK to continue.

---

# PHASE 1 — Correct two future-dated Insight pieces

Today is 6 May 2026. Two Insights have publish dates in the future and need to be corrected.

| Slug | Current date | Corrected date |
|------|-------------|----------------|
| kanmo-luxury-push | 15 May 2026 | **01 May 2026** |
| modest-fashion-crown | 08 May 2026 | **24 April 2026** |

The other four Insights (uniqlo-sport-utility-era, commerce-speed-of-now, ramadan-lebaran-numbers, winning-indonesia) are NOT touched — leave them as they are.

## STEP 2 — Update Kanmo date references

In every place where Kanmo's publish date appears, change `15 May 2026` (or `15 MAY 2026`) to `01 May 2026` (or `01 MAY 2026`, matching the existing case format). Specifically:

- `/insights/index.html` — find the Kanmo entry. Update both the human-readable date and the issue-eyebrow line. The eyebrow line currently reads something like `Nº 06 · LUXURY RETAIL · 15 MAY 2026` — change to `Nº 06 · LUXURY RETAIL · 01 MAY 2026`.
- `/insights/kanmo-luxury-push/index.html` — find any human-readable date display on the detail page (likely in an article header / byline area). Update.
- `/insights/kanmo-luxury-push/index.html` — find the `<meta property="article:published_time" content="...">` tag in the `<head>`. Update from `2026-05-15` to `2026-05-01`. If this meta tag does not exist, do not invent one; just note its absence.
- `/sitemap.xml` — find the URL `https://vitrineasia.com/insights/kanmo-luxury-push` (or similar). Update its `<lastmod>` from `2026-05-15` to `2026-05-01`. If the existing `<lastmod>` is something else entirely (e.g. a recent edit date), leave it as-is — `<lastmod>` reflects last modification, not publish date.

Do NOT update or modify the JPG slide files in `/assets/insights/kanmo-luxury-push/`. Those are static cover images and may have the date baked in visually — that's a separate (and possibly impossible) fix. Leave them alone.

**Show me the diff** of all changed files before saving. **STOP.**

## STEP 3 — Update Modest Fashion date references

Same exact treatment as Step 2, but for `modest-fashion-crown`:

- `/insights/index.html` — change `Nº 05 · MARKET SPOTLIGHT · 08 MAY 2026` to `Nº 05 · MARKET SPOTLIGHT · 24 APRIL 2026` (or match the existing date-format convention exactly — match what Kanmo looks like after Step 2).
- `/insights/modest-fashion-crown/index.html` — update human-readable date and `article:published_time` meta tag. Change `2026-05-08` to `2026-04-24`.
- `/sitemap.xml` — update `<lastmod>` for the Modest Fashion URL if appropriate (same caveat as Step 2).

Same rule: leave the JPG slide files alone.

**Show me the diff** of all changed files before saving. **STOP.**

## STEP 4 — Verify Phase 1

After both date corrections are saved, restart `npm run dev` if needed and verify:

1. Open `http://localhost:8080/insights/` — the listing page shows Kanmo dated 01 May 2026 (not 15 May) and Modest Fashion dated 24 April 2026 (not 08 May). All other dates unchanged.
2. The reverse-chronological listing order should now be: Kanmo (01 May 2026, Nº 06) → Uniqlo (01 May 2026, Nº 04) → Modest Fashion (24 April 2026, Nº 05) → Commerce Speed (22 April 2026, Nº 03) → Ramadan (12 April 2026, Nº 02) → Winning (15 March 2026, Nº 01).
3. Note: Kanmo (Nº 06) and Uniqlo (Nº 04) now share 01 May 2026. The existing markup likely hard-codes the order — confirm the listing still displays Kanmo above Uniqlo (issue number takes priority over date when dates tie). If the listing now reorders itself wrong, flag it so we can sort tier-break logic separately.
4. Open `http://localhost:8080/insights/kanmo-luxury-push/` — the detail page shows the new date (01 May 2026) wherever the date appears.
5. Open `http://localhost:8080/insights/modest-fashion-crown/` — same check (24 April 2026).
6. The other four Insight detail pages render unchanged.

**STOP** for my OK before moving to Phase 2.

---

# PHASE 2 — Add "Our Analysis" homepage section

Add a new section to `/index.html` titled **"Our Analysis"** featuring three editorially-selected Insights. Place it **immediately below the existing `From the floor` Movements section** and **above the inaugural report call-out**.

## STEP 5 — Add the new section to /index.html

Locate the closing `</section>` (or equivalent) of the `From the floor` section in `/index.html`. Immediately after it, insert this new section.

**Critical:** Match the existing `From the floor` section's wrapper class names, heading typography, eyebrow treatment (if any), intro-line treatment (if any), and "View all" link pattern **exactly**. The wrapper class names (`home-section`, `home-section__head`, `home-section__heading`, `home-section__intro`, `home-section__foot`, `home-section__viewall`, etc.) below are placeholders — substitute whatever class names the existing `From the floor` section actually uses, so the new section inherits all CSS automatically.

```html
<section class="home-section home-section--analysis" aria-labelledby="our-analysis-heading">
  <div class="home-section__head">
    <h2 id="our-analysis-heading" class="home-section__heading">Our Analysis</h2>
    <p class="home-section__intro">Long reads on the structural shifts shaping fashion, sport, luxury, and lifestyle retail across Indonesia and Asia.</p>
  </div>

  <ul class="movements__list">
    <li>
      <a href="/insights/kanmo-luxury-push" class="movement">
        <div class="movement__meta">
          <span class="movement__date">May 2026</span>
          <span class="movement__category">Long Read · Luxury Retail</span>
        </div>
        <div class="movement__body">
          <h3 class="movement__headline">Kanmo Group's Big Luxury Push</h3>
          <p class="movement__dek">Four iconic international houses officially join Indonesia's retail landscape — reshaping the country's premium fashion map.</p>
          <span class="movement__read">Read the analysis →</span>
        </div>
      </a>
    </li>

    <li>
      <a href="/insights/modest-fashion-crown" class="movement">
        <div class="movement__meta">
          <span class="movement__date">April 2026</span>
          <span class="movement__category">Long Read · Market Spotlight</span>
        </div>
        <div class="movement__body">
          <h3 class="movement__headline">From third to first. Indonesia's modest fashion crown.</h3>
          <p class="movement__dek">Inside the four-year climb that made Indonesia the world's #1 modest fashion market — and the brands turning a ranking into export reality.</p>
          <span class="movement__read">Read the analysis →</span>
        </div>
      </a>
    </li>

    <li>
      <a href="/insights/ramadan-lebaran-numbers" class="movement">
        <div class="movement__meta">
          <span class="movement__date">April 2026</span>
          <span class="movement__category">Long Read · Market Data</span>
        </div>
        <div class="movement__body">
          <h3 class="movement__headline">Ramadan &amp; Lebaran by the numbers</h3>
          <p class="movement__dek">The annual spending peak that reshapes Indonesia's retail calendar — and what the latest cycle revealed about consumer priorities, channel shifts, and category winners.</p>
          <span class="movement__read">Read the analysis →</span>
        </div>
      </a>
    </li>
  </ul>

  <div class="home-section__foot">
    <a href="/insights" class="home-section__viewall">View all analysis →</a>
  </div>
</section>
```

**Important notes on this markup:**

- The wrapper class names above are placeholders. Match them to whatever the existing `From the floor` section uses.
- If the existing `From the floor` section has NO eyebrow above its heading, do NOT add one here.
- If the existing `From the floor` section has NO intro line below its heading, do NOT add one here.
- If the existing `From the floor` section uses NO `<section>` wrapper and just lays its `<h2>` and `<ul>` directly, do the same here.
- Use `<h3>` for each card headline because the section already has an `<h2>`.
- Each card uses the same `.movement` card classes — these are working classes, not name-bound, so reusing them for Insights is correct.
- The `category` reads "Long Read · [topic]" to differentiate Insights from Movements visually without needing different styling.
- The "View all analysis →" link points to `/insights/`.
- For the Ramadan & Lebaran dek: I've drafted a placeholder line. If the existing standfirst on the `/insights/ramadan-lebaran-numbers/` detail page is different, use the actual published standfirst verbatim instead of the placeholder.

**Show me the diff** of `/index.html` before saving. **STOP.**

## STEP 6 — Verify CSS reuse

Open `/assets/vitrine.css`. Confirm that all wrapper class names used in Step 5 (after substituting from the existing `From the floor` section) are already defined in CSS.

If yes (expected case), no CSS changes are needed.

If for any reason the class names introduced are new and not yet styled, **stop and tell me** before adding any CSS. Do not invent new CSS rules.

**STOP** for my OK.

## STEP 7 — Local verification of Phase 2

After the new section is saved, verify:

1. Open `http://localhost:8080/` — homepage renders cleanly
2. Scroll past the hero — `From the floor` section appears with three Movements (COS, Golden Goose, Armani Beauty)
3. Scroll past `From the floor` — the new `Our Analysis` section appears with three Insights (Kanmo, Modest Fashion, Ramadan & Lebaran)
4. **Visual consistency:** the two sections look near-identical in layout, typography, spacing, hairline rules, brass diamond markers. The only differences are heading text, dates, categories, and copy
5. Each card on the Analysis section is clickable and lands on the corresponding `/insights/<slug>/` detail page
6. "View all analysis →" link at the bottom navigates to `/insights/`
7. On mobile (responsive view, ~360px width), the section stacks correctly with no layout breaks
8. Inaugural Report call-out section still appears below `Our Analysis` (i.e. the new section was inserted in the correct position, not at the very bottom)
9. Footer still renders correctly
10. No console errors, no broken layouts on any other page

**STOP** for my final OK before commit.

---

## STEP 8 — Commit message proposal

When I OK the verification, propose this commit message for GitHub Desktop:

> Correct Kanmo/Modest Fashion publish dates; add "Our Analysis" homepage section

Wait for my explicit OK before I commit and push via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules

- Don't restyle, refactor, or "improve" the existing `From the floor` section in any way
- Don't introduce new CSS unless absolutely necessary — reuse existing classes
- Don't update any of the four Insights NOT being date-corrected (Uniqlo, Commerce, Ramadan, Winning)
- Don't modify the JPG slide files in any Insight asset directory — those are baked images
- Don't change the hero section — leave the empty right-side space alone
- Don't add new images, photos, or visual flourishes to the new section — text-only by design (matching `From the floor`)
- Show me the diff at every STOP marker
- Don't push without my explicit OK

---

## Notes for Week 2 (don't act on these now)

- This homepage Insights section is hard-coded and updates manually each time a new Insight publishes — same pattern as the Movements section. Future Insight-publishing prompts should include "Step N: update the homepage Our Analysis section to feature this new piece, push the oldest of the three currently-featured down" as a final step.
- The Kanmo cover slide JPG (`/assets/insights/kanmo-luxury-push/slide-1-cover.jpg`) may still display "15 May 2026" baked into the image. This requires a Photoshop/Gemini regeneration if you want to fix it visually. Low priority — most readers won't compare slide image text to listing date text.
- The Kanmo (Nº 06) and Uniqlo (Nº 04) tied date (both 01 May 2026) is fine in the current hard-coded listing order. If we ever switch the listing to dynamic sort-by-date, we'd need a tie-breaker rule (issue number descending). Not urgent.
- Curatorial choice noted: this homepage features Kanmo + Modest Fashion + Ramadan & Lebaran rather than the three latest by date (which would be Kanmo + Uniqlo + Modest Fashion). The hard-coded approach lets you make this curatorial choice. If automation is ever added, it should support manual featured-piece selection — not just date sorting.
