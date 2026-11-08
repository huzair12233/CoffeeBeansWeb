import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Earthy brand palette derived from the reference art direction
        bark: {
          DEFAULT: "#6B4518", // saddle/olive brown nav + bands
          deep: "#4A2F10",
          darker: "#2E1D0A",
        },
        espresso: "#241812",
        cream: {
          DEFAULT: "#F4EDDF", // warm paper
          soft: "#FBF7EE",
          deep: "#E8DCC6",
        },
        teal: {
          DEFAULT: "#0E8C86", // the "24°N Coffee" pop
          deep: "#0A635F",
        },
        amber: {
          brand: "#E3A008", // refined gold accent (premium alt to acid yellow)
          glow: "#F6C65B",
        },
        ink: "#221B14",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        container: "1280px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "15%": { opacity: "0.5" },
          "50%": { transform: "translateY(-32px) scaleX(1.4)", opacity: "0.2" },
          "100%": { transform: "translateY(-64px) scaleX(1)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        steam: "steam 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
