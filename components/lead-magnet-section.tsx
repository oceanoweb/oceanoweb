'use client'

import { useLeadMagnet } from '@/components/lead-magnet-provider'
import { useLanguage } from '@/lib/language-context'

export function LeadMagnetSection() {
  const { openModal } = useLeadMagnet()
  const { t } = useLanguage()
  const lm = t.leadMagnet

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {lm.badge}
        </span>

        <h2 className="mt-6 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
          {lm.title}
        </h2>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {lm.sectionDescription}
        </p>

        <button
          type="button"
          onClick={openModal}
          className="mt-8 inline-flex items-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          {lm.cta}
        </button>
      </div>
    </section>
  )
}
