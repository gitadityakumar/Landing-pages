import Image from "next/image";

export default function Testimonial() {
  const faces = [
    { src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop", size: "w-16 h-16 md:w-20 md:h-20", class: "absolute left-[5%] top-[20%]" },
    { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop", size: "w-12 h-12 md:w-16 md:h-16", class: "absolute left-[15%] top-0" },
    { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop", size: "w-24 h-24 md:w-32 md:h-32", class: "absolute left-[10%] bottom-[10%]" },
    { src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200&auto=format&fit=crop", size: "w-14 h-14 md:w-20 md:h-20", class: "absolute left-[2%] bottom-[30%]" },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", size: "w-16 h-16 md:w-24 md:h-24", class: "absolute right-[12%] top-[10%]" },
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop", size: "w-20 h-20 md:w-24 md:h-24", class: "absolute right-[20%] top-[40%]" },
    { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop", size: "w-28 h-28 md:w-48 md:h-48", class: "absolute right-[5%] bottom-[5%]" },
    { src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop", size: "w-12 h-12 md:w-16 md:h-16", class: "absolute right-[2%] top-[30%]" },
  ];

  return (
    <section className="py-32 px-6 w-full mx-auto bg-white relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none">
        {faces.map((f, i) => (
          <div key={i} className={`rounded-full overflow-hidden ${f.size} ${f.class}`}>
            <Image src={f.src} alt={`Customer ${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-medium text-black max-w-2xl">
          <span className="relative inline-block bg-[#e2edd9] rounded-full px-5 pb-1 -mx-2">
            What
          </span>{" "}
          our customer <br />
          says{" "}
          <span className="relative inline-block">
            About Us
            <svg className="absolute w-[110%] h-3 -bottom-1 -left-2 text-orange-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 6 Q 50 10 100 3" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h2>

        <div className="mt-16 bg-[#f1f6ed] rounded-[2.5rem] p-8 md:p-14 relative w-full shadow-sm">
          <span className="absolute -top-6 -left-2 text-[8rem] leading-none text-zinc-300 font-serif rotate-180">
            &quot;
          </span>
          <p className="text-zinc-700 text-lg md:text-[22px] leading-relaxed relative z-10 font-medium">
            Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn&apos;t used, which have also proved to be easy to use and reliable
          </p>
          <span className="absolute -bottom-16 right-4 text-[8rem] leading-none text-zinc-300 font-serif">
            &quot;
          </span>
        </div>
      </div>
    </section>
  );
}
