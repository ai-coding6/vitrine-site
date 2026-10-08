# Add 3 Movements — Charlotte Tilbury + MCM + Marimekko (luxury, 2026)

Three new Movement entries, all luxury, all via the established Movement pattern (Armani Beauty / COS / VIVAIA template) exactly — same HTML structure, classes, drop cap, pull quote, sources block, endmark, related-movements, breadcrumb.

> All figures web-verified October 2026. Do not alter any number, operator name, date, or source. Paste body copy as-is; only wrap each paragraph in `<p>` and the pull quote in `<blockquote class="article__pullquote">`.
> TWO Movements carry an image (Charlotte Tilbury, Marimekko). MCM has none in this batch.

Newest-first order: **Charlotte Tilbury (28 Sept 2026) → MCM (9 Sept 2026) → Marimekko (Summer 2026).**

---

## How to launch Claude Code (PowerShell)

```powershell
cd "C:\Users\abdullah_asraf\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once launched, paste:

```
Read claude-code-add-movements-luxury-batch.md and proceed.
```

---

## STEP 0 — Image assets

Before running, save these three images:

- `assets/movements/charlotte-tilbury/charlotte-tilbury-boudoir.jpeg` — AI-generated Vitrine asset. NO credit line required.
- `assets/movements/mcm/mcm-store-berlin.jpeg` — **CC BY-SA 4.0; REQUIRES a visible credit line** (see STEP 4). Generic MCM store (Berlin), illustrative — not the Jakarta store.
- `assets/movements/marimekko/marimekko-archive-garments.jpg` — **CC BY-SA 2.0; REQUIRES a visible credit line** (see STEP 5).

If your Movement template stores images at a different path, use that path and tell me. List all three folders and confirm the files are present. **STOP.**

---

## STEP 1 — Survey existing Movements pattern

View these and match exactly:
1. `/movements/index.html` — the listing page
2. The most recent Movement detail page (e.g. `/movements/vivaia-pondok-indah-flagship/index.html`, else any Movement) — structural template: drop cap, pull quote, sources block, endmark, related-movements, breadcrumb, and how it renders a hero image + caption
3. `/sitemap.xml` — Movement entry pattern

Confirm the layout, then **STOP** for my OK.

---

## STEP 2 — Add three entries to /movements/index.html

Insert at the **top** of `<ul class="movements__list">` (newest first): Charlotte Tilbury, then MCM, then Marimekko. Match existing markup exactly.

```html
<li>
  <a href="/movements/charlotte-tilbury-plaza-indonesia-flagship" class="movement">
    <div class="movement__meta">
      <span class="movement__date">September 2026</span>
      <span class="movement__category">Brand Entry · Luxury Beauty</span>
    </div>
    <div class="movement__body">
      <h2 class="movement__headline">Charlotte Tilbury picks Jakarta for its first Southeast Asia flagship</h2>
      <p class="movement__dek">The British luxury beauty house opens its first standalone flagship in Southeast Asia at Plaza Indonesia — choosing Jakarta ahead of Singapore or Bangkok, and localizing it with a batik-inspired Pillow Talk Beauty Bar.</p>
      <span class="movement__read">Read the note →</span>
    </div>
  </a>
</li>

<li>
  <a href="/movements/mcm-plaza-indonesia-permanent-boutique" class="movement">
    <div class="movement__meta">
      <span class="movement__date">September 2026</span>
      <span class="movement__category">Brand Format · Luxury Fashion</span>
    </div>
    <div class="movement__body">
      <h2 class="movement__headline">MCM graduates from pop-up to a permanent Plaza Indonesia boutique</h2>
      <p class="movement__dek">The German luxury house trades years of Jakarta pop-ups for a permanent Level 2 boutique at Plaza Indonesia — a quiet but telling commitment from a brand that makes roughly 70% of its sales in Asia.</p>
      <span class="movement__read">Read the note →</span>
    </div>
  </a>
</li>

<li>
  <a href="/movements/marimekko-plaza-senayan-first-store" class="movement">
    <div class="movement__meta">
      <span class="movement__date">Summer 2026</span>
      <span class="movement__category">Brand Entry · Nordic Design</span>
    </div>
    <div class="movement__body">
      <h2 class="movement__headline">Marimekko opens first Indonesian store at Plaza Senayan under MAP Group</h2>
      <p class="movement__dek">The Finnish design house enters Indonesia at Plaza Senayan — operated by PT Panen Lestari Indonesia, the MAP Group arm behind Galeries Lafayette, SOGO and SEIBU — signalling that Jakarta's appetite for distinctive design now pulls in brands beyond the usual European luxury names.</p>
      <span class="movement__read">Read the note →</span>
    </div>
  </a>
