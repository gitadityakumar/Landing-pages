import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Offer() {
  const items = [
    {
      left: "Office of multiple\ninterest content",
      right: "Colaborative & partnership"
    },
    {
      left: "The hanger US Air force\ndigital experimental",
      right: "We talk about our weight"
    },
    {
      left: "Delta faucet content,\nsocial, digital",
      right: "Piloting digital confidence",
      overlap: true
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto bg-white">
      <div className="mb-20">
        <h2 className="text-4xl md:text-[4rem] leading-[1.1] font-medium text-black">
          What we{" "}
          <span className="relative inline-block bg-[#e2edd9] rounded-full px-5 py-0 -mx-2 mb-1">
            can
          </span>{" "}
          <br />
          <span className="relative inline-block">
            offer you!
            <svg className="absolute w-[110%] h-4 -bottom-1 -left-2 text-orange-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 6 Q 50 12 100 2" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <path d="M5 9 Q 50 14 95 6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
            </svg>
          </span>
        </h2>
      </div>

      <div className="flex flex-col">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-baseline justify-between py-10 border-t border-zinc-200 group cursor-pointer relative">
            <p className="text-zinc-600 text-base md:text-lg whitespace-pre-line w-full md:w-1/3 mb-4 md:mb-0">
              {item.left}
            </p>
            <div className="w-full md:w-2/3 flex items-center justify-between">
              <h3 className="text-2xl md:text-4xl font-medium text-black relative">
                {item.right}
                {item.overlap && (
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden hidden md:block">
                     <Image 
                        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200&auto=format&fit=crop" 
                        alt="Design element" 
                        fill 
                        className="object-cover"
                      />
                  </div>
                )}
              </h3>
              <MoveRight className="w-8 h-8 md:w-10 md:h-10 text-black font-light opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all" strokeWidth={1} />
            </div>
          </div>
        ))}
        <div className="w-full h-px bg-zinc-200"></div>
      </div>
    </section>
  );
}
