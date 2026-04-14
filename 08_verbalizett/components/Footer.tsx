import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2 flex flex-col items-start pr-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-1 mb-6">
              <div className="w-6 h-6 bg-blue-600 rounded-bl-lg rounded-tr-lg"></div>
              VERBALIZEIT
            </Link>
            <p className="text-slate-500 mb-6 max-w-sm leading-relaxed">
              Human-powered translation for your Business. Connect with a global network of professional translators instantly.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors">T</div>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors">F</div>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors">I</div>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Product</h4>
            <div className="flex flex-col gap-4 text-slate-500">
              <Link href="#" className="hover:text-blue-600 transition-colors">Solutions</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Integrations</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Case Studies</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-4 text-slate-500">
              <Link href="#" className="hover:text-blue-600 transition-colors">About Us</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Careers</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <div className="flex flex-col gap-4 text-slate-500">
              <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} VerbalizeIt. All rights reserved.</p>
          <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5 focus-within:border-blue-500 text-slate-700 w-full sm:w-auto">
             <span className="text-slate-400">🌐</span>
             <select className="bg-transparent border-none outline-none appearance-none cursor-pointer pr-4 uppercase font-medium">
               <option value="en">English (US)</option>
               <option value="fr">French</option>
               <option value="es">Spanish</option>
             </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
