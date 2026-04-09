import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e4f2dc] text-black w-full pt-20">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center px-6">
        <h2 className="text-4xl md:text-[4rem] leading-[1.1] font-medium tracking-tight">
          Subscribe to <br />
          our newsletter
        </h2>
        <p className="mt-6 text-zinc-700 text-sm md:text-base">
          To make your stay special and even more memorable
        </p>
        <button className="mt-8 bg-black leading-none text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors tracking-wide">
          Subscribe Now
        </button>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-24 px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-[#cddfc6]">
        
        <div className="flex flex-col gap-5">
          <h4 className="font-semibold text-lg text-black mb-1">Company</h4>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Home</Link>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Studio</Link>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Service</Link>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Blog</Link>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-semibold text-lg text-black mb-1">Terms & Policies</h4>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Privacy Policy</Link>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Terms & Conditions</Link>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Explore</Link>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Accesibility</Link>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-semibold text-lg text-black mb-1">Follow Us</h4>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Instagram</Link>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">LinkedIn</Link>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Youtube</Link>
          <Link href="#" className="text-zinc-700 hover:text-black transition-colors text-[15px]">Twitter</Link>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-semibold text-lg text-black mb-1">Terms & Policies</h4>
          <div className="text-zinc-700 text-[15px] leading-relaxed">
            1498w Fluton ste, STE<br/>
            2D Chicago, IL 63867.
          </div>
          <div className="text-zinc-700 text-[15px]">
            (123) 456789000
          </div>
          <div className="text-zinc-700 text-[15px]">
            info@elementum.com
          </div>
        </div>

      </div>

      <div className="py-6 text-center text-zinc-600 text-[13px]">
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
}
