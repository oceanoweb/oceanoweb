'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function ObrigadoContent() {
  const { t } = useLanguage()
  const ob = t.leadMagnet.obrigado

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md">
        <Link href="/" className="mb-10 inline-block">
          <Image src="/logo.png" alt="Oceano Web" width={140} height={40} className="mx-auto" />
        </Link>

        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
        </div>

        <h1 className="font-heading text-3xl font-bold text-foreground">{ob.title}</h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{ob.subtitle}</p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary/10"
        >
          {ob.back}
        </Link>
      </div>
    </main>
  )
}
