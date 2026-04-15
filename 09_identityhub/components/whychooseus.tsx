import Image from "next/image";

type FeatureSection = {
  title: string;
  accent: string;
  rail: string;
  bullets: string[];
  visual: "cards" | "reporting" | "lock";
};

const sections: FeatureSection[] = [
  {
    title: "Protect Personal information",
    accent: "bg-[#3950ff]",
    rail: "from-[#3d4cff] to-[#1f2cdf]",
    bullets: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
    visual: "cards",
  },
  {
    title: "Detailed Reporting",
    accent: "bg-[#7a52ff]",
    rail: "from-[#7d58ff] to-[#532bd8]",
    bullets: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
    visual: "reporting",
  },
  {
    title: "Secure All Data",
    accent: "bg-[#1bc43c]",
    rail: "from-[#18c33c] to-[#0f7e28]",
    bullets: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
    visual: "lock",
  },
];

function BulletList({
  items,
  tone,
  compact = false,
}: {
  items: string[];
  tone: "blue" | "violet" | "green";
  compact?: boolean;
}) {
  const colors = {
    blue: "bg-[#324cff] shadow-[0_0_14px_rgba(71,87,255,0.45)]",
    violet: "bg-[#784eff] shadow-[0_0_14px_rgba(122,82,255,0.45)]",
    green: "bg-[#17b53a] shadow-[0_0_14px_rgba(30,193,67,0.4)]",
  } as const;

  return (
    <ul className={compact ? "space-y-4 pt-5" : "space-y-3 pt-4"}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${colors[tone]}`}
          />
          <p
            className={`text-[#b9b3ca] ${
              compact
                ? "max-w-95 text-[13px] leading-[1.5] md:text-[14px]"
                : "max-w-87.5 text-[11px] leading-normal md:text-[12px]"
            }`}
          >
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

function FeatureVisual({ kind }: { kind: FeatureSection["visual"] }) {
  if (kind === "cards") {
    return (
      <div className="relative h-56 w-full">
        <div className="absolute right-2 top-0 h-42 w-60 rounded-[14px] border border-white/8 bg-[linear-gradient(135deg,rgba(47,57,126,0.48),rgba(110,68,86,0.34))] shadow-[0_20px_40px_rgba(0,0,0,0.12)]" />
        <div className="absolute right-10 top-10 h-40 w-58 rounded-[12px] border border-white/8 bg-[linear-gradient(135deg,rgba(42,34,82,0.78),rgba(63,38,53,0.36))] shadow-[0_20px_40px_rgba(0,0,0,0.14)]" />
        <div className="absolute left-2 top-16 h-16 w-16 rounded-[12px] border border-[#564367] bg-[#101627] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_14px_30px_rgba(10,14,30,0.38)]">
          <div className="flex h-full items-center justify-center">
            <Image src="/profile-02.svg" alt="" width={30} height={30} />
          </div>
        </div>
        <div className="absolute left-8 top-41 rounded-[10px] bg-[#fb695f] px-4 py-2 text-[11px] font-medium text-white shadow-[0_10px_20px_rgba(255,107,99,0.25)]">
          Delete
        </div>
        <div className="absolute left-16 top-14 h-4 w-44 rounded-full bg-[#dfe4ff]" />
        <div className="absolute left-21 top-28 h-4 w-44 rounded-full bg-[#dfe4ff]" />
        <div className="absolute left-21 top-35 h-4 w-50 rounded-full bg-[#8e89a1]" />
        <div className="absolute left-21 top-42 h-4 w-50 rounded-full bg-[#8e89a1]" />
        <div className="absolute left-24 top-[186px] text-white/90">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M9.5 2.5 11 8l5.5 1.5L11 11l-1.5 5.5L8 11l-5.5-1.5L8 8l1.5-5.5Zm9.2 11.3.8 2.9 2.9.8-2.9.8-.8 2.9-.8-2.9-2.9-.8 2.9-.8.8-2.9Z" />
          </svg>
        </div>
        <div className="absolute bottom-1 right-6 h-18 w-18 rounded-[14px] border border-[#564367] bg-[#101627] shadow-[0_0_24px_rgba(21,24,46,0.35)]">
          <div className="flex h-full items-center justify-center">
            <Image src="/security-validation.svg" alt="" width={34} height={34} />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "reporting") {
    const metricCards = [
      { label: "Username", value: "+1 (456) 453-3456", icon: "/profile-02.svg" },
      { label: "Phone numbers", value: "+1 (456) 453-3456", icon: "/clipboard.svg" },
      { label: "Email address", value: "+1 (456) 453-3456", icon: "/profile-02.svg" },
      { label: "Credit card", value: "+1 (456) 453-3456", icon: "/clipboard.svg" },
      { label: "Password", value: "Kas3345-c32", icon: "/profile-02.svg" },
      { label: "One-time passcode", value: "Kas3345-c32", icon: "/security-validation.svg" },
    ];

    return (
      <div className="grid grid-cols-2 gap-2.5 pt-2">
        {metricCards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-white/7 bg-white/3 px-2.5 py-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.01)]"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-[#2a2338]">
                <Image src={card.icon} alt="" width={16} height={16} />
              </div>
              <div>
                <p className="text-[9px] leading-none text-[#8e89a1]">
                  {card.label}
                </p>
                <p className="mt-1 text-[9px] leading-none text-[#c7c1d8]">
                  {card.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-48 w-full">
      <div className="absolute right-0 top-5 h-40 w-46 rounded-full " />
      <div className="absolute right-12 top-10">
        <Image src="/lock.svg" alt="Lock shield" width={120} height={126} />
      </div>
      <div className="absolute left-8 top-16 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#2a2338]">
            <Image src="/clipboard.svg" alt="" width={16} height={16} />
          </div>
          <div>
            <p className="text-[9px] leading-none text-[#8e89a1]">Email address</p>
            <p className="mt-1 text-[9px] leading-none text-[#c7c1d8]">
              mjd@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-15 top-31 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#2a2338]">
            <Image src="/profile-02.svg" alt="" width={16} height={16} />
          </div>
          <div>
            <p className="text-[9px] leading-none text-[#8e89a1]">User name</p>
            <p className="mt-1 text-[9px] leading-none text-[#c7c1d8]">
              tufayel nija
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturePanel({
  section,
  tone,
}: {
  section: FeatureSection;
  tone: "blue" | "violet" | "green";
}) {
  const isPrimary = section.visual === "cards";

  return (
    <article
      className={`rounded-[18px] border shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] ${
        isPrimary
          ? "border-[#1d33d8] bg-[radial-gradient(circle_at_62%_52%,rgba(114,56,179,0.34),rgba(33,25,60,0.98)_56%,rgba(12,10,22,1)_100%)] px-6 py-5 md:px-7 md:py-6"
          : "border-white/7 bg-[radial-gradient(circle_at_58%_46%,rgba(57,84,255,0.18),rgba(17,14,29,0.98)_58%,rgba(10,8,16,1)_100%)] px-5 py-4 md:px-6 md:py-5"
      }`}
    >
      <div
        className={`grid md:items-center ${
          isPrimary
            ? "gap-8 md:grid-cols-[1.08fr_0.92fr]"
            : "gap-6 md:grid-cols-[1.1fr_0.9fr]"
        }`}
      >
        <div className="relative">
          <div
            className={`absolute left-2 top-1 rounded-full bg-linear-to-b ${section.rail} ${
              isPrimary ? "h-49 w-[3px]" : "h-40 w-0.5"
            }`}
          />
          <div className={`flex items-center gap-3 ${isPrimary ? "pl-0" : "pl-0.5"}`}>
            <span
              className={`flex items-center justify-center rounded-full ${section.accent} text-white shadow-[0_0_18px_rgba(78,92,255,0.28)] ${
                isPrimary ? "h-6 w-6 text-[12px]" : "h-5 w-5 text-[11px]"
              }`}
            >
              ✓
            </span>
            <h3
              className={`font-sora font-medium leading-none tracking-[-0.03em] text-[#d9d6e8] ${
                isPrimary ? "text-[22px] md:text-[24px]" : "text-[20px] md:text-[26px]"
              }`}
            >
              {section.title}
            </h3>
          </div>
          <div className={isPrimary ? "pl-9" : "pl-6"}>
            <BulletList items={section.bullets} tone={tone} compact={isPrimary} />
          </div>
        </div>
        <FeatureVisual kind={section.visual} />
      </div>
    </article>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="features" className="py-16 md:py-20">
      <div className="mx-auto max-w-280">
        <div className="text-center">
          <div className="mx-auto inline-flex rounded-[28px] border border-[#c58fff]/60 bg-[linear-gradient(180deg,rgba(198,136,255,0.48),rgba(126,77,226,0.22))] px-6 py-3 shadow-[0_12px_32px_rgba(179,106,255,0.3),inset_0_0_12px_rgba(255,255,255,0.16)] backdrop-blur-[10px]">
            <span className="rounded-full bg-[#24202d] px-5 py-1.5 text-[14px] leading-none text-[#e6e0f5]">
              Features
            </span>
          </div>

          <h2 className="mt-6 font-sora text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#d9d6e8] md:text-[44px]">
            Why choose us
          </h2>
          <p className="mx-auto mt-3 max-w-124 text-[15px] leading-normal text-[#c4bdd4] md:text-[17px]">
            We are the only service that provides all 3 services as a packaged
            service
          </p>
        </div>

        <div className="mt-9 space-y-3.5">
          <FeaturePanel section={sections[0]} tone="blue" />
          <FeaturePanel section={sections[1]} tone="violet" />
          <FeaturePanel section={sections[2]} tone="green" />
        </div>
      </div>
    </section>
  );
}
