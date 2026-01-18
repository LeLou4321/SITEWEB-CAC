import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    // Ignore TypeScript errors during production build (Netlify)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
