
import Image from "next/image";

const marketStats = [
  { label: "Users onboarded", value: "120K+" },
  { label: "Assets supported", value: "240+" },
  { label: "Daily volume", value: "$84M" },
];

const features = [
  {
    title: "Swap faster",
    copy:
      "Move between top assets with a clean flow, transparent pricing, and live market visibility.",
  },
  {
    title: "Track everything",
    copy:
      "Monitor balances, market movements, and portfolio health in one compact command center.",
  },
  {
    title: "Secure by default",
    copy:
      "Biometric access, encrypted wallet actions, and transaction review built into every step.",
  },
];

const highlights = [
  "Cross-chain wallet experience",
  "Institutional-grade security flows",
  "Real-time pricing and portfolio sync",
  "Built for phone-first investing",
];

const securityNotes = [
  "Biometric confirmation for sensitive actions",
  "Cold-wallet friendly transfer review",
  "Fraud-aware activity monitoring",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-144 bg-[radial-gradient(circle_at_top_left,rgba(87,70,255,0.48),transparent_45%),radial-gradient(circle_at_top_right,rgba(255,196,77,0.18),transparent_30%),linear-gradient(180deg,rgba(17,12,46,0.95),rgba(5,3,22,1))]" />
        <div className="absolute left-1/2 top-24 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />

        <section className="mx-auto max-w-7xl px-5 pb-14 pt-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-3 backdrop-blur sm:px-4 md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-accent/50 bg-accent/15 text-lg font-bold">
                CF
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-semibold tracking-tight sm:text-lg">
                  CoinFusion
                </p>
                <p className="hidden text-xs text-muted sm:block">
                  Future-ready crypto wallet
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/78 md:flex">
              <a href="#features">Features</a>
              <a href="#markets">Markets</a>
              <a href="#security">Security</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#markets"
                className="hidden rounded-full border border-white/12 px-5 py-3 text-sm text-white/80 transition hover:border-white/30 hover:text-white md:inline-flex"
              >
                View Markets
              </a>
              <a
                href="#download"
                className="inline-flex h-10 w-[5.75rem] shrink-0 min-w-0 items-center justify-center rounded-full bg-white px-3 py-3 text-sm font-semibold text-[#09051D] transition hover:scale-[0.98] sm:h-auto sm:w-auto sm:px-5"
              >
                <span className="sm:hidden">Get App</span>
                <span className="hidden sm:inline">Download App</span>
              </a>
            </div>
          </header>

          <div className="grid items-center gap-12 pb-8 pt-14 lg:grid-cols-[1.04fr_0.96fr] lg:pt-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6a59ff]/40 bg-[#100b30] px-4 py-2 text-sm text-white/82 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <span className="h-2 w-2 rounded-full bg-accent-2" />
                Trusted by modern crypto investors
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-none tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
                Seamless wealth
                <span className="block bg-[linear-gradient(135deg,#ffffff_10%,#b4aaff_45%,#ffc44d_100%)] bg-clip-text text-transparent">
                  across every chain
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                CoinFusion gives traders and long-term holders a cleaner way to
                store, move, and grow digital assets with live insight, compact
                controls, and security that stays invisible until you need it.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  id="download"
                  href="#download"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#5746ff,#7e71ff)] px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(87,70,255,0.42)] transition hover:-translate-y-px"
                >
                  Start Investing
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold text-white/82 transition hover:border-white/28 hover:bg-white/8"
                >
                  Explore Platform
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {marketStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.04em]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-white/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-152">
              <div className="absolute inset-x-8 top-1/2 -z-10 h-44 -translate-y-1/2 rounded-full bg-accent/35 blur-3xl" />
              <div className="absolute right-2 top-8 hidden rounded-full border border-white/10 bg-[#0f0a2b]/90 px-4 py-3 text-sm text-white/75 shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:block">
                Live BTC movement
                <span className="mt-1 block text-xl font-semibold text-white">
                  +12.84%
                </span>
              </div>

              <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(21,16,54,0.95),rgba(9,7,27,0.98))] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.45)] sm:p-6">
                <div className="grid gap-4 rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4 sm:p-5">
                  <div className="flex items-center justify-between rounded-[1.4rem] border border-white/8 bg-black/20 px-4 py-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                        Portfolio Balance
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                        $248,430
                      </p>
                    </div>
                    <div className="rounded-full bg-[#1e174d] px-4 py-2 text-sm font-medium text-[#d5d0ff]">
                      +8.21%
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[0.96fr_1.04fr]">
                    <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top,_rgba(255,196,77,0.12),transparent_30%),linear-gradient(180deg,#131033,#0b081f)] p-4">
                      <div className="absolute left-4 top-4 rounded-full border border-[#5546ff] bg-[#120d32]/90 px-4 py-2 text-xs text-white/75">
                        Wallet Preview
                      </div>
                      <Image
                        src="/mask2.svg"
                        alt="CoinFusion mobile app mockup"
                        width={265}
                        height={441}
                        className="mx-auto mt-12 w-[78%] max-w-[18rem]"
                        priority
                      />
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[1.7rem] border border-white/8 bg-[#120d31] p-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-white/50">Top asset</p>
                            <p className="mt-1 text-xl font-semibold">Bitcoin</p>
                          </div>
                          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
                            <Image
                              src="/yen.svg"
                              alt="Bitcoin coin graphic"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="mt-5 flex items-end justify-between">
                          <p className="text-3xl font-semibold tracking-[-0.04em]">
                            $61,940
                          </p>
                          <p className="text-sm font-medium text-[#ffc44d]">
                            +6.12% today
                          </p>
                        </div>
                      </div>

                      <div className="overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(135deg,#5a47ff,#2f1da8)] p-5">
                        <p className="text-sm text-white/70">Private vault</p>
                        <p className="mt-2 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.04em]">
                          Security designed to stay one step ahead.
                        </p>
                        <div className="relative mt-5 h-40 sm:h-44">
                          <Image
                            src="/Mask group.svg"
                            alt="Abstract security icon"
                            fill
                            className="object-contain object-right-bottom"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 rounded-[1.6rem] border border-white/8 bg-black/20 p-4 sm:grid-cols-2">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-white/8 bg-white/5 px-4 py-4 text-sm text-white/70"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        id="features"
        className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 lg:px-10"
      >
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/4 p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-white/45">
              Why CoinFusion
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Built for clarity in a market that never slows down.
            </h2>
            <p className="mt-4 max-w-md text-base leading-8 text-white/65">
              The interface focuses on the essential actions first, then layers
              in deeper market context without making the product feel heavy.
            </p>
          </div>

          <div
            id="markets"
            className="grid gap-5 md:grid-cols-3"
          >
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
              >
                <div className="h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,rgba(255,196,77,0.95),rgba(87,70,255,0.95))]" />
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {feature.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="security"
        className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10"
      >
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(18,13,49,0.95),rgba(11,8,31,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-white/45">
              Security Layer
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Control risk without slowing down decisions.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-white/65">
              CoinFusion keeps the interface fast, but every critical action is
              paired with stronger review states, clearer approvals, and a vault
              model that makes intent obvious before value ever moves.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {securityNotes.map((note) => (
              <div
                key={note}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-6"
              >
                <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,rgba(255,196,77,0.95),rgba(87,70,255,0.95))]" />
                <p className="mt-8 text-base leading-7 text-white/80">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
