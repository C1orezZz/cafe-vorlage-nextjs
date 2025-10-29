'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Mail, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import Link from 'next/link'

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30'
]

const getCurrentMonthDates = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const dates = []
  
  for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
    dates.push(new Date(d))
  }
  
  return dates
}

export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [guests, setGuests] = useState(2)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime || !name || !email || !phone) {
      alert('Bitte füllen Sie alle Pflichtfelder aus')
      return
    }
    setConfirmed(true)
    // In production, send to backend here
    console.log('Reservation:', { selectedDate, selectedTime, guests, name, email, phone, notes })
  }

  const changeMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + (direction === 'next' ? 1 : -1)))
  }

  const isDateAvailable = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today
  }

  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false
    return date.toISOString().split('T')[0] === selectedDate
  }

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  const handleDateClick = (date: Date) => {
    if (!isDateAvailable(date)) return
    setSelectedDate(date.toISOString().split('T')[0])
    setSelectedTime('') // Reset time when date changes
  }

  if (confirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="h-10 w-10 text-white" />
          </motion.div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Reservierung bestätigt!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Wir haben Ihre Reservierung erhalten und senden Ihnen eine Bestätigung per E-Mail.
          </p>
          <div className="bg-white rounded-2xl border-2 border-green-200 p-8 mb-8">
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="font-semibold">{formatDateDisplay(selectedDate)}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="font-semibold">{selectedTime} Uhr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-green-600" />
                <span className="font-semibold">{guests} {guests === 1 ? 'Person' : 'Personen'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="font-semibold">{email}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => {
                setConfirmed(false)
                setSelectedDate('')
                setSelectedTime('')
                setName('')
                setEmail('')
                setPhone('')
                setNotes('')
              }}
              className="bg-gray-900 text-white px-8 py-3"
            >
              Neue Reservierung
            </Button>
            <Link href="/" className="inline-block px-8 py-3 border-2 border-gray-900 rounded-lg font-bold hover:bg-gray-50">
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Sparkles className="h-6 w-6 text-rose-500 mx-auto mb-4" />
          <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-4">
            Tisch reservieren
          </h1>
          <p className="text-lg text-gray-600">
            Wählen Sie Datum, Uhrzeit und Anzahl der Gäste
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Calendar & Time */}
          <div className="space-y-8">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => changeMonth('prev')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <h3 className="text-xl font-bold">
                  {currentMonth.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
                </h3>
                <button
                  onClick={() => changeMonth('next')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 42 }).map((_, idx) => {
                  const dates = getCurrentMonthDates()
                  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()
                  const daysBefore = (firstDay + 6) % 7
                  
                  if (idx < daysBefore || idx >= daysBefore + dates.length) {
                    return <div key={idx} className="h-10" />
                  }
                  
                  const date = dates[idx - daysBefore]
                  const available = isDateAvailable(date)
                  const selected = isDateSelected(date)
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleDateClick(date)}
                      disabled={!available}
                      className={`
                        h-10 rounded-lg text-sm font-medium transition-all
                        ${!available ? 'text-gray-300 cursor-not-allowed' : ''}
                        ${selected ? 'bg-gray-900 text-white shadow-lg scale-105' : ''}
                        ${!selected && available ? 'hover:bg-gray-100 text-gray-700' : ''}
                        ${date.getDate() === new Date().getDate() && !selected ? 'border-2 border-gray-900' : ''}
                      `}
                    >
                      {date.getDate()}
                    </button>
                  )
                })}
              </div>

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-lg"
                >
                  <p className="text-sm text-rose-900">
                    <strong>Ausgewählt:</strong> {formatDateDisplay(selectedDate)}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Time Slots */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-rose-500" />
                  <span>Uhrzeit wählen</span>
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        px-4 py-3 rounded-lg text-sm font-medium transition-all
                        ${selectedTime === time
                          ? 'bg-gray-900 text-white shadow-lg'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Guest Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Users className="h-5 w-5 text-rose-500" />
                <span>Anzahl Personen</span>
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-gray-900 font-bold text-lg transition-colors"
                >
                  −
                </button>
                <span className="text-4xl font-black flex-1 text-center">{guests}</span>
                <button
                  onClick={() => setGuests(Math.min(8, guests + 1))}
                  className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-gray-900 font-bold text-lg transition-colors"
                >
                  +
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sticky top-24">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Ihre Daten</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+49 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Besondere Wünsche
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Hinweise zu Allergien, bevorzugte Platzierung, etc."
                  />
                </div>

                {/* Reservation Summary */}
                {selectedDate && selectedTime && (
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3">Ihre Reservierung:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Datum:</span>
                        <span className="font-semibold">{formatDateDisplay(selectedDate).split(',')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Uhrzeit:</span>
                        <span className="font-semibold">{selectedTime} Uhr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Personen:</span>
                        <span className="font-semibold">{guests}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 py-6 text-lg font-bold shadow-lg"
                  disabled={!selectedDate || !selectedTime}
                >
                  Reservierung absenden
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Wir bestätigen Ihre Reservierung per E-Mail innerhalb von 24 Stunden.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
