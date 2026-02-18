import React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_DISPLAY,
} from "@/lib/site-config"
import { GoogleAnalytics } from "@/components/google-analytics"

import "./globals.css"

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Oceano Web | Transformacao Digital com IA & Machine Learning",
  description:
    "Agencia digital especializada em transformacao digital, inteligencia artificial e machine learning. Crescimento, escala e produtividade para sua empresa.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: "Oceano Web | Transformacao Digital com IA & Machine Learning",
    description:
      "Agencia digital especializada em transformacao digital, inteligencia artificial e machine learning. Crescimento, escala e produtividade para sua empresa.",
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Oceano Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oceano Web | Transformacao Digital com IA & Machine Learning",
    description:
      "Agencia digital especializada em transformacao digital, inteligencia artificial e machine learning. Crescimento, escala e produtividade para sua empresa.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.jpg`,
        width: "512",
        height: "512",
      },
      email: CONTACT_EMAIL,
      telephone: WHATSAPP_DISPLAY,
      sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  ]

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
