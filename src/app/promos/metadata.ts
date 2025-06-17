import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promotions - Centre Auto Cameroun | Offres Spéciales Automobile',
  description: 'Profitez de nos promotions exclusives sur les pneus, vidanges et diagnostics automobiles. Économisez sur l\'entretien et la réparation de votre véhicule à Douala et Yaoundé.',
  keywords: [
    'promotions auto Cameroun',
    'offres spéciales pneus',
    'réduction vidange voiture',
    'diagnostic automobile gratuit',
    'promo entretien auto',
    'remise garage Douala',
    'offres centre auto Yaoundé',
    'économies réparation voiture',
    'promotions mécanicien',
    'deals centre automobile'
  ],
  alternates: {
    canonical: '/promos',
  },
  openGraph: {
    title: 'Promotions - Centre Auto Cameroun',
    description: 'Découvrez nos offres exclusives et économisez sur l\'entretien et la réparation de votre véhicule.',
    url: 'https://centreautocameroun.com/promos',
    images: [{ url: 'https://centreautocameroun.com/images/promos-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promotions - Centre Auto Cameroun',
    description: 'Offres spéciales sur les services automobiles au Cameroun',
    images: ['https://centreautocameroun.com/images/promos-og.jpg'],
  },
};

export default metadata;
