import type { Metadata } from 'next'
import { GuiaContent } from '@/components/guia-content'

export const metadata: Metadata = {
  title: 'Guia Gratuito de Automação | Oceano Web',
  description:
    '10 processos práticos que qualquer empresa pode automatizar essa semana. Sem equipe técnica e sem grande investimento.',
  robots: { index: true, follow: true },
}

export default function GuiaPage() {
  return <GuiaContent />
}
