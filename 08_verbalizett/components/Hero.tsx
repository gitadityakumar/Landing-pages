import React from 'react';
import Image from 'next/image';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pt-16 md:pt-24 pb-20">
      {/* Background Map Placeholder */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <Image 
          src="/worldmap.png" 
          alt="World Map" 
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50">
          <Globe className="w-4 h-4" />
          <span>Global Network</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-4xl mb-6">
          Human-powered translation for your <span className="text-blue-600">Business.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 font-medium">
          Communicate accurately and efficiently with our global network of professional translators. Sign up for free today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
            View Live Demo
          </button>
        </div>

        {/* Dashboard mockups */}
        <div className="relative w-full max-w-5xl mx-auto perspective-[2000px]">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-slate-200/50 transform-gpu rotate-[-2deg] scale-[1.02]">
            <Image 
              src="/mockup2.webp" 
              alt="Dashboard interface" 
              width={1200} 
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating Mobile Mockup */}
          <div className="absolute -bottom-10 -right-4 sm:-right-8 lg:-right-16 w-32 sm:w-48 lg:w-64 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white transform-gpu rotate-2 z-20">
            <Image 
              src="/mobile.webp" 
              alt="Mobile App" 
              width={400} 
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
