# Lesson 001 — What Game Architects and Optimizers Actually Do

> Module 0 · Orientation · ~15 min read · 2026-10-19

**Today's goal:** know exactly what these two jobs are, why they are the hardest part of game development to automate, and memorize the one table every architect keeps in their head — the frame budget.

---

## 1. The honest picture: AI and your job

AI coding tools are very good at one thing: producing code that is *locally plausible*. Ask for an inventory system, a pathfinding function, a UI panel, and you get something that compiles and mostly works.

What they are weak at is everything that lives **outside the prompt**:

- **Constraints nobody wrote down.** The game must run at 60 fps on a five-year-old phone with 3 GB of RAM. The save format must still load files from version 1.0 in three years. The team has two engineers who understand multithreading.
- **Reality.** Code can look fast and be slow. Only a profiler on real hardware tells the truth, and someone has to read it, form a hypothesis and decide what to change.
- **Consequences over time.** An architecture decision made in month 2 decides whether month 18 is calm or a crunch. Someone has to own that decision.

Those three things *are* the job descriptions of an architect and an optimizer. As code gets cheaper to type, the value moves from **writing code** to **deciding what code should exist and proving it works on the target**. That is the direction this course pushes you.

---

## 2. The game architect

**Short definition:** the person who makes the decisions that are *expensive to change later*.

Typical architect-level decisions:

| Decision | Why it's expensive to change |
|---|---|
| How entities are represented (class hierarchy, components, ECS) | Every gameplay system is written against it |
| Threading model (main-thread only, job system, task graph) | Retrofitting thread safety is painful and bug-prone |
| Asset loading and streaming strategy | Shapes level design, memory use and load times |
| Save / serialization format and versioning | Players' save files must keep loading forever |
| Network authority model (server-authoritative, P2P, rollback) | Touches every gameplay system |
| Module boundaries and dependency rules | Decides whether the codebase stays understandable |

What an architect does in a normal week:

- Writes short technical design documents and decision records.
- Reviews other people's code for *structural* problems, not style.
- Builds throwaway prototypes to de-risk a decision before the team commits.
- Sets budgets (memory, CPU time, draw calls) and makes sure they're tracked.
- Says "no" or "not like that" — with reasons and an alternative.

An architect is **not** someone who draws boxes and leaves. Good architects still write the hardest code and are the first to open the profiler.

---

## 3. The optimizer (performance engineer)

**Short definition:** the person who makes the game hit its budgets on the target hardware.

The work is a loop:

```
measure → form a hypothesis → change one thing → measure again
```

If you skip the first or last step, you are guessing, not optimizing.

The domains you will learn in this course:

- **CPU time** — game logic, physics, animation, AI, render submission.
- **GPU time** — draw calls, overdraw, shader cost, bandwidth.
- **Memory** — total footprint, fragmentation, garbage-collection spikes.
- **Loading & streaming** — how long until the player plays, and hitches while moving.
- **Frame pacing** — a steady 33 ms often feels better than a jittery 16–40 ms.
- **Power & heat** (mobile) — a phone that throttles after 10 minutes halves your budget.

---

## 4. Two sides of one skill

Architecture sets the **ceiling** on performance. Optimization finds out **where you are** relative to that ceiling.

Example: 10,000 units on screen.

- **Design A:** each unit is an object with a virtual `Update()`, scattered across the heap, each one looking up its target through a global manager.
- **Design B:** unit positions, velocities and targets live in tightly packed arrays, updated by one system in a single loop, split across worker threads.

You can micro-optimize Design A for weeks and it will still lose to an untuned Design B, because B respects how the CPU reads memory (Lesson 004–005). That's why the best optimizers become architects: they've seen which early decisions made performance impossible.

---

## 5. The table to memorize: the frame budget

Everything in a game must fit inside one frame.

| Target | Budget per frame |
|---|---|
| 30 fps | 33.33 ms |
| 60 fps | 16.67 ms |
| 90 fps (VR) | 11.11 ms |
| 120 fps | 8.33 ms |
| 144 fps | 6.94 ms |

Formula: `budget_ms = 1000 / fps`.

The CPU and GPU usually work **in parallel** on different frames, so each has roughly the full budget — and the slower one sets your frame rate. Whichever is slower, you are "CPU-bound" or "GPU-bound" (Lesson 002 goes deep on this).

### A worked example: a 60 fps action game, CPU side

| System | Budget |
|---|---|
| Gameplay logic & scripts | 3.0 ms |
| Physics | 2.0 ms |
| Animation | 2.0 ms |
| AI | 1.5 ms |
| Render submission (culling, building draw lists) | 4.0 ms |
| UI | 1.0 ms |
| Audio | 0.5 ms |
| **Headroom** | **2.67 ms** |
| **Total** | **16.67 ms** |

Two architect habits hide in this table:

1. **Every system has a number.** When a designer asks for 3× more enemies, you can answer "AI goes from 1.5 to 4.5 ms; we don't have that — here are three options" instead of "it might be slow."
2. **Headroom is planned.** Real frames spike (a big explosion, a garbage collection, a level stream). A budget filled to 100% on average will stutter.

### Order-of-magnitude latency numbers

Not exact — they vary by hardware — but the *ratios* drive almost every performance decision:

