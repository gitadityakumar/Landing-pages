import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold text-white tracking-widest uppercase">
          Elementum
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
        <Link href="#features" className="hover:text-white transition-colors">Features</Link>
        <Link href="#about" className="hover:text-white transition-colors">About</Link>
        <Link href="#showcase" className="hover:text-white transition-colors">Showcase</Link>
        <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-white hover:bg-white/10">Sign In</Button>
        <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-6">Get Started</Button>
      </div>
    </nav>
  );
}
