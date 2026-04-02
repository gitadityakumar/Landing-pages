import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Mail, CircleDot } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full relative px-4 md:px-8 pb-10">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-10">
        
        {/* CTA Box with Abstract Background */}
        <div className="relative w-full rounded-2xl overflow-hidden py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center px-4">
          <div className="absolute inset-0 z-0">
             <Image src="/abstract.png" alt="abstract background" fill sizes="100vw" className="object-cover opacity-80" />
             <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center max-w-[600px]">
             <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-6">
               Have an idea?<br/>Let&apos;s talk.
             </h2>
             <p className="text-[#f6f6f6]/90 text-[15px] md:text-[17px] mb-10 max-w-[450px]">
               Visually attractive design from concept to final result. We create solutions that are bold and forward-looking.
             </p>
             <button className="flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
                <CalendarDays className="w-4 h-4" /> Free Consultation
             </button>
          </div>
        </div>

        {/* Footer Grid Layout */}
        <div className="w-full border border-gray-800/60 rounded-sm">
          {/* Top Row */}
          <div className="w-full flex items-stretch border-b border-gray-800/60 min-h-[80px]">
            {/* Logo */}
            <div className="w-[120px] md:w-[200px] lg:w-[280px] flex items-center justify-center border-r border-gray-800/60 shrink-0">
               <div className="flex items-center gap-2 text-xl font-bold text-[#f6f6f6]">
                 <CircleDot className="w-6 h-6 text-gray-400" />
                 Compser
               </div>
            </div>
            
            {/* Main Links */}
            <div className="flex-1 flex justify-center items-center gap-6 md:gap-12 text-[11px] font-medium text-gray-400 capitalize">
              <Link href="#" className="hover:text-white transition-colors duration-300">Projects</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">About</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">Team</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">Contact</Link>
            </div>
            
            {/* Email */}
            <div className="w-[150px] md:w-[220px] lg:w-[280px] flex items-center justify-center border-l border-gray-800/60 shrink-0">
               <a href="mailto:hello@Compser.io" className="text-[14px] md:text-[16px] font-semibold text-[#f6f6f6] hover:text-gray-300 transition-colors">
                 hello@Compser.io
               </a>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="w-full flex flex-col md:flex-row items-stretch min-h-[60px] text-[11px] font-medium text-gray-500/80">
            {/* Services */}
            <div className="w-full md:w-[200px] lg:w-[280px] shrink-0 border-b md:border-b-0 md:border-r border-gray-800/60 flex items-center justify-center">
              <Link href="#" className="flex justify-center items-center gap-2 hover:text-white transition-colors uppercase tracking-widest py-4 md:py-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                Services
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex-1 flex justify-center items-center gap-4 py-4 md:py-0 border-b md:border-b-0 border-gray-800/60">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-800/60 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold text-gray-400">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-800/60 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold text-gray-400">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-800/60 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold text-gray-400">
                TW
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-800/60 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold text-gray-400">
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="w-full md:w-[220px] lg:w-[280px] shrink-0 md:border-l border-gray-800/60 flex items-center justify-center py-4 md:py-0">
               <p className="tracking-wide">© 2088 Nayzak Design</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
