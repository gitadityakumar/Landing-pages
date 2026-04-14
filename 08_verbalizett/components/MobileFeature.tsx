import React from 'react';
import Image from 'next/image';

const MobileFeature = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-black leading-[1.12] tracking-tight max-w-md">
            Why you&apos;ll love learning with VerbalizeIt
          </h2>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-sm md:pt-2">
            Reach your goals your way with features designed for the fastest, most fun way to learn a language.
          </p>
        </div>

        {/* Feature Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* Card 1: Make progress Quickly */}
          <div className="bg-[#fef9e7] rounded-3xl p-8 lg:p-10 flex flex-col items-center overflow-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-3 text-center">
              Make progress Quickly
            </h3>
            <p className="text-sm text-slate-500 text-center max-w-xs mb-8 leading-relaxed">
              Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.
            </p>

            {/* Phone Mockup 1 */}
            <div className="relative w-[240px] sm:w-[260px] mx-auto">
              <div className="rounded-[2.5rem] overflow-hidden border-8 border-black bg-white shadow-xl">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-5 pt-3 pb-1">
                  <span className="text-[10px] font-semibold text-black">9:27</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 border border-black rounded-sm relative">
                      <div className="absolute inset-[1.5px] right-[3px] bg-black rounded-[1px]"></div>
                      <div className="absolute -right-[3px] top-[3px] w-[2px] h-[5px] bg-black rounded-r-sm"></div>
                    </div>
                  </div>
                </div>
                {/* App Header */}
                <div className="px-5 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#fdc630] flex items-center justify-center">
                      <span className="text-[6px] font-bold text-black">V</span>
                    </div>
                    <span className="font-bold text-sm text-black">VerbalizeIt</span>
                  </div>
                </div>
                {/* Character Image */}
                <div className="w-full aspect-square bg-[#f5f5f5] relative overflow-hidden">
                  <Image
                    src="/study-character.png"
                    alt="3D character studying with laptop"
                    fill
                    sizes="(max-width: 640px) 240px, 260px"
                    className="object-cover object-top"
                  />
                </div>
                {/* Bottom Text */}
                <div className="px-5 py-4">
                  <h4 className="font-bold text-lg text-black leading-tight">Learn a new</h4>
                  <h4 className="font-bold text-lg text-black leading-tight">language with a</h4>
                  <h4 className="font-bold text-lg text-black leading-tight">native speaker!</h4>
                  <p className="text-[9px] text-slate-400 mt-2 leading-relaxed">
                    We help you learn language easily with small lessons and unlock new levels while improving
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Personalized Learning */}
          <div className="bg-[#fef9e7] rounded-3xl p-8 lg:p-10 flex flex-col items-center overflow-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-3 text-center">
              Personalized Learning
            </h3>
            <p className="text-sm text-slate-500 text-center max-w-xs mb-8 leading-relaxed">
              Research shows our courses effectively and efficiently teach reading, listening and speak skills.
            </p>

            {/* Phone Mockup 2 */}
            <div className="relative w-[240px] sm:w-[260px] mx-auto">
              <div className="rounded-[2.5rem] overflow-hidden border-8 border-black bg-white shadow-xl">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-5 pt-3 pb-1">
                  <span className="text-[10px] font-semibold text-black">9:27</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 border border-black rounded-sm relative">
                      <div className="absolute inset-[1.5px] right-[3px] bg-black rounded-[1px]"></div>
                      <div className="absolute -right-[3px] top-[3px] w-[2px] h-[5px] bg-black rounded-r-sm"></div>
                    </div>
                  </div>
                </div>
                {/* App Header */}
                <div className="flex items-center justify-between px-5 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-200 flex items-center justify-center">
                      <span className="text-[8px]">👤</span>
                    </div>
                    <span className="font-bold text-sm text-black">Hello Marrie</span>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-[10px] text-slate-400">
                    ↻
                  </div>
                </div>

                {/* Yellow Progress Card */}
                <div className="mx-4 bg-[#fdc630] rounded-2xl p-4 flex gap-3 items-start mb-4">
                  <div className="w-14 h-14 rounded-full border-4 border-white shrink-0 flex items-center justify-center font-bold text-base bg-yellow-400 text-black relative">
                    {/* Circular progress indicator */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
                      <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
                      <circle cx="28" cy="28" r="24" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray={`${0.75 * 2 * Math.PI * 24} ${2 * Math.PI * 24}`} strokeLinecap="round" />
                    </svg>
                    <span className="relative z-10 text-sm font-bold">75%</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-black">Good result!</h4>
                      <span className="text-black/50 text-lg">•••</span>
                    </div>
                    <p className="text-[10px] text-black/60 leading-snug mt-0.5">
                      Your singapore has been improved.
                    </p>
                  </div>
                </div>

                {/* Your Lesson */}
                <div className="px-4 mb-4">
                  <h4 className="font-bold text-xs mb-3 text-black">Your Lesson</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="w-8 h-8 bg-blue-100 text-blue-500 mb-3 rounded-lg flex items-center justify-center text-sm">
                        📖
                      </div>
                      <div className="font-bold text-xs mb-1.5 text-black">Reading</div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full">
                        <div className="w-[60%] bg-blue-500 h-full rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="w-8 h-8 bg-green-100 text-green-500 mb-3 rounded-lg flex items-center justify-center text-sm">
                        🎤
                      </div>
                      <div className="font-bold text-xs mb-1.5 text-black">Speaking</div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full">
                        <div className="w-[30%] bg-green-500 h-full rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileFeature;
