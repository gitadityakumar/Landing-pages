import Image from "next/image";
import { CornerDownRight, Plus } from "lucide-react";

export function Services() {
  const services = [
    { name: "Web & Mobile Design", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
    { name: "Brand Identity", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2488&auto=format&fit=crop" },
    { name: "App Development", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" },
    { name: "Consultancy", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop" },
    { name: "Packaging", img: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2670&auto=format&fit=crop" }
  ];

  return (
    <section className="px-4 md:px-8 py-20 pb-32 max-w-[1500px] mx-auto">
      <div className="flex items-center gap-3 mb-10 text-[#f6f6f6]">
         <CornerDownRight className="w-4 h-4 text-white" />
         <span className="text-sm font-semibold tracking-wide">Our Services</span>
      </div>

      <div className="flex flex-col w-full border-t border-gray-800/80 text-[#f6f6f6]">
        {services.map((service, idx) => (
           <div key={idx} className="group relative flex items-center justify-between py-8 md:py-10 border-b border-gray-800/80 transition-colors hover:bg-white/1.5 cursor-pointer px-4 -mx-4 rounded-xl">
              <div className="flex items-center gap-6 md:gap-12">
                 {/* Image Pill */}
                 <div className="w-[120px] md:w-[160px] h-[36px] md:h-[44px] rounded-full overflow-hidden relative opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <Image src={service.img} alt={service.name} fill sizes="(max-width: 768px) 120px, 160px" className="object-cover" />
                 </div>
                 {/* Title */}
                 <h3 className="text-2xl md:text-[40px] font-semibold text-white tracking-tight group-hover:translate-x-3 transition-transform duration-500">{service.name}</h3>
              </div>
              <Plus className="w-6 h-6 md:w-8 md:h-8 text-gray-500 group-hover:rotate-90 group-hover:text-white transition-all duration-500" />
           </div>
        ))}
      </div>
    </section>
  )
}
