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
}: {
  items: string[];
  tone: "blue" | "violet" | "green";
}) {
  const colors = {
    blue: "bg-[#324cff] shadow-[0_0_14px_rgba(71,87,255,0.45)]",
    violet: "bg-[#784eff] shadow-[0_0_14px_rgba(122,82,255,0.45)]",
    green: "bg-[#17b53a] shadow-[0_0_14px_rgba(30,193,67,0.4)]",
  } as const;

  return (
    <ul className="space-y-4 pt-5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${colors[tone]}`}
          />
          <p className="max-w-87.5 text-[12px] leading-normal text-[#b9b3ca] md:text-[13px]">
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
      <div className="relative h-55 w-full">
        <div className="absolute right-4 top-2 h-42 w-60 rounded-[18px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
        <div className="absolute right-10 top-12 h-30 w-52.5 rounded-[14px] border border-white/6 bg-[#282038]/55" />
        <div className="absolute right-32.5 top-23 h-13.5 w-13.5 rounded-xl border border-[#476cff]/60 bg-[#111423] shadow-[0_0_24px_rgba(54,83,255,0.28)]">
          <div className="flex h-full items-center justify-center">
            <Image src="/profile-02.svg" alt="" width={26} height={26} />
          </div>
        </div>
        <div className="absolute right-31.5 top-37 rounded-md bg-[#ff6b63] px-3 py-1 text-[9px] text-white shadow-[0_10px_20px_rgba(255,107,99,0.25)]">
          Delete
        </div>
        <div className="absolute right-57.5 top-11 h-2.5 w-23 rounded-full bg-[#d9dced]" />
        <div className="absolute right-36 top-22.5 h-2.5 w-30.5 rounded-full bg-[#d9dced]" />
        <div className="absolute right-28.5 top-30 h-2.5 w-29.5 rounded-full bg-[#d9dced]/90" />
        <div className="absolute right-29.5 top-36.5 h-2.5 w-24 rounded-full bg-[#d9dced]/70" />
        <div className="absolute bottom-2 right-0 h-18 w-18 rounded-[14px] border border-white/8 bg-[#181c28] shadow-[0_0_24px_rgba(21,24,46,0.35)]">
          <div className="flex h-full items-center justify-center">
            <Image src="/security-validation.svg" alt="" width={30} height={30} />
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
      <div className="grid grid-cols-2 gap-3 pt-3">
        {metricCards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-white/7 bg-white/3 px-3 py-2.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.01)]"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#2a2338]">
                <Image src={card.icon} alt="" width={16} height={16} />
              </div>
              <div>
                <p className="text-[10px] leading-none text-[#8e89a1]">
                  {card.label}
                </p>
                <p className="mt-1 text-[10px] leading-none text-[#c7c1d8]">
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
    <div className="relative h-55 w-full">
      <div className="absolute right-0 top-5 h-45.5 w-52 rounded-full " />
      <div className="absolute right-15.5 top-11">
        <Image src="/lock.svg" alt="Lock shield" width={138} height={144} />
      </div>
      <div className="absolute left-9.5 top-18.5 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#2a2338]">
            <Image src="/clipboard.svg" alt="" width={16} height={16} />
          </div>
          <div>
            <p className="text-[10px] leading-none text-[#8e89a1]">Email address</p>
            <p className="mt-1 text-[10px] leading-none text-[#c7c1d8]">
              mjd@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-18 top-37 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#2a2338]">
            <Image src="/profile-02.svg" alt="" width={16} height={16} />
          </div>
          <div>
            <p className="text-[10px] leading-none text-[#8e89a1]">User name</p>
            <p className="mt-1 text-[10px] leading-none text-[#c7c1d8]">
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
  return (
    <article className="rounded-[18px] border border-white/7 bg-[radial-gradient(circle_at_58%_46%,rgba(57,84,255,0.18),rgba(17,14,29,0.98)_58%,rgba(10,8,16,1)_100%)] px-5 py-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] md:px-6 md:py-6">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="relative">
          <div
            className={`absolute left-2 top-2 h-40 w-0.5 rounded-full bg-linear-to-b ${section.rail}`}
          />
          <div className="flex items-center gap-3 pl-0.5">
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full ${section.accent} text-[11px] text-white shadow-[0_0_18px_rgba(78,92,255,0.28)]`}
            >
              ✓
            </span>
            <h3 className="font-sora text-[24px] font-medium leading-none tracking-[-0.03em] text-[#d9d6e8] md:text-[30px]">
              {section.title}
            </h3>
          </div>
          <div className="pl-6">
            <BulletList items={section.bullets} tone={tone} />
          </div>
        </div>
        <FeatureVisual kind={section.visual} />
      </div>
    </article>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="mx-auto max-w-280">
        <div className="text-center">
          <div className="mx-auto inline-flex rounded-[28px] border border-[#c58fff]/60 bg-[linear-gradient(180deg,rgba(198,136,255,0.48),rgba(126,77,226,0.22))] px-6 py-3 shadow-[0_12px_32px_rgba(179,106,255,0.3),inset_0_0_12px_rgba(255,255,255,0.16)] backdrop-blur-[10px]">
            <span className="rounded-full bg-[#24202d] px-5 py-1.5 text-[14px] leading-none text-[#e6e0f5]">
              Features
            </span>
          </div>

          <h2 className="mt-7 font-sora text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#d9d6e8] md:text-[52px]">
            Why choose us
          </h2>
          <p className="mx-auto mt-4 max-w-140 text-[18px] leading-normal text-[#c4bdd4] md:text-[20px]">
            We are the only service that provides all 3 services as a packaged
            service
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <FeaturePanel section={sections[0]} tone="blue" />
          <FeaturePanel section={sections[1]} tone="violet" />
          <FeaturePanel section={sections[2]} tone="green" />
        </div>
      </div>
    </section>
  );
}
