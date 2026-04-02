import { Aperture, Circle, Box, LayoutTemplate } from "lucide-react";

export function About() {
  return (
    <section className="px-4 md:px-8 py-20 pb-32 max-w-[1500px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-16 lg:gap-32">
        {/* Left Content */}
        <div className="flex-1 max-w-[800px]">
          <p className="text-[22px] md:text-[28px] lg:text-[34px] font-medium leading-[1.3] tracking-tight text-[#f6f6f6]">
            We are passionate about creating visually stunning and functional solutions that communicate effectively. I have a keen eye for detail and a deep understanding of design principles, which I use to deliver projects that exceed my clients&apos; expectations.
          </p>
        </div>

        {/* Right Client Logos */}
        <div className="lg:w-[450px] shrink-0 grid grid-cols-2 gap-x-12 gap-y-12 items-center justify-items-start mt-2">
          <div className="flex items-center gap-3 text-xl font-bold text-gray-300/80 hover:text-white transition-colors cursor-pointer">
            <Aperture className="w-5 h-5 text-gray-500" /> KRATE
          </div>
          <div className="flex items-center gap-3 text-xl font-bold text-gray-300/80 hover:text-white transition-colors cursor-pointer font-serif">
            <LayoutTemplate className="w-5 h-5 text-gray-500" /> Kalo
          </div>
          <div className="flex items-center gap-3 text-xl font-bold text-gray-300/80 hover:text-white transition-colors cursor-pointer">
            <Box className="w-5 h-5 text-gray-500" /> Massui
          </div>
          <div className="flex items-center gap-3 text-xl font-bold text-gray-300/80 hover:text-white transition-colors cursor-pointer italic font-mono">
            Kinua
          </div>
          <div className="flex items-center gap-3 text-xl font-bold text-gray-300/80 hover:text-white transition-colors cursor-pointer">
             <Circle className="w-5 h-5 text-gray-500" /> Altall
          </div>
          <div className="flex items-center gap-3 text-xl border-l-[3px] border-gray-500 pl-3 font-bold text-gray-300/80 hover:text-white transition-colors cursor-pointer font-sans tracking-widest">
            TANO
          </div>
        </div>
      </div>
    </section>
  )
}
