<section class="home-hero" aria-labelledby="home-title">
  <div class="home-hero-copy">
    <p class="home-eyebrow"><span class="home-status-dot" aria-hidden="true"></span> <span class="home-role">Azure Cloud Solutions Architect</span></p>
    <h1 id="home-title">I build AI agents for real business workflows.</h1>
    <p class="home-lede">I connect AI models, enterprise data, and cloud services to create useful agent solutions. My focus spans agentic AI, Azure architecture, data engineering, and applied machine learning.</p>
    <div class="home-actions">
      <a class="home-button home-button-primary" href="{{ '/cv/' | relative_url }}">View résumé <span aria-hidden="true">→</span></a>
      <a class="home-button home-button-secondary" href="{{ '/projects/' | relative_url }}">Explore projects</a>
    </div>
  </div>
  <aside class="home-agent-panel" aria-label="Agent engineering focus">
    <p class="home-agent-label">Agent engineering focus</p>
    <div class="home-agent-step"><span>01</span><div><strong>Understand</strong><small>Ground the task in business context</small></div></div>
    <div class="home-agent-step"><span>02</span><div><strong>Connect</strong><small>Use the right data, models, and tools</small></div></div>
    <div class="home-agent-step"><span>03</span><div><strong>Orchestrate</strong><small>Coordinate actions and workflows</small></div></div>
    <div class="home-agent-step"><span>04</span><div><strong>Govern</strong><small>Design for security and reliability</small></div></div>
  </aside>
</section>

<section class="home-section" aria-labelledby="home-focus-title">
  <div class="home-section-heading">
    <p class="home-kicker">What I work on</p>
    <h2 id="home-focus-title">Skills that map to the work</h2>
    <p>Agent systems need more than a model: they need trusted data, thoughtful orchestration, and sound cloud foundations.</p>
  </div>
  <div class="home-focus-grid">
    <article class="home-focus-card">
      <span class="home-card-number">01</span>
      <h3>Agentic AI</h3>
      <p>Agent design, workflow orchestration, and tool-connected solutions for business scenarios.</p>
    </article>
    <article class="home-focus-card">
      <span class="home-card-number">02</span>
      <h3>Azure &amp; data architecture</h3>
      <p>Cloud architecture and data engineering foundations for analytics and AI workloads.</p>
    </article>
    <article class="home-focus-card">
      <span class="home-card-number">03</span>
      <h3>Applied AI/ML</h3>
      <p>Machine learning, NLP, computer vision, and practical model integration.</p>
    </article>
  </div>
</section>

{% include skills-section.html %}

<section class="home-section home-work" aria-labelledby="home-work-title">
  <div class="home-section-heading home-work-heading">
    <div>
      <p class="home-kicker">Selected work</p>
      <h2 id="home-work-title">Selected applied AI work</h2>
    </div>
    <a class="home-text-link" href="{{ '/projects/' | relative_url }}">All projects <span aria-hidden="true">→</span></a>
  </div>
  <p class="home-section-intro">Explore project write-ups spanning multimodal AI, computer vision, and secure cloud concepts.</p>
  <div class="home-project-grid">
    <a class="home-project-card" href="{{ '/projects/2023-AICVTG-Project-3' | relative_url }}">
      <span class="home-project-type">Computer vision · NLP</span>
      <h3>Automatic image captioning</h3>
      <p>Explored image-to-text generation with a Vision Transformer encoder and GPT-2 decoder.</p>
      <span class="home-project-link">View project <span aria-hidden="true">↗</span></span>
    </a>
    <a class="home-project-card" href="{{ '/projects/2022-VQA-Project-1' | relative_url }}">
      <span class="home-project-type">Multimodal AI</span>
      <h3>Visual question answering</h3>
      <p>Compared multimodal pipelines that pair image encoders with language models.</p>
      <span class="home-project-link">View project <span aria-hidden="true">↗</span></span>
    </a>
    <a class="home-project-card" href="{{ '/projects/2022-SOTD-Project-2' | relative_url }}">
      <span class="home-project-type">Cloud · Security</span>
      <h3>Secure telemedicine dApp</h3>
      <p>Designed a healthcare record-sharing concept using blockchain, IPFS, and smart contracts.</p>
      <span class="home-project-link">View project <span aria-hidden="true">↗</span></span>
    </a>
  </div>
