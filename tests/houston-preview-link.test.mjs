import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';

const previewUrl = 'houston.html';
const dataSource = readFileSync(new URL('../assets/js/mock-data.js', import.meta.url), 'utf8');
const siteSource = readFileSync(new URL('../assets/js/site.js', import.meta.url), 'utf8');
const context = { window: {} };
vm.runInNewContext(dataSource, context);

test('Houston points to its official page while other branches keep their existing links', () => {
  const branches = context.window.SY_DATA.branches;
  assert.equal(branches.find(({ id }) => id === 'houston').page, previewUrl);
  for (const branch of branches.filter(({ id }) => id !== 'houston')) {
    assert.notEqual(branch.page, previewUrl, `${branch.id} must keep its own destination`);
  }
  assert.match(siteSource, /<a href="houston\.html">Houston/);
  assert.doesNotMatch(siteSource, /demo-sin-yolanda\.despertartdigital\.cloud\/houston/);
});

test('the official Houston page has the verified interactive map, local assets and SEO routes', () => {
  for (const [file, lang, canonical] of [
    ['houston.html', 'es', 'https://sin-yolanda.com/houston'],
    ['en/houston/index.html', 'en', 'https://sin-yolanda.com/en/houston/'],
  ]) {
    const html = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
    assert.match(html, new RegExp(`<html lang="${lang}">`));
    assert.match(html, /<meta name="robots" content="index,follow,max-image-preview:large">/);
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`));
    assert.match(html, /https:\/\/www\.google\.com\/maps\/embed\?pb=/);
    assert.match(html, /0x8640c19b1c06c689%3A0xaac06ea799d5fea1/);
    assert.match(html, /href="https:\/\/www\.opentable\.com\/r\/sin-yolanda-houston"/);
    assert.match(html, /href="\/#ubicaciones"/);
    assert.doesNotMatch(html, /demo-sin-yolanda\.despertartdigital\.cloud|data-google-branch-map/);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    for (const [asset] of html.matchAll(/\/(?:_astro|fonts|images|licenses)\/[A-Za-z0-9._~%/-]+/g)) {
      assert.ok(existsSync(new URL(`..${asset}`, import.meta.url)), `${file} -> ${asset}`);
    }
  }
});
