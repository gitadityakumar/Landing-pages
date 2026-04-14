import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const IntegrationFeature = () => {
  return (
    <section className="w-full py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-6">
            Seamless Integration
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.15] tracking-tight">
            Work where you already work.
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            VerbalizeIt integrates deeply with the tools your team relies on every day. Push and pull content automatically without leaving your CMS or Helpdesk.
          </p>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/30">
            Explore Integrations
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Image mockup */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-start relative">
          <div className="relative z-10 w-full max-w-2xl perspective-[1000px]">
            <Image 
              src="/mocup1.webp" 
              alt="Integration Mockup" 
              width={1000} 
              height={700}
              className="w-full h-auto object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 transform-gpu rotate-y-[5deg] rotate-x-[2deg]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntegrationFeature;
