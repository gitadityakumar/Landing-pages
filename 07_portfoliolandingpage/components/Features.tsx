import Image from "next/image";

function Feature({
  image,
  title,
  text,
  reverse = false,
  bgColor,
}: {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
  bgColor: string;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${reverse ? "lg:[&>*:first-child]:order-last" : ""}`}>
      <div className={`relative w-full aspect-square max-w-[420px] mx-auto ${reverse ? "lg:ml-auto" : "lg:mr-auto"} rounded-3xl border-[3px] border-[#0B2131] overflow-hidden`} style={{ backgroundColor: bgColor }}>
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
      </div>
      <div className="max-w-lg">
        <h3 className="text-3xl sm:text-[2.2rem] leading-tight font-bold text-[#0B2131]" style={{fontFamily:"var(--font-prompt)"}}>{title}</h3>
        <p className="mt-5 text-sm font-medium text-gray-500 leading-relaxed">{text}</p>
        <button className="mt-8 inline-flex items-center bg-white border-2 border-black text-black px-8 py-2 text-sm font-bold hover:bg-gray-50 transition shadow-[3px_3px_0px_0px_#0B2131]">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default function Features(){
  return (
    <section id="work" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 flex flex-col gap-32">
        <Feature
          image="/f1.webp"
          title="Not just your regular design agency"
          text="Quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas accumsan. Quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas accumsan."
          bgColor="#bfaaf5"
        />
        <Feature
          image="/f2.webp"
          title="We design products that users love"
          text="Quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas accumsan. Quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas accumsan."
          reverse
          bgColor="#f08a78"
        />
      </div>
    </section>
  );
}
