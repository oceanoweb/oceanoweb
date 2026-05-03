'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Oceano Web"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-contain"
            />
            <span className="font-heading text-xl font-bold text-foreground">
              Oceano<span className="text-primary">Web</span>
            </span>
          </Link>
          <Link
            href="/#servicos"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {t.servicesSection.layout.backToAll}
          </Link>
        </div>
      </header>

      {children}

      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
          <p>© {t.footer.copyright}</p>
          <div className="flex gap-4">
            <Link href="/privacidade" className="hover:text-primary transition-colors">
              {t.footer.privacyLink}
            </Link>
            <Link href="/termos" className="hover:text-primary transition-colors">
              {t.footer.termsLink}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