</section>

<section class="home-credentials" aria-labelledby="home-credentials-title">
  <div class="home-section-heading">
    <p class="home-kicker">Credentials</p>
    <h2 id="home-credentials-title">Selected certifications</h2>
  </div>
  <div class="home-credential-grid">
    <div class="home-credential-card"><strong>AB-100</strong><span>Agentic AI Business Solutions Architect</span></div>
    <div class="home-credential-card"><strong>AFS-201</strong><span>Salesforce Agentforce Specialist</span></div>
    <div class="home-credential-card"><strong>AZ-305</strong><span>Azure Solutions Architect Expert</span></div>
  </div>
  <a class="home-credentials-link" href="{{ '/certification/' | relative_url }}">See all credentials <span aria-hidden="true">→</span></a>
</section>

<section class="home-contact" aria-labelledby="home-contact-title">
  <div>
    <p class="home-kicker">Let’s connect</p>
    <h2 id="home-contact-title">Building an AI or cloud team?</h2>
    <p>I’m interested in roles and collaborations focused on AI agents, Azure, and data platforms.</p>
  </div>
  <a class="home-button home-button-primary" href="mailto:neuralnishan@protonmail.com">Contact me <span aria-hidden="true">→</span></a>
</section>

<style>
.home-hero, .home-section, .home-credentials, .home-contact { max-width: 1080px; margin-inline: auto; }
.home-hero { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(250px, .65fr); align-items: center; gap: clamp(2rem, 5vw, 4rem); padding: clamp(2rem, 6vw, 4.5rem); border: 1px solid var(--border); border-radius: 24px; background: radial-gradient(ellipse at 88% 8%, rgba(20,184,166,.18), transparent 42%), var(--card); }
.home-hero-copy { min-width: 0; }
.home-eyebrow, .home-kicker, .home-project-type { color: var(--primary); font-size: .78rem; font-weight: 750; letter-spacing: .11em; text-transform: uppercase; }
.home-eyebrow { display: flex; flex-wrap: wrap; align-items: center; gap: .45rem .6rem; margin: 0 0 1.2rem; letter-spacing: .06em; }
.home-role { white-space: nowrap; }
.home-status-dot { width: .55rem; height: .55rem; border-radius: 50%; background: #14b8a6; box-shadow: 0 0 0 4px rgba(20,184,166,.14); }
.home-hero h1 { max-width: 16ch; margin: 0; font-size: clamp(2.15rem, 4.2vw, 3.65rem); line-height: 1.08; letter-spacing: -.045em; text-wrap: balance; }
.home-lede { max-width: 680px; margin: 1.5rem 0 0; color: var(--text-muted); font-size: clamp(1.05rem, 2vw, 1.22rem); line-height: 1.75; }
.home-actions { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 2rem; }
.home-actions > a.home-button, .home-contact > a.home-button { position: static; display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; gap: .7rem; min-width: 156px; min-height: 50px; margin: 0; padding: .8rem 1.2rem; border: 1px solid var(--border); border-radius: 9px; box-sizing: border-box; font-size: .95rem; font-weight: 700; line-height: 1.25; text-align: center; text-decoration: none !important; text-shadow: none !important; white-space: nowrap; }
.home-actions > a.home-button-primary, .home-contact > a.home-button-primary { background: var(--primary); border-color: var(--primary); color: #fff !important; }
.home-actions > a.home-button-primary:hover, .home-contact > a.home-button-primary:hover { background: var(--primary-dark, #134e4a); border-color: var(--primary-dark, #134e4a); color: #fff !important; }
.home-actions > a.home-button-secondary { background: var(--bg); border-color: var(--border); color: var(--text) !important; }
.home-actions > a.home-button-secondary:hover { border-color: var(--primary); color: var(--primary) !important; }
.home-actions > a.home-button:focus-visible, .home-contact > a.home-button:focus-visible { outline: 3px solid var(--primary-light, #14b8a6); outline-offset: 3px; }
.home-agent-panel { padding: 1.25rem; border: 1px solid var(--border); border-radius: 16px; background: color-mix(in srgb, var(--bg) 76%, transparent); box-shadow: 0 18px 50px rgba(0,0,0,.08); }
.home-agent-label { margin: 0 0 .8rem; color: var(--primary); font-size: .72rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.home-agent-step { display: flex; align-items: flex-start; gap: .85rem; padding: .8rem 0; border-top: 1px solid var(--border); }
.home-agent-step > span { display: grid; width: 1.7rem; height: 1.7rem; flex: 0 0 auto; place-items: center; border-radius: 50%; background: rgba(20,184,166,.14); color: var(--primary); font-size: .68rem; font-weight: 800; }
.home-agent-step strong, .home-agent-step small { display: block; }
.home-agent-step strong { font-size: .88rem; }
.home-agent-step small { margin-top: .2rem; color: var(--text-muted); font-size: .76rem; line-height: 1.45; }
.home-section { padding: clamp(3.5rem, 7vw, 5.5rem) 0 0; }
.home-section-heading { margin-bottom: 1.5rem; }
.home-section-heading .home-kicker, .home-contact .home-kicker { margin-bottom: .5rem; }
.home-section-heading h2, .home-contact h2 { margin: 0; padding: 0; border: 0; font-size: clamp(1.8rem, 4vw, 2.6rem); letter-spacing: -.04em; }
.home-section-heading > p:last-child, .home-section-intro, .home-contact p:not(.home-kicker) { max-width: 690px; color: var(--text-muted); }
.home-focus-grid, .home-project-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.home-focus-card, .home-project-card { min-width: 0; padding: 1.4rem; border: 1px solid var(--border); border-radius: 14px; background: var(--card); }
.home-focus-card { position: relative; padding-top: 2.8rem; }
.home-card-number { position: absolute; top: 1.15rem; left: 1.4rem; color: var(--primary); font-size: .76rem; font-weight: 800; letter-spacing: .08em; }
.home-focus-card h3, .home-project-card h3 { margin: .2rem 0 .55rem; font-size: 1.12rem; }
.home-focus-card p, .home-project-card p { margin: 0; color: var(--text-muted); font-size: .92rem; line-height: 1.65; }
.home-work { padding-top: clamp(3rem, 6vw, 5rem); }
.home-work-heading { display: flex; align-items: end; justify-content: space-between; gap: 1rem; }
.home-work-heading .home-text-link { white-space: nowrap; font-weight: 700; }
.home-section-intro { margin: -.5rem 0 1.4rem; font-size: .93rem; }
.home-project-card { display: flex; flex-direction: column; min-height: 215px; color: inherit; text-decoration: none; transition: transform .2s ease, border-color .2s ease; }
.home-project-card:hover { transform: translateY(-3px); border-color: var(--primary); }
.home-project-type { font-size: .68rem; letter-spacing: .08em; }
.home-project-card h3 { margin-top: 1rem; }
.home-project-link { margin-top: auto; padding-top: 1.2rem; color: var(--primary); font-size: .88rem; font-weight: 750; }
.home-credentials { margin-top: clamp(3rem, 6vw, 4.5rem); }
.home-credentials .home-section-heading { margin-bottom: 1rem; }
.home-credential-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.home-credential-card { display: grid; align-content: start; gap: .5rem; min-height: 108px; padding: 1.2rem; border: 1px solid var(--border); border-radius: 12px; background: var(--card); }
.home-credential-card strong { color: var(--primary); font-size: 1rem; }
.home-credential-card span { color: var(--text-muted); font-size: .84rem; line-height: 1.5; }
.home-credentials-link { display: inline-block; margin-top: 1rem; font-weight: 700; }
.home-contact { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; margin-top: clamp(3rem, 7vw, 5rem); margin-bottom: 2rem; padding: clamp(1.5rem, 4vw, 2.5rem); border-radius: 16px; background: var(--card); }
.home-contact p:not(.home-kicker) { margin-bottom: 0; }
@media (max-width: 760px) { .home-hero { grid-template-columns: 1fr; } .home-focus-grid, .home-project-grid, .home-credential-grid { grid-template-columns: 1fr; } .home-project-card { min-height: 0; } .home-contact { align-items: flex-start; flex-direction: column; } }
@media (max-width: 480px) { .home-actions { align-items: stretch; flex-direction: column; } .home-actions > a.home-button, .home-contact > a.home-button { width: 100%; } }
@media (prefers-reduced-motion: reduce) { .home-project-card { transition: none; } .home-project-card:hover { transform: none; } }
</style>
