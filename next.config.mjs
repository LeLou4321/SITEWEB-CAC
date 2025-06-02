/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
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
  };
  
  export default nextConfig;