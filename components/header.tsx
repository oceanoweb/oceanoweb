"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { locale, t, toggleLocale } = useLanguage()

  const navLinks = [
    { label: t.nav.inicio, href: "#inicio" },
    { label: t.nav.servicos, href: "#servicos" },
    { label: t.nav.sobre, href: "#sobre" },
    { label: t.nav.resultados, href: "#resultados" },
    { label: t.nav.contato, href: "#contato" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label={locale === "pt" ? "Switch to English" : "Mudar para Portugues"}
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "pt" ? "EN" : "PT"}
          </button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            <a href="#contato">{t.nav.cta}</a>
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label={locale === "pt" ? "Switch to English" : "Mudar para Portugues"}
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "pt" ? "EN" : "PT"}
          </button>
          <button
            type="button"
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.cta}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