</li>
```

**Show me the diff. STOP.**

---

## STEP 3 — Create detail page: /movements/charlotte-tilbury-plaza-indonesia-flagship/index.html

Copy the most recent Movement page exactly, then swap:

- **Page title:** `Charlotte Tilbury picks Jakarta for its first Southeast Asia flagship — Vitrine`
- **Meta description:** `Charlotte Tilbury opens its first standalone Southeast Asia flagship at Plaza Indonesia — choosing Jakarta ahead of Singapore or Bangkok, with a batik-inspired Pillow Talk Beauty Bar.`
- **OG title:** `Charlotte Tilbury picks Jakarta for its first Southeast Asia flagship`
- **OG description:** Same as meta description
- **`article:published_time`:** `2026-10-08`
- **Canonical URL:** `https://vitrineasia.com/movements/charlotte-tilbury-plaza-indonesia-flagship`
- **Breadcrumb current:** `Charlotte Tilbury at Plaza Indonesia`
- **Article meta date:** `September 2026`
- **Article meta categories (split):** `Brand Entry` · `Luxury Beauty`
- **Article title (`<h1>`):** `Charlotte Tilbury picks Jakarta for its first Southeast Asia flagship`
- **Article dek:** `The British luxury beauty house opens its first standalone flagship in Southeast Asia at Plaza Indonesia — choosing Jakarta ahead of Singapore or Bangkok, and localizing it with a batik-inspired Pillow Talk Beauty Bar.`
- **Byline:** `By <strong>Vitrine Editorial</strong> · Filed from Jakarta`

**Body** (each paragraph in `<p>`):

```
Charlotte Tilbury, the British luxury beauty house founded by the make-up artist Charlotte Tilbury in 2013, opened its first standalone flagship store in Southeast Asia at Plaza Indonesia on 28 September 2026. Built as a "Beauty Wonderland" in the brand's signature art deco and Old-Hollywood register, the store is anchored by the first Pillow Talk Beauty Bar in the region, where the brand's artists deliver its signature services.

The structural fact worth surfacing is the choice of city. Charlotte Tilbury had reached Southeast Asia before, but only through airport travel-retail kiosks in Kuala Lumpur and Bangkok. For its first full, standalone flagship in the region, the brand chose Jakarta — not Singapore, not Bangkok, not Kuala Lumpur. That is a statement about where the brand believes the regional beauty audience is largest and most influential. And rather than airlift its global format unchanged, Charlotte Tilbury localized it: the Pillow Talk Beauty Bar's walls are finished in detailing inspired by Indonesian batik, and the boudoir sets its Hollywood glamour against tropical palm, rattan and bamboo textures.
```

**Pull quote:**

```
For its first standalone flagship in Southeast Asia, Charlotte Tilbury chose Jakarta — not Singapore, not Bangkok. That choice is itself the signal.
```

**Closing paragraphs:**

```
The localization is the second signal. A batik-inspired Pillow Talk Beauty Bar is a small gesture with a clear message: the brand is reading its Indonesian audience rather than treating the market as an overflow destination — the same "localize, don't airlift" instinct Vitrine has tracked from COS's collaboration with the local studio A Toko to adidas Originals' Monez mural in Bali.

For Plaza Indonesia, it adds a marquee luxury-beauty flagship to the capital's densest luxury floor. For the market, a global house choosing Jakarta for its first regional flagship is a clearer vote of confidence than any number of counters or kiosks — it says the brand sees Indonesia not as a market to supply, but as one to lead from.
```

**Endmark:** `— V`

**Sources block:**

```
Kompas; Highend Magazine (Okezone); Dewi Magazine; DFNI; GTR Magazine; Charlotte Tilbury (corporate). Primary verification by Vitrine, October 2026.
```

**Article image** — place the Movement template's lead/hero image:
- Path: `assets/movements/charlotte-tilbury/charlotte-tilbury-boudoir.jpeg`
- Alt: `Charlotte Tilbury Pillow Talk lipstick and Magic Cream against the gold art deco Beauty Wonderland store backdrop`
- Caption: optional, descriptive only, NO credit line (AI-generated Vitrine asset). Do not imply the brand supplied it.

