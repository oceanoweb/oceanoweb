'use client'

import dynamic from 'next/dynamic'

const TopBanner = dynamic(
  () => import('@/components/top-banner').then((m) => ({ default: m.TopBanner })),
  { ssr: false }
)
const CookieConsent = dynamic(
  () => import('@/components/cookie-consent').then((m) => ({ default: m.CookieConsent })),
  { ssr: false }
)

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBanner />
      {children}
      <CookieConsent />
    </>
  )
}
