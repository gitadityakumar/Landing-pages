import Image from "next/image";

const features = [
  "Desktop App",
  "Keyboard Shortcuts",
  "Dark & Light Mode",
  "Google Calendar Sync",
  "Notifications",
];

export default function AllInCalendar() {
  return (
    <section className="section-shell section-block relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#9f8cff]/12 blur-[110px]"
      />

      <div className="relative mx-auto max-w-280">
        <div className="mx-auto flex max-w-140 flex-col items-center text-center">
          <h2 className="section-heading max-w-[10ch] text-[3rem] leading-[0.94] sm:text-[3.85rem] lg:text-[4.15rem]">
            All in a calendar,
            <br />
            that&apos;s a{" "}
            <span className="relative inline-block">
              joy to use
              <svg
                viewBox="0 0 220 36"
                className="absolute -bottom-3 left-1/2 h-5 w-[112%] -translate-x-1/2 text-[#5668ff]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 23C36 9 70 10 102 17C135 25 170 25 214 11"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="section-body mt-5 max-w-110">
            An entire meeting collaboration platform built inside a fast and
            modern calendar you and your team will love.
          </p>

          <ul className="mt-7 flex max-w-120 flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-[#8f88d8] sm:text-xs">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto mt-12 max-w-290 overflow-hidden rounded-[20px] border border-black/5 bg-[#2a2a2d] shadow-[0_28px_80px_rgba(24,19,36,0.16)] sm:mt-14 lg:mt-16">
          <Image
            src="/ready/allin1c.png"
            alt="Ready calendar workspace overview"
            width={1200}
            height={780}
            sizes="(max-width: 640px) 95vw, (max-width: 1200px) 90vw, 1100px"
            className="h-auto w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
