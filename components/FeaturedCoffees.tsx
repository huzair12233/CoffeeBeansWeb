import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";
import { ROASTED } from "@/lib/data";

export function FeaturedCoffees() {
  const featured = ROASTED.slice(0, 3);
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-teal-deep">This Week&apos;s Roasts</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
              Fresh off the roaster.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/coffee"
              className="ulink font-sans text-sm font-semibold text-espresso"
            >
              View the full collection →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
