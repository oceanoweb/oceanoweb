'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { useLeadMagnet } from '@/components/lead-magnet-provider'
import { useLanguage } from '@/lib/language-context'
import {
  getCookie,
  setCookie,
  LEAD_SUBMITTED_COOKIE,
  BANNER_DISMISSED_COOKIE,
} from '@/lib/cookies'

const BANNER_HEIGHT = '40px'
const HIDDEN_PATHS = new Set(['/obrigado', '/guia'])

export function TopBanner() {
  const pathname = usePathname()
  const { openModal } = useLeadMagnet()
  const { t } = useLanguage()
  const lm = t.leadMagnet
  const [dismissed, setDismissed] = useState(false)

  const visible =
    !dismissed &&
    !HIDDEN_PATHS.has(pathname) &&
    getCookie(LEAD_SUBMITTED_COOKIE) === null &&
    getCookie(BANNER_DISMISSED_COOKIE) === null

  useEffect(() => {
    document.documentElement.style.setProperty('--banner-h', visible ? BANNER_HEIGHT : '0px')
  }, [visible])

  const dismiss = () => {
    setCookie(BANNER_DISMISSED_COOKIE, '1', 1)
    setDismissed(true)
  }

  if (!visible) return null

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] flex items-center justify-center gap-3 bg-primary px-10 py-2.5 text-sm font-medium text-primary-foreground">
      <span className="hidden sm:inline">{lm.bannerText}</span>
      <span className="sm:hidden">{lm.badge}</span>
      <button
        onClick={openModal}
        className="shrink-0 rounded-md bg-primary-foreground px-3 py-1 text-xs font-semibold text-primary transition hover:bg-primary-foreground/80"
      >
        {lm.bannerCta}
      </button>
      <button
        onClick={dismiss}
        aria-label={lm.closeBanner}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 transition hover:bg-primary-foreground/10"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
