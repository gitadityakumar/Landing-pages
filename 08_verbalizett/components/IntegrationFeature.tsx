import React from 'react';
import Image from 'next/image';

const stats = [
  { value: '4.5k+', label: 'Daily register from new users' },
  { value: '1.5k+', label: 'Language in the world' },
  { value: '1000+', label: 'Total learners in the world' },
];

const IntegrationFeature = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 ">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-black text-center leading-[1.12] tracking-tight mb-4">
          Learn a new language the fun way
        </h2>
        <p className="text-sm md:text-[15px] text-slate-500 text-center max-w-lg mx-auto mb-14 lg:mb-16">
          Reach your language goals fast with the world&apos;s #1 education app
        </p>

        {/* World Map */}
        <div className="relative w-full max-w-5xl mx-auto mb-16 lg:mb-20">
          <Image
            src="/worldmap.png"
            alt="World map showing global presence"
            width={1536}
            height={820}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IntegrationFeature;
