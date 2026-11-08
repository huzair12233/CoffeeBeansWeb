import { Reveal } from "./Reveal";

const ROWS = [
  { grind: "Extra coarse", look: "Peppercorns", methods: "Cold brew" },
  { grind: "Coarse", look: "Sea salt", methods: "French press" },
  { grind: "Medium-coarse", look: "Rough sand", methods: "Chemex, Clever" },
  { grind: "Medium", look: "Beach sand", methods: "V60, drip, siphon" },
  { grind: "Medium-fine", look: "Fine sand", methods: "Pour-over, AeroPress" },
  { grind: "Fine", look: "Powdered sugar", methods: "Espresso, Moka" },
];

export function GrindChart() {
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-teal-deep">Reference</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.2rem)]">
            The grind chart.
          </h2>
          <p className="mt-5 font-sans text-[15px] leading-relaxed text-ink/60">
            Grind size is the biggest lever you have. When a cup tastes thin and
            sour, go finer; when it&apos;s harsh and bitter, go coarser.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-ink/10">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-bark text-cream-soft">
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-wide md:px-8">
                    Grind
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-wide md:px-8">
                    Looks like
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-wide md:px-8">
                    Brew methods
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr
                    key={r.grind}
                    className={`border-t border-ink/8 ${
                      i % 2 ? "bg-cream/40" : "bg-cream-soft"
                    }`}
                  >
                    <td className="px-5 py-4 font-display text-lg md:px-8">
                      {r.grind}
                    </td>
                    <td className="px-5 py-4 font-sans text-[14px] text-ink/65 md:px-8">
                      {r.look}
                    </td>
                    <td className="px-5 py-4 font-sans text-[14px] text-ink/65 md:px-8">
                      {r.methods}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
