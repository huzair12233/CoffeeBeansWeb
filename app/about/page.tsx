import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Story } from "@/components/Story";
import { CTA } from "@/components/CTA";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "About · 24°N",
  description:
    "24°N is a small-batch coffee roastery on the Oakland waterfront, built on the pursuit of altitude and direct relationships with the farmers who grow our coffee.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Est. 2016 · Oakland, CA"
        title="A roastery built on"
        accent="altitude."
        subtitle="The higher coffee grows, the slower the cherries mature — and the more intricate the cup becomes. We named ourselves for it, and we've built everything around it."
        image={IMG.cafe}
      />
      <Story />
      <CTA
        heading="Come taste what we mean."
        sub="Every bag we ship is coffee we've tasted, sourced in relationship and roasted at peak. Start with this week's roasts."
        primary={{ label: "Shop the coffees", href: "/coffee" }}
        secondary={{ label: "Wholesale", href: "/wholesale" }}
      />
    </>
  );
}
