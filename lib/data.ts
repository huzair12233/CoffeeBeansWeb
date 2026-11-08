export type Roast = "Light" | "Light–Medium" | "Medium" | "Medium–Dark";

export interface Product {
  id: string;
  name: string;
  origin: string;
  region: string;
  altitude: string;
  process: string;
  roast: Roast;
  notes: string[];
  price: number;
  weight: string;
  img: string; // unsplash id
  reserve?: boolean;
}

export const ROASTED: Product[] = [
  {
    id: "kiamugumo",
    name: "Kiamugumo AA",
    origin: "Kenya",
    region: "Nyeri",
    altitude: "1,800 m",
    process: "Washed",
    roast: "Light–Medium",
    notes: ["Blackcurrant", "Hibiscus", "Cane Sugar"],
    price: 24,
    weight: "12 oz",
    img: "product-kiamugumo.jpg",
  },
  {
    id: "chelbesa",
    name: "Chelbesa",
    origin: "Ethiopia",
    region: "Gedeb, Yirgacheffe",
    altitude: "2,100 m",
    process: "Natural",
    roast: "Light",
    notes: ["Blueberry", "Jasmine", "Dark Chocolate"],
    price: 26,
    weight: "12 oz",
    img: "product-chelbesa.jpg",
  },
  {
    id: "el-injerto",
    name: "El Injerto",
    origin: "Guatemala",
    region: "Huehuetenango",
    altitude: "1,650 m",
    process: "Washed",
    roast: "Medium",
    notes: ["Red Apple", "Toffee", "Almond"],
    price: 23,
    weight: "12 oz",
    img: "product-el-injerto.jpg",
  },
  {
    id: "las-brisas",
    name: "Las Brisas Geisha",
    origin: "Panama",
    region: "Boquete",
    altitude: "1,700 m",
    process: "Washed",
    roast: "Light",
    notes: ["Bergamot", "White Peach", "Honey"],
    price: 42,
    weight: "8 oz",
    img: "product-las-brisas.jpg",
    reserve: true,
  },
  {
    id: "finca-tamana",
    name: "Finca Tamana",
    origin: "Colombia",
    region: "Huila",
    altitude: "1,750 m",
    process: "Honey",
    roast: "Medium",
    notes: ["Caramel", "Plum", "Orange Zest"],
    price: 22,
    weight: "12 oz",
    img: "product-finca-tamana.jpg",
  },
  {
    id: "cerro-azul",
    name: "Cerro Azul",
    origin: "Brazil",
    region: "Cerrado Mineiro",
    altitude: "1,150 m",
    process: "Natural",
    roast: "Medium–Dark",
    notes: ["Cocoa", "Hazelnut", "Brown Sugar"],
    price: 20,
    weight: "12 oz",
    img: "product-cerro-azul.jpg",
  },
];

export const GREEN: Product[] = [
  {
    id: "yirga-g1",
    name: "Yirgacheffe G1",
    origin: "Ethiopia",
    region: "Gedeo Zone",
    altitude: "1,950 m",
    process: "Washed",
    roast: "Light",
    notes: ["Lemon", "Floral", "Tea-like"],
    price: 16,
    weight: "per lb",
    img: "product-yirgacheffe.jpg",
  },
  {
    id: "antigua-green",
    name: "Antigua Pastores",
    origin: "Guatemala",
    region: "Antigua Valley",
    altitude: "1,600 m",
    process: "Washed",
    roast: "Medium",
    notes: ["Cocoa", "Spice", "Balanced"],
    price: 13,
    weight: "per lb",
    img: "product-antigua.jpg",
  },
  {
    id: "sidama-nat",
    name: "Sidama Natural",
    origin: "Ethiopia",
    region: "Sidama",
    altitude: "1,900 m",
    process: "Natural",
    roast: "Light",
    notes: ["Strawberry", "Wine", "Sweet"],
    price: 15,
    weight: "per lb",
    img: "product-sidama.jpg",
  },
  {
    id: "supremo-green",
    name: "Supremo EP",
    origin: "Colombia",
    region: "Nariño",
    altitude: "1,800 m",
    process: "Washed",
    roast: "Medium",
    notes: ["Caramel", "Nutty", "Clean"],
    price: 12,
    weight: "per lb",
    img: "product-supremo.jpg",
  },
];

export interface Origin {
  country: string;
  coords: string;
  note: string;
  // position on the decorative world strip, in %
  x: number;
  y: number;
}

export const ORIGINS: Origin[] = [
  { country: "Ethiopia", coords: "6.8°N", note: "Heirloom · the birthplace", x: 57, y: 55 },
  { country: "Kenya", coords: "0.5°S", note: "SL28 · bright & structured", x: 59, y: 62 },
  { country: "Colombia", coords: "4.6°N", note: "Huila · balanced & sweet", x: 27, y: 58 },
  { country: "Guatemala", coords: "15.8°N", note: "Volcanic · dense & complex", x: 21, y: 47 },
  { country: "Panama", coords: "8.5°N", note: "Geisha country", x: 25, y: 53 },
  { country: "Brazil", coords: "15.8°S", note: "Cerrado · chocolatey", x: 34, y: 72 },
];

export interface Step {
  n: string;
  title: string;
  body: string;
}

export const PROCESS: Step[] = [
  {
    n: "01",
    title: "Source at origin",
    body: "We buy in relationship, not commodity. Every lot is traced to a farm, a washing station, a name — and paid above Fair Trade.",
  },
  {
    n: "02",
    title: "Cup & score",
    body: "Each arrival is cupped blind and scored on the SCA scale. Only lots above 86 points earn a place on the shelf.",
  },
  {
    n: "03",
    title: "Roast to profile",
    body: "Profiles are calibrated to each origin's altitude and density on our Loring Smart Roast — development dialed to the tenth of a degree.",
  },
  {
    n: "04",
    title: "Rest & ship in 48h",
    body: "Beans degas for a precise window, then ship within two days of roasting. You brew coffee at its peak, never a day past.",
  },
];

export interface Brew {
  method: string;
  ratio: string;
  grind: string;
  time: string;
  blurb: string;
}

export const BREWS: Brew[] = [
  {
    method: "Pour-Over",
    ratio: "1:16",
    grind: "Medium-fine",
    time: "3:00",
    blurb: "Clarity and florals. Our house method for light single origins.",
  },
  {
    method: "Espresso",
    ratio: "1:2",
    grind: "Fine",
    time: "0:28",
    blurb: "Syrupy and intense. Dial in with 18 g in, 36 g out.",
  },
  {
    method: "French Press",
    ratio: "1:15",
    grind: "Coarse",
    time: "4:00",
    blurb: "Full body, heavy mouthfeel. Forgiving and rich.",
  },
  {
    method: "Cold Brew",
    ratio: "1:8",
    grind: "Extra-coarse",
    time: "16h",
    blurb: "Low acidity, smooth and sweet. Steep overnight, serve over ice.",
  },
];

export const NAV = [
  { label: "Coffee", href: "/coffee" },
  { label: "Origins", href: "/origins" },
  { label: "Craft", href: "/craft" },
  { label: "Guide", href: "/guide" },
  { label: "About", href: "/about" },
  { label: "Wholesale", href: "/wholesale" },
];

export const STATS = [
  { value: "27", label: "Single origins sourced this year" },
  { value: "86+", label: "Minimum cupping score, SCA" },
  { value: "48h", label: "From roast to your doorstep" },
  { value: "1,800m", label: "Average growing altitude" },
];
