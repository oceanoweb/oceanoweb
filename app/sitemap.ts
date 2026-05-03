import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { services } from '@/lib/services-data'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries: MetadataRoute.Sitemap = services.map(s => ({
    url: `${SITE_URL}/servicos/${s.slug}`,
    lastModified: new Date('2026-05-03'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(p => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: SITE_URL,
      // Update this date whenever the homepage content changes significantly.
      // Using new Date() would signal a change on every build, misleading crawlers.
      lastModified: new Date('2026-05-03'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...serviceEntries,
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date('2026-05-03'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogEntries,
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: new Date('2026-05-03'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/termos`,
      lastModified: new Date('2026-05-03'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
