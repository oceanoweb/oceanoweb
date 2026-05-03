import Link from 'next/link'
import Image from 'next/image'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            ← Página inicial
          </Link>
        </div>
      </header>

      {children}

      <footer className="mt-8 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Oceano Web. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidade" className="transition-colors hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="transition-colors hover:text-primary">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
