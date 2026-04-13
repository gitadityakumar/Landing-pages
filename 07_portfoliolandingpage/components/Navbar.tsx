import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#7cebc2] border-b border-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center h-full">
          <span className="font-semibold tracking-widest text-lg text-black pr-8 uppercase" style={{fontFamily:"var(--font-prompt)"}}>SPRING</span>
          <div className="w-[1px] h-full bg-black" />
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-sm text-black font-medium tracking-wide uppercase" style={{fontFamily:"var(--font-prompt)"}}>
          <Link href="#" className="hover:text-gray-700">HOME</Link>
          <Link href="#contact" className="hover:text-gray-700">CONTACT</Link>
          <Link href="#" className="hover:text-gray-700">BLOG</Link>
          <Link href="#" className="hover:text-gray-700">SUPPORT</Link>
          <Link href="#" className="hover:text-gray-700">ABOUT</Link>
        </nav>
        
        <div className="flex items-center h-full border-l border-black pl-8">
          <Link href="#contact" className="inline-flex items-center bg-[#5478f6] border border-black text-white px-8 py-2 text-sm font-medium hover:bg-blue-600 transition shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Get Start
          </Link>
        </div>
      </div>
    </header>
  );
}
