# Authoring rules for daily lessons

These rules keep every lesson consistent. The daily job follows them exactly. Lesson 001 is the reference example — match its style.

## The four non-negotiables
1. **Concrete, not general.** Every lesson is built around ONE realistic game problem (a specific game, a specific number of objects, a specific fps drop or design decision) and solves it step by step. Principles come *out of* the example, never before it. If a section could appear in any generic article, rewrite it around the example.
2. **Visual.** Every lesson has **at least 3 Mermaid diagrams and at least 2 SVG illustrations**. A picture comes before or right next to the text it explains.
3. **Easy to read.** The learner reads English as a second language, on a phone, outdoors. Short sentences (aim for under 20 words). One idea per paragraph. Explain every new term the first time, in plain words. Use an everyday analogy for every abstract idea (e.g. "RAM is a walk to the library").
4. **Playable.** Every lesson links to a lab: a small interactive web page where the learner changes one thing and sees the lesson's effect. Rules are in **Labs** below.

## Picking the lesson
1. Open `CURRICULUM.md` and take the **first lesson marked ⬜**.
2. Read the previous 2 lessons in `lessons/` so the new one builds on them and doesn't repeat them. Reuse the running examples where it fits (e.g. the zombie horde game).
3. If every lesson is ✅, append a new 10-lesson "Deep dive" module as described at the bottom of `CURRICULUM.md`.

## Audience
- A junior game developer (Unity/C# background, has built RPG/MMORPG demos, has touched DOTS, UniTask and VContainer) training to become a game architect and performance optimizer.
- Engine-agnostic: teach the principle; code examples in C#-style (note when C++ differs). Name real tools where relevant (Unity Profiler, Unreal Insights, RenderDoc, PIX, Xcode Instruments, Superluminal, Tracy).

## Required structure (in this order)
1. `# Lesson NNN — Title: <the concrete problem>`, then `> Module N · Module name · ~15 min read · YYYY-MM-DD`
2. **Today's goal** (one sentence) + **TL;DR** (3 bullets) + the lab callout + a small Mermaid "map of today" flowchart. The callout is one quote line right after the TL;DR:
   `> 🎮 **Play with it: [<Lab name>](https://yimo691.github.io/GameArchitect/demos/<lab-folder>/)** — <one sentence: what to drag or tap, and what to watch>.`
3. **The problem** — the concrete scenario in 3–6 short sentences, with real numbers.
4. **Step 1, Step 2, … (4–6 steps)** — solve the problem. Each step: what we do → why → evidence (profiler output, code, numbers) → the picture. Include at least one before/after table with measured-style numbers.
5. **The architect's view** — what structural rule, budget or test prevents this whole class of problem. Include a before/after architecture Mermaid diagram.
6. **Same problem, three people** (junior / optimizer / architect table) — only when it fits; otherwise a short **Trade-offs** table (option, cost, benefit, when to use).
7. **Common mistakes** — 3–5 bullets, each tied to the example.
8. **Think about it on the lift 🎿🎣** — 3–5 questions answerable without a screen, each with a collapsed `<details><summary>Answer</summary>` block showing the working.
9. **Back at the desk (≈30–45 min)** — a hands-on exercise that reproduces the lesson's effect so the learner sees it with their own measurements. Give an empty results table to fill into `journal/NNN-*.md`.
10. **Vocabulary** — table with columns Term | Meaning | 中文.
11. **Further reading** — 2–4 well-known, real sources (books, GDC/CppCon talks, official docs), naming the exact chapter or section. Never invent titles or URLs; if unsure, leave it out.
12. **Tomorrow** — one line previewing the next lesson.

Review lessons (titles starting with "Review") replace steps 3–6 with: a one-page visual summary of the module (a Mermaid mind-map-style flowchart plus one SVG), a 10-question quiz with collapsed answers, and a larger exercise.

## Diagrams

### Mermaid (renders natively on GitHub)
- Use only `flowchart`, `sequenceDiagram`, `stateDiagram-v2`, `classDiagram`, `pie` and `xychart-beta`. These are the types used successfully so far; avoid others.
- Always quote node labels: `A["Text (with brackets)"]`. Use `<br/>` for line breaks. Quote edge labels: `-->|"label"|`.
- Keep each diagram under ~12 nodes. Emoji in labels are fine and help scanning.
- Good uses: the step-by-step process, decision trees ("CPU-bound or GPU-bound?"), before/after architecture, data flow between systems, timelines of a frame (sequenceDiagram).

### SVG illustrations (in `assets/NNN/`)
- Hand-written or script-generated SVG, embedded with `![alt text](../assets/NNN/name.svg)`.
- Use them for things Mermaid can't draw well: proportional bars (frame budgets, ms breakdowns), memory layouts, grids and spatial pictures, before/after comparisons, analogies.
- Style: `width`/`height` + matching `viewBox`, width 800–900 px; a full-size white background `<rect rx='14' fill='#ffffff' stroke='#d0d7de'/>` (so it reads in GitHub dark mode); font `Segoe UI, Helvetica, Arial, sans-serif`; bold 20 px title at top-left; text ≥ 12 px; label numbers directly on the picture.
- Palette: red `#e5534b` / `#cf222e` = bad or the hot spot, green `#1a7f37` / `#dafbe1` = good or budget, blue `#4e79a7`, green `#59a14f`, purple `#b07aa1`, grey `#9aa0a6`, ink `#1f2328`, muted `#57606a`.
- **Check every SVG visually before committing**: `node tools/render-svg.js assets/NNN <out-dir>` writes PNGs; open each PNG and fix any clipped, overlapping or unreadable text.

## Labs (interactive demos)

A lab makes the lesson's main effect visible: the learner moves a slider or flips a toggle and watches a number, a timeline or a picture change. Lessons 001 and 002 have the reference labs: `demos/src/001-zombie-horde.html` (real code, measured live) and `demos/src/002-frame-pipeline.html` (a simulation of the lesson's numbers). Match their structure, style and quality.

