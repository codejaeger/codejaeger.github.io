---
title: "EPIC: Epipolar-Consistent 360° Immersive Stereo Video Generation"
tags:
  - "computer-vision"
  - "video-generation"
  - "virtual-reality"
  - "deep-learning"
date: 2026-09-30
venue: "IEEE VR 2027"
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
excerpt: "A zero-shot generative pipeline for 4K stereoscopic 360° video using epipolar-aware preference optimization."
selected: true
links:
  - name: "arxiv"
    url: "https://arxiv.org/abs/2609.38689"
priority: 8
---

## Abstract

Immersive displays can enable rich and diverse virtual experiences, yet manual content creation remains impractical at scale. We present EPIC, a pipeline that adapts existing video diffusion models to generate high-resolution, stereoscopic 360° videos. We introduce an epipolar-aware 360° image matching metric that captures the temporal and stereo geometric inconsistencies across views, which serves as a preference signal for direct preference optimization using limited training data. Our approach provides a scalable path for bringing generative content to immersive displays, allowing diverse mixed reality experiences on demand.

## Key Contributions

- **Epipolar-Aware Metric**: An epipolar-consistent matching metric that jointly measures temporal and stereo geometric inconsistencies across omnidirectional views.
- **Zero-Shot 360° Stereo Generation**: Adapts existing video diffusion models to produce 4K stereoscopic 360° videos without requiring large paired training datasets.
- **Direct Preference Optimization**: Leverages the epipolar metric as a reward signal for DPO training on limited data, fine-tuning the model toward geometrically consistent stereo outputs.
- **Scalable Immersive Content Pipeline**: Enables on-demand generation of diverse mixed reality experiences for headset displays.

## Technical Approach

Our framework extends a base video diffusion model with an epipolar-aware geometric consistency objective. The epipolar-aware 360° matching metric quantifies left-right view disparity consistency and temporal coherence across the equirectangular projection, providing a differentiable signal for preference-based optimization. By combining this metric with direct preference optimization, we steer generation toward high-quality stereoscopic content while preserving the broad generative capabilities of the base model.
