"use client";

import Link from "next/link";
import { Img } from "./Img";
import { Reveal, StaggerGroup, rise } from "./Reveal";
import { motion } from "motion/react";
import { WHOLESALE } from "@/lib/data";

export function WholesaleBeans() {
  return (
    <section id="wholesale-beans" className="bg-espresso py-24 text-cream-soft md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-amber-glow">Buy by the Sack</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
              Wholesale green coffee.
            </h2>
            <p className="mt-5 font-sans text-[15px] leading-relaxed text-cream-soft/65">
              Full-sack lots for cafés, roasters and large orders — priced for
              volume and shipped green or roasted to your spec.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-cream-soft/15 bg-bark-deep/40 px-5 py-4 font-mono text-[11px] uppercase tracking-wide text-cream-soft/60">
              Pricing starts at{" "}
              <span className="text-amber-glow">$800 / ton</span> · 70 lb sacks
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHOLESALE.map((w) => (
            <motion.article
              key={w.id}
              variants={rise}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-cream-soft/12 bg-bark-deep/30 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-amber-brand/40"
            >
              <div className="img-zoom relative aspect-[5/4] overflow-hidden bg-bark">
                <Img
                  id={w.img}
                  alt={`${w.name} — ${w.origin}`}
                  sizes="(max-width:768px) 90vw, 24vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-espresso/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-cream-soft backdrop-blur">
                  {w.grade}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-amber-glow/80">
                  <span>{w.origin}</span>
                  <span className="text-cream-soft/25">/</span>
                  <span className="text-cream-soft/45">{w.region}</span>
                </div>
                <h3 className="mt-2 font-display text-[1.5rem] font-medium leading-tight">
                  {w.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {w.notes.map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-cream-soft/15 px-2.5 py-1 font-sans text-[11px] text-cream-soft/70"
                    >
                      {n}
                    </span>
                  ))}
                </div>

                {/* Price block */}
                <div className="mt-auto pt-6">
                  <div className="flex items-baseline gap-1.5 border-t border-cream-soft/12 pt-5">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-cream-soft/45">
                      From
                    </span>
                    <span className="font-display text-3xl font-semibold text-cream-soft">
                      ${w.pricePerTon.toLocaleString()}
                    </span>
                    <span className="font-sans text-sm text-cream-soft/55">/ ton</span>
                  </div>
                  <p className="mt-1.5 font-sans text-[12px] text-cream-soft/50">
                    {w.bag} · min. order 70 lb
                  </p>
                  <Link
                    href="/wholesale"
                    className="ulink mt-4 inline-flex font-sans text-[13px] font-semibold text-amber-glow"
                  >
                    Request pricing →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
