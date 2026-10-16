---
title: "EPIC: Epipolar-Consistent 360° Immersive Stereo Video Generation"
tags:
  - "computer-vision"
  - "video-generation"
  - "virtual-reality"
  - "deep-learning"
date: 2026-09-30
venue: "Under Review"
authors:
  - name: "Debabrata Mandal"
    url: "https://codejaeger.github.io"
  - "Dongdong Fu"
  - "Jonathon Miller"
  - "William Villareal"
  - "Xi Peng"
  - name: "Praneeth Chakravarthula"
    url: "https://www.cs.unc.edu/~cpk/"
path: "research/epic"
excerpt: "A zero-shot generative pipeline for 4K stereoscopic 360° video using an epipolar-aware consistency metric (PEGS) and direct preference optimization."
selected: true
cover: "./preview.png"
links:
  - name: "arxiv"
    url: "https://arxiv.org/abs/2609.38689"
priority: 8
---

## Abstract

Immersive displays can enable rich and diverse virtual experiences. Manually authoring every possible experience to realize this potential, however, is prohibitively expensive, difficult to scale, and impractical. Generative AI models could remove this bottleneck, but today's models are built for conventional displays and cannot generate the high-resolution, stereoscopic 360° content required for immersive viewing. Further, temporal and stereo inconsistencies that may be tolerable on conventional displays can become highly disruptive when viewed through an immersive headset.

We address this gap with a zero-shot generative pipeline that extends existing video diffusion models into 4K stereoscopic 360° videos. Inspired by binocular vision and depth perception, we develop an epipolar-aware 360° image matching metric (PEGS) that captures the temporal and stereo geometric inconsistencies across views and use it as a preference signal for direct preference optimization with limited training data.

## Key Contributions

- **PEGS Metric**: A pose-free Panoramic Epipolar Geometry Score formulated directly on the 360° viewing sphere, capturing stereo inconsistencies relevant to immersive displays and robust to independently moving objects.
- **Zero-Shot 360° Stereo Generation**: Adapts existing video diffusion models to produce 4K stereoscopic 360° videos without requiring large-scale immersive stereo training data.
- **DPO for Geometric Consistency**: Uses PEGS as a non-differentiable preference signal to construct (preferred, dispreferred) pairs for direct preference optimization, reducing geometric artifacts left by zero-shot stereo adaptation.
- **Stereoscopic Upsampling & Baseline Adjustment**: A panoramic upsampling stage reaching 4K output and a baseline adjustment procedure for comfortable headset viewing.
