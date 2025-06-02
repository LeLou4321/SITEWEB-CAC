import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'centreautocameroun.netlify.app',
      },
    ],
    domains: ['centreautocameroun.netlify.app'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
  distDir: 'out', // Dossier de sortie pour le build statique
};

export default nextConfig;
