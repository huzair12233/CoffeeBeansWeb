"use client";

import Link from "next/link";
import { Img } from "./Img";
import { Reveal } from "./Reveal";
import { StaggerGroup, rise } from "./Reveal";
import { motion } from "motion/react";
import { STATS } from "@/lib/data";
import { IMG } from "@/lib/images";

export function Story() {
  return (
    <section id="story" className="bg-cream py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-bark">
              <Img
                id={IMG.barista}
                alt="Roaster at work in the Oakland roastery"
                sizes="(max-width:1024px) 90vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-56 rotate-2 rounded-2xl border border-ink/10 bg-cream-soft p-5 shadow-xl sm:block">
              <p className="font-mono text-[10px] uppercase tracking-wide text-teal">
                Est. 2016
              </p>
              <p className="mt-2 font-display text-lg leading-snug">
                Jack London Square, Oakland, CA
              </p>
            </div>
          </div>
        </Reveal>

        {/* Narrative */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow text-teal-deep">Our Story</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
              A roastery named for the coffee belt.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 font-sans text-[15px] leading-relaxed text-ink/65">
              <p>
                24°N began with a simple obsession: the 24th parallel traces the
                upper edge of the coffee belt, where high altitude and tropical
                latitude slow the cherries and build the most intricate cups.
                We named ourselves for it.
              </p>
              <p>
                From a small warehouse on the Oakland waterfront, we roast only
                what we&apos;ve tasted, sourced in direct relationship with the
                farmers who grow it. No blends of convenience, no commodity
                lots. Just high-grown single origins, roasted with intent and
                sent to you at their peak.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8 flex items-center gap-4">
              <Link href="/wholesale" className="btn-ink">
                Partner with us
              </Link>
              <Link href="/guide" className="ulink font-sans text-sm font-semibold">
                Read the brew guide →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stats band */}
      <StaggerGroup className="container-x mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink/10 md:grid-cols-4">
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={rise}
            className="bg-cream-soft px-6 py-10 text-center"
          >
            <p className="font-display text-[clamp(2.4rem,5vw,3.4rem)] font-light text-bark">
              {s.value}
            </p>
            <p className="mt-2 font-sans text-[12.5px] leading-snug text-ink/55">
              {s.label}
            </p>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
}
