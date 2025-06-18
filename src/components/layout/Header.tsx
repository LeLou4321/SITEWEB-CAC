'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Produits', href: '/produits' },
  { name: 'Services', href: '/services' },
  { name: 'À propos', href: '/a-propos' },
];

export default function Header() {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  // Fermer le menu mobile au clic à l'extérieur
  useEffect(() => {
    if (!showMobileMenu) return;
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setShowMobileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMobileMenu]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3">
      <div className="mx-auto max-w-[1300px]">
        <div className="relative flex items-center justify-between rounded-full bg-white px-6 py-3 shadow-[0_2px_8px_0_rgba(0,0,0,0.05)]">
          {/* Logo seulement sur mobile */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Logo" width={227} height={75} className="object-contain" />
            </Link>
          </div>

          {/* Navigation principale masquée sur mobile, visible sur md+ */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-1.5 text-[15px] font-medium rounded-full transition-colors ${
                  pathname === item.href 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Boutons d'action visibles uniquement sur desktop */}
            <Link 
              href="/contact" 
              className="px-4 py-1.5 text-[15px] font-medium text-gray-500 hover:text-gray-900 rounded-full transition-colors hover:bg-gray-50 hidden md:inline-block"
            >
              Contact
            </Link>
            <Link
              href="/devis"
              className="px-4 py-1.5 text-[15px] font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors hidden md:inline-block"
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Bouton burger sur mobile */}
          <button
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => setShowMobileMenu((s) => !s)}
            aria-label="Ouvrir le menu"
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1 rounded"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1 rounded"></span>
            <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
          </button>
        </div>
        {/* Menu mobile déroulant */}
        {showMobileMenu && (
          <div
            ref={mobileMenuRef}
            className="md:hidden mt-2 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3 animate-slide-down relative"
            style={{animation: 'slideDown 340ms cubic-bezier(0.4,0,0.2,1)'}}
          >
            <button
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              onClick={() => setShowMobileMenu(false)}
              aria-label="Fermer le menu"
            >
              <span className="block w-5 h-0.5 bg-gray-800 rotate-45 absolute"></span>
              <span className="block w-5 h-0.5 bg-gray-800 -rotate-45 absolute"></span>
            </button>
            <div className="h-8"></div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 font-medium py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setShowMobileMenu(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Boutons d'action ajoutés au menu mobile */}
            <Link
              href="/contact"
              className="text-gray-800 font-medium py-2 px-3 rounded hover:bg-gray-100"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </Link>
            <Link
              href="/devis"
              className="text-white bg-black font-medium py-2 px-3 rounded hover:bg-gray-800"
              onClick={() => setShowMobileMenu(false)}
            >
              Devis gratuit
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}