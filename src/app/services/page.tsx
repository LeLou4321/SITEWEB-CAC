'use client';

import React from 'react';
import { 
  FaRulerCombined, // Géométrie
  FaBalanceScale, // Équilibrage des roues
  FaOilCan, // Vidange
  FaSnowflake, // Climatisation
  FaCarBattery, // Frein
  FaCarCrash, // Amortisseurs
  FaTools, // Entretien des véhicules
  FaCogs // Moteur
} from 'react-icons/fa';

// Liste des services
const services = [
  {
    id: 'geometrie',
    name: 'GÉOMÉTRIE',
    icon: <FaRulerCombined className="text-4xl md:text-5xl text-primary mb-4" />,
    description: 'Alignement précis des roues pour une conduite optimale et une usure uniforme des pneus.'
  },
  {
    id: 'equilibrage',
    name: 'ÉQUILIBRAGE DES ROUES',
    icon: <FaBalanceScale className="text-4xl md:text-5xl text-primary mb-4" />,
    description: 'Équilibrage des roues pour éliminer les vibrations et assurer une conduite confortable.'
  },
  {
    id: 'vidange',
    name: 'VIDANGE',
    icon: <FaOilCan className="text-4xl md:text-5xl text-primary mb-4" />,
    description: 'Vidange d&apos;huile moteur et remplacement des filtres pour prolonger la durée de vie de votre moteur.'
  },
  {
    id: 'climatisation',
    name: 'CLIMATISATION',
    icon: <FaSnowflake className="text-4xl md:text-5xl text-primary mb-4" />,
    description: 'Entretien et réparation de systèmes de climatisation pour un confort optimal dans votre véhicule.'
  },
  {
    id: 'frein',
    name: 'FREIN',
    icon: <FaCarBattery className="text-4xl md:text-5xl text-primary mb-4" />,
    description: 'Vérification et remplacement des plaquettes, disques et liquide de frein pour votre sécurité.'
  },
  {
    id: 'amortisseurs',
    name: 'AMORTISSEURS',
    icon: <FaCarCrash className="text-4xl md:text-5xl text-primary mb-4" />,
    description: 'Diagnostic et remplacement des amortisseurs pour une tenue de route optimale.'
  },
  {
    id: 'entretien',
    name: 'ENTRETIEN DES VÉHICULES',
    icon: <FaTools className="text-4xl md:text-5xl text-primary mb-4" />,
    description: 'Entretien régulier et maintenance préventive pour garder votre véhicule en parfait état.'
  },
  {
    id: 'moteur',
    name: 'MOTEUR',
    icon: <FaCogs className="text-4xl md:text-5xl text-primary mb-4" />,
    description: 'Diagnostic, réparation et optimisation des performances de votre moteur.'
  }
];

export default function Services() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Nos <span className="text-primary">Services</span>
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Centre Auto Cameroun vous propose une gamme complète de services pour l&apos;entretien et la réparation de votre véhicule
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {service.icon}
              <h2 className="text-xl font-bold mb-3">{service.name}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Besoin d&apos;un service spécifique ?</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Nos techniciens qualifiés sont à votre disposition pour répondre à tous vos besoins automobiles.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            CONTACTEZ-NOUS
          </a>
        </div>
      </div>
    </main>
  );
}