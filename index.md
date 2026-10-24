---
layout: single
permalink: /
excerpt: "About me"
author_profile: true
---

<div id="about" style="scroll-margin-top: 100px; padding-top: 2rem;">
  {% include home-about.md %}
</div>

<style>
/* Landing Page Layout Improvements */
#main { padding-left: .75rem !important; padding-right: .75rem !important; }
.page__content { padding: clamp(.75rem, 1.8vw, 1.15rem) !important; }
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
  .page__content { padding: .75rem !important; }
  #about {
    padding-top: .5rem;
  }
}
</style>
