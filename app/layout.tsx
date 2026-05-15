import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  PHONE_NUMBER_DISPLAY,
} from '@/lib/site-config'
import { LeadMagnetProvider } from '@/components/lead-magnet-provider'
import { LanguageProvider } from '@/lib/language-context'
import { ClientLayout } from '@/components/client-layout'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Oceano Web | Transformação Digital com IA & Machine Learning',
  description:
    'Agência digital especializada em transformação digital, inteligência artificial e machine learning. Crescimento, escala e produtividade para a sua empresa.',
  keywords: [
    'transformação digital',
    'inteligência artificial',
    'machine learning',
    'agência digital',
    'agência digital Portugal',
    'agência digital Brasil',
    'transformação digital Portugal',
    'inteligência artificial para empresas',
    'automação de processos Portugal',
    'growth marketing Portugal',
    'desenvolvimento web',
    'marketing digital',
    'automação',
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      pt: SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    alternateLocale: ['pt_BR'],
    url: SITE_URL,
    title: 'Oceano Web | Transformação Digital com IA & Machine Learning',
    description:
      'Parceiro estratégico para empresas que querem crescer com tecnologia. IA, machine learning e desenvolvimento web feitos para escalar.',
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Oceano Web, Agência de Transformação Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oceano Web | Transformação Digital com IA & Machine Learning',
    description:
      'Parceiro estratégico para empresas que querem crescer com tecnologia. IA, machine learning e desenvolvimento web feitos para escalar.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    // This project keeps favicon.ico in public/favicon.ico and serves it at
    // /favicon.ico. Google uses this file to display the icon in search results.
    shortcut: '/favicon.ico',
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: '512',
        height: '512',
      },
      email: CONTACT_EMAIL,
      telephone: PHONE_NUMBER_DISPLAY,
      serviceType: [
        'Transformação Digital',
        'Inteligência Artificial',
        'Machine Learning',
        'Desenvolvimento Web',
        'Marketing Digital',
      ],
      areaServed: [
        { '@type': 'Country', name: 'Portugal' },
        { '@type': 'Country', name: 'Brazil' },
      ],
      sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  ]

  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>
          <LeadMagnetProvider>
            <ClientLayout>{children}</ClientLayout>
          </LeadMagnetProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
