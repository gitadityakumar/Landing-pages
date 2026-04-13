export default function Contact(){
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#7cebc2] border-t border-[#0B2131]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-[2.5rem] font-bold text-[#0B2131] max-w-sm leading-[1.1]" style={{fontFamily:"var(--font-prompt)"}}>Have a project in mind? Let's get to work</h2>
        <p className="mt-4 text-sm font-medium text-[#0B2131] max-w-xl leading-relaxed">The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text</p>
        
        <form className="mt-12 grid sm:grid-cols-3 gap-4 border-b border-[#0B2131]/20 pb-12">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B2131]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </span>
            <input placeholder="Your Name" className="w-full bg-[#bdcc52] border border-[#0B2131] rounded-sm pl-11 pr-4 py-3 text-sm font-medium text-[#0B2131] placeholder-[#0B2131]/70 focus:outline-none focus:ring-1 focus:ring-[#0B2131]" />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B2131]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </span>
            <input type="email" placeholder="Email" className="w-full bg-[#bdcc52] border border-[#0B2131] rounded-sm pl-11 pr-4 py-3 text-sm font-medium text-[#0B2131] placeholder-[#0B2131]/70 focus:outline-none focus:ring-1 focus:ring-[#0B2131]" />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B2131]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </span>
            <input placeholder="Phone Number" className="w-full bg-[#bdcc52] border border-[#0B2131] rounded-sm pl-11 pr-4 py-3 text-sm font-medium text-[#0B2131] placeholder-[#0B2131]/70 focus:outline-none focus:ring-1 focus:ring-[#0B2131]" />
          </div>
          <div className="sm:col-span-3 mt-4">
            <button className="inline-flex items-center gap-2 bg-[#16a34a] border border-[#0B2131] text-white px-6 py-3 text-sm font-bold shadow-[2px_2px_0px_0px_#0B2131] hover:bg-green-600 transition-colors">
              Send Message <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
