import Image from "next/image";

const services = [
  "Brand Identity",
  "UI/UX Design",
  "Strategy",
  "Web Design",
  "Motion",
  "Development",
];

const projects = [
  {
    title: "Minimal room",
    subtitle: "Editorial space",
    image: "/images/feature-1.webp",
    size: "large",
  },
  {
    title: "Branding Design",
    subtitle: "Packaging system",
    image: "/images/feature-2.webp",
    size: "small",
  },
  {
    title: "Hanging Design",
    subtitle: "Campaign object",
    image: "/images/feature-3.webp",
    size: "small",
  },
  {
    title: "Dizzying Identity",
    subtitle: "Product visual",
    image: "/images/feature-4.webp",
    size: "large",
  },
  {
    title: "Mouse Design",
    subtitle: "Interactive focus",
    image: "/images/feature-5.webp",
    size: "large",
  },
  {
    title: "Mouse Design",
    subtitle: "Playful layout",
    image: "/images/feature-6.webp",
    size: "small",
  },
];

const capabilities = [
  {
    title: "What we can do?",
    text: "We build bold landing pages, product stories, and design systems that feel polished at every breakpoint.",
  },
  {
    title: "How we do?",
    text: "A focused mix of visual direction, structure, and frontend implementation keeps the work clean and shippable.",
  },
  {
    title: "Why it works?",
    text: "The output is consistent, memorable, and optimized for both portfolio presentation and real-world product launches.",
  },
];

const testimonials = [
  "Awwwards",
  "Behance",
  "Dribbble",
  "CSSDA",
];

export default function Home() {
  return (
    <main className="teamollo-page">
      <section className="hero-section">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="hero-ring hero-ring-top" />
        <div className="hero-ring hero-ring-bottom" />

        <div className="section-shell hero-shell">
          <p className="eyebrow">Creative Direction</p>
          <div className="hero-heading-row">
            <h1 className="hero-title">
              Let&apos;s Talk
              <br />
              To Design
              <br />
              Teamollo
            </h1>
            <div className="hero-dots" aria-hidden="true">
              <span />
              <span />
            </div>
          </div>

          <div className="hero-image-wrap">
            <Image
              src="/images/heroimage.webp"
              alt="Teamollo studio interior"
              width={1200}
              height={760}
              priority
              className="hero-image"
            />
          </div>

          <p className="hero-copy">
            We are an award-winning strategy, design, and production team crafting memorable digital experiences.
            Thoughtful visuals and clean interfaces help modern brands move with clarity and speed.
          </p>

          <div className="service-pills" aria-label="Services">
            {services.map((service) => (
              <span key={service} className="service-pill">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-shell">
          <div className="section-intro">
            <p className="section-kicker">Recent work</p>
            <div className="section-divider" />
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                key={`${project.title}-${project.image}`}
                className={`project-card project-card-${project.size}`}
              >
                <div className="project-copy">
                  <p className="project-title">{project.title}</p>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-image-wrap">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={1100}
                    className="project-image"
                  />
                </div>
                <span className="project-dot" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-shell">
          <div className="capability-heading">
            <div>
              <p className="capability-pretitle">Take a look</p>
              <h2 className="capability-title">at What</h2>
            </div>
            <div className="capability-title-right">
              <h2 className="capability-title">We Can Do</h2>
              <h2 className="capability-title">For You</h2>
            </div>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.title} className="capability-card">
                <div className="capability-card-top">
                  <span className="capability-plus">+</span>
                  <span className="capability-rule" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contact">Know More</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-shell">
          <div className="testimonial-track" aria-label="Highlights">
            {testimonials.map((item) => (
              <span key={item} className="testimonial-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="statement-section">
        <div className="section-shell statement-shell">
          <p className="statement-copy">
            Every interaction of Students around the World
          </p>
          <a className="statement-button" href="#contact">
            Offer
          </a>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="section-shell cta-shell">
          <div>
            <p className="cta-kicker">Start with us</p>
            <h2 className="cta-title">
              Want to Start
              <br />
              a Project?
            </h2>
          </div>

          <a className="cta-button" href="mailto:hello@teamollo.com">
            hello@teamollo.com
          </a>
        </div>
      </section>
    </main>
  );
}
