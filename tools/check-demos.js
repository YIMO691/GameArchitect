// Check every built lab page before committing.
// For each demos/<lab>/index.html (and demos/index.html), at phone (390 px) and desktop (1280 px) width,
// in light and dark colour schemes:
//   - collects console errors and page errors
//   - fails if the page scrolls sideways
//   - presses every "Set up" step button (ids step0, step1, ...) and checks again
//   - saves a full-page screenshot to <out-dir> to look at by eye
// Usage: node tools/check-demos.js <out-dir> [lab-folder-name ...]
const fs = require("fs");
const path = require("path");

function loadPlaywright() {
  for (const c of ["playwright", "/opt/node22/lib/node_modules/playwright"]) {
    try { return require(c); } catch (_) { /* next */ }
  }
  throw new Error("Playwright not found. Install with: npm i -g playwright && npx playwright install chromium");
}

(async () => {
  const [outArg, ...only] = process.argv.slice(2);
  if (!outArg) { console.error("Usage: node tools/check-demos.js <out-dir> [lab ...]"); process.exit(2); }
  const out = path.resolve(outArg);
  fs.mkdirSync(out, { recursive: true });
  const demos = path.resolve(__dirname, "..", "demos");
  const pages = [{ name: "index", file: path.join(demos, "index.html") }];
  for (const d of fs.readdirSync(demos)) {
    const f = path.join(demos, d, "index.html");
    if (d !== "src" && fs.existsSync(f)) pages.push({ name: d, file: f });
  }
  const todo = only.length ? pages.filter((p) => only.includes(p.name)) : pages;

  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();
  let failures = 0;
  for (const pg of todo) {
    for (const [label, vp] of [["phone", { width: 390, height: 844 }], ["desktop", { width: 1280, height: 900 }]]) {
      for (const scheme of ["light", "dark"]) {
        const ctx = await browser.newContext({ viewport: vp, colorScheme: scheme, deviceScaleFactor: 1 });
        const page = await ctx.newPage();
        const errors = [];
        // Web-font loading failures are ignored: some sandboxes block Google Fonts, and the pages have fallback fonts.
        const isFont = (m) => /fonts\.(googleapis|gstatic)\.com/.test(m.text() + " " + ((m.location() && m.location().url) || ""));
        page.on("console", (m) => { if (m.type() === "error" && !isFont(m)) errors.push("console: " + m.text()); });
        page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
        await page.goto("file://" + pg.file);
        await page.waitForTimeout(2000);
        const overflow = async () => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        let ox = await overflow();
        const steps = await page.$$("button[id^='step']");
        for (const b of steps) { await b.click(); await page.waitForTimeout(400); const o = await overflow(); if (o > ox) ox = o; }
        if (steps.length) { await steps[0].click(); await page.waitForTimeout(1200); }
        await page.evaluate(() => window.scrollTo(0, 0));
        const shot = path.join(out, `${pg.name}-${label}-${scheme}.png`);
        await page.screenshot({ path: shot, fullPage: true });
        const ok = errors.length === 0 && ox <= 0;
        if (!ok) failures++;
        console.log(`${ok ? "OK  " : "FAIL"} ${pg.name} ${label} ${scheme}  steps=${steps.length}  sideways=${ox}px  ${errors.join(" | ")}`);
        await ctx.close();
      }
    }
  }
  await browser.close();
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error(e.message); process.exit(1); });