**Related movements:** link to **MCM at Plaza Indonesia** (September 2026) + **Marimekko at Plaza Senayan** (Summer 2026).

> Notes: "first STANDALONE flagship in SEA" is the precise claim — the brand was in SEA before via airport kiosks (KLIA, Bangkok), so this is NOT its first-ever SEA presence. No Indonesian operator is named in sources — do not invent a PT entity.

**Show me the diff. STOP.**

---

## STEP 4 — Create detail page: /movements/mcm-plaza-indonesia-permanent-boutique/index.html

Copy the most recent Movement page exactly, then swap:

- **Page title:** `MCM opens permanent Plaza Indonesia boutique after years of pop-ups — Vitrine`
- **Meta description:** `MCM, the German luxury house, graduates from pop-up to a permanent Plaza Indonesia boutique — a confidence signal in a brand that makes roughly 70% of its sales in Asia.`
- **OG title:** `MCM graduates from pop-up to a permanent Plaza Indonesia boutique`
- **OG description:** Same as meta description
- **`article:published_time`:** `2026-10-08`
- **Canonical URL:** `https://vitrineasia.com/movements/mcm-plaza-indonesia-permanent-boutique`
- **Breadcrumb current:** `MCM at Plaza Indonesia`
- **Article meta date:** `September 2026`
- **Article meta categories (split):** `Brand Format` · `Luxury Fashion`
- **Article title (`<h1>`):** `MCM graduates from pop-up to a permanent Plaza Indonesia boutique`
- **Article dek:** `The German luxury house trades years of Jakarta pop-ups for a permanent Level 2 boutique at Plaza Indonesia — a quiet but telling commitment from a brand that makes roughly 70% of its sales in Asia.`
- **Byline:** same as above

**Body:**

```
MCM, the German luxury house founded in Munich in 1976 and marking its fiftieth anniversary this year, opened a permanent boutique on Level 2 of Plaza Indonesia on 9 September 2026. The store arrives with the Autumn/Winter 2026 collection and the brand's "Domestic Geometry" anniversary campaign, its interior pairing MCM's Bauhaus design heritage with a contemporary fit-out.

The structural story is the format, not the brand. MCM is not new to Jakarta — for several years it has been present through pop-up stores at Senayan City and Plaza Indonesia. What changed is the commitment: a permanent, larger, interior-defined boutique replacing the temporary booth. That graduation is a confidence signal. A pop-up tests demand; a permanent boutique states that the demand has been proven. For a house that generates roughly 70% of its sales in Asia, locking in permanent space at Jakarta's oldest and densest luxury mall is a strategic bet, not a seasonal experiment.
```

**Pull quote:**

```
A pop-up tests demand; a permanent boutique states that the demand has been proven. MCM has moved from the first to the second in Jakarta.
```

**Closing paragraphs:**

```
It is the same move Vitrine has tracked elsewhere this year — VIVAIA converting a temporary presence into a permanent flagship, brands graduating from testing a market to committing to it. The pop-up-to-permanent path has quietly become one of the clearest signals of where Jakarta's luxury demand is real rather than merely curious.

For Plaza Indonesia, it fills a permanent Level 2 slot with an Asia-centric luxury name. For the market, it is one more data point that Jakarta has moved past the point where global houses treat it as a pop-up market — increasingly, they are planting permanent flags.
```

**Endmark:** `— V`

**Sources block:**

```
Dewi Magazine; Female Daily; MCM Worldwide (corporate); Plaza Indonesia. Primary verification by Vitrine, October 2026.
```

**Article image** — place the Movement template's lead/hero image:
- Path: `assets/movements/mcm/mcm-store-berlin.jpeg`
- Alt: `An MCM store exterior with the brand's logotype, illustrating the German luxury house`
- **Caption (REQUIRED, must be visible under the image — CC BY-SA 4.0 licence):**
  `An MCM boutique (Berlin). Photo: Tomatodaum, via Wikimedia Commons, CC BY-SA 4.0.`
- This is a GENERIC/illustrative MCM store image (Berlin, not the Jakarta boutique) — the caption says "(Berlin)" so readers aren't misled. Do NOT crop out or omit the credit line.

**Related movements:** link to **Charlotte Tilbury at Plaza Indonesia** (September 2026) + **Marimekko at Plaza Senayan** (Summer 2026).

