import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-6 border-b border-slate-200">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tight text-black">
              VerbalizeIt
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[15px] text-slate-600">
            <Link href="#service" className="hover:text-black transition-colors">Service</Link>
            <Link href="#blog" className="hover:text-black transition-colors">Blog</Link>
            <Link href="#about" className="hover:text-black transition-colors">About Us</Link>
            <Link href="#contact" className="hover:text-black transition-colors">Contact</Link>
          </div>

          <div className="flex items-center">
            <Link href="#register" className="text-sm font-bold bg-[#fdc630] hover:bg-[#ffb012] text-black px-8 py-3 rounded-full transition-all tracking-wide">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
