'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Données des catégories de produits
const productCategories: Record<string, {
  name: string;
  description: string;
  image: string;
  products: Array<{
    id: string;
    name: string;
    description: string;
    image: string;
    price?: string;
    brand?: string;
  }>;
}> = {
  'pneus': {
    name: 'Pneus',
    description: 'Découvrez notre gamme complète de pneus de qualité pour tous types de véhicules. Nous proposons des marques reconnues pour leur fiabilité et leur performance.',
    image: '/images/services/pneus.jpg',
    products: [
      {
        id: 'pneu-michelin-energy',
        name: 'Michelin Energy Saver+',
        description: 'Pneu économique avec une excellente longévité',
        image: '/images/services/pneus.jpg',
        price: 'À partir de 45 000 FCFA',
        brand: 'Michelin'
      },
      {
        id: 'pneu-bridgestone',
        name: 'Bridgestone Turanza',
        description: 'Confort de conduite optimal et faible bruit de roulement',
        image: '/images/services/pneus.jpg',
        price: 'À partir de 55 000 FCFA',
        brand: 'Bridgestone'
      },
      {
        id: 'pneu-goodyear',
        name: 'Goodyear EfficientGrip',
        description: 'Performance et économie de carburant',
        image: '/images/services/pneus.jpg',
        price: 'À partir de 40 000 FCFA',
        brand: 'Goodyear'
      }
    ]
  },
  'lubrifiants': {
    name: 'Lubrifiants',
    description: 'Huiles moteur et lubrifiants de haute qualité pour protéger et optimiser les performances de votre véhicule.',
    image: '/images/services/lubrifiants.jpg',
    products: [
      {
        id: 'huile-cepsa-5w30',
        name: 'Cepsa Genuine 5W-30',
        description: 'Huile synthétique pour moteurs essence et diesel modernes',
        image: '/images/services/lubrifiants.jpg',
        price: 'À partir de 15 000 FCFA',
        brand: 'Cepsa'
      },
      {
        id: 'huile-cepsa-10w40',
        name: 'Cepsa Star 10W-40',
        description: 'Huile semi-synthétique polyvalente',
        image: '/images/services/lubrifiants.jpg',
        price: 'À partir de 12 000 FCFA',
        brand: 'Cepsa'
      },
      {
        id: 'huile-transmission',
        name: 'Huile de Transmission',
        description: 'Lubrifiant pour boîtes de vitesses manuelles et automatiques',
        image: '/images/services/lubrifiants.jpg',
        price: 'À partir de 8 000 FCFA',
        brand: 'Cepsa'
      }
    ]
  },
  'batteries': {
    name: 'Batteries',
    description: 'Batteries automobiles de haute performance pour un démarrage fiable en toutes circonstances.',
    image: '/images/products/batterie-bosch.jpg',
    products: [
      {
        id: 'batterie-bosch-s4',
        name: 'Bosch S4',
        description: 'Batterie standard avec excellente fiabilité',
        image: '/images/products/batterie-bosch.jpg',
        price: 'À partir de 65 000 FCFA',
        brand: 'Bosch'
      },
      {
        id: 'batterie-bosch-s5',
        name: 'Bosch S5',
        description: 'Batterie premium pour véhicules modernes équipés',
        image: '/images/products/batterie-bosch.jpg',
        price: 'À partir de 85 000 FCFA',
        brand: 'Bosch'
      },
      {
        id: 'batterie-bosch-agm',
        name: 'Bosch AGM',
        description: 'Batterie Start-Stop pour véhicules avec système automatique',
        image: '/images/products/batterie-bosch.jpg',
        price: 'À partir de 120 000 FCFA',
        brand: 'Bosch'
      }
    ]
  },
  'groupes-electrogenes': {
    name: 'Groupes Électrogènes',
    description: 'Solutions d\'alimentation électrique fiables pour vos besoins domestiques et professionnels.',
    image: '/images/products/groupe.jpg',
    products: [
      {
        id: 'groupe-2kva',
        name: 'Groupe Électrogène 2 KVA',
        description: 'Idéal pour usage domestique léger',
        image: '/images/products/groupe.jpg',
        price: 'À partir de 150 000 FCFA'
      },
      {
        id: 'groupe-5kva',
        name: 'Groupe Électrogène 5 KVA',
        description: 'Pour usage domestique et petit commerce',
        image: '/images/products/groupe.jpg',
        price: 'À partir de 350 000 FCFA'
      },
      {
        id: 'groupe-10kva',
        name: 'Groupe Électrogène 10 KVA',
        description: 'Pour usage professionnel et industriel',
        image: '/images/products/groupe.jpg',
        price: 'À partir de 750 000 FCFA'
      }
    ]
  },
  'accessoires': {
    name: 'Accessoires',
    description: 'Accessoires et pièces détachées Bosch pour l\'entretien et l\'amélioration de votre véhicule.',
    image: '/images/products/accessoires-bosch.jpeg',
    products: [
      {
        id: 'essuie-glaces',
        name: 'Essuie-glaces Bosch',
        description: 'Balais d\'essuie-glaces haute performance',
        image: '/images/products/accessoires-bosch.jpeg',
        price: 'À partir de 8 000 FCFA',
        brand: 'Bosch'
      },
      {
        id: 'bougies',
        name: 'Bougies d\'allumage Bosch',
        description: 'Bougies pour un démarrage optimal',
        image: '/images/products/accessoires-bosch.jpeg',
        price: 'À partir de 3 500 FCFA',
        brand: 'Bosch'
      },
      {
        id: 'filtres',
        name: 'Filtres Bosch',
        description: 'Filtres à huile, air et habitacle',
        image: '/images/products/accessoires-bosch.jpeg',
        price: 'À partir de 5 000 FCFA',
        brand: 'Bosch'
      }
    ]
  },
  'materiel-piscine': {
    name: 'Matériel de Piscine',
    description: 'Équipements et produits d\'entretien pour maintenir votre piscine en parfait état.',
    image: '/images/products/materiel-piscine.jpg',
    products: [
      {
        id: 'pompe-piscine',
        name: 'Pompe de Filtration',
        description: 'Pompe performante pour une eau toujours propre',
        image: '/images/products/materiel-piscine.jpg',
        price: 'À partir de 85 000 FCFA'
      },
      {
        id: 'robot-piscine',
        name: 'Robot Nettoyeur',
        description: 'Nettoyage automatique de votre piscine',
        image: '/images/products/materiel-piscine.jpg',
        price: 'À partir de 250 000 FCFA'
      },
      {
        id: 'produits-traitement',
        name: 'Produits de Traitement',
        description: 'Chlore, pH et autres produits d\'entretien',
        image: '/images/products/materiel-piscine.jpg',
        price: 'À partir de 5 000 FCFA'
      }
    ]
  },
  'betoniere': {
    name: 'Bétonnière',
    description: 'Bétonnières professionnelles pour vos projets de construction, disponibles en différentes capacités.',
    image: '/images/products/betoniere.jpg',
    products: [
      {
        id: 'betoniere-120l',
        name: 'Bétonnière 120L',
        description: 'Idéale pour petits travaux de maçonnerie',
        image: '/images/products/betoniere.jpg',
        price: 'À partir de 180 000 FCFA'
      },
      {
        id: 'betoniere-250l',
        name: 'Bétonnière 250L',
        description: 'Pour chantiers de taille moyenne',
        image: '/images/products/betoniere.jpg',
        price: 'À partir de 350 000 FCFA'
      },
      {
        id: 'betoniere-350l',
        name: 'Bétonnière 350L',
        description: 'Capacité professionnelle pour grands chantiers',
        image: '/images/products/betoniere.jpg',
        price: 'À partir de 500 000 FCFA'
      }
    ]
  }
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = productCategories[params.category];

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/produits" className="hover:text-primary transition-colors">Produits</Link>
            </li>
            <li>/</li>
            <li className="text-primary font-semibold">{category.name}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.brand && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.brand}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {product.price && (
                  <p className="text-primary font-semibold text-lg mb-4">{product.price}</p>
                )}
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 w-full text-center"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d'un conseil personnalisé ?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous aider à choisir les produits adaptés à vos besoins.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </main>
  );
}
