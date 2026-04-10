import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Orange gradient blob – top-left corner */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-orange-300/60 via-orange-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 pt-4 pb-4">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-4">
          {/* ── Left: text content ── */}
          <div className="flex-1 z-10 pt-4 lg:pt-8">
            {/* Badge */}
            <span className="inline-block bg-accent-yellow text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6">
              New
            </span>

            {/* Headline */}
            <h1 className="font-prosto-one text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.2] mb-10 max-w-md">
              Driver Revenue Digital Marketing Agency That
            </h1>

            {/* Info columns */}
            <div className="flex gap-6 mb-8">
              <div className="pr-6 border-r border-gray-200">
                <h3 className="font-semibold text-sm mb-1">Our Office</h3>
                <p className="text-[11px] text-gray-400">
                  Agency - Berlin, Germany
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Latest Project</h3>
                <p className="text-[11px] text-gray-400">
                  Design Product for Verde
                </p>
              </div>
            </div>

            {/* CTA */}
            <button className="flex items-center gap-3 border border-foreground rounded-full px-6 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300">
              Scroll down <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* ── Right: hero photo ── */}
          <div className="relative flex-1 flex justify-end">
            {/* Purple circle behind the photo */}
            <div className="absolute -bottom-8 -right-4 w-48 h-48 lg:w-56 lg:h-56 bg-accent-purple rounded-full z-0" />

            <div className="relative z-10 rounded-xl overflow-hidden max-w-md">
              <Image
                src="/heroimg.png"
                alt="Creative team"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Decorative arch lines ── */}
        <div className="flex justify-center mt-8 relative h-44">
          <Image
            src="/hero1.svg"
            alt=""
            width={366}
            height={163}
            className="absolute top-0"
            aria-hidden="true"
          />
          <Image
            src="/hero2.svg"
            alt=""
            width={355}
            height={161}
            className="absolute top-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
