function Card({title, plan}:{title:string; plan:string}){
  const items = ["Prototype","App Design","Web Design","Interaction"];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold" style={{fontFamily:"var(--font-prompt)"}}>{title}</h3>
      <p className="mt-1 text-xs text-gray-500">Start with a first step</p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i)=> (
          <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500"/> {i}</li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">Get This Plan</button>
    </div>
  );
}

export default function Pricing(){
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center" style={{fontFamily:"var(--font-prompt)"}}>Pricing</h2>
        <p className="mt-2 text-sm text-gray-600 text-center max-w-2xl mx-auto">Pricing is the process whereby a business sets the price at which it will sell its products and services, and may be part of the business’s marketing plan.</p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <Card title="Basic" plan="basic" />
          <Card title="Pro" plan="pro" />
        </div>
      </div>
    </section>
  );
}
