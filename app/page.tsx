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

export default function Page() {
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
    </LanguageProvider>
  )
}
