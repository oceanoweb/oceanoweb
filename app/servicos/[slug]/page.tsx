import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import { services, getServiceBySlug } from '@/lib/services-data'
import { SITE_URL, WHATSAPP_LINK } from '@/lib/site-config'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/servicos/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/servicos/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.badge,
    description: service.schemaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Oceano Web',
      url: SITE_URL,
    },
    areaServed: [
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'Country', name: 'Brazil' },
    ],
    url: `${SITE_URL}/servicos/${service.slug}`,
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([structuredData, faqStructuredData]) }}
      />

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
                Falar com um Especialista
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-base font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              O que entregamos
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Capacidades e entregas
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
                  Aplicações práticas
                </p>
                <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
                  Casos de uso frequentes
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Exemplos reais de projectos que implementamos para clientes em Portugal e no
                  Brasil.
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
              Perguntas frequentes
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

        {/* CTA */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Pronto para avançar?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Fale com um especialista e perceba como podemos ajudar a sua empresa. Resposta em até
              24 horas.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                href="/#contato"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Falar com um Especialista
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-base font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
