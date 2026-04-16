import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/page-utils";

export default function TestimonialsSection() {
  return (
    <section className="hero-surface py-20">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="font-display text-[clamp(2.75rem,5vw,3.5rem)] leading-[1.05] text-foreground">
            Word on the street
          </h2>
        </div>

        <div className="testimonial-card mx-auto mt-10 grid max-w-248 overflow-hidden lg:grid-cols-[1.4fr_332px]">
          <div className="p-8 md:p-12">
            <blockquote className="text-[16px] leading-6 text-black">
              “The Proxima team has unparalleled consumer data that has very exciting
              applications post iOS 14.5. Not only is the data enriching to any
              brand&apos;s targeting options, the team is very experienced and diligent in
              funneling paid media dollars to our goals.”
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <Image
                alt="Charlie Denby"
                className="rounded-full"
                height={50}
                src="/design-assets/charlie-denby.png"
                width={50}
              />
              <div>
                <p className="font-semibold text-[#172d30]">Charlie Denby</p>
                <p className="text-sm text-black">Director of Growth @ Canopy</p>
              </div>
            </div>
          </div>

          <Image
            alt="Canopy product scene"
            className="h-full w-full object-cover"
            height={350}
            src="/design-assets/street-testimonial.jpg"
            width={332}
          />
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <button
            aria-label="Previous testimonial"
            className="transition-transform duration-200 hover:-translate-y-0.5"
            type="button"
          >
            <Image alt="" height={48} src="/design-assets/arrow-left.svg" width={48} />
          </button>
          <button
            aria-label="Next testimonial"
            className="transition-transform duration-200 hover:-translate-y-0.5"
            type="button"
          >
            <Image alt="" height={48} src="/design-assets/arrow-right.svg" width={48} />
          </button>
        </div>

        <div className="mx-auto mt-24 max-w-204.5 text-center">
          <h2 className="font-display text-[clamp(2.75rem,5vw,3.5rem)] leading-[1.05] text-foreground">
            Ready to get more out of your ad spend?
          </h2>
          <p className="mx-auto mt-3 max-w-132.5 text-[20px] leading-normal text-[#2a2a2a]">
            Reach new customers and unlock more efficient marketing spend with predictive
            intelligence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link className={buttonClassName(false)} href="#">
              Start free trial
            </Link>
            <Link className={buttonClassName(true)} href="#">
              Get a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
