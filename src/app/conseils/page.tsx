'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaClock, FaUser } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: "Comment choisir les bons pneus pour votre véhicule",
    excerpt: "Guide complet pour sélectionner les pneus adaptés à votre voiture et à votre style de conduite",
    content: `Les pneus sont un élément crucial de la sécurité de votre véhicule. Voici les points essentiels à considérer :

1. La taille des pneus
- Vérifiez les dimensions recommandées dans le manuel de votre véhicule
- Respectez les indices de charge et de vitesse

2. Le type de pneus
- Pneus été : adhérence optimale sur route sèche
- Pneus hiver : meilleure traction sur routes froides et humides
- Pneus 4 saisons : compromis pour une utilisation toute l'année

3. La marque et le budget
- Privilégiez les marques reconnues pour leur qualité
- Comparez les prix tout en gardant à l'esprit la sécurité`,
    image: "/images/conseils/pneus-choix.jpg",
    author: "Patrice",
    date: "2025-04-15",
    category: "Pneus"
  },
  {
    id: 2,
    title: "L'importance de la vidange régulière",
    excerpt: "Pourquoi et quand faire la vidange de votre véhicule pour optimiser sa durée de vie",
    content: `La vidange est une opération d&apos;entretien essentielle pour votre véhicule. Voici pourquoi :

1. Rôle de l&apos;huile moteur
- Lubrification des pièces en mouvement
- Refroidissement du moteur
- Protection contre la corrosion

2. Fréquence recommandée
- Tous les 10 000 km ou une fois par an
- Plus fréquemment en cas de conditions difficiles
- Suivre les recommandations du constructeur

3. Conséquences d'un manque d'entretien
- Usure prématurée du moteur
- Consommation excessive
- Risque de panne grave`,
    image: "/images/conseils/vidange.jpg",
    author: "Arsene",
    date: "2025-04-10",
    category: "Entretien"
  },
  {
    id: 3,
    title: "Les voyants du tableau de bord : que signifient-ils ?",
    excerpt: "Guide pratique pour comprendre les différents voyants d'alerte de votre véhicule",
    content: `Le tableau de bord de votre voiture vous communique des informations importantes :

1. Voyants rouges : Danger immédiat
- Pression d'huile
- Température moteur
- Freinage
- Batterie

2. Voyants orange : Attention requise
- Moteur (check engine)
- ABS
- ESP
- Airbag

3. Que faire en cas d'alerte ?
- Consultez le manuel du véhicule
- Contactez un professionnel si nécessaire
- Ne négligez pas les alertes`,
    image: "/images/conseils/voyants.jpg",
    author: "Samy",
    date: "2025-04-05",
    category: "Sécurité"
  }
];

export default function Conseils() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(articles.map(article => article.category))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Conseils <span className="text-blue-600">Automobiles</span>
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Découvrez nos conseils d&apos;experts pour l&apos;entretien et la maintenance de votre véhicule
        </p>

        {/* Barre de recherche et filtres */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArticle(selectedArticle === article.id ? null : article.id)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  {selectedArticle === article.id ? 'Fermer' : 'Lire la suite'}
                </button>

                {selectedArticle === article.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="prose prose-blue max-w-none">
                      {article.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
