---
layout: single
permalink: /
excerpt: "About me"
author_profile: true
date: 2026-02-20
---

<div id="about" style="scroll-margin-top: 100px; padding-top: 2rem;">
  {% include home-about.md %}
</div>

<style>
/* Landing Page Layout Improvements */
#main {
  background: var(--bg);
}

.page__inner-wrap {
  max-width: 1200px;
  margin: 0 auto;
}

/* Smooth transitions between sections */
#about {
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Adjustments */
@media (max-width: 1199px) {
  .page__inner-wrap {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  #about {
    padding-top: 1rem;
  }
}
</style>
