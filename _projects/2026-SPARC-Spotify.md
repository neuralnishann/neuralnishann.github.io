---
title: "SPARC: Spotify Audio-Feature Analysis"
collection: projects
permalink: /projects/2026-sparc-spotify
excerpt: "A reproducible study of Spotify track data using least-squares regression, PCA/SVD, exploratory analysis, and supplementary classification and clustering."
date: 2026-10-25
venue: "Basics of Data Analysis, HSE University"
tags:
  - Data Science
  - Statistical Analysis
  - PCA and SVD
  - Machine Learning
---

**SPARC** (Spotify Patterns in Audio-feature Regression and Components) analyzes the Spotify Tracks dataset, which contains about 114,000 rows, 21 variables, and 114 genres. The project is documented in a Jupyter notebook and a LaTeX report.

The main analyses treat regression and PCA as least-squares approximation problems:

- **Regression:** Within 1,000 pop tracks, model loudness from energy. The reported correlation is 0.723 and the coefficient of determination is 0.523; on a seeded 80/20 split, held-out $R^2$ is 0.510.
- **PCA/SVD:** Compare range normalization with z-scoring for energy, loudness, danceability, and valence across 89,741 unique tracks. The first two components capture 81.99% and 81.54% of scatter, respectively. The report also checks that z-scored SVD matches conventional correlation-matrix PCA and derives a sample-relative 0–100 ranking factor.
- **Supplementary analysis:** Explore the cleaned data, classify explicit tracks with a random forest, and cluster tracks with K-means.

The project reports a test mean relative absolute error of about 23% for the regression, noting that individual loudness predictions remain imprecise. The ranking factor is a relative summary of audio features, not a measure of musical quality.

[View the SPARC Spotify repository](https://github.com/neuralnishann/sparc_spotify)
