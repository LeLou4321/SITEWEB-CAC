import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos - Centre Auto Cameroun | Notre Histoire et Nos Valeurs',
  description: 'Découvrez l\'histoire et les valeurs de Centre Auto Cameroun, votre partenaire de confiance pour l\'entretien automobile depuis 2010. Qualité, expertise et innovation au service de votre véhicule.',
  keywords: [
    'centre auto cameroun histoire',
    'garage automobile yaoundé',
    'équipe mécanique douala',
    'valeurs centre automobile',
    'expertise auto cameroun',
    'centre entretien voiture',
    'réparation automobile qualité',
    'garage auto expérience',
    'centre auto transparent',
    'services automobile professionnels'
  ],
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À Propos - Centre Auto Cameroun',
    description: 'Votre partenaire de confiance pour tous vos besoins automobiles au Cameroun depuis 2010. Découvrez notre histoire et nos valeurs.',
    url: 'https://centreautocameroun.com/a-propos',
    images: [{ url: 'https://centreautocameroun.com/images/about-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À Propos - Centre Auto Cameroun',
    description: 'Votre partenaire automobile de confiance au Cameroun depuis 2010',
    images: ['https://centreautocameroun.com/images/about-og.jpg'],
  },
};

export default metadata;
