/* eslint-disable @next/next/no-img-element */

const Hero = () => {
  return (
    <section className="w-full bg-white pt-16 lg:pt-24 pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 mb-20 lg:mb-24">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-[1.1] mb-6">
            We make you<br/>learn language<br/>easily!
          </h1>
          
          <p className="text-[17px] text-slate-500 mb-12 leading-relaxed max-w-lg">
            We help you learn language easily, witjh small lessons , you&apos;ll earn points and unlock new levels while improving you rel world communications.
          </p>

          <div className="flex w-full max-w-md items-center bg-[#f4f4f5] rounded-full p-2 gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none px-6 w-full text-slate-700 placeholder-slate-400"
            />
            <button className="bg-[#fdc630] hover:bg-[#ffb012] text-black font-bold px-8 py-3.5 rounded-full whitespace-nowrap transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Content / Mockups */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {/* Yellow blob background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] sm:w-full h-[110%] sm:h-[120%] bg-[#fef5d3] rounded-[3rem] -z-10"></div>
          
          {/* Phones Container */}
          <div className="relative w-full max-w-[500px] aspect-4/3 sm:aspect-auto sm:h-[550px]">
            {/* Phone Left */}
            <div className="absolute left-0 bottom-0 sm:bottom-4 w-[48%] sm:w-[240px] z-10 shadow-2xl rounded-[2.5rem] overflow-hidden border-8 border-black bg-white flex flex-col">
              <div className="pt-8 px-4 pb-6 flex-1 flex flex-col">
                 <div className="w-full aspect-square bg-[#f3f4f6] rounded-2xl mb-4 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 flex items-end justify-center">
                       <div className="w-[80%] h-[80%] bg-[#fdc630] rounded-full absolute bottom-[-20%] blur-xl opacity-20"></div>
                       <div className="w-[70%] h-[70%] bg-orange-300 rounded-t-4xl relative z-10 mx-auto"></div>
                       <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[30%] bg-blue-500 rounded-lg transform -rotate-12 z-20"></div>
                    </div>
                 </div>
                 <h3 className="font-bold text-lg sm:text-xl leading-tight mb-2 text-center text-black">Learn a new language with a native speaker!</h3>
                 <p className="text-[10px] sm:text-xs text-slate-400 text-center leading-relaxed">We help you learn language easily with small lessons and unlock new levels while improving</p>
              </div>
            </div>
            
            {/* Phone Right */}
            <div className="absolute right-0 top-0 sm:top-[-20px] w-[52%] sm:w-[260px] z-20 shadow-[-10px_20px_30px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden border-8 border-black bg-white flex flex-col h-full sm:h-[520px]">
              <div className="p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 overflow-y-auto">
                 {/* Header */}
                 <div className="flex items-center justify-between px-1">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-200"></div>
                     <span className="font-bold text-xs sm:text-sm text-black">Hello Marrie</span>
                   </div>
                   <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-slate-200 flex items-center justify-center text-[10px] text-slate-400">↻</div>
                 </div>
                 
                 {/* Yellow card */}
                 <div className="bg-[#fdc630] rounded-2xl p-3 sm:p-4 flex gap-3 sm:gap-4 shrink-0">
                   <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-white flex shrink-0 items-center justify-center font-bold text-sm sm:text-lg bg-yellow-400 text-black">75%</div>
                   <div>
                     <h4 className="font-bold text-black text-sm">Good result!</h4>
                     <p className="text-[9px] sm:text-[10px] text-black/70 leading-snug">Your singapore has been improved.</p>
                   </div>
                 </div>

                 {/* Your lesson */}
                 <div>
                   <h4 className="font-bold text-[11px] sm:text-xs mb-2 px-1 text-black">Your Lesson</h4>
                   <div className="grid grid-cols-2 gap-2 sm:gap-3">
                     <div className="bg-slate-50 p-2 sm:p-3 rounded-xl border border-slate-100">
                       <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 text-blue-500 mb-3 sm:mb-4 rounded flex items-center justify-center text-[10px]">📖</div>
                       <div className="font-bold text-[10px] sm:text-xs mb-1 text-black">Reading</div>
                       <div className="w-full bg-slate-200 h-1 rounded-full"><div className="w-[60%] bg-blue-500 h-full rounded-full"></div></div>
                     </div>
                     <div className="bg-slate-50 p-2 sm:p-3 rounded-xl border border-slate-100">
                       <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 text-green-500 mb-3 sm:mb-4 rounded flex items-center justify-center text-[10px]">🎤</div>
                       <div className="font-bold text-[10px] sm:text-xs mb-1 text-black">Speaking</div>
                       <div className="w-full bg-slate-200 h-1 rounded-full"><div className="w-[30%] bg-green-500 h-full rounded-full"></div></div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Native speakers */}
                 <div>
                   <h4 className="font-bold text-[11px] sm:text-xs mb-2 px-1 text-black">Native Speakers</h4>
                   <div className="flex flex-col gap-2">
                     <div className="flex gap-2 sm:gap-3 bg-slate-50 p-2 border border-slate-100 rounded-xl items-center">
                       <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-200 shrink-0"></div>
                       <div>
                         <h5 className="font-bold text-[9px] sm:text-[10px] text-black">Emilia Schmidt</h5>
                         <p className="text-[7px] sm:text-[8px] text-slate-400 leading-tight">I live in dusseldorf and I whant to find a friend who know...</p>
                       </div>
                     </div>
                     <div className="flex gap-2 sm:gap-3 bg-slate-50 p-2 border border-slate-100 rounded-xl items-center">
                       <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-200 shrink-0"></div>
                       <div>
                         <h5 className="font-bold text-[9px] sm:text-[10px] text-black">Pierre Duory</h5>
                         <p className="text-[7px] sm:text-[8px] text-slate-400 leading-tight">I am native french speaker, I will be glad to help with me...</p>
                       </div>
                     </div>
                   </div>
                 </div>
                 
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Row / Marquee */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 mt-8 md:mt-12">
        {/* Enrolled Students left side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center -space-x-3">
            <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white object-cover bg-blue-100 z-40" />
            <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white object-cover bg-orange-100 z-30" />
            <img src="https://i.pravatar.cc/100?img=5" alt="Avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white object-cover bg-green-100 z-20" />
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white bg-[#fdc630] flex items-center justify-center font-bold text-black text-[10px] sm:text-xs z-10">
              2m
            </div>
          </div>
          <span className="text-sm font-medium text-slate-500">Students Enroll</span>
        </div>

        {/* Logos right side */}
        <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-12 md:gap-16 text-black">
          <span className="text-2xl sm:text-3xl font-black italic tracking-tighter">VISA</span>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full text-white flex items-center justify-center font-bold text-[10px] sm:text-xs">Spotify</span>
          </div>
          <span className="text-xl sm:text-2xl font-bold flex items-center">
            <span className="mr-1">Linked</span><span className="bg-black text-white px-1 rounded-sm text-lg sm:text-xl">in</span>
          </span>
          <span className="text-xl sm:text-2xl font-bold flex items-center gap-1.5">
            <div className="bg-black p-1.5 rounded flex items-center justify-center">
               <div className="w-3 h-2 border-[1.5px] border-white rounded-[2px] relative"><div className="absolute -right-1.5 top-0 w-0 h-0 border-t-[3px] border-t-transparent border-l-[3px] border-l-white border-b-[3px] border-b-transparent"></div></div>
            </div>
            zoom
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
