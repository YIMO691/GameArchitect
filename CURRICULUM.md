# Curriculum — From Junior Game Dev to Game Architect & Optimizer

One lesson per day, ~15–20 minutes of reading, written to be read on a phone (on a chairlift or while waiting for a bite). Every 7th-ish lesson is a review that ties the module together.

Status legend: ✅ published · ⬜ upcoming

The daily job writes the **first ⬜ lesson** in this list, then flips it to ✅.

---

## Module 0 — Orientation
| # | Title | Status |
|---|-------|--------|
| 001 | What architects and optimizers actually do: the zombie horde problem | ✅ |
| 002 | Anatomy of a frame: the week of CPU work that changed nothing | ✅ |
| 003 | The measurement mindset: the 65 fps game that players called choppy | ✅ |

## Module 1 — Hardware reality
| # | Title | Status |
|---|-------|--------|
| 004 | CPU caches and the memory hierarchy: the particle update that got slower after 3 seconds | ✅ |
| 005 | Data-oriented design, AoS vs SoA: the age loop that cost as much as movement | ✅ |
| 006 | Branch prediction, SIMD and why "clever" code is often slow: the one `if` that cost 1.4 ms | ✅ |
| 007 | Memory allocation, pools, arenas and garbage collection: the blood splash that froze the game every 3.7 seconds | ✅ |
| 008 | Threads, cores, contention and false sharing: the 8-thread particle update that was only 2× faster | ✅ |
| 009 | Job systems and task graphs: the frame that moved to jobs and got slower | ✅ |
| 010 | Review: Module 1 + mini-project: the ember swarm pull request that cost 62 ns per ember | ✅ |

## Module 2 — Core architecture patterns
| # | Title | Status |
|---|-------|--------|
| 011 | The game loop, fixed vs variable timestep: the ledge that 30 fps players could not reach | ✅ |
| 012 | Entity models, inheritance → components → ECS: the gull that broke the class tree | ✅ |
| 013 | ECS deep dive, archetypes vs sparse sets: the storm that moved 2,400 fish per step | ✅ |
| 014 | Events and messaging, and what they really cost: the feeding frenzy that broke the event bus | ✅ |
| 015 | Singletons, service locators and dependency injection: the high score that reset to zero | ✅ |
| 016 | State machines, hierarchical FSMs and behavior trees: the gulls that hovered forever | ✅ |
| 017 | Command pattern for input, undo and replays: the swallowed hook nobody could replay | ✅ |
| 018 | Layered engine architecture and dependency rules: the 48-second wait and the replay server that needed a GPU | ✅ |
| 019 | Data-driven design: configs, assets and data pipelines: the 15-minute tweak and the 1.9-second start-up | ✅ |
| 020 | Scripting layers and hot reload: the rule that kept running after it was deleted | ✅ |
| 021 | Plugin and extension architecture: the tournament that doubled every fish | ✅ |
| 022 | Review: Module 2 + architecture critique exercise: the Whale Week design that broke every rule once | ✅ |

## Module 3 — Rendering performance
| # | Title | Status |
|---|-------|--------|
| 023 | The GPU pipeline mental model: the Coral Garden that halved its triangles and gained 0 ms | ✅ |
| 024 | Draw calls, batching and instancing: the 1,200 fish that cost nothing on the GPU and 32 ms on the CPU | ✅ |
| 025 | Overdraw, fill rate and transparency: the Big Catch splash that painted the screen 8 times | ✅ |
| 026 | Shader cost and shader variant explosion: the uber shader that cost 9 ms, then 41 minutes | ✅ |
| 027 | Culling: frustum, occlusion, HLOD: the harbor that sent 3,120 objects nobody could see | ✅ |
| 028 | LOD systems and impostors: the ferry ride that sent 3.36 million vertices to tiny houses | ✅ |
| 029 | Texture memory, compression and mip streaming: the harbor that crashed only the cheap phones | ✅ |
| 030 | Lighting cost, forward vs deferred vs clustered: the 120 lanterns that lit only half the street | ✅ |
| 031 | Post-processing budgets: the festival look that cost 18.4 ms after the frame was done | ✅ |
| 032 | Mobile GPUs, tile-based rendering and bandwidth: the harbor that ran at 30 fps for eight minutes | ✅ |
| 033 | GPU profiling tools: RenderDoc, PIX, vendor tools: the day spent optimizing the wrong draw | ✅ |
| 034 | Review: Module 3 + rendering case study: the Coral Garden that was only 0.64 ms over | ✅ |

