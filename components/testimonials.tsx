"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Testimonials() {
  const [active, setActive] = useState(0)
  const { t } = useLanguage()
  const testimonials = t.testimonials.items

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.testimonials.subtitle}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-5xl text-balance">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="relative mt-16 mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-border bg-card p-8 md:p-12">
            <Quote className="absolute top-8 left-8 h-10 w-10 text-primary/20 md:top-12 md:left-12" />
            <blockquote className="relative z-10">
              <p className="text-lg leading-relaxed text-foreground md:text-xl">
                {testimonials[active].quote}
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg">
                  {testimonials[active].author[0]}
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonials[active].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[active].role}
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label={t.testimonials.prevLabel}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`${t.testimonials.goTo} ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label={t.testimonials.nextLabel}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
