"use client"

import { useLanguage } from "@/lib/language-context"

export function MarqueeBand() {
  const { t } = useLanguage()
  const items = t.marquee

  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary py-4" aria-hidden="true">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
