"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Img } from "./Img";

const ease = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  accent?: string; // optional italic teal word appended to the title
  subtitle: string;
  image: string; // filename in /public/images
  crumb: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-espresso pb-14 pt-36 text-cream-soft md:min-h-[68vh] md:pb-20">
      <div className="absolute inset-0">
        <Img id={image} alt="" priority sizes="100vw" className="scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/85 to-espresso/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 to-transparent" />
      </div>

      <div className="container-x relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-cream-soft/50"
        >
          <Link href="/" className="hover:text-amber-glow">
            Home
          </Link>
          <span className="text-cream-soft/30">/</span>
          <span className="text-amber-glow">{crumb}</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="eyebrow mb-5 flex items-center gap-3 text-amber-glow"
        >
          <span className="h-px w-8 bg-amber-glow/60" />
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.12 }}
          className="display max-w-3xl text-[clamp(2.6rem,7vw,5rem)]"
        >
          {title}
          {accent && <span className="italic text-teal"> {accent}</span>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.22 }}
          className="mt-6 max-w-xl font-sans text-[15.5px] leading-relaxed text-cream-soft/70"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
