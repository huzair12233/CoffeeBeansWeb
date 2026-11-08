import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are local (/public/images) and pre-sized; skip the optimizer so
    // they always render, with no dependency on an external host.
    unoptimized: true,
  },
};

export default nextConfig;
