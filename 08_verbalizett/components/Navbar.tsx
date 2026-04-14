import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 lg:px-12 bg-transparent">
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          {/* Faux logo icon matching VerbalizeIt style */}
          <div className="flex bg-blue-600 p-1 rounded-sm w-7 h-7 items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">V</span>
          </div>
          <span>Verbalize<span className="font-light opacity-90">It</span></span>
        </Link>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-200">
        <Link href="#solutions" className="hover:text-white transition-colors flex items-center gap-1">
          Solutions <span className="opacity-60 text-[10px]">▼</span>
        </Link>
        <Link href="#industries" className="hover:text-white transition-colors">Industries</Link>
        <Link href="#translators" className="hover:text-white transition-colors">The Translators</Link>
        <Link href="#about" className="hover:text-white transition-colors">About Us</Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#login" className="hidden md:block text-[15px] font-semibold text-slate-200 hover:text-white transition-colors">
          Log In
        </Link>
        <Link href="#signup" className="text-sm font-semibold border-2 border-slate-500/50 text-white px-6 py-2.5 rounded-sm hover:border-white hover:bg-white hover:text-slate-900 transition-all uppercase tracking-wider text-xs">
          Sign up for free
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
