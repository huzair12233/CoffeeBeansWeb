"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Img } from "./Img";
import { Reveal } from "./Reveal";
import { ORIGINS } from "@/lib/data";
import { IMG } from "@/lib/images";

const ORIGIN_IMG = [
  IMG.cherries, // Ethiopia
  IMG.hillside, // Kenya
  IMG.farmland, // Colombia
  IMG.sacks, // Guatemala
  IMG.plant, // Panama
  IMG.beansScattered, // Brazil
];

export function Origins() {
  const [active, setActive] = useState(0);

  return (
    <section id="origins" className="relative overflow-hidden bg-espresso py-24 text-cream-soft md:py-32">
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[50vh] w-[50vh] rounded-full bg-teal/10 blur-[130px]" />

      <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        {/* Left — copy + list */}
        <div>
          <Reveal>
            <p className="eyebrow text-amber-glow">Origins · The Coffee Belt</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">
              Distinct flavor notes
              <br />
              from each terroir.
            </h2>
            <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-cream-soft/60">
              We follow the harvest around the 24th parallel and beyond —
              buying direct from farms where altitude, shade and soil shape a
              cup you can taste the map in.
            </p>
          </Reveal>

          <ul className="mt-10">
            {ORIGINS.map((o, i) => (
              <li key={o.country}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex w-full items-center justify-between gap-4 border-t border-cream-soft/12 py-4 text-left transition-colors last:border-b"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-amber-glow/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-2xl transition-all duration-300 md:text-3xl ${
                        active === i
                          ? "translate-x-1 text-cream-soft"
                          : "text-cream-soft/55"
                      }`}
                    >
                      {o.country}
                    </span>
                  </span>
                  <span className="hidden text-right sm:block">
                    <span className="block font-mono text-sm text-teal">
                      {o.coords}
                    </span>
                    <span className="block font-sans text-[11px] text-cream-soft/45">
                      {o.note}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — swapping image */}
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-1 ring-cream-soft/10 md:aspect-square">
            <AnimatePresence mode="sync">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Img
                  id={ORIGIN_IMG[active]}
                  alt={`${ORIGINS[active].country} coffee origin`}
                  w={1100}
                  h={1100}
                  sizes="(max-width:1024px) 90vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[11px] tracking-eyebrow text-amber-glow">
                  {ORIGINS[active].coords}
                </p>
                <p className="font-display text-3xl">{ORIGINS[active].country}</p>
              </div>
              <span className="font-mono text-[11px] text-cream-soft/60">
                {ORIGINS[active].note}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
