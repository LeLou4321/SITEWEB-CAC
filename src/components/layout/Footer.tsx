"use client"

import * as React from "react"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, Phone, MessageCircle } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const siege = {
  ville: "Yaoundé (Siège)",
  adresse: "Av Mvog Fouda Ada, Jaco",
  tel: "+237 690 90 10 10",
  email: "contact@centreautocameroun.com",
  whatsapp: "+237690901010"
};

export default function Footer() {
  // Utiliser le hook useTheme pour accéder au thème actuel et à la fonction pour le changer
  const { theme, setTheme } = useTheme()
  
  // Vérifier si le thème actuel est sombre
  const isDarkMode = theme === 'dark'

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      {/* Bande jaune */}
      <div className="bg-yellow-500 h-1"></div>
      
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Restez Connecté</h2>
            <p className="mb-6 text-muted-foreground">
              Rejoignez notre newsletter pour les dernières mises à jour et offres exclusives.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Entrez votre email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-yellow-500 text-white transition-transform hover:scale-105 hover:bg-yellow-600"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">S&apos;abonner</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-yellow-500/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liens Rapides</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block transition-colors hover:text-yellow-500">
                Accueil
              </Link>
              <Link href="/a-propos" className="block transition-colors hover:text-yellow-500">
                À Propos
              </Link>
              <Link href="/services" className="block transition-colors hover:text-yellow-500">
                Services
              </Link>
              <Link href="/produits" className="block transition-colors hover:text-yellow-500">
                Produits
              </Link>
              <Link href="/contact" className="block transition-colors hover:text-yellow-500">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contactez-nous</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>{siege.adresse}</p>
              <p>{siege.ville}, Cameroun</p>
              <p>Téléphone: {siege.tel}</p>
              <p>Email: {siege.email}</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Suivez-nous</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Suivez-nous sur Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Suivez-nous sur Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Suivez-nous sur Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connectez-vous avec nous sur LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={(checked) => {
                  setTheme(checked ? 'dark' : 'light')
                }}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Basculer en mode sombre
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Centre Auto Cameroun. Tous droits réservés.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/conditions" className="transition-colors hover:text-yellow-500">
              Conditions d&apos;utilisation
            </Link>
            <Link href="/rgpd" className="transition-colors hover:text-yellow-500">
              RGPD et vie privée
            </Link>
            <Link href="/retour" className="transition-colors hover:text-yellow-500">
              Politique de retour
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Boutons fixes */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href={`tel:${siege.tel}`} 
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="h-5 w-5" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Appelez-nous</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href={`https://wa.me/${siege.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Discutez avec nous sur WhatsApp</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  );
}
