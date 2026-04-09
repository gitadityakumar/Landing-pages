import Image from "next/image";

export default function Hero() {
  const faces = [
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop", size: "w-20 h-20", class: "absolute left-[5%] top-20" },
    { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop", size: "w-24 h-24", class: "absolute left-[15%] top-10" },
    { src: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=200&auto=format&fit=crop", size: "w-24 h-24", class: "absolute left-[28%] -top-6" },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", size: "w-28 h-28", class: "absolute left-[40%] top-6" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", size: "w-24 h-24", class: "absolute right-[40%] top-2" },
    { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop", size: "w-20 h-20", class: "absolute right-[28%] top-10" },
    { src: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=200&auto=format&fit=crop", size: "w-24 h-24", class: "absolute right-[15%] -top-2" },
    { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", size: "w-24 h-24", class: "absolute right-[2%] top-8" },
  ];

  return (
    <section className="pt-24 pb-32 px-6 flex flex-col items-center text-center bg-white">
      <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-black max-w-4xl mx-auto leading-[1.1] relative z-10">
        The{" "}
        <span className="relative inline-block">
          thinkers
          <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-400" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 50 10 100 0" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </span>{" "}
        and <br />
        doers were{" "}
        <span className="relative inline-block bg-[#f8b4d9] rounded-full px-5 pb-1 -mx-2">
          changing
        </span>{" "}
        <br />
        the{" "}
        <span className="relative inline-block bg-[#e2edd9] rounded-full px-5 py-1 -mx-2 -ml-3">
          status
        </span>{" "}
        Quo with
      </h1>

      <p className="mt-8 text-lg text-zinc-600 max-w-2xl mx-auto">
        We are a team of strategists, designers communicators, researchers. Togeather, <br className="hidden md:block"/>
        we belive that progress only hghappens when you refuse to play things safe.
      </p>

      <div className="relative w-full max-w-5xl h-48 mt-24">
        {faces.map((f, i) => (
          <div key={i} className={`rounded-full overflow-hidden border-4 border-white shadow-xl ${f.size} ${f.class} group hover:z-20 transition-all hover:scale-110`}>
            <Image src={f.src} alt={`Face ${i}`} fill sizes="100px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
