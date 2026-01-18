"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser, FaNewspaper } from 'react-icons/fa';

// Actualités mises en avant
const actualites = [
  {
    id: 1,
    title: "Nouvelle arrivée : Pneus Michelin 2025",
    excerpt: "Découvrez notre nouvelle gamme de pneus Michelin avec technologie de sécurité renforcée",
    image: "/images/hero/tyres.jpg",
    author: "Équipe CAC",
    date: "2025-12-01",
    category: "Nouveauté",
    link: "/actualites/nouvelle-gamme-michelin-2025"
  },
  {
    id: 2,
    title: "Promotion spéciale : Vidange à -20%",
    excerpt: "Profitez de notre offre exceptionnelle sur les services de vidange ce mois-ci",
    image: "/images/hero/oil.jpg",
    author: "Service Commercial",
    date: "2025-11-28",
    category: "Promotion",
    link: "/promos"
  },
  {
    id: 3,
    title: "Ouverture de notre nouveau centre à Yaoundé",
    excerpt: "Centre Auto Cameroun s'agrandit avec un nouveau service moderne dans la capitale",
    image: "/images/hero/services.jpg",
    author: "Direction",
    date: "2025-11-25",
    category: "Actualité",
    link: "/actualites/nouveau-centre-yaounde"
  }
];

export default function Actualites() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <FaNewspaper className="text-4xl text-blue-600 mr-3" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase relative inline-block">
            ACTUALITÉS
            <span className="block h-1 w-24 bg-blue-600 mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Restez informé de nos dernières nouveautés, promotions et actualités
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actualites.map((actualite) => (
            <article
              key={actualite.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={actualite.image}
                  alt={actualite.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {actualite.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{actualite.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{actualite.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    <span>{actualite.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{actualite.date}</span>
                  </div>
                </div>

                <Link 
                  href={actualite.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 transition-all duration-300 w-full text-center"
                >
                  LIRE LA SUITE
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/actualites" 
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 text-lg uppercase tracking-wider transition-all duration-300 border-2 border-blue-600 hover:border-blue-700"
          >
            TOUTES LES ACTUALITÉS
          </Link>
        </div>
      </div>
    </section>
  );
}
