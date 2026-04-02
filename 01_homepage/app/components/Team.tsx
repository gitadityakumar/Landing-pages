import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Team() {
  const team = [
    { name: "Jocelyn Schleifer", title: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
    { name: "Jocelyn Schleifer", title: "Managing Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
    { name: "Jocelyn Schleifer", title: "Managing Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
    { name: "Jocelyn Schleifer", title: "Managing Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
    { name: "Jocelyn Schleifer", title: "Managing Director", img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=800&auto=format&fit=crop" },
    { name: "Jocelyn Schleifer", title: "Managing Director", img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="px-4 md:px-8 py-20 pb-32 max-w-[1500px] mx-auto text-[#f6f6f6]">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
        
        {/* Left Intro Text */}
        <div className="lg:w-[400px] xl:w-[500px] shrink-0 pt-4">
          <div className="flex items-center gap-2 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>
            <span className="text-sm font-semibold tracking-wide">Our Team</span>
          </div>
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.1] tracking-tight">
            We are passionate about creating visually stunning and functional solutions that communicate effectively.
          </h2>
        </div>

        {/* Right Team Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 lg:pl-10">
           {team.slice(0,2).map((member, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-[#111]">
                 <Image src={member.img} alt={member.name} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100" />
                 <div className="absolute inset-x-0 bottom-0 bg-black/90 p-4 pt-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-sm">{member.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{member.title}</p>
                 </div>
              </div>
           ))}
           {/* Empty div for the spacing offset based on the screenshot, wait, the screenshot has grid of 2 on first row, 4 on second? No it's 2 cols or 3 cols grid. Let's look at the screenshot. Ah, the top row has 2 cards and bottom has 4 cards. Wait, it's 2 columns in the space of 3 columns, then 4 columns taking the whole width. Or wait, the heading is on the left. The top row of right side has 2 cards. The bottom row has 4 cards spanning across the whole width including below the heading! */}
           {/* To do this we can use CSS Grid. */}
        </div>
      </div>

      <div className="w-full mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {team.slice(2, 6).map((member, i) => (
             <div key={i} className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-[#111]">
                 <Image src={member.img} alt={member.name} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100" />
                 <div className="absolute inset-x-0 bottom-0 bg-black/90 p-4 border-t border-gray-800/60 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-[13px] md:text-[14px]">{member.name}</h4>
                    <p className="text-[11px] md:text-[12px] text-gray-500 mt-1 uppercase tracking-wide">{member.title}</p>
                 </div>
             </div>
          ))}
      </div>

      <div className="w-full mt-10 md:mt-16 flex justify-center">
         <button className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-colors duration-300 text-sm font-semibold tracking-wide">
           See all members <ArrowUpRight className="w-4 h-4" />
         </button>
      </div>

    </section>
  )
}
