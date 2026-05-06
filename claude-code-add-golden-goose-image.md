# FIX 9 — Add hero image to Golden Goose Movement article

This prompt adds a single hero image to the existing `/movements/golden-goose-plaza-senayan-fioreria/index.html` article page. The image is provided as a separate file. This treatment establishes the image-handling pattern that will be reused for every future Movement article that has imagery.

---

## How to launch Claude Code (PowerShell)

Open PowerShell, navigate to the site folder, and start Claude Code:

```powershell
cd "$env:USERPROFILE\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once Claude Code launches, paste:

```
Read claude-code-add-golden-goose-image.md and proceed.
```

(Save this file to the `vitrine-site` folder before launching Claude Code. Also save the image file `golden-goose-article-inline-1080x945.jpg` to the `vitrine-site` folder — the prompt will tell Claude Code to move it to the right place.)

---

## STEP 1 — Move the image file into the assets directory

The image file `golden-goose-article-inline-1080x945.jpg` is in the root of `vitrine-site/`. Move it to the proper assets location:

```
mv golden-goose-article-inline-1080x945.jpg assets/movements/golden-goose-plaza-senayan-fioreria/golden-goose-hero.jpg
```

If the directory `assets/movements/golden-goose-plaza-senayan-fioreria/` does not exist, create it first.

Verify the file is now at: `vitrine-site/assets/movements/golden-goose-plaza-senayan-fioreria/golden-goose-hero.jpg`

**STOP** for my OK.

---

## STEP 2 — Add image markup to the Golden Goose Movement article

Open `/movements/golden-goose-plaza-senayan-fioreria/index.html` and locate the article body — specifically the spot right after the dek and byline, BEFORE the first body paragraph.

Insert this `<figure>` block at that location:

```html
<figure class="article__hero">
  <img 
    src="/assets/movements/golden-goose-plaza-senayan-fioreria/golden-goose-hero.jpg" 
    alt="A woman in cream linen and white canvas sneakers walks past a sunlit Italian neighbourhood market, with crates of lemons and peaches and sunflowers in the background"
    width="1080"
    height="945"
    loading="eager"
  >
  <figcaption class="article__hero-caption">
    Editorial illustration · The Italian piazza-and-bottega aesthetic that frames Golden Goose's "Fioreria Golden" Indonesian flagship.
  </figcaption>
</figure>
```

**Show me the diff** of the article HTML before saving. **STOP.**

---

## STEP 3 — Add CSS for the hero image

Open `assets/vitrine.css` and add the following CSS at the end of the file (or in the appropriate section if there's a clear `Article` styling section):

```css
/* ============================================
   Article hero image — used in Movement detail pages
   ============================================ */

.article__hero {
  margin: 2.5rem 0 3rem 0;
  width: 100%;
  max-width: var(--measure, 680px);
}

.article__hero img {
  width: 100%;
  height: auto;
  display: block;
  border: 0.5px solid var(--rule, #CCCCCC);
}

.article__hero-caption {
  font-family: var(--ui, 'Inter', sans-serif);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: var(--ink-soft, #4A4A4A);
  margin-top: 0.75rem;
  font-style: italic;
  text-align: left;
  max-width: var(--measure, 680px);
}

@media (max-width: 768px) {
  .article__hero {
    margin: 2rem 0 2.5rem 0;
  }
  .article__hero-caption {
    font-size: 0.7rem;
  }
}
```

**Show me the diff** of `vitrine.css` before saving. **STOP.**

---

## STEP 4 — Local verification

After both files are saved, restart `npm run dev` if needed and verify:

1. Open `http://localhost:8080/movements/golden-goose-plaza-senayan-fioreria` 
2. Image renders directly below the byline, above the first body paragraph
3. Image fills the article column width (680px max on desktop) and shows the full figure mid-stride at the Italian market with white canvas sneakers visible
4. Italic caption sits below the image in tracked Inter caps, ink-soft color
5. On mobile (responsive view), image scales to viewport width without cropping
6. No layout breaks elsewhere in the article — sources block, related movements, footer all still render correctly
7. Image loads quickly (file is 261 KB)

**STOP** for my final OK before commit.

---

## STEP 5 — Commit message proposal

When I OK the verification, propose this commit message for GitHub Desktop:

> Add hero image to Golden Goose Movement article

Wait for my explicit OK before I commit and push via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules

- Don't change the existing article copy, structure, or styling
- Don't modify other Movement articles — this image is specific to Golden Goose only
- The CSS additions are intentional — they establish a reusable `.article__hero` pattern that future Movement articles can use when imagery becomes available
- Match the existing Vitrine code conventions in `vitrine.css` (CSS variable usage, comment headers, mobile-first responsive)
- Show me the diff at every STOP marker
- Don't push without my explicit OK

---

## Notes for Week 2 (don't act on these now)

- Same `.article__hero` pattern can be applied to any other Movement when imagery is ready (Armani Beauty, Frank & co., Byredo, etc.)
- For COS Movement specifically — image is being prepared separately and will follow this same pattern
- For the listing page (`/movements/index.html`), individual cards do NOT need imagery yet — keep listing visually consistent until a full visual upgrade in Week 2
