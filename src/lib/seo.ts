import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Café Rosenherz - Romantisches Café & Blumen',
    template: '%s | Café Rosenherz'
  },
  description: 'Ein kleines romantisches Café voller Blumen, wo jede Tasse Kaffee eine Geschichte erzählt. Hier findest du den bezauberndsten Kaffee, köstliche Torten und eine Atmosphäre zum Verlieben.',
  keywords: [
    'Café',
    'romantisch',
    'Blumen',
    'Kaffee',
    'Rosen',
    'Frühstück',
    'Torten',
    'Herzen',
    'Latte',
    'Kuchen',
    'Cappuccino',
    'Fröhlich',
    'Blümchen Café',
    'Romantik'
  ],
  authors: [{ name: 'Café Rosenherz' }],
  creator: 'Café Rosenherz',
  publisher: 'Café Rosenherz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cafe-rosenherz.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://cafe-rosenherz.de',
    title: 'Café Rosenherz - Romantisches Café & Blumen',
    description: 'Ein kleines romantisches Café voller Blumen, wo jede Tasse Kaffee eine Geschichte erzählt.',
    siteName: 'Café Rosenherz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Café Rosenherz - Romantisches Café & Blumen',
    description: 'Ein kleines romantisches Café voller Blumen, wo jede Tasse Kaffee eine Geschichte erzählt.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: 'Café Rosenherz',
    description: 'Romantisches Café mit bezauberndem Kaffee und köstlichen Torten',
    url: 'https://cafe-rosenherz.de',
    telephone: '+49 123 456 789',
    email: 'willkommen@cafe-rosenherz.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Blumenstraße 7',
      addressLocality: 'Musterstadt',
      postalCode: '12345',
      addressCountry: 'DE',
    },
    openingHours: [
      'Mo-Th 09:00-18:00',
      'Fr 09:00-19:00',
      'Sa 10:00-19:00',
      'Su 11:00-17:00'
    ],
    priceRange: '€€',
    acceptsReservations: true,
    sameAs: [
      'https://facebook.com/caferosenherz',
      'https://instagram.com/caferosenherz'
    ]
  }
}
