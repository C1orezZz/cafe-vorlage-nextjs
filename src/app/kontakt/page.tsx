import { Metadata } from 'next'
import ContactPage from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie das Café Rosenherz - wir freuen uns auf Ihre Nachricht.',
}

export default function KontaktPage() {
  return <ContactPage />
}
