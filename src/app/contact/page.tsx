'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
  // TODO: Créer un compte sur formspree.io et remplacer "xxxxxxxyyy" par votre ID de formulaire réel
  const [state, handleSubmit] = useForm("xwpovlye");
  
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Contactez-<span className="text-yellow-500">nous</span>
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Notre équipe est à votre disposition pour répondre à toutes vos questions
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulaire de contact */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {state.succeeded ? (
              <div className="text-center py-8">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Message envoyé avec succès !</h2>
                <p className="text-gray-600 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Votre nom"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="votre@email.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="+237 6XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Demande d'information">Demande d'information</option>
                      <option value="Rendez-vous">Rendez-vous</option>
                      <option value="Devis">Devis</option>
                      <option value="Réclamation">Réclamation</option>
                      <option value="Autre">Autre</option>
                    </select>
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Votre message..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <ValidationError errors={state.errors} />
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {state.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
          
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Nos coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-600">123 Rue Principale, Yaoundé, Cameroun</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-yellow-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-600">+237 690 90 10 10</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-yellow-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@centreautocameroun.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="text-yellow-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Heures d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 8h00 - 18h00</p>
                    <p className="text-gray-600">Samedi: 9h00 - 15h00</p>
                    <p className="text-gray-600">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Nos agences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-yellow-500">Yaoundé (Siège)</h3>
                  <p className="text-gray-600">123 Rue Principale, Yaoundé</p>
                  <p className="text-gray-600">+237 6XX XXX XXX</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-yellow-500">Douala</h3>
                  <p className="text-gray-600">456 Avenue Centrale, Douala</p>
                  <p className="text-gray-600">+237 6XX XXX XXX</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-yellow-500">Bafoussam</h3>
                  <p className="text-gray-600">789 Boulevard Principal, Bafoussam</p>
                  <p className="text-gray-600">+237 6XX XXX XXX</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-yellow-500">Ngaoundéré</h3>
                  <p className="text-gray-600">101 Rue du Marché, Ngaoundéré</p>
                  <p className="text-gray-600">+237 6XX XXX XXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Maps (à remplacer par l'iframe de votre emplacement réel) */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127505.34564819161!2d11.447486041947852!3d3.8666673581844856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2zWWFvdW5kw6k!5e0!3m2!1sfr!2scm!4v1619450269722!5m2!1sfr!2scm" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Centre Auto Cameroun - Localisation"
          ></iframe>
        </div>
      </div>
    </main>
  );
}