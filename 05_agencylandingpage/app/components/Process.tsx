import Image from "next/image";

const features = [
  {
    title: "High velocity",
    desc: "Hypervelocity is very high velocity, approximately over 3,000 meters.",
  },
  {
    title: "Evicient",
    desc: "exceptional, adjective, extremely good or impressive in a way that is unusual.",
  },
  {
    title: "High quality",
    desc: "Hypervelocity is very high velocity, approximately over 3,000 meters.",
  },
  {
    title: "Ego-Free",
    desc: "Take your ego out of the equation and watch your company thrive!",
  },
];

export default function Process() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 md:px-16 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* ── Left: photo with decorations ── */}
        <div className="relative flex-1 max-w-md">
          {/* Red semi-circle decoration */}
          <div className="absolute -top-6 -left-6 w-28 h-28 z-0">
            <Image
              src="/Ellipse.svg"
              alt=""
              width={120}
              height={120}
              className="w-full h-auto"
              aria-hidden="true"
            />
          </div>

          {/* Purple triangle decoration */}
          <div
            className="absolute -bottom-6 -right-6 z-0"
            style={{
              width: 0,
              height: 0,
              borderLeft: "55px solid transparent",
              borderRight: "55px solid transparent",
              borderBottom: "95px solid #8B5CF6",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 rounded-2xl overflow-hidden">
            <Image
              src="/feature.png"
              alt="Our workspace"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="flex-1">
          <h2 className="font-playfair italic text-3xl md:text-4xl mb-4">
            Our Proccess
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md">
            How we are work on this part. This is our work prcess.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
