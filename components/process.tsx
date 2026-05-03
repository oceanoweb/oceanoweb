'use client'

import { useLanguage } from '@/lib/language-context'

export function Process() {
  const { t } = useLanguage()

  return (
    <section className="relative py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.process.subtitle}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-5xl text-balance">
            {t.process.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-5">
              {/* Connector line between steps (desktop only) */}
              {index < t.process.steps.length - 1 && (
                <div
                  className="absolute left-10 top-5 hidden h-px w-full bg-border lg:block"
                  aria-hidden="true"
                />
              )}

              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                <span className="font-heading text-xs font-bold text-primary">{step.number}</span>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
