import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conseils Automobiles - Centre Auto Cameroun | Guide Entretien et Maintenance',
  description: 'Découvrez nos conseils d\'experts pour l\'entretien et la maintenance de votre véhicule. Guides pratiques sur les pneus, la vidange, la sécurité et plus encore.',
  keywords: [
    'conseils auto Cameroun',
    'guide entretien voiture',
    'maintenance automobile',
    'choix pneus véhicule',
    'vidange régulière importance',
    'voyants tableau bord',
    'sécurité automobile',
    'conseils mécanicien',
    'blog automobile Cameroun',
    'astuces entretien voiture'
  ],
  alternates: {
    canonical: '/conseils',
  },
  openGraph: {
    title: 'Conseils Automobiles - Centre Auto Cameroun',
    description: 'Conseils d\'experts pour l\'entretien et la maintenance de votre véhicule. Guides pratiques sur les pneus, la vidange et la sécurité.',
    url: 'https://centreautocameroun.com/conseils',
    images: [{ url: 'https://centreautocameroun.com/images/conseils-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conseils Automobiles - Centre Auto Cameroun',
    description: 'Guides pratiques pour l\'entretien et la maintenance de votre véhicule',
    images: ['https://centreautocameroun.com/images/conseils-og.jpg'],
  },
};

export default metadata;
