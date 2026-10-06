---
layout: archive
title: "Projects & Case Studies"
permalink: /projects/
author_profile: true
---

<div class="modern-section">
  <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.6;">
    This section showcases selected AI, computer vision, and data engineering projects, including problem context, implementation approach, technical stack, and deliverables.
  </p>

  <div class="projects-grid">
    {% for post in site.projects reversed %}
      <div class="project-card card">
        <div class="card-header">
          <div class="card-icon" style="background: linear-gradient(135deg, #f59e0b, #ec4899);">
            <i class="fas fa-code-branch"></i>
          </div>
          <div>
            <h3 class="card-title">{{ post.title }}</h3>
            {% if post.date %}
              <p class="card-subtitle">{{ post.date | date: "%B %Y" }}</p>
            {% endif %}
          </div>
        </div>
        
        {% if post.excerpt %}
          <div class="card-body" style="margin-top: 1rem;">
            {{ post.excerpt | markdownify | strip_html | truncatewords: 35 }}
          </div>
        {% endif %}
        
        <div class="project-meta" style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
          {% if post.tags %}
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              {% for tag in post.tags limit: 3 %}
                <span class="badge badge-secondary" style="font-size: 0.75rem;">{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
        
        <a href="{{ post.url }}" class="btn btn-primary btn-sm" style="margin-top: 1rem;">View Project →</a>
      </div>
    {% endfor %}
  </div>

  {% if site.projects.size == 0 %}
    <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
      <i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
      <p>No projects published yet. Check back soon!</p>
    </div>
  {% endif %}
</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card .card-body {
  flex: 1;
  font-size: 0.95rem;
  line-height: 1.5;
}

.project-card .card-title {
  color: var(--text);
  font-weight: 700;
}

.project-meta {
  flex-grow: 1;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
