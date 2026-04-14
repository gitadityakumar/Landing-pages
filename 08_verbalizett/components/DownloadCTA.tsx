import React from 'react';

const DownloadCTA = () => {
  return (
    <section className="w-full bg-[#fdc630] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.15] tracking-tight mb-10">
          Learn a new language for<br />free download app Now!
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* App Store Button */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black text-white rounded-full px-6 py-3.5 hover:bg-black/90 transition-colors"
          >
            <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] font-medium opacity-80">Download on the</span>
              <span className="text-base font-bold -mt-0.5">App Store</span>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black text-white rounded-full px-6 py-3.5 hover:bg-black/90 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#4285F4" />
              <path d="M14.852 13.06l2.36 2.36-9.39 5.38 7.03-7.74z" fill="#EA4335" />
              <path d="M20.16 10.81c.5.29.84.82.84 1.19s-.34.9-.84 1.19l-2.77 1.59-2.6-2.78 2.6-2.78 2.77 1.59z" fill="#FBBC05" />
              <path d="M7.822 3.2l9.39 5.38-2.36 2.36L7.822 3.2z" fill="#34A853" />
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] font-medium opacity-80">DISPONIBLE SUR</span>
              <span className="text-base font-bold -mt-0.5">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
