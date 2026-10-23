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
| 008 | Threads, cores, contention and false sharing | ⬜ |
| 009 | Job systems and task graphs | ⬜ |
| 010 | Review: Module 1 + mini-project (measure cache effects yourself) | ⬜ |

## Module 2 — Core architecture patterns
| # | Title | Status |
|---|-------|--------|
| 011 | The game loop: fixed vs variable timestep | ⬜ |
| 012 | Entity models: inheritance → components → ECS | ⬜ |
| 013 | ECS deep dive: archetypes vs sparse sets | ⬜ |
| 014 | Events and messaging — and what they really cost | ⬜ |
| 015 | Singletons, service locators and dependency injection | ⬜ |
| 016 | State machines, hierarchical FSMs and behavior trees | ⬜ |
| 017 | Command pattern: input, undo, replays | ⬜ |
| 018 | Layered engine architecture and dependency rules | ⬜ |
| 019 | Data-driven design: configs, assets and data pipelines | ⬜ |
| 020 | Scripting layers and hot reload | ⬜ |
| 021 | Plugin and extension architecture | ⬜ |
| 022 | Review: Module 2 + architecture critique exercise | ⬜ |

## Module 3 — Rendering performance
| # | Title | Status |
|---|-------|--------|
| 023 | The GPU pipeline mental model | ⬜ |
| 024 | Draw calls, batching and instancing | ⬜ |
| 025 | Overdraw, fill rate and transparency | ⬜ |
| 026 | Shader cost and shader variant explosion | ⬜ |
| 027 | Culling: frustum, occlusion, HLOD | ⬜ |
| 028 | LOD systems and impostors | ⬜ |
| 029 | Texture memory, compression and mip streaming | ⬜ |
| 030 | Lighting cost: forward vs deferred vs clustered | ⬜ |
| 031 | Post-processing budgets | ⬜ |
| 032 | Mobile GPUs: tile-based rendering and bandwidth | ⬜ |
| 033 | GPU profiling tools: RenderDoc, PIX, vendor tools | ⬜ |
| 034 | Review: Module 3 + rendering case study | ⬜ |

## Module 4 — CPU & memory optimization
| # | Title | Status |
|---|-------|--------|
| 035 | Hypothesis-driven profiling methodology | ⬜ |
| 036 | Hot paths: algorithms before micro-optimizations | ⬜ |
| 037 | Spatial partitioning: grids, quadtrees, BVHs | ⬜ |
| 038 | Physics cost and how to tame it | ⬜ |
| 039 | Animation cost: skinning, culling, update rates | ⬜ |
| 040 | Allocation-free gameplay code and GC spikes | ⬜ |
| 041 | Object pooling done right (and when it hurts) | ⬜ |
| 042 | Hidden costs: strings, logging, reflection, boxing | ⬜ |
| 043 | Loading and streaming: async IO and asset bundling | ⬜ |
| 044 | Review: Module 4 + optimize-a-scene exercise | ⬜ |

## Module 5 — Systems at scale
| # | Title | Status |
|---|-------|--------|
| 045 | Asset pipeline architecture | ⬜ |
| 046 | Build pipelines and CI for games | ⬜ |
| 047 | Save systems and serialization versioning | ⬜ |
| 048 | Networking architecture: authority models | ⬜ |
| 049 | Netcode: interpolation, prediction, rollback | ⬜ |
| 050 | Online server architecture: rooms, shards, MMO zones | ⬜ |
| 051 | UI architecture: MVVM, retained vs immediate mode | ⬜ |
| 052 | Audio system budgets | ⬜ |
| 053 | AI at scale: time slicing and AI LOD | ⬜ |
| 054 | Tools and editor architecture | ⬜ |
| 055 | Telemetry and live-ops architecture | ⬜ |
| 056 | Review: Module 5 | ⬜ |

## Module 6 — Platform & production performance
| # | Title | Status |
|---|-------|--------|
| 057 | Memory budgets per platform | ⬜ |
| 058 | Mobile thermal throttling and battery | ⬜ |
| 059 | Frame pacing and stutter | ⬜ |
| 060 | Shader compilation stutter and PSO caching | ⬜ |
| 061 | Console and store certification: what architects must plan for | ⬜ |
| 062 | Performance budgets as a team process | ⬜ |
| 063 | Automated performance testing | ⬜ |
| 064 | Crash analysis and stability engineering | ⬜ |
| 065 | Managing technical debt and refactoring legacy code | ⬜ |
| 066 | Review: Module 6 | ⬜ |

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
