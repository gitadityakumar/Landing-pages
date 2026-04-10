import Image from "next/image";

const tabs = [
  "All",
  "Mobile design",
  "Web design",
  "Motion design",
  "Illustration design",
];

const projects = [
  { image: "/service1.png", title: "Mobile design", author: "Prodint jak" },
  { image: "/service2.png", title: "Mobile design", author: "Prodint jak" },
  {
    image: "/service.png",
    title: "Deshboard design",
    author: "Prodint jak",
  },
];

export default function Portfolio() {
  return (
    <section
      className="relative w-full max-w-7xl mx-auto px-8 md:px-16 py-16 overflow-hidden"
      id="work"
    >
      <h2 className="font-playfair italic text-3xl md:text-4xl mb-8">
        Minimalist and Design
      </h2>

      {/* Filter tabs */}
      <div className="flex gap-6 lg:gap-12 mb-10 border-b border-gray-200 pb-4 overflow-x-auto scrollbar-hide">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`text-sm whitespace-nowrap pb-1 transition-colors duration-200 ${
              i === 0
                ? "text-accent-purple font-semibold"
                : "text-gray-400 hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#F9F9F9] rounded-2xl overflow-hidden p-4 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-52 object-cover"
              />
            </div>
            <h3 className="font-semibold text-sm mb-2">{project.title}</h3>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center overflow-hidden">
                <span className="text-[10px]">😊</span>
              </div>
              <span className="text-xs text-gray-400">
                By {project.author}
              </span>
            </div>
            <button className="bg-accent-purple text-white text-xs font-medium px-5 py-2 rounded-lg hover:bg-accent-purple/90 transition-colors duration-200">
              Full Details
            </button>
          </div>
        ))}
      </div>

      {/* Decorative red swooping curve */}
      <div className="absolute -bottom-40 -left-32 w-[600px] opacity-25 pointer-events-none z-0">
        <Image
          src="/bottomline.svg"
          alt=""
          width={1503}
          height={654}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
