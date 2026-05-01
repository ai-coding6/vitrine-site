# Vitrine — Brand

> **Status:** Locked.
> This document is the source of truth for any brand-adjacent decision on Vitrine. Future Claude Code sessions, contributors, and designers should treat the decisions below as canonical. Any change requires explicit approval from the editor.

---

## 1. The logo

The canonical Vitrine logo is the **wordmark**.

- The word **Vitrine**, set in **Fraunces** (display weight, regular). Fallback: **Playfair Display**, then Georgia, serif.
- Set in **cream (`#F5EFE0`)** on an **emerald (`#0F3D2E`)** background.
- A **faint brass (`#B08A3A`) hairline frame at 32px inset** from the canvas edge.
- **No tagline inside the logo.** "Reading Asian retail." is the brand line; it lives next to the logo, never inside it.
- **No "V" monogram.** There is no abbreviated mark, no avatar mark, no app-icon variant. The wordmark *is* the logo.

### Master files

All logo source files live in `/assets/brand/`:

| File | Purpose |
| :-- | :-- |
| `vitrine-wordmark.svg`         | Master source. Clean wordmark, no tagline. Use this for any new export. |
| `vitrine-wordmark-512.png`     | 512×512 raster. Substack avatar; OG image fallback. |
| `vitrine-wordmark-1024.png`    | 1024×1024 raster. High-resolution use, future formats. |

If a new size or format is needed, export from the master SVG. Do not re-draw.

### Favicon system — two visual states

The favicon set has **two visual states** by design:

- **Small sizes (`favicon.ico`, `favicon-16.png`, `favicon-32.png`)** use a **"V" monogram** — a single cream Fraunces "V" centred on the emerald ground with the brass hairline frame. The full wordmark is illegible at 16–32px; the monogram reads cleanly in browser tabs and bookmarks.
- **Large sizes (`favicon-180.png`, `favicon-192.png`, `favicon-512.png`)** use the **full wordmark** (rendered from `vitrine-wordmark.svg`). Apple touch icon, Android home-screen, and PWA tiles all render at sizes where the wordmark works.

This is the only sanctioned use of a "V" mark on its own — and it exists *strictly* because legibility requires it at small raster sizes. The V monogram is **not** the logo and is **not** to be used anywhere outside the favicon set. Anywhere a logo is needed at any size where the wordmark fits, use the wordmark (see §1).

Favicons are generated programmatically by `scripts/build-favicons.js`. Re-run it (`node scripts/build-favicons.js`) whenever the master wordmark SVG changes.

---

## 2. Palette

| Token         | Hex       | Use |
| :--           | :--       | :-- |
| `--emerald`   | `#0F3D2E` | Primary brand. Wordmark, headlines, primary buttons, report cover ground. |
| `--oxblood`   | `#5C1E1E` | Secondary editorial. Pull-quotes. |
| `--brass`     | `#B08A3A` | Accent. Hairlines, eyebrows, ornaments, dividers. |
| `--cream`     | `#F5EFE0` | Page background. Logo mark on emerald. |
| `--cream-warm`| `#EFE7D2` | Derived background for footer, related blocks. |
| `--charcoal`  | `#1A1A1A` | Body text. |
| `--ink-soft`  | `#4A4A4A` | Secondary text, captions, deks. |
| `--rule`      | `#CCCCCC` | Neutral dividers (e.g. masthead underline). |

The CSS custom properties of the same name in `assets/vitrine.css` are the canonical implementation.

---

## 3. Typography

| Role     | Family           | Notes |
| :--      | :--              | :-- |
| Display  | **Fraunces**     | Wordmark, page titles, article titles, headings. Optical size 144 for display, 60 for sub-display. |
| Body     | **Source Serif 4** | Long-form copy, deks, briefings. Italics carry editorial standfirsts. |
| UI       | **Inter**        | Eyebrows, navigation, buttons, meta. Uppercase + tracked for labels. |

Fallback stacks are defined in `assets/vitrine.css` (`--display`, `--body`, `--ui`).

---

## 4. Brand line

**"Reading Asian retail."**

- Italic, body serif (Source Serif 4).
- Sits next to the wordmark in editorial layouts (hero, footer); never inside the logo mark.
- Always written with the period.

---

## 5. Visual rules

- **Cream background, never white.** Page ground is `--cream`. White is reserved for nothing.
- **No rounded corners.** Every edge is square. Buttons, inputs, cover frames, cards — all square.
- **No drop shadows.** Depth is implied by hairlines and inset frames, not shadows.
- **No emoji.** Not in body, not in nav, not in buttons. Editorial ornaments use the brand glyphs (`◆`, brass hairlines).
- **Brass hairlines as section dividers.** Section breaks, eyebrow underlines, list separators, and pull-quote borders all use brass at full or low opacity. Neutral grey (`--rule`) is reserved for the masthead underline.

> **Exception:** report cover internal hairline frames use cream at 18% opacity rather than brass; warmer reading on dark emerald backgrounds. This is canonical for the cover artwork specifically.

---

## 6. Insights

Insights are long-form data and brand analysis pieces, produced as six-slide image carousels and presented on-site as a vertical visual stack.

### Assets

- Each piece lives in its own folder under `assets/insights/<slug>/`.
- Six slides per piece, named `slide-1-cover.png` through `slide-6-<topic>.png`. The trailing `<topic>` word varies per slide (e.g. `slide-2-pulse.png`, `slide-2-collection.png`).
- Slide artwork is rendered at **1080×1350** (portrait 4:5). HTML references the natural pixel dimensions on each `<img>` and lets CSS scale to container width.

### Page patterns

- **Listing — `insights/index.html`.** Front-page editorial index, not a card grid. Six entries stacked top-to-bottom in reverse-chrono. Each entry is a generous full-width row where the **title and the publish date are the two dominant elements**; cover thumbnail is a 320px accent floated to the right (stacks below on mobile). Brass hairline dividers between entries; `padding-block: 4rem` desktop / `2.5rem` mobile.
- **Detail — `insights/<slug>/index.html`.** Layout 1, pure visual stack. Site nav → breadcrumb (`Insights → Issue Nº 0X`) → minimal text hero (eyebrow, plain-text title, one-line standfirst — for SEO and accessibility) → six slide images, centered, max ~720px container width → footer block (sources line + back-to-Insights + subscribe link) → site footer. **No carousel/slider JS.** Slides stand on their own and the page is deliberately a vertical scroll.

### Italic accents in titles

Listing titles use the `.accent` class (italic Fraunces, brass) to mark the editorial fragment in each title — `<em class="accent">…</em>`.

### The six confirmed pieces

| Issue | Slug | Date |
| :-- | :-- | :-- |
| Nº 06 | `kanmo-luxury-push`        | 15 May 2026 |
| Nº 05 | `modest-fashion-crown`     | 08 May 2026 |
| Nº 04 | `uniqlo-sport-utility-era` | 01 May 2026 |
| Nº 03 | `commerce-speed-of-now`    | 22 April 2026 |
| Nº 02 | `ramadan-lebaran-numbers`  | 12 April 2026 |
| Nº 01 | `winning-indonesia`        | 15 March 2026 |

---

## 7. Authority and change

This document is canonical. Any visual or brand-adjacent decision — new logo treatment, additional palette colour, alternate type pairing, deviation from any rule above — requires explicit approval from the editor before it lands in the codebase. When in doubt, this file wins.
