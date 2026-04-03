import Image from "next/image";

const heroChips = [
  { title: "Limited Bitcoin view", value: "Fast market snapshots", tone: "#ffc43a" },
  { title: "BTC apps", value: "Curated ecosystem flows", tone: "#5b45ff" },
  { title: "Proof of transfer", value: "Secured settlement", tone: "#8f8f8f" },
  { title: "Bitcoin rewards", value: "Native yield paths", tone: "#d9a61a" },
];

const stackCards = [
  "Proof of transfer",
  "Bitcoin to NFTs",
  "Bitcoin to DeFi",
];

const buildChips = [
  "Apps",
  "Protocols",
  "Tooling",
  "Infrastructure",
];

const exploreTabs = [
  "All apps",
  "DeFi",
  "NFT",
  "Wallets",
  "Learning resources",
  "Smart tools",
  "Bitcoin-secured",
];

export default function Home() {
  return (
    <main className="bg-[#f4f3ef] text-[#111111]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-12 px-3 py-3 sm:px-4 sm:py-4 lg:gap-16">
        <section className="overflow-hidden rounded-[28px] bg-[#050505] px-5 pb-8 pt-5 text-white sm:rounded-[34px] sm:px-8 sm:pb-10 lg:px-12 lg:pb-14">
          <div className="mx-auto inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-6">
            <div className="flex items-center gap-3">
              <span>Explore</span>
              <span className="text-white/25">|</span>
              <span>Stacks</span>
              <span className="text-white/25">|</span>
              <span>Apps</span>
              <span className="text-white/25">|</span>
              <span>Community</span>
            </div>
          </div>

          <div className="relative mt-14 text-center sm:mt-20 lg:mt-24">
            <div className="absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5137ff]/25 blur-3xl sm:h-72 sm:w-72" />
            <h1 className="mx-auto max-w-[11ch] text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-balance sm:text-6xl lg:text-[78px]">
              Unleash Bitcoin full potential
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/58 sm:text-base">
              A modern Stacks-inspired landing page for exploring apps, rewards,
              and Bitcoin-secured experiences.
            </p>
            <div className="mt-7 flex justify-center">
              <a
                href="#stacking"
                className="inline-flex rounded-full bg-[linear-gradient(135deg,#5b45ff,#7a6cff)] px-6 py-3 text-sm font-semibold shadow-[0_14px_40px_rgba(91,69,255,0.45)] transition hover:translate-y-[-1px]"
              >
                Start building
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {heroChips.map((chip, index) => (
              <div
                key={chip.title}
                className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-8 w-8 place-items-center rounded-full bg-[#1a1a1a] text-xs font-semibold"
                    style={{ color: chip.tone }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{chip.title}</p>
                    <p className="mt-1 text-xs text-white/45">{chip.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="stacking"
          className="rounded-[28px] bg-[#f4f3ef] px-3 py-2 sm:px-4 lg:px-6"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.26em] text-[#7b7b7b]">
                Bitcoin rewards
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-[#121212] sm:text-5xl">
                Stacking, a new way to earn bitcoin
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#616161] sm:text-base">
                Access yield-like participation secured by Bitcoin finality and
                purpose-built for the Stacks ecosystem.
              </p>
              <a
                href="#explore"
                className="mt-7 inline-flex rounded-full bg-[linear-gradient(135deg,#5b45ff,#7a6cff)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(91,69,255,0.25)]"
              >
                Learn stacking
              </a>
            </div>

            <div className="relative min-h-[240px] rounded-[32px] bg-transparent sm:min-h-[280px]">
              <div className="absolute left-[6%] top-[8%] rounded-full border border-[#dbd7cf] bg-white px-4 py-2 text-sm font-semibold text-[#555] shadow-sm">
                9.5%
              </div>
              <div className="absolute left-[50%] top-[6%] h-11 w-11 rounded-full border-4 border-[#1f1f1f] bg-[radial-gradient(circle_at_35%_35%,#ffe894,#d2a10a)] shadow-md" />
              <div className="absolute left-[20%] top-[30%] rounded-full bg-[linear-gradient(135deg,#6c56ff,#7b67ff)] px-6 py-4 text-xl font-semibold tracking-[-0.05em] text-white shadow-[0_16px_35px_rgba(91,69,255,0.22)] sm:left-[25%] sm:px-7 sm:text-[34px]">
                $864,890,126
              </div>
              <div className="absolute left-[47%] top-[58%] grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#5b45ff,#7a6cff)] text-2xl text-white shadow-[0_14px_35px_rgba(91,69,255,0.25)]">
                +
              </div>
              <div className="absolute right-[3%] top-[46%] rounded-[22px] border border-[#ddd8cf] bg-white px-4 py-3 text-right shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8d8d8d]">
                  New stacking
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1c1c1c]">
                  Earn bitcoin yield
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
              Stacks unleashed
              <span className="block">Bitcoin</span>
            </h3>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {stackCards.map((card, index) => (
                <article
                  key={card}
                  className="rounded-[14px] border border-[#e5e1d8] bg-[#efefed] p-5 text-left sm:min-h-[230px]"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-[linear-gradient(135deg,#5b45ff,#7a6cff)] text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="mt-16 max-w-[10ch] text-2xl font-medium leading-tight tracking-[-0.05em] text-[#111111]">
                    {card}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-[#8a8a8a]">
              Built on Bitcoin
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-[28px] bg-[#080808] px-5 py-8 text-white sm:rounded-[34px] sm:px-8 lg:px-12 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.84fr_1.16fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-white/38">
                App layer
              </p>
              <h2 className="mt-4 max-w-[10ch] text-4xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-5xl lg:text-[58px]">
                Build powerful apps, secured by bitcoin
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/58 sm:text-base">
                Design applications around Bitcoin’s security guarantees while
                keeping UX modern, fluid, and accessible.
              </p>
              <a
                href="#explore"
                className="mt-7 inline-flex rounded-full bg-[linear-gradient(135deg,#5b45ff,#7a6cff)] px-5 py-3 text-sm font-semibold"
              >
                Launch faster
              </a>
            </div>

            <div className="grid items-center gap-6 md:grid-cols-[0.72fr_1.28fr]">
              <div className="mx-auto w-full max-w-[220px]">
                <div className="rounded-[36px] bg-[linear-gradient(180deg,#5f47ff,#4830ea)] p-5 shadow-[0_30px_80px_rgba(91,69,255,0.28)]">
                  <div className="grid h-28 place-items-center rounded-[28px] border border-white/12 bg-white/8">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-3xl text-[#5f47ff]">
                      🔒
                    </div>
                  </div>
                  <div className="mt-5 flex justify-center">
                    <div className="h-2 w-20 rounded-full bg-white/80" />
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="absolute right-4 top-2 h-32 w-32 rounded-full bg-[#f7b925]/14 blur-3xl" />
                <div className="rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,#1a1a1a,#101010)] p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/36">
                        Secure wallet
                      </p>
                      <p className="mt-2 text-lg font-medium text-white/85">
                        Bitcoin-secured experience
                      </p>
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#f7b925] text-black">
                      ₿
                    </div>
                  </div>

                  <div className="mt-6 flex items-end justify-center">
                    <Image
                      src="/mask2.svg"
                      alt="Secure bitcoin app preview"
                      width={265}
                      height={441}
                      className="h-auto w-full max-w-[240px] sm:max-w-[260px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              See what
              <span className="block">being built</span>
            </h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {buildChips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/76"
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid items-center gap-10 rounded-[28px] bg-[#f4f3ef] px-3 py-2 sm:px-4 lg:grid-cols-[0.92fr_1.08fr] lg:px-6">
          <div className="max-w-xl">
            <p className="text-sm leading-7 text-[#555555]">
              Bitcoin secures a simpler, safer, and more expressive development
              network. Build what matters, move with confidence, and keep the
              product anchored to the world’s most credible chain.
            </p>
            <a
              href="#explore"
              className="mt-5 inline-flex text-sm font-semibold text-[#5b45ff]"
            >
              Learn about the world →
            </a>
          </div>

          <div className="flex items-end justify-center gap-4 sm:gap-8">
            <Image
              src="/mask2.svg"
              alt="Compact wallet preview"
              width={170}
              height={280}
              className="h-auto w-[128px] sm:w-[160px]"
            />
            <Image
              src="/Mask group.svg"
              alt="Stacks abstract emblem"
              width={210}
              height={320}
              className="h-auto w-[155px] sm:w-[195px]"
            />
          </div>
        </section>

        <section
          id="explore"
          className="overflow-hidden rounded-[28px] bg-[#080808] px-5 py-8 text-white sm:rounded-[34px] sm:px-8 lg:px-12 lg:py-12"
        >
          <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
            Explore Stacks
          </h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {exploreTabs.map((tab, index) => (
              <div
                key={tab}
                className={`rounded-full border px-4 py-2 text-sm ${
                  index === 0
                    ? "border-white/20 bg-white text-black"
                    : "border-white/10 bg-white/6 text-white/72"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="mt-10 h-px bg-white/10" />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-white/35">
                Ecosystem overview
              </p>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/56 sm:text-base">
                Discover apps, infrastructure, and learning paths built for a
                Bitcoin-secured internet. The section is intentionally restrained
                to mirror the minimal footer treatment in the supplied design.
              </p>
              <a
                href="#"
                className="mt-7 inline-flex text-sm font-semibold text-[#6b59ff]"
              >
                Browse ecosystem
              </a>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[18px] border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                    Apps live
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                    180+
                  </p>
                </div>
                <div className="rounded-[18px] border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                    Secured value
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                    $864M
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.22em] text-white/28">
            <span>Bitcoin secured internet</span>
            <span>2026</span>
          </div>
        </section>
      </div>
    </main>
  );
}
