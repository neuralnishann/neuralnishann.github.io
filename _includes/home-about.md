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
    <div class="home-orbit-scene" aria-hidden="true">
      <div class="home-orbit-ring home-orbit-ring--one"><i></i></div>
      <div class="home-orbit-ring home-orbit-ring--two"><i></i></div>
      <div class="home-orbit-core"><span>AI</span></div>
      <span class="home-orbit-status"><i></i> Agent runtime <strong>READY</strong></span>
      <span class="home-orbit-flow">DATA <b>→</b> MODELS <b>→</b> ACTION</span>
    </div>
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
    <h2 id="home-credentials-title">Microsoft Certifications</h2>
  </div>
  <div class="home-credential-grid">
    <div class="home-credential-card"><strong>AB-100</strong><span>Agentic AI Business Solutions Architect</span></div>
    <div class="home-credential-card"><strong>SC-100</strong><span>Cybersecurity Architect Expert</span></div>
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
.home-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(250px, .8fr); align-items: center; gap: clamp(1.4rem, 3vw, 2.5rem); padding: clamp(1.25rem, 3.5vw, 2.5rem); border: 1px solid var(--border); border-radius: 18px; background: radial-gradient(ellipse at 88% 8%, rgba(20,184,166,.11), transparent 42%), var(--card); box-shadow: 0 18px 48px rgba(15,23,42,.07); perspective: 1400px; }
.home-hero-copy { min-width: 0; }
.home-hero-copy, .home-section-heading, .home-contact > div { text-align: left !important; }
.home-eyebrow, .home-kicker, .home-project-type { color: var(--primary); font-size: .78rem; font-weight: 750; letter-spacing: .11em; text-transform: uppercase; }
.home-eyebrow { display: flex; flex-wrap: wrap; align-items: center; gap: .45rem .6rem; margin: 0 0 1.2rem; letter-spacing: .06em; }
.home-role { white-space: nowrap; }
.home-status-dot { width: .55rem; height: .55rem; border-radius: 50%; background: #14b8a6; box-shadow: 0 0 0 4px rgba(20,184,166,.14); }
.home-hero h1 { display: block; width: 100%; max-width: 16ch; margin: 0; padding: 0; font-size: clamp(2rem, 3.7vw, 3.1rem); line-height: 1.12; letter-spacing: -.04em; text-align: left !important; text-wrap: balance; }
.home-lede { max-width: 640px; margin: 1.25rem 0 0; color: var(--text-muted); font-size: clamp(1rem, 1.6vw, 1.12rem); line-height: 1.7; }
.home-actions { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 2rem; }
.home-actions > a.home-button, .home-contact > a.home-button { position: static; display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; gap: .7rem; min-width: 156px; min-height: 50px; margin: 0; padding: .8rem 1.2rem; border: 1px solid var(--border); border-radius: 9px; box-sizing: border-box; font-size: .95rem; font-weight: 700; line-height: 1.25; text-align: center; text-decoration: none !important; text-shadow: none !important; white-space: nowrap; }
.home-actions > a.home-button-primary, .home-contact > a.home-button-primary { background: var(--primary); border-color: var(--primary); color: #fff !important; }
.home-actions > a.home-button-primary:hover, .home-contact > a.home-button-primary:hover { background: var(--primary-dark, #134e4a); border-color: var(--primary-dark, #134e4a); color: #fff !important; }
.home-actions > a.home-button-secondary { background: var(--bg); border-color: var(--border); color: var(--text) !important; }
.home-actions > a.home-button-secondary:hover { border-color: var(--primary); color: var(--primary) !important; }
.home-actions > a.home-button:focus-visible, .home-contact > a.home-button:focus-visible { outline: 3px solid var(--primary-light, #14b8a6); outline-offset: 3px; }
.home-agent-panel { position: relative; z-index: 0; padding: .9rem; border: 1px solid var(--border); border-radius: 14px; background: linear-gradient(145deg, color-mix(in srgb, var(--bg) 82%, transparent), color-mix(in srgb, var(--card) 92%, transparent)); box-shadow: 0 16px 36px rgba(0,0,0,.11), inset 0 1px 0 rgba(255,255,255,.18); transform: rotateX(2deg) rotateY(-3deg); transform-style: preserve-3d; animation: home-panel-float 8s ease-in-out infinite; }
.home-agent-panel::before { position: absolute; z-index: -1; inset: 12% -8%; border: 1px solid color-mix(in srgb, var(--primary) 38%, transparent); border-radius: 50%; content: ""; transform: rotateX(62deg) rotateZ(-12deg); box-shadow: 0 0 28px color-mix(in srgb, var(--primary) 15%, transparent); pointer-events: none; }
.home-agent-panel::after { position: absolute; z-index: 2; top: -13px; right: 24px; width: 18px; height: 18px; border: 1px solid rgba(255,255,255,.6); border-radius: 50%; background: radial-gradient(circle at 35% 30%, #d5fffb, #14b8a6 48%, #0f766e); box-shadow: 0 0 22px rgba(20,184,166,.65); content: ""; transform: translateZ(42px); pointer-events: none; }
.home-agent-panel > * { position: relative; transform: translateZ(16px); }
.home-agent-panel > .home-orbit-scene { position: relative; height: 142px; margin: -.25rem 0 .8rem; overflow: hidden; border: 1px solid color-mix(in srgb, var(--primary) 16%, transparent); border-radius: 11px; background: radial-gradient(ellipse at 50% 48%, color-mix(in srgb, var(--primary) 15%, transparent), transparent 48%), linear-gradient(145deg, rgba(8,24,34,.28), rgba(20,34,47,.04)); transform: translateZ(18px); perspective: 700px; }
.home-orbit-scene::before { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px); background-size: 22px 22px; mask-image: radial-gradient(ellipse, #000 15%, transparent 78%); content: ""; }
.home-orbit-scene::after { position: absolute; inset: -40% 0; background: linear-gradient(transparent 46%, rgba(45,212,191,.12) 50%, transparent 54%); animation: home-scan 5s linear infinite; content: ""; }
.home-orbit-ring { position: absolute; top: 50%; left: 50%; width: 166px; height: 60px; border: 1px solid rgba(94,234,212,.42); border-radius: 50%; transform-style: preserve-3d; }
.home-orbit-ring i { position: absolute; top: 50%; left: 0; width: 7px; height: 7px; border-radius: 50%; background: #a7f3d0; box-shadow: 0 0 12px #5eead4, 0 0 24px rgba(94,234,212,.8); }
.home-orbit-ring--one { animation: home-orbit-one 10s linear infinite; }
.home-orbit-ring--two { width: 140px; height: 90px; border-color: rgba(167,139,250,.42); animation: home-orbit-two 16s linear infinite; }
.home-orbit-ring--two i { background: #c4b5fd; box-shadow: 0 0 14px #a78bfa, 0 0 26px rgba(167,139,250,.75); }
.home-orbit-core { position: absolute; top: 50%; left: 50%; display: grid; width: 44px; height: 44px; place-items: center; border: 1px solid rgba(204,251,241,.85); border-radius: 13px; background: radial-gradient(circle at 30% 25%, #99f6e4, #14b8a6 38%, #115e59 78%); box-shadow: 0 0 18px rgba(45,212,191,.48), inset 0 0 10px rgba(255,255,255,.4); color: #ecfeff; font-size: .72rem; font-weight: 900; letter-spacing: .08em; transform: translate(-50%, -50%) rotate(45deg) translateZ(20px); animation: home-core-pulse 4s ease-in-out infinite; }
.home-orbit-core span { transform: rotate(-45deg); text-shadow: 0 1px 5px rgba(0,0,0,.35); }
.home-orbit-status, .home-orbit-flow { position: absolute; color: rgba(226,232,240,.78); font: 650 .54rem/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .08em; }
.home-orbit-status { top: 12px; left: 12px; display: flex; align-items: center; gap: .4rem; }
.home-orbit-status i { width: 6px; height: 6px; border-radius: 50%; background: #34d399; box-shadow: 0 0 8px rgba(52,211,153,.7); }
.home-orbit-status strong { margin-left: .3rem; color: #a7f3d0; font-size: .5rem; }
.home-orbit-flow { right: 12px; bottom: 11px; color: rgba(226,232,240,.62); font-size: .47rem; letter-spacing: .13em; }
.home-orbit-flow b { padding-inline: .22rem; color: #5eead4; }
.home-agent-label { margin: 0 0 .8rem; color: var(--primary); font-size: .72rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.home-agent-step { display: flex; align-items: flex-start; gap: .85rem; padding: .8rem 0; border-top: 1px solid var(--border); transition: transform .25s ease, border-color .25s ease; }
.home-agent-step:hover { border-color: color-mix(in srgb, var(--primary) 45%, var(--border)); transform: translate3d(5px, -2px, 18px); }
.home-agent-step > span { display: grid; width: 1.7rem; height: 1.7rem; flex: 0 0 auto; place-items: center; border-radius: 50%; background: rgba(20,184,166,.14); color: var(--primary); font-size: .68rem; font-weight: 800; }
.home-agent-step strong, .home-agent-step small { display: block; }
.home-agent-step strong { font-size: .88rem; }
.home-agent-step small { margin-top: .2rem; color: var(--text-muted); font-size: .76rem; line-height: 1.45; }
.home-section { padding: clamp(1.8rem, 3vw, 2.5rem) 0 0; }
.home-section-heading { margin-bottom: 1.1rem; }
.home-section-heading .home-kicker, .home-contact .home-kicker { margin-bottom: .5rem; }
.home-section-heading h2, .home-contact h2 { display: block; width: 100%; margin: 0; padding: 0; border: 0; font-size: clamp(1.6rem, 3vw, 2.2rem); line-height: 1.2; letter-spacing: -.035em; text-align: left !important; }
.home-section-heading > p:last-child, .home-section-intro, .home-contact p:not(.home-kicker) { max-width: 690px; color: var(--text-muted); font-size: .96rem; line-height: 1.65; }
.home-focus-grid, .home-project-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.home-focus-card, .home-project-card { min-width: 0; padding: 1.05rem; border: 1px solid var(--border); border-radius: 12px; background: var(--card); transform-style: preserve-3d; transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
.home-focus-card { position: relative; padding-top: 2.8rem; }
.home-card-number { position: absolute; top: 1.15rem; left: 1.4rem; color: var(--primary); font-size: .76rem; font-weight: 800; letter-spacing: .08em; }
.home-focus-card h3, .home-project-card h3 { margin: .2rem 0 .55rem; font-size: 1.04rem; line-height: 1.35; }
.home-focus-card p, .home-project-card p { margin: 0; color: var(--text-muted); font-size: .9rem; line-height: 1.6; }
.home-work { padding-top: clamp(1.8rem, 3vw, 2.5rem); }
.home-work-heading { display: flex; align-items: end; justify-content: space-between; gap: 1rem; }
.home-work-heading .home-text-link { white-space: nowrap; font-weight: 700; }
.home-section-intro { margin: -.5rem 0 1.4rem; font-size: .93rem; }
.home-project-card { display: flex; flex-direction: column; min-height: 215px; color: inherit; text-decoration: none; }
.home-focus-card:hover, .home-project-card:hover { transform: perspective(900px) translate3d(0, -5px, 12px) rotateX(2deg) rotateY(-1deg); border-color: var(--primary); box-shadow: 0 18px 36px rgba(0,0,0,.14); }
.home-project-type { font-size: .68rem; letter-spacing: .08em; }
.home-project-card h3 { margin-top: 1rem; }
.home-project-link { margin-top: auto; padding-top: 1.2rem; color: var(--primary); font-size: .88rem; font-weight: 750; }
.home-credentials { margin-top: clamp(1.8rem, 3vw, 2.5rem); }
.home-credentials .home-section-heading { margin-bottom: 1rem; }
.home-credential-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.home-credential-card { display: grid; align-content: start; gap: .4rem; min-height: 96px; padding: .95rem; border: 1px solid var(--border); border-radius: 11px; background: var(--card); }
.home-credential-card strong { color: var(--primary); font-size: 1rem; }
.home-credential-card span { color: var(--text-muted); font-size: .84rem; line-height: 1.5; }
.home-credentials-link { display: inline-block; margin-top: 1rem; font-weight: 700; }
.home-contact { display: flex; align-items: center; justify-content: space-between; gap: 1.25rem; margin-top: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 1.5rem; padding: clamp(1.1rem, 2.5vw, 1.75rem); border-radius: 14px; background: var(--card); }
.home-contact > div { flex: 1; min-width: 0; }
.home-contact p:not(.home-kicker) { margin-bottom: 0; }
@keyframes home-panel-float { 0%, 100% { transform: rotateX(2deg) rotateY(-3deg) translateY(0); } 50% { transform: rotateX(1deg) rotateY(-2deg) translateY(-5px); } }
@keyframes home-orbit-one { from { transform: translate(-50%, -50%) rotateX(68deg) rotateZ(0); } to { transform: translate(-50%, -50%) rotateX(68deg) rotateZ(360deg); } }
@keyframes home-orbit-two { from { transform: translate(-50%, -50%) rotateX(68deg) rotateZ(78deg); } to { transform: translate(-50%, -50%) rotateX(68deg) rotateZ(438deg); } }
@keyframes home-core-pulse { 0%, 100% { filter: brightness(1); box-shadow: 0 0 20px rgba(45,212,191,.65), inset 0 0 12px rgba(255,255,255,.45); } 50% { filter: brightness(1.22); box-shadow: 0 0 32px rgba(45,212,191,.85), inset 0 0 16px rgba(255,255,255,.65); } }
@keyframes home-scan { from { transform: translateY(-35%); } to { transform: translateY(35%); } }
@media (max-width: 760px) { .home-hero { grid-template-columns: 1fr; } .home-agent-panel { transform: none; animation: none; } .home-agent-panel::before { inset: 8% -3%; } .home-focus-grid, .home-project-grid, .home-credential-grid { grid-template-columns: 1fr; } .home-project-card { min-height: 0; } .home-contact { align-items: flex-start; flex-direction: column; } }
@media (max-width: 480px) { .home-actions { align-items: stretch; flex-direction: column; } .home-actions > a.home-button, .home-contact > a.home-button { width: 100%; } }
@media (prefers-reduced-motion: reduce) { .home-agent-panel, .home-orbit-ring, .home-orbit-core, .home-orbit-scene::after { animation: none; } .home-agent-panel { transform: none; } .home-agent-panel::before { display: none; } .home-agent-step, .home-focus-card, .home-project-card { transition: none; } .home-agent-step:hover, .home-focus-card:hover, .home-project-card:hover { transform: none; } }
</style>
