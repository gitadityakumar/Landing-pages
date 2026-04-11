"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col text-text">
      {/* Header */}
      <header className="w-full bg-primary/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xs font-semibold tracking-widest text-black">
            SPRING
          </div>
          <nav className="hidden items-center gap-6 text-sm text-black/90 md:flex">
            <Link href="#">Home</Link>
            <Link href="#services">Contact</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#support">Support</Link>
            <Link href="#about">About</Link>
          </nav>
          <button className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white hover:bg-black/90">
            Get Start
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full bg-primary">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-16 lg:py-20">
          {/* vertical divider to match design */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/40 md:block" />
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight text-black md:text-5xl">
              We Build
              <br />
              Experiences
              <br />
              For Your Clients
            </h1>
            <p className="mt-4 text-sm text-black/70">
              Product Template is a professional workflow to replace with
              multiple sections that you can fully customize
            </p>
            <div className="mt-6 text-xs text-black/80">sprinkle@design.co</div>
            <div className="mt-3 h-px max-w-xs bg-black/10" />
            <div className="mt-4 flex items-center gap-3">
              <button className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white hover:bg-black/90">
                Get Started
              </button>
            </div>

            {/* Feature mini cards */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-black/10 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <Image
                    src="/window.svg"
                    alt="window"
                    width={24}
                    height={24}
                  />
                  <div>
                    <div className="text-sm font-semibold">Layout Design</div>
                    <p className="mt-1 text-xs text-zinc-600">
                      Durable matter creates at cursus feugiat pharetra tempus
                      nibh non
                    </p>
                    <button className="mt-2 text-xs font-medium text-black">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-black/10 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <Image src="/file.svg" alt="file" width={24} height={24} />
                  <div>
                    <div className="text-sm font-semibold">
                      Graphic Designer
                    </div>
                    <p className="mt-1 text-xs text-zinc-600">
                      Durable matter creates at cursus feugiat pharetra tempus
                      nibh non
                    </p>
                    <button className="mt-2 text-xs font-medium text-black">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md md:max-w-none">
            <div className="mx-auto aspect-square w-72 rounded-full border border-black/10 bg-[#f8eaa5] p-6 md:w-96">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/heroimage.png"
                  alt="hero"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 24rem, 18rem"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome + Services */}
      <section id="services" className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <Image
                src="/aboutus.png"
                alt="welcome"
                width={120}
                height={120}
                style={{ width: "auto", height: "auto" }}
              />
              <div>
                <h3 className="text-lg font-semibold text-black">Welcome</h3>
                <p className="mt-1 text-sm text-zinc-600">
                  We help you build something amazing
                </p>
                <button className="mt-3 rounded-full bg-black px-3 py-1.5 text-xs text-white">
                  Read more
                </button>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-black">
                We Provide This Service
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "Layout Design", icon: "/window.svg" },
                  { label: "Graphic Design", icon: "/file.svg" },
                  { label: "Mobile Design", icon: "/globe.svg" },
                  { label: "App Design", icon: "/next.svg" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-black/10 bg-white p-3 text-center text-xs shadow-sm"
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={20}
                        height={20}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <div className="mt-2 font-medium">{item.label}</div>
                    <div className="mt-1 text-[11px] text-zinc-600">
                      Learn more
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services detail with phone mock */}
      <section className="w-full bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-black">
              More About Our Services
              <br />
              With Transfer money
            </h3>
            <p className="mt-3 text-sm text-zinc-600">
              Product offer from services is that there is no obligation beyond
              the transaction digital products should be to create more product
              and convince your practice
            </p>
            <div className="mt-5 flex gap-3">
              <button className="rounded-full bg-black px-4 py-2 text-xs text-white">
                Get in app
              </button>
              <button className="rounded-full border border-black/10 px-4 py-2 text-xs">
                How it work
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hiw2.png"
              alt="phone"
              width={280}
              height={560}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Highlight section */}
      <section className="w-full bg-muted">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full bg-white shadow-sm md:h-72 md:w-72">
              <Image
                src="/service.png"
                alt="person"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 18rem, 16rem"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              Not just your regular design agency
            </h3>
            <p className="mt-3 text-sm text-zinc-600">
              Quis posuere suspendisse ultricies gravida massa commodo viverra
              maecenas accumsan. Quis posuere suspendisse ultricies gravida
              massa commodo viverra maecenas accumsan
            </p>
            <button className="mt-5 rounded-full bg-black px-4 py-2 text-xs text-white">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="w-full bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-black">
              We design products that users love
            </h3>
            <p className="mt-3 text-sm text-zinc-600">
              Quis posuere suspendisse ultricies gravida massa commodo viverra
              maecenas accumsan ultrices gravida massa commodo viverra maecenas
              accumsan. Quis posuere suspendisse ultricies gravida massa commodo
              viverra maecenas accumsan
            </p>
            <button className="mt-5 rounded-full bg-black px-4 py-2 text-xs text-white">
              Learn more
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full bg-white shadow-sm md:h-72 md:w-72">
              <Image
                src="/hiw.png"
                alt="person 2"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 18rem, 16rem"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h3 className="text-center text-xl font-semibold text-black">
            Pricing
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-600">
            Pricing is the process whereby a business sets the price at which it
            will sell its products and services
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl bg-muted p-6">
                <div className="text-sm font-semibold text-black">Basic</div>
                <div className="mt-4 text-xs text-zinc-700">
                  Start with a first step
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "Prototype",
                    "App Design",
                    "Web Design",
                    "Interaction",
                    "User test",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-zinc-700"
                    >
                      <span>✓</span>
                      <span className="text-xs">
                        {f} — A simple plan for simple needs. Use one of our
                        design to create a contract.
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h3 className="text-center text-base font-semibold text-black">
            FAQ
          </h3>
          <p className="mx-auto mt-1 max-w-2xl text-center text-xs text-black/70">
            The purpose of a FAQ is generally to provide information on frequent
            questions or concerns
          </p>
          {/* two-column numbered rows to mirror design */}
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              { n: "01", q: "Can you design My website" },
              { n: "02", q: "Can you design My website" },
              { n: "03", q: "Can you design My website" },
              { n: "04", q: "Can you design My website" },
              { n: "05", q: "Can you design My website" },
              { n: "06", q: "Can you design My website" },
            ].map((item) => (
              <div
                key={item.n}
                className="flex items-center justify-between rounded-md border border-black/10 bg-primary/60 px-3 py-2 text-xs md:text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-medium text-black/70 md:text-xs">
                    {item.n}
                  </span>
                  <span className="text-black">{item.q}</span>
                </div>
                <span className="grid h-5 w-5 place-items-center rounded-full border border-black/20 text-[10px] text-black/60">
                  ▸
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h3 className="text-lg font-semibold text-black">
            Have a project in mind?
          </h3>
          <p className="mt-1 text-lg font-semibold text-black">
            Let’s get to work
          </p>
          <button className="mt-5 rounded-full bg-black px-4 py-2 text-xs text-white">
            Get in touch
          </button>

          <div className="mt-12 grid grid-cols-2 gap-8 text-left text-xs text-zinc-600 sm:grid-cols-4">
            <div>
              <div className="text-black">Product</div>
              <ul className="mt-2 space-y-1">
                <li>Features</li>
                <li>Working area</li>
                <li>Technology</li>
                <li>Security</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <div className="text-black">Solution</div>
              <ul className="mt-2 space-y-1">
                <li>Procurement</li>
                <li>Sales</li>
                <li>Legal</li>
                <li>Medium Business</li>
                <li>Enterprise</li>
              </ul>
            </div>
            <div>
              <div className="text-black">Company</div>
              <ul className="mt-2 space-y-1">
                <li>Careers</li>
                <li>Case study</li>
              </ul>
            </div>
            <div>
              <div className="text-black">Links</div>
              <ul className="mt-2 space-y-1">
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
