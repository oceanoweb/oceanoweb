'use client'

import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { blogPosts, formatDate } from '@/lib/blog-data'
import { useLanguage } from '@/lib/language-context'

const categories = Array.from(new Set(blogPosts.map(p => p.category)))

export function BlogPageContent() {
  const { t } = useLanguage()

  return (
    <main>
      {/* Hero */}
      <section className="relative border-b border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.blog.page.eyebrow}
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold text-foreground text-balance md:text-5xl">
            {t.blog.page.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.blog.page.description}
          </p>
        </div>
      </section>

      {/* Category filter — static, no JS state needed */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <span
                key={cat}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
              >
                <Tag className="h-3.5 w-3.5" />
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <article
                key={post.slug}
                className="group relative flex flex-col rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
              >
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime} min
                    </span>
                  </div>

                  <h2 className="mt-4 font-heading text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <time dateTime={post.date} className="text-xs text-muted-foreground">
                      {formatDate(post.date)}
                    </time>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      {t.blog.page.readArticle}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {t.blog.page.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {t.blog.page.ctaDescription}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              {t.blog.page.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
