import { Metadata } from 'next'
import MenuPage from '@/components/pages/MenuPage'

export const metadata: Metadata = {
  title: 'Speisekarte',
  description: 'Entdecken Sie unsere romantischen Köstlichkeiten - Kaffee, Frühstück, Torten und mehr.',
}

export default function SpeisekartePage() {
  return <MenuPage />
}
