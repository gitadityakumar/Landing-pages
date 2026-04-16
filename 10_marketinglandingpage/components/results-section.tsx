import Image from "next/image";

const stats = [
  {
    value: "2.4x",
    label: "Higher ROAS",
    detail: "Predictive audiences outperform in-platform targeting.",
  },
  {
    value: "31%",
    label: "Lower CAC",
    detail: "Better signals keep acquisition efficient as you scale.",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-(--color-page-bg) py-20 md:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-190 text-center">
          <h2 className="font-display text-[clamp(2.75rem,5vw,3.5rem)] leading-[1.05] text-white">
            Eye popping results
          </h2>
          <p className="mx-auto mt-3 max-w-142.5 text-[20px] leading-normal text-(--color-page-muted)">
            We&apos;ll help you acquire more customers for less and maximize marketing
            performance so you can scale profitably.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center">
          <div className="overflow-hidden rounded-xl border border-white/8 bg-black/20 p-4">
            <Image
              alt="Performance line graph"
              className="w-full"
              height={381}
              priority
              src="/design-assets/line-graph.svg"
              width={925}
            />
          </div>

          <div className="grid gap-6">
            {stats.map((stat) => (
              <div className="feature-panel rounded-xl p-6" key={stat.label}>
                <p className="font-display text-4xl leading-none text-white">{stat.value}</p>
                <p className="mt-3 text-lg font-semibold text-white">{stat.label}</p>
                <p className="mt-2 text-sm leading-6 text-(--color-page-muted)">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-panel-soft mt-10 rounded-xl p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Image
                alt="Nick Chadha"
                className="rounded-full"
                height={102}
                src="/design-assets/nick-chadha.jpg"
                width={102}
              />
              <div>
                <p className="text-lg font-semibold text-background">Nick Chadha</p>
                <p className="text-[16px] text-(--color-page-muted)">
                  Co-Founder @ Venus et Fleur
                </p>
              </div>
            </div>

            <blockquote className="max-w-170 text-xl leading-[1.7] text-background md:text-2xl">
              “Proxima helps us scale without sacrificing efficiency. Their audience
              intelligence changes how we approach growth.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
