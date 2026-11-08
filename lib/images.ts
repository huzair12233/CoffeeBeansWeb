// Local coffee photography served from /public/images.
// Swap any file in that folder (keep the same filename) to change a slot —
// see IMAGE_GUIDE.md for what each slot should contain.
export function photo(file: string): string {
  return `/images/${file}`;
}

export const IMG = {
  heroBeans: "hero-beans.jpg",
  grinder: "grinder.jpg",
  roasting: "roasting.jpg",
  pour: "pour.jpg",
  latte: "latte.jpg",
  barista: "barista.jpg",
  cafe: "cafe.jpg",
  interior: "interior.jpg",
  farmland: "farmland.jpg",
  hillside: "hillside.jpg",
  cherries: "cherries.jpg",
  sacks: "sacks.jpg",
  plant: "plant.jpg",
  beansScattered: "beans-scattered.jpg",
} as const;
