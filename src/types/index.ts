export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'kaffee' | 'tee' | 'frühstück' | 'snacks' | 'getränke' | 'desserts'
  allergens?: string[]
  vegetarian?: boolean
  vegan?: boolean
  featured?: boolean
}

export interface ReservationFormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  specialRequests?: string
  privacy: boolean
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  privacy: boolean
}

export interface OpeningHours {
  day: string
  open: string
  close: string
  closed?: boolean
}

export interface CafeInfo {
  name: string
  description: string
  address: string
  phone: string
  email: string
  openingHours: OpeningHours[]
  socialMedia: {
    platform: string
    url: string
    icon: string
  }[]
}
