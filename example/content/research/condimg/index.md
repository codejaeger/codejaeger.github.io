---
title: "Conditional Imaging for Privacy-Preserving Visual Sensing"
tags:
  - "computational-optics"
  - "computer-vision"
  - "privacy"
  - "deep-learning"
date: 2026-10-20
venue: "Arxiv Preprint"
authors:
  - "Hengyu Lian"
  - name: "Debabrata Mandal"
    url: "https://codejaeger.github.io"
  - "Anzhou Wen"
  - "Yujie Wang"
  - "Xi Peng"
  - name: "Praneeth Chakravarthula"
    url: "https://www.cs.unc.edu/~cpk/"
path: "research/condimg"
excerpt: "A conditional imaging framework that changes optical state per frame to preserve visual privacy while enabling authorized reconstruction."
selected: true
links:
  - name: "arxiv"
    url: "https://arxiv.org/abs/2610.28835"
priority: 6
---

## Abstract

A core tension in visual sensing is protecting sensitive information while maintaining the ability to recover it when authorized. Through information-theoretic analysis, we show that static optical systems cannot simultaneously achieve privacy and recoverability. We introduce conditional imaging, which changes the optical state for every captured frame so that measurements remain concealed without knowledge of the camera's physical configuration, yet enable reconstruction when that state information is available.

## Key Contributions

- **Information-Theoretic Analysis**: Formal proof that static optical systems cannot simultaneously guarantee privacy and authorized recoverability.
- **Conditional Imaging Framework**: A camera design that modulates its physical optical state per frame, decoupling observation from reconstruction.
- **Hardware Prototype**: A working camera prototype demonstrating the conditional imaging principle on real facial imagery.
- **Privacy-Utility Trade-off**: Demonstrated preservation of identity in authorized reconstructions while withholding visual information from unauthorized observers.
