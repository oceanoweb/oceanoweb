"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary animate-slide-up">
            <Sparkles className="h-4 w-4" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <span className="text-balance">{t.hero.titleStart}</span>
            <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "0.45s" }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base font-medium px-8">
              <a href="#contato">
                {t.hero.ctaPrimary}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary gap-2 text-base px-8 bg-transparent">
              <a href="#servicos">
                {t.hero.ctaSecondary}
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <div>
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">50+</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.hero.stat1}</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">98%</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.hero.stat2}</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">3x</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.hero.stat3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