## Module 4 — CPU & memory optimization
| # | Title | Status |
|---|-------|--------|
| 035 | Hypothesis-driven profiling methodology: the net hitch that took two days, then forty minutes | ✅ |
| 036 | Hot paths: algorithms before micro-optimizations: the sonar that got a week of tuning and needed a HashSet | ✅ |
| 037 | Spatial partitioning: grids, quadtrees, BVHs: the quadtree that made the horde slower | ✅ |
| 038 | Physics cost and how to tame it: the storm that tipped 400 crates into the harbor | ✅ |
| 039 | Animation cost: skinning, culling, update rates: the 300 dancing fishermen on the festival pier | ✅ |
| 040 | Allocation-free gameplay code and GC spikes: the minigame that hitched every 7 seconds | ✅ |
| 041 | Object pooling done right (and when it hurts): the fireworks finale and the pool of 2,000 rockets | ✅ |
| 042 | Hidden costs: strings, logging, reflection, boxing: the market board that logged to nobody | ✅ |
| 043 | Loading and streaming: async IO and asset bundling: the island that froze the screen for 9.5 seconds | ✅ |
| 044 | Review: Module 4 + optimize-a-scene exercise: the festival night at 36.90 ms | ✅ |

## Module 5 — Systems at scale
| # | Title | Status |
|---|-------|--------|
| 045 | Asset pipeline architecture: the fish that made the build 300 MB bigger | ✅ |
| 046 | Build pipelines and CI for games: the nightly build nobody could blame | ✅ |
| 047 | Save systems and serialization versioning: the update that sank 30,000 boats | ✅ |
| 048 | Networking architecture: authority models: two players, one fish | ✅ |
| 049 | Netcode: interpolation, prediction, rollback: fishing from Sydney | ✅ |
| 050 | Online server architecture: rooms, shards, MMO zones: 2,000 players, one lake | ✅ |
| 051 | UI architecture: MVVM, retained vs immediate mode: the tackle box that stuttered | ✅ |
| 052 | Audio system budgets: 180 sounds at the finale | ✅ |
| 053 | AI at scale: time slicing and AI LOD: 5,000 zombies need brains | ✅ |
| 054 | Tools and editor architecture: five designers, thirty lost hours | ✅ |
| 055 | Telemetry and live-ops architecture: why 18% quit on day 2 | ✅ |
| 056 | Review: Module 5 + launch review exercise: two weeks before the Grand Lake | ✅ |

## Module 6 — Platform & production performance
| # | Title | Status |
|---|-------|--------|
| 057 | Memory budgets per platform: the build that died on two phones | ✅ |
| 058 | Mobile thermal throttling and battery | ✅ |
| 059 | Frame pacing and stutter | ✅ |
| 060 | Shader compilation stutter and PSO caching | ✅ |
| 061 | Console and store certification: what architects must plan for | ✅ |
| 062 | Performance budgets as a team process | ✅ |
| 063 | Automated performance testing | ✅ |
| 064 | Crash analysis and stability engineering | ✅ |
| 065 | Managing technical debt and refactoring legacy code | ✅ |
| 066 | Review: Module 6 + launch week exercise: the Reef comes to the handheld | ✅ |

## Module 7 — The architect's craft
| # | Title | Status |
|---|-------|--------|
| 067 | Writing technical design documents | ⬜ |
| 068 | Architecture decision records | ⬜ |
| 069 | A framework for evaluating trade-offs | ⬜ |
| 070 | Reviewing code as an architect | ⬜ |
| 071 | Working with designers and artists | ⬜ |
| 072 | Estimating technical risk | ⬜ |
| 073 | Leading a vertical slice | ⬜ |
| 074 | Directing AI coding tools as an architect | ⬜ |
| 075 | Case study: anatomy of a commercial engine runtime | ⬜ |
| 076 | Case study: optimizing an open world | ⬜ |
| 077 | Interview prep: architecture questions | ⬜ |
| 078 | Interview prep: optimization questions | ⬜ |
| 079 | Building a portfolio that proves architect-level skill | ⬜ |
| 080 | Capstone: plan your own architecture + optimization project | ⬜ |

## After Lesson 080 — Deep-dive series
When every lesson above is ✅, the daily job appends a new "Deep dive" module of 10 lessons that goes deeper into the area the learner most needs (default rotation: rendering → memory → multithreading → netcode → tools), adds it to this file, and continues.
