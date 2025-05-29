"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTachometerAlt, FaOilCan, FaCarBattery, FaCogs, FaTools, FaCarSide } from "react-icons/fa";

const items = [
  {
    label: "Pneus",
    image: "/images/hero/tyres.jpg",
    icon: <FaTachometerAlt className="text-accent" />,
  },
  {
    label: "Huiles moteur",
    image: "/images/hero/oil.jpg",
    icon: <FaOilCan className="text-accent" />,
  },
  {
    label: "Batteries",
    image: "/images/hero/battery.jpg",
    icon: <FaCarBattery className="text-accent" />,
  },
  {
    label: "Groupes électrogènes",
    image: "/images/hero/generator.jpg",
    icon: <FaCogs className="text-accent" />,
  },
  {
    label: "Accessoires",
    image: "/images/hero/accessories.jpg",
    icon: <FaTools className="text-accent" />,
  },
  {
    label: "Autres services",
    image: "/images/hero/services.jpg",
    icon: <FaCarSide className="text-accent" />,
  },
];

// Palette de couleurs
const palette = [
  '#0F214D', // College Blue
  '#0B5FB0', // Persian Blue
  '#AAF1FF', // Middle Blue
  '#FEFDEC', // Yellow Banana
  '#EBFCFF', // Morning Blue
  '#2BA3EC', // Picton Blue
];

export default function HeroSelector() {
  const [selected, setSelected] = useState(0);

  // Cartes latérales (tous sauf la sélectionnée)
  const sideItems = items.filter((_, idx) => idx !== selected);
  const selectedItem = items[selected];

  // Les fonctions getBgColor et isLight ont été supprimées car elles n'étaient pas utilisées

  return (
    <section className="w-full min-h-[600px] bg-white pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Cartes latérales en colonne */}
        <div className="w-full md:w-1/4 flex flex-col gap-3 sticky top-24">
          {sideItems.map((item, idx) => (
            <div
              key={item.label}
              className="relative h-24 rounded-2xl overflow-hidden cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:scale-105"
              onMouseEnter={() => setSelected(idx < selected ? idx : idx + 1)}
              onClick={() => setSelected(idx < selected ? idx : idx + 1)}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover opacity-80 hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 p-4 flex items-center justify-between bg-gradient-to-r from-black/20 to-transparent">
                <h3 className="text-lg font-medium text-white drop-shadow-md">
                  {item.label}
                </h3>
                <div className="text-2xl text-white drop-shadow-md">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carte principale */}
        <div className="w-full md:w-3/4">
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
            <Image
              src={selectedItem.image}
              alt={selectedItem.label}
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 p-8 flex items-end bg-gradient-to-t from-black/40 to-transparent">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md mb-4">
                  {selectedItem.label}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
