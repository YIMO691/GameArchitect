// Render every SVG in a folder to PNG so it can be checked by eye before committing.
// Usage: node tools/render-svg.js assets/002 /tmp/png-check
// Needs Playwright with Chromium installed (globally or locally).
const fs = require('fs');
const path = require('path');

function loadPlaywright() {
  const candidates = ['playwright', '/opt/node22/lib/node_modules/playwright'];
  for (const c of candidates) {
    try { return require(c); } catch (_) { /* try next */ }
  }
  throw new Error('Playwright not found. Install it with: npm i -g playwright && npx playwright install chromium');
}

(async () => {
  const [dirArg, outArg] = process.argv.slice(2);
  if (!dirArg || !outArg) {
    console.error('Usage: node tools/render-svg.js <svg-folder> <png-output-folder>');
    process.exit(2);
  }
  const dir = path.resolve(dirArg);
  const out = path.resolve(outArg);
  fs.mkdirSync(out, { recursive: true });
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 940, height: 600 } });
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.svg'))) {
    await page.goto('file://' + path.join(dir, f));
    const target = path.join(out, f.replace(/\.svg$/, '.png'));
    await page.locator('svg').first().screenshot({ path: target });
    console.log('rendered', target);
  }
  await browser.close();
})().catch((e) => { console.error(e.message); process.exit(1); });
