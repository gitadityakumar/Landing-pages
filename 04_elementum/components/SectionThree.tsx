import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function SectionThree() {
  return (
    <section className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 bg-white overflow-hidden">
      
      <div className="flex-1 relative flex justify-start">
        <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
            alt="Men working and eating salad"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex-1 max-w-lg relative z-10 pl-0 md:pl-12">
        <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-medium text-black">
          <span className="relative inline-block bg-[#e2edd9] rounded-full px-5 py-0 -mx-3 mb-1">
            See
          </span>{" "}
          how we can <br />
          help you{" "}
          <span className="relative inline-block">
            progress
            <svg className="absolute w-[110%] h-3 -bottom-1 -left-2 text-orange-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 6 Q 50 10 100 3" stroke="currentColor" strokeWidth="2.5" fill="none" />
            </svg>
          </span>
        </h2>
        
        <p className="mt-8 text-zinc-600 text-[17px] leading-relaxed">
          We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
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
      
    </section>
  );
}
