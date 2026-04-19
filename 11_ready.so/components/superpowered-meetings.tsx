import Image from "next/image";

const Img = [
  { src: "/ready/slider1.png", alt: "slider image 1" },
  { src: "/ready/slider2.png", alt: "slider image 2" },
  { src: "/ready/slider3.png", alt: "slider image 3" },
];

export default function Meetings() {
  return (
    <section className="section-block mx-auto w-full overflow-hidden">
      <div className="section-shell flex flex-col text-center">
        <h1 className="section-heading mx-auto max-w-[12ch]">
          A superpowered <br /> meeting in every <br /> calendar event
        </h1>
        <p className="section-body mx-auto mt-5 max-w-2xl">
          Calendar events in Ready are instantly transformed into{" "}
          <br className="hidden md:block" />
          collaborative meeting spaces designed to create the{" "}
          <br className="hidden md:block" />
          perfect meeting in seconds.
        </p>
      </div>

      <div className="mt-16 flex w-full max-w-[100vw] justify-center gap-4 px-4 pb-16 md:mt-24 md:gap-6 md:px-8 lg:gap-8 lg:pb-24">
        <div className="w-[80vw] shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.1)] sm:w-[50vw] md:w-[40vw] md:rounded-3xl lg:w-95 xl:w-115 2xl:w-130">
          <Image
            src={Img[0].src}
            alt={Img[0].alt}
            height={1000}
            width={800}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="relative z-10 w-[80vw] shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.1)] sm:w-[50vw] md:w-[40vw] md:rounded-3xl lg:w-95 xl:w-115 2xl:w-130">
          <Image
            src={Img[1].src}
            alt={Img[1].alt}
            height={1000}
            width={800}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="w-[80vw] shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.1)] sm:w-[50vw] md:w-[40vw] md:rounded-3xl lg:w-95 xl:w-115 2xl:w-130">
          <Image
            src={Img[2].src}
            alt={Img[2].alt}
            height={1000}
            width={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
