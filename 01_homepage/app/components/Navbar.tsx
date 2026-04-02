import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full relative z-40 px-4 md:px-8 pt-4">
      <div className="max-w-[1500px] mx-auto border border-gray-800/60 rounded-sm">
        {/* Top Row */}
        <div className="w-full flex items-stretch min-h-[64px]">
          {/* Logo */}
          <div className="w-[80px] md:w-[150px] lg:w-[220px] flex items-center justify-center border-r border-gray-800/60 shrink-0">
            <Image src="/Branding.svg" alt="Logo" width={32} height={32} className="brightness-0 invert opacity-90" />
          </div>
          
          {/* Main Links */}
          <div className="flex-1 flex justify-center items-center gap-6 md:gap-12 text-[11px] font-medium text-gray-400 capitalize">
            <Link href="#" className="hover:text-white transition-colors duration-300">Projects</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">About</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Team</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Contact</Link>
          </div>
          
          {/* Menu Button */}
          <div className="w-[80px] md:w-[150px] lg:w-[220px] flex items-center justify-center border-l border-gray-800/60 shrink-0">
             <button className="flex flex-col gap-[6px] p-2 outline-none group focus:outline-none justify-center items-center h-full w-full">
              <span className="w-[26px] h-px bg-gray-500 group-hover:bg-white transition-colors"></span>
              <span className="w-[26px] h-px bg-gray-500 group-hover:bg-white transition-colors"></span>
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full flex items-stretch border-t border-gray-800/60 min-h-[44px]">
          <div className="w-[80px] md:w-[150px] lg:w-[220px] shrink-0 border-r border-gray-800/60"></div>
          
          <div className="flex-1 flex text-[10px] font-medium text-gray-500/80">
             <Link href="#" className="flex-1 flex justify-center items-center gap-2 border-r border-gray-800/60 hover:text-white transition-colors uppercase tracking-widest">
               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
               Services
             </Link>
             <Link href="#" className="flex-1 flex justify-center items-center gap-2 hover:text-white transition-colors uppercase tracking-widest">
               <CalendarDays className="w-3 h-3 text-gray-500" />
               Get in touch
             </Link>
          </div>

          <div className="w-[80px] md:w-[150px] lg:w-[220px] shrink-0 border-l border-gray-800/60"></div>
        </div>
      </div>
    </nav>
  );
}
