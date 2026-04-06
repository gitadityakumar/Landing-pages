import Image from "next/image";

const services = [
  "Branding",
  "Design System",
  "Web Design",
  "UI Strategy",
  "Development",
  "App Design",
];

const projects = [
  {
    title: "Branding Design",
    image: "/images/feature-1.webp",
    alt: "A minimal desk and wall composition",
  },
  {
    title: "Branding Design",
    image: "/images/feature-2.webp",
    alt: "Packaging and poster design layout",
  },
  {
    title: "Hanging Design",
    image: "/images/feature-3.webp",
    alt: "Fashion editorial hanging card",
  },
  {
    title: "Dizzy Identity",
    image: "/images/feature-4.webp",
    alt: "Glossy product renders with a blue gradient",
  },
  {
    title: "Mouse Design",
    image: "/images/feature-5.webp",
    alt: "A black laptop keyboard composition",
  },
  {
    title: "Mobile Design",
    image: "/images/feature-6.webp",
    alt: "Red poster composition",
  },
];

const capabilities = [
  {
    title: "What can Teamollo actually build?",
    text: "Landing pages, brand systems, interfaces, product visuals, and frontend-ready design direction.",
  },
  {
    title: "How do we make it feel right?",
    text: "Clear hierarchy, deliberate white space, bold image pairings, and strong editorial pacing.",
  },
  {
    title: "Why does it convert better?",
    text: "The experience is memorable, easier to scan, and shaped to push attention toward the right action.",
  },
];

const partners = ["Behance", "Awwwards", "Dribbble", "Figma"];

export default function Home() {
  return (
    <main className="teamollo-app">
      <div className="page-shell">
        <section className="hero-panel">
          <div className="hero-decor hero-decor-blur" aria-hidden="true" />
          <div className="hero-decor hero-decor-dot-left" aria-hidden="true" />
          <div className="hero-decor hero-decor-dot-right" aria-hidden="true" />
          <div className="hero-decor hero-decor-ring" aria-hidden="true" />

          <p className="hero-kicker">Home</p>
          <h1 className="hero-title">
            Let&apos;s Talk
            <br />
            To Design
            <br />
            Teamollo
          </h1>

          <div className="hero-image-frame">
            <Image
              src="/images/heroimage.webp"
              alt="Teamollo creative studio space"
              width={1200}
              height={760}
              priority
              className="hero-image"
            />
          </div>

          <p className="hero-copy">
            We are an award-winning strategy, design, and production team. A digital partner for founders,
            products, and modern brands that need strong visuals and a clear interface language.
          </p>

          <div className="service-grid" aria-label="Services">
            {services.map((service) => (
              <span key={service} className="service-pill">
                {service}
              </span>
            ))}
          </div>
        </section>

        <section className="works-section">
          <div className="section-heading">
            <p className="section-kicker">Selected works</p>
          </div>

          <div className="works-grid">
            {projects.map((project, index) => (
              <article
                key={`${project.title}-${project.image}`}
                className={`work-card ${index % 2 === 1 ? "work-card-offset" : ""}`}
              >
                <div className="work-media">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={900}
                    height={1100}
                    className="work-image"
                  />
                </div>
                <div className="work-meta">
                  <h2 className="work-title">{project.title}</h2>
                  <span className="work-arrow" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capability-section">
          <div className="capability-heading">
            <div>
              <p className="section-kicker">Take a Look</p>
              <h2 className="capability-title">at What</h2>
            </div>
            <div className="capability-heading-right">
              <h2 className="capability-title">We Can Do</h2>
              <h2 className="capability-title">For You</h2>
            </div>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.title} className="capability-card">
                <div className="capability-card-line">
                  <span className="capability-card-plus">+</span>
                  <span className="capability-card-rule" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="partner-section" aria-label="Partners">
          {partners.map((partner) => (
            <div key={partner} className="partner-item">
              <span className="partner-dot" aria-hidden="true" />
              <span>{partner}</span>
            </div>
          ))}
        </section>

        <section className="quote-section">
          <p className="quote-copy">Those creations of Students around the World</p>
          <a href="#contact" className="quote-button">
            Offer
          </a>
        </section>

        <section id="contact" className="cta-panel">
          <span className="cta-lines" aria-hidden="true" />
          <p className="section-kicker cta-kicker">Office</p>
          <h2 className="cta-title">
            Want to Start
            <br />a Project?
          </h2>
        </section>
      </div>
    </main>
  );
}
