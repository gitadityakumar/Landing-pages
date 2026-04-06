import Image from "next/image";

const chips = [
  "Branding",
  "Digital Design",
  "Web Design",
  "Identity",
  "Direction",
  "Development",
  "Strategy",
];

const services = [
  {
    title: "Interior Design",
    image: "/images/feature-1.webp",
    accent: "top-left",
  },
  {
    title: "Branding Design",
    image: "/images/feature-2.webp",
    accent: "top-right",
  },
  {
    title: "Luxury Identity",
    image: "/images/feature-3.webp",
    accent: "bottom-right",
  },
  {
    title: "Packaging Design",
    image: "/images/feature-4.webp",
    accent: "bottom-left",
  },
  {
    title: "Website Design",
    image: "/images/feature-5.webp",
    accent: "top-left",
  },
  {
    title: "Visual Design",
    image: "/images/feature-6.webp",
    accent: "bottom-right",
  },
];

const proofItems = [
  {
    title: "What can Teamollo help you with?",
    body: "We build identity systems, launch-ready sites, and digital experiences that feel crisp on first contact.",
  },
  {
    title: "How do we work?",
    body: "Fast workshops, sharp art direction, and production-minded design keep projects moving without losing polish.",
  },
  {
    title: "What is the outcome?",
    body: "A memorable brand surface with clear messaging, clean systems, and assets ready to ship.",
  },
];

const partners = ["Framer", "Lummi", "Webflow", "Figma", "Notion", "Linear"];

function ServiceTitle({
  title,
  accent,
}: {
  title: string;
  accent: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const positionMap = {
    "top-left": "left-4 top-4 text-left",
    "top-right": "right-4 top-4 text-right",
    "bottom-left": "bottom-4 left-4 text-left",
    "bottom-right": "bottom-4 right-4 text-right",
  } satisfies Record<typeof accent, string>;

  return (
    <div className={`absolute ${positionMap[accent]} max-w-[7.5rem]`}>
      <p className="text-[0.7rem] font-semibold leading-tight text-zinc-900">
        {title}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#ececec]">
      <section className="w-full overflow-hidden bg-[#100f12] text-white">
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-10 pt-6 sm:px-8 lg:px-12">
          <div className="absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_85%_0%,rgba(184,73,255,0.95),rgba(100,31,176,0.7)_24%,rgba(16,15,18,0)_58%)]" />
          <div className="absolute -right-5 top-28 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(179,255,0,0.55),rgba(179,255,0,0))]" />
          <div className="absolute left-6 top-20 h-4 w-4 rounded-full bg-[#d9ff00]" />
          <div className="absolute right-20 top-10 h-3 w-3 rounded-full bg-white/70" />

          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div className="flex items-start justify-between">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-white/70">
                Teamollo
              </p>
              <button
                type="button"
                aria-label="Open navigation"
                className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/6 backdrop-blur"
              >
                <span className="flex w-4 flex-col gap-1">
                  <span className="h-px w-full bg-white" />
                  <span className="h-px w-full bg-white" />
                  <span className="h-px w-full bg-white" />
                </span>
              </button>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start lg:gap-10">
              <div>
                <h1 className="max-w-[13rem] text-[2.2rem] font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-[2.8rem]">
                  Let&apos;s Talk
                  <br />
                  To Design
                  <br />
                  Teamollo
                </h1>

                <div className="mt-5 border-t border-white/10 pt-4 text-[0.68rem] leading-[1.5] text-white/70 lg:max-w-[18rem]">
                  <p>
                    We are a creative branding boutique studio focused on visual
                    identity, digital product pages, and launch-ready
                    storytelling. Design should feel alive, sharp, and easy to
                    remember.
                  </p>
                </div>
              </div>

              <div>
                <div className="relative overflow-hidden rounded-[2px] border border-white/10 bg-[#1f1e22]">
                  <Image
                    src="/images/heroimage.webp"
                    alt="Design studio worktable"
                    width={1633}
                    height={789}
                    className="h-[145px] w-full object-cover sm:h-[220px] lg:h-[360px]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#121215] text-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap gap-2 px-6 py-5 sm:px-8 lg:px-12">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/18 px-3 py-1.5 text-[0.62rem] font-medium tracking-[0.06em] text-white/76"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-8 sm:px-8 lg:px-12">
          <div className="mb-5 flex items-end justify-between gap-6">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                Selected Work
              </p>
              <h2 className="mt-1 text-lg font-bold tracking-[-0.04em] text-zinc-950">
                Recent projects
              </h2>
            </div>
            <p className="max-w-[6.5rem] text-right text-[0.62rem] leading-relaxed text-zinc-500">
              Branding, visual systems and presentation surfaces.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-3 lg:gap-x-6 lg:gap-y-7">
            {services.map((service) => (
              <article key={service.title} className="group">
                <div className="relative overflow-hidden rounded-[2px] bg-[#f5f3ef]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={805}
                    height={734}
                    className="aspect-[0.92] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <ServiceTitle
                    title={service.title}
                    accent={service.accent}
                  />
                  <span className="absolute bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_3px_rgba(255,255,255,0.65)]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#faf9f7] text-zinc-950">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-10 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[1.45rem] font-bold leading-[1.05] tracking-[-0.06em]">
                Take a Look
                <br />
                at What
              </p>
            </div>
            <div className="text-right">
              <p className="text-[1.45rem] font-bold leading-[1.05] tracking-[-0.06em]">
                We Can Do
                <br />
                For You
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3 lg:gap-8">
            {proofItems.map((item, index) => (
              <article
                key={item.title}
                className="grid grid-cols-[auto_1fr] items-start gap-3 border-b border-zinc-200 pb-5 last:border-b-0 lg:border-b-0 lg:border-r lg:pr-6 last:lg:border-r-0"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 text-[0.55rem] font-semibold text-zinc-500">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-[0.78rem] font-semibold tracking-[-0.02em] text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.68rem] leading-[1.55] text-zinc-500">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-y border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-zinc-400 sm:px-8 lg:px-12">
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-6 sm:px-8 lg:px-12">
          <div className="rounded-[2px] bg-[#f3f4f5] px-5 py-5 text-center">
            <p className="text-[0.95rem] font-semibold leading-snug tracking-[-0.03em] text-zinc-900">
              Grow innovation of students
              <br />
              everyday at Teamollo
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center rounded-full bg-black px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Offer now
            </button>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#b9ff28] text-zinc-950">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(185,255,40,0),rgba(84,125,0,0.14))]" />
        <div className="relative mx-auto flex w-full max-w-[1400px] items-start justify-between gap-4 px-6 py-8 sm:px-8 lg:px-12">
          <div>
            <p className="max-w-[9rem] text-[2rem] font-extrabold leading-[0.92] tracking-[-0.06em]">
              Want to Start a Project?
            </p>
          </div>
          <button
            type="button"
            aria-label="Open project contact"
            className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/35"
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-black" />
              <span className="h-px w-full bg-black" />
              <span className="h-px w-full bg-black" />
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}
