"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/about-image.jpg"
                alt="Oceano Web"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-6 shadow-2xl md:block">
              <p className="font-heading text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">{t.about.yearsLabel}<br />{t.about.yearsLabel2}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {t.about.subtitle}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              {t.about.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.about.p1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t.about.p2}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {t.about.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
