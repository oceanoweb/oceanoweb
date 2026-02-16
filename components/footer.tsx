"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { BrandIcon } from "@/components/brand-icon"
import { siInstagram, siLinkedin, siWhatsapp } from "simple-icons/icons"
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  SITE_DOMAIN,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/site-config"

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: siLinkedin, href: LINKEDIN_URL, label: "LinkedIn" },
    { icon: siInstagram, href: INSTAGRAM_URL, label: "Instagram" },
    { icon: siWhatsapp, href: WHATSAPP_LINK, label: "WhatsApp" },
  ]

  const navLinks = [
    { label: t.nav.inicio, href: "#inicio" },
    { label: t.nav.servicos, href: "#servicos" },
    { label: t.nav.sobre, href: "#sobre" },
    { label: t.nav.resultados, href: "#resultados" },
    { label: t.nav.contato, href: "#contato" },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Oceano Web"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-contain"
              />
              <span className="font-heading text-xl font-bold text-foreground">
                Oceano<span className="text-primary">Web</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={social.label}
                >
                  <BrandIcon icon={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
              {t.footer.navigationTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {t.footer.serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="text-sm text-muted-foreground">{CONTACT_EMAIL}</li>
              <li className="text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</li>
              <li className="text-sm text-muted-foreground">{SITE_DOMAIN}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
