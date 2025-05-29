'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Produits', href: '/produits' },
  { name: 'Services', href: '/services' },
  { name: 'À propos', href: '#', className: 'whitespace-nowrap' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function MainNav() {
  // La ligne avec isMobileMenuOpen et setIsMobileMenuOpen a été supprimée car ces variables n'étaient pas utilisées
  
  return (
    <nav className="flex gap-10 flex-nowrap overflow-x-auto w-full min-w-[500px] md:min-w-[700px] lg:min-w-[900px] text-[1.07rem] md:text-[1.12rem] lg:text-[1.15rem] bg-white border border-gray-200 rounded-full shadow-sm px-6 py-2" style={{ background: '#fff' }}>
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`nav-link${item.className ? ' ' + item.className : ''}`}
          style={item.name === 'À propos' ? { whiteSpace: 'nowrap', fontSize: '0.98rem' } : { fontSize: '0.98rem' }}
          onClick={(e) => {
            if (item.name === 'À propos') {
              // Force la navigation vers la page à propos
              e.preventDefault();
              window.location.href = window.location.origin + '/a-propos';
            }
          }}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}