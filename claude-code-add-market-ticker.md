# Add TWO Market Watch tickers to the Vitrine homepage (TradingView embeds)

Add two slim, branded stock ticker bands to the homepage, stacked directly under the site header, above the hero:
1. **Regional** — "Retail & Luxury · IDX · SGX" (Indonesia + Singapore)
2. **Global** — "Global Retail & Luxury" (LVMH, Hermès, Nike, Amazon, Alibaba, etc.)

Both use TradingView's free Ticker Tape widget (attribution must stay visible — do not remove it).

> This touches only the homepage and the stylesheet. No data files, no new pages. One self-contained section + its CSS.

---

## How to launch Claude Code (PowerShell)

```powershell
cd "C:\Users\abdullah_asraf\Desktop\App\Vitrine Asia\Website\vitrine-site"
claude
```

Once launched, paste:

```
Read claude-code-add-market-ticker.md and proceed.
```

---

## STEP 1 — Survey the homepage structure

View `/index.html` and identify:
1. The end of the site **`<header>`** (or nav) element — the ticker goes immediately AFTER the header and BEFORE the hero/first content section.
2. Where the site's **CSS** lives — an external stylesheet (e.g. `/css/style.css`, `/assets/css/...`) or a `<style>` block in the page head. Report which, so the ticker CSS goes in the right place and matches the existing convention.
3. Confirm the site's brand tokens if defined as CSS variables (emerald, brass, cream) — reuse them if they exist; otherwise the literal hex values below are correct.

Report what you found, then **STOP** for my OK.

---

## STEP 2 — Insert the ticker HTML

Place this block **immediately after the closing `</header>`** (or after the nav), **before** the hero section, in `/index.html`:

```html
<!-- VITRINE MARKET WATCH — Retail & Luxury ticker (TradingView) -->
<section class="vitrine-ticker" aria-label="Retail and luxury market watch">
  <span class="vitrine-ticker__label">RETAIL &amp; LUXURY · IDX · SGX</span>
  <div class="vitrine-ticker__feed">
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
      {
        "symbols": [
          { "proName": "IDX:MAPI",     "title": "Mitra Adiperkasa" },
          { "proName": "IDX:MAPA",     "title": "MAP Active" },
          { "proName": "IDX:BABY",     "title": "Multitrend (Kanmo)" },
          { "proName": "IDX:ERAA",     "title": "Erajaya" },
          { "proName": "IDX:ACES",     "title": "Ace Hardware ID" },
          { "proName": "IDX:LPPF",     "title": "Matahari Dept Store" },
          { "proName": "IDX:GOTO",     "title": "GoTo (Tokopedia)" },
          { "proName": "IDX:BELI",     "title": "Blibli" },
          { "proName": "SGX:AGS",      "title": "The Hour Glass" },
          { "proName": "SGX:C41",      "title": "Cortina Watch" },
          { "proName": "SGX:OV8",      "title": "Sheng Siong" },
          { "proName": "SGX:D01",      "title": "DFI Retail Group" },
          { "proName": "EURONEXT:MC",  "title": "LVMH" },
          { "proName": "SIX:CFR",      "title": "Richemont" },
          { "proName": "EURONEXT:KER", "title": "Kering" }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      }
      </script>
    </div>
  </div>
  <p class="vitrine-ticker__note">Market data delayed · for context, not investment advice · via TradingView</p>
</section>
```

Do NOT remove or alter the TradingView `<script>` or the attribution it renders — required by TradingView's free-widget terms.

Then, **immediately below the regional ticker section** (still before the hero), add the global ticker:

