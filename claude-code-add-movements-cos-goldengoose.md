# FIX 8 — Add two new April 2026 Movements (Golden Goose, COS)

Two new Movement entries to add to the running record. Both follow the established Movement pattern (Armani Beauty / Frank & co. / Byredo template), matching editorial register, HTML structure, and styling exactly.

---

## How to launch Claude Code (PowerShell)

Open PowerShell, navigate to the site folder, and start Claude Code:

```powershell
cd "$env:USERPROFILE\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once Claude Code launches, paste:

```
Read claude-code-add-movements-cos-goldengoose.md and proceed.
```

(Save this file to the `vitrine-site` folder before launching Claude Code.)

---

## Editorial register reminder

The Vitrine Movement voice (matching Armani Beauty / Frank & co. / Byredo pages exactly):

- Opens with the surface story (the press-release reading)
- Pivots to the structural story (the operator / format / portfolio architecture point)
- Names actors precisely (PT entity names where they exist, full brand names, mall names with floor levels)
- Has one pull quote that crystallizes the structural argument
- Closes with a forward-looking line on what it means for the market
- Ends with `— V` endmark
- Includes verified Sources block at the bottom

Both pieces below have been written in this register.

---

## STEP 1 — Survey existing Movements files

Before writing anything, view these existing files so you understand the exact pattern to match:

1. `/movements/index.html` — the listing page
2. `/movements/armani-beauty-plaza-indonesia-flagship/index.html` — the most recent Movement, use as the structural template (drop cap, pull quote, sources block, endmark, related movements section)
3. `/sitemap.xml` — to match the existing Movement entry pattern

Confirm the file layout looks as expected before proceeding. **STOP.** Wait for my OK to continue.

---

## STEP 2 — Add to /movements/index.html listing page

The two new entries go at the **top** of the `<ul class="movements__list">` (newest first, reverse-chrono).

Insert these two `<li>` blocks **above** the existing Armani Beauty entry. Match the existing markup pattern exactly (same classes, same date/category split, same dek-inside-meta structure).

```html
<li>
  <a href="/movements/cos-plaza-indonesia-first-store" class="movement">
    <div class="movement__meta">
      <span class="movement__date">April 2026</span>
      <span class="movement__category">Brand Entry · Contemporary Fashion</span>
    </div>
    <div class="movement__body">
      <h2 class="movement__headline">COS opens first Indonesian store at Plaza Indonesia under H&amp;M Group direct retail</h2>
      <p class="movement__dek">The London minimalist brand picks Plaza Indonesia for its first Indonesian flagship — operated directly by H&amp;M Group rather than through a local distributor, signalling a portfolio sophistication that few global operators currently execute in Jakarta.</p>
      <span class="movement__read">Read the note →</span>
    </div>
  </a>
</li>

<li>
  <a href="/movements/golden-goose-plaza-senayan-fioreria" class="movement">
    <div class="movement__meta">
      <span class="movement__date">April 2026</span>
      <span class="movement__category">Brand Entry · Premium Sneakers</span>
    </div>
    <div class="movement__body">
      <h2 class="movement__headline">Golden Goose opens first Indonesian store at Plaza Senayan with Fioreria concept</h2>
      <p class="movement__dek">The Italian premium sneaker house brings its signature "Fioreria Golden" co-creation format to Jakarta — the first time the floral-bottega flagship concept has been deployed in Southeast Asia.</p>
      <span class="movement__read">Read the note →</span>
    </div>
  </a>
</li>
```

**Show me the diff** of the listing page before saving. **STOP.**

---

## STEP 3 — Create detail page: /movements/cos-plaza-indonesia-first-store/index.html

Use **Armani Beauty Movement page as the structural template** (`/movements/armani-beauty-plaza-indonesia-flagship/index.html`). Copy that file exactly, then swap content as below. Do not change the styling, layout classes, breadcrumb structure, sources block format, related-movements section, or `— V` endmark.

**Content to populate:**

- **Page title:** `COS opens first Indonesian store at Plaza Indonesia — Vitrine`
- **Meta description:** `COS, the London-based premium-minimalist brand under H&M Group, opens its first Indonesian store at Plaza Indonesia Level 2 — operated directly by H&M Group rather than through a local distributor.`
- **OG title:** `COS opens first Indonesian store at Plaza Indonesia under H&M Group direct retail`
- **OG description:** Same as meta description
- **`article:published_time`:** `2026-04-17`
- **Canonical URL:** `https://vitrineasia.com/movements/cos-plaza-indonesia-first-store`
- **Breadcrumb current:** `COS at Plaza Indonesia`
- **Article meta date:** `April 2026`
- **Article meta categories (split):** `Brand Entry` · `Contemporary Fashion`
- **Article title (`<h1>`):** `COS opens first Indonesian store at Plaza Indonesia under H&M Group direct retail`
- **Article dek:** `The London minimalist brand picks Plaza Indonesia for its first Indonesian flagship — operated directly by H&M Group rather than through a local distributor, signalling a portfolio sophistication that few global operators currently execute in Jakarta.`
- **Byline:** `By <strong>Vitrine Editorial</strong> · Filed from Jakarta`

