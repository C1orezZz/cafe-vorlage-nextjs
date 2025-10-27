'use client'

import { motion } from 'framer-motion'
import { Heart, Flower2, Sparkles, Users } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Mit Herz gemacht',
    description: 'Jede Tasse wird mit viel Liebe und Leidenschaft für Sie zubereitet.',
  },
  {
    icon: Flower2,
    title: 'Voller Blumen',
    description: 'Unser Café ist ein blühendes Paradies der Entspannung und Freude.',
  },
  {
    icon: Sparkles,
    title: 'Romantische Atmosphäre',
    description: 'Einladende Räume, wo sich Liebende treffen und Glück verspüren.',
  },
  {
    icon: Users,
    title: 'Herzlicher Service',
    description: 'Unser Team begrüßt Sie mit einem Lächeln und viel Wärme.',
  },
]

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-rose-400 to-purple-400"></div>
              <span className="text-sm font-bold text-rose-600 uppercase tracking-wide">Unsere Geschichte</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Ein Ort voller Magie und Liebe
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Das Café Rosenherz wurde 2015 mit einem Traum gegründet: Einen magischen Ort zu schaffen, 
                wo sich Menschen verlieben können – in den Kaffee, in die Torten, in den Moment.
              </p>
              <p>
                Was als kleiner Raum mit ein paar Tischen begann, ist heute zu einem festen Ort der 
                Romantik in unserem Viertel geworden. Wir verwenden nur die frischesten Zutaten, 
                unsere Kaffeebohnen stammen von sorgfältig ausgewählten Plantagen.
              </p>
              <p className="text-rose-600 font-semibold">
                Willkommen in unserem kleinen Paradies! 🌸💖
              </p>
            </div>
          </motion.div>

          {/* Right - Image Placeholder with Decorative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-[3rem] overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:50px_50px]"></div>
              
              {/* Floating Items */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-10 text-7xl opacity-60"
              >
                🌹
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [360, 0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-32 right-16 text-8xl opacity-60"
              >
                💖
              </motion.div>
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-9xl">☕</div>
                  <div className="text-white text-2xl font-black">Café Rosenherz</div>
                </div>
              </div>
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-purple-400 rounded-full blur-2xl opacity-40"></div>
          </motion.div>
        </div>

        {/* Features Grid - Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rose-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                <feature.icon className="h-8 w-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
