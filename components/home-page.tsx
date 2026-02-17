"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Metrics } from "@/components/metrics"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { BrandIcon } from "@/components/brand-icon"
import { siWhatsapp } from "simple-icons/icons"
import { WHATSAPP_LINK } from "@/lib/site-config"

export function HomePage() {
  return (
    <LanguageProvider>
      <main>
        <Header />
        <Hero />
        <MarqueeBand />
        <Services />
        <About />
        <Metrics />
        <Testimonials />
        <CtaSection />
        <Footer />
      </main>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:bg-primary/90"
        aria-label="Fale no WhatsApp"
      >
        <BrandIcon icon={siWhatsapp} className="h-4 w-4" />
        Fale no WhatsApp
      </a>
    </LanguageProvider>
  )
}
