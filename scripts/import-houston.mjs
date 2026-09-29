// Import only the approved Houston page and its transitive static assets.
// Run after building ../sinyolanda-universal; never copy its whole dist tree.
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const source = resolve(root, '../sinyolanda-universal/dist');
const dryRun = process.argv.includes('--dry-run');
const oldHouston = readFileSync(resolve(root, 'houston.html'), 'utf8');
const originalSchema = oldHouston.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/)?.[0];
if (!originalSchema) throw new Error('The current official Houston structured data is missing. Stop before replacing the page.');

const routes = [
  { from: 'houston/index.html', to: 'houston.html', lang: 'es', canonical: 'https://sin-yolanda.com/houston' },
  { from: 'en/houston/index.html', to: 'en/houston/index.html', lang: 'en', canonical: 'https://sin-yolanda.com/en/houston/' },
];
const assets = new Set();
const addAssets = (content) => {
  for (const [path] of content.matchAll(/\/(?:_astro|fonts|images|licenses)\/[A-Za-z0-9._~%/-]+/g)) assets.add(path.slice(1));
};
const output = new Map();
for (const license of ['BEBAS-NEUE-OFL.txt', 'ROBOTO-SLAB-APACHE-2.0.txt', 'ROBOTO-SLAB-COPYRIGHT.txt']) {
  assets.add(`fonts/licenses/${license}`);
}

for (const route of routes) {
  let html = readFileSync(resolve(source, route.from), 'utf8');
  if (!html.includes('https://www.google.com/maps/embed?pb=')
    || !html.includes('0x8640c19b1c06c689%3A0xaac06ea799d5fea1')
    || !html.includes('Sin%20Yolanda%20Houston')
    || html.includes('data-google-branch-map')) {
    throw new Error(`${route.from}: the verified keyless Houston map is missing`);
  }
  if ((html.match(/<h1\b/g) ?? []).length !== 1) throw new Error(`${route.from}: expected one H1`);
  html = html.replace('<meta name="robots" content="noindex,nofollow">', '<meta name="robots" content="index,follow,max-image-preview:large">');
  // The official page must render the map reliably even when opened at its visit anchor.
  html = html.replace(/(<iframe class="ve-google-embed"[^>]*?)loading="lazy"/, '$1loading="eager"');
  // Karina's official home calls this section #ubicaciones, not #sucursales.
  html = html.replaceAll('href="/#sucursales"', 'href="/#ubicaciones"');
  if (!html.includes('content="index,follow,max-image-preview:large"')) throw new Error(`${route.from}: robots meta was not updated`);
  const title = route.lang === 'es' ? 'Sin Yolanda Houston · La cantina' : 'Sin Yolanda Houston · The cantina';
  const description = route.lang === 'es'
    ? 'Sin Yolanda Houston en 4901 Washington Ave. Conoce la cantina, explora el menú y reserva en OpenTable.'
    : 'Visit Sin Yolanda Houston at 4901 Washington Ave. Explore the cantina and menu, and book on OpenTable.';
  const seo = [
    `<link rel="canonical" href="${route.canonical}">`,
    '<link rel="alternate" hreflang="es" href="https://sin-yolanda.com/houston">',
    '<link rel="alternate" hreflang="en" href="https://sin-yolanda.com/en/houston/">',
    '<link rel="alternate" hreflang="x-default" href="https://sin-yolanda.com/houston">',
    '<meta property="og:type" content="website">',
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${route.canonical}">`,
    '<meta property="og:image" content="https://sin-yolanda.com/images/houston-entry-study/preparation-1200.webp">',
    '<meta name="twitter:card" content="summary_large_image">',
    originalSchema,
  ].join('');
  html = html.replace('</head>', `${seo}</head>`);
  if (html.includes('demo-sin-yolanda.despertartdigital.cloud')) throw new Error(`${route.from}: unexpected demo link`);
  output.set(route.to, html);
  addAssets(html);
}

for (const asset of assets) {
  const file = resolve(source, asset);
  if (!existsSync(file)) throw new Error(`Missing source asset: ${asset}`);
  const content = readFileSync(file, 'utf8');
  if (/\.(?:css|js)$/.test(asset)) addAssets(content);
}
// Recursively include nested CSS/JS references discovered above.
let previousSize = -1;
while (previousSize !== assets.size) {
  previousSize = assets.size;
  for (const asset of assets) {
    const file = resolve(source, asset);
    if (!existsSync(file)) throw new Error(`Missing source asset: ${asset}`);
    if (/\.(?:css|js)$/.test(asset)) addAssets(readFileSync(file, 'utf8'));
  }
}
for (const asset of assets) {
  const target = resolve(root, asset);
  if (existsSync(target) && !readFileSync(target).equals(readFileSync(resolve(source, asset)))) {
    throw new Error(`Existing official asset differs; refusing to overwrite: ${asset}`);
  }
}

if (dryRun) {
  console.log(`Ready to import ${routes.length} Houston pages and ${assets.size} assets; no files changed.`);
} else {
  for (const asset of assets) {
    const target = resolve(root, asset);
    mkdirSync(dirname(target), { recursive: true });
    if (!existsSync(target)) copyFileSync(resolve(source, asset), target);
  }
  for (const [path, html] of output) {
    const target = resolve(root, path);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, html);
  }
  console.log(`Imported ${routes.length} Houston pages and ${assets.size} assets. Other official pages were not changed.`);
}
