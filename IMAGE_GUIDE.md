# 24°N — Image Slot Guide

Every photo on the site is a **local file in `public/images/`**. To change a slot,
replace the file **keeping the exact same filename** — the code points at the
filename, not a URL. No code changes needed.

- **Format:** `.jpg` (keep the `.jpg` extension and filename exactly).
- **Size:** long edge ~1500–2000px, compressed to roughly 150–500 KB.
- **Look:** warm, earthy, natural light; brown / cream / espresso tones to match
  the brand. Avoid cold blue-grey casts, heavy filters, text, or watermarks.
- The image optimizer is disabled (`next.config.ts → images.unoptimized`), so
  whatever you drop in is served as-is. Pre-crop to the aspect ratio below.

## Scene photos

| File | Used on | Aspect | Ideal subject |
|------|---------|--------|---------------|
| `hero-beans.jpg` | Home hero (portrait card) | 4:5 | Rich close-up of fresh **roasted beans**, moody warm light |
| `grinder.jpg` | /coffee hero bg · home Reserve spotlight bg | 16:9 (dimmed) | Beans / grinder / brewing scene that reads well very dark |
| `roasting.jpg` | /craft hero · Craft section · home craft split | 4:5 / 4:3 | **Roasting** — drum roaster or beans mid-roast, warm glow |
| `pour.jpg` | /guide hero · home guide split | 16:9 / 4:3 | **Pour-over** — gooseneck kettle pouring, steam |
| `barista.jpg` | /about Story image · home about split | 4:5 / 4:3 | Roaster/barista at work, hands, café atmosphere |
| `cafe.jpg` | /about hero bg | 16:9 (dimmed) | Specialty café interior / counter, warm |
| `farmland.jpg` | Origins (Colombia) · home origins split · grid | 4:3 | Coffee **farm hillside / plantation** landscape, green |
| `hillside.jpg` | Origins (Kenya) · /origins hero bg · grid | 16:9 / sq | Mountain coffee-growing hillside |
| `cherries.jpg` | Origins (Ethiopia) · grid | 1:1 / 4:3 | Ripe **red coffee cherries** on the branch *(current file is low-res — good one to replace)* |
| `sacks.jpg` | Origins (Guatemala) · /wholesale hero bg · grid | 16:9 / 4:3 | **Burlap sacks of green coffee** / warehouse |
| `plant.jpg` | Origins (Panama) · grid | 1:1 / 4:3 | Coffee **plant** — leaves and branches |
| `beans-scattered.jpg` | Origins (Brazil) · grid | 1:1 / 4:3 | Scattered roasted beans / beans in a bowl |
| `latte.jpg` | *(spare — not currently placed)* | 4:3 | Latte art cup, overhead |
| `interior.jpg` | *(spare — not currently placed)* | 16:9 | Roastery / café interior |

## Product photos (shown in cards at **5:4 landscape**)

Each should feel like a distinct coffee — a **coffee bag**, a scoop/bowl of
beans, or a styled flat-lay. Roasted lots = roasted beans; green lots =
**unroasted green beans** if possible.

| File | Coffee | Origin / process | Character to convey |
|------|--------|------------------|---------------------|
| `product-kiamugumo.jpg` | Kiamugumo AA | Kenya · washed | Bright, structured, blackcurrant |
| `product-chelbesa.jpg` | Chelbesa | Ethiopia · natural | Floral, blueberry, delicate |
| `product-el-injerto.jpg` | El Injerto | Guatemala · washed | Balanced, toffee, apple |
| `product-las-brisas.jpg` | Las Brisas **Geisha** | Panama · washed | Elegant, rare, light — the reserve |
| `product-finca-tamana.jpg` | Finca Tamaná | Colombia · honey | Sweet, caramel, plum |
| `product-cerro-azul.jpg` | Cerro Azul | Brazil · natural | Dark, cocoa, hazelnut |
| `product-yirgacheffe.jpg` | Yirgacheffe G1 | Ethiopia · **green** | Unroasted green beans, lemon/tea |
| `product-antigua.jpg` | Antigua Pastores | Guatemala · **green** | Unroasted green beans, cocoa/spice |
| `product-sidama.jpg` | Sidama Natural | Ethiopia · **green** | Unroasted green beans, strawberry |
| `product-supremo.jpg` | Supremo EP | Colombia · **green** | Unroasted green beans, clean/nutty |
