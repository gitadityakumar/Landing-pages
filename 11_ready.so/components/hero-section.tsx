import Image from "next/image";
import Link from "next/link";

const avatars = [
  { src: "/ready/c1.jpg", alt: "Team member avatar 1" },
  { src: "/ready/c2.jpg", alt: "Team member avatar 2" },
  { src: "/ready/c3.jpg", alt: "Team member avatar 3" },
  { src: "/ready/c4.jpg", alt: "Team member avatar 4" },
  { src: "/ready/c5.jpg", alt: "Team member avatar 5" },
];

export default function Hero() {
  return (
    <>
      <header className="relative z-20 px-4 pt-2 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-330 items-center justify-between py-2"
        >
          <Link
            href="/"
            className="text-[1.28rem] font-extrabold tracking-[-0.06em] text-[#2f2d31] transition-opacity hover:opacity-75"
          >
            Ready
          </Link>

          <div className="flex items-center gap-2.5">
            <ul className="hidden items-center sm:flex" aria-label="Team members">
              {avatars.map((avatar) => (
                <li
                  key={avatar.src}
                  className="-ml-2 relative first:ml-0"
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    width={40}
                    height={40}
                    className="size-8 rounded-full border-[1.5px] border-white object-cover shadow-sm"
                  />
                </li>
              ))}
            </ul>

            <button className="rounded-lg bg-[#7c6cff] px-5 py-2 text-[13px] font-medium  font-inter text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
              Get Ready
            </button>
          </div>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-105 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.94),rgba(255,255,255,0.62)_45%,transparent_78%)]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[18%] h-130 w-130 -translate-x-1/2 rounded-full bg-[#b7a7ff]/10 blur-[140px]"
        />

        <div className="relative z-10 mx-auto max-w-190 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#8c7fff] sm:text-xs">
            YOUR NEW CALENDAR
          </p>

          <h1 className="mx-auto mt-4 max-w-[9.4ch] text-[3rem] font-extrabold tracking-[-0.08em] text-[#2f2d31] sm:text-[4.6rem] lg:text-[5.2rem] lg:leading-[0.95]">
            The calendar
            <br />
            you{" "}
            <span className="relative inline-block rounded-l-md border-r-5 border-[#7c6cff] bg-[#E2DBFF] px-4 pb-1 pt-2">
              need to meet
              <span className="absolute -right-15  -top-7 hidden rounded-r-lg rounded-tl-lg  bg-[#7c6cff] px-3 py-2 text-[13px] font-semibold tracking-normal text-white lg:block shadow-sm">
                Febby
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-107.5 text-[15px] leading-6 text-[#66626c]">
            Ready evolves your calendar into a living, breathing multiplayer
            workspace for teams to instantly make your meetings better.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-5 w-full max-w-330 sm:mt-14  sm:px-6 lg:px-8">
          <div className="relative mx-auto flex w-full justify-center">
            <div className="absolute top-[9%] lg:top-[12%] hidden w-full md:block">
              <Image
                src="/ready/hero1.png"
                alt="Calendar side workspace"
                width={1440}
                height={1067}
                className="mx-auto h-auto w-full max-w-310 drop-shadow-[0_22px_60px_rgba(50,34,18,0.1)]"
                priority
              />
            </div>

            <figure className="relative z-10 mx-auto w-full max-w-140 sm:max-w-160 lg:max-w-180">
              <Image
                src="/ready/hero2.png"
                alt="Ready meeting workspace preview"
                width={1168}
                height={1168}
                priority
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 74vw, 720px"
                className="relative z-10 h-auto w-full top-10 drop-shadow-[0_36px_80px_rgba(22,12,34,0.25)]"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
