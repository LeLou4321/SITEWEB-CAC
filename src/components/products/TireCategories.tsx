"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Catégories de pneus
const tireCategories = [
  {
    id: 'tourisme',
    name: 'PNEUS TOURISME',
    image: '/images/services/pneus.jpg',
    description: 'Pneus pour voitures particulières et SUV',
    link: '/produits?category=pneus&subCategory=tourisme'
  },
  {
    id: '4x4',
    name: 'PNEUS 4X4',
    image: '/images/services/pneu-4x46.png',
    description: 'Pneus tout-terrain pour 4x4 et SUV',
    link: '/produits?category=pneus&subCategory=4x4'
  },
  {
    id: 'utilitaire',
    name: 'PNEUS UTILITAIRE',
    image: '/images/services/pneu-utilitaire.jpg',
    description: 'Pneus pour véhicules utilitaires et camionnettes',
    link: '/produits?category=pneus&subCategory=utilitaire'
  }
];

export default function TireCategories() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase relative inline-block">
            NOTRE GAMME DE PNEUS
            <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tireCategories.map((category) => (
            <div key={category.id} className="group bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
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
        
        <div className="text-center mt-8">
          <Link 
            href="/produits" 
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 text-base uppercase tracking-wider transition-all duration-300 border-2 border-yellow-500 hover:border-yellow-400"
          >
            DÉCOUVREZ TOUS NOS PRODUITS
          </Link>
        </div>
      </div>
    </section>
  );
}
