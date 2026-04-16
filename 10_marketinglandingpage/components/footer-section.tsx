import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: ["Home", "AI Audiences", "Intelligence"],
    badge: "beta",
  },
  {
    title: "Resources",
    links: ["Case Studies", "Help Center", "Proxima Newsletter", "Blog", "Request a Demo"],
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-black py-16">
      <div className="section-shell">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr_auto]">
          <div className="flex flex-col gap-8 md:flex-row md:gap-20">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[16px] font-semibold text-white">{column.title}</h3>
                <div className="mt-4 space-y-3">
                  {column.links.map((item) => (
                    <div className="flex items-center gap-3" key={item}>
                      <Link className="text-[16px] text-(--color-page-surface-muted)" href="#">
                        {item}
                      </Link>
                      {item === "Intelligence" && column.badge ? (
                        <span className="mono-pill inline-flex rounded-full px-3 py-1">
                          {column.badge}
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start justify-start md:justify-end">
            <Link className="flex items-center gap-3 text-white" href="#">
              <Image alt="Halal_Lab mark" height={28} src="/design-assets/brand-mark.svg" width={28} />
              <span className="font-brand text-[18px]">Halal_Lab</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <Link href="#" aria-label="X">
            <Image alt="" height={28} src="/design-assets/social-x.svg" width={28} />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Image alt="" height={28} src="/design-assets/social-instagram.svg" width={28} />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Image alt="" height={28} src="/design-assets/social-linkedin.svg" width={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
