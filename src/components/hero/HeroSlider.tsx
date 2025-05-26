"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Définition des slides
const slides = [
  {
    id: 1,
    image: "/images/hero/slide1.png",
    title: "Achat et vente",
    subtitle: "Trouvez le véhicule de vos rêves",
    description: "Nous vous accompagnons dans l'achat et la vente de votre véhicule au Cameroun."
  },
  {
    id: 2,
    image: "/images/hero/slide2.jpg", 
    title: "Entretien et réparation",
    subtitle: "Service professionnel",
    description: "Notre équipe de techniciens qualifiés assure l'entretien et la réparation de votre véhicule."
  },
  {
    id: 3,
    image: "/images/hero/slide3.jpg",
    title: "Pièces détachées",
    subtitle: "Pièces d'origine",
    description: "Nous proposons une large gamme de pièces détachées pour tous types de véhicules."
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Fonction pour passer au slide précédent
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Fonction pour aller à un slide spécifique
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(false); // Arrête l'autoplay quand l'utilisateur interagit
    // Redémarre l'autoplay après 5 secondes
    setTimeout(() => setAutoplay(true), 5000);
  };

  // Effet pour l'autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change de slide toutes les 5 secondes
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentSlide]);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-black">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              filter: 'brightness(0.5)'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="text-yellow-400 font-semibold mb-2 text-lg md:text-xl">
                {slides[currentSlide].subtitle}
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                {slides[currentSlide].description}
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-semibold transition-all">
                En savoir plus
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-yellow-400 w-10' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
