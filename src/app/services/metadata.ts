import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services Automobiles - Centre Auto Cameroun | Entretien et Réparation',
  description: 'Services professionnels d\'entretien et réparation automobile à Douala et Yaoundé. Géométrie, équilibrage, vidange, climatisation, freins, amortisseurs et plus encore.',
  keywords: [
    'services auto Cameroun',
    'entretien automobile Douala',
    'réparation voiture Yaoundé',
    'vidange huile moteur',
    'géométrie des roues',
    'équilibrage pneus',
    'réparation freins',
    'climatisation auto',
    'amortisseurs voiture',
    'diagnostic moteur'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services Automobiles - Centre Auto Cameroun',
    description: 'Découvrez nos services d\'entretien et de réparation automobile professionnels à Douala et Yaoundé.',
    url: 'https://centreautocameroun.com/services',
    images: [{ url: 'https://centreautocameroun.com/images/services-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services Automobiles - Centre Auto Cameroun',
    description: 'Services professionnels d\'entretien et réparation automobile à Douala et Yaoundé',
    images: ['https://centreautocameroun.com/images/services-og.jpg'],
  },
};

export default metadata;
