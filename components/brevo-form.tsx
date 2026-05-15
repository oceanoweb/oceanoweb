'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'
import { submitBrevoForm, type BrevoFormError } from '@/app/actions/submit-brevo-form'
import { markLeadSubmitted } from '@/lib/cookies'

interface BrevoFormProps {
  readonly onSubmitted?: () => void
  readonly compact?: boolean
}

export function BrevoForm({ onSubmitted, compact = false }: Readonly<BrevoFormProps>) {
  const router = useRouter()
  const { t } = useLanguage()
  const lm = t.leadMagnet
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<BrevoFormError | null>(null)

  const errorMessages: Record<BrevoFormError, string> = {
    invalid_email: lm.errorInvalidEmail,
    server_error: lm.errorServer,
  }
  const mountedRef = useRef(true)

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loading) return
    setError(null)
    setLoading(true)

    const result = await submitBrevoForm(new FormData(e.currentTarget))

    if (!mountedRef.current) return

    setLoading(false)

    if (result.error) {
      setError(result.error)
      return
    }

    markLeadSubmitted()
    onSubmitted?.()
    router.push('/obrigado')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? 'space-y-3' : 'flex flex-col gap-3 sm:flex-row'}
      noValidate
    >
      <input
        type="email"
        name="email"
        required
        placeholder={lm.emailPlaceholder}
        className={`${compact ? 'w-full' : 'flex-1'} rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary/60 focus:ring-1 focus:ring-primary/30`}
      />

      {error && <p className="text-xs text-destructive">{errorMessages[error]}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`${compact ? 'w-full' : 'shrink-0'} rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60`}
      >
        {loading ? lm.sending : lm.cta}
      </button>
    </form>
  )
}
