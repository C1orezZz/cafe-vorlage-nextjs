import { Metadata } from 'next'
import AboutPage from '@/components/pages/AboutPage'

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Lernen Sie die Geschichte des Café Rosenherz kennen - ein Ort voller Liebe, Magie und köstlichen Aromen.',
}

export default function AboutPageRoute() {
  return <AboutPage />
}
