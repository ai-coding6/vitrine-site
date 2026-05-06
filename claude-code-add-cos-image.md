# FIX 10 — Add hero image to COS Movement article

This prompt adds a single hero image to the existing `/movements/cos-plaza-indonesia-first-store/index.html` article page. The image is provided as a separate file. The `.article__hero` CSS pattern was already added to `vitrine.css` when the Golden Goose image was embedded — this prompt only adds the figure markup and moves the file into place.

---

## How to launch Claude Code (PowerShell)

Open PowerShell, navigate to the site folder, and start Claude Code:

```powershell
cd "$env:USERPROFILE\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once Claude Code launches, paste:

```
Read claude-code-add-cos-image.md and proceed.
```

(Save this file to the `vitrine-site` folder before launching Claude Code. Also save the image file `cos-article-inline-1080x945.jpg` to the `vitrine-site` folder — the prompt will tell Claude Code to move it to the right place.)

---

## STEP 1 — Move the image file into the assets directory

The image file `cos-article-inline-1080x945.jpg` is in the root of `vitrine-site/`. Move it to the proper assets location:

```
mv cos-article-inline-1080x945.jpg assets/movements/cos-plaza-indonesia-first-store/cos-hero.jpg
```

If the directory `assets/movements/cos-plaza-indonesia-first-store/` does not exist, create it first.

Verify the file is now at: `vitrine-site/assets/movements/cos-plaza-indonesia-first-store/cos-hero.jpg`

**STOP** for my OK.

---

## STEP 2 — Add image markup to the COS Movement article

Open `/movements/cos-plaza-indonesia-first-store/index.html` and locate the article body — specifically the spot right after the dek and byline, BEFORE the first body paragraph.

Insert this `<figure>` block at that location (matches the same pattern used for Golden Goose):

```html
<figure class="article__hero">
  <img 
    src="/assets/movements/cos-plaza-indonesia-first-store/cos-hero.jpg" 
    alt="A man in a charcoal unstructured blazer, untucked white shirt, cream wide-leg trousers, white sneakers, and over-ear headphones, walking through a quiet Copenhagen residential street while eating a paper-wrapped sandwich"
    width="1080"
    height="945"
    loading="eager"
  >
  <figcaption class="article__hero-caption">
    Editorial illustration · The quiet Scandinavian-London register that defines COS — premium minimalism as considered everyday wear, not occasion luxury.
  </figcaption>
</figure>
```

**Show me the diff** of the article HTML before saving. **STOP.**

---

## STEP 3 — Verify CSS is already in place

The `.article__hero` and `.article__hero-caption` CSS classes were added to `assets/vitrine.css` when the Golden Goose hero image was embedded. **No new CSS work is needed.**

Quick sanity check: open `assets/vitrine.css` and confirm the following selectors exist:
- `.article__hero`
- `.article__hero img`
- `.article__hero-caption`

If they exist, proceed. If for any reason they do NOT exist, refer to the Golden Goose prompt (`claude-code-add-golden-goose-image.md`) Step 3 for the CSS to add.

**STOP** for my OK.

---

## STEP 4 — Local verification

After the file is moved and the figure is added, restart `npm run dev` if needed and verify:

1. Open `http://localhost:8080/movements/cos-plaza-indonesia-first-store`
2. Image renders directly below the byline, above the first body paragraph
3. Image fills the article column width (680px max on desktop) and shows the full figure mid-bite walking through the Copenhagen street
4. Italic caption sits below the image in tracked Inter caps
5. On mobile (responsive view), image scales to viewport width without cropping
6. No layout breaks elsewhere — sources block, related movements, footer all render correctly
7. Image loads quickly (file is ~230 KB)

Also visually confirm Golden Goose article is unchanged (open `/movements/golden-goose-plaza-senayan-fioreria` and verify the image still appears as before — this is just a sanity check that the CSS is shared and didn't break).

**STOP** for my final OK before commit.

---

## STEP 5 — Commit message proposal

When I OK the verification, propose this commit message for GitHub Desktop:

> Add hero image to COS Movement article

Wait for my explicit OK before I commit and push via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules

- Don't change the existing article copy, structure, or styling
- Don't modify other Movement articles — this image is specific to COS only
- The CSS is already in place from the Golden Goose embed — do NOT duplicate it
- Match the existing Vitrine code conventions in `vitrine.css`
- Show me the diff at every STOP marker
- Don't push without my explicit OK

---

## After commit

Once pushed and live:

1. The COS Movement article at `https://vitrineasia.com/movements/cos-plaza-indonesia-first-store` will display the hero image
2. **Delete this prompt file** from `vitrine-site/` root: `Remove-Item claude-code-add-cos-image.md` in PowerShell
3. The Instagram post (separate file, `cos-instagram-1080x1350.png`) is for upload to Instagram only — does NOT go into the website assets folder
