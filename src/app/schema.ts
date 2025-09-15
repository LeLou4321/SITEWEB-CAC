export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Centre Auto Cameroun",
  "url": "https://centreautocameroun.com",
  "logo": "https://centreautocameroun.com/images/logo.png",
  "description": "Centre Auto Cameroun est votre partenaire de confiance pour tous vos besoins automobiles au Cameroun depuis 2010.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Rue Principale",
    "addressLocality": "Yaoundé",
    "addressRegion": "Centre",
    "addressCountry": "CM"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "3.8667",
    "longitude": "11.5167"
  },
  "telephone": "+237 690 90 10 10",
  "email": "contact@centreautocameroun.com",
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
      "closes": "15:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/centreautocameroun",
    "https://twitter.com/centreautocam",
    "https://www.instagram.com/centreautocameroun"
  ],
  "priceRange": "$$",
  "servesCuisine": "Automobile Services",
  "areaServed": ["Yaoundé", "Douala", "Bafoussam", "Ngaoundéré"]
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Géométrie des roues",
      "description": "Alignement précis des roues pour une conduite optimale et une usure uniforme des pneus."
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Équilibrage des roues",
      "description": "Équilibrage professionnel pour éliminer les vibrations et prolonger la durée de vie des pneus."
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Vidange et entretien",
      "description": "Services complets de vidange d'huile et d'entretien pour maintenir votre moteur en parfait état."
    }
  ]
};

export const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "Pneus",
      "description": "Pneus de qualité pour tous types de véhicules",
      "image": "https://centreautocameroun.com/images/services/pneus.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Michelin"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "XAF",
        "lowPrice": "25000",
        "highPrice": "150000",
        "offerCount": "15",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "89"
      }
    },
    {
      "@type": "Product",
      "position": 2,
      "name": "Lubrifiants",
      "description": "Huiles et lubrifiants pour tous types de moteurs",
      "image": "https://centreautocameroun.com/images/services/lubrifiants.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Cepsa"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "XAF",
        "lowPrice": "5000",
        "highPrice": "35000",
        "offerCount": "12",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "56"
      }
    },
    {
      "@type": "Product",
      "position": 3,
      "name": "Batteries",
      "description": "Batteries de haute performance pour tous véhicules",
      "image": "https://centreautocameroun.com/images/products/batterie-bosch.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Bosch"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "XAF",
        "lowPrice": "45000",
        "highPrice": "120000",
        "offerCount": "8",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "42"
      }
    }
  ]
};
