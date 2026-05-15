'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LeadMagnetModal } from '@/components/lead-magnet-modal'
import {
  getCookie,
  setCookie,
  LEAD_SUBMITTED_COOKIE,
  EXIT_DISMISSED_COOKIE,
} from '@/lib/cookies'

interface LeadMagnetContextValue {
  openModal: () => void
}

const LeadMagnetContext = createContext<LeadMagnetContextValue>({ openModal: () => {} })

export function useLeadMagnet() {
  return useContext(LeadMagnetContext)
}

const NO_TRIGGER_PATHS = new Set(['/obrigado', '/guia'])

export function LeadMagnetProvider({ children }: { readonly children: React.ReactNode }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const exitIntentTriggered = useRef(false)
  const isBlocked = NO_TRIGGER_PATHS.has(pathname)

  const openModal = useCallback(() => setIsOpen(true), [])

  useEffect(() => {
    if (isBlocked) return

    const shouldFire = () =>
      !getCookie(LEAD_SUBMITTED_COOKIE) && !getCookie(EXIT_DISMISSED_COOKIE)

    const handleMouseLeave = (e: MouseEvent) => {
      if (!shouldFire() || exitIntentTriggered.current) return
      if (e.clientY <= 0) {
        exitIntentTriggered.current = true
        setIsOpen(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [isBlocked])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    if (exitIntentTriggered.current) {
      setCookie(EXIT_DISMISSED_COOKIE, '1', 1)
    }
    exitIntentTriggered.current = false
  }, [])

  const handleSubmitted = useCallback(() => {
    exitIntentTriggered.current = false
    setIsOpen(false)
  }, [])

  return (
    <LeadMagnetContext.Provider value={{ openModal }}>
      {children}
      {isOpen && <LeadMagnetModal onClose={handleClose} onSubmitted={handleSubmitted} />}
    </LeadMagnetContext.Provider>
  )
}
