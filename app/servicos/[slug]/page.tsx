import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/lib/services-data'
import { SITE_URL } from '@/lib/site-config'
import ServicePageContent from '@/components/service-page-content'

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
      <ServicePageContent service={service} />
    </>
  )
}
