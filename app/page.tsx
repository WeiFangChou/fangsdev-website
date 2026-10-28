import Image from "next/image";
import ContactForm from "./components/contact-form";
import RevealObserver from "./components/reveal-observer";

const capabilities = [
  { number: "01", title: "Product clarity", copy: "We turn complex ideas into focused product direction, clear priorities, and a practical path to launch.", icon: "strategy" },
  { number: "02", title: "Distinctive interfaces", copy: "Editorial precision, intuitive flows, and visual systems that give every interaction a reason to exist.", icon: "design" },
  { number: "03", title: "Web that performs", copy: "Fast, accessible websites and platforms engineered for search, conversion, and long-term maintainability.", icon: "web" },
  { number: "04", title: "Apps people keep", copy: "Native and cross-platform products shaped around real behavior, not feature lists or passing trends.", icon: "app" },
  { number: "05", title: "Systems that scale", copy: "Thoughtful architecture, reliable integrations, and foundations that evolve with the business behind them.", icon: "systems" },
  { number: "06", title: "A senior partnership", copy: "Direct collaboration, transparent decisions, and one accountable team from first conversation to launch.", icon: "partner" },
];

const services = [
  ["01", "Websites", "Brand sites, editorial experiences, commerce, and conversion-focused marketing platforms."],
  ["02", "Web platforms", "Purpose-built products, portals, dashboards, and operational tools for growing teams."],
  ["03", "Mobile apps", "iOS, Android, and cross-platform applications designed around everyday use."],
  ["04", "Product design", "Strategy, UX, interface systems, prototypes, and design direction that align teams."],
];

const partners = ["Northline", "Aster", "Fieldwork", "Still", "N°8"];

