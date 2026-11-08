"use client";

import { Reveal, StaggerGroup, rise } from "./Reveal";
import { motion } from "motion/react";
import { BREWS } from "@/lib/data";

export function BrewGuide() {
  return (
    <section id="guide" className="bg-bark py-24 text-cream-soft md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-amber-glow">Coffee Guide</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
              Brew it like we do.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-sans text-[14px] leading-relaxed text-cream-soft/60">
              Starting points, not rules. Weigh your dose, mind your water
              temperature (94–96°C), and taste as you go.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BREWS.map((b) => (
            <motion.article
              key={b.method}
              variants={rise}
              className="group rounded-[1.5rem] border border-cream-soft/15 bg-bark-deep/40 p-7 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-amber-brand/40 hover:bg-bark-deep/70"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-2xl font-medium">{b.method}</h3>
                <span className="font-mono text-sm text-amber-glow">
                  {b.ratio}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-y-3 border-t border-cream-soft/12 pt-5 font-mono text-[11px] uppercase tracking-wide text-cream-soft/50">
                <span>Grind</span>
                <span className="text-right text-cream-soft/85">{b.grind}</span>
                <span>Time</span>
                <span className="text-right text-cream-soft/85">{b.time}</span>
              </div>

              <p className="mt-5 font-sans text-[13.5px] leading-relaxed text-cream-soft/60">
                {b.blurb}
              </p>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
