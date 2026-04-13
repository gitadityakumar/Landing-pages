import Image from "next/image";

const people = [
  { name: "Gabe Valdivia", role: "Product Designer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" },
  { name: "Cliff Warren", role: "UX Engineer", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop" },
  { name: "Oleg Panichev", role: "Product Designer", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=600&auto=format&fit=crop" },
  { name: "Gabe Valdivia", role: "UX Lead", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600&auto=format&fit=crop" }
];

export default function Team(){
  return (
    <section id="team" className="py-16 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white" style={{fontFamily:"var(--font-prompt)"}}>The Team</h2>
        <p className="mt-2 text-sm text-slate-300 max-w-xl">On the best approach to solve a problem, Makewith helps you hone your craft by tapping into our member's experience.</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {people.map((p) => (
            <div key={p.name} className="rounded-xl bg-slate-800 p-4 text-white">
              <Image src={p.img} alt={p.name} width={400} height={400} className="rounded-lg h-40 w-full object-cover" />
              <div className="mt-3">
                <p className="text-sm font-medium">{p.name}</p>
                <p className="text-xs text-slate-400">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
