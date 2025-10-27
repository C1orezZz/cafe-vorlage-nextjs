'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-10 text-8xl opacity-5"
      >
        💖
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [360, 0, 360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-10 text-7xl opacity-5"
      >
        🌸
      </motion.div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content - Asymmetrical */}
            <div className="lg:col-span-7 space-y-8">
              {/* Small badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-3 rounded-full border-2 border-pink-200"
              >
                <Sparkles className="h-4 w-4 text-rose-500" />
                <span className="text-sm font-bold text-rose-600">Seit 2015 Ihr romantisches Paradies</span>
              </motion.div>

              {/* Main Headline - Large, Bold */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.1]">
                  <span className="block text-gray-900">Willkommen</span>
                  <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent transform -skew-x-12">
                    im Paradies
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed"
              >
                Ein Ort voller Liebe, wundervoller Aromen und unvergesslicher Momente. 
                Hier wird jeder Tag zu einer besonderen Geschichte.
              </motion.p>

              {/* CTA Buttons - Stacked */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Link href="/reservierung">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-purple-500 text-white hover:opacity-90 px-10 py-6 text-lg font-bold rounded-full shadow-xl transform hover:scale-105 transition-all">
                    Jetzt Tisch reservieren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/speisekarte">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-10 py-6 text-lg font-bold rounded-full">
                    Unsere Karte
                  </Button>
                </Link>
              </motion.div>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 pt-6"
              >
                {['Romantische Atmosphäre', 'Hausgemachte Torten', 'Premium Kaffee'].map((feature) => (
                  <div key={feature} className="px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-rose-100 rounded-full text-sm font-semibold text-gray-700 shadow-md">
                    {feature}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Visual - Offset, Diagonal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Main Image Container - Diagonal Slant */}
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-300 via-pink-300 to-purple-300 rounded-[3rem] transform rotate-6 blur-2xl opacity-60"></div>
                
                <div className="relative bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-[3rem] p-10 shadow-2xl">
                  {/* Coffee Cup Design */}
                  <div className="relative mx-auto" style={{ width: '300px', height: '350px' }}>
                    {/* Cup */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-64 bg-gradient-to-b from-white to-rose-100 rounded-b-full shadow-2xl"></div>
                    
                    {/* Coffee */}
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-52 bg-gradient-to-b from-rose-900 to-purple-900 rounded-b-full"
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl opacity-20">
                        💖
                      </div>
                    </motion.div>
                    
                    {/* Foam with heart */}
                    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-48 h-14 bg-gradient-to-b from-white to-rose-50 rounded-full flex items-center justify-center">
                      <span className="text-4xl">💕</span>
                    </div>
                    
                    {/* Handle */}
                    <div className="absolute right-4 bottom-40 w-12 h-24 border-4 border-white rounded-r-full"></div>
                    
                    {/* Petals */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute top-4 left-1/2 transform -translate-x-1/2 text-3xl"
                    >
                      🌸
                    </motion.div>
                  </div>
                  
                  {/* Tag */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-xl border-4 border-rose-200">
                    <p className="text-center text-rose-600 font-black text-xl">Rosentraum Latte</p>
                    <p className="text-center text-purple-600 font-bold">€6,90</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-20 -right-8 text-5xl opacity-70"
              >
                🌹
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [15, 0, 15] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 text-4xl opacity-70"
              >
                💖
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
