import Image from "next/image";

const footerLinks = ["FEATURES", "SERVICES", "PRICING", "HOW TO USE"];

function SocialIcon({ type }: { type: "twitter" | "instagram" | "telegram" | "facebook" }) {
  if (type === "twitter") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M18.9 7.2c.7-.1 1.3-.4 1.8-.8-.2.7-.7 1.3-1.3 1.7v.4c0 4.2-3.2 9-9 9-1.8 0-3.4-.5-4.8-1.4h.7c1.5 0 2.9-.5 4-1.4-1.4 0-2.6-.9-3-2.2h.6c.3 0 .6 0 .9-.1-1.5-.3-2.6-1.6-2.6-3.2.4.2.9.4 1.4.4-.9-.6-1.5-1.6-1.5-2.7 0-.6.2-1.2.5-1.7 1.6 2 4 3.3 6.7 3.4-.1-.2-.1-.5-.1-.8 0-1.9 1.6-3.5 3.5-3.5 1 0 1.9.4 2.6 1.1.8-.1 1.5-.4 2.2-.8-.3.9-.8 1.5-1.6 1.9Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.3" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "telegram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M19.7 5.2 4.8 10.9c-1 .4-1 1 0 1.3l3.8 1.2 1.5 4.7c.2.7.5.8 1 .4l2.1-2 4.3 3.2c.8.4 1.3.2 1.5-.7l2.5-12.1c.2-1-.3-1.4-1-.9Zm-9.2 8.1-.1 3.5-.8-2.6 8.1-6.8-7.2 5.9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M13.4 20v-7h2.3l.4-2.7h-2.7V8.5c0-.8.2-1.4 1.4-1.4h1.5V4.7c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v2h-2.3V13h2.3v7h2.5Z" />
    </svg>
  );
}

export default function CtaFooter() {
  return (
    <section className="overflow-hidden pt-16 md:pt-18">
      <div className="mx-auto max-w-360">
        <div className="relative mx-auto flex min-h-120 max-w-205 items-center justify-center px-6 text-center md:min-h-126">
          <div className="absolute left-1/2 top-[17%] h-[360px] w-[420px] -translate-x-1/2 rounded-[120px] bg-[radial-gradient(circle_at_50%_18%,rgba(232,73,176,0.24),rgba(84,105,255,0.18)_40%,rgba(0,0,0,0)_76%)] blur-[48px]" />
          <div className="absolute left-1/2 top-[36%] h-[320px] w-[360px] -translate-x-1/2 rounded-[120px] bg-[radial-gradient(circle_at_36%_80%,rgba(25,164,229,0.22),rgba(0,0,0,0)_66%)] blur-[54px]" />

          {[165, 235, 305, 375].map((size) => (
            <div
              key={size}
              className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
              style={{ width: size, height: size }}
            />
          ))}

          <div className="relative z-10 max-w-135">
            <h2 className="font-sora text-[34px] font-semibold leading-[1.04] tracking-[-0.05em] text-white md:text-[40px]">
              Be part of the future of
              <br />
              IdentityHub
            </h2>

            <div className="mx-auto mt-2 h-2 w-34">
              <div className="h-1 rounded-full bg-[linear-gradient(90deg,#4f49ff_0%,#e044cf_100%)]" />
            </div>

            <p className="mx-auto mt-3 max-w-120 text-[13px] leading-[1.45] text-[#d7d0e3]">
              Unleash the power of AI within Brainwave. Upgrade your
              productivity with Brainwave, the open AI chat app.
            </p>

            <button className="mt-5 rounded-[10px] border border-[#d86ef0]/30 bg-[linear-gradient(90deg,#4d46ff_0%,#ef47c5_100%)] px-5 py-2.5 text-[12px] font-medium text-white shadow-[0_12px_24px_rgba(133,75,255,0.2)] transition hover:brightness-110">
              Start free trial
            </button>
          </div>
        </div>

        <footer className="mt-4 border-t border-white/8 px-2 pb-4 pt-5 md:px-0">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="IdentityHub logo" width={28} height={28} />
              <span className="font-mono text-[22px] font-bold tracking-[-0.03em] text-[#d8d4e7]">
                IdentityHub
              </span>
            </div>

            <nav className="flex flex-wrap items-center gap-8 text-[10px] font-semibold tracking-[0.08em] text-[#bdb6cd]">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition hover:text-white"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[11px] text-[#a8a2b8]">
              © identityhub 2024. All rights reserved
            </p>

            <div className="flex items-center gap-4">
              {(["twitter", "instagram", "telegram", "facebook"] as const).map((icon) => (
                <button
                  key={icon}
                  aria-label={icon}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2c2440] text-white transition hover:bg-[#3a2f58]"
                >
                  <SocialIcon type={icon} />
                </button>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
