// Explicit public artifact. Never deploy the checkout or the retired archive.
import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve(new URL('../', import.meta.url).pathname);
const destination = process.argv[2];
assert.ok(destination, 'Provide a fresh artifact directory');
const out = resolve(destination);
assert.ok(!existsSync(out), 'Refuse to overwrite an existing directory');
mkdirSync(out, { recursive: true });
const directories = ['assets', '_astro', 'fonts', 'images', 'en', 'houston'];
const files = readdirSync(root).filter(name => /\.(html|css|js)$/.test(name));
files.push('_headers', 'robots.txt', 'sitemap.xml');
for (const name of [...files, ...directories]) {
  const source = join(root, name);
  if (existsSync(source)) cpSync(source, join(out, name), { recursive: true });
}
assert.ok(existsSync(join(out, '404.html')));
assert.ok(!existsSync(join(out, 'maricarmen.html')));
assert.ok(!existsSync(join(out, 'archive')));
console.log(JSON.stringify({ artifact: out, rootFiles: files.length, directories }));
