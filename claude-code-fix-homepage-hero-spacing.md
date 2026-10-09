# Fix homepage — hero spacing, section rhythm, and masthead date

Surgical homepage fixes. **Do NOT touch the two ticker bands or the header/nav** — they are correct and approved. This task only: (1) raises the hero into the sight line by reclaiming dead space, (2) keeps sections below in consistent rhythm, (3) fixes the stale masthead date (and makes it auto-update).

---

## How to launch Claude Code (PowerShell)

```powershell
cd "C:\Users\abdullah_asraf\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once launched, paste:

```
Read claude-code-fix-homepage-hero-spacing.md and proceed.
```

---

## STEP 1 — Diagnose the hero spacing

Open `/index.html` and its stylesheet. Inspect the vertical stack from the bottom of the **global ticker band** down to the **hero wordmark ("Vitrine")**. Identify exactly what is creating the large empty gap and the hero's low position — it will be one or more of:
- the hero `<section>`'s `padding-top` / `margin-top`
- a spacer element or empty container between the ticker and the hero
- a `min-height: 100vh` (or similar) on the hero that forces it to fill the screen and center its content low

Report what you found — the specific selectors and current values — **before changing anything. STOP** for my OK.

---

## STEP 2 — Raise the hero into the sight line

Apply these corrections (adjust the exact numbers to the values you found, these are the intended outcome):

1. **Remove/shrink the dead gap** between the global ticker band and the hero. If it's hero `padding-top`, cut it by roughly 40–55%. If it's a spacer element, reduce or remove it.
2. **Target position:** the "Vitrine" wordmark should sit around the **upper-middle of the first screen**, with the kicker line ("AN INDEPENDENT TRADE PUBLICATION · VOLUME ONE · 2026") visible above it and the standfirst ("Reading Asian retail." + the paragraph) visible **without scrolling** on a standard desktop (≈900px tall viewport).
3. **Keep comfortable breathing room** — do NOT cram the hero directly against the ticker. Intentional whitespace, just not the current excess.
4. If the hero uses `min-height: 100vh`, reduce it (e.g. to `auto` with sensible padding, or `min-height: calc(100vh - [header+ticker height])`) so its content isn't vertically centered too low.

**Show me the diff AND describe the before/after hero position. STOP.**

---

## STEP 3 — Confirm section rhythm below the hero

Check the sections beneath the hero. Confirm they use a **consistent vertical spacing system** (a repeating section padding value / spacing token) so that when the hero tightens, everything below shifts up uniformly without gaps opening or overlapping.

- If spacing is consistent: confirm it, no change needed.
- If any section uses one-off hand-tuned margins that now look uneven after the hero moved: flag them and propose normalizing to the common value.

**Report findings; show a diff only if normalization is needed. STOP.**

---

## STEP 4 — Fix the masthead date (make it auto-update)

The top strip currently reads **"EDITION I · MAY 2026"** — stale. Replace the hardcoded month/year with a **dynamic current date** so it never goes stale again.

Find the top-strip element (left side, currently showing `EDITION I · MAY 2026`). Keep the "EDITION I ·" prefix (or whatever edition label exists) and make the **month + year dynamic**:

```html
<!-- in the top strip, left slot -->
<span class="masthead__date">EDITION I · <span id="masthead-month-year"></span></span>
```

```html
<!-- small inline script, before </body> -->
<script>
  (function () {
    var el = document.getElementById('masthead-month-year');
    if (el) {
      var now = new Date();
      el.textContent = now.toLocaleString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
    }
  })();
</script>
```

This renders e.g. **"OCTOBER 2026"** and updates automatically every month.

- If the site is statically built / you'd rather not use JS, instead just hardcode it to **"OCTOBER 2026"** for now and tell me — I'll decide.
- Preserve the exact styling/letter-spacing of the existing date text.

> Optional, ask me first: the strip also says "EDITION I" and the hero kicker says "VOLUME ONE". Given the archive now has many Movements and Insights, consider whether "Edition I / Volume One" still fits. **Do not change these without my explicit OK** — just flag it.

**Show me the diff. STOP.**

---

## STEP 5 — Local verification

Run `npm run dev` and check `http://localhost:8080/` at a standard desktop size (~1440×900):
1. On first load (no scroll), you can see: the ticker bands, the hero kicker, the "Vitrine" wordmark around upper-middle, "Reading Asian retail.", and at least the first line of the standfirst paragraph.
2. The gap between the ticker and hero looks intentional, not empty/dead.
3. Sections below the hero flow with even spacing — no new gaps or overlaps.
4. The masthead date reads the current month/year (e.g. "OCTOBER 2026").
5. The tickers and header are UNCHANGED.
6. Check mobile width (~390px): hero still readable and reasonably high; nothing overlaps. (Header nav horizontal-scroll is a separate known issue — leave it.)

**STOP** for my final OK before commit.

---

## STEP 6 — Commit message proposal

When I OK verification, propose:

> Tighten homepage hero spacing, normalize section rhythm, auto-update masthead date

Wait for my explicit OK before committing/pushing via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules
- Do NOT modify the two ticker bands or the header/nav.
- Do NOT change "EDITION I" or "VOLUME ONE" wording without explicit OK — only the month/year.
- Keep existing fonts, colors, letter-spacing; this is spacing + a date, not a restyle.
- Make the date dynamic (JS) unless the build can't support it — then hardcode "OCTOBER 2026" and flag it.
- Show me the diff at every STOP. Don't push without my explicit OK.