function FeatureIcon({ name }: { name: string }) {
  return (
    <span className={`feature-icon feature-icon-${name}`} aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />

      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand-mark" href="#top" aria-label="Fangs Dev home">
            <span className="brand-symbol" aria-hidden="true">F</span>
            <span>Fangs Dev</span>
          </a>
          <div className="desktop-nav">
            <a href="#work">Work</a><a href="#services">Services</a>
            <a href="#approach">Approach</a><a href="#about">About</a>
          </div>
          <div className="nav-actions">
            <a className="nav-email" href="mailto:fang@fangs.dev">Email us</a>
            <a className="nav-cta" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
          </div>
          <details className="mobile-nav">
            <summary aria-label="Open navigation menu"><span /><span /></summary>
            <div className="mobile-nav-panel">
              <a href="#work">Work</a><a href="#services">Services</a>
              <a href="#approach">Approach</a><a href="#about">About</a>
              <a href="#contact">Start a project</a>
            </div>
          </details>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-shell" aria-labelledby="hero-title">
          <div className="hero-media">
            <Image src="/images/fangs-hero.jpg" alt="Modern stone and glass architecture with an emerald glass structure" fill priority sizes="(max-width: 768px) 100vw, 1280px" />
            <div className="hero-shade" />
            <div className="hero-content">
              <div className="eyebrow hero-enter delay-1"><span /> Independent software studio</div>
              <h1 id="hero-title" className="hero-enter delay-2">Digital products<br /><span>built with clarity.</span></h1>
              <p className="hero-copy hero-enter delay-3">We design and engineer websites and apps that move ambitious businesses forward.</p>
              <div className="hero-links hero-enter delay-4">
                <a href="#contact">Start a conversation <span>↗</span></a>
                <a href="#work">View selected work <span>↓</span></a>
              </div>
            </div>
            <article className="hero-project hero-enter delay-4">
              <div className="project-mini-top"><span>Concept engagement</span><span>2026</span></div>
              <div className="project-mini-mark">N</div>
              <div className="project-mini-bottom">
                <div><strong>Northline</strong><span>Property technology</span></div>
                <span className="circle-arrow">↗</span>
              </div>
            </article>
          </div>
          <div className="stats-panel reveal" aria-label="Studio statistics">
            <div className="stat-intro"><span className="availability-dot" /><p>Small by design.<br />Senior by default.</p></div>
            <div className="stat"><strong>02</strong><p>Core disciplines: web and mobile</p></div>
            <div className="stat"><strong>01</strong><p>Accountable team from start to finish</p></div>
            <div className="stat"><strong>100<span>%</span></strong><p>Tailored to the product and business</p></div>
          </div>
        </section>

        <section id="about" className="partners section-block page-shell">
          <div className="partners-heading reveal"><p className="section-kicker">Concept collaborations</p><h2>Built for teams<br />who value the details.</h2></div>
          <p className="partners-copy reveal">We partner with founders and established organizations to turn important ideas into products that feel clear, credible, and ready for what comes next.</p>
          <div className="partner-row reveal" aria-label="Selected concept partners">
            {partners.map((partner, index) => <div className="partner-orb" key={partner}><span>{partner}</span><small>0{index + 1}</small></div>)}
          </div>
        </section>

        <section id="approach" className="features section-block">
          <div className="page-shell">
            <div className="section-heading centered reveal">
              <p className="section-kicker">What makes the work different</p>
              <h2>One practice. Every layer<br /><span>working together.</span></h2>
              <p>Product thinking, design, and engineering stay connected from the first decision to the final detail.</p>
            </div>
            <div className="feature-grid">
              {capabilities.map((feature) => (
                <article className="feature-card reveal" key={feature.number}>
                  <div className="feature-card-top"><FeatureIcon name={feature.icon} /><span>{feature.number}</span></div>
                  <h3>{feature.title}</h3><p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services section-block page-shell">
          <div className="services-copy">
            <div className="services-heading reveal">
              <p className="section-kicker">Capabilities</p>
              <h2>From first principles<br />to the <span>final pixel.</span></h2>
              <p>Focused expertise for building new digital products and making existing ones clearer, faster, and more valuable.</p>
              <a className="green-button" href="#contact">Discuss your project <span>↗</span></a>
            </div>
            <div className="service-grid">
              {services.map(([number, title, copy]) => (
                <article className="service-card reveal" key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{copy}</p>
                  <a href="#contact" aria-label={`Discuss ${title}`}>Explore <span>↗</span></a>
                </article>
              ))}
            </div>
          </div>
          <div className="services-image reveal">
            <Image src="/images/fangs-services.jpg" alt="Minimal concrete and metal architecture with an emerald glass doorway" fill sizes="(max-width: 900px) 100vw, 44vw" />
            <div className="image-note"><span>Strategy · Design · Engineering</span><span>One accountable team</span></div>
          </div>
        </section>

        <section id="work" className="case-study section-block">
          <div className="page-shell">
            <div className="section-heading centered reveal"><p className="section-kicker">Selected work</p><h2>Designed to make the<br /><span>complex feel natural.</span></h2></div>
            <article className="case-card reveal">
              <div className="case-copy">
                <div className="case-meta"><span>Northline</span><span>Property technology · 2026</span></div>
                <blockquote>“Fangs Dev gave the product the clarity it needed — not only in how it looked, but in how the entire system worked.”</blockquote>
                <div className="case-person"><span className="person-mark">MC</span><p><strong>Maya Chen</strong><span>Product Director, Northline</span></p></div>
                <a className="case-link" href="#contact">View the engagement <span>↗</span></a>
              </div>
              <div className="case-image">
                <Image src="/images/fangs-case-study.jpg" alt="Minimal design studio desk with material samples and a silver laptop" fill sizes="(max-width: 900px) 100vw, 52vw" />
                <span className="case-image-label">Concept case study</span>
              </div>
            </article>
            <div className="case-pagination" aria-hidden="true"><span className="active" /><span /><span /></div>
          </div>
        </section>

        <section id="contact" className="contact section-block">
          <div className="page-shell contact-layout">
            <div className="contact-intro reveal">
              <p className="section-kicker">Start a conversation</p><h2>Have something<br /><span>worth building?</span></h2>
              <p>Tell us what you are creating, improving, or rethinking. We will respond with useful next steps — usually within two business days.</p>
              <a href="mailto:fang@fangs.dev">fang@fangs.dev <span>↗</span></a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-shell">
          <div className="footer-cta reveal">
            <p className="section-kicker">Fangs Dev LLC</p><h2>Build what matters.<br /><span>Make it last.</span></h2>
            <p>Websites and apps shaped with clarity, craft, and disciplined engineering.</p>
            <a href="#contact">Start a project <span>↗</span></a>
          </div>
          <div className="footer-nav">
            <a className="footer-brand" href="#top"><span>F</span> Fangs Dev</a>
            <div><a href="#work">Work</a><a href="#services">Services</a><a href="#approach">Approach</a><a href="#about">About</a></div>
            <div><a href="mailto:fang@fangs.dev">Email</a><span>Available for selected projects</span></div>
            <p>United States<br />Working worldwide</p>
          </div>
          <div className="footer-bottom"><p>© {new Date().getFullYear()} Fangs Dev LLC</p><div><span>Privacy</span><span>Terms</span></div><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </>
  );
}
