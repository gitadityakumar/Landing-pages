export function Hero() {
  return (
    <section className="pt-24 pb-32 px-4 md:px-8 max-w-[1500px] mx-auto flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl lg:text-[110px] font-bold text-center leading-[0.95] tracking-[-0.03em] max-w-[900px] mb-20 text-[#f6f6f6]">
        Krate design and<br/>motion studio
      </h1>

      {/* Abstract Image Grid effect */}
      <div className="w-full flex justify-center gap-2 md:gap-4 lg:gap-6 h-[300px] md:h-[450px] lg:h-[500px]">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div 
            key={i} 
            className="flex-1 h-full rounded-full bg-gray-900 border border-white/5 opacity-90 shadow-2xl transition-transform hover:scale-[1.02] duration-500"
            style={{
              background: 'url(/abstract.png)',
              backgroundSize: '100% 100%',
              backgroundPosition: `calc(${i} * 12.5%) center`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </div>
    </section>
  );
}
