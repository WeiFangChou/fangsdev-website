import ContactForm from "./components/contact-form";
import LiquidGlass from "./components/liquid-glass";
import RevealObserver from "./components/reveal-observer";

const services = [
  {
    number: "01",
    title: "Web Development",
    copy: "From high-impact brand websites to complex web platforms, we build fast, reliable digital experiences designed to grow with your business.",
    meta: "Next.js / E-commerce / Platform",
  },
  {
    number: "02",
    title: "App Development",
    copy: "From product strategy and interface design to launch and iteration, we create iOS, Android, and cross-platform apps that feel natural to use.",
    meta: "iOS / Android / Cross-platform",
  },
];

const projects = [
  {
    index: "01",
    name: "Northline",
    category: "Property Technology",
    year: "2026",
    services: "Product strategy · Web platform",
    outcome:
      "Turning complex property operations into a clear, trusted workflow.",
    tone: "silver",
  },
  {
    index: "02",
    name: "Still / Health",
    category: "Digital Health",
    year: "2026",
    services: "iOS · Service design",
    outcome:
      "Translating everyday health signals into a calm, intuitive mobile experience.",
    tone: "obsidian",
  },
  {
    index: "03",
    name: "Atelier N°8",
    category: "Architecture & Culture",
    year: "2025",
    services: "Brand system · Editorial web",
    outcome:
      "A digital narrative shaped around architecture, material, and time.",
    tone: "sand",
  },
];

const process = [
  ["Discover", "We clarify the ambition, the audience, and the real problem to solve."],
  ["Define", "We shape the scope and technical direction so every decision has a reason."],
  ["Design", "We turn strategy into a clear, distinctive, and buildable experience."],
  ["Build", "We engineer, test, and ship a reliable product designed to grow."],
  ["Evolve", "We learn from real use and continuously strengthen the product and system."],
];