> Note: MCM is NOT a first-Indonesia entry — it was present via pop-ups for years. The note is about the pop-up→permanent graduation; do not write it as a "first store." No local operator is named in sources — do not invent a PT entity. The image is a generic Berlin-store photo (illustrative), captioned as such.

**Show me the diff. STOP.**

---

## STEP 5 — Create detail page: /movements/marimekko-plaza-senayan-first-store/index.html

Copy the most recent Movement page exactly, then swap:

- **Page title:** `Marimekko opens first Indonesian store at Plaza Senayan — Vitrine`
- **Meta description:** `Marimekko, the Finnish design house, opens its first Indonesian store at Plaza Senayan — operated by PT Panen Lestari Indonesia (MAP Group), signalling Jakarta's appetite for design-led brands beyond the usual European luxury names.`
- **OG title:** `Marimekko opens first Indonesian store at Plaza Senayan under MAP Group`
- **OG description:** Same as meta description
- **`article:published_time`:** `2026-10-08`
- **Canonical URL:** `https://vitrineasia.com/movements/marimekko-plaza-senayan-first-store`
- **Breadcrumb current:** `Marimekko at Plaza Senayan`
- **Article meta date:** `Summer 2026`
- **Article meta categories (split):** `Brand Entry` · `Nordic Design`
- **Article title (`<h1>`):** `Marimekko opens first Indonesian store at Plaza Senayan under MAP Group`
- **Article dek:** `The Finnish design house enters Indonesia at Plaza Senayan — operated by PT Panen Lestari Indonesia, the MAP Group arm behind Galeries Lafayette, SOGO and SEIBU — signalling that Jakarta's appetite for distinctive design now pulls in brands beyond the usual European luxury names.`
- **Byline:** same as above

**Body:**

```
Marimekko, the Finnish design house known for its bold Unikko poppy print and sixty-year archive of pattern-led fashion and homeware, opened its first Indonesian store at Plaza Senayan in summer 2026. The entry runs through a franchise partnership with PT Panen Lestari Indonesia — part of MAP Group, the operator responsible for Galeries Lafayette, SOGO and SEIBU in the country, and the house that represents Loewe, Chloé, BOSS, Christian Louboutin and Alice &amp; Olivia locally.

The operator is the structural story. Marimekko did not arrive through a standalone distributor; it entered through the single largest multi-brand luxury operator in Indonesia, folding into a portfolio that already spans accessible luxury to grand department-store retail. For a brand that sits in the design-led, lifestyle tier — neither mass nor hard luxury — that placement matters: it signals the Indonesian market is now deep enough to support a Nordic design house on its own terms, and that MAP is widening its range beyond the established European fashion names into Scandinavian design.
```

**Pull quote:**

```
Jakarta's appetite for distinctive design is now strong enough to pull in a Nordic house — and established enough that the country's biggest luxury operator wanted to carry it.
```

**Closing paragraphs:**

```
Marimekko's own framing is explicit about the opportunity: the company has pointed to Jakarta's scale and a "growing appetite for interesting design" as the reason for entry, part of a 2023–2027 strategy that treats Asia-Pacific as its most important region for international growth. The brand closed 2025 with 94 stores and shop-in-shops across the region.

For Plaza Senayan, it adds a distinctive design-led tenant to the mall's upper tier. For the market, it is one more sign that Indonesian luxury retail is diversifying — moving past the standard roster of French and Italian houses toward a broader, more design-literate mix.
```

**Endmark:** `— V`

**Sources block:**

```
Marimekko Corporation announcement (March 2026); Inside Retail Asia; Jing Daily; FashionNetwork; Fibre2Fashion; FashionUnited. Primary verification by Vitrine, October 2026.
```

**Article image** — place the Movement template's lead/hero image:
- Path: `assets/movements/marimekko/marimekko-archive-garments.jpg`
- Alt: `Vintage 1960s–70s Marimekko garments on display, showing the brand's bold signature prints`
- **Caption (REQUIRED, must be visible under the image — CC BY-SA 2.0 licence):**
  `A museum display of 1960s–70s Marimekko garments, showing the brand's bold print heritage. Photo: Yolanda Arango (vladimix), via Wikimedia Commons, CC BY-SA 2.0.`
- Do NOT crop out or omit the credit line.

**Related movements:** link to **Charlotte Tilbury at Plaza Indonesia** (September 2026) + **MCM at Plaza Indonesia** (September 2026).

**Show me the diff. STOP.**

---

## STEP 6 — Update /sitemap.xml

