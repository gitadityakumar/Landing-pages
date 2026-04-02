import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Works() {
  const works = [
    { title: "Galaxia Branding", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop" },
    { title: "John Mayer NYC", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" },
    { title: "Nayzak Patterns", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop" },
    { title: "Crave Chips", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2574&auto=format&fit=crop" }
  ];

  return (
    <section className="px-4 md:px-8 py-20 pb-16 max-w-[1500px] mx-auto text-[#f6f6f6]">
      <div className="flex items-center gap-2 mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>
        <span className="text-sm font-semibold tracking-wide">Recent Work</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {works.map((work, idx) => (
          <div key={idx} className="group relative rounded-xl overflow-hidden border border-gray-800/60 bg-[#050505]">
            <div className="relative aspect-4/3 w-full">
              <Image 
                src={work.img} 
                alt={work.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative bg-[#050505] p-5 md:p-6 border-t border-gray-800/60 z-10">
              <h3 className="text-[17px] md:text-[20px] font-semibold">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-10 md:mt-16 flex justify-center">
         <button className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-colors duration-300 text-sm font-semibold tracking-wide">
           View all work <ArrowUpRight className="w-4 h-4" />
         </button>
      </div>
    </section>
  )
}
