---
title: "COLORS: Continual Learning with Consolidated Orthogonal LoRA Subspaces"
tags:
  - "computer-vision"
  - "deep-learning"
  - "continual-learning"
  - "image-restoration"
date: 2026-10-01
venue: "Under Review"
authors:
  - name: "Debabrata Mandal"
    url: "https://codejaeger.github.io"
  - name: "Praneeth Chakravarthula"
    url: "https://www.cs.unc.edu/~cpk/"
path: "research/colors"
excerpt: "A continual learning framework enabling foundational models to learn expanding task sets via orthogonal LoRA subspaces, with provable zero-forgetting and flat training cost."
selected: true
cover: "./preview.png"
links:
  - name: "arxiv"
    url: "coming-soon"
priority: 7
---

## Abstract

We introduce Consolidated Orthogonal LoRA Subspaces (COLORS), a continual learning framework that enables foundational models to learn an expanding set of tasks while consolidating shared skills, with minimal parameter growth and without forgetting previously learned tasks. COLORS makes no assumptions about task ordering and provably preserves previously learned tasks exactly. Under a cheaply verifiable incoherence condition between tasks, we further show that each new task can be learned to near-oracle quality.

## Key Contributions

- **Orthogonal Subspace Organization**: COLORS organizes LoRA updates into orthogonal subspaces that preserve previously learned task solutions while consolidating reusable structures within a compact parameter budget — 3.5× smaller than separate adapters.
- **Provable Zero-Forgetting**: Guarantees that existing basis directions are never modified; previous tasks are re-expressed exactly in the expanded basis after each new task is learned, independent of task order.
- **Rank-Space Factorization**: Efficient consolidation via rank-space Gram–Schmidt, avoiding repeated orthogonalization in the full parameter space.
- **Rank Consolidation**: An offline, data-free post-task step that promotes recurring residual structure into the shared basis.

## Results

Across challenging image-to-image transformation task sets — including diverse image restoration benchmarks and stylization tasks such as cartoonization — COLORS continually adapts multiple foundational-model backbones (SD, Sana, Flux-1) while often outperforming state-of-the-art continual learning methods in reconstruction quality.
