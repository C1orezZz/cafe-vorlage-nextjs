'use client'

import { motion } from 'framer-motion'
import { Coffee, Heart, Sparkles, Users } from 'lucide-react'

const features = [
  { icon: Heart, title: 'Mit Liebe', description: 'Jede Kreation mit Hingabe zubereitet' },
  { icon: Users, title: 'Gemeinschaft', description: 'Ort der Begegnung und Verbindung' },
  { icon: Coffee, title: 'Exzellenz', description: 'Höchste Qualität in allen Bereichen' },
  { icon: Sparkles, title: 'Magie', description: 'Jeder Moment wird besonders' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Full Width Hero Image */}
      <div className="relative h-[400px] bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-9xl mb-6">☕</div>
            <h1 className="text-6xl sm:text-7xl font-black mb-4">Café Rosenherz</h1>
            <p className="text-xl opacity-90">Ein Ort voller Liebe seit 2015</p>
          </div>
        </div>
      </div>

      {/* Story Content - Blog Style */}
      <article className="max-w-4xl mx-auto px-6 py-20">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-bold mb-6">
              Unsere Geschichte
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              2015 begann unser Traum
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Das Café Rosenherz wurde mit der Vision gegründet, einen magischen Ort zu schaffen, 
              wo sich Menschen verlieben können – in den Kaffee, in die Torten, in den Moment selbst.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Was als kleiner Raum mit einer handvoll Tischen begann, ist heute zu einem festen Ort der 
              Romantik in unserem Viertel geworden. Wir verwenden nur die frischesten Zutaten, unsere 
              Kaffeebohnen stammen von sorgfältig ausgewählten Plantagen, und jede Torte wird täglich in 
              unserer eigenen Konditorei mit echten Früchten und Blüten verziert.
            </p>
          </motion.div>
        </div>

        {/* Image Placeholder - Large */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative h-96 bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl">🌹</div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-black text-gray-900 mb-6">Unsere Philosophie</h3>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Jede Tasse Kaffee, jede Torte, jeder Moment in unserem Café ist durchdrungen von Liebe und 
              Aufmerksamkeit. Wir glauben daran, dass Essen und Trinken mehr ist als bloße Nahrungsaufnahme – 
              es ist eine Erfahrung, die Menschen zusammenbringt und Erinnerungen schafft.
            </p>
            <p>
              Unsere Gäste sind für uns wie Familie. Wir feiern mit Ihnen, trösten Sie, und freuen uns über 
              jeden Tag, den Sie bei uns verbringen. Das Café Rosenherz ist mehr als ein Café – es ist ein 
              Zuhause voller Wärme, Freude und unvergesslicher Momente.
            </p>
          </div>
        </motion.div>

        {/* Features Grid - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-black text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA - Simple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t-2 border-gray-200 pt-12 text-center"
        >
          <h3 className="text-3xl font-black text-gray-900 mb-4">Besuchen Sie uns</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Erleben Sie selbst die Magie unseres Cafés
          </p>
          <a
            href="/reservierung"
            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            Tisch reservieren
          </a>
        </motion.div>
      </article>
    </div>
  )
}
