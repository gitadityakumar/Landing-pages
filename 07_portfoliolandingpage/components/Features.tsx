import Image from "next/image";

function Feature({
  image,
  title,
  text,
  reverse = false,
}: {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-last" : ""}`}>
      <div className="relative rounded-2xl bg-emerald-50 p-4">
        <Image src={image} alt="feature" width={700} height={700} className="rounded-xl object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-semibold" style={{fontFamily:"var(--font-prompt)"}}>{title}</h3>
        <p className="mt-3 text-sm text-gray-600 leading-6">{text}</p>
        <button className="mt-6 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">Learn more</button>
      </div>
    </div>
  );
}

export default function Features(){
  return (
    <section id="work" className="py-16 sm:py-24 bg-linear-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        <Feature
          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
          title="Not just your regular design agency"
          text="Quis ipsum suspendisse ultrices gravida. Quis commodo viverra maecenas accumsan. Quis ipsum suspendisse ultrices gravida. Quis commodo viverra maecenas accumsan."
        />
        <Feature
          image="https://images.unsplash.com/photo-1573497161134-12a9b7900b66?q=80&w=1200&auto=format&fit=crop"
          title="We design products that users love"
          text="Quis ipsum suspendisse ultrices gravida. Quis commodo viverra maecenas accumsan. Quis ipsum suspendisse ultrices gravida. Quis commodo viverra maecenas accumsan."
          reverse
        />
      </div>
    </section>
  );
}
