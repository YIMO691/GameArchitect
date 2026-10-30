# Game Architect Path 🎿🎣

A daily course that takes a junior game developer to **game architect and performance optimizer** — one ~15-minute lesson a day, written to be read on a phone.

A new lesson every 4 hours (six a day), each with its own lab: ready by about 12:50 AM, 4:50 AM, 8:50 AM, 12:50 PM, 4:50 PM and 8:50 PM (New York time). Read at your own pace; the lessons wait for you.

## Why this path
AI tools write plausible code quickly. What they can't do on their own is make decisions under constraints that aren't in the prompt (frame budgets, memory per platform, save-file compatibility, team skills), measure reality on target hardware, and own the long-term consequences. That's the architect's and optimizer's job — and the focus of this course.

## How to use it
1. Read today's lesson anywhere. Answer the "Think about it on the lift" questions in your head.
2. Open the lesson's **lab** (🎮 link at the top of the lesson) and tap **Set up** on each "Try this" step. Labs run in a phone browser.
3. When you're back at a desk, do the 30-minute exercise and record results in `journal/`.
4. Every ~10 lessons there's a review with a quiz and a bigger exercise.

- 📚 Full roadmap: [CURRICULUM.md](CURRICULUM.md)
- ✍️ Lesson format and rules: [AUTHORING.md](AUTHORING.md)
- 📓 Your notes and measurements: [journal/](journal/)
- 🎮 Interactive labs: **[https://yimo691.github.io/GameArchitect/demos/](https://yimo691.github.io/GameArchitect/demos/)** (source in [demos/src/](demos/src/))

## Lessons
| # | Lesson | Lab | Date |
|---|--------|-----|------|
| 001 | [What architects and optimizers actually do: the zombie horde problem](lessons/001-what-architects-and-optimizers-do.md) | [Zombie Horde](https://yimo691.github.io/GameArchitect/demos/001-zombie-horde/) | 2026-10-19 |
| 002 | [Anatomy of a Frame: The Week of CPU Work That Changed Nothing](lessons/002-anatomy-of-a-frame.md) | [Frame Pipeline](https://yimo691.github.io/GameArchitect/demos/002-frame-pipeline/) | 2026-10-19 |
| 003 | [The Measurement Mindset: The 65 fps Game That Players Called Choppy](lessons/003-the-measurement-mindset.md) | [Profiler Detective](https://yimo691.github.io/GameArchitect/demos/003-profiler-detective/) | 2026-10-20 |
| 004 | [CPU Caches and the Memory Hierarchy: The Particle Update That Got Slower After 3 Seconds](lessons/004-cpu-caches-and-the-memory-hierarchy.md) | [Cache Lab](https://yimo691.github.io/GameArchitect/demos/004-cache-lab/) | 2026-10-21 |
| 005 | [Data-Oriented Design, AoS vs SoA: The Age Loop That Cost as Much as Movement](lessons/005-data-oriented-design-aos-vs-soa.md) | [Cache Lab](https://yimo691.github.io/GameArchitect/demos/004-cache-lab/) | 2026-10-21 |
| 006 | [Branch Prediction, SIMD and Why "Clever" Code Is Often Slow: The One `if` That Cost 1.4 ms](lessons/006-branch-prediction-and-simd.md) | [Cache Lab](https://yimo691.github.io/GameArchitect/demos/004-cache-lab/) | 2026-10-22 |
| 007 | [Memory Allocation, Pools, Arenas and Garbage Collection: The Blood Splash That Froze the Game Every 3.7 Seconds](lessons/007-memory-allocation-pools-arenas-gc.md) | [Memory & GC Lab](https://yimo691.github.io/GameArchitect/demos/007-memory-gc/) | 2026-10-22 |
| 008 | [Threads, Cores, Contention and False Sharing: The 8-Thread Particle Update That Was Only 2× Faster](lessons/008-threads-cores-contention-false-sharing.md) | [Jobs Lab](https://yimo691.github.io/GameArchitect/demos/008-jobs-lab/) | 2026-10-23 |
| 009 | [Job Systems and Task Graphs: The Frame That Moved to Jobs and Got Slower](lessons/009-job-systems-and-task-graphs.md) | [Jobs Lab](https://yimo691.github.io/GameArchitect/demos/008-jobs-lab/) | 2026-10-23 |
| 010 | [Review: Module 1 + Mini-Project: The Ember Swarm Pull Request That Cost 62 ns per Ember](lessons/010-review-module-1.md) | [Challenge in the Cache Lab](https://yimo691.github.io/GameArchitect/demos/004-cache-lab/), [Memory & GC Lab](https://yimo691.github.io/GameArchitect/demos/007-memory-gc/) and [Jobs Lab](https://yimo691.github.io/GameArchitect/demos/008-jobs-lab/) | 2026-10-24 |
| 011 | [The Game Loop, Fixed vs Variable Timestep: The Ledge That 30 fps Players Could Not Reach](lessons/011-the-game-loop-fixed-vs-variable-timestep.md) | [Game Loop](https://yimo691.github.io/GameArchitect/demos/011-game-loop/) | 2026-10-24 |
| 012 | [Entity Models, Inheritance → Components → ECS: The Gull That Broke the Class Tree](lessons/012-entity-models-inheritance-components-ecs.md) | [ECS Lab](https://yimo691.github.io/GameArchitect/demos/012-ecs-lab/) | 2026-10-25 |
| 013 | [ECS Deep Dive, Archetypes vs Sparse Sets: The Storm That Moved 2,400 Fish per Step](lessons/013-ecs-deep-dive-archetypes-vs-sparse-sets.md) | [ECS Lab](https://yimo691.github.io/GameArchitect/demos/012-ecs-lab/) | 2026-10-25 |
| 014 | [Events and Messaging, and What They Really Cost: The Feeding Frenzy That Broke the Event Bus](lessons/014-events-and-messaging.md) | [Events Lab](https://yimo691.github.io/GameArchitect/demos/014-events-lab/) | 2026-10-26 |
| 015 | [Singletons, Service Locators and Dependency Injection: The High Score That Reset to Zero](lessons/015-singletons-service-locators-dependency-injection.md) | [Services Lab](https://yimo691.github.io/GameArchitect/demos/015-services-lab/) | 2026-10-26 |
| 016 | [State Machines, Hierarchical FSMs and Behavior Trees: The Gulls That Hovered Forever](lessons/016-state-machines-hfsm-behavior-trees.md) | [Gull Brain Lab](https://yimo691.github.io/GameArchitect/demos/016-gull-brain/) | 2026-10-27 |
| 017 | [Command Pattern for Input, Undo and Replays: The Swallowed Hook Nobody Could Replay](lessons/017-command-pattern-input-undo-replays.md) | [Command Lab](https://yimo691.github.io/GameArchitect/demos/017-command-lab/) | 2026-10-27 |
| 018 | [Layered Engine Architecture and Dependency Rules: The 48-Second Wait and the Replay Server That Needed a GPU](lessons/018-layered-architecture-and-dependency-rules.md) | [Layers Lab](https://yimo691.github.io/GameArchitect/demos/018-layers-lab/) | 2026-10-28 |
| 019 | [Data-Driven Design, Configs and Data Pipelines: The 15-Minute Tweak and the 1.9-Second Start-Up](lessons/019-data-driven-design-configs-and-pipelines.md) | [Tuning Lab](https://yimo691.github.io/GameArchitect/demos/019-tuning-lab/) | 2026-10-28 |
| 020 | [Scripting Layers and Hot Reload: The Rule That Kept Running After It Was Deleted](lessons/020-scripting-layers-and-hot-reload.md) | [Tuning Lab](https://yimo691.github.io/GameArchitect/demos/019-tuning-lab/) | 2026-10-29 |
| 021 | [Plugin and Extension Architecture: The Tournament That Doubled Every Fish](lessons/021-plugin-and-extension-architecture.md) | [Plugin Lab](https://yimo691.github.io/GameArchitect/demos/021-plugin-lab/) | 2026-10-29 |
| 022 | [Review: Module 2 + Architecture Critique: The Whale Week Design That Broke Every Rule Once](lessons/022-review-module-2.md) | [Challenge in the ECS Lab](https://yimo691.github.io/GameArchitect/demos/012-ecs-lab/), [Events Lab](https://yimo691.github.io/GameArchitect/demos/014-events-lab/), [Services Lab](https://yimo691.github.io/GameArchitect/demos/015-services-lab/) and [Command Lab](https://yimo691.github.io/GameArchitect/demos/017-command-lab/) | 2026-10-30 |
| 023 | [The GPU Pipeline Mental Model: The Coral Garden That Halved Its Triangles and Gained 0 ms](lessons/023-the-gpu-pipeline-mental-model.md) | [GPU Pipeline Lab](https://yimo691.github.io/GameArchitect/demos/023-gpu-pipeline/) | 2026-10-30 |
| 024 | [Draw Calls, Batching and Instancing: The 1,200 Fish That Cost Nothing on the GPU and 32 ms on the CPU](lessons/024-draw-calls-batching-and-instancing.md) | [Draw Call Lab](https://yimo691.github.io/GameArchitect/demos/024-draw-calls/) | 2026-10-30 |
