import { Img } from "./Img";
import { Reveal } from "./Reveal";
import { PROCESS } from "@/lib/data";
import { IMG } from "@/lib/images";

export function Craft() {
  return (
    <section id="craft" className="bg-cream-soft py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left — image column (sticky on desktop) */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow text-teal-deep">The Craft</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
              From cherry to cup, calibrated.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="img-zoom relative mt-8 aspect-[4/5] overflow-hidden rounded-[2rem] bg-bark">
              <Img
                id={IMG.roasting}
                alt="Roasting coffee to a calibrated profile"
                w={900}
                h={1125}
                sizes="(max-width:1024px) 90vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
              {/* Precision card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-cream-soft/20 bg-espresso/75 p-5 backdrop-blur-md">
                <div className="flex items-center gap-2 text-amber-glow">
                  <GaugeIcon />
                  <span className="font-display text-lg text-cream-soft">
                    Precision
                  </span>
                </div>
                <p className="mt-2 font-sans text-[13px] leading-relaxed text-cream-soft/70">
                  Roast profiles are dialed to the tenth of a degree and logged
                  for every batch — consistent cup quality, every single time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — steps */}
        <div>
          {PROCESS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="flex gap-6 border-t border-ink/10 py-8 first:border-t-0 first:pt-0">
                <span className="font-display text-4xl font-light text-amber-brand md:text-5xl">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium md:text-[1.7rem]">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md font-sans text-[15px] leading-relaxed text-ink/60">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GaugeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M12 15l4-4" />
      <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
