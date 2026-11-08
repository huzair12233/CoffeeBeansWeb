import { Img } from "./Img";
import type { Product } from "@/lib/data";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-ink/8 bg-cream-soft transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(36,24,18,0.35)]">
      <div className="img-zoom relative aspect-[5/4] overflow-hidden bg-bark">
        <Img
          id={p.img}
          alt={`${p.name} — ${p.origin}`}
          w={760}
          h={610}
          sizes="(max-width:768px) 90vw, 30vw"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-full bg-cream-soft/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink backdrop-blur">
            {p.roast}
          </span>
          {p.reserve && (
            <span className="rounded-full bg-amber-brand px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-espresso">
              Reserve
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-teal">
          <span>{p.origin}</span>
          <span className="text-ink/25">/</span>
          <span className="text-ink/45">{p.region}</span>
        </div>

        <h3 className="mt-2 font-display text-[1.6rem] font-medium leading-tight">
          {p.name}
        </h3>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.notes.map((n) => (
            <span
              key={n}
              className="rounded-full border border-ink/12 px-2.5 py-1 font-sans text-[11px] text-ink/70"
            >
              {n}
            </span>
          ))}
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-y-1 border-t border-ink/8 pt-4 font-sans text-[12px] text-ink/55">
          <dt>Process</dt>
          <dd className="text-right text-ink/80">{p.process}</dd>
          <dt>Altitude</dt>
          <dd className="text-right text-ink/80">{p.altitude}</dd>
        </dl>

        <div className="mt-6 flex items-end justify-between">
          <p className="font-display text-2xl font-semibold">
            ${p.price}
            <span className="ml-1 font-sans text-xs font-normal text-ink/45">
              / {p.weight}
            </span>
          </p>
          <span className="ulink font-sans text-[13px] font-semibold text-espresso">
            Details →
          </span>
        </div>
      </div>
    </article>
  );
}
