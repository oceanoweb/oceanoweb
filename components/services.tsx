'use client'

import Link from 'next/link'
import { Brain, BarChart3, Zap, Globe, Cpu, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { services } from '@/lib/services-data'

const icons = [Brain, Cpu, TrendingUp, Zap, BarChart3, Globe]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.services.subtitle}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-5xl text-balance">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {t.services.description}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[index]
            const slug = services[index]?.slug
            return (
              <article
                key={service.title}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-6">
                  {slug ? (
                    <Link
                      href={`/servicos/${slug}`}
                      className="text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      {t.services.learnMore}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      {t.services.learnMore}
                    </span>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