Add three URLs with `<lastmod>2026-10-08</lastmod>`, matching existing Movement priority/changefreq:

```xml
<url>
  <loc>https://vitrineasia.com/movements/charlotte-tilbury-plaza-indonesia-flagship</loc>
  <lastmod>2026-10-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://vitrineasia.com/movements/mcm-plaza-indonesia-permanent-boutique</loc>
  <lastmod>2026-10-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://vitrineasia.com/movements/marimekko-plaza-senayan-first-store</loc>
  <lastmod>2026-10-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

(Match the exact priority existing Movement entries use — if they use 0.8, use 0.8.) **Show me the diff. STOP.**

---

## STEP 7 — Update homepage Movements section (if present)

If `/index.html` shows a recent-Movements ("From the floor") section, update to the three most recent (newest first), keeping the section to its existing max count:

1. **Charlotte Tilbury Plaza Indonesia** (September 2026) — top
2. **MCM Plaza Indonesia** (September 2026)
3. **Marimekko Plaza Senayan** (Summer 2026)

**Show me the diff if changed. STOP.**

---

## STEP 8 — Local verification

Restart `npm run dev` if needed and check:
1. **Listing** — `/movements` — all three new entries at top, correct order (Charlotte Tilbury → MCM → Marimekko), dates, dek text
2. **Charlotte Tilbury detail** — full article, breadcrumb, drop cap, pull quote, sources, related movements, hero image renders
3. **MCM detail** — same checks + hero image renders with the visible CC BY-SA 4.0 caption (generic Berlin store, captioned '(Berlin)')
4. **Marimekko detail** — same checks + hero image renders with the visible CC BY-SA 2.0 caption
5. **Sitemap** — all three URLs present
6. **Cross-links** — related-movements links on each new page resolve

**STOP** for my final OK before commit.

---

## STEP 9 — Commit message proposal

When I OK verification, propose:

> Add Movements: Charlotte Tilbury, MCM, Marimekko (luxury, 2026)

Wait for my explicit OK before committing/pushing via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules
- Match the most recent Movement page exactly for HTML structure, classes, drop cap, pull quote, sources block, endmark, related-movements, image+caption.
- Don't reorder or restyle existing Movements.
- Don't change the supplied body copy — wrap paragraphs in `<p>`, pull quote in `<blockquote class="article__pullquote">`.
- Don't alter any verified fact, operator, date, or source.
- Charlotte Tilbury: "first STANDALONE SEA flagship" (kiosks existed before); AI image, no credit. MCM: pop-up→permanent, NOT a first store; image is a GENERIC Berlin store (CC BY-SA 4.0), captioned '(Berlin)', credit must stay visible. Marimekko: CC BY-SA 2.0 credit must stay visible.
- Show me the diff at every STOP. Don't push without my explicit OK.

---

## Verification log (fact-checked October 2026)

- **Charlotte Tilbury:** British luxury beauty (founded 2013); first STANDALONE SEA flagship at Plaza Indonesia, 28 Sept 2026; "Beauty Wonderland" art-deco concept; first SEA Pillow Talk Beauty Bar with batik-inspired wall detail; prior SEA presence was airport kiosks only (KLIA with Dimensi Eksklusif; Bangkok Suvarnabhumi with King Power). (Kompas, Highend/Okezone, Dewi, DFNI, GTR.)
- **MCM:** German luxury house (Munich, 1976), 50th anniversary 2026; permanent boutique at Plaza Indonesia Level 2 opened 9 Sept 2026, graduating from years of pop-ups (Senayan City, Plaza Indonesia); AW2026 "Domestic Geometry" campaign; Bauhaus-heritage interior; ~70% of sales in Asia. NOT a first entry. (Dewi Magazine, Female Daily, MCM Worldwide.)
- **Marimekko:** first Indonesia store at Plaza Senayan; franchise partner PT Panen Lestari Indonesia (MAP Group — runs Galeries Lafayette, SOGO, SEIBU; represents Loewe, Chloé, BOSS, Louboutin, Alice + olivia); announced March 2026, opening early summer 2026; 94 APAC stores end-2025; 2023–2027 Asia-growth strategy. (Marimekko Corp, Jing Daily, Fibre2Fashion, Inside Retail Asia, FashionNetwork, FashionUnited.)
- Connective thread: three international houses committing to Jakarta in one window — a British beauty house choosing it for a regional-first flagship, a German house going permanent, and a Nordic house entering — all evidence of Jakarta's luxury market maturing.
