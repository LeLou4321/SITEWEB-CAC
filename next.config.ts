import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    // Désactiver l’échec du build si des erreurs ESLint sont détectées
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during production build (Netlify)
    ignoreBuildErrors: true,
  },
  output: 'export', // Génère une version statique pour Netlify
};

export default nextConfig;