**Body** (paragraphs as `<p>` inside `.article__body`, exactly as written):

```
COS, the London-based premium-minimalist brand under H&M Group, opened its first Indonesian store at Plaza Indonesia Level 2 on 17 April 2026. The 501-square-metre flagship occupies units 062A–069A and launched with the Spring/Summer 2026 collection, presented in Seoul a fortnight earlier under the title <em>Cinematic Beauty</em>. The Jakarta opening follows recent COS launches in China and Japan and the brand's 2025 entry into India.

The structural fact worth surfacing is the operator. COS is not a MAP, Kanmo, or Time International account. It is a direct-retail H&M Group operation, the same architecture that has carried H&M and the wider portfolio in Indonesia. That choice means the parent group now operates at least two distinct brand identities at scale through the same back-office — H&M serving the mass tier through Senayan City, Plaza Indonesia, and Grand Indonesia, and COS now serving the premium-minimalist tier through Plaza Indonesia. Few global operators currently execute that brand-by-mall portfolio differentiation in Jakarta.
```

**Pull quote** (use the same `<blockquote class="article__pullquote">` markup as Armani Beauty):

```
The parent group now operates at least two distinct brand identities at scale through the same back-office — H&M serving the mass tier, and COS now serving the premium-minimalist tier through Plaza Indonesia.
```

**Closing paragraphs:**

```
The store itself is designed in-house by COS's interior team, finished externally in clay lime plaster and internally in a neutral palette grounded by terrazzo flooring, hand-tufted Kasthall wool rugs, recycled Smile Plastics shelving, and PAPER FACTOR tables crafted from naturally pigmented earth. A collaboration with the Indonesian studio A Toko surfaces in the form of the Raja Chair — a deliberate signal that the brand is reading its Indonesian audience rather than airlifting its global format unchanged.

The pricing, as reported by local press, sits notably below Singapore retail. Average top pricing begins above Rp 1.5 million.

For Plaza Indonesia, COS adds Level 2 density at the contemporary tier alongside Calvin Klein, Marks &amp; Spencer, H&amp;M, and Zara — and reasserts the mall's position as the venue of choice for the Indonesian premium-affordable consumer.
```

**Endmark:** `— V` (same `.article__endmark` markup as Armani Beauty)

**Sources block** (same `.article__sources` markup):

```
InClover Magazine; What's New Indonesia; Popbela; Wolipop (Detik); Fimela; Elle Indonesia; The Editors Club; Beautynesia; Wartasiantar; Plaza Indonesia official Instagram (@plazaindonesia). Primary verification by Vitrine, May 2026.
```

**Related movements section** at the bottom: link to the **Golden Goose** Movement (also April 2026) plus the **Armani Beauty** Movement (also April 2026). These two slot naturally as related contemporary entries.

**Show me the diff** before saving. **STOP.**

---

## STEP 4 — Create detail page: /movements/golden-goose-plaza-senayan-fioreria/index.html

Same template (Armani Beauty Movement page), same swap pattern.

- **Page title:** `Golden Goose opens first Indonesian store at Plaza Senayan with Fioreria concept — Vitrine`
- **Meta description:** `The Italian premium sneaker house Golden Goose opens its first Indonesian store at Plaza Senayan Level 1, bringing its signature "Fioreria Golden" co-creation format to Jakarta.`
- **OG title:** `Golden Goose opens first Indonesian store at Plaza Senayan with Fioreria concept`
- **OG description:** Same as meta description
- **`article:published_time`:** `2026-04-09`
- **Canonical URL:** `https://vitrineasia.com/movements/golden-goose-plaza-senayan-fioreria`
- **Breadcrumb current:** `Golden Goose at Plaza Senayan`
- **Article meta date:** `April 2026`
- **Article meta categories:** `Brand Entry` · `Premium Sneakers`
- **Article title (`<h1>`):** `Golden Goose opens first Indonesian store at Plaza Senayan with Fioreria concept`
- **Article dek:** `The Italian premium sneaker house brings its signature "Fioreria Golden" co-creation format to Jakarta — the first time the floral-bottega flagship concept has been deployed in Southeast Asia.`
- **Byline:** same as above

**Body:**

```
Golden Goose, the Italian premium sneaker house known for its lived-in aesthetic and lacquered "perfectly imperfect" finishes, opened its first Indonesian store at Plaza Senayan Level 1 on 9 April 2026. The launch was led by Giorgio Van den Borre, Golden Goose's General Manager for Asia Pacific, and follows a wave of regional openings that has expanded the brand to more than 215 stores globally — through the Americas, Europe, the Middle East, and Asia Pacific.

The store concept is what makes the entry structurally interesting. Plaza Senayan does not get a conventional sneaker boutique. It gets "Fioreria Golden" — Italian for "flower shop" — a hybrid retail format combining vintage Italian <em>bottega</em> aesthetic with live floral arrangements, antique wooden furniture, polished steel surfaces, and a central artisanal worktable inspired by traditional flower-arranging counters. At that table sit the brand's "Dreammakers" — in-house artisans who hand-personalise products with embroidery, crystals, hand-drawn illustrations, lace, premium fabrics, and inscriptions in real time, in front of the customer.
```

