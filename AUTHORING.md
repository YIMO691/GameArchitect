# Authoring rules for daily lessons

These rules keep every lesson consistent. The daily job follows them exactly.

## Picking the lesson
1. Open `CURRICULUM.md` and take the **first lesson marked ⬜**.
2. Read the previous 2 lessons in `lessons/` so the new one builds on them and doesn't repeat them.
3. If every lesson is ✅, append a new 10-lesson "Deep dive" module as described at the bottom of `CURRICULUM.md`.

## Audience
- A junior game developer (Unity/C# background, has built RPG/MMORPG demos, has touched DOTS, UniTask and VContainer) training to become a game architect and performance optimizer.
- Reads on a phone, often outdoors. Short paragraphs, tables over walls of text, code blocks under ~25 lines.

## Language and engine
- English.
- Engine-agnostic: teach the principle first. Short examples may use C# (Unity) and C++ (Unreal/custom) side by side when that helps; name engine-specific tools (Unity Profiler, Unreal Insights, RenderDoc, PIX, Xcode Instruments) where relevant.

## Required structure (in this order)
1. `# Lesson NNN — Title`, then a quote line: `> Module N · Module name · ~15 min read · YYYY-MM-DD`
2. **Today's goal** — one sentence.
3. 3–6 numbered teaching sections: concept → mental model → worked example with real numbers → trade-offs.
4. **Common mistakes** — 3–5 bullets.
5. **Think about it on the lift 🎿🎣** — 3–5 questions answerable without a screen, each with a collapsed `<details><summary>Answer</summary>` block.
6. **Back at the desk (≈30 min)** — one concrete hands-on exercise; results go into `journal/NNN-*.md`.
7. **Vocabulary** — 4–8 terms.
8. **Further reading** — 2–4 well-known, real sources (books, GDC/CppCon talks, official docs). Never invent titles or URLs; if unsure, leave it out.
9. **Tomorrow** — one line previewing the next lesson.

Review lessons (titles starting with "Review") replace section 3 with a summary of the module, a 10-question quiz, and a larger exercise.

## Quality bar
- Every number must be correct; label hardware figures as approximate/order-of-magnitude.
- Every claim about a pattern states its cost, not just its benefit.
- 1,800–3,000 words.
- Check arithmetic in examples and quiz answers before committing.

## File and index updates
- File name: `lessons/NNN-kebab-case-title.md` (3-digit number).
- In `CURRICULUM.md`, flip that lesson's ⬜ to ✅.
- In `README.md`, add a row to the **Lessons** table: `| NNN | [Title](lessons/file.md) | YYYY-MM-DD |`.
- Commit message: `Lesson NNN: Title`.