```html
<!-- VITRINE GLOBAL WATCH — Global Retail & Luxury ticker (TradingView) -->
<section class="vitrine-ticker vitrine-ticker--global" aria-label="Global retail and luxury market watch">
  <span class="vitrine-ticker__label">GLOBAL RETAIL &amp; LUXURY</span>
  <div class="vitrine-ticker__feed">
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
      {
        "symbols": [
          { "proName": "EURONEXT:MC",  "title": "LVMH" },
          { "proName": "EURONEXT:RMS", "title": "Herm\u00e8s" },
          { "proName": "EURONEXT:KER", "title": "Kering" },
          { "proName": "SIX:CFR",      "title": "Richemont" },
          { "proName": "BME:ITX",      "title": "Inditex (Zara)" },
          { "proName": "NYSE:NKE",     "title": "Nike" },
          { "proName": "TSE:9983",     "title": "Fast Retailing (Uniqlo)" },
          { "proName": "NASDAQ:AMZN",  "title": "Amazon" },
          { "proName": "NYSE:WMT",     "title": "Walmart" },
          { "proName": "NASDAQ:COST",  "title": "Costco" },
          { "proName": "HKEX:9988",    "title": "Alibaba" }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      }
      </script>
    </div>
  </div>
  <p class="vitrine-ticker__note">Market data delayed \u00b7 for context, not investment advice \u00b7 via TradingView</p>
</section>
```

**Show me the diff. STOP.**

---

## STEP 3 — Add the CSS

Add the following to the site's main stylesheet (the one STEP 1 identified). If brand colors already exist as CSS variables, substitute them; otherwise use these literals:

```css
/* VITRINE MARKET WATCH — ticker */
.vitrine-ticker{
  background:#0F3D2E;
  border-bottom:1px solid rgba(176,138,58,.45);
  display:flex;align-items:center;gap:22px;
  padding:0 24px;min-height:48px;position:relative;
  width:100%;box-sizing:border-box;overflow:hidden;
}
.vitrine-ticker__label{
  flex:0 0 auto;
  font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;
  font-size:12px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;
  color:#B08A3A;white-space:nowrap;
  padding-right:22px;border-right:1px solid rgba(245,239,224,.14);
}
.vitrine-ticker__feed{flex:1 1 auto;min-width:0;}
.vitrine-ticker__feed .tradingview-widget-container{margin:0;}
.vitrine-ticker__note{
  position:absolute;right:24px;bottom:-19px;margin:0;
  font-family:Inter,system-ui,sans-serif;font-size:10px;letter-spacing:.4px;
  color:#9aa39c;pointer-events:none;
}
@media (max-width:760px){
  .vitrine-ticker{gap:0;padding:0 10px;}
  .vitrine-ticker__label{display:none;}
  .vitrine-ticker__note{display:none;}
}

/* second (global) band variant — deeper tone so the two read as a pair */
.vitrine-ticker--global{
  background:#0A2A1F;
  border-bottom:1px solid rgba(176,138,58,.30);
}
.vitrine-ticker--global .vitrine-ticker__label{
  color:#C9A96A;
  border-right-color:rgba(92,30,30,.45);
}
```

> If the Inter font isn't already loaded on the site, either add it (Google Fonts) or change `font-family` in `.vitrine-ticker__label` / `.vitrine-ticker__note` to the site's existing UI/sans font. Tell me which the site uses.

**Show me the diff. STOP.**

---

## STEP 4 — (If disclaimer hidden on mobile) add a footer note

Because the inline disclaimer is hidden on small screens (STEP 3 media query), add one small line to the site **footer** so the disclaimer always appears somewhere:

> "Market data on this site is delayed and provided for context only, not investment advice. Charts & data via TradingView."

Match the footer's existing small-print style. **Show me the diff. STOP.** (Skip if the footer already has a fine-print area and you'd rather I place it there — ask me.)

---

## STEP 5 — Local verification

