'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/a-propos');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl">Redirection vers la page À propos...</p>
    </div>
  );
}
