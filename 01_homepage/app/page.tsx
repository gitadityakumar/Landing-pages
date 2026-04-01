import Image from "next/image";

const services = [
  { title: "Web & Mobile Design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop" },
  { title: "Brand Identity", image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop" },
  { title: "App Development", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop" },
  { title: "Consultancy", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" },
  { title: "Packaging", image: "https://images.unsplash.com/photo-1607082348824-0a1dd7228f2d?w=800&h=600&fit=crop" },
];

const teamMembers = [
  { name: "Jocelyn Schleifer", role: "Managing Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" },
  { name: "Marcus Rivera", role: "Creative Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" },
  { name: "Emily Watson", role: "Lead Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop" },
  { name: "James Park", role: "Senior Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" },
  { name: "Lisa Thompson", role: "Brand Strategist", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop" },
  { name: "David Kim", role: "Motion Designer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop" },
];

const portfolioItems = [
  { title: "Galaxia Branding", image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop", category: "Branding" },
  { title: "John Mayer NYC", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop", category: "Web Design" },
  { title: "Nayzak Patterns", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&h=800&fit=crop", category: "Motion" },
  { title: "Crave Chips", image: "https://images.unsplash.com/photo-1607082348824-0a1dd7228f2d?w=1200&h=800&fit=crop", category: "Packaging" },
];

const navLinks = ["Projects", "About", "Team", "Contact"];

function AddIcon() {
  return (
    <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function SectionIcon() {
  return (
    <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4l8 8H4l8-8z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
        <nav className="flex items-center justify-between w-full max-w-7xl h-[64px] px-6 sm:px-10 border border-white/5 rounded-2xl bg-black/40 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-sm font-black text-white italic">K</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white italic">Krate</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[13px] font-bold uppercase tracking-[0.15em] text-white/50 hover:text-white transition-all hover:scale-110">
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:block px-7 py-3 bg-white text-black text-[13px] font-black uppercase tracking-widest rounded-full hover:bg-purple-50 transition-all hover:scale-105 active:scale-95">
              Get in touch
            </a>
            <button className="lg:hidden p-2.5 text-white/60 hover:text-white bg-white/5 rounded-xl border border-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[150px] rounded-full" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
              <span className="flex h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <p className="text-[10px] font-black text-white/70 tracking-[0.3em] uppercase italic">Design & Motion Studio</p>
            </div>
            
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[140px] font-black text-center leading-[0.85] tracking-[-0.07em] mb-12 italic">
              <span className="text-white block">KRATE DESIGN</span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-white bg-clip-text text-transparent block">
                MOTION STUDIO
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/40 text-center max-w-3xl mb-14 leading-relaxed font-medium">
              We create world-class digital experiences through a perfect blend of high-end design and fluid motion aesthetics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#contact" className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-purple-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                Start a Project
                <ArrowIcon />
              </a>
              <a href="#portfolio" className="px-10 py-5 border border-white/10 text-white font-black uppercase tracking-widest rounded-full hover:bg-white/5 transition-all hover:border-white/30">
                View Work
              </a>
            </div>
          </div>

          {/* Featured Visual */}
          <div className="relative z-10 mt-24 w-full max-w-7xl px-4">
            <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group">
              <Image
                alt="Hero visual"
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=2000&h=1000&fit=crop"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 flex items-center gap-4 px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 cursor-pointer hover:bg-black/60 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] italic leading-tight">Watch</p>
                  <p className="text-sm font-black text-white uppercase tracking-wider italic">2024 Showreel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="about" className="py-40 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <SectionIcon />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">Our Philosophy</h2>
              </div>
              <h3 className="text-4xl sm:text-6xl font-black leading-[1] tracking-tighter italic uppercase">
                We bridge the gap between imagination and <span className="text-purple-500">digital reality</span>.
              </h3>
            </div>
            <div className="flex flex-col gap-12">
              <p className="text-xl sm:text-2xl text-white/50 leading-relaxed font-medium italic">
                Our approach is rooted in the belief that great design is not just about looks—it&apos;s about how it moves, feels, and communicates. We craft identities that resonate and digital products that perform.
              </p>
              <div className="grid grid-cols-3 gap-y-12 gap-x-8">
                {['STRIPE', 'AIRBNB', 'SPOTIFY', 'KALO', 'KINUA', 'TANO'].map((logo) => (
                  <div key={logo} className="flex items-center text-xs font-black tracking-[-0.05em] text-white/20 hover:text-white/60 transition-colors cursor-default">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-40 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-20">
              <SectionIcon />
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">Capabilities</h2>
            </div>
            
            <div className="flex flex-col border-t border-white/10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-12 border-b border-white/10 cursor-pointer transition-all hover:px-6 hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-8 sm:gap-16">
                    <span className="text-xs font-black text-white/20 italic tracking-widest">0{index + 1}</span>
                    <h3 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase italic group-hover:text-purple-400 transition-all duration-500">
                      {service.title}
                    </h3>
                  </div>
                  <div className="mt-8 sm:mt-0 flex items-center gap-6">
                    <div className="relative w-32 h-16 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-10 group-hover:translate-x-0">
                      <Image alt={service.title} src={service.image} fill className="object-cover" />
                    </div>
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <AddIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <SectionIcon />
                  <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">Selected Work</h2>
                </div>
                <h3 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[-0.05em] uppercase italic leading-[0.9]">
                  Digital Mastery in Motion
                </h3>
              </div>
              <button className="flex items-center gap-3 px-10 py-5 border border-white/10 rounded-full hover:bg-white text-black transition-all hover:text-black font-black uppercase tracking-widest text-xs group">
                All Projects
                <ArrowIcon />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
              {portfolioItems.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 mb-10 bg-white/5">
                    <Image
                      alt={item.title}
                      src={item.image}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                        <ArrowIcon />
                      </div>
                    </div>
                    <div className="absolute top-10 left-10 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] italic">
                      {item.category}
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4">
                    <h4 className="text-3xl font-black tracking-tight uppercase italic group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">© 2024</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-40 px-6">
          <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[60px] bg-white text-black py-32 px-10 text-center shadow-2xl shadow-purple-500/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full" />
            
            <h2 className="text-6xl sm:text-8xl md:text-[130px] font-black tracking-[-0.08em] leading-[0.8] mb-14 uppercase italic">
              LET&apos;S CRAFT THE<br />BEYOND TOGETHER
            </h2>
            <p className="text-xl md:text-2xl text-black/50 max-w-2xl mx-auto mb-16 font-bold italic leading-relaxed">
              Have a visionary project in mind? We&apos;re currently opening slots for late 2024 partnerships.
            </p>
            <a href="mailto:hello@krate.com" className="group inline-flex items-center gap-5 px-14 py-7 bg-black text-white rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-xl">
              Start a Project
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-white/5 relative bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 mb-32">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-lg font-black text-white italic">K</span>
                </div>
                <span className="text-3xl font-black tracking-tighter uppercase italic">Krate</span>
              </div>
              <p className="text-xl text-white/30 max-w-md font-medium italic leading-relaxed">
                Elevating brands through high-end design and fluid motion artistry. Based in London, working globally.
              </p>
              <div className="flex gap-4">
                {['TW', 'IG', 'DR', 'BE'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all font-black text-xs">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
              <div className="flex flex-col gap-6">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Navigation</p>
                {navLinks.map(link => (
                  <a key={link} href="#" className="text-sm font-black uppercase tracking-wider text-white/50 hover:text-white transition-colors">{link}</a>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Contact</p>
                <a href="mailto:hello@krate.com" className="text-sm font-black text-white/50 hover:text-white transition-colors lowercase italic tracking-wider">hello@krate.com</a>
                <p className="text-sm font-black text-white/50 uppercase tracking-wider">+44 20 7946 0958</p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Office</p>
                <p className="text-sm font-black text-white/50 uppercase tracking-widest leading-relaxed">
                  24 Shoreditch High St<br />London, UK
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/10 italic">
            <p>&copy; 2024 KRATE STUDIO LTD. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
