'use client'

import { motion } from 'framer-motion'
import { Heart, Flower2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const menuItems = [
  {
    icon: Heart,
    title: 'Romantischer Kaffee',
    items: ['Rosentraum Latte', 'Herzens-Cappuccino', 'Lavendel Latte', 'Valentine Espresso'],
    prices: [6.90, 5.50, 6.20, 3.90],
    color: 'from-rose-400',
    rotate: -2
  },
  {
    icon: Flower2,
    title: 'Blumiger Frühstück',
    items: ['Rosen-Waffeln', 'Blütentraum Toast', 'Frühstück des Verliebten', 'Herzen-Pfannkuchen'],
    prices: [9.90, 8.50, 14.90, 10.50],
    color: 'from-pink-400',
    rotate: 2
  },
  {
    icon: Sparkles,
    title: 'Zauberhafte Torten',
    items: ['Rosenherz Torte', 'Lavendel Käse', 'Himbeer-Liebe', 'Schokoladen-Träume'],
    prices: [8.90, 7.50, 9.20, 8.50],
    color: 'from-purple-400',
    rotate: -1
  },
]

export default function MenuSection() {
  return (
    <section className="py-24 bg-white relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header - Offset */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-rose-400 to-purple-400"></div>
            <span className="text-sm font-bold text-rose-600 uppercase tracking-wide">Unsere Köstlichkeiten</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
          >
            Jede Tasse ist ein Kunstwerk
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mt-6"
          >
            Liebevoll zubereitet, mit den besten Zutaten und viel Herz
          </motion.p>
        </div>

        {/* Menu Cards - Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              style={{ transform: `rotate(${category.rotate}deg)` }}
            >
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:-rotate-0 group-hover:scale-105">
                {/* Icon Badge */}
                <div className={`absolute -top-6 left-6 w-14 h-14 bg-gradient-to-br ${category.color} to-purple-400 rounded-2xl flex items-center justify-center shadow-xl`}>
                  <category.icon className="h-7 w-7 text-white fill-white" />
                </div>

                <div className="pt-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-8">{category.title}</h3>
                  
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 group/item">
                        <span className="text-gray-700 font-semibold group-hover/item:text-rose-600 transition-colors">{item}</span>
                        <span className={`text-lg font-black bg-gradient-to-r ${category.color} to-purple-400 bg-clip-text text-transparent`}>
                          €{category.prices[itemIndex].toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {category.icon === Heart ? '💖' : category.icon === Flower2 ? '🌺' : '✨'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/speisekarte">
            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-purple-500 text-white hover:opacity-90 px-10 py-6 text-lg font-bold rounded-full shadow-xl transform hover:scale-105 transition-all">
              Vollständige Karte ansehen
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
