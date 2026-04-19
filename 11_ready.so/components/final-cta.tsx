function XIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.901 2H21.98l-6.723 7.684L23.166 22h-6.19l-4.848-7.006L5.995 22H2.915l7.192-8.22L.834 2h6.347l4.382 6.362L18.901 2Zm-1.084 18h1.705L6.254 3.895H4.423L17.817 20Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.983 3.5A2.483 2.483 0 1 1 5 8.466 2.483 2.483 0 0 1 4.983 3.5ZM3 9.75h4v11.25H3V9.75ZM9.25 9.75h3.833v1.537h.055c.534-1.012 1.84-2.079 3.788-2.079 4.05 0 4.799 2.666 4.799 6.132V21h-4v-4.975c0-1.186-.02-2.712-1.653-2.712-1.655 0-1.909 1.292-1.909 2.625V21h-4V9.75Z" />
    </svg>
  );
}

export default function FinalCta() {
  return (
    <section className="section-shell section-block relative overflow-hidden pb-8 sm:pb-10 lg:pb-12">
      <div className="mx-auto flex min-h-[72vh] max-w-320 flex-col justify-between gap-14">
        <div className="mx-auto flex max-w-150 flex-col items-center text-center">
          <h2 className="section-heading max-w-[7ch] text-[3.2rem] leading-[0.94] sm:text-[4.25rem] lg:text-[5rem]">
            It&apos;s time.
            <br />
            Get Ready
          </h2>

          <div className="section-body mt-10 max-w-150 space-y-8 text-[1.65rem] leading-[1.45] tracking-[-0.03em] text-[#444349] sm:text-[1.8rem] lg:text-[2rem]">
            <p>
              Your calendar has the power to shape your day. And life is too
              damn short for bad meetings.
            </p>
            <p>
              Get Ready, and let&apos;s shape the future of meetings and
              calendars, together.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <button className="min-w-28 rounded-2xl bg-[#5668ff] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_26px_rgba(86,104,255,0.2)] transition-transform duration-200 hover:-translate-y-0.5">
              Sign Up
            </button>
            <button className="min-w-48 rounded-2xl border border-[#d8d3f8] bg-white/30 px-8 py-4 text-lg font-semibold text-[#5668ff] shadow-[0_6px_18px_rgba(86,104,255,0.06)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5">
              Download for Mac
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-[#5a5960] sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <p className="text-[1.65rem] font-medium tracking-[-0.03em] text-[#5b5961]">
              Ready <span className="text-[#9c98a5]">—</span> Made remotely 🌍
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[1.2rem] text-[#b0abb4]">
              <a href="#" className="transition-colors hover:text-[#5a5960]">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-[#5a5960]">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[#6a6870]">
            <a
              href="#"
              aria-label="Ready on X"
              className="transition-colors hover:text-[#2f2d31]"
            >
              <XIcon />
            </a>
            <a
              href="#"
              aria-label="Ready on LinkedIn"
              className="transition-colors hover:text-[#2f2d31]"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
