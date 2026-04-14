import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 lg:px-12 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        {/* Logo placeholder */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
          <div className="w-6 h-6 bg-blue-600 rounded-bl-lg rounded-tr-lg"></div>
          VERBALIZEIT
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <Link href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</Link>
        <Link href="#industries" className="hover:text-blue-600 transition-colors">Industries</Link>
        <Link href="#translators" className="hover:text-blue-600 transition-colors">The Translators</Link>
        <Link href="#about" className="hover:text-blue-600 transition-colors">About Us</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="#signin" className="hidden md:block text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
          Sign in
        </Link>
        <Link href="#signup" className="text-sm font-medium bg-blue-600 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-sm">
          Sign up for free
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
