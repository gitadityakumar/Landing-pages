import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#1A1A1A] text-white px-8 md:px-16 py-12 mt-16"
      id="contact"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* ── Left column ── */}
        <div className="flex-1">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-brand font-prosto-one text-xl tracking-wide">
              Ardio
            </span>
            <span className="w-5 h-5 rounded-full bg-brand text-white text-[8px] flex items-center justify-center font-bold leading-none">
              R
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-8 leading-snug">
            Subscrive to get the
            <br />
            latest updates
          </h3>

          {/* Subscribe form */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm w-full sm:w-64 focus:outline-none focus:border-brand placeholder:text-gray-500 transition-colors"
            />
            <button className="bg-brand text-white flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium hover:bg-brand-light transition-colors duration-200">
              Subscribe <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col items-end justify-between gap-6">
          {/* Decorative red arrow doodle */}
          <div className="hidden md:block">
            <Image
              src="/footer1.svg"
              alt=""
              width={178}
              height={123}
              aria-hidden="true"
            />
          </div>

          <div className="flex items-center gap-6">
            {/* X / Twitter */}
            <a
              href="#"
              className="text-white hover:text-brand transition-colors duration-200"
              aria-label="Follow on X"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="text-white hover:text-brand transition-colors duration-200"
              aria-label="Follow on Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Scroll down */}
            <button className="flex items-center gap-2 border border-gray-600 rounded-full px-5 py-2 text-sm hover:border-brand transition-colors duration-200">
              Scroll down <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
