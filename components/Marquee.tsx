const WORDS = [
  "Ethiopia",
  "Single Origin",
  "Kenya",
  "Small Batch",
  "Colombia",
  "Roasted in Oakland",
  "Guatemala",
  "Shipped in 48h",
  "Panama Geisha",
  "Traceable",
  "Brazil",
  "High Altitude",
];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-amber-brand/20 bg-bark py-5 text-cream-soft"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-xl font-light tracking-tight md:text-2xl">
              {w}
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 shrink-0 fill-amber-glow"
              aria-hidden
            >
              <path d="M12 2c2.5 2.5 2.5 6 0 8-2.5 2-2.5 5.5 0 8-5 0-8-3.6-8-8s3-8 8-8z" />
            </svg>
          </span>
        ))}
      </div>
    </section>
  );
}
