import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "24°N · California Single-Origin Coffee Roasters",
  description:
    "24°N roasts high-grown single-origin coffee in small batches on the Oakland waterfront — traceable beans sourced direct from farms along the coffee belt, shipped within 48 hours of the roast.",
  keywords: [
    "specialty coffee",
    "single origin",
    "California coffee roaster",
    "Oakland coffee",
    "direct trade",
  ],
  openGraph: {
    title: "24°N · California Single-Origin Coffee Roasters",
    description:
      "High-grown single-origin coffee, roasted in small batches on the Oakland waterfront.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#241812",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable} ${mono.variable}`}>
      <body className="grain font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
