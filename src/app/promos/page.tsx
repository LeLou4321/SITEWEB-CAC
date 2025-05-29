'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

const promotions = [
  {
    id: 1,
    title: "Offre Spéciale Pneus",
    description: "Achetez 3 pneus et obtenez le 4ème gratuitement sur une sélection de marques premium",
    image: "/images/promos/promo-pneus.jpg",
    validUntil: "2025-05-31",
    discount: "25%",
    conditions: "Offre valable sur une sélection de pneus. Dans la limite des stocks disponibles."
  },
  {
    id: 2,
    title: "Pack Vidange",
    description: "Pack vidange complet avec huile de qualité supérieure et filtres inclus",
    image: "/images/promos/promo-vidange.jpg",
    validUntil: "2025-05-15",
    discount: "20%",
    conditions: "Offre soumise à conditions. Prix variable selon le modèle du véhicule."
  },
  {
    id: 3,
    title: "Diagnostic Offert",
    description: "Diagnostic électronique complet offert pour tout service d'entretien",
    image: "/images/promos/promo-diagnostic.jpg",
    validUntil: "2025-06-30",
    discount: "Gratuit",
    conditions: "Pour tout service d&apos;entretien d&apos;une valeur minimale de 100 000 FCFA."
  }
];

export default function Promos() {
  const [selectedPromo, setSelectedPromo] = useState<number | null>(null);

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Nos <span className="text-blue-600">Promotions</span>
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Découvrez nos offres exclusives et profitez de réductions exceptionnelles sur nos services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {promo.discount}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaClock className="mr-2" />
                  <span>Valable jusqu&apos;au {new Date(promo.validUntil).toLocaleDateString()}</span>
                </div>

                <button
                  onClick={() => setSelectedPromo(selectedPromo === promo.id ? null : promo.id)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Voir les conditions
                </button>

                {selectedPromo === promo.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">{promo.conditions}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
