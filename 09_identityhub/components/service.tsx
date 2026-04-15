type ServiceCard = {
  title: string;
  description: string;
  icon: "phone" | "grid" | "shield";
};

const cards: ServiceCard[] = [
  {
    title: "Personal Information\nremoval",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    icon: "phone",
  },
  {
    title: "Cloaking Alias\nProfiles",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    icon: "grid",
  },
  {
    title: "Virtual identities\nSecurity",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    icon: "shield",
  },
];

function CardIcon({ type }: { type: ServiceCard["icon"] }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M15.7 14.6c-1.8 1.8-5.1-1.5-6.9-3.3-1.8-1.8-5.1-5.1-3.3-6.9l1.2-1.2c.5-.5 1.3-.5 1.8 0l2 2c.5.5.5 1.2.1 1.7l-1 1.1c.6 1.1 1.8 2.3 2.9 2.9l1.1-1c.5-.4 1.2-.4 1.7.1l2 2c.5.5.5 1.3 0 1.8l-1.6 1.6Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "grid") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <rect x="4" y="4" width="6" height="6" rx="1.2" fill="white" />
        <rect x="14" y="4" width="6" height="6" rx="1.2" fill="white" />
        <rect x="4" y="14" width="6" height="6" rx="1.2" fill="white" />
        <rect x="14" y="14" width="6" height="6" rx="1.2" fill="white" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M12 3.8 18 6v5.5c0 4-2.5 6.8-6 8.7-3.5-1.9-6-4.7-6-8.7V6l6-2.2Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12.4 1.5 1.5 3.5-3.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceItem({ title, description, icon }: ServiceCard) {
  return (
    <article className="relative">
      <div className="pointer-events-none absolute inset-x-[14%] inset-y-[8%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(222,189,255,0.9),rgba(160,118,255,0.42)_40%,rgba(0,0,0,0)_72%)] blur-[26px] opacity-90" />
      <div className="rounded-3xl border border-[#3322a6] bg-[radial-gradient(circle_at_60%_48%,rgba(78,52,203,0.35),rgba(16,12,30,0.98)_58%,rgba(10,8,18,1)_100%)] px-7 py-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#7c2cff_0%,#4c11d2_100%)] shadow-[0_10px_30px_rgba(109,47,255,0.38)]">
          <CardIcon type={icon} />
        </div>

        <h3 className="mt-7 whitespace-pre-line font-sora text-[28px] font-medium leading-[1.18] tracking-[-0.03em] text-[#d8d6e7]">
          {title}
        </h3>

        <p className="mt-5 max-w-[320px] text-[18px] leading-[1.45] text-[#b9b4cb]">
          {description}
        </p>

        <button className="mt-9 inline-flex items-center gap-3 text-[18px] font-medium text-[#efedf7]">
          <span>Explore More</span>
          <span className="text-[18px] text-white">▶</span>
        </button>
      </div>
    </article>
  );
}

export default function Service() {
  return (
    <section id="services" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-190 text-center">
          <div className="mx-auto inline-flex rounded-[28px] border border-[#c58fff]/60 bg-[linear-gradient(180deg,rgba(198,136,255,0.48),rgba(126,77,226,0.22))] px-6 py-3 shadow-[0_12px_32px_rgba(179,106,255,0.3),inset_0_0_12px_rgba(255,255,255,0.16)] backdrop-blur-[10px]">
            <span className="rounded-full bg-[#24202d] px-5 py-1.5 text-[14px] leading-none text-[#e6e0f5]">
              Services
            </span>
          </div>

          <h2 className="mt-8 font-sora text-[42px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#d9d6e9] md:text-[54px]">
            See our services for
            <br />
            secure your{" "}
            <span className="bg-[linear-gradient(180deg,#8f5dff_0%,#5b2bdc_100%)] bg-clip-text text-transparent">
              Data
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-190 text-[24px] leading-[1.35] text-[#c7c1d7]">
            Make your data invisible by generating unlimited identities. The
            next-level in privacy protection for online and travel.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <ServiceItem key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
