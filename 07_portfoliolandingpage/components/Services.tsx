import { ReactNode } from "react";

function Service({icon, title}:{icon:ReactNode, title:string}){
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
      <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">{icon}</div>
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}

export default function Services(){
  const Icon = (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M4 4h16v4H4zM4 10h16v4H4zM4 16h16v4H4z"/></svg>
  );
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold" style={{fontFamily:"var(--font-prompt)"}}>We provide this services</h2>
        <p className="mt-2 text-sm text-gray-600">We provide four categories of services and you will get high quality services from here</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Service icon={Icon} title="Layout Design" />
          <Service icon={Icon} title="Graphic Design" />
          <Service icon={Icon} title="Mobile Design" />
          <Service icon={Icon} title="Web Design" />
        </div>
      </div>
    </section>
  );
}
