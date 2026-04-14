import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#151c2c] pt-40 pb-64 lg:pb-80 flex flex-col items-center">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 flex items-start justify-center opacity-30 mt-10 pointer-events-none">
        <Image 
          src="/worldmap.png" 
          alt="World Map" 
          width={1800}
          height={900}
          className="object-cover w-full h-auto max-w-[1400px] mx-auto mix-blend-screen"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.15] mb-8 font-raleway max-w-4xl">
          Human-powered translation for your <span className="text-blue-500">Business.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-medium leading-relaxed">
          Communicate accurately and efficiently with our global network of professional translators. Sign up for free today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
          <button className="px-10 py-4 bg-[#ff6b35] hover:bg-[#ff8c4a] text-white rounded font-bold text-lg transition-colors shadow-lg uppercase tracking-wide">
            Get Started
          </button>
          <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold sm:ml-4 group">
             <span className="opacity-90">Watch how it works</span>
             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/80 group-hover:bg-[#ff6b35]/20 group-hover:text-[#ff6b35] text-white transition-all">
               <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
             </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
