import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Oceano Web | Transformacao Digital com IA & Machine Learning',
  description: 'Agencia digital especializada em transformacao digital, inteligencia artificial e machine learning. Crescimento, escala e produtividade para sua empresa.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