Run `npm run dev` and check `http://localhost:8080/`:
1. BOTH ticker bands appear stacked directly under the header, above the hero — regional (emerald) on top, global (deeper emerald) beneath it; each full width, ~48px tall, brass hairline between/under.
2. The scrolling quotes load (give it a few seconds — it fetches from TradingView). Each shows a company + price + daily change.
3. The left labels show on desktop ("RETAIL & LUXURY · IDX · SGX" and "GLOBAL RETAIL & LUXURY") and hide on mobile.
4. The disclaimer line shows bottom-right on desktop.
5. Resize to mobile width — the band stays one clean scrolling row, label hidden, no horizontal page overflow.
6. The small TradingView attribution is present at the end of the widget (must remain).

> If any symbol shows blank/"invalid symbol", note which — we'll correct that one ticker code (TradingView symbol prefixes occasionally differ). The rest will still work.

**STOP** for my final OK before commit.

---

## STEP 6 — Commit message proposal

When I OK verification, propose:

> Add Market Watch tickers to homepage (Retail & Luxury · IDX/SGX + Global · TradingView)

Wait for my explicit OK before committing/pushing via GitHub Desktop. **Don't run any git commands yourself.**

---

## Rules
- Touch only `/index.html`, the stylesheet, and (optionally) the footer. No other files. TWO ticker sections (regional + global), stacked.
- Keep the TradingView `<script>` and its attribution intact — do not strip branding.
- Match the site's existing CSS location and font conventions; reuse brand CSS variables if they exist.
- Don't change any symbol codes — they're verified (Oct 2026). If one renders invalid, flag it, don't guess a replacement.
- Show me the diff at every STOP. Don't push without my explicit OK.

---

## Symbol reference (verified October 2026)

| Ticker | Company | Exchange |
|---|---|---|
| IDX:MAPI | Mitra Adiperkasa (luxury/lifestyle operator) | Jakarta |
| IDX:MAPA | MAP Active (sports retail) | Jakarta |
| IDX:BABY | Multitrend Indo — Kanmo's listed arm (Mothercare, ELC) | Jakarta |
| IDX:ERAA | Erajaya Swasembada (electronics/lifestyle, JD Sports JV) | Jakarta |
| IDX:ACES | Ace Hardware Indonesia (home/lifestyle) | Jakarta |
| IDX:LPPF | Matahari Department Store | Jakarta |
| IDX:GOTO | GoTo Gojek Tokopedia | Jakarta |
| IDX:BELI | Global Digital Niaga (Blibli) | Jakarta |
| SGX:AGS | The Hour Glass (luxury watch retailer) | Singapore |
| SGX:C41 | Cortina Holdings (luxury watch retailer) | Singapore |
| SGX:OV8 | Sheng Siong (grocery) | Singapore |
| SGX:D01 | DFI Retail Group | Singapore |
| EURONEXT:MC | LVMH | Paris |
| SIX:CFR | Richemont | Zurich |
| EURONEXT:KER | Kering | Paris |

### Global ticker symbols (verified October 2026)
| Ticker | Company | Exchange |
|---|---|---|
| EURONEXT:MC | LVMH | Paris |
| EURONEXT:RMS | Hermès | Paris |
| EURONEXT:KER | Kering (Gucci) | Paris |
| SIX:CFR | Richemont (Cartier) | Zurich |
| BME:ITX | Inditex (Zara) | Madrid |
| NYSE:NKE | Nike | New York |
| TSE:9983 | Fast Retailing (Uniqlo) | Tokyo |
| NASDAQ:AMZN | Amazon | Nasdaq |
| NYSE:WMT | Walmart | New York |
| NASDAQ:COST | Costco | Nasdaq |
| HKEX:9988 | Alibaba | Hong Kong |

> Fallbacks if a home-exchange code renders oddly: Fast Retailing ADR `NASDAQ:FRCOY`; Alibaba ADR `NYSE:BABA`.

> Before publishing, you can optionally double-check any symbol in TradingView's configurator (tradingview.com/widget-docs/widgets/tickers/ticker-tape/) to confirm it resolves — takes a minute and guarantees nothing shows blank.
