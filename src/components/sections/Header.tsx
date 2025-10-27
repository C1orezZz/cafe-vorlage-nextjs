'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cafeInfo } from '@/data/cafe'

const navigation = [
  { name: 'Erlebnis', href: '/' },
  { name: 'Köstlichkeiten', href: '/speisekarte' },
  { name: 'Reservieren', href: '/reservierung' },
  { name: 'Geschichte', href: '/about' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400"></div>
      
      {/* Main header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-pink-100/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - positioned diagonally */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative transform -rotate-12 group-hover:rotate-12 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="h-6 w-6 text-white fill-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="transform -rotate-1">
                <span className="block text-2xl font-black text-rose-600">ROSENHERZ</span>
                <span className="block text-xs font-medium text-purple-500 -mt-1">Café</span>
              </div>
            </Link>
            
            {/* Desktop Navigation - diagonal style */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-rose-600 transition-colors group"
                  style={{ transform: `rotate(${(index - navigation.length / 2) * 2}deg)` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/reservierung">
                <Button className="bg-gradient-to-r from-rose-400 to-purple-400 text-white hover:opacity-90 px-6 py-2 rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform">
                  Reservieren
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-pink-50"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white fill-white" />
                </div>
                <span className="text-xl font-black text-rose-600">ROSENHERZ</span>
              </div>
              <button
                type="button"
                className="rounded-lg p-2 text-gray-700 hover:bg-pink-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-rose-600 rounded-xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <a href={`tel:${cafeInfo.phone}`} className="block text-center text-rose-600 font-bold text-lg mb-4">
                {cafeInfo.phone}
              </a>
              <Link href="/reservierung">
                <Button className="w-full bg-gradient-to-r from-rose-400 to-purple-400 text-white py-3 rounded-full font-bold">
                  Reservieren
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
