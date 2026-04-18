import Image from "next/image";

const Img = [
  { src: "/ready/slider1.png", alt: "slider image 1" },
  { src: "/ready/slider2.png", alt: "slider image 2" },
  { src: "/ready/slider3.png", alt: "slider image 3" },
];

export default function Meetings() {
  return (
    <section className="w-full h-auto mx-auto mt-12 md:mt-20 py-8 overflow-hidden">
      <div className="flex flex-col text-center px-4">
        <h1 className="font-inter font-extrabold text-[42px] leading-[1.05] sm:text-5xl md:text-[64px] tracking-tight text-[#111111]">
          A superpowered <br /> meeting in every <br /> calendar event
        </h1>
        <p className="mt-5 text-[15px] md:text-[17px] max-w-2xl mx-auto font-medium text-[#4b4b4b] leading-relaxed">
          Calendar events in Ready are instantly transformed into <br className="hidden md:block" />
          collaborative meeting spaces designed to create the <br className="hidden md:block" />
          perfect meeting in seconds.
        </p>
      </div>

      {/* Images Section */}
      <div className="mt-16 md:mt-24 flex justify-center items-start gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 pb-32 w-full max-w-[100vw]">
        {/* Left Card */}
        <div className="shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-95 xl:w-115 2xl:w-130 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-black/5 bg-white">
          <Image src={Img[0].src} alt={Img[0].alt} height={1000} width={800} className="w-full h-auto object-cover" />
        </div>
        
        {/* Center Card */}
        <div className="shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-95 xl:w-115 2xl:w-130 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-black/5 bg-white relative z-10">
          <Image src={Img[1].src} alt={Img[1].alt} height={1000} width={800} className="w-full h-auto object-cover" />
        </div>
        
        {/* Right Card */}
        <div className="shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-95 xl:w-115 2xl:w-130 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-black/5 bg-white">
          <Image src={Img[2].src} alt={Img[2].alt} height={1000} width={800} className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}
