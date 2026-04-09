import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
              Elementum
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-xs">
              Designing the future of digital experiences with a meticulously crafted component library that empowers your team.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg mb-2">Product</h4>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Features</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Integrations</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Pricing</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Changelog</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg mb-2">Company</h4>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Careers</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Blog</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg mb-2">Legal</h4>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Elementum Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Twitter" className="text-white/40 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="text-white/40 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
