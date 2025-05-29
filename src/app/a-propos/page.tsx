'use client';

import React from 'react';
import Image from 'next/image';
import { FaUsers, FaTools, FaThumbsUp, FaCar } from 'react-icons/fa';

// Statistiques de l'entreprise
const stats = [
  {
    id: 'clients',
    icon: <FaUsers className="text-3xl text-yellow-500 mb-2" />,
    value: '5000+',
    label: 'Clients satisfaits'
  },
  {
    id: 'services',
    icon: <FaTools className="text-3xl text-yellow-500 mb-2" />,
    value: '8+',
    label: 'Services spécialisés'
  },
  {
    id: 'experience',
    icon: <FaThumbsUp className="text-3xl text-yellow-500 mb-2" />,
    value: '15+',
    label: 'Années d&#39;expérience'
  },
  {
    id: 'vehicles',
    icon: <FaCar className="text-3xl text-yellow-500 mb-2" />,
    value: '10000+',
    label: 'Véhicules entretenus'
  }
];

// Valeurs de l'entreprise
const values = [
  {
    title: 'Qualité',
    description: 'Nous utilisons uniquement des pièces et produits de haute qualité pour garantir la fiabilité et la durabilité de nos services.'
  },
  {
    title: 'Expertise',
    description: 'Notre équipe de techniciens qualifiés possède une expertise approfondie dans tous les aspects de l&#39;entretien et de la réparation automobile.'
  },
  {
    title: 'Transparence',
    description: 'Nous croyons en une communication claire et honnête avec nos clients, sans frais cachés ni surprises.'
  },
  {
    title: 'Innovation',
    description: 'Nous restons à la pointe de la technologie automobile pour offrir les meilleures solutions à nos clients.'
  }
];

export default function APropos() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            À propos de <span className="text-yellow-500">Centre Auto Cameroun</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour tous vos besoins automobiles au Cameroun depuis 2010
          </p>
        </div>

        {/* Section Notre Histoire */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Histoire</h2>
            <p className="text-gray-600 mb-4">
              Fondé en 2010, Centre Auto Cameroun est né de la passion pour l&apos;automobile et de la volonté d&apos;offrir des services de qualité aux propriétaires de véhicules au Cameroun.
            </p>
            <p className="text-gray-600 mb-4">
              Ce qui a commencé comme un petit atelier à Yaoundé s&apos;est rapidement développé pour devenir l&apos;un des centres automobiles les plus réputés du pays, avec des succursales à Douala, Bafoussam et Ngaoundéré.
            </p>
            <p className="text-gray-600">
              Notre mission est simple : fournir des services d&apos;entretien et de réparation automobile exceptionnels, avec une attention particulière portée à la qualité, à l&apos;honnêteté et à la satisfaction du client.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="/images/services/entretien.jpg" 
              alt="Centre Auto Cameroun" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section Statistiques */}
        <div className="bg-yellow-500/5 py-16 px-8 rounded-xl mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Centre Auto Cameroun en Chiffres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Nos Valeurs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md border-l-4 border-yellow-500"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Notre Équipe */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Notre équipe de professionnels qualifiés est dédiée à fournir un service exceptionnel et des solutions adaptées à vos besoins.
          </p>
          <div className="bg-yellow-500 text-black py-4 px-8 rounded-lg inline-block">
            <p className="text-lg font-semibold">
              Rejoignez notre équipe ! Envoyez votre CV à <span className="underline">recrutement@centreautocameroun.com</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}