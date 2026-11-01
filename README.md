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
| 025 | [Overdraw, Fill Rate and Transparency: The Big Catch Splash That Painted the Screen 8 Times](lessons/025-overdraw-fill-rate-and-transparency.md) | [Draw Call Lab](https://yimo691.github.io/GameArchitect/demos/024-draw-calls/) | 2026-10-30 |
| 026 | [Shader Cost and Shader Variant Explosion: The Uber Shader That Cost 9 ms, Then 41 Minutes](lessons/026-shader-cost-and-variant-explosion.md) | [Shader Lab](https://yimo691.github.io/GameArchitect/demos/026-shader-lab/) | 2026-10-31 |
| 027 | [Culling: Frustum, Occlusion and HLOD: The Harbor That Sent 3,120 Objects Nobody Could See](lessons/027-culling-frustum-occlusion-hlod.md) | [Draw Call Lab](https://yimo691.github.io/GameArchitect/demos/024-draw-calls/) | 2026-10-31 |
| 028 | [LOD Systems and Impostors: The Ferry Ride That Sent 3.36 Million Vertices to Tiny Houses](lessons/028-lod-systems-and-impostors.md) | [Draw Call Lab](https://yimo691.github.io/GameArchitect/demos/024-draw-calls/) | 2026-10-31 |
| 029 | [Texture Memory, Compression and Mip Streaming: The Harbor That Crashed Only the Cheap Phones](lessons/029-texture-memory-compression-mip-streaming.md) | [Texture Lab](https://yimo691.github.io/GameArchitect/demos/029-texture-lab/) | 2026-11-01 |
| 030 | [Lighting Cost, Forward vs Deferred vs Clustered: The 120 Lanterns That Lit Only Half the Street](lessons/030-lighting-cost-forward-deferred-clustered.md) | [Lighting Lab](https://yimo691.github.io/GameArchitect/demos/030-lighting-lab/) | 2026-11-01 |
| 031 | [Post-Processing Budgets: The Festival Look That Cost 18.4 ms After the Frame Was Done](lessons/031-post-processing-budgets.md) | [Post Lab](https://yimo691.github.io/GameArchitect/demos/031-post-lab/) | 2026-11-01 |
| 032 | [Mobile GPUs, Tile-Based Rendering and Bandwidth: The Harbor That Ran at 30 fps for Eight Minutes](lessons/032-mobile-gpus-tile-based-rendering-and-bandwidth.md) | [Tile Lab](https://yimo691.github.io/GameArchitect/demos/032-tile-lab/) | 2026-11-01 |
| 033 | [GPU Profiling Tools, RenderDoc, PIX and Vendor Tools: The Day Spent Optimizing the Wrong Draw](lessons/033-gpu-profiling-tools.md) | [GPU Pipeline Lab](https://yimo691.github.io/GameArchitect/demos/023-gpu-pipeline/) | 2026-11-01 |
| 034 | [Review: Module 3 + Rendering Case Study: The Coral Garden That Was Only 0.64 ms Over](lessons/034-review-module-3.md) | Challenges in the [GPU Pipeline Lab](https://yimo691.github.io/GameArchitect/demos/023-gpu-pipeline/), [Post Lab](https://yimo691.github.io/GameArchitect/demos/031-post-lab/) and [Tile Lab](https://yimo691.github.io/GameArchitect/demos/032-tile-lab/) | 2026-11-01 |
| 035 | [Hypothesis-Driven Profiling: The Net Hitch That Took Two Days, Then Forty Minutes](lessons/035-hypothesis-driven-profiling.md) | [Profiler Detective Lab](https://yimo691.github.io/GameArchitect/demos/003-profiler-detective/) | 2026-11-01 |
| 036 | [Hot Paths, Algorithms Before Micro-Optimizations: The Sonar That Got a Week of Tuning and Needed a HashSet](lessons/036-hot-paths-algorithms-before-micro-optimizations.md) | [Hot Path Lab](https://yimo691.github.io/GameArchitect/demos/036-hotpath-lab/) | 2026-11-01 |
| 037 | [Spatial Partitioning, Grids, Quadtrees and BVHs: The Quadtree That Made the Horde Slower](lessons/037-spatial-partitioning-grids-quadtrees-bvhs.md) | [Zombie Horde Lab](https://yimo691.github.io/GameArchitect/demos/001-zombie-horde/) | 2026-11-01 |
| 038 | [Physics Cost and How to Tame It: The Storm That Tipped 400 Crates Into the Harbor](lessons/038-physics-cost-and-how-to-tame-it.md) | [Physics Lab](https://yimo691.github.io/GameArchitect/demos/038-physics-lab/) | 2026-11-01 |
| 039 | [Animation Cost, Skinning, Culling and Update Rates: The 300 Dancing Fishermen](lessons/039-animation-cost-skinning-culling-update-rates.md) | [Animation Lab](https://yimo691.github.io/GameArchitect/demos/039-anim-lab/) | 2026-11-01 |
| 040 | [Allocation-Free Gameplay Code and GC Spikes: The Minigame That Hitched Every 7 Seconds](lessons/040-allocation-free-gameplay-code-and-gc-spikes.md) | [Memory & GC Lab](https://yimo691.github.io/GameArchitect/demos/007-memory-gc/) | 2026-11-01 |
| 041 | [Object Pooling Done Right (and When It Hurts): The Fireworks Finale and the Pool of 2,000 Rockets](lessons/041-object-pooling-done-right.md) | [Memory & GC Lab](https://yimo691.github.io/GameArchitect/demos/007-memory-gc/) | 2026-11-01 |
| 042 | [Hidden Costs: Strings, Logging, Reflection and Boxing: The Market Board That Logged to Nobody](lessons/042-hidden-costs-strings-logging-reflection-boxing.md) | [Memory & GC Lab](https://yimo691.github.io/GameArchitect/demos/007-memory-gc/) | 2026-11-01 |
| 043 | [Loading and Streaming, Async IO and Asset Bundling: The Island That Froze the Screen for 9.5 Seconds](lessons/043-loading-and-streaming-async-io-and-asset-bundling.md) | [Streaming Lab](https://yimo691.github.io/GameArchitect/demos/043-streaming-lab/) | 2026-11-01 |
| 044 | [Review: Module 4 + Optimize-a-Scene Exercise: The Festival Night at 36.90 ms](lessons/044-review-module-4.md) | Challenges in the [Hot Path Lab](https://yimo691.github.io/GameArchitect/demos/036-hotpath-lab/), [Animation Lab](https://yimo691.github.io/GameArchitect/demos/039-anim-lab/) and [Streaming Lab](https://yimo691.github.io/GameArchitect/demos/043-streaming-lab/) | 2026-11-01 |
| 045 | [Asset Pipeline Architecture: The Fish That Made the Build 300 MB Bigger](lessons/045-asset-pipeline-architecture.md) | [Pipeline Lab](https://yimo691.github.io/GameArchitect/demos/045-pipeline-lab/) | 2026-11-01 |
| 046 | [Build Pipelines and CI for Games: The Nightly Build Nobody Could Blame](lessons/046-build-pipelines-and-ci-for-games.md) | [CI Lab](https://yimo691.github.io/GameArchitect/demos/046-ci-lab/) | 2026-11-01 |
| 047 | [Save Systems and Serialization Versioning: The Update That Sank 30,000 Boats](lessons/047-save-systems-and-serialization-versioning.md) | [Save Lab](https://yimo691.github.io/GameArchitect/demos/047-save-lab/) | 2026-11-01 |
| 048 | [Networking Architecture: Authority Models: Two Players, One Fish](lessons/048-networking-architecture-authority-models.md) | [Netcode Lab](https://yimo691.github.io/GameArchitect/demos/048-netcode/) | 2026-11-01 |
| 049 | [Netcode: Interpolation, Prediction, Rollback: Fishing From Sydney](lessons/049-netcode-interpolation-prediction-rollback.md) | [Netcode Lab](https://yimo691.github.io/GameArchitect/demos/048-netcode/) | 2026-11-01 |
| 050 | [Online Server Architecture: Rooms, Shards, MMO Zones: 2,000 Players, One Lake](lessons/050-online-server-architecture-rooms-shards-mmo-zones.md) | [Server Lab](https://yimo691.github.io/GameArchitect/demos/050-server-lab/) | 2026-11-01 |
| 051 | [UI Architecture: MVVM, Retained vs Immediate Mode: The Tackle Box That Stuttered](lessons/051-ui-architecture-mvvm-retained-vs-immediate-mode.md) | [UI Lab](https://yimo691.github.io/GameArchitect/demos/051-ui-lab/) | 2026-11-01 |
