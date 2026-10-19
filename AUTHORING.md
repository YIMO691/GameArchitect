# Authoring rules for daily lessons

These rules keep every lesson consistent. The daily job follows them exactly. Lesson 001 is the reference example — match its style.

## The three non-negotiables
1. **Concrete, not general.** Every lesson is built around ONE realistic game problem (a specific game, a specific number of objects, a specific fps drop or design decision) and solves it step by step. Principles come *out of* the example, never before it. If a section could appear in any generic article, rewrite it around the example.
2. **Visual.** Every lesson has **at least 3 Mermaid diagrams and at least 2 SVG illustrations**. A picture comes before or right next to the text it explains.
3. **Easy to read.** The learner reads English as a second language, on a phone, outdoors. Short sentences (aim for under 20 words). One idea per paragraph. Explain every new term the first time, in plain words. Use an everyday analogy for every abstract idea (e.g. "RAM is a walk to the library").

## Picking the lesson
1. Open `CURRICULUM.md` and take the **first lesson marked ⬜**.
2. Read the previous 2 lessons in `lessons/` so the new one builds on them and doesn't repeat them. Reuse the running examples where it fits (e.g. the zombie horde game).
3. If every lesson is ✅, append a new 10-lesson "Deep dive" module as described at the bottom of `CURRICULUM.md`.

## Audience
- A junior game developer (Unity/C# background, has built RPG/MMORPG demos, has touched DOTS, UniTask and VContainer) training to become a game architect and performance optimizer.
- Engine-agnostic: teach the principle; code examples in C#-style (note when C++ differs). Name real tools where relevant (Unity Profiler, Unreal Insights, RenderDoc, PIX, Xcode Instruments, Superluminal, Tracy).

## Required structure (in this order)
1. `# Lesson NNN — Title: <the concrete problem>`, then `> Module N · Module name · ~15 min read · YYYY-MM-DD`
2. **Today's goal** (one sentence) + **TL;DR** (3 bullets) + a small Mermaid "map of today" flowchart.
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

## Quality bar
- Every number must be correct and consistent across text, tables, pictures and quiz answers; label hardware figures as approximate. Recompute all arithmetic before committing.
- Every pattern or fix states its cost, not just its benefit.
- 2,000–3,500 words.

## File and index updates
- Lesson: `lessons/NNN-kebab-case-title.md` (3-digit number). Images: `assets/NNN/*.svg`.
- In `CURRICULUM.md`, flip that lesson's ⬜ to ✅ (you may sharpen the title to name the concrete problem).
- In `README.md`, add a row to the **Lessons** table: `| NNN | [Title](lessons/file.md) | YYYY-MM-DD |`.
- Commit message: `Lesson NNN: Title`.
