'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { useLeadMagnet } from '@/components/lead-magnet-provider'
import { WHATSAPP_LINK } from '@/lib/site-config'
import type { ServiceData } from '@/lib/services-data'

interface ServicePageContentProps {
  readonly service: ServiceData
}

export default function ServicePageContent({ service }: Readonly<ServicePageContentProps>) {
  const { t } = useLanguage()
  const { openModal } = useLeadMagnet()
  const lm = t.leadMagnet

  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-border">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {service.badge}
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl max-w-3xl text-balance">
            {service.headline}
          </h1>
          <div className="mt-8 max-w-3xl space-y-4">
            {service.intro.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              {t.servicesSection.page.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-base font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              {t.servicesSection.page.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.servicesSection.page.benefitsEyebrow}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            {t.servicesSection.page.benefitsTitle}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map(benefit => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                {t.servicesSection.page.useCasesEyebrow}
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
                {t.servicesSection.page.useCasesTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t.servicesSection.page.useCasesDescription}
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {service.useCases.map((useCase, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-base text-foreground">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            {t.faq.title}
          </h2>
          <div className="mt-12 max-w-3xl divide-y divide-border">
            {service.faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-foreground list-none hover:text-primary transition-colors">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-primary/20 bg-card px-8 py-10 text-center md:px-16">
            <p className="text-base leading-relaxed text-muted-foreground">
              {lm.serviceDescription}
            </p>
            <button
              onClick={openModal}
              className="mt-6 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              {lm.serviceCta}
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {t.servicesSection.page.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            {t.servicesSection.page.ctaDescription}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              {t.servicesSection.page.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-base font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              {t.servicesSection.page.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
