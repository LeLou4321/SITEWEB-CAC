"use client";

import React from "react";

export default function HeroParallax() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[380px] md:min-h-[480px] bg-black overflow-hidden"
      onMouseMove={(e) => {
        const section = e.currentTarget;
        const img = section.querySelector('.hero-parallax-bg') as HTMLElement | null;
        if (img) {
          const rect = section.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
          img.style.transform = `scale(1.07) translate(${-x*16}px, ${-y*12}px)`;
        }
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('.hero-parallax-bg') as HTMLElement | null;
        if (img) img.style.transform = '';
      }}
    >
      <img 
        src="/images/hero/slide1.png" 
        alt="Voiture en fond" 
        className="absolute inset-0 w-full h-full object-cover opacity-30 select-none pointer-events-none z-0 hero-parallax-bg"
        aria-hidden="true"
      />
      <h1 className="hero-typer typing relative z-10">
        {`Nous couvrons toute la chaîne automobile\nde l’achat à la réparation de votre véhicule`}
      </h1>
    </section>
  );
}
