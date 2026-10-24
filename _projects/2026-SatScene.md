---
title: "SatScene: Satellite Land-Use Classification"
collection: projects
permalink: /projects/2026-satscene
excerpt: "A 14-class overhead-image classification project using fine-tuned ConvNeXt-Tiny, paired with a rule-based agent that suggests follow-up geospatial analyses."
date: 2026-10-25
venue: "Geospatial Data Science"
tags:
  - Satellite Imagery
  - Computer Vision
  - PyTorch
  - Geospatial Analysis
---

**SatScene** classifies satellite and aerial images into 14 land-use categories, including agriculture, airport, beach, city, forest, highway, and river. The model fine-tunes the ImageNet-22k-pretrained `convnext_tiny.fb_in22k_ft_in1k` backbone using PyTorch and `timm` on a 700-image training split.

The project also includes a rule-based decision-support agent. It reports the top three predicted classes, flags low-confidence predictions, and suggests a relevant follow-up analysis for a human reviewer; it does not run geospatial analyses automatically. A Gradio app provides an interactive demo.

The repository reports **80.5% validation accuracy** (161/200) from the original notebook run. The README notes that the held-out test split has not yet been evaluated and that the packaged training code has not been rerun end-to-end, so this result should be treated as preliminary.

[View the SatScene repository](https://github.com/neuralnishann/SatScene)
