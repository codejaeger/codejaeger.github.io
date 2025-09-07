---
title: "High-Quality Dynamic Range Imaging from Extreme Degraded Metalens Bursts"
tags:
  - "computational-optics"
  - "metalens"
  - "hdr-imaging"
  - "burst-photography"
  - "computer-vision"
date: 2025-02-22
venue: "WACV 2025 Conference Submission (Under Review)"
authors:
  - name: "Debabrata Mandal"
    url: "https://codejaeger.github.io"
  - "Yujie Wang"
  - "Zhihan Peng"
  - name: "Praneeth Chakravarthula"
    url: "https://www.cs.unc.edu/~cpk/"
path: "research/metalens-hdr"
excerpt: "First multi-image restoration framework for HDR and aberration removal, specifically tailored for handheld metalens cameras."
selected: true
cover: "./preview.png"
links:
  - name: "paper"
    url: "#"
  - name: "project"
    url: "#"
priority: 5
---

## Abstract

Metalenses offer nanoscale control of light, enabling ultra-thin, lightweight optics that could revolutionize handheld consumer imaging, and augmented and virtual reality. However, their adoption is hindered by severe chromatic aberrations, light scattering, limited broadband performance, and low optical efficiency.

## Key Innovation

Building on insights from burst imaging (widely used in smartphone cameras), we design and prototype a **thinner metalens** compared to conventional compound optical lenses and introduce the **first multi-image restoration framework** for HDR and aberration removal, specifically tailored for handheld metalens cameras.

## Technical Contributions

- **Hardware Design**: Ultra-thin metalens prototype with improved optical characteristics
- **Restoration Framework**: Novel multi-image processing pipeline for extreme degradation correction
- **Lightweight Architecture**: Memory-efficient burst fusion network optimized for mobile deployment
- **Adaptive Correction**: Dynamic aberration correction techniques based on capture conditions

## Framework Features

Our restoration framework includes:
- **Lightweight Network**: Optimized for real-time processing on mobile hardware
- **Memory Efficient Burst Fusion**: Advanced algorithms for combining multiple degraded captures
- **Adaptive Correction Techniques**: Context-aware restoration based on scene analysis

## Evaluation

We evaluate our framework on a **new large-scale metalens HDR dataset** and validate its effectiveness against several state-of-the-art burst imaging and restoration algorithms, demonstrating:
- Superior HDR reconstruction quality
- Effective chromatic aberration correction
- Real-time performance on consumer hardware
- Robust performance across diverse imaging conditions

## Impact

This work represents a significant step toward practical metalens adoption in consumer devices by:
- Addressing fundamental optical limitations through computational methods
- Enabling HDR imaging with ultra-compact optics
- Demonstrating real-world applicability of metalens technology
- Providing a comprehensive solution for handheld metalens cameras

## Applications

Potential applications include:
- **Smartphone Cameras**: Ultra-thin camera modules for future mobile devices
- **AR/VR Headsets**: Lightweight optical systems for immersive experiences  
- **Wearable Devices**: Compact imaging systems for health monitoring and interaction
- **Automotive**: Space-efficient camera systems for autonomous vehicles