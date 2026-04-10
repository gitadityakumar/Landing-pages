const stats = [
  { value: "3.5k", label: "Job done successfully" },
  { value: "2.8k+", label: "World wide clients" },
  { value: "12+", label: "Years experience" },
  { value: "30+", label: "Trusted company" },
];

export default function Stats() {
  return (
    <section className="w-full bg-accent-yellow py-8 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-8 md:px-16 gap-y-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center flex-1 min-w-[140px]">
            <p className="font-prosto-one text-3xl md:text-4xl lg:text-5xl mb-1 text-foreground">
              {stat.value}
            </p>
            <p className="text-xs md:text-sm text-foreground/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
