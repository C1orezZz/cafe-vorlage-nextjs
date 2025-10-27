'use client'

import { motion } from 'framer-motion'
import { Sparkles, Heart } from 'lucide-react'

const menuCategories = [
  {
    id: 'kaffee',
    name: 'Romantischer Kaffee',
    icon: '☕',
    color: 'rose',
    items: [
      { id: '1', name: 'Rosentraum Latte', description: 'Mit echten Rosenblüten und Lavendel', price: 6.90 },
      { id: '2', name: 'Herzens-Cappuccino', description: 'Mit Herz-Foam-Art', price: 5.50 },
      { id: '3', name: 'Lavendel Latte', description: 'Zartes Lavendelaroma', price: 6.20 },
      { id: '4', name: 'Valentine Espresso', description: 'Intensiv und romantisch', price: 3.90 },
    ]
  },
  {
    id: 'tee',
    name: 'Blumiger Tee',
    icon: '🌺',
    color: 'pink',
    items: [
      { id: '7', name: 'Rosentee', description: 'Zarter Rosenblütentee', price: 5.50 },
      { id: '8', name: 'Lavendel Tee', description: 'Beruhigend und aromatisch', price: 5.90 },
      { id: '9', name: 'Chai Latte', description: 'Mit Gewürzen und Blumenhonig', price: 6.50 },
    ]
  },
  {
    id: 'frühstück',
    name: 'Blumiges Frühstück',
    icon: '🥐',
    color: 'purple',
    items: [
      { id: '11', name: 'Rosen-Waffeln', description: 'Mit Rosenblüten und Puderzucker', price: 9.90 },
      { id: '12', name: 'Blütentraum Toast', description: 'Mit Avocado, Rucola und Blumen', price: 8.50 },
      { id: '13', name: 'Frühstück des Verliebten', description: 'Eier, Speck, Toast und Blumen', price: 14.90 },
    ]
  },
  {
    id: 'desserts',
    name: 'Zauberhafte Torten',
    icon: '🎂',
    color: 'rose',
    items: [
      { id: '16', name: 'Rosenherz Torte', description: 'Schokolade mit Rosencreme', price: 8.90 },
      { id: '17', name: 'Lavendel Käsekuchen', description: 'Mit Lavendel und Himbeeren', price: 7.50 },
      { id: '18', name: 'Himbeer-Liebe', description: 'Himbeer-Vanille-Torte', price: 9.20 },
    ]
  },
]

const colorClasses = {
  rose: {
    bg: 'bg-rose-500',
    text: 'text-rose-600',
    border: 'border-rose-200',
    gradient: 'from-rose-500 to-pink-500'
  },
  pink: {
    bg: 'bg-pink-500',
    text: 'text-pink-600',
    border: 'border-pink-200',
    gradient: 'from-pink-500 to-rose-500'
  },
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-600',
    border: 'border-purple-200',
    gradient: 'from-purple-500 to-pink-500'
  }
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      {/* Minimalist Header */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles className="h-5 w-5 text-rose-500" />
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Unsere Speisekarte</span>
          </div>
          <h1 className="text-6xl sm:text-8xl font-black text-gray-900 mb-4">
            Köstlichkeiten
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Jede Kreation eine kleine Geschichte der Liebe
          </p>
        </motion.div>
      </div>

      {/* Menu Categories - Single Column Large Cards */}
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {menuCategories.map((category, index) => {
          const colors = colorClasses[category.color as keyof typeof colorClasses]
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Category Title - Full Width */}
              <div className={`mb-4 pl-2 border-l-4 ${colors.border}`}>
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl font-black text-gray-900">{category.name}</h2>
                </div>
              </div>

              {/* Items - Single Column */}
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden bg-white rounded-xl border border-gray-200 hover:border-rose-300 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between p-5">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <div className={`ml-6 text-3xl font-black bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                        €{item.price.toFixed(2)}
                      </div>
                    </div>
                    
                    {/* Hover Effect Line */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colors.gradient} w-0 group-hover:w-full transition-all duration-300`}></div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA - Different Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 mt-24"
      >
        <div className="relative overflow-hidden bg-white rounded-2xl border-2 border-gray-900 p-12">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-8xl">💖</div>
            <div className="absolute bottom-10 right-10 text-8xl">🌹</div>
          </div>
          
          <div className="relative text-center">
            <h3 className="text-4xl font-black text-gray-900 mb-4">Besuchen Sie uns</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Erleben Sie unsere Köstlichkeiten in romantischer Atmosphäre
            </p>
            <a
              href="/reservierung"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              <Heart className="h-5 w-5" />
              <span>Reservieren</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
