import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BrewGuide } from "@/components/BrewGuide";
import { GrindChart } from "@/components/GrindChart";
import { CTA } from "@/components/CTA";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Coffee Guide · 24°N",
  description:
    "Dial-in starting points for pour-over, espresso, French press and cold brew, plus a grind chart and the water temperatures 24°N pours at.",
};

export default function GuidePage() {
  return (
    <>
      <PageHero
        crumb="Guide"
        eyebrow="Coffee Guide"
        title="Brew it like"
        accent="we do."
        subtitle="Starting points, not rules. Weigh your dose, mind your water temperature, and taste as you go — these recipes get a light single origin singing."
        image={IMG.pour}
      />
      <BrewGuide />
      <GrindChart />
      <CTA
        heading="Great gear deserves great beans."
        sub="Our light and medium single origins are built for clarity. Pick a bag and put these recipes to work."
        primary={{ label: "Shop the coffees", href: "/coffee" }}
        secondary={{ label: "Our story", href: "/about" }}
      />
    </>
  );
}
