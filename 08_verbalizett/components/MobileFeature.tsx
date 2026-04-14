import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const MobileFeature = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-6">
            Mobile Access
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.15] tracking-tight">
            Translation literally at your fingertips.
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Whether you're travelling or attending international business meetings, our mobile app allows you to communicate seamlessly across languages.
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              'Real-time audio translation',
              'Offline mode available',
              'Supported in 150+ languages',
              'Connect with live human translators instantly'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              App Store
            </button>
            <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Google Play
            </button>
          </div>
        </div>

        {/* Image mockup */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative z-10 mx-auto w-full max-w-[320px]">
             {/* Decorative blob behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-60 -z-10" />
            <Image 
              src="/mobile.webp" 
              alt="Mobile Application" 
              width={400} 
              height={800}
              className="w-full h-auto object-cover rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileFeature;