### New lab or extend an existing one?
Use this map. If the lesson is listed under an existing lab, **extend that lab**: add a mode or control, add 2–4 new "Try this" steps in a clearly titled group (e.g. "Lesson 037: quadtree"), and keep everything that was there working. Otherwise **create a new lab** named after the lesson that introduces it. Review lessons add a "Challenge" group of steps to the labs of their module instead of a new lab.

| Lab folder | Lessons |
|---|---|
| `001-zombie-horde` | 001, 037 (quadtree vs grid), 053 (AI LOD / time slicing) |
| `002-frame-pipeline` | 002, 059 (frame pacing), 060 (shader compile stutter) |
| `003-profiler-detective` | 003, 035 |
| `004-cache-lab` | 004, 005, 006, 010 (challenge) |
| `007-memory-gc` | 007, 010 (challenge), 040, 041, 042 |
| `008-jobs-lab` | 008, 009, 010 (challenge) |
| `011-game-loop` | 011 |
| `012-ecs-lab` | 012, 013 |
| `014-events-lab` | 014 |
| `015-services-lab` | 015 |
| `016-gull-brain` | 016 |
| `017-command-lab` | 017 |
| `018-layers-lab` | 018 |
| `019-tuning-lab` | 019, 020 (scripting and hot reload) |
| `021-plugin-lab` | 021 |
| `024-draw-calls` | 024, 025, 027, 028 |
| `048-netcode` | 048, 049 |

Lessons not in the map get a new lab when their main idea is something that changes on screen or in numbers. For lessons about process or communication (e.g. writing design docs, estimating risk), build a small interactive tool instead: a decision table, a budget calculator, a trade-off picker with the lesson's real numbers. When a new lab spans later lessons too, add its row to this map.

### What every lab has (in this order)
1. Header: links "← All labs" (`../index.html`) and "Read Lesson NNN ↗" (full GitHub URL), an eyebrow `Lab NNN · Lesson NNN · measured live on your device` or `· simulation using the lesson's numbers`, the lab name as `<h1>`, one sentence on what to watch.
2. The main view (canvas, timeline or chart) next to **live readouts** (3–4 big numbers) and **controls** (sliders, segmented buttons, checkboxes). One column on phones.
3. **Try this**: 4–7 steps that replay the lesson's story in order. Each step has a short title, 1–3 sentences saying what to look at and what number to expect, and a **Set up** button with id `step0`, `step1`, … that puts every control into that step's state.
4. Any supporting panel the lesson needs (a profiler capture, a breakdown, a scaling test).
5. **What this shows**: three short notes tying the lab back to the lesson, plus one honest line saying whether the numbers are measured or simulated and what differs from a real engine.

### Rules
- **Honest numbers.** If you measure, measure the real algorithm with `performance.now()` and say so. If you simulate, use the lesson's exact numbers and label it "simulation". Every number a step promises must match what the lab shows; check this.
- **One file per lab**, no build tools, no libraries. Only Google Fonts may be loaded from outside. Plain JS in an IIFE, `"use strict"`.
- Write the source as a page fragment in `demos/src/<lab-folder>.html` (starts with `<title>`, then `<meta name="claude:viewport-fit-sides" content="cover">`, font `<link>`s and `<style>`; no `<!doctype>`, `<html>`, `<head>` or `<body>` tags), then run `python3 tools/build-demos.py` to generate `demos/<lab-folder>/index.html`. Commit both.
- Copy the design tokens (colours, fonts, panel/stat/step styles) from the reference labs so all labs look like one set. Every colour is a CSS variable with light and dark values; canvas code reads the variables. In SVG use `style="fill:var(--x)"`, not `fill="var(--x)"`.
- Phone first: works at 390 px wide with no sideways scrolling; touch-friendly controls (≥ 28 px tall); respects `prefers-reduced-motion`.
- Add the lab as a card in `demos/src/index.html` (move it out of the "How labs grow" table if it was listed there as planned) and rebuild.
- **Check before committing:** run `node tools/check-demos.js <scratch-folder>`. It must print `OK` for every page at phone and desktop width in light and dark. Then open the screenshots and fix anything clipped, overlapping or unreadable. Then click through every Set up step (e.g. with a small Playwright script) and confirm each number the step text promises.

## Quality bar
- Every number must be correct and consistent across text, tables, pictures and quiz answers; label hardware figures as approximate. Recompute all arithmetic before committing.
- Every pattern or fix states its cost, not just its benefit.
- 2,000–3,500 words.

## File and index updates
- Lesson: `lessons/NNN-kebab-case-title.md` (3-digit number). Images: `assets/NNN/*.svg`.
- In `CURRICULUM.md`, flip that lesson's ⬜ to ✅ (you may sharpen the title to name the concrete problem).
- In `README.md`, add a row to the **Lessons** table: `| NNN | [Title](lessons/file.md) | [Lab name](https://yimo691.github.io/GameArchitect/demos/<lab-folder>/) | YYYY-MM-DD |`.
- Commit message: `Lesson NNN: Title`.
