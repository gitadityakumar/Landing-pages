import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 bg-white shrink-0">
      <Link href="/" className="text-xl font-medium tracking-tight">
        Elementum
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-600 font-medium ml-12">
        <Link href="#home" className="hover:text-black">Home</Link>
        <Link href="#studio" className="hover:text-black">Studio</Link>
        <Link href="#services" className="hover:text-black">Services</Link>
        <Link href="#contact" className="hover:text-black">Contact</Link>
        <Link href="#faqs" className="hover:text-black">FAQs</Link>
      </div>

      <div>
        <button className="flex flex-col gap-1.5 w-6 group cursor-pointer" aria-label="Menu">
          <span className="block h-0.5 w-full bg-black group-hover:bg-zinc-600 transition-colors" />
          <span className="block h-0.5 w-full bg-black group-hover:bg-zinc-600 transition-colors" />
        </button>
      </div>
    </nav>
  );
}
