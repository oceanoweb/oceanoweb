'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { BrevoForm } from '@/components/brevo-form'
import { useLanguage } from '@/lib/language-context'

interface LeadMagnetModalProps {
  readonly onClose: () => void
  readonly onSubmitted?: () => void
}

export function LeadMagnetModal({ onClose, onSubmitted }: LeadMagnetModalProps) {
  const { t } = useLanguage()
  const lm = t.leadMagnet
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

    content.querySelectorAll<HTMLElement>(FOCUSABLE)[0]?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = content.querySelectorAll<HTMLElement>(FOCUSABLE)
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lm-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div ref={contentRef} className="relative w-full max-w-md rounded-2xl border border-primary/20 bg-background p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label={lm.closeModal}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {lm.badge}
        </span>

        <h2 id="lm-title" className="mt-4 font-heading text-2xl font-bold leading-snug text-foreground">
          {lm.title}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {lm.modalDescription}
        </p>

        <div className="mt-6">
          <BrevoForm compact onSubmitted={onSubmitted} />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 block w-full text-center text-xs text-muted-foreground transition hover:text-foreground"
        >
          {lm.noThanks}
        </button>
      </div>
    </div>
  )
}
