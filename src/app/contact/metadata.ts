import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Centre Auto Cameroun | Nos agences à Douala, Yaoundé, Bafoussam',
  description: 'Contactez Centre Auto Cameroun pour tous vos besoins automobiles. Formulaire de contact, coordonnées et adresses de nos agences à Yaoundé, Douala, Bafoussam et Ngaoundéré.',
  keywords: [
    'contact Centre Auto Cameroun',
    'agence auto Yaoundé',
    'garage automobile Douala',
    'centre auto Bafoussam',
    'service client automobile',
    'devis réparation voiture',
    'adresse centre auto',
    'numéro téléphone garage',
    'email centre automobile',
    'horaires garage auto Cameroun'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact - Centre Auto Cameroun',
    description: 'Contactez-nous pour tous vos besoins automobiles. Nos équipes sont à votre service dans nos agences de Yaoundé, Douala, Bafoussam et Ngaoundéré.',
    url: 'https://centreautocameroun.com/contact',
    images: [{ url: 'https://centreautocameroun.com/images/contact-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Centre Auto Cameroun',
    description: 'Contactez-nous pour tous vos besoins automobiles au Cameroun',
    images: ['https://centreautocameroun.com/images/contact-og.jpg'],
  },
};

export default metadata;
