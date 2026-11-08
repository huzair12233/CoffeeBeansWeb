import { Img } from "./Img";
import { Reveal } from "./Reveal";
import { ORIGINS } from "@/lib/data";
import { IMG } from "@/lib/images";

const ORIGIN_IMG = [
  IMG.cherries,
  IMG.hillside,
  IMG.farmland,
  IMG.sacks,
  IMG.plant,
  IMG.beansScattered,
];

export function OriginGrid() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-teal-deep">Sourcing Map</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.2rem)]">
            Where the beans come from.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ORIGINS.map((o, i) => (
            <Reveal key={o.country} delay={(i % 3) * 0.08}>
              <article className="group overflow-hidden rounded-[1.5rem] border border-ink/8 bg-cream-soft">
                <div className="img-zoom relative aspect-[4/3] overflow-hidden bg-bark">
                  <Img
                    id={ORIGIN_IMG[i]}
                    alt={`${o.country} coffee origin`}
                    sizes="(max-width:768px) 90vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-mono text-[11px] tracking-eyebrow text-amber-glow">
                    {o.coords}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{o.country}</h3>
                  <p className="mt-1.5 font-sans text-[13.5px] text-ink/55">
                    {o.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
