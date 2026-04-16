import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/page-utils";

const navLinks = ["Product", "Case studies", "Resources", "Pricing"];

const logoNames = ["Lomi", "gorjana", "hint", "VENUS ET FLEUR", "obvi"];

export default function HeroSection() {
  return (
    <section className="hero-surface">
      <div className="section-shell flex min-h-187 flex-col">
        <header className="flex items-center justify-between gap-8 py-5">
          <Link className="flex items-center gap-3 text-(--color-page-ink-strong)" href="#">
            <Image
              alt="Halal_Lab mark"
              height={28}
              priority
              src="/design-assets/brand-mark.svg"
              width={28}
            />
            <span className="font-brand text-[18px]">Halal_Lab</span>
          </Link>

          <nav className="hidden items-center gap-14 text-[13px] font-semibold text-[#222] md:flex">
            {navLinks.map((item) => (
              <Link href="#" key={item}>
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              className="inline-flex rounded-[10px] border border-black px-8 py-2.5 text-[16px] font-semibold"
              href="#"
            >
              Login
            </Link>
            <Link
              className="inline-flex h-11 min-w-39.75 rounded-[10px] bg-black px-8 py-2.5 text-[16px] font-semibold text-background"
              href="#"
            >
              Get a demo
            </Link>
          </div>
        </header>

        <div className="flex flex-1 items-center justify-center py-16">
          <div className="mx-auto flex max-w-180 flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-2 text-[16px] font-semibold text-black">
              <Image alt="" height={24} src="/design-assets/star.svg" width={24} />
              <span>
                4.5{" "}
                <span className="font-medium text-(--color-page-muted-strong)">
                  (124 reviews)
                </span>
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display text-[clamp(3.5rem,7vw,4.5rem)] leading-[0.98] text-black">
                Data is the key to profitable growth
              </h1>
              <p className="mx-auto max-w-140 text-[20px] font-medium leading-normal text-[#2a2a2a]">
                Proxima&apos;s predictive intelligence lowers acquisition costs and increases
                customer LTV so you can scale your business profitably.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link className={buttonClassName(false)} href="#">
                Start free trial
              </Link>
              <Link className={buttonClassName(true)} href="#">
                Get a demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="logo-rail bg-black">
        <div className="section-shell flex min-h-25 flex-wrap items-center justify-between gap-6 py-6 text-background">
          <span className="text-sm font-semibold tracking-[0.3em] text-(--color-page-surface-muted)">
            TRUSTED BY
          </span>
          {logoNames.map((name) => (
            <span
              className="text-sm font-semibold uppercase tracking-[0.24em] text-(--color-page-surface)/90"
              key={name}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
