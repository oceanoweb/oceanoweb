import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import { blogPosts, getBlogPostBySlug, formatDate, type ContentBlock } from '@/lib/blog-data'
import { SITE_URL, WHATSAPP_LINK } from '@/lib/site-config'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) return {}

  return {
    title: `${post.title} | Blog Oceano Web`,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={index}
          className="mt-10 font-heading text-2xl font-bold text-foreground md:text-3xl"
        >
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={index} className="mt-8 font-heading text-xl font-semibold text-foreground">
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p key={index} className="mt-5 text-base leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={index} className="mt-5 flex flex-col gap-2 pl-6">
          {block.items.map((item, i) => (
            <li key={i} className="list-disc text-base leading-relaxed text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={index} className="mt-5 flex flex-col gap-2 pl-6">
          {block.items.map((item, i) => (
            <li key={i} className="list-decimal text-base leading-relaxed text-muted-foreground">
              {item}
            </li>
          ))}
        </ol>
      )
    case 'callout':
      return (
        <div
          key={index}
          className="mt-8 rounded-xl border border-primary/30 bg-primary/5 px-6 py-5"
        >
          <p className="text-base font-medium leading-relaxed text-foreground">{block.text}</p>
        </div>
      )
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Oceano Web',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Oceano Web',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="border-b border-border py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Todos os artigos
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime} min de leitura
              </span>
            </div>

            <h1 className="mt-6 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.description}</p>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose-custom">{post.content.map((block, i) => renderBlock(block, i))}</div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/30 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Pronto para avançar?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Fale com um especialista e perceba como podemos ajudar a sua empresa a crescer com IA
              e tecnologia. Resposta em até 24 horas.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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

        {/* Back link */}
        <div className="border-t border-border py-8">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
