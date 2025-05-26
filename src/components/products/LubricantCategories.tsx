"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Catégories de lubrifiants
const lubricantCategories = [
  {
    id: 'moteur',
    name: 'HUILES MOTEUR',
    image: '/images/services/lubrifiants.jpg',
    description: 'Huiles synthétiques et semi-synthétiques pour moteurs',
    link: '/produits?category=huiles&subCategory=moteur'
  },
  {
    id: 'transmission',
    name: 'HUILES TRANSMISSION',
    image: '/images/services/lubrifiants.jpg',
    description: 'Huiles pour boîtes de vitesses et transmissions',
    link: '/produits?category=huiles&subCategory=transmission'
  },
  {
    id: 'hydraulique',
    name: 'HUILES HYDRAULIQUES',
    image: '/images/services/hydraulique.png',
    description: 'Huiles pour systèmes hydrauliques et direction assistée',
    link: '/produits?category=huiles&subCategory=hydraulique'
  }
];

export default function LubricantCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase relative inline-block">
            NOTRE GAMME DE LUBRIFIANTS
            <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lubricantCategories.map((category) => (
            <div key={category.id} className="group bg-gray-100 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{category.description}</p>
                <Link 
                  href={category.link}
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1.5 px-4 text-sm transition-all duration-300"
                >
                  DÉCOUVRIR
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
