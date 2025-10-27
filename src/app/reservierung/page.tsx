import { Metadata } from 'next'
import ReservationPage from '@/components/pages/ReservationPage'

export const metadata: Metadata = {
  title: 'Reservierung',
  description: 'Reservieren Sie einen Tisch im Café Rosenherz für ein romantisches Erlebnis.',
}

export default function ReservierungPage() {
  return <ReservationPage />
}