export default function Home() {
  return (
    <>
      <RevealObserver />

      <header className="site-header">
        <LiquidGlass as="nav" className="nav-shell" aria-label="Main navigation">
          <a className="brand-mark" href="#top" aria-label="Fangs Dev home">
            <span className="brand-symbol" aria-hidden="true">
              F
            </span>
            <span>Fangs Dev</span>
          </a>

          <div className="desktop-nav">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
          </div>

          <a className="nav-cta" href="#contact">
            Start a project
            <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-nav">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
            </summary>
            <div className="mobile-nav-panel">
              <a href="#about">About</a>
              <a href="#expertise">Expertise</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </LiquidGlass>
      </header>

      <main id="top">
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-ambient" aria-hidden="true">
            <div className="ambient-orbit orbit-one" />
            <div className="ambient-orbit orbit-two" />
            <div className="glass-lens">
              <span>F / D</span>
            </div>
          </div>

          <div className="hero-eyebrow hero-enter delay-1">
            <span className="status-dot" />
            Independent software studio · United States
          </div>

          <h1 id="hero-title" className="hero-title">
            <span className="title-mask">
              <span className="hero-enter delay-2">Engineering ideas</span>
            </span>
            <span className="title-mask title-indent">
              <span className="hero-enter delay-3">
                into <em>lasting</em> products.
              </span>
            </span>
          </h1>

          <div className="hero-bottom hero-enter delay-4">
            <p>
              Fangs Dev LLC creates clear, reliable websites and apps for
              ambitious businesses.
              <br />
              Thoughtful design. Disciplined engineering.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Start a conversation
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#work">
                Explore our work
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-scroll hero-enter delay-5" aria-hidden="true">
            <span>Scroll to explore</span>
            <i />
          </div>
        </section>

        <section id="about" className="about section-grid section-space">
          <div className="section-label reveal">01 — About</div>
          <div className="about-statement reveal">
            <h2>
              We bring product thinking, design precision, and engineering
              discipline <em>into one practice.</em>
            </h2>
          </div>
          <div className="about-copy reveal">
            <p className="lead">
              We believe good software should do more than work. It should be
              understood, trusted, and worth returning to.
            </p>
            <p>
              Fangs Dev LLC is an independent software studio focused on web
              and app development. We combine product strategy, visual design,
              and disciplined engineering to turn ambitious ideas into durable
              digital products.
            </p>
            <a className="underlined-link" href="#expertise">
              What we do <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="about-rule" aria-hidden="true" />
        </section>

        <section id="expertise" className="expertise section-space">
          <div className="section-grid">
            <div className="section-label section-label-light reveal">
              02 — Expertise
            </div>
            <div className="expertise-intro reveal">
              <p>Focused capabilities</p>
              <h2>
                Built for the web.
                <br />
                Designed for <em>real life.</em>
              </h2>
            </div>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-row reveal" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <div className="service-detail">
                  <p>{service.copy}</p>
                  <span>{service.meta}</span>
                </div>
                <span className="service-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>

          <div className="expertise-footer section-grid reveal">
            <p>
              Strategy
              <span>·</span>
              UX / UI
              <span>·</span>
              Engineering
              <span>·</span>
              Launch
            </p>
            <p>From first sketch to shipped product.</p>
          </div>
        </section>

        <section id="work" className="work section-grid section-space">
          <div className="section-label reveal">03 — Selected work</div>
          <div className="work-heading reveal">
            <h2>Products with a point of view.</h2>
            <p>
              The work below represents concept engagements created for brand
              presentation. Client work will be added as projects become
              public.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project project-${project.tone} reveal`}
                key={project.name}
              >
                <div className="project-visual">
                  <div className="project-art" aria-hidden="true">
                    <span className="art-line art-line-one" />
                    <span className="art-line art-line-two" />
                    <span className="art-disc" />
                    <span className="art-type">{project.index}</span>
                  </div>
                  <LiquidGlass className="project-caption" interactive>
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </LiquidGlass>
                </div>
                <div className="project-info">
                  <span>{project.index}</span>
                  <h3>{project.name}</h3>
                  <p>{project.outcome}</p>
                  <span className="project-services">{project.services}</span>
                  <a
                    href="#contact"
                    aria-label={`Discuss a project similar to ${project.name}`}
                  >
                    Discuss a similar project
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                {index < projects.length - 1 && (
                  <div className="project-divider" aria-hidden="true" />
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="principles section-space">
          <div className="section-grid">
            <div className="section-label section-label-light reveal">
              04 — Principles
            </div>
            <p className="principles-kicker reveal">
              How we make decisions when the answer is not obvious.
            </p>
          </div>
          <div className="principle-list">
            {[
              ["01", "Clarity", "over complexity"],
              ["02", "Systems", "over shortcuts"],
              ["03", "Longevity", "over trends"],
            ].map(([number, title, accent]) => (
              <div className="principle reveal" key={number}>
                <span>{number}</span>
                <h2>
                  {title} <em>{accent}</em>
                </h2>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="process section-grid section-space">
          <div className="section-label reveal">05 — Process</div>
          <div className="process-heading reveal">
            <h2>A clear path from ambition to impact.</h2>
          </div>
          <div className="process-list">
            {process.map(([title, copy], index) => (
              <article className="process-step reveal" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section-space">
          <div className="contact-inner section-grid">
            <div className="section-label section-label-light reveal">
              06 — Contact
            </div>
            <div className="contact-heading reveal">
              <p>Have an idea in mind?</p>
              <h2>
                Let&apos;s build
                <br />
                something that <em>lasts.</em>
              </h2>
            </div>

            <div className="contact-aside reveal">
              <span>New business</span>
              <a href="mailto:fang@fangs.dev">fang@fangs.dev</a>
              <p>United States · Working worldwide</p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-reflection" />
        <div className="footer-top">
          <a href="#top" className="footer-wordmark">
            Fangs Dev<span>®</span>
          </a>
          <a href="#top" className="back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p>Fangs Dev LLC</p>
          <p>United States · Global delivery</p>
          <a href="mailto:fang@fangs.dev">fang@fangs.dev</a>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="availability">
            <span />
            Available for selected projects
          </p>
        </div>
      </footer>
    </>
  );
}
