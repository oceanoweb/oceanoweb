'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // TODO: replace with Sentry captureException(error) when integrated
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-heading text-3xl font-bold text-foreground">Algo correu mal</h1>
        <p className="max-w-sm text-muted-foreground">
          Ocorreu um erro inesperado. Tente novamente ou contacte-nos se o problema persistir.
        </p>
      </div>
      <Button onClick={reset} variant="default">
        Tentar novamente
      </Button>
    </div>
  )
}
