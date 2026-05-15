'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { MarqueeBand } from '@/components/marquee-band'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { About } from '@/components/about'
import { Metrics } from '@/components/metrics'
import { LeadMagnetSection } from '@/components/lead-magnet-section'
import { Testimonials } from '@/components/testimonials'
import { BlogTeaser } from '@/components/blog-teaser'
import { Faq } from '@/components/faq'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { BrandIcon } from '@/components/brand-icon'
import { siWhatsapp } from 'simple-icons/icons'
import { WHATSAPP_LINK } from '@/lib/site-config'
import { trackEvent } from '@/lib/gtag'

export function HomePage() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <MarqueeBand />
        <Services />
        <Process />
        <About />
        <Metrics />
        <LeadMagnetSection />
        <Testimonials />
        <BlogTeaser />
        <Faq />
        <CtaSection />
        <Footer />
      </main>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:bg-primary/90"
        aria-label="Fale no WhatsApp"
        onClick={() => trackEvent('contact', { method: 'whatsapp' })}
      >
        <BrandIcon icon={siWhatsapp} className="h-4 w-4" />
        Fale no WhatsApp
      </a>
    </>
  )
}
