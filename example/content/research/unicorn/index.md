---
title: "UniCoRN: Latent Diffusion-based Unified Controllable Image Restoration Network"
tags:
  - "computer-vision"
  - "deep-learning"
  - "image-restoration"
  - "diffusion-models"
  - "computational-optics"
date: 2025-03-20
venue: "arXiv preprint arXiv:2503.15868"
authors:
  - name: "Debabrata Mandal"
    url: "https://codejaeger.github.io"
  - "Soumitri Chattopadhyay"
  - "Guansen Tong"
  - name: "Praneeth Chakravarthula"
    url: "https://www.cs.unc.edu/~cpk/"
path: "research/unicorn"
excerpt: "A unified image restoration approach capable of handling multiple degradation types simultaneously using a multi-head diffusion model."
selected: true
cover: "./preview.png"
links:
  - name: "project"
    url: "https://codejaeger.github.io/unicorn-gh"
  - name: "paper"
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DimYa_IAAAAJ&authuser=2&citation_for_view=DimYa_IAAAAJ:2osOgNQ5qMEC"
priority: 10
---

## Abstract

Image restoration is essential for enhancing degraded images across computer vision tasks. However, most existing methods address only a single type of degradation (e.g., blur, noise, or haze) at a time, limiting their real-world applicability where multiple degradations often occur simultaneously.

## Key Contributions

- **Unified Framework**: We propose UniCoRN, a unified image restoration approach capable of handling multiple degradation types simultaneously using a multi-head diffusion model.

- **Multi-head Control Network**: We design a multi-head control network adaptable via a mixture-of-experts strategy that leverages low-level visual cues extracted from images.

- **Curriculum Learning**: We train our model without any prior assumption of specific degradations, through a smartly designed curriculum learning recipe.

- **MetaRestore Benchmark**: We introduce MetaRestore, a metalens imaging benchmark containing images with multiple degradations and artifacts.

## Results

Extensive evaluations on several challenging datasets, including our benchmark, demonstrate that our method achieves significant performance gains and can robustly restore images with severe degradations.

## Technical Approach

Our approach uncovers the potential of low-level visual cues extracted from images in guiding a controllable diffusion model for real-world image restoration. The multi-head architecture enables simultaneous handling of various degradation types while maintaining computational efficiency.
