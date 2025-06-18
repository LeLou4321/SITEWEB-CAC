import { MetadataRoute } from 'next';

// Liste des routes statiques du site
const routes = [
  '',
  '/produits',
  '/services',
  '/a-propos',
  '/about',
  '/contact',
  '/conseils',
  '/promos',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://centreautocameroun.com';
  
  // Création des entrées de sitemap pour les routes statiques
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [
    ...staticRoutes,
    // Vous pouvez ajouter des routes dynamiques ici si nécessaire
    // Par exemple, pour les articles de blog ou les produits
  ];
}
