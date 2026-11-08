"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const PERKS = [
  "Direct-trade green & roasted lots",
  "Flexible subscription cadence",
  "Barista training & dial-in support",
  "Private-label & café programs",
];

export function Wholesale() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
  }

  return (
    <section
      id="wholesale"
      className="relative overflow-hidden bg-bark-deep py-24 text-cream-soft md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40vh] w-[80vh] -translate-x-1/2 rounded-full bg-amber-brand/10 blur-[120px]" />

      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow text-amber-glow">The Program</p>
            <h2 className="display mt-4 text-[clamp(2.3rem,5.5vw,4rem)]">
              What partners get.
            </h2>
            <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-cream-soft/65">
              Everything you need to pour specialty coffee with confidence —
              consistent, traceable single origins and the support to serve them
              well. Request the current catalogue and pricing.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {PERKS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 font-sans text-[14px] text-cream-soft/75"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-glow" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Form card */}
        <Reveal delay={0.12}>
          <div className="rounded-[1.75rem] border border-cream-soft/15 bg-espresso/50 p-8 backdrop-blur-sm md:p-10">
            {sent ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-brand text-espresso">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl">Catalogue on its way.</h3>
                <p className="mt-2 font-sans text-sm text-cream-soft/60">
                  We&apos;ll be in touch at{" "}
                  <span className="text-amber-glow">{email}</span> within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 className="font-display text-2xl">Request the catalogue</h3>
                <p className="mt-2 font-sans text-sm text-cream-soft/55">
                  No account needed — just an email.
                </p>

                <label className="mt-7 block font-mono text-[11px] uppercase tracking-wide text-cream-soft/50">
                  Work email
                </label>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@café.com"
                    className="w-full rounded-full border border-cream-soft/25 bg-transparent px-5 py-3.5 font-sans text-[15px] text-cream-soft placeholder:text-cream-soft/35 outline-none transition-colors focus:border-amber-glow"
                  />
                  <button type="submit" className="btn-amber shrink-0">
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 font-sans text-[12px] text-cream-soft/40">
                  This is a showcase site — no data is collected or sent.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
