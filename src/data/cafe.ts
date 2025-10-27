import { CafeInfo } from '@/types'

export const cafeInfo: CafeInfo = {
  name: 'Café Rosenherz',
  description: 'Ein kleines romantisches Café voller Blumen, wo jede Tasse Kaffee eine Geschichte erzählt. Hier findest du den bezauberndsten Kaffee, köstliche Torten und eine Atmosphäre zum Verlieben.',
  address: 'Blumenstraße 7, 12345 Musterstadt',
  phone: '+49 123 456 789',
  email: 'willkommen@cafe-rosenherz.de',
  openingHours: [
    { day: 'Montag', open: '09:00', close: '18:00' },
    { day: 'Dienstag', open: '09:00', close: '18:00' },
    { day: 'Mittwoch', open: '09:00', close: '18:00' },
    { day: 'Donnerstag', open: '09:00', close: '18:00' },
    { day: 'Freitag', open: '09:00', close: '19:00' },
    { day: 'Samstag', open: '10:00', close: '19:00' },
    { day: 'Sonntag', open: '11:00', close: '17:00' }
  ],
  socialMedia: [
    { platform: 'Facebook', url: 'https://facebook.com/caferosenherz', icon: '📘' },
    { platform: 'Instagram', url: 'https://instagram.com/caferosenherz', icon: '📷' },
    { platform: 'Google', url: 'https://maps.google.com/caferosenherz', icon: '🗺️' }
  ]
}
