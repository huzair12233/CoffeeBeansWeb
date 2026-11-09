import Link from "next/link";
import Image from "next/image";

const COLS = [
  {
    title: "Coffee",
    links: [
      { label: "Roasted beans", href: "/coffee" },
      { label: "Green beans", href: "/coffee" },
      { label: "Reserve lots", href: "/coffee" },
      { label: "Origins", href: "/origins" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Sourcing", href: "/origins" },
      { label: "The craft", href: "/craft" },
      { label: "Wholesale", href: "/wholesale" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Brew guide", href: "/guide" },
      { label: "Grind chart", href: "/guide" },
      { label: "Water & temperature", href: "/guide" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-cream-soft">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-24n.png"
              alt="24°N Coffee"
              width={150}
              height={65}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-xs font-sans text-[14px] leading-relaxed text-cream-soft/55">
              High-grown single-origin coffee from the 24th parallel, roasted in
              small batches on the Oakland waterfront.
            </p>
            <div className="mt-6 flex gap-3">
              {["Instagram", "X", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-soft/20 font-mono text-[10px] transition-colors hover:border-amber-glow hover:text-amber-glow"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-amber-glow/70">
                {c.title}
              </p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="ulink font-sans text-[14px] text-cream-soft/65 hover:text-cream-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big wordmark */}
        <div className="mt-16 overflow-hidden border-t border-cream-soft/10 pt-8">
          <p className="select-none font-display text-[clamp(4rem,20vw,16rem)] font-light leading-none tracking-tighter text-cream-soft/[0.06]">
            24°N COFFEE
          </p>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 font-sans text-[12px] text-cream-soft/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} 24°N Coffee Roasters · Oakland, California</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream-soft">Privacy</a>
            <a href="#" className="hover:text-cream-soft">Terms</a>
            <a href="#" className="hover:text-cream-soft">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
