// Vitrine — favicon generator
//
// Two visual states (Path A, documented in BRAND.md):
//   • Small sizes (16, 32, ICO) — "V" monogram on emerald with brass frame.
//     The full "Vitrine" wordmark is illegible at 16px; the V mark reads cleanly.
//   • Large sizes (180, 192, 512) — full wordmark mark (assets/brand/vitrine-wordmark.svg)
//     rendered at native resolution. Apple touch icon and PWA tiles use this.
//
// Usage: node scripts/build-favicons.js
// Inputs:  /assets/brand/vitrine-wordmark.svg
// Outputs: /assets/brand/favicon.ico, favicon-16.png, favicon-32.png, favicon-180.png, favicon-192.png, favicon-512.png

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
// png-to-ico is ESM-only as of v3 — load via dynamic import inside the async block.

const BRAND_DIR = path.resolve(__dirname, '..', 'assets', 'brand');
const WORDMARK_SVG = path.join(BRAND_DIR, 'vitrine-wordmark.svg');

// V monogram SVG — cream serif "V" centred on emerald, with the canonical brass hairline frame.
// Frame inset proportionally matches the wordmark mark's 32px-of-512 inset (~6.25%).
function monogramSvg(size) {
  const inset = Math.round(size * 0.0625);
  const frameSide = size - inset * 2;
  const fontSize = Math.round(size * 0.7);
  const baselineY = Math.round(size * 0.74);
  const strokeWidth = Math.max(1, Math.round(size * 0.003));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
    <rect width="${size}" height="${size}" fill="#0F3D2E"/>
    <rect x="${inset}" y="${inset}" width="${frameSide}" height="${frameSide}"
          fill="none" stroke="#B08A3A" stroke-width="${strokeWidth}" opacity="0.4"/>
    <text x="${size / 2}" y="${baselineY}"
          font-family="'Fraunces', 'Playfair Display', Georgia, serif"
          font-size="${fontSize}" font-weight="400" fill="#F5EFE0"
          text-anchor="middle">V</text>
  </svg>`;
}

async function renderPng(svgString, size, outPath) {
  await sharp(Buffer.from(svgString))
    .resize(size, size, { fit: 'fill' })
    .png()
    .toFile(outPath);
  console.log(`  wrote ${path.relative(process.cwd(), outPath)} (${size}x${size})`);
}

async function renderPngFromFile(svgPath, size, outPath) {
  await sharp(svgPath)
    .resize(size, size, { fit: 'fill' })
    .png()
    .toFile(outPath);
  console.log(`  wrote ${path.relative(process.cwd(), outPath)} (${size}x${size})`);
}

(async () => {
  const pngToIco = (await import('png-to-ico')).default;
  console.log('[favicons] generating from', path.relative(process.cwd(), WORDMARK_SVG));

  // Small sizes — V monogram
  console.log('[favicons] small sizes (V monogram)');
  await renderPng(monogramSvg(16),  16,  path.join(BRAND_DIR, 'favicon-16.png'));
  await renderPng(monogramSvg(32),  32,  path.join(BRAND_DIR, 'favicon-32.png'));
  const ico48Path = path.join(BRAND_DIR, '_tmp-favicon-48.png');
  await renderPng(monogramSvg(48),  48,  ico48Path);

  // Multi-size ICO from the three monogram PNGs (16, 32, 48)
  const icoBuf = await pngToIco([
    path.join(BRAND_DIR, 'favicon-16.png'),
    path.join(BRAND_DIR, 'favicon-32.png'),
    ico48Path,
  ]);
  fs.writeFileSync(path.join(BRAND_DIR, 'favicon.ico'), icoBuf);
  console.log(`  wrote assets/brand/favicon.ico (multi: 16, 32, 48)`);
  fs.unlinkSync(ico48Path);

  // Large sizes — full wordmark
  console.log('[favicons] large sizes (full wordmark)');
  await renderPngFromFile(WORDMARK_SVG, 180, path.join(BRAND_DIR, 'favicon-180.png'));
  await renderPngFromFile(WORDMARK_SVG, 192, path.join(BRAND_DIR, 'favicon-192.png'));
  await renderPngFromFile(WORDMARK_SVG, 512, path.join(BRAND_DIR, 'favicon-512.png'));

  console.log('[favicons] done');
})();
