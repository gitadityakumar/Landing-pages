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
    <section className="overflow-hidden pt-20">
      <div className="mx-auto max-w-375">
        <div className="relative mx-auto flex min-h-155 max-w-215 items-center justify-center px-6 text-center">
          <div className="absolute inset-0 rounded-[120px] bg-[radial-gradient(circle_at_50%_18%,rgba(248,78,197,0.46),rgba(91,120,255,0.34)_38%,rgba(19,184,233,0.34)_66%,rgba(0,0,0,0)_92%)] blur-[42px]" />
          <div className="absolute inset-[6%_7%_2%_7%] rounded-[110px] bg-[radial-gradient(circle_at_50%_14%,rgba(245,77,186,0.62),rgba(85,122,255,0.28)_42%,rgba(26,176,224,0.36)_68%,rgba(0,0,0,0)_90%)] opacity-90 blur-[20px]" />

          {[220, 320, 420, 520].map((size) => (
            <div
              key={size}
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14"
              style={{ width: size, height: size }}
            />
          ))}

          <div className="relative z-10 max-w-190">
            <h2 className="font-sora text-[54px] font-semibold leading-[1.03] tracking-[-0.05em] text-white md:text-[64px]">
              Be part of the future of
              <br />
              IdentityHub
            </h2>

            <div className="mx-auto mt-3 h-2.5 w-60">
              <div className="h-1.25 rounded-full bg-[linear-gradient(90deg,#5030ff_0%,#e147d6_100%)]" />
            </div>

            <p className="mx-auto mt-6 max-w-175 text-[20px] leading-[1.45] text-[#e1d9eb]">
              Unleash the power of AI within Brainwave. Upgrade your
              productivity with Brainwave, the open AI chat app.
            </p>

            <button className="mt-8 rounded-xl border border-[#e07ef5]/35 bg-[linear-gradient(90deg,#4f35ff_0%,#e243d1_100%)] px-8 py-4 text-[18px] font-medium text-white shadow-[0_18px_40px_rgba(133,75,255,0.28)] transition hover:brightness-110">
              Start free trail
            </button>
          </div>
        </div>

        <footer className="mt-2 border-t border-white/20 px-2 pb-8 pt-6 md:px-0">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="IdentityHub logo" width={28} height={28} />
              <span className="font-mono text-[24px] font-bold tracking-[-0.03em] text-[#d8d4e7]">
                IdentityHub
              </span>
            </div>

            <nav className="flex flex-wrap items-center gap-10 text-[12px] font-semibold tracking-[0.08em] text-[#d9d5e6]">
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

          <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-[16px] text-[#d3cfdf]">
              © identityhub 2024. All rights reserved
            </p>

            <div className="flex items-center gap-5">
              {(["twitter", "instagram", "telegram", "facebook"] as const).map((icon) => (
                <button
                  key={icon}
                  aria-label={icon}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#21193a] text-white transition hover:bg-[#30225d]"
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
