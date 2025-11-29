import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { organizationSchema, servicesSchema, productsSchema, siteNavigationSchema, breadcrumbSchema } from './schema';

export const metadata: Metadata = {
  title: 'Centre Auto Cameroun',
  description: 'Votre partenaire de confiance pour tous vos besoins automobiles au Cameroun. Services d\'entretien, réparation, pneus et accessoires.',
  keywords: 'centre auto, automobile, entretien voiture, réparation, pneus, Cameroun, Douala, Yaoundé',
  authors: [{ name: 'Centre Auto Cameroun' }],
  creator: 'Centre Auto Cameroun',
  publisher: 'Centre Auto Cameroun',
  metadataBase: new URL('https://centreautocameroun.com'),
  icons: {
    icon: '/icon.jpg',
    apple: '/apple-icon.jpg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Centre Auto Cameroun - Services Automobiles Professionnels',
    description: 'Votre partenaire de confiance pour tous vos besoins automobiles au Cameroun. Entretien, réparation, pneus et accessoires.',
    url: 'https://centreautocameroun.com',
    siteName: 'Centre Auto Cameroun',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://centreautocameroun.com/images/og/cac-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Centre Auto Cameroun - Services Automobiles Professionnels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centre Auto Cameroun - Services Automobiles Professionnels',
    description: 'Votre partenaire de confiance pour tous vos besoins automobiles au Cameroun. Entretien, réparation, pneus et accessoires.',
    images: ['https://centreautocameroun.com/images/og/cac-og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=LAb4-G3HhU-9CAziBeXR7Ujlb_usQBDmwFGmPLwseIw',
    yandex: 'YANDEX-VERIFICATION-CODE',
    other: {
      'facebook-domain-verification': 'FB-DOMAIN-VERIFICATION',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider defaultTheme="light">
          <Header />
          <main className="pt-32">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}