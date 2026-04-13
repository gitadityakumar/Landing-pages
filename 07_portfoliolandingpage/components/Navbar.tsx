import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-white/70 bg-white/90 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-emerald-500" />
          <span className="font-semibold tracking-tight" style={{fontFamily:"var(--font-prompt)"}}>SPRING</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="#services" className="hover:text-gray-900">Services</Link>
          <Link href="#work" className="hover:text-gray-900">Work</Link>
          <Link href="#team" className="hover:text-gray-900">Team</Link>
          <Link href="#pricing" className="hover:text-gray-900">Pricing</Link>
          <Link href="#faq" className="hover:text-gray-900">FAQ</Link>
        </nav>
        <Link href="#contact" className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-600 transition">Get Start</Link>
      </div>
    </header>
  );
}
