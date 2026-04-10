export default function Experience() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 md:px-16 py-16" id="about">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left column */}
        <div className="flex-1">
          <h2 className="font-playfair italic text-3xl md:text-4xl mb-8">
            Our Experience
          </h2>
          <h3 className="font-semibold text-base mb-2">Web design</h3>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            Web design refers to the design of websites that are displayed on
            the internet.
          </p>
        </div>

        {/* Right column */}
        <div className="flex-1">
          {/* Description row */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex gap-6">
              <span className="text-sm font-semibold min-w-[100px] shrink-0">
                Discription
              </span>
              <p className="text-sm text-gray-400 leading-relaxed">
                Web design in nothing more than creatingthe apperance of
                website. The process involves layout, design and commissioning
                of your webste.
              </p>
            </div>
          </div>

          {/* Work row */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <div className="flex gap-6">
              <span className="text-sm font-semibold min-w-[100px] shrink-0">
                Work
              </span>
              <p className="text-sm text-gray-400">
                Our Portfolio of completed works
              </p>
            </div>
          </div>

          {/* CTA */}
          <button className="flex items-center gap-3 border border-foreground rounded-full px-6 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300">
            Check Profolio <span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
