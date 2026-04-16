import Image from "next/image";

const audienceHighlights = [
  "Reach more customers who are ready to buy with richer first-party data signals.",
  "Outperform campaigns that rely on in-platform targeting alone.",
  "Improve CAC, ROAS, and AOV with models that continue learning over time.",
];

const intelligenceCards = [
  {
    accent: "var(--color-page-yellow)",
    title: "More data, sharper decisions",
    body: "Tap into an ever-growing universe of first-party data from 60M+ eCommerce shoppers and $10B+ in online sales.",
  },
  {
    accent: "var(--color-page-lime)",
    title: "Expand your reach",
    body: "Discover high-intent buyers beyond your current customer file and build audiences with stronger conversion potential.",
  },
  {
    accent: "var(--color-page-blue)",
    title: "Scale ads with confidence",
    body: "Spend more without losing efficiency by prioritizing prospects that map to profitable lifetime value.",
  },
];

export default function AudiencesSection() {
  return (
    <section className="bg-(--color-page-bg) pb-24">
      <div className="section-shell">
        <div className="mx-auto max-w-165 text-center">
          <h2 className="font-display text-[clamp(2.75rem,5vw,3.5rem)] leading-[1.05] text-white">
            AI Audiences give you an edge in advertising
          </h2>
          <p className="mt-3 text-[20px] leading-normal text-(--color-page-muted)">
            Maximize your ad performance with predictive audiences built from millions of
            commerce insights.
          </p>
        </div>

        <div className="mt-18 grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="max-w-135">
            <h3 className="text-[30px] font-bold leading-[1.3] tracking-[-0.01em] text-background">
              Scale ad spend without efficiency loss
            </h3>
            <p className="mt-4 text-[18px] leading-[1.7] text-(--color-page-muted)">
              Reach more customers who are ready to buy by tapping into a rich first-party
              data layer that strengthens every targeting decision.
            </p>
          </div>

          <div className="feature-panel rounded-xl p-8">
            <ul className="space-y-5">
              {audienceHighlights.map((item) => (
                <li
                  className="border-b border-white/8 pb-5 text-[17px] leading-[1.7] text-(--color-page-surface-muted) last:border-b-0 last:pb-0"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[569px_1fr] lg:items-center">
          <Image
            alt="Megaphone customer creative"
            className="rounded-xl object-cover"
            height={408}
            src="/design-assets/megaphone.jpg"
            width={569}
          />

          <div className="max-w-130">
            <h3 className="text-[30px] font-bold leading-[1.3] tracking-[-0.01em] text-background">
              Find customers with stronger purchase intent
            </h3>
            <p className="mt-4 text-[18px] leading-[1.7] text-(--color-page-muted)">
              Extend beyond lookalikes with predictive models tuned to real buying behavior,
              then allocate spend toward the segments most likely to convert profitably.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="font-display text-[clamp(2.75rem,5vw,3.5rem)] leading-[1.05] text-white">
            Unlock profitable growth with data intelligence
          </h2>
          <p className="mx-auto mt-3 max-w-186 text-[20px] leading-normal text-(--color-page-muted)">
            Make better business decisions with industry-leading predictive intelligence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {intelligenceCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <div
                className="border-b border-(--color-page-outline-dark) px-4 py-3 text-[16px] font-bold"
                style={{ backgroundColor: card.accent }}
              >
                {card.title}
              </div>
              <div className="px-4 py-5 text-[16px] leading-7 text-black">{card.body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
