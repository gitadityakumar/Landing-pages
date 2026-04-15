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
      <div className="pointer-events-none absolute inset-x-[18%] inset-y-[16%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(139,94,255,0.48),rgba(93,48,198,0.22)_42%,rgba(0,0,0,0)_74%)] blur-[32px]" />
      <div
        className="rounded-[28px] bg-[linear-gradient(135deg,#233dff_0%,#6e3df4_35%,#c33dac_68%,#ff5ea8_100%)] p-px shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 34px) 0, 100% 34px, 100% 100%, 0 100%)",
        }}
      >
        <div
          className="relative overflow-hidden bg-[radial-gradient(circle_at_58%_38%,rgba(96,69,255,0.24),rgba(25,18,44,0.96)_52%,rgba(12,10,21,1)_100%)] px-5 py-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 34px) 0, 100% 34px, 100% 100%, 0 100%)",
            borderRadius: "28px",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(137,95,255,0.18),rgba(137,95,255,0)_48%)]" />
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#7b30ff_0%,#5318dc_100%)] shadow-[0_10px_24px_rgba(103,48,255,0.34)]">
            <CardIcon type={icon} />
          </div>

          <h3 className="relative mt-5 max-w-[220px] whitespace-pre-line font-sora text-[20px] font-medium leading-[1.1] tracking-[-0.03em] text-[#d8d6e7]">
            {title}
          </h3>

          <p className="relative mt-3 max-w-[238px] text-[14px] leading-[1.45] text-[#c7c1d7]">
            {description}
          </p>

          <button className="relative mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-[#efedf7]">
            <span>Explore More</span>
            <span className="text-[14px] text-white">▶</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Service() {
  return (
    <section id="services" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-190 text-center">
          <div className="mx-auto inline-flex rounded-[28px] border border-[#c58fff]/60 bg-[linear-gradient(180deg,rgba(198,136,255,0.48),rgba(126,77,226,0.22))] px-6 py-3 shadow-[0_12px_32px_rgba(179,106,255,0.3),inset_0_0_12px_rgba(255,255,255,0.16)] backdrop-blur-[10px]">
            <span className="rounded-full bg-[#24202d] px-5 py-1.5 text-[14px] leading-none text-[#e6e0f5]">
              Services
            </span>
          </div>

          <h2 className="mt-6 font-sora text-[36px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#d9d6e9] md:text-[48px]">
            See our services for
            <br />
            secure your{" "}
            <span className="bg-[linear-gradient(180deg,#8f5dff_0%,#5b2bdc_100%)] bg-clip-text text-transparent">
              Data
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-160 text-[18px] leading-[1.35] text-[#c7c1d7]">
            Make your data invisible by generating unlimited identities. The
            next-level in privacy protection for online and travel.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {cards.map((card) => (
            <ServiceItem key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
