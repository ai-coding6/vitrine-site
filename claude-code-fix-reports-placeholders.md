# FIX 12 — Replace two placeholder blocks on the Reports page

The `/reports/index.html` page currently displays two unfilled placeholder blocks:

1. `[PLACEHOLDER: ilrm-2026-standfirst — italic one-line dek matching the homepage card. ~25 words.]`
2. `[PLACEHOLDER: ilrm-2026-summary — 2–3 sentence summary of what the report covers and what kind of reader benefits. Place-aware, names actors, no marketing voice. ~60 words.]`

Both need to be replaced with the locked editorial copy below.

---

## How to launch Claude Code (PowerShell)

```powershell
cd "$env:USERPROFILE\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once Claude Code launches, paste:

```
Read claude-code-fix-reports-placeholders.md and proceed.
```

(Save this file to the `vitrine-site` folder before launching Claude Code.)

---

## Editorial register reminder

The Reports page is the front door of the inaugural report — `The Indonesian Luxury Retail Map 2026`. The standfirst is the italic one-line dek under the H1 title. The summary is the body copy beneath the standfirst, sitting above the "Read the Report" button. Both must read in the established Vitrine editorial voice — sourced, named, restrained, no marketing flourish.

---

## STEP 1 — Survey the file

Before editing, view `/reports/index.html` and locate:

1. The exact placeholder block for `ilrm-2026-standfirst`. Note its surrounding HTML element (likely a `<p>` with an italic class, or `<em>`).
2. The exact placeholder block for `ilrm-2026-summary`. Note its surrounding HTML element (likely one or more `<p>` tags).
3. Confirm both placeholders sit between the H1 title (`The Indonesian Luxury Retail Map 2026`) and the "Read the Report" button.
4. Note the existing CSS classes used on the surrounding paragraph elements — those classes stay; only the inner text changes.

Also briefly check:
- `/index.html` — the homepage card for the inaugural report. Look at the dek text on the homepage card. The new standfirst on the Reports page should rhyme with (but not be identical to) the homepage card dek. We're not touching the homepage in this fix; just confirming the standfirst doesn't contradict it.
- `PLACEHOLDERS.md` — find the two entries for `ilrm-2026-standfirst` and `ilrm-2026-summary`. Note their current "Status" fields.

Report back what you found before proceeding. **STOP.**

---

## STEP 2 — Replace the standfirst placeholder

Find this block in `/reports/index.html`:

```
[PLACEHOLDER: ilrm-2026-standfirst — italic one-line dek matching the homepage card. ~25 words.]
```

Replace the placeholder text (and only the placeholder text — keep the surrounding HTML element and its classes intact) with:

```
A reading of the seven-channel architecture that now defines luxury retail in Indonesia — and what it reveals about who reaches the consumer first.
```

Notes:
- The surrounding element (likely `<p class="...italic...">` or `<p><em>...</em></p>`) stays as-is. Only the inner text changes.
- Use a real em-dash character (`—`, U+2014), not two hyphens.
- Do not wrap the text in additional `<em>` or `<i>` tags if the existing element already produces italic via CSS — that would double-italicise. If the existing element relies on inline `<em>` for italic, keep that wrapping.

**Show me the diff** before saving. **STOP.**

---

## STEP 3 — Replace the summary placeholder

Find this block in `/reports/index.html`:

```
[PLACEHOLDER: ilrm-2026-summary — 2–3 sentence summary of what the report covers and what kind of reader benefits. Place-aware, names actors, no marketing voice. ~60 words.]
```

Replace the placeholder text with this three-sentence summary (60 words):

```
A first-principles read of how international luxury currently distributes in Indonesia, structured around the seven channels — and the operators behind each. MAP, Kanmo, Time International, LUXASIA, H&M Group, and the rising direct-retail tier all named, with the mall geography and partnership architecture mapped. For anyone making investment, partnership, or expansion calls into the Indonesian market.
```

Notes:
- This may need to be split across two `<p>` tags if the existing placeholder occupied two paragraphs. If the placeholder is in a single block, keep the whole summary as a single `<p>`. If the placeholder was split across two paragraphs, split the summary at the natural break (after "operators behind each.") so:
  - Paragraph 1: `A first-principles read of how international luxury currently distributes in Indonesia, structured around the seven channels — and the operators behind each.`
  - Paragraph 2: `MAP, Kanmo, Time International, LUXASIA, H&M Group, and the rising direct-retail tier all named, with the mall geography and partnership architecture mapped. For anyone making investment, partnership, or expansion calls into the Indonesian market.`
- Use the actual ampersand entity `&amp;` in `H&M Group` (HTML encoding).
- Use a real em-dash character (`—`).

**Show me the diff** before saving. **STOP.**

---

## STEP 4 — Update PLACEHOLDERS.md

Open `PLACEHOLDERS.md` in the `vitrine-site/` root. Find the two entries:

- `ilrm-2026-standfirst`
- `ilrm-2026-summary`

Update both entries' `Status` field from `placeholder` (or whatever it currently reads) to `live`. Do NOT delete the entries — keep them for project history. Just change the status.

If the file format is something different than what I assumed, ask before improvising.

**Show me the diff** before saving. **STOP.**

---

## STEP 5 — Local verification

After all three files are saved (`/reports/index.html`, `PLACEHOLDERS.md`), restart `npm run dev` if needed and verify:

1. Open `http://localhost:8080/reports/`
2. The H1 title still reads `The Indonesian Luxury Retail Map 2026`
3. The standfirst directly below the H1 now reads in italic: *"A reading of the seven-channel architecture that now defines luxury retail in Indonesia — and what it reveals about who reaches the consumer first."*
4. The summary below the standfirst reads in regular body type: starting *"A first-principles read of how international luxury currently distributes in Indonesia..."* and ending *"...calls into the Indonesian market."*
5. No `[PLACEHOLDER: ...]` strings visible anywhere on the rendered page
6. The `Read the Report` button still appears below the summary
7. The `≈50 pages · free · PDF · published May 2026` meta line still appears below the button
8. The cover image on the left side of the page still renders correctly
9. On mobile (responsive view, ~360px width), the layout still stacks correctly
10. The Reports listing page or any other page that links to `/reports/` is unaffected

**STOP** for my final OK before commit.

---

## STEP 6 — Commit message proposal

When I OK the verification, propose this commit message for GitHub Desktop:

> Replace ILRM standfirst and summary placeholders with live editorial copy

Wait for my explicit OK before I commit and push via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules

- Don't restyle, refactor, or "improve" the Reports page beyond replacing the two placeholders
- Don't change the H1, the cover image, the "Read the Report" button, the meta line, or any other element
- Don't touch the homepage inaugural-report card in this fix — that's a separate task if needed
- Don't introduce new fonts, colors, or CSS rules
- Use real em-dash characters and proper HTML entities (`&amp;`)
- Show me the diff at every STOP marker
- Don't push without my explicit OK

---

## Notes for Week 2 (don't act on these now)

- The homepage inaugural-report card may have its own dek that's slightly different from this Reports page standfirst. That's fine — the homepage card is a teaser; the Reports page standfirst is the proper subhead. They should rhyme but don't need to be identical.
- Other pages may still have placeholders. Run `grep -rn "PLACEHOLDER:" --include="*.html" .` from the `vitrine-site/` root to surface all remaining ones, then we tackle them in batches.
- The cover image (the dark green portrait card on the left of the Reports page) currently uses the subtitle "A reading of the seven-channel architecture" — that matches the new standfirst's "A reading of the seven-channel architecture..." opening. Editorially consistent. Don't change either.
