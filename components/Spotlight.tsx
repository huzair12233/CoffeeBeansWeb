import Link from "next/link";
import { Img } from "./Img";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";

export function Spotlight() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-bark-darker text-cream-soft">
      <div className="absolute inset-0">
        <Img
          id={IMG.grinder}
          alt="Reserve single-origin coffee"
          w={1800}
          h={1200}
          q={70}
          sizes="100vw"
          className="scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/70 to-espresso/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
      </div>

      <div className="container-x relative z-10 py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-brand/40 bg-amber-brand/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wide text-amber-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-glow" />
            Reserve Micro-Lot · 42 bags only
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="display mt-6 max-w-2xl text-[clamp(2.6rem,7vw,5.2rem)]">
            Las Brisas{" "}
            <span className="italic text-teal">Geisha.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 max-w-lg font-sans text-[15.5px] leading-relaxed text-cream-soft/70">
            Grown at 1,700 metres in the volcanic highlands of Boquete, Panama.
            A washed Geisha of startling clarity — bergamot and white peach
            lifting into a long, honeyed finish. The rarest cup we pour.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            {[
              ["Bergamot", "White Peach", "Honey"],
            ][0].map((n) => (
              <span
                key={n}
                className="font-display text-xl text-cream-soft/85 after:ml-8 after:text-amber-glow/50 after:content-['·'] last:after:content-['']"
              >
                {n}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/coffee" className="btn-amber">
              Reserve a bag · $42
            </Link>
            <span className="font-mono text-xs text-cream-soft/50">
              8 oz · whole bean · ships Monday
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
