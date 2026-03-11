---
title: "UnSCAR: Universal, Scalable, Controllable, and Adaptable Image Restoration"
tags:
  - "computer-vision"
  - "deep-learning"
  - "image-restoration"
  - "diffusion-models"
date: 2026-03-05
venue: "Arxiv Preprint"
authors:
  - name: "Debabrata Mandal"
    url: "https://codejaeger.github.io"
  - "Soumitri Chattopadhyay"
  - "Yujie Wang"
  - name: "Marc Niethammer"
    url: "https://profiles.ucsd.edu/marc.niethammer"
  - name: "Praneeth Chakravarthula"
    url: "https://www.cs.unc.edu/~cpk/"
path: "research/unscar"
excerpt: "All-in-one restoration model with novel controllable sliders."
selected: true
cover: "./preview.png"
links:
  - name: "project"
    url: "#"
  - name: "paper"
    url: "https://arxiv.org/abs/2603.07406"
priority: 10
---

## Abstract

Universal image restoration aims to recover clean images from arbitrary real-world degradations using a single inference model. Despite significant progress, existing all-in-one restoration networks do not scale to multiple degradations. As the number of degradations increases, training becomes unstable, models grow excessively large, and performance drops across both seen and unseen domains. In this work, we show that scaling universal restoration is fundamentally limited by interference across degradations during joint learning, leading to catastrophic task forgetting. To address this challenge, we introduce a unified inference pipeline with a multi-branch mixture-of-experts architecture that decomposes restoration knowledge across specialized task-adaptable experts. Our approach enables scalable learning (over sixteen degradations), adapts and generalizes robustly to unseen domains, and supports user-controllable restoration across degradations. Beyond achieving superior performance across benchmarks, this work establishes a new design paradigm for scalable and controllable universal image restoration. 

## Key Contributions

- **Scalable Universal Restoration:** Proposes UNSCAR, a unified inference pipeline capable of handling over sixteen different image degradations within a single model[cite: 10, 81].
- **Mitigation of Catastrophic Forgetting:** Introduces a multi-branch mixture-of-experts (MoE) architecture that decomposes restoration knowledge across specialized experts to prevent task interference during joint learning[cite: 9, 10].
- **User-Controllable Editing:** Implements a test-time degradation slider mechanism that allows users to independently control and manipulate the intensity of specific restoration tasks by softly reweighting expert activations[cite: 86, 89].
- **Out-of-Domain Adaptability:** Demonstrates a parameter-efficient fine-tuning (PEFT) approach for zero-shot and few-shot adaptation to completely unseen and complex domains, such as medical imagery[cite: 91, 92].

## Results

- **Single-Degradation State-of-the-Art:** Achieved state-of-the-art performance on 11 out of 16 single-degradation benchmarks, demonstrating superior restoration of fine details like hair strands and tiny objects compared to prior universal models[cite: 438, 440].
- **Mixed and In-the-Wild Superiority:** Outperformed baseline approaches by significant margins in zero-shot evaluations on both synthetically mixed datasets and real-world, in-the-wild degradations[cite: 443, 462].
- **Robust Medical Imaging Transfer:** Showed highly competitive performance against specialized in-domain models when adapting to out-of-distribution tasks like laparoscopic de-smoking and fundus image restoration, proving robust generalization[cite: 466, 468].

## Technical Approach

- **Unified Guidance Representation:** Replaces manual task-to-cue routing with a unified guidance encoder that independently processes the degraded image and enriched low-level visual priors (e.g., edges, noise maps) through NAF layers before aggregating them[cite: 156, 158, 160].
- **Degradation-Aware Embeddings:** Augments a CLIP image encoder with a degradation controller head to disentangle image content embeddings from degradation embeddings, trained via a Sigmoid loss (SigLIP)[cite: 228, 414].
- **Capacity-Efficient ControlNet:** Utilizes a shared squeeze-and-excite mechanism to amortize control computations across tasks, improving conditional capacity without proportional parameter growth[cite: 232, 237].
- **Global MoE Routing:** Employs a global task-level routing strategy that predicts a single normalized weight vector over degradation tasks, replacing complex spatially varying routing for better interpretability[cite: 241, 244].
- **Bidirectional Feedback Synchronization:** Enables early feature exchange from the control encoder back to the frozen diffusion backbone encoder, distributing correction strain across the network rather than relying solely on decoder-side injection[cite: 254, 258].