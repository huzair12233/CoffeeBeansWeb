"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Img } from "./Img";
import { IMG } from "@/lib/images";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso text-cream-soft"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[70vh] w-[70vh] rounded-full bg-bark/40 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-teal/15 blur-[130px]" />
      </div>

      <div className="container-x relative z-10 grid w-full items-center gap-12 pt-28 pb-16 md:grid-cols-[1.05fr_0.95fr] md:pt-20">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="eyebrow mb-7 flex items-center gap-3 text-amber-glow"
          >
            <span className="h-px w-8 bg-amber-glow/60" />
            California · Single Origin · Small Batch
          </motion.p>

          <h1 className="display text-[clamp(2.9rem,8vw,6.2rem)]">
            <motion.span variants={item} className="block">
              Coffee grown
            </motion.span>
            <motion.span variants={item} className="block">
              at{" "}
              <span className="italic text-teal [font-variation-settings:'opsz'_120] [text-shadow:0_0_40px_rgba(14,140,134,0.35)]">
                altitude.
              </span>
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md font-sans text-[15px] leading-relaxed text-cream-soft/70"
          >
            Single-origin beans sourced from the world&apos;s high mountains and
            roasted in small batches on the Oakland waterfront — shipped within
            48 hours of the roast, never a day past peak.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/coffee" className="btn-amber">
              Shop the beans
            </Link>
            <Link
              href="/wholesale"
              className="btn border border-cream-soft/30 text-cream-soft hover:bg-cream-soft/10"
            >
              Wholesale inquiries →
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-8 border-t border-cream-soft/10 pt-7"
          >
            <Metric value="86+" label="Min. cup score" />
            <span className="h-8 w-px bg-cream-soft/15" />
            <Metric value="27" label="Origins / year" />
            <span className="h-8 w-px bg-cream-soft/15" />
            <Metric value="48h" label="Roast to door" />
          </motion.div>
        </motion.div>

        {/* Right — image stack */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.04, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.25 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[460px] md:max-w-none"
        >
          <div className="img-zoom relative h-full w-full overflow-hidden rounded-[2rem] ring-1 ring-cream-soft/10">
            <Img
              id={IMG.heroBeans}
              alt="Freshly roasted single-origin coffee beans"
              priority
              w={1200}
              h={1500}
              sizes="(max-width:768px) 90vw, 45vw"
              className="scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
          </div>

          {/* Floating caption chip — homage to pack labels */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="absolute -left-4 bottom-8 flex items-center gap-3 rounded-2xl border border-cream-soft/15 bg-espresso/80 px-5 py-4 backdrop-blur-md md:-left-10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-brand font-display text-base font-semibold text-espresso">
              24°
            </span>
            <div>
              <p className="font-display text-base leading-tight">Chelbesa</p>
              <p className="font-mono text-[10px] tracking-wide text-cream-soft/55">
                ETHIOPIA · NATURAL · 2,100M
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="eyebrow text-cream-soft/40">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-cream-soft/30" />
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-medium">{value}</p>
      <p className="mt-0.5 font-sans text-[11px] uppercase tracking-wide text-cream-soft/50">
        {label}
      </p>
    </div>
  );
}
