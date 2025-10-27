'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact submitted:', formData)
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    { icon: MapPin, label: 'Adresse', value: 'Blumenstraße 7, 12345 Musterstadt' },
    { icon: Phone, label: 'Telefon', value: '+49 123 456 789', href: 'tel:+49123456789' },
    { icon: Mail, label: 'E-Mail', value: 'willkommen@cafe-rosenherz.de', href: 'mailto:willkommen@cafe-rosenherz.de' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Centered Header */}
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="h-6 w-6 text-rose-500 mx-auto mb-4" />
          <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-lg text-gray-600">
            Schreiben Sie uns eine Nachricht oder rufen Sie uns an
          </p>
        </motion.div>
      </div>

      {/* Contact Cards - Horizontal */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactMethods.map((method) => (
            <div key={method.label} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-rose-300 transition-colors">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{method.label}</h3>
              {method.href ? (
                <a href={method.href} className="text-gray-600 hover:text-rose-600 transition-colors">
                  {method.value}
                </a>
              ) : (
                <p className="text-gray-600">{method.value}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Centered Form */}
      <div className="max-w-2xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Senden Sie uns eine Nachricht</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ihr Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ihre E-Mail
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Betreff
              </label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Worum geht es?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ihre Nachricht
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Schreiben Sie uns Ihre Nachricht..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gray-900 text-white hover:bg-gray-800 py-6 text-lg font-bold shadow-lg"
            >
              Nachricht senden
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
