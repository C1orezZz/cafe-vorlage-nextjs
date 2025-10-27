import Link from 'next/link'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import { cafeInfo } from '@/data/cafe'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"></div>
      
      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Column - Full width on mobile */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-purple-400 rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-black text-white">ROSENHERZ</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              {cafeInfo.description}
            </p>
            
            {/* Contact Info - Cards */}
            <div className="space-y-4">
              <a href={`tel:${cafeInfo.phone}`} className="flex items-center space-x-3 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors group">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-semibold group-hover:text-rose-400 transition-colors">{cafeInfo.phone}</span>
              </a>
              <a href={`mailto:${cafeInfo.email}`} className="flex items-center space-x-3 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors group">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-semibold group-hover:text-pink-400 transition-colors">{cafeInfo.email}</span>
              </a>
              <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-semibold">{cafeInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-gray-400 hover:text-rose-400 transition-colors py-2">
                Erlebnis
              </Link>
              <Link href="/speisekarte" className="text-gray-400 hover:text-rose-400 transition-colors py-2">
                Köstlichkeiten
              </Link>
              <Link href="/reservierung" className="text-gray-400 hover:text-rose-400 transition-colors py-2">
                Reservieren
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-rose-400 transition-colors py-2">
                Geschichte
              </Link>
              <Link href="/kontakt" className="text-gray-400 hover:text-rose-400 transition-colors py-2">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Opening Hours Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-lg mb-6">Öffnungszeiten</h4>
            <div className="space-y-3">
              {cafeInfo.openingHours.map((hours) => (
                <div key={hours.day} className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-300 font-medium">{hours.day}</span>
                  <span className="text-white font-semibold">
                    {hours.closed ? 'Geschlossen' : `${hours.open} - ${hours.close}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Café Rosenherz. Mit ❤️ für Romantiker gemacht.
            </p>
            <div className="flex items-center space-x-6">
              {cafeInfo.socialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-rose-400 hover:to-purple-400 transition-all group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