**Pull quote:**

```
The store is a workshop and a stage, not a shelving system. Co-creation is positioned as the central commercial act, and the personalisation table is the architectural focal point.
```

**Closing paragraphs:**

```
The structural read is about format, not brand. Premium sneakers have historically been a drop-and-go retail category in Indonesia — high-velocity SKUs through multi-brand stores, with the brand experience compressed into the physical product. Golden Goose's Indonesia entry inverts that. The store is a workshop and a stage, not a shelving system. Co-creation is positioned as the central commercial act, and the personalisation table is the architectural focal point.

For a retail market where premium sneakers have arrived primarily through MAP-distributed and multi-brand routes, Golden Goose entering directly with a flagship-as-experience format is a signal that the Indonesian consumer can now sustain narrative-led, craft-led, time-intensive retail at the premium-sneaker tier — not just at the luxury-leather-goods tier where the format originated.
```

**Endmark:** `— V`

**Sources block:**

```
Kompas.com (9 April 2026 grand opening coverage); Plaza Senayan official social channels and Twitter/X announcement; Golden Goose official store locator (Plaza Senayan Mall, Jl. Asia Afrika No. 8); Cosmopolitan Indonesia; Sugar &amp; Cream; TFL Paper; Wartasiantar. Primary verification by Vitrine, May 2026.
```

**Related movements:** COS (also April 2026) + Armani Beauty (also April 2026).

**Show me the diff** before saving. **STOP.**

---

## STEP 5 — Update /sitemap.xml

Add two new URLs with `<lastmod>2026-05-06</lastmod>` and matching priority/changefreq from the existing Movement entries:

```xml
<url>
  <loc>https://vitrineasia.com/movements/cos-plaza-indonesia-first-store</loc>
  <lastmod>2026-05-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://vitrineasia.com/movements/golden-goose-plaza-senayan-fioreria</loc>
  <lastmod>2026-05-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

Match exact pattern of existing Movement sitemap entries. **Show me the diff. STOP.**

---

## STEP 6 — Update homepage Movements section

If the homepage `/index.html` shows recent Movements (the "From the floor" section with 3 most-recent entries), update those to include the two new pieces at the top, pushing one of the older ones down. Keep the homepage section to **3 entries maximum** (per existing pattern).

Order on homepage after update (newest first):

1. **COS Plaza Indonesia** (17 April 2026) — top
2. **Golden Goose Plaza Senayan** (9 April 2026)
3. **Armani Beauty Plaza Indonesia** (8 April 2026)

The Frank & co. and Byredo Movements drop off the homepage but remain accessible via the full /movements listing page.

**Show me the diff. STOP.**

---

## STEP 7 — Local verification

After all four files are saved, restart `npm run dev` if needed and walk through:

1. **Listing page** — `http://localhost:8080/movements` — both new entries appear at the top, correct order, correct dates, dek text reads correctly
2. **COS detail page** — `http://localhost:8080/movements/cos-plaza-indonesia-first-store` — full article renders, breadcrumb works, drop cap on first paragraph, pull quote styling correct, sources block at bottom, related movements visible
3. **Golden Goose detail page** — `http://localhost:8080/movements/golden-goose-plaza-senayan-fioreria` — same checks
4. **Homepage** — `http://localhost:8080/` — From-the-floor section shows three most-recent (COS, Golden Goose, Armani Beauty)
5. **Sitemap** — `http://localhost:8080/sitemap.xml` — both URLs present
6. **Click-through** — clicking each new card on listing page opens the correct detail page
7. **Cross-links** — Related movements section on each new page actually links to the other April 2026 Movements

**STOP** for my final OK before commit.

---

## STEP 8 — Commit message proposal

When I OK the verification, propose this commit message for GitHub Desktop:

> Add Movements: COS Plaza Indonesia, Golden Goose Plaza Senayan (April 2026)

Wait for my explicit OK before I commit and push via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules

- Match the Armani Beauty Movement page exactly for HTML structure, classes, drop cap, pull quote styling, sources block format, endmark, and related-movements section
- Don't reorder or restyle existing Movements
- Don't change the editorial register of the body copy I've supplied — paste as-is, the only HTML formatting needed is wrapping each paragraph in `<p>` tags and the pull quote in `<blockquote class="article__pullquote">`
- Show me the diff at every STOP marker
- Don't push without my explicit OK

---

## Notes for Week 2 (don't act on these now)

- Plaza Senayan 30th Pearl Anniversary (25 March – 10 May 2026, peak 26 April) — queued as a possible third April Movement if we want a property/anniversary angle alongside the brand entries
- Carhartt WIP at Plaza Senayan (October 2025) and Alice + Olivia at Plaza Senayan (November 2025) remain in the back-catalog queue
- Marimekko entering Indonesia (announced 18 March 2026 by Marimekko Corp, opening summer 2026) — track for Movement when store opens
- PIM 5 (22 February 2026) and Tissot Senayan City (February 2026) remain in the back-catalog queue, paused per editorial decision to maintain April 2026 cadence
