import Link from "next/link";
import { Img } from "./Img";
import { Reveal } from "./Reveal";

export function SplitFeature({
  eyebrow,
  title,
  body,
  image,
  href,
  linkLabel,
  reverse = false,
  bullets,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  href: string;
  linkLabel: string;
  reverse?: boolean;
  bullets?: string[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={`py-20 md:py-28 ${dark ? "bg-espresso text-cream-soft" : "bg-cream-soft text-ink"}`}
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-bark">
            <Img
              id={image}
              alt={title}
              sizes="(max-width:1024px) 90vw, 45vw"
            />
          </div>
        </Reveal>

        <div className={reverse ? "lg:order-1" : ""}>
          <Reveal>
            <p className={`eyebrow ${dark ? "text-amber-glow" : "text-teal-deep"}`}>
              {eyebrow}
            </p>
            <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.3rem)]">{title}</h2>
            <p
              className={`mt-5 max-w-md font-sans text-[15px] leading-relaxed ${
                dark ? "text-cream-soft/65" : "text-ink/60"
              }`}
            >
              {body}
            </p>
          </Reveal>

          {bullets && (
            <Reveal delay={0.08}>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className={`flex items-start gap-2.5 font-sans text-[14px] ${
                      dark ? "text-cream-soft/75" : "text-ink/70"
                    }`}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={0.12}>
            <Link
              href={href}
              className={`ulink mt-8 inline-flex font-sans text-sm font-semibold ${
                dark ? "text-amber-glow" : "text-espresso"
              }`}
            >
              {linkLabel} →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