| Operation | Roughly |
|---|---|
| L1 cache read | ~1 ns |
| L2 cache read | ~4 ns |
| L3 cache read | ~10–20 ns |
| Main memory (RAM) read | ~80–100 ns |
| Mutex lock/unlock (uncontended) | ~20 ns |
| Read 1 MB sequentially from RAM | ~a few tens of µs |
| NVMe SSD random read | ~tens of µs |
| HDD seek | ~5–10 ms |

Read the RAM line again: a cache miss costs about **100 simple instructions** of waiting. At 16.67 ms per frame, 100,000 cache misses ≈ 10 ms — most of your frame, doing nothing. This single fact is why data layout matters more than clever code.

---

## 6. Skills map: where you are → where you're going

| Skill | Junior | Architect / Optimizer |
|---|---|---|
| Writing features | Makes it work | Makes it work *within a budget*, and knows the budget |
| Debugging | Fixes the bug | Asks why the structure allowed the bug, and fixes that too |
| Performance | "It feels slow" | "CPU-bound, 4.2 ms over, 60% in animation, here's the capture" |
| Patterns | Knows the names | Knows the cost of each, and when *not* to use them |
| Hardware | Abstract | Thinks in cache lines, cores, bandwidth, memory per platform |
| Communication | Status updates | Design docs, trade-off write-ups, clear "no, because…" |
| AI tools | Accepts the output | Specifies constraints, reviews structure, verifies with measurements |

This course works through that right-hand column, one lesson at a time.

---

## 7. Common mistakes on this path

- **Optimizing without measuring.** The slow part is almost never where you think it is.
- **Pattern worship.** Every pattern has a cost (indirection, memory, cognitive load). An architect picks the *simplest* thing that meets the constraints.
- **Ignoring the target hardware.** "Runs fine on my dev PC" is not a data point.
- **Treating architecture as a one-time diagram.** Architecture is a series of decisions that keep being revisited as the game changes.
- **Hiding behind "it depends."** It always depends — the architect's job is to say *on what*, and then decide.

---

## 8. Think about it on the lift 🎿🎣

No screen needed. Answer in your head, then check.

**Q1.** Your game runs at 45 fps. What is the frame time, and how much do you need to save to hit 60 fps?

<details><summary>Answer</summary>

1000 / 45 ≈ 22.2 ms. Target is 16.67 ms, so you need to save about **5.6 ms** — on whichever processor (CPU or GPU) is the bottleneck. Saving time on the other one won't change the frame rate.
</details>

**Q2.** A designer wants a feature that costs 2 ms per frame. Your CPU budget at 60 fps currently totals 15.5 ms on average. What's the problem, even though 15.5 + 2 = 17.5 is "only" 0.8 ms over?

<details><summary>Answer</summary>

You're already using 93% of the budget on *average*, leaving ~1.2 ms headroom for spikes. Adding 2 ms puts the average over budget, so every frame misses 60 fps — and spikes will be much worse. You need to find savings elsewhere, scale the feature (update less often, fewer instances), or move it off the main thread.
</details>

**Q3.** Why is "who owns this decision and how expensive is it to change later?" a better question for an architect than "which pattern is best?"

<details><summary>Answer</summary>

Because cheap-to-change decisions don't need much architecture — pick something reasonable and move on. Expensive-to-change ones (entity model, threading, save format, networking) deserve prototypes, documents and measurement. Focusing effort on reversibility is how architects spend their limited time well.
</details>

**Q4.** One RAM access costs ~100 ns. How many cache misses would eat a full 60 fps frame?

<details><summary>Answer</summary>

16.67 ms / 100 ns ≈ **166,000** misses. Iterating a list of 10,000 heap-scattered objects and touching 5 pointers each can easily cost 50,000 misses — a third of your frame.
</details>

---

## 9. Back at the desk (≈30 min)

Start a **performance journal** — it becomes portfolio material later.

1. Open any project you have (one of your demos is fine) in your engine's profiler.
2. Record about 300 frames of normal gameplay.
3. In `journal/001-baseline.md` in this repo, write down:
   - Average frame time and worst frame time
   - Is it CPU-bound or GPU-bound? (Guess if unsure — Lesson 002 will teach you to check.)
   - The top 3 CPU costs by name
   - One thing that surprised you
4. Write a draft frame budget table for that game, like the one in section 5.

---

## 10. Vocabulary

- **Frame budget** — the time available per frame for a target frame rate.
- **CPU-bound / GPU-bound** — which processor limits the frame rate.
- **Headroom** — budget deliberately left unused to absorb spikes.
- **Cache miss** — data needed by the CPU isn't in cache and must come from slower memory.
- **Architecture decision** — a choice that is expensive to reverse.

---

## 11. Further reading

- *Game Programming Patterns* — Robert Nystrom (free online at gameprogrammingpatterns.com). Read "Game Loop" and "Data Locality" this week.
- *Game Engine Architecture* — Jason Gregory. The reference book for this whole course; skim the table of contents today.
- "Data-Oriented Design and C++" — Mike Acton, CppCon 2014 (talk on YouTube). Watch the first 20 minutes.
- "What Every Programmer Should Know About Memory" — Ulrich Drepper. Dense; keep it for Lesson 004.

---

**Tomorrow — Lesson 002: Anatomy of a frame.** What actually happens between two frames, how the CPU and GPU hand work to each other, and how to tell in two minutes which one is your bottleneck.
