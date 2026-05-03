'use client'

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts, formatDate } from '@/lib/blog-data'
import { useLanguage } from '@/lib/language-context'

const RECENT_POSTS = blogPosts.slice(-3).reverse()

export function BlogTeaser() {
  const { t } = useLanguage()

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Blog</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              {t.blog.teaser.title}
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {t.blog.teaser.viewAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {RECENT_POSTS.map(post => (
            <article
              key={post.slug}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime} min
                </span>
              </div>

              <h3 className="mt-4 font-heading text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {post.description}
              </p>

              <time dateTime={post.date} className="mt-4 text-xs text-muted-foreground">
                {formatDate(post.date)}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
