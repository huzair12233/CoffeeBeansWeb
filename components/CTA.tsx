import Link from "next/link";
import { Reveal } from "./Reveal";

export function CTA({
  heading,
  sub,
  primary,
  secondary,
}: {
  heading: string;
  sub: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-bark px-8 py-16 text-cream-soft md:px-16 md:py-20">
          <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-[60vh] w-[60vh] rounded-full bg-amber-brand/15 blur-[120px]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="display text-[clamp(2rem,4.5vw,3.2rem)]">{heading}</h2>
              <p className="mt-4 font-sans text-[15px] leading-relaxed text-cream-soft/70">
                {sub}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <Link href={primary.href} className="btn-amber">
                {primary.label}
              </Link>
              {secondary && (
                <Link
                  href={secondary.href}
                  className="btn border border-cream-soft/30 text-cream-soft hover:bg-cream-soft/10"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
