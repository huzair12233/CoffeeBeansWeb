import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Wholesale } from "@/components/Wholesale";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Wholesale · 24°N",
  description:
    "Partner with 24°N — direct-trade single origins, flexible cadence, barista training and private-label programs for cafés and offices across California.",
};

const STEPS = [
  {
    n: "01",
    t: "Request the catalogue",
    b: "Tell us about your café or program. We'll send current offerings, pricing and samples.",
  },
  {
    n: "02",
    t: "Dial in together",
    b: "We help you build a menu and dial in espresso and batch brew on your equipment.",
  },
  {
    n: "03",
    t: "Roast & deliver",
    b: "Standing orders roast to a schedule and arrive fresh — weekly, biweekly or on demand.",
  },
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        crumb="Wholesale"
        eyebrow="Partnerships"
        title="Pour 24°N at"
        accent="your counter."
        subtitle="Cafés, restaurants and offices across California serve our single origins for their consistency and traceability. Here's how a partnership works."
        image={IMG.sacks}
      />

      {/* How it works */}
      <section className="bg-cream-soft py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-teal-deep">How It Works</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.2rem)]">
              Three steps to pouring.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-ink/10 bg-cream p-8">
                  <span className="font-display text-4xl font-light text-amber-brand">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-medium">{s.t}</h3>
                  <p className="mt-2 font-sans text-[14px] leading-relaxed text-ink/60">
                    {s.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Wholesale />

      <CTA
        heading="Questions before you commit?"
        sub="We're a small team and we answer every inquiry ourselves. Reach out and we'll talk coffee, cadence and pricing."
        primary={{ label: "See the coffees", href: "/coffee" }}
        secondary={{ label: "Our story", href: "/about" }}
      />
    </>
  );
}
