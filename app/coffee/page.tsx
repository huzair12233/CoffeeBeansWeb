import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Collection } from "@/components/Collection";
import { Spotlight } from "@/components/Spotlight";
import { CTA } from "@/components/CTA";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Coffee · ALTA",
  description:
    "Shop ALTA's rotating single-origin coffees — roasted and ready, or green for home roasters. Each lot traced to a farm and scored above 86 points.",
};

export default function CoffeePage() {
  return (
    <>
      <PageHero
        crumb="Coffee"
        eyebrow="The Collection"
        title="Single origins,"
        accent="in season."
        subtitle="Rotating micro-lots, each roasted to a profile built for its origin. Buy them roasted and ready, or green for your own setup — every lot traceable to the farm that grew it."
        image={IMG.grinder}
      />
      <Collection />
      <Spotlight />
      <CTA
        heading="Not sure where to start?"
        sub="Tell us how you brew and what you like, and we'll point you to the right bag — or set you up on a rotating subscription."
        primary={{ label: "Read the brew guide", href: "/guide" }}
        secondary={{ label: "Explore origins", href: "/origins" }}
      />
    </>
  );
}
