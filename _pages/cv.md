---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Profile

Azure AI and Data professional with experience in analytics, machine learning workflows, and cloud-native solution development. Focused on building practical systems that connect data engineering and AI delivery.

## Education

- **M.Sc. in Data Science**
- **B.Sc. in Computer Science and Engineering**

## Experience

### Cloud Solutions Architect (2025 - Cont.)

## Technical Skills

- **Languages:** Python, SQL, R
- **Data/ML:** Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, Apache Spark
- **Pipelines & Orchestration:** Apache Airflow, ETL/ELT
- **Visualization:** Power BI, Tableau, Matplotlib
- **Cloud:** Microsoft Azure
- **Tools:** Git, GitHub, Docker, Kubernetes, Jupyter Notebook

## Projects

<ul>{% for post in site.projects %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

## Achievements

<ul>{% for post in site.achievements %}
  {% include archive-single-talk-cv.html %}
{% endfor %}</ul>
