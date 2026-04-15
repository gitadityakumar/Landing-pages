function ArrowButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8e3dff] bg-[linear-gradient(180deg,#8a44ff_0%,#5d2df5_100%)] text-white shadow-[0_14px_30px_rgba(123,70,255,0.32)] transition hover:brightness-110"
    >
      <span className="text-[28px] leading-none">
        {direction === "left" ? "‹" : "›"}
      </span>
    </button>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="mx-auto max-w-310">
        <div className="text-center">
          <div className="mx-auto inline-flex rounded-[28px] border border-[#c58fff]/60 bg-[linear-gradient(180deg,rgba(198,136,255,0.48),rgba(126,77,226,0.22))] px-6 py-3 shadow-[0_12px_32px_rgba(179,106,255,0.3),inset_0_0_12px_rgba(255,255,255,0.16)] backdrop-blur-[10px]">
            <span className="rounded-full bg-[#24202d] px-5 py-1.5 text-[14px] leading-none text-[#e6e0f5]">
              Testimonials
            </span>
          </div>

          <h2 className="mt-8 font-sora text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#dcd9eb] md:text-[58px]">
            What’s our user{" "}
            <span className="bg-[linear-gradient(180deg,#ba8cff_0%,#6e2be6_100%)] bg-clip-text text-transparent">
              says
            </span>
            <br />
            about us
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-280 px-8 md:px-12">
          <div className="absolute left-0 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <ArrowButton direction="left" />
          </div>
          <div className="absolute right-0 top-1/2 z-20 translate-x-1/2 -translate-y-1/2">
            <ArrowButton direction="right" />
          </div>

          <div className="rounded-3xl border border-white/6 bg-[radial-gradient(circle_at_70%_35%,rgba(59,53,108,0.16),rgba(16,13,28,0.98)_58%,rgba(10,8,16,1)_100%)] px-10 py-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.012)]">
            <div className="rounded-[22px] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-8 py-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.01)] md:px-10 md:py-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#f0c5d1] bg-[linear-gradient(180deg,#f6a7c1_0%,#6f76c9_100%)] text-[18px] font-semibold text-[#1d1830]">
                  DJ
                </div>

                <div className="min-w-0">
                  <h3 className="font-sora text-[22px] font-semibold leading-none text-white md:text-[24px]">
                    David J. Karem
                  </h3>
                  <p className="mt-2 text-[18px] leading-none text-[#a9a3b8]">
                    Businessmen • 1 day ago
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-245 text-[22px] leading-[1.42] text-[#c7c1d6] md:text-[24px]">
                Forget about spam, advertising mailings, hacking and attacking
                robots. Keep your real mailbox clean and secure. Temp Mail
                provides temporary, secure, anonymous, free, disposable email
                address. Stalkers and disgruntled acquaintances use the Internet
                to find addresses, phone numbers and other personal details about
                their targets. Identity thieves use personal information numbers
                and other personal details.
              </p>

              <div className="mt-10 flex items-center justify-center gap-8">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c7c1d6]" />
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#8b43ff]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8b43ff]" />
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#c7c1d6]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#c7c1d6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
