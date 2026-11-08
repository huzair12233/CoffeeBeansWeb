"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProductCard } from "./ProductCard";
import { ROASTED, GREEN } from "@/lib/data";
import { Reveal } from "./Reveal";

const TABS = [
  { key: "roasted", label: "Roasted Beans", data: ROASTED },
  { key: "green", label: "Green Beans", data: GREEN },
] as const;

export function Collection() {
  const [tab, setTab] = useState<"roasted" | "green">("roasted");
  const active = TABS.find((t) => t.key === tab)!;

  return (
    <section id="collection" className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-teal-deep">The Collection</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
              This season&apos;s single origins
            </h2>
            <p className="mt-5 font-sans text-[15px] leading-relaxed text-ink/60">
              Rotating micro-lots, each roasted to a profile built for its
              origin. Buy them roasted and ready, or green for your own setup.
            </p>
          </Reveal>

          {/* Toggle */}
          <Reveal delay={0.1}>
            <div className="relative inline-flex rounded-full border border-ink/15 bg-cream-soft p-1">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className="relative z-10 rounded-full px-5 py-2.5 font-sans text-sm font-semibold transition-colors duration-300"
                  style={{ color: tab === t.key ? "#FBF7EE" : "#221B14" }}
                >
                  {t.label}
                </button>
              ))}
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-y-1 z-0 rounded-full bg-bark"
                style={{
                  left: tab === "roasted" ? "0.25rem" : "50%",
                  right: tab === "roasted" ? "50%" : "0.25rem",
                }}
              />
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {active.data.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
