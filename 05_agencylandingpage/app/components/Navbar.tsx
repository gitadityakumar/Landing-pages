export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 md:px-16 py-5 relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-1.5">
        <span className="text-brand font-prosto-one text-xl tracking-wide">
          Ardio
        </span>
        <span className="w-5 h-5 rounded-full bg-brand text-white text-[8px] flex items-center justify-center font-bold leading-none">
          R
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        <a
          href="#about"
          className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
        >
          About Studio
        </a>
        <a
          href="#work"
          className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
        >
          Work
        </a>
        <a
          href="#contact"
          className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
        >
          Contact
        </a>
      </div>

      {/* Hamburger */}
      <button className="flex flex-col gap-[5px] p-2" aria-label="Open menu">
        <span className="w-6 h-[2px] bg-foreground block" />
        <span className="w-6 h-[2px] bg-foreground block" />
      </button>
    </nav>
  );
}
