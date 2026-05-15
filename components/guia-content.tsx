'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { BrevoForm } from '@/components/brevo-form'

export function GuiaContent() {
  const { t } = useLanguage()
  const lm = t.leadMagnet
  const guia = lm.guia

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-xl text-center">
        <Link href="/" className="inline-block">
          <Image src="/logo.png" alt="Oceano Web" width={140} height={40} className="mx-auto" />
        </Link>

        <span className="mt-10 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {lm.badge}
        </span>

        <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
          {lm.title}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{guia.subtitle}</p>

        <ul className="mt-8 flex flex-col gap-3 text-left">
          {guia.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <BrevoForm />
        </div>

        <p className="mt-6 text-xs text-muted-foreground">{guia.socialProof}</p>
      </div>
    </main>
  )
}
