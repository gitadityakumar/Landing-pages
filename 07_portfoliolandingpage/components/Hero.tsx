import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-emerald-200 to-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-700" style={{fontFamily:"var(--font-prompt)"}}>Spring</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight" style={{fontFamily:"var(--font-prompt)"}}>
            We Build
            <span className="block">Experiences</span>
            <span className="block">For Your Clients</span>
          </h1>
          <p className="mt-4 max-w-md text-gray-600 text-sm">
            Revolve Template is a professional webflow template with multiple sections that you can fully customize.
          </p>
          <form className="mt-6 flex max-w-md gap-2">
            <input aria-label="email" placeholder="quickrebuilt@gmail.com" className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">Get free trial</button>
          </form>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl bg-emerald-50 p-3 lg:p-6">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
              alt="Hero person"
              width={800}
              height={900}
              className="rounded-xl object-cover"
              priority
            />
            <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs shadow-md">5.0 ★★★★★</div>
          </div>
        </div>
      </div>
      <div className="border-t bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 opacity-70">
          {[
            "Outbrain",
            "Truevo",
            "AngelList",
            "dribbble",
            "Latch",
            "amazon",
          ].map((n) => (
            <div key={n} className="text-center text-sm text-gray-500">{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
