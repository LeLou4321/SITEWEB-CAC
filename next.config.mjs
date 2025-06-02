/** @type {import('next').NextConfig} */
const nextConfig = {
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
      // Désactiver ESLint pendant le build pour permettre le déploiement
      ignoreDuringBuilds: true,
    },
    typescript: {
      // Ignore TypeScript errors during production builds
      ignoreBuildErrors: true,
    },
    output: 'export', // Génère une version statique pour Netlify
    distDir: 'out', // Dossier de sortie pour le build statique
  };
  
  export default nextConfig;