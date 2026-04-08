import Image from "next/image";
import { ArrowDown, ArrowRight, Menu } from "lucide-react";

const servicesList = [
  "Web Design",
  "Web Devolopment",
  "App design",
  "Branding Design",
  "3D Modeling",
  "Digital Marketing",
  "Animation",
  "web App Design & Devolopment",
  "UI/UX",
];

const selectedWorks = [
  {
    title: "Branding Design",
    description: "Build a unique website Teamollo.Webflow template",
    image: "/images/feature-1.webp",
    tags: ["Website", "Branding", "Application"],
  },
  {
    title: "Application Design",
    description: "Build a unique website Teamollo.Webflow template",
    image: "/images/feature-2.webp",
    tags: ["Website", "Branding", "Application"],
  },
  {
    title: "Braning Identity",
    description: "Build a unique website Teamollo.Webflow template",
    image: "/images/feature-3.webp",
    tags: ["Website", "Branding", "Application"],
  },
  {
    title: "Packaging Design",
    description: "Build a unique website Teamollo.Webflow template",
    image: "/images/feature-4.webp",
    tags: ["Website", "Branding", "Application"],
  },
  {
    title: "Website Design",
    description: "Build a unique website Teamollo.Webflow template",
    image: "/images/feature-5.webp",
    tags: ["Website", "Branding", "Application"],
  },
  {
    title: "Website Design",
    description: "Build a unique website Teamollo.Webflow template",
    image: "/images/feature-6.webp",
    tags: ["Website", "Branding", "Application"],
  },
];

const testimonials = [
  {
    text: "While the copany wishes they had more time to work out the kinks with the Teamollo, they are quite happy with the result of the project. The resulting website that the teamdevoloped is fast and the communication with the vender was very good. The company will work with them again.",
    name: "Ashley Cooper",
    avatar: "/images/heroimage.webp", // Placeholder
  },
  {
    text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
    name: "Anton de Swardt",
    avatar: "/images/heroimage.webp", // Placeholder
  },
  {
    text: "Teamollo of owrk , our brand now has the image we were looking for - playful yet professio -nals. We have recived positive from partners , the team, and our community to the new look of our Brand!",
    name: "Anton de Swardt",
    avatar: "/images/heroimage.webp", // Placeholder
  },
];

