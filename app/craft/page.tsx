import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Craft } from "@/components/Craft";
import { CTA } from "@/components/CTA";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Craft · ALTA",
  description:
    "How ALTA sources, cups, roasts and ships — profiles calibrated to each origin's altitude and density, logged for every batch and shipped within 48 hours.",
};

export default function CraftPage() {
  return (
    <>
      <PageHero
        crumb="Craft"
        eyebrow="Sourcing to Shipping"
        title="Roasted with"
        accent="intent."
        subtitle="No blends of convenience, no commodity lots. Just high-grown single origins, cupped and scored on arrival, roasted to a profile built for the bean, and sent to you at peak freshness."
        image={IMG.roasting}
      />
      <Craft />
      <CTA
        heading="Freshness you can taste."
        sub="Beans degas for a precise window, then ship within two days of the roast. You brew coffee at its peak, never a day past."
        primary={{ label: "Shop fresh roasts", href: "/coffee" }}
        secondary={{ label: "Meet the farms", href: "/origins" }}
      />
    </>
  );
}
