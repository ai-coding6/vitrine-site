# Vitrine

> Reading Asian retail.

Static website source for [vitrineasia.com](https://vitrineasia.com) — an independent trade publication for fashion, sport, and luxury retail across Indonesia and Asia.

## Local development

The site uses absolute paths (e.g. `/assets/vitrine.css`) so links resolve identically in development and in production. To preview locally:

```bash
npm install      # one-time; installs `serve` as a dev dependency
npm run dev      # starts the static server at http://localhost:8080
```

Open <http://localhost:8080> in a browser. Edit any HTML, CSS, or asset file and refresh to see changes.

**Don't open `index.html` directly via `file://`** — absolute paths like `/assets/vitrine.css` won't resolve and the page will render unstyled.

To stop the server, press `Ctrl+C` in the terminal.

## Stack

- Plain static HTML, no build step
- Shared stylesheet: `assets/vitrine.css`
- Fonts: Fraunces (display), Source Serif 4 (body), Inter (UI), via Google Fonts
- Dev server: [`serve`](https://www.npmjs.com/package/serve) (Vercel)

## Project layout

```
vitrine-site/
├── index.html                  Homepage
├── about/                      About, principles, methodology, editor
├── reports/                    Reports index + report download pages
├── movements/                  Movements index + Movement detail pages
├── subscribe/                  Briefing signup
├── assets/
│   ├── vitrine.css             Shared design system + components
│   └── reports/                PDF downloads
├── 404.html                    Not-found page
├── sitemap.xml, robots.txt     SEO
└── PLACEHOLDERS.md             Tracking unfilled content
```
