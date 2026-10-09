# Add promo video as the right column of the homepage hero

Convert the homepage hero into a two-column layout: existing editorial text on the LEFT, a looping promo video on the RIGHT. This is the video step only — "Latest from Vitrine" and "Market Pulse" come later. Do NOT touch the ticker bands or header/nav.

---

## How to launch Claude Code (PowerShell)

```powershell
cd "C:\Users\abdullah_asraf\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once launched, paste:

```
Read claude-code-add-hero-video.md and proceed.
```

**Asset prerequisite — save before running:**
- `assets/video/vitrine-promo.mp4` — the 30-sec promo (H.264, muted, web-compressed, ≤~10MB)
- `assets/video/vitrine-promo-poster.jpg` — a still poster frame (shown before the video loads)

If the poster isn't ready, note it — use a solid emerald (`#0A1F18`) placeholder background on the video element until a poster is added.

---

## STEP 0 — Asset check

Confirm these exist:
- `assets/video/vitrine-promo.mp4`
- `assets/video/vitrine-promo-poster.jpg` (or note it's pending)

Report the MP4's file size. If it's over ~10MB, flag it — it should be compressed before going live (it will slow first paint otherwise). Adapt paths if the site uses a different assets convention. **STOP.**

---

## STEP 1 — Survey the hero

Open `/index.html` and the stylesheet. Report:
1. The hero section markup — its container and the kicker / "Vitrine" wordmark / "Reading Asian retail." / standfirst elements, and how it's currently laid out.
2. Whether the hero content is inside a width-constrained inner wrapper (so we add the two-column split inside that same wrapper, keeping alignment with the rest of the page).
3. Where the CSS lives and whether brand colors exist as CSS variables.

**STOP** for my OK before changing anything.

---

## STEP 2 — Restructure the hero into text-left / video-right

Wrap the existing hero content in a left column, and add the video as a right column.

- **Left column** (`.hero__text`): the existing kicker, "Vitrine" wordmark, "Reading Asian retail.", and standfirst — UNCHANGED content, type, and color.
- **Right column** (`.hero__media`): the looping video:

```html
<div class="hero__media">
  <video
    class="hero__video"
    autoplay muted loop playsinline preload="metadata"
    poster="assets/video/vitrine-promo-poster.jpg"
    aria-label="Vitrine — a 30-second introduction">
    <source src="assets/video/vitrine-promo.mp4" type="video/mp4">
  </video>
</div>
```

**CSS** (adapt selectors/tokens to the site; reuse brand variables if they exist):

```css
.hero__inner{                 /* the hero's existing inner wrapper */
  display:flex;
  align-items:center;
  gap:clamp(32px,5vw,72px);
}
.hero__text{ flex:1 1 52%; min-width:0; }
.hero__media{ flex:1 1 48%; min-width:0; }
.hero__video{
  width:100%;
  height:auto;
  display:block;
  border-radius:10px;
  border:1px solid rgba(176,138,58,.35);       /* brass hairline */
  box-shadow:0 20px 50px rgba(10,31,24,.18);    /* soft emerald shadow */
  background:#0A1F18;                            /* fallback before poster loads */
}
/* stack on tablet/mobile: text first, video full-width below */
@media (max-width:1023px){
  .hero__inner{ flex-direction:column; align-items:stretch; gap:36px; }
  .hero__media{ order:2; }
  .hero__video{ max-height:60vh; object-fit:cover; }
}
```

Rules:
- The video MUST keep `autoplay muted loop playsinline` — all four are required for silent autoplay to work on every browser including iOS Safari. Do not remove any.
- Keep the hero's vertical spacing consistent with the `--section-y` rhythm set earlier.
- If the hero's existing inner wrapper has a different class name, apply the fl- layout to that wrapper rather than inventing `.hero__inner` — match the real markup.
- Don't shrink or restyle the left-column text; only wrap it in the left column.

**Show me the diff AND describe the before/after layout. STOP.**

---

## STEP 3 — Local verification

Run `npm run dev`, open `http://localhost:8080/`:
1. Desktop: hero shows text left, video right, vertically aligned, on the first screen. Video autoplays, is muted (no sound), and loops.
2. The poster frame shows instantly before the video loads (no blank/black flash). If poster is pending, the emerald fallback shows — acceptable.
3. Mobile (<1024px): hero stacks — text first, video full-width below, no overflow.
4. Tickers + header UNCHANGED; section spacing consistent.
5. Note the MP4 load time / size; flag if it feels heavy.

**STOP** for my final OK before commit.

---

## STEP 4 — Commit message proposal

When I OK verification, propose:

> Add looping promo video to homepage hero (right column)

Wait for my explicit OK before committing/pushing via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules
- Do NOT modify the ticker bands or header/nav.
- Keep `autoplay muted loop playsinline` on the video — all required for autoplay.
- Don't change the left-column hero text content, type, or color — only wrap it in a column.
- Match the site's existing inner-wrapper class, CSS location, and brand tokens.
- Show me the diff at every STOP. Don't push without my explicit OK.
```
