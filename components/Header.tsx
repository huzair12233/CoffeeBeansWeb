"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { NAV } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        solid
          ? "bg-cream-soft/90 backdrop-blur-md border-b border-ink/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-baseline gap-2 ${solid ? "text-ink" : "text-cream-soft"}`}
        >
          <span className="font-display text-2xl font-semibold tracking-tight">
            ALTA
          </span>
          <span
            className={`font-mono text-[10px] tracking-eyebrow transition-colors ${
              solid ? "text-teal" : "text-amber-glow"
            }`}
          >
            37.8°N
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-8 md:flex ${
            solid ? "text-ink/80" : "text-cream-soft/90"
          }`}
        >
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`ulink font-sans text-[13.5px] font-medium tracking-wide ${
                  active ? "opacity-100" : "opacity-80 hover:opacity-100"
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className={`ml-1.5 inline-block h-1 w-1 translate-y-[-2px] rounded-full ${
                      solid ? "bg-teal" : "bg-amber-glow"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/coffee"
            className={`hidden rounded-full px-5 py-2.5 font-sans text-[13px] font-semibold transition-all duration-300 ease-out-expo md:inline-flex ${
              solid
                ? "bg-espresso text-cream-soft hover:bg-bark-deep"
                : "bg-cream-soft text-espresso hover:bg-amber-glow"
            }`}
          >
            Shop Beans
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden ${
              solid ? "text-ink" : "text-cream-soft"
            }`}
          >
            <span className={`h-[2px] w-6 bg-current transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-6 bg-current transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full border-b border-ink/10 bg-cream-soft px-6 pb-8 pt-4 md:hidden"
          >
            <ul className="flex flex-col divide-y divide-ink/10">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-4 font-display text-2xl text-ink"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-teal">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/coffee" className="btn-ink mt-6 w-full">
              Shop Beans
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
