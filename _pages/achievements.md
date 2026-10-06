---
layout: achievements
title: "Achievements & Certifications"
permalink: /achievements/
author_profile: true
redirect_from:
  - /achievments/
---

<div class="modern-section">
  <p style="color: var(--text-muted); font-size: 1.1rem;">A collection of professional achievements, certifications, and milestones in my data science and cloud architecture journey.</p>

  <div class="achievements-grid">
    {% for post in site.achievements reversed %}
      <div class="achievement-card card">
        <div class="card-header">
          <div class="card-icon" style="background: linear-gradient(135deg, var(--primary-light), var(--secondary)); color: white;">
            <i class="fas fa-star"></i>
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
            {{ post.excerpt | markdownify | strip_html | truncatewords: 30 }}
          </div>
        {% endif %}
        <a href="{{ post.url }}" class="btn btn-primary btn-sm" style="margin-top: 1rem;">Learn More →</a>
      </div>
    {% endfor %}
  </div>
</div>

<style>
.modern-section {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.achievement-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.achievement-card .card-body {
  flex: 1;
}

.achievement-card .btn {
  align-self: flex-start;
}

@media (max-width: 768px) {
  .achievements-grid {
    grid-template-columns: 1fr;
  }
}
</style>
