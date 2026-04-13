import Image from "next/image";

function Service({icon, title}:{icon:string, title:string}){
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Shadow base / Border outline */}
        <div className="absolute inset-2 border-[3px] border-[#0B2131] rounded-3xl" />
        {/* Top white box */}
        <div className="absolute inset-1 border-[3px] border-[#0B2131] rounded-3xl bg-white shadow-[4px_4px_0px_0px_#0B2131]" />
        
        <div className="relative z-10 h-16 w-16">
          <Image src={icon} alt={title} fill sizes="64px" className="object-contain" />
        </div>
      </div>
      <p className="mt-4 font-semibold text-lg" style={{fontFamily:"var(--font-prompt)"}}>{title}</p>
    </div>
  );
}

export default function Services(){
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-[2.5rem] font-bold text-[#0B2131]" style={{fontFamily:"var(--font-prompt)"}}>We provide this services</h2>
        <p className="mt-4 text-sm font-medium text-gray-500 max-w-sm mx-auto leading-relaxed">
          We provide four categories of services and you will get high quality services from here
        </p>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 lg:px-16 gap-y-12">
          <Service icon="/s1.svg" title="Layout Design" />
          <Service icon="/s3.svg" title="Graphic Design" />
          <Service icon="/s2.svg" title="Mobile Design" />
          <Service icon="/s4.svg" title="Web Design" />
        </div>
      </div>
    </section>
  );
}
