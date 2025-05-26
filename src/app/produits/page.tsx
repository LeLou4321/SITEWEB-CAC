'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Catégories de produits
const productCategories = [
  {
    id: 'pneus',
    name: 'Pneus',
    image: '/images/services/pneus.jpg',
    description: 'Pneus de qualité pour tous types de véhicules',
    link: '/produits/pneus'
  },
  {
    id: 'lubrifiants',
    name: 'Lubrifiants',
    image: '/images/services/lubrifiants.jpg',
    description: 'Huiles et lubrifiants pour tous types de moteurs',
    link: '/produits/lubrifiants'
  },
  {
    id: 'batteries',
    name: 'Batteries',
    image: '/images/products/batterie-bosch.jpg',
    description: 'Batteries de haute performance pour tous véhicules',
    link: '/produits/batteries'
  },
  {
    id: 'groupes-electrogenes',
    name: 'Groupes Électrogènes',
    image: '/images/products/groupe.jpg', // À remplacer par une image de groupe électrogène
    description: 'Solutions d\'alimentation électrique fiables',
    link: '/produits/groupes-electrogenes'
  },
  {
    id: 'accessoires',
    name: 'Accessoires',
    image: '/images/products/accessoires-bosch.jpeg',
    description: 'Accessoires et pièces détachées Bosch pour votre véhicule',
    link: '/produits/accessoires'
  },
  {
    id: 'materiel-piscine',
    name: 'Matériel de Piscine',
    image: '/images/products/materiel-piscine.jpg', // À remplacer par une image de matériel de piscine
    description: 'Équipements et produits d\'entretien pour piscines',
    link: '/produits/materiel-piscine'
  },
  {
    id: 'betoniere',
    name: 'Bétonnière',
    image: '/images/products/betoniere.jpg', // À remplacer par une image de bétonnière
    description: 'Bétonnières professionnelles pour vos projets de construction',
    link: '/produits/betoniere'
  }
];

export default function Products() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Nos <span className="text-primary">Produits</span>
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Découvrez notre gamme complète de produits de qualité pour tous vos besoins
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div 
              key={category.id} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h2 className="absolute bottom-6 left-6 text-2xl font-bold text-white z-10">
                  {category.name}
                </h2>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 h-12">{category.description}</p>
                <Link 
                  href={category.link}
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full text-center"
                >
                  DÉCOUVRIR
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}