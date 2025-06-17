import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produits Automobiles - Centre Auto Cameroun | Pneus, Lubrifiants, Batteries',
  description: 'Découvrez notre gamme complète de produits automobiles de qualité à Douala et Yaoundé. Pneus, lubrifiants, batteries, groupes électrogènes et accessoires pour tous vos besoins.',
  keywords: [
    'pneus Cameroun',
    'lubrifiants auto Douala',
    'batteries voiture Yaoundé',
    'groupes électrogènes Cameroun',
    'accessoires automobiles',
    'matériel piscine',
    'bétonnière Cameroun',
    'pièces détachées Bosch',
    'produits auto qualité',
    'centre auto produits'
  ],
  alternates: {
    canonical: '/produits',
  },
  openGraph: {
    title: 'Produits Automobiles - Centre Auto Cameroun',
    description: 'Large gamme de produits automobiles de qualité: pneus, lubrifiants, batteries et accessoires pour tous véhicules.',
    url: 'https://centreautocameroun.com/produits',
    images: [{ url: 'https://centreautocameroun.com/images/produits-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produits Automobiles - Centre Auto Cameroun',
    description: 'Large gamme de produits automobiles de qualité pour tous vos besoins',
    images: ['https://centreautocameroun.com/images/produits-og.jpg'],
  },
};

export default metadata;
