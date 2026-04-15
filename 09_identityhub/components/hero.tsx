import Image from "next/image";

const navItems = ["Services", "Features", "Pricing", "Partners", "About us"];

const orbitCards = [
  {
    title: "One-time passcode",
    value: "Kas3345-c32",
    accent: "from-[#79ffb0] to-[#2bd180]",
    dot: "bg-[#8ca2ff]",
    position:
      "left-[14.5%] top-[35.5%] w-[132px] md:left-[16%] md:top-[35.5%] lg:left-[14.5%]",
  },
  {
    title: "Phone numbers",
    value: "+1(456) 453-3456",
    accent: "from-[#ff66e3] to-[#b036ff]",
    dot: "bg-[#a55dff]",
    position:
      "right-[14.5%] top-[35.5%] w-[132px] md:right-[16%] md:top-[35.5%] lg:right-[14.5%]",
  },
  {
    title: "Credit card",
    value: "123 456 789 1243",
    accent: "from-[#c6ff4d] to-[#9bc11c]",
    dot: "bg-[#8f76ff]",
    position:
      "left-[14.5%] top-[67%] w-[132px] md:left-[16%] md:top-[67.5%] lg:left-[14.5%]",
  },
  {
    title: "Email address",
    value: "davidjk@gmail.com",
    accent: "from-[#69a2ff] to-[#4b5fff]",
    dot: "bg-[#6482ff]",
    position:
      "right-[14.5%] top-[67%] w-[132px] md:right-[16%] md:top-[67.5%] lg:right-[14.5%]",
  },
];

const orbitSizes = [
  "h-[220px] w-[220px] md:h-[258px] md:w-[258px]",
  "h-[312px] w-[312px] md:h-[360px] md:w-[360px]",
  "h-[410px] w-[410px] md:h-[456px] md:w-[456px]",
  "h-[500px] w-[500px] md:h-[560px] md:w-[560px]",
];

