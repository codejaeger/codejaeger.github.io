---
title: "DeltaCam: Differential Intrinsic Camera Modeling for Video Generation"
tags:
  - "computer-vision"
  - "photography"
  - "deep-learning"
  - "video-generation"
date: 2026-05-29
venue: "Arxiv Preprint"
authors:
  - "Debabrata Mandal"
  - "Zhihan Peng"
  - "Yujie Wang"
  - "Praneeth Chakravarthula"
path: "research/deltacam"
excerpt: "Photographic camera control during video generation."
selected: true
cover: "./representative_image.jpg"
links:
  - name: "project"
    url: "https://unc-vcail.github.io/delta-cam/"
  - name: "paper"
    url: "https://arxiv.org/abs/2605.25266"
priority: 10
---

## Abstract

Incorporating camera intrinsics into video generation models offers a principled way to control not only scene dynamics but also the imaging process that governs visual appearance. Prior work has primarily focused on extrinsic control, such as camera pose and motion, while treating intrinsic camera parameters as implicit or fixed. A key bottleneck is the lack of large-scale video datasets with accurate and diverse temporally varying camera metadata, which makes learning absolute camera parameterizations difficult. As a result, current models struggle to incorporate photographic camera behavior, including depth-of-field transitions, exposure variations, lens distortions, and color processing, in a controllable and temporally consistent manner. We introduce DeltaCam, a video diffusion framework that models camera behavior through Δ-parameterized neural camera adaptors, operating on relative changes in camera motion and intrinsics instead of absolute states. By learning this differential formulation from synthetic video data, we mitigate reliance on precise real-world camera labels and enable smooth, consistent control over imaging factors such as focal length, aperture, ISO, color temperature, and lens distortion. We extend this framework to real-world footage through two mechanisms: finetuning the controls on real image-metadata pairs for precise shot matching, and extracting disentangled embeddings for implicit video-to-video style transfer without requiring explicit camera parameters. By effectively separating scene content from intrinsic imaging behavior, DeltaCam enables camera-consistent video generation and editing operations that are difficult to achieve with existing models. Ultimately, our results establish a practical and scalable approach for bridging synthetic control and real-world photographic emulation. 

## Key Contributions
- **Δ-Parameterized Camera Control:** Introduces DeltaCam, a video diffusion framework that models camera behavior through *relative* changes (Δ) in motion and intrinsics rather than absolute states, mitigating reliance on precise real-world camera labels and yielding a roughly device-invariant inductive bias [Intro; Sec. 3.2].
- **Disentangled Extrinsic/Intrinsic Representation:** Separates camera extrinsics (pose, trajectory) from intrinsics (focal length, aperture, ISO, color temperature, lens distortion) along different control axes, unlike prior work that entangles them through joint spatial conditioning [Intro; Sec. 3.2; Fig. 4].
- **Reference-Driven Style Extraction:** Extracts temporally-varying camera style embeddings from videos, disentangled from scene content, enabling video-to-video photographic style transfer without requiring explicit camera parameters [Sec. 3.3; Fig. 6].
- **Real-World Camera Matching via PEFT:** Grounds the synthetic-trained model to absolute real cameras (Sony A7, Nikon Z6, Canon R6) from paired image–EXIF metadata, adapting to new camera types with less than 0.1% additional parameters and no backbone retraining [Sec. 3.4; Sec. 4.3.4].

## Results
- **Single-Effect State-of-the-Art:** Achieves the strongest average fidelity, improving PSNR by 3.1 dB and LPIPS by 0.12 over the next-best baseline, and leads on five of six effect categories, with the largest margins on photometric effects (Color Temp. +4.2 dB, Exposure +5.0 dB) [Table 2; Sec. 4.3.1].
- **Multi-Parameter Style Mixing:** Jointly modulates multiple intrinsic effects (e.g., focal length + color temperature, or bokeh + exposure) on a single source video without mutual interference or degradation of the underlying scene dynamics [Sec. 4.3.2; Fig. 9].
- **Accurate, Scene-Disentangled Style Extraction:** Attains high trajectory-prediction NCC with near-perfect scene disentanglement for photometric effects (color temp. 0.90, exposure 0.89, Style InfoNCE ≈ 0.03), outperforming both c-RADIO v4 baselines across every effect [Table 3; Sec. 4.3.3].
- **Validated Differential Formulation:** The Δ-parameterization with range normalization dramatically outperforms unnormalized absolute parameters (23.29 vs. 11.88 dB PSNR), with proxy-stream ablations showing the model treats geometric cues as redundant while source RGB carries the dominant appearance signal [Table 4; Sec. 4.4].

## Technical Approach
- **Camera Conditioning Module (CCM):** Models a general (non-pinhole) camera through a proxy that disentangles optical, sensory, and ISP parameter groups, each routed through a separate FiLM cascade before fusing with the base video latent [Sec. 3.2; Fig. 5].
- **Geometric Proxy Backbone:** Breaks the scene–camera circular dependency by anchoring content with the source video and conditioning generation on depth, optical flow, and perspective fields, with new extrinsic pose encoded as Plücker ray maps [Sec. 3.2; Fig. 4].
- **FiLM-Based Relative Modulation:** Compresses spatial proxy maps via a frozen 3D VAE, then applies affine FiLM layers (γ⊙h + β) whose parameters are predicted by an MLP from the relative intrinsics Δθ_t, preserving scene structure while shifting optical style [Sec. 3.2; Eq. 2].
- **Triplet Disentanglement Objective:** Trains on synthetic anchor/content/style video triplets using a frozen c-RADIO ViT-H backbone plus a temporal transformer, combining NCC trajectory, InfoNCE contrastive, and mutual-information losses to split content and style branches [Sec. 3.3; Eq. 4].
- **EXIF Metadata Tokenizer:** Maps absolute per-frame EXIF values to perceptually-linear normalized scalars via log-space mapping, then into the learned Δ-control space through a lightweight zero-initialized two-layer MLP [Sec. 3.4; Eq. 5].
- **Three-Stage Frozen-Backbone Curriculum:** Trains in stages over a frozen Wan-2.1 (1.3B) backbone — (1) base pre-training of the CCM and new attention blocks on synthetic data, (2) style-transfer adaptation of only the style extractor, (3) real-world matching of only the EXIF tokenizer — alongside a new windowed CLIP metric (wCLIP-5) for fine-grained optical evaluation [Sec. 3.5; Sec. 4.1–4.2; Fig. 7].
