import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Origins } from "@/components/Origins";
import { OriginGrid } from "@/components/OriginGrid";
import { CTA } from "@/components/CTA";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Origins · ALTA",
  description:
    "ALTA sources high-grown single origins direct from farms along the coffee belt — Ethiopia, Kenya, Colombia, Guatemala, Panama and Brazil.",
};

export default function OriginsPage() {
  return (
    <>
      <PageHero
        crumb="Origins"
        eyebrow="The Coffee Belt"
        title="A cup you can"
        accent="taste the map in."
        subtitle="Altitude slows the cherry and concentrates the sugars. We follow the harvest to the world's high mountains and buy direct — paying above Fair Trade for the lots that earn it."
        image={IMG.hillside}
      />
      <Origins />
      <OriginGrid />
      <CTA
        heading="Taste the difference altitude makes."
        sub="Every bag names its farm, region and elevation. Start with a light natural or a washed classic and taste the terroir for yourself."
        primary={{ label: "Shop the coffees", href: "/coffee" }}
        secondary={{ label: "How we roast", href: "/craft" }}
      />
    </>
  );
}
