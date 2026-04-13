import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full border-b border-black">
      <div className="absolute inset-0 flex h-full border-b border-black">
        <div className="w-1/2 bg-[#7cebc2] border-r border-black" />
        <div className="w-1/2 bg-[#fae36c]" />
      </div>
      <div className="relative mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Left Column */}
          <div className="px-4 sm:px-6 lg:px-12 py-20 lg:py-32">
            <h1 className="text-5xl sm:text-[4rem] font-bold leading-[1.15] text-gray-900 tracking-tight" style={{fontFamily:"var(--font-prompt)"}}>
              We Build <span className="inline-block text-[#5478f6] -rotate-12 ml-2 tracking-tighter">✌️</span>
              <span className="block mt-3">Experiences</span>
              <span className="block mt-3">For Your Clients</span>
            </h1>
            <p className="mt-8 max-w-sm text-gray-800 text-sm leading-relaxed font-medium">
              Revolver Template is a professional webflow template with multifile sections that you can fully customize
            </p>
            <div className="mt-12 max-w-md">
              <input 
                aria-label="email" 
                placeholder="quickrakbull@gmail.com" 
                className="w-full bg-transparent border-b border-black pb-2 text-sm font-medium text-black placeholder-gray-800 focus:outline-none focus:border-b-2 transition-all" 
              />
              <button className="mt-6 inline-flex items-center gap-2 bg-[#5478f6] border border-black text-white px-6 py-3 text-sm font-medium hover:bg-blue-600 transition shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative group">
                Get free trial 
                <span className="text-lg translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                <span className="absolute -bottom-8 left-10 text-3xl">👆</span>
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative flex items-end justify-center pt-20 lg:pt-0 pb-10">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/hero.webp"
                alt="Hero person"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain object-bottom scale-110 translate-y-8"
                priority
              />
            </div>
            {/* Review Badge */}
            <div className="absolute right-12 top-48 flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] px-4 py-2 border border-gray-200 flex items-center gap-2 z-10">
                <span className="font-semibold text-gray-800 text-lg">5.0</span>
                <div className="flex text-[#5478f6] text-lg">
                  ★★★★★
                </div>
              </div>
              <div className="h-16 w-[1px] border-l border-dashed border-white mt-1 relative">
                <div className="absolute -bottom-2 -left-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logos Strip */}
      <div className="relative bg-[#1a2530] py-8 w-full border-t border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-red-500 text-xl">◑</span>outbrain
            </div>
            <div className="text-2xl font-bold tracking-tight text-white">truevo</div>
            <div className="text-2xl font-semibold tracking-tight text-white flex items-center gap-1">
              <span className="text-xl">✌</span>AngelList
            </div>
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-xl">⬡</span> draftbit
            </div>
            <div className="text-2xl font-bold tracking-widest text-white">LATCH</div>
            <div className="text-2xl font-bold tracking-tight text-white flex items-baseline">amazon</div>
          </div>
        </div>
      </div>
    </section>
  );
}
