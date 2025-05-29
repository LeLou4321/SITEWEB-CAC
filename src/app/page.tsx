import PartnersSlider from '@/components/partners/PartnersSlider';
import Image from 'next/image';
import { FaCar, FaTools, FaOilCan, FaCog } from 'react-icons/fa';
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import LubricantCategories from "@/components/products/LubricantCategories";
import TireCategories from "@/components/products/TireCategories";
import NewsAndTips from "@/components/news/NewsAndTips";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centre Auto Cameroun - Votre spécialiste automobile',
  description: 'Centre Auto Cameroun offre des services complets d\'entretien et réparation automobile à Douala et Yaoundé. Pneus, diagnostics et accessoires pour tous véhicules.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Centre Auto Cameroun - Votre spécialiste automobile',
    description: 'Services d\'entretien et réparation automobile professionnels au Cameroun',
  }
};

const services = [
  {
    icon: <FaCar />,
    title: "Vente de Pneus",
    description: "Large gamme de pneus de qualité pour tous types de véhicules",
    image: "/images/services/pneus.jpg"
  },
  {
    icon: <FaTools />,
    title: "Entretien Auto",
    description: "Services d&apos;entretien complet pour votre véhicule",
    image: "/images/services/entretien.jpg"
  },
  {
    icon: <FaOilCan />,
    title: "Vente Lubrifiants",
    description: "Huiles et lubrifiants de première qualité",
    image: "/images/services/lubrifiants.jpg"
  },
  {
    icon: <FaCog />,
    title: "Groupes Électrogènes",
    description: "Vente de groupes électrogènes de qualité pour tous vos besoins",
    image: "/images/services/generator.jpg"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <HeroGeometric 
        badge="Centre Auto Cameroun" 
        title1="De l'achat à la réparation, nous prenons" 
        title2="soin de votre véhicule étape par étape"
        description=""
      />

      {/* Section Services Principaux avec images de fond */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Nos Produits et Services <span className="text-accent">Principaux</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl h-80"
              >
                {/* Image de fond */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradué */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                </div>
                
                {/* Contenu */}
                <div className="relative h-full p-6 flex flex-col justify-end text-white">
                  <div className="text-4xl mb-4 text-yellow-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="relative bg-white rounded-2xl shadow card p-8 flex flex-col items-center text-center overflow-hidden">
              <Image src="/images/atouts/qualite.jpg" alt="Qualité Garantie" fill className="object-cover opacity-30 absolute inset-0 z-0" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">Qualité Garantie</h3>
                <p>Des prestations garanties et des pièces de qualité pour votre tranquillité d&#39;esprit.</p>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl shadow card p-8 flex flex-col items-center text-center overflow-hidden">
              <Image src="/images/atouts/innovation.jpg" alt="Innovation" fill className="object-cover opacity-30 absolute inset-0 z-0" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">Innovation</h3>
                <p>Des équipements modernes et des méthodes innovantes pour un service à la pointe.</p>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl shadow card p-8 flex flex-col items-center text-center overflow-hidden">
              <Image src="/images/atouts/reconnaissance.jpg" alt="Reconnaissance" fill className="object-cover opacity-30 absolute inset-0 z-0" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">Reconnaissance</h3>
                <p>Une réputation bâtie sur la confiance et la satisfaction de nos clients depuis des années.</p>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl shadow card p-8 flex flex-col items-center text-center overflow-hidden">
              <Image src="/images/atouts/securite.jpg" alt="Sécurité" fill className="object-cover opacity-30 absolute inset-0 z-0" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">Sécurité</h3>
                <p>Nous assurons la sécurité de votre véhicule à chaque étape de notre intervention.</p>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl shadow card p-8 flex flex-col items-center text-center overflow-hidden">
              <Image src="/images/atouts/satisfaction.jpg" alt="Satisfaction" fill className="object-cover opacity-30 absolute inset-0 z-0" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">Satisfaction</h3>
                <p>Votre satisfaction est notre priorité, avec un service après-vente réactif et attentif.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Gamme de Lubrifiants */}
      <LubricantCategories />

      {/* Section Gamme de Pneus */}
      <TireCategories />

      {/* Section Conseils et Actualités */}
      <NewsAndTips />

      {/* Section Partenaires */}
      <PartnersSlider />

      {/* Section CTA avec design attractif */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à nous confier votre véhicule ?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd'hui pour un devis gratuit ou prenez rendez-vous pour un service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg inline-block transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold"
            >
              Contactez-nous
            </a>
            <a 
              href="/services" 
              className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-lg inline-block transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold"
            >
              Nos Services
            </a>
          </div>
        </div>
      </section>
      
      {/* Schema.org structured data for auto repair business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Centre Auto Cameroun",
            "image": "https://centreautocameroun.netlify.app/images/cac-og-image.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Rue Principale",
              "addressLocality": "Douala",
              "addressRegion": "Littoral",
              "postalCode": "0000",
              "addressCountry": "CM"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 4.0511,
              "longitude": 9.7679
            },
            "url": "https://centreautocameroun.netlify.app",
            "telephone": "+237-XXX-XXX-XXX",
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "16:00"
              }
            ],
            "sameAs": [
              "https://facebook.com/centreautocameroun",
              "https://instagram.com/centreautocameroun"
            ]
          })
        }}
      />
    </main>
  );
}