import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { FeaturedCoffees } from "@/components/FeaturedCoffees";
import { SplitFeature } from "@/components/SplitFeature";
import { Spotlight } from "@/components/Spotlight";
import { CTA } from "@/components/CTA";
import { IMG } from "@/lib/images";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedCoffees />

      <SplitFeature
        eyebrow="Origins · The Coffee Belt"
        title="A cup you can taste the map in."
        body="We follow the harvest around the world's high mountains — buying direct from farms where altitude, shade and soil shape every lot. Meet the sixteen farms behind this season's coffees."
        image={IMG.farmland}
        href="/origins"
        linkLabel="Explore the origins"
      />

      <Spotlight />

      <SplitFeature
        eyebrow="The Craft"
        title="From cherry to cup, calibrated."
        body="Every arrival is cupped, scored and roasted to a profile built for its density and altitude — logged to the tenth of a degree, then rested and shipped at peak."
        image={IMG.roasting}
        href="/craft"
        linkLabel="See how we roast"
        reverse
      />

      <SplitFeature
        eyebrow="Coffee Guide"
        title="Brew it like we do."
        body="Dialed-in starting points for pour-over, espresso, French press and cold brew — plus a grind chart and the water temperatures we pour at. Clarity in, clarity out."
        image={IMG.pour}
        href="/guide"
        linkLabel="Read the brew guide"
        tone="dark"
      />

      <SplitFeature
        eyebrow="Our Story"
        title="Built on the pursuit of altitude."
        body="From a small warehouse on the Oakland waterfront, we roast only what we've tasted — sourced in direct relationship with the farmers who grow it, since 2016."
        image={IMG.barista}
        href="/about"
        linkLabel="Read our story"
        reverse
      />

      <CTA
        heading="Pour ALTA at your counter."
        sub="Cafés, restaurants and offices across California partner with us for consistent, traceable single origins. Request the current wholesale catalogue."
        primary={{ label: "Wholesale inquiries", href: "/wholesale" }}
        secondary={{ label: "Shop retail", href: "/coffee" }}
      />
    </>
  );
}
