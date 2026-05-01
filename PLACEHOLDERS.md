# Placeholders

Tracking unfilled content across the site. Each entry is a `[PLACEHOLDER: …]` token in the source, waiting for real copy or assets.

---

## Brand assets

- **Logo — LOCKED.** The canonical logo is the Vitrine wordmark. Master files live in `/assets/brand/`:
  - `vitrine-wordmark.svg` — master source
  - `vitrine-wordmark-512.png` — Substack avatar / OG fallback
  - `vitrine-wordmark-1024.png` — high-resolution
  See [`BRAND.md`](BRAND.md) for the full brand spec. No further logo decisions are open.

---

## Copy placeholders

### `/about/index.html`
- `about-page-standfirst` — 1–2 sentence editorial standfirst (~30–40 words).
- `about-mission-paragraphs` — 3–5 paragraphs covering what Vitrine is, why it exists, and who it's for.
- `principle-i-body` through `principle-v-body` — five short paragraphs (~50–80 words each) on attribution, naming, independence, audience, corrections.
- `methodology-paragraph` — single ~120-word paragraph on the five-tier source hierarchy.
- `editor-name-and-title` — editor's name and title.
- `editor-bio` — ~80-word italic bio in third person.
- `editorial-policies-link` — link target for the full editorial policies page.

### `/reports/index.html`
- `reports-index-standfirst` — 1–2 sentence editorial standfirst (~30–40 words).
- `ilrm-2026-cover-artwork` — replace cover block with real cover art when design pass completes.
- `ilrm-2026-standfirst` — italic one-line dek (~25 words).
- `ilrm-2026-summary` — 2–3 sentence summary (~60 words).

### `/reports/the-indonesian-luxury-retail-map-2026/index.html`
- `ilrm-2026-cover-artwork` — replace cover block with real cover art.
- `editor-name-and-title` — editor name in byline.
- `ilrm-2026-publication-date` — exact publication date.
- `ilrm-2026-page-standfirst` — ~40-word editorial introduction.
- `ilrm-2026-methodology-note` — first draft in place; pending editorial review.

---

## Asset placeholders

- `/assets/reports/ilrm-2026-placeholder.pdf` — placeholder PDF; replace with the real ILRM 2026 PDF on publication (May 2026).
- `editor-portrait--placeholder` (in `/about/index.html`) — replace placeholder block with the editor's real portrait image.

---

## Deferred work

- **`briefing.vitrineasia.com` redirect** — currently `/subscribe/index.html` and other "Already subscribed?" / briefing-archive references link to `https://vitrineasia.substack.com`. When the custom domain is wired (DNS + Substack custom-domain config), update those links to `https://briefing.vitrineasia.com`. Mark: `redirect-target-future`.
- **AI-bot opt-out headers (GPTBot, anthropic-ai, ClaudeBot, CCBot, …)** — `robots.txt` currently allows all UAs. AI-training opt-out is deferred to the Vercel deploy step where it'll be served as response headers (`X-Robots-Tag`, plus per-bot `User-agent` blocks if added to `robots.txt` later). Decide alongside the rest of the security/policy header set when the deploy config lands.
- **Per-page OG images** — every page currently uses `/assets/brand/vitrine-wordmark-1024.png` as the OG fallback. Replace with bespoke per-page OG images (1200×630 ideally, since most cards are `summary_large_image`) when the design pass for social cards lands.
