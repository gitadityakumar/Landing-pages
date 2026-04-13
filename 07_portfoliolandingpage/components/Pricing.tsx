function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Card({ title, plan, description, bg, textBg }: { title: string; plan: string; description: string; bg: string; textBg: string }) {
  const items = [
    { name: "Prototype", sub: "A simple plan for simple needsd. Use one of our design to create a contract." },
    { name: "App Design", sub: "A simple plan for simple needsd. Use one of our design to create a contract." },
    { name: "Web Design", sub: "A simple plan for simple needsd. Use one of our design to create a contract." },
    { name: "Interaction", sub: "A simple plan for simple needsd. Use one of our design to create a contract." }
  ];

  return (
    <div className={`p-8 border-[3px] border-[#0B2131] shadow-[8px_8px_0px_0px_#0B2131] w-full max-w-md mx-auto`} style={{ backgroundColor: bg }}>
      <div className="border-b-[3px] border-[#0B2131] pb-4 mb-6">
        <h3 className="text-2xl font-bold text-[#0B2131]" style={{ fontFamily: "var(--font-prompt)" }}>{title}</h3>
        <p className="mt-2 text-sm font-medium text-gray-800">{description}</p>
      </div>
      <ul className="space-y-6">
        {items.map((i) => (
          <li key={i.name} className="flex gap-3">
            <CheckIcon />
            <div>
              <h4 className="font-bold text-sm text-[#0B2131]">{i.name}</h4>
              <p className="text-xs font-medium text-gray-800 mt-1 max-w-[220px] leading-relaxed">{plan === "pro" ? "This is basic digital contract management so you cansend. sign and organise documents for moer." : i.sub}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full border-[3px] border-[#0B2131] px-4 py-3 text-sm font-bold shadow-[3px_3px_0px_0px_#0B2131] hover:bg-white/40 transition-colors" style={{ backgroundColor: bg }}>
        Get This Plan
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-[2.5rem] font-bold text-[#0B2131]" style={{ fontFamily: "var(--font-prompt)" }}>Pricing</h2>
          <p className="mt-4 text-sm font-medium text-gray-500 leading-relaxed">
            Pricing is the process whereby a business sets the price at which it will sell its products and services, and may be part of the business's marketing plan.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <Card title="Basic" plan="basic" description="Start with a first step" bg="#cecafa" textBg="#c5d9fa" />
          <Card title="Pro" plan="pro" description="Make things happen" bg="#f6a090" textBg="#fce0d6" />
        </div>
      </div>
    </section>
  );
}
