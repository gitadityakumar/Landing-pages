export default function Footer(){
  return (
    <footer className="py-16 bg-[#7cebc2] border-t border-[#0B2131] relative">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-black/10"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 grid sm:grid-cols-12 gap-8">
        <div className="sm:col-span-4">
          <h4 className="font-bold tracking-widest text-[#0B2131] uppercase">SPRING</h4>
          <p className="mt-4 text-xs font-medium text-[#0B2131]/80 leading-relaxed max-w-[200px]">Bridge is an award UI/UX design and branding agency based in new your, USA</p>
          <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#0B2131]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            New York
          </div>
        </div>
        
        <div className="sm:col-span-2">
          <h5 className="font-bold text-[#0B2131] text-sm">Product</h5>
          <ul className="mt-6 space-y-3 text-xs font-medium text-[#0B2131]/80">
            <li><a href="#" className="hover:text-black">Features</a></li>
            <li><a href="#" className="hover:text-black">Why Cequence</a></li>
            <li><a href="#" className="hover:text-black">Technology</a></li>
            <li><a href="#" className="hover:text-black">Security</a></li>
            <li><a href="#" className="hover:text-black">Pricing</a></li>
          </ul>
        </div>
        
        <div className="sm:col-span-2">
          <h5 className="font-bold text-[#0B2131] text-sm">Solution</h5>
          <ul className="mt-6 space-y-3 text-xs font-medium text-[#0B2131]/80">
            <li><a href="#" className="hover:text-black">Procurement</a></li>
            <li><a href="#" className="hover:text-black">Sales</a></li>
            <li><a href="#" className="hover:text-black">Legal</a></li>
            <li><a href="#" className="hover:text-black">Medium Businesses</a></li>
            <li><a href="#" className="hover:text-black">Enterprises</a></li>
          </ul>
        </div>
        
        <div className="sm:col-span-2">
          <h5 className="font-bold text-[#0B2131] text-sm">Company</h5>
          <ul className="mt-6 space-y-3 text-xs font-medium text-[#0B2131]/80">
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Case study</a></li>
          </ul>
        </div>
        
        <div className="sm:col-span-2">
          <h5 className="font-bold text-[#0B2131] text-sm">Links</h5>
          <ul className="mt-6 space-y-3 text-xs font-medium text-[#0B2131]/80">
            <li><a href="#" className="hover:text-black">Facebook</a></li>
            <li><a href="#" className="hover:text-black">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
