import Image from "next/image";

const people = [
  { name: "Gabe Valdivia", role: "I am design at chef, where he is making it possible to order.", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=600&auto=format&fit=crop", bg: "#b7884d", shape: "rounded-tl-[3rem] rounded-tr-[3rem] rounded-br-[3rem] rounded-bl-xl" },
  { name: "Gilff Warren", role: "Gabe is currently leading consumer experience design.", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop", bg: "#edaca4", shape: "rounded-[3rem]" },
  { name: "Oleg Panichev", role: "I am a product Designer at Facebook working at the intersection.", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=600&auto=format&fit=crop", bg: "#c6c7c1", shape: "rounded-tl-[3rem] rounded-tr-xl rounded-bl-[3rem] rounded-br-[3rem]" },
  { name: "Gabe Valdivia", role: "I am Explored a wide variety of technologies in his career.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop", bg: "#8a7cb0", shape: "rounded-tl-xl rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-[3rem]" }
];

export default function Team(){
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#121b25]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-[500px] mx-auto">
          {people.map((p, i) => (
            <div key={i} className={`relative w-full aspect-square border-2 border-white overflow-hidden ${p.shape}`} style={{ backgroundColor: p.bg }}>
              <Image src={p.img} alt={p.name} width={300} height={300} className="w-full h-full object-cover opacity-90 mix-blend-multiply grayscale contrast-125" />
            </div>
          ))}
        </div>
        
        {/* Right Info */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{fontFamily:"var(--font-prompt)"}}>The Team</h2>
          <p className="mt-4 text-sm text-[#8fa8be] leading-relaxed max-w-md">On the best approach to solve a problem, Makeshift helps you hone your craft by tapping into our member's experience.</p>
          
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 relative">
            {/* Center dividers */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#1a2f44] -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#1a2f44] -translate-y-1/2"></div>
            
            {people.map((p, i) => (
              <div key={p.name + i} className={`pt-2 ${i > 1 ? "pt-8" : ""}`}>
                <h4 className="text-lg font-semibold text-white">{p.name}</h4>
                <p className="mt-2 text-xs text-[#8fa8be] leading-relaxed pr-6">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
