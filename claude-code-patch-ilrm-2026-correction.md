# Claude Code Patch · ILRM 2026 Tier Correction

**Action:** Replace the current report HTML with the corrected version while preserving the meta layer, hero CSS, and print stylesheet that Claude Code injected during initial publication.

**Site root (USE THIS LITERAL PATH):**
```
D:\Information\Information\abdullah_asraf\My Documents\Desktop\App\Vitrine Asia\Website\vitrine-site
```

Do NOT use `$env:USERPROFILE\Desktop\...` — that's the wrong drive. Use the literal D: path above.

---

## What changed and why

The previously-published report's tier structure was based on an aggregator-style brand presence count that conflated full-fashion boutiques with beauty boutiques and shop-in-shops. Post-publication primary-source verification against each brand's official Indonesia store locator (id.louisvuitton.com, dior.com, hermes.com, chanel.com, bulgari.com, tiffany.com, prada.com, stores.burberry.com) revealed that under a strict standard — full-line standalone fashion or jewellery boutiques only — Indonesia's absolute-luxury concentration sits in three Jakarta venues, not six.

**The correction restructures:**
- "Big Six" → "**Big Three**" (Plaza Indonesia, Plaza Senayan, Pacific Place) — the only Jakarta venues with substantial directly-operated luxury fashion presence under the strict standard
- Senayan City, Pondok Indah Mall PIM 2, and Grand Indonesia → **Premium Tier** (alongside Kota Kasablanka, Lippo Mall Puri, Summarecon Mall Kelapa Gading, ASHTA District 8)
- Direct Deployment Matrix recomputed against verified primary sources: LV holds the only full Big Three coverage; Prada is single-store (Pacific Place only); Dior fashion is two flagships (PI, PS) with the wider footprint being Beauty; Bvlgari is at PI and PS (corrected from the previous PI/PP claim); Burberry is at PI/PS/SC
- New methodology subsection added explaining the strict brand presence standard
- Chanel fashion gap section corrected (Plaza Indonesia, not Grand Indonesia)
- Surabaya gap section corrected (no current Sheraton Surabaya LV per official locator)

---

## Steps

### 1. Locate the corrected source
The corrected HTML is delivered as `vitrine-web-edition-revised.html` (in the user's downloads or wherever they save the file). The user will tell you the path. Open it and confirm the file size is approximately **281 KB / 3,450 lines**.

### 2. Locate the live report file
```
$site = "D:\Information\Information\abdullah_asraf\My Documents\Desktop\App\Vitrine Asia\Website\vitrine-site"
$report = Join-Path $site "reports\the-indonesian-luxury-retail-map-2026\index.html"
```

This file already exists from the initial publication. It contains the original report HTML PLUS the additional layer you added during initial publication (meta tags, OG tags, print stylesheet, hero refinements). Do NOT discard those additions — preserve them and only swap the article body content.

### 3. Identify what to preserve vs replace

**Preserve in the live file:**
- Everything in `<head>` (meta description was updated by the corrected source — but the OG tags, Twitter card tags, structured data JSON-LD, canonical URL, and any print/screen CSS additions should be preserved)
- Any hero refinements made during publish (visible cover image rendering tweaks, hero overlay adjustments)
- Any print stylesheet rules added during publish

**Replace from the corrected source:**
- All article body content (everything from `<article id="cover">` through `</section>` of the colophon)
- The meta description in `<head>` (this is the one update Claude Code should propagate to the live file's head — it's been rewritten to reflect the new tier structure)

### 4. Approach

The cleanest approach: 
1. Read the live `index.html` and identify the boundaries of (a) the article body region you'll swap, and (b) the head additions you'll preserve
2. Read the corrected `vitrine-web-edition-revised.html` and extract its article body
3. Swap the body in the live file
4. Update only the meta description in the live file's head (replace the old `<meta name="description" content="...Big Six...">` with the new content from the corrected source)
5. Save the live file

### 5. Validate

After saving, verify in PowerShell:
```powershell
Select-String -Path $report -Pattern "Big Six" -SimpleMatch | Measure-Object | Select-Object -ExpandProperty Count
# Should return: 0

Select-String -Path $report -Pattern "Big Three" -SimpleMatch | Measure-Object | Select-Object -ExpandProperty Count
# Should return: ~15-20

Select-String -Path $report -Pattern "Premium Tier" -SimpleMatch | Measure-Object | Select-Object -ExpandProperty Count
# Should return: ~10-15
```

### 6. Commit

The user will commit via GitHub Desktop with the suggested commit message:
```
Correction: tier structure revised to Big Three (Plaza Indonesia, Plaza Senayan, Pacific Place); Premium Tier expanded; deployment matrix recomputed against official brand store locators; Brand Presence Standard methodology note added
```

---

## Key changes the corrected source contains (so you can verify the swap landed correctly)

1. **Meta description:** "...The Big Three malls, the wider Premium Tier behind them, and the 2025 luxury VAT regime read against its actual scope."
2. **Sticky nav:** `03 · Big Three` (was `03 · Big Six`)
3. **Hero standfirst:** opens with "Big Three malls, the wider Premium Tier..."
4. **Executive Summary fact 03:** rewritten naming the Big Three (PI, PS, PP) and Premium Tier (SC, PIM 2, GI, KK, LMP, SMRA, ASHTA)
5. **Chart 06:** now 3 mall cards (PI, PS, PP) instead of 6
6. **Chapter 03:** Big Three profiles, then a new full Premium Tier section with SC/PIM 2/GI/KK/LMP/SMRA/ASHTA each profiled
7. **Chapter 05 deployment matrix:** 3-column matrix (PI/PS/PP). New row: Hermès. New row: Chanel Fashion. Recomputed counts: LV 3★ (only full coverage), Hermès 2, Dior Fashion 2, Chanel 1, Gucci 2, Bottega 2, SL 1, Bvlgari 2, Tiffany 2, Prada 1, Burberry 2.
8. **Chapter 05 prose:** Prada rewritten for 1 store / 2016 entry; Dior fashion-vs-beauty differentiation explicit; Bvlgari corrected to PI/PS not PI/PP; Burberry corrected to 3 stores; LV Surabaya overclaim removed
9. **Chapter 09 Chanel gap:** corrected to Plaza Indonesia (not Grand Indonesia)
10. **Chapter 09 Surabaya gap:** updated to reflect no current LV Surabaya per official locator
11. **Back Matter:** new "Methodology · The Brand Presence Standard" subsection added before Triangulation methodology

---

## If anything looks off after the swap

- If sticky nav still shows "Big Six": the article body swap didn't include the sticky nav — re-check the swap boundaries
- If the deployment matrix shows 6 columns instead of 3: same issue
- If you see the old Surabaya gap section claiming "Louis Vuitton has the Sheraton Surabaya store": same issue
- If `Big Six` returns >0 in the validation grep: rerun with the corrected source

If unsure, re-fetch the corrected source from the user and start the swap fresh — the corrected file is the source of truth.
