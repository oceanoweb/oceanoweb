import type { Metadata } from 'next'
import { ObrigadoContent } from '@/components/obrigado-content'

export const metadata: Metadata = {
  title: 'Obrigado | Oceano Web',
  description: 'O seu guia foi enviado com sucesso.',
  robots: { index: false, follow: false },
}

export default function ObrigadoPage() {
  return <ObrigadoContent />
}
