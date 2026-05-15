'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'

type ConsentState = 'accepted' | 'rejected' | null

const STORAGE_KEY = 'cookie-consent'

function readStorage(): ConsentState {
  if (typeof localStorage === 'undefined') return null
  return localStorage.getItem(STORAGE_KEY) as ConsentState | null
}

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(() => readStorage())
  const [showBanner, setShowBanner] = useState(() => readStorage() === null)
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    const handler = () => setShowBanner(true)
    window.addEventListener('cookie-preferences-open', handler)
    return () => window.removeEventListener('cookie-preferences-open', handler)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
    setShowBanner(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setConsent('rejected')
    setShowBanner(false)
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'denied' })
    }
  }

  return (
    <>
      {consent === 'accepted' && gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="ga-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card px-6 py-5 shadow-2xl md:bottom-6 md:left-6 md:right-auto md:max-w-md md:rounded-2xl md:border"
        >
          <p id="cookie-title" className="font-heading text-base font-semibold text-foreground">
            Utilizamos cookies
          </p>
          <p id="cookie-desc" className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Usamos cookies analíticos (Google Analytics) para compreender como os visitantes
            interagem com o site. Não partilhamos dados com terceiros para fins publicitários sem o
            seu consentimento.{' '}
            <Link href="/privacidade" className="underline hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={accept}
              className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Aceitar todos
            </button>
            <button
              onClick={reject}
              className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              Apenas essenciais
            </button>
          </div>
        </div>
      )}
    </>
  )
}
