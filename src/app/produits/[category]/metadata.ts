import { Metadata } from 'next';

const categoryMetadata: Record<string, { title: string; description: string }> = {
  'pneus': {
    title: 'Pneus - Centre Auto Cameroun',
    description: 'Découvrez notre gamme de pneus Michelin, Bridgestone, Goodyear. Qualité et prix compétitifs au Cameroun.'
  },
  'lubrifiants': {
    title: 'Lubrifiants et Huiles Moteur - Centre Auto Cameroun',
    description: 'Huiles moteur Cepsa de qualité pour tous types de véhicules. Livraison disponible au Cameroun.'
  },
  'batteries': {
    title: 'Batteries Automobiles Bosch - Centre Auto Cameroun',
    description: 'Batteries Bosch haute performance pour un démarrage fiable. Garantie et installation disponibles.'
  },
  'groupes-electrogenes': {
    title: 'Groupes Électrogènes - Centre Auto Cameroun',
    description: 'Groupes électrogènes de 2 à 10 KVA pour usage domestique et professionnel au Cameroun.'
  },
  'accessoires': {
    title: 'Accessoires Auto Bosch - Centre Auto Cameroun',
    description: 'Pièces détachées et accessoires Bosch : essuie-glaces, bougies, filtres. Qualité garantie.'
  },
  'materiel-piscine': {
    title: 'Matériel de Piscine - Centre Auto Cameroun',
    description: 'Équipements et produits d\'entretien pour piscines : pompes, robots, produits de traitement.'
  },
  'betoniere': {
    title: 'Bétonnières Professionnelles - Centre Auto Cameroun',
    description: 'Bétonnières de 120L à 350L pour vos projets de construction. Qualité professionnelle.'
  }
};

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const meta = categoryMetadata[params.category];
  
  if (!meta) {
    return {
      title: 'Produit non trouvé - Centre Auto Cameroun',
      description: 'La catégorie de produit demandée n\'existe pas.'
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://centreautocameroun.com/produits/${params.category}`,
      siteName: 'Centre Auto Cameroun',
      locale: 'fr_FR',
      type: 'website',
    },
  };
}
