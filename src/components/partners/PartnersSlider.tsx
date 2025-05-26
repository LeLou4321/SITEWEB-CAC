'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partners = [
  {
    name: 'Michelin',
    logo: '/images/partners/michelin.png',
  },
  {
    name: 'ADC',
    logo: '/images/partners/ADC.png',
  },
  {
    name: 'FEICOM',
    logo: '/images/partners/FEICOM.png',
  },
  {
    name: 'CAMPOST',
    logo: '/images/partners/CAMPOST.png',
  },
  {
    name: 'Continental',
    logo: '/images/partners/CEPSA.png',
  },
  {
    name: 'Winparts',
    logo: '/images/partners/winparts.png',
  },
];

export default function PartnersSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nos <span className="text-blue-600">Partenaires</span>
        </h2>
        
        <div 
          ref={scrollRef}
          className="flex space-x-12 overflow-x-hidden whitespace-nowrap py-4"
        >
          {/* Première série de logos */}
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-1-${index}`}
              className="inline-flex items-center justify-center min-w-[200px] px-6 opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="relative w-full h-20">
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
          
          {/* Deuxième série de logos pour un défilement infini */}
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-2-${index}`}
              className="inline-flex items-center justify-center min-w-[200px] px-6 opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="relative w-full h-20">
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}