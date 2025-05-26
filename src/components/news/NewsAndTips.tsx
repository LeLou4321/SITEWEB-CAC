"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaUser } from 'react-icons/fa';

// Articles mis en avant
const featuredArticles = [
  {
    id: 1,
    title: "Comment choisir les bons pneus pour votre véhicule",
    excerpt: "Guide complet pour sélectionner les pneus adaptés à votre voiture et à votre style de conduite",
    image: "/images/services/pneus.jpg",
    author: "Michel Kamdem",
    date: "2025-04-15",
    category: "Pneus",
    link: "/conseils"
  },
  {
    id: 2,
    title: "L'importance de la vidange régulière",
    excerpt: "Pourquoi et quand faire la vidange de votre véhicule pour optimiser sa durée de vie",
    image: "/images/services/entretien.jpg",
    author: "Paul Biya",
    date: "2025-04-10",
    category: "Entretien",
    link: "/conseils"
  },
  {
    id: 3,
    title: "Les voyants du tableau de bord : que signifient-ils ?",
    excerpt: "Guide pratique pour comprendre les différents voyants d'alerte de votre véhicule",
    image: "/images/services/diagnostic.jpg",
    author: "Sarah Ngo",
    date: "2025-04-05",
    category: "Sécurité",
    link: "/conseils"
  }
];

export default function NewsAndTips() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase relative inline-block">
            CONSEILS ET ACTUALITÉS
            <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Découvrez nos derniers conseils d'experts pour l'entretien et la maintenance de votre véhicule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <Link 
                  href={article.link}
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 transition-all duration-300 w-full text-center"
                >
                  LIRE LA SUITE
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/conseils" 
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-10 text-lg uppercase tracking-wider transition-all duration-300 border-2 border-yellow-500 hover:border-yellow-400"
          >
            TOUS NOS CONSEILS
          </Link>
        </div>
      </div>
    </section>
  );
}