function OrbitCard({
  title,
  value,
  accent,
  dot,
  position,
}: {
  title: string;
  value: string;
  accent: string;
  dot: string;
  position: string;
}) {
  return (
    <div
      className={`absolute hidden rounded-[10px] border border-white/8 bg-[#191327]/92 px-2.25 py-2 text-left shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-[10px] md:block ${position}`}
    >
      <div className="flex items-center gap-1.75">
        <span
          className={`flex h-4 w-4 items-center justify-center rounded-sm bg-linear-to-br ${accent}`}
        >
          <span className="h-1.25 w-1.25 rounded-full bg-white/70" />
        </span>
        <p className="text-[8px] leading-none text-[#beb8cf]">{title}</p>
      </div>
      <div className="mt-1 flex items-center gap-1.75 pl-px">
        <span className={`h-1.25 w-1.25 rounded-full ${dot}`} />
        <p className="text-[9px] leading-none text-[#807a90]">{value}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-[#cad1e9]">
      <div className="pointer-events-none absolute left-1/2 top-[6%] h-[560px] w-[560px] -translate-x-1/2 rounded-[120px] bg-[radial-gradient(circle_at_58%_24%,rgba(241,80,178,0.46),rgba(241,80,178,0.18)_26%,rgba(97,125,255,0.3)_54%,rgba(26,190,227,0.26)_78%,rgba(0,0,0,0)_100%)] opacity-95 blur-[90px] md:h-[680px] md:w-[680px]" />
      <div className="pointer-events-none absolute left-1/2 top-[12%] h-[500px] w-[500px] -translate-x-1/2 rounded-[110px] bg-[linear-gradient(180deg,rgba(241,80,178,0.3)_0%,rgba(96,124,255,0.28)_46%,rgba(27,186,226,0.22)_100%)] opacity-70 blur-[110px] md:h-[620px] md:w-[620px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-45 bg-[linear-gradient(180deg,rgba(17,10,33,0.92),rgba(0,0,0,0))]" />

      <div className="relative mx-auto max-w-280 px-4 pb-16 pt-2.5 md:px-6 md:pb-18">
        <header className="mx-auto flex max-w-236 items-center justify-between rounded-lg border border-white/8 bg-[#120d1c]/90 px-2.5 py-1.75 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-[14px]">
          <div className="flex items-center gap-1.75">
            <Image
              src="/logo.svg"
              alt="IdentityHub logo"
              width={15}
              height={15}
            />
            <span className="font-mono text-[10px] font-bold tracking-[-0.16px] text-[#cad1e9] md:text-[12px]">
              IdentityHub
            </span>
          </div>

          <nav className="hidden items-center gap-5 text-[10px] text-[#bfb8cf] lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-[8px] border border-[#2a2541] bg-[#171125] px-3 py-1.5 text-[9px] font-medium text-[#d2cde3] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] transition hover:border-[#5b4aff]">
            Start free trial
            <span className="ml-1.5 text-[10px] text-[#7a73a1]">›</span>
          </button>
        </header>

        <div className="relative mx-auto max-w-236 pt-5 text-center md:pt-6">
          <div className="absolute left-1/2 top-13 h-16 w-16 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,124,255,0.22),rgba(194,124,255,0)_70%)] blur-[14px]" />

          <div className="relative z-20 mx-auto inline-flex rounded-[20px] border border-[#b287ff]/65 bg-[linear-gradient(180deg,rgba(180,126,255,0.5),rgba(107,58,209,0.24))] px-3 py-1.5 shadow-[0_8px_24px_rgba(189,112,255,0.28),inset_0_0_10px_rgba(255,255,255,0.16)] backdrop-blur-[10px]">
            <span className="text-[7px] font-medium leading-none text-white">
              Secure your data
            </span>
          </div>

          <h1 className="relative z-20 mx-auto mt-3 max-w-164 font-sora text-[30px] font-semibold leading-[0.94] tracking-[-0.04em] text-transparent md:text-[36px] lg:text-[52px]">
            <span className="bg-[linear-gradient(180deg,#f154d9_8%,#5c54ff_85%)] bg-clip-text">
              Identity-hub is a better way to
              <br />
              achieve privacy
            </span>
          </h1>

          <div className="relative z-20 mx-auto mt-1 h-2.5 w-40 md:w-50">
            <div className="absolute inset-x-0 top-1/2 h-0.75 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(241,84,217,0),#f154d9_25%,#6a55ff_68%,rgba(241,84,217,0))]" />
          </div>

          <p className="relative z-20 mx-auto mt-2 max-w-116 text-[9px] leading-[1.55] text-[#d8d1ea] md:text-[10px] lg:text-[11px]">
            Make your data invisible by generating unlimited identities. The
            next-level in privacy protection for online and travel.
          </p>

          <div className="relative z-20 mt-3 flex items-center justify-center gap-2">
            <button className="rounded-[8px] border border-[#2b2440] bg-[#20172d] px-3.5 py-1.75 text-[9px] font-medium text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.07)]">
              Start free trial
            </button>
            <button className="rounded-[8px] border border-[#d754f6]/40 bg-[linear-gradient(90deg,#5c57ff,#da43f2)] px-3.5 py-1.75 text-[9px] font-medium text-white shadow-[0_8px_24px_rgba(117,78,255,0.28)]">
              Use It Now
            </button>
          </div>

          <div className="relative mx-auto mt-3.5 h-92 w-full max-w-176 md:h-108">
            <div className="pointer-events-none absolute left-1/2 top-[53%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(78,92,255,0.22),rgba(218,67,242,0.14)_42%,rgba(0,0,0,0)_70%)] blur-[20px]" />

            {orbitSizes.map((size) => (
              <div
                key={size}
                className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9ddfb]/75 ${size}`}
              />
            ))}

            <div className="pointer-events-none absolute left-[18.5%] top-[33%] hidden h-1.5 w-1.5 rounded-full bg-[#7c7ab3] md:block" />
            <div className="pointer-events-none absolute left-[2.5%] top-[47.5%] hidden h-3 w-3 rounded-full bg-[radial-gradient(circle,#9de8ef,#5a9195)] shadow-[0_0_16px_rgba(106,220,227,0.28)] md:block" />
            <div className="pointer-events-none absolute right-[1%] top-[33%] hidden h-3 w-3 rounded-full bg-[radial-gradient(circle,#9de8ef,#5a9195)] shadow-[0_0_16px_rgba(106,220,227,0.28)] md:block" />
            <div className="pointer-events-none absolute left-[3.5%] top-[12%] hidden h-2 w-2 rounded-full bg-[radial-gradient(circle,#ecaa91,#8e5954)] md:block" />
            <div className="pointer-events-none absolute right-[4.5%] top-[9%] hidden h-1 w-1 rounded-full bg-[#eb7ddd] md:block" />

            {orbitCards.map((card) => (
              <OrbitCard key={card.title} {...card} />
            ))}

            <div className="absolute left-1/2 top-[53%] z-20 w-42 -translate-x-1/2 -translate-y-1/2 md:w-52">
              <Image
                src="/hero.png"
                alt="IdentityHub security illustration"
                width={485}
                height={437}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
