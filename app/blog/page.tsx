import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { BlogPageContent } from '@/components/blog-page-content'

export const metadata: Metadata = {
  title: 'Blog | Oceano Web, Transformação Digital, IA e Marketing',
  description:
    'Artigos sobre transformação digital, inteligência artificial, machine learning e marketing digital. Conteúdo prático para empresas em Portugal e no Brasil.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Blog | Oceano Web',
    description:
      'Artigos sobre transformação digital, IA e marketing digital para empresas em Portugal e no Brasil.',
    url: `${SITE_URL}/blog`,
  },
}

export default function BlogPage() {
  return <BlogPageContent />
}
