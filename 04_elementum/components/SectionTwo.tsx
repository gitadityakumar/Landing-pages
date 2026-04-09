import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function SectionTwo() {
  return (
    <section className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 bg-white overflow-hidden">
      <div className="flex-1 max-w-lg relative z-10">
        <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-medium text-black">
          <span className="relative inline-block">
            Tomorrow
            <svg className="absolute w-[110%] h-3 -bottom-1 -left-2 text-orange-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 8 Q 50 2 100 8" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>{" "}
          should <br />
          be better than{" "}
          <span className="relative inline-block bg-[#e2edd9] rounded-full px-4 -ml-2 -mb-2 pb-1">
            today
          </span>
        </h2>
        
        <p className="mt-8 text-zinc-600 text-[17px] leading-relaxed">
          We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.
        </p>
        
        <div className="mt-8 flex items-center group cursor-pointer w-fit">
          <span className="text-black font-medium text-[15px] pr-4">Read more</span>
          <div className="relative flex items-center">
            <div className="w-12 h-px bg-zinc-400 flex items-center justify-end relative">
              <MoveRight className="w-3 h-3 text-zinc-400 absolute -right-1" strokeWidth={1.5} />
            </div>
            <div className="w-0 group-hover:w-12 h-px bg-black flex items-center justify-end absolute left-0 transition-all duration-300">
               <MoveRight className="w-3 h-3 text-black absolute -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative flex justify-end">
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop"
            alt="Business team meeting"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