const brands = ["CAMBRIAN", "COMMVAULT", "Crompton", "SECLOCK", "softwareAG", "aumi"];
const smallBrands = ["CAMBRIAN", "Olive", "Qlik", "SECLOCK"];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col font-sans">
      
      {/* 1. Hero Section w/ Gradient */}
      <section className="relative overflow-hidden pt-6 pb-0 bg-[#310260]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b0044] via-[#4d10a2] to-[#ff00ee] opacity-80 z-0"></div>
        {/* Adds radial highlight to top left */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#4d10a2] blur-[120px] rounded-full z-0 pointer-events-none"></div>
        {/* Soft fade into white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <header className="flex justify-between items-center mb-16 lg:mb-24">
            <div className="text-white text-2xl font-bold tracking-tight">Teamollo<span className="text-[#b9ff28]">.</span></div>
            <div className="flex items-center gap-6">
              <a href="#" className="border border-white/20 rounded-full px-5 py-2 text-xs font-semibold text-white hover:bg-white/10 transition">Let's talk</a>
              <button aria-label="Menu" className="text-white"><Menu size={28} strokeWidth={1.5} /></button>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end pb-12 lg:pb-32">
            <h1 className="text-white text-7xl sm:text-8xl lg:text-[140px] font-bold leading-[0.9] tracking-[-0.04em]">
              Let`s Talk <br /> To Design <br /> Teamollo
            </h1>
            
            <div className="mt-16 lg:mt-0 flex flex-col items-start lg:items-end max-w-sm">
              <p className="text-white text-sm lg:text-right font-medium leading-relaxed max-w-[240px] mb-12">
                Here we go a small intro paragraph that talks about our company and team
              </p>
              <div className="w-16 h-16 rounded-full bg-[#b9ff28] flex items-center justify-center text-black shadow-lg">
                <ArrowDown size={24} strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Office Image full-width container */}
      <section className="relative z-20 w-full px-6 lg:px-12 -mt-8 sm:-mt-16 lg:-mt-24 mb-16 lg:mb-32 max-w-[1400px] mx-auto">
         <div className="w-full h-[250px] sm:h-[400px] lg:h-[650px] overflow-hidden">
           <Image 
             src="/images/heroimage.webp" 
             alt="Office" 
             width={1400} 
             height={800} 
             className="w-full h-full object-cover rounded-none"
             priority
           />
         </div>
      </section>

      {/* 3. About Paragraph */}
      <section className="w-full bg-white px-6 lg:px-12 mb-20 lg:mb-32 max-w-[1400px] mx-auto">
        <div className="max-w-[1000px]">
          <h3 className="text-black font-semibold text-sm mb-6 lg:mb-10">Hello Stranger</h3>
          <p className="text-[1.3rem] sm:text-[1.8rem] lg:text-[2.2rem] text-black font-medium leading-[1.4] tracking-[-0.01em]">
            We are an award-winning strategic design company that provides consultancy services worldwide. Our team consists of a superb blend of thinkers, strategists, designers, researchers, developers and organisers. Not too big,not too small,quite sensible and completely independent.
          </p>
        </div>
      </section>

      {/* 4. Our Services (Black Bg) */}
      <section className="w-full bg-[#0a0a0a] py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-center text-center">
          <p className="text-white text-sm font-semibold mb-12 text-left sm:text-center w-full max-w-[900px] mx-auto">Our Service</p>
          
          <div className="max-w-[900px] mx-auto flex flex-wrap justify-center gap-3 lg:gap-5">
            {servicesList.map((service, idx) => (
              <div 
                key={idx} 
                className="border border-white/20 text-white rounded-full px-6 py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-xl font-medium tracking-wide transition pointer-events-auto cursor-pointer"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Selected Work! */}
      <section className="w-full bg-white py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-black">Selected work!</h2>
          <p className="text-gray-400 text-sm max-w-sm mb-16 lg:mb-32 font-medium leading-relaxed">
            We `ve loved working with many fantastic companies. <br/>and are really proud of what we `ve achived together.
          </p>

          <div className="flex flex-col gap-24 lg:gap-40">
            {selectedWorks.map((work, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={index} className={`flex flex-col gap-10 lg:gap-20 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
                  {/* Image wrapper */}
                  <div className="w-full lg:w-1/2 relative bg-[#f4f4f4]">
                    <Image 
                      src={work.image} 
                      alt={work.title} 
                      width={800} height={600} 
                      className="w-full h-auto aspect-square object-cover" 
                    />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white z-10">
                      <ArrowRight size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Text wrapper */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-20' : 'lg:pl-20'}`}>
                    <h3 className="text-3xl lg:text-5xl font-bold mb-4 text-black">{work.title}</h3>
                    <p className="text-gray-400 text-sm mb-10">{work.description}</p>
                    <div className="flex flex-wrap gap-2 lg:gap-4">
                      {work.tags.map(tag => (
                        <span key={tag} className="border border-gray-200 px-5 py-2 rounded-full text-[0.65rem] lg:text-xs text-gray-500 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Take a Look text */}
      <section className="w-full bg-white pb-20 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative">
           <h2 className="text-4xl sm:text-6xl lg:text-[80px] font-bold text-black leading-none tracking-tight w-full md:w-auto z-10 md:text-left">
             Take a Look <br/> at What
           </h2>
           <div className="hidden md:flex w-40 h-40 rounded-full bg-[#b5ed3d] flex items-center justify-center text-black font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
             All Work
           </div>
           <h2 className="text-4xl sm:text-6xl lg:text-[80px] font-bold text-black leading-none tracking-tight w-full md:w-auto z-10 md:text-right">
             We Can Do <br/> For You
           </h2>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="w-full bg-white pb-20 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-16 lg:mb-24">
            What our Clients are <br/> saying about us!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((testi, index) => (
              <div key={index} className="bg-[#f8f9fa] rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
                <p className="text-gray-600 text-sm leading-relaxed mb-10">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                     <Image src={testi.avatar} width={40} height={40} alt={testi.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-sm">{testi.name}</h4>
                    <div className="flex text-yellow-500 text-xs mt-1">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full border border-gray-200 text-black flex items-center justify-center">←</button>
            <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">→</button>
          </div>
        </div>
      </section>

      {/* 8. Ticker 1 */}
      <section className="w-full border-t border-b border-gray-100 py-10">
        <p className="text-center text-xs text-gray-400 font-semibold mb-8 uppercase tracking-widest">Trusted by the 150+ companies</p>
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-8 md:gap-16 px-6 font-bold text-lg md:text-2xl text-black">
          {brands.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* 9. CTA Box */}
      <section className="w-full bg-white py-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="bg-[#f6f8fb] rounded-3xl p-10 lg:p-20 text-center flex flex-col items-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-black max-w-3xl leading-[1.2] mb-8">
            I train thousands of Students everyday in YouTube
          </h2>
          <button className="bg-[#b5ed3d] text-black font-bold text-sm px-8 py-4 rounded-full uppercase tracking-wider">
            Subscribe Now
          </button>
        </div>
      </section>

      {/* 10. Ticker 2 (Dark) */}
      <section className="w-full bg-[#0a0a0a] py-12 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center md:justify-around gap-8 md:gap-16 font-bold text-xl md:text-3xl text-white">
          {smallBrands.map((b) => (
             <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="w-full bg-[#b9ff28] px-6 lg:px-12 py-16 lg:py-24 text-black">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between mb-16 lg:mb-24">
          <h2 className="text-6xl sm:text-8xl lg:text-[140px] font-bold leading-[0.9] tracking-tighter mb-10 md:mb-0">
            Want to Start <br/> a Project?
          </h2>
          <div className="flex flex-col text-right text-sm font-semibold gap-3">
             <a href="#" className="hover:underline">Instagram</a>
             <a href="#" className="hover:underline">Behance</a>
             <a href="#" className="hover:underline">Dribbble</a>
             <a href="#" className="hover:underline">Twitter</a>
             <a href="#" className="hover:underline">Linkedin</a>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between border-t border-black/30 pt-8">
          <div className="flex items-center gap-6 w-full md:w-auto mb-8 md:mb-0">
             <a href="#" className="flex items-center gap-3 bg-white px-6 py-3 rounded-full text-sm font-bold shadow-sm">
               Let's Talk <span className="bg-[#b9ff28] w-6 h-6 rounded-full flex items-center justify-center">→</span>
             </a>
             <span className="text-3xl font-bold tracking-tight">Teamollo.</span>
          </div>
          
          <div className="w-full md:w-auto flex flex-col items-center md:items-end">
            <nav className="flex flex-wrap gap-6 text-sm font-semibold mb-6">
               <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Project</a>
               <a href="#">Feedback</a>
               <a href="#">Blog</a>
               <a href="#">Contact</a>
            </nav>
            <p className="text-xs font-semibold text-black/60 text-center md:text-right">
              © 2023 Teamollo. All rights reserved | Cookie Settings. Anti-Spam. Privacy. User agreement. Legal Notice and Responsible Disclosure
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
