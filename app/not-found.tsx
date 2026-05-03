import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-4 font-heading text-4xl font-bold text-foreground md:text-5xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
        A página que procura não existe ou foi removida. Volte à página inicial ou explore os
        nossos serviços.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Ir para a página inicial
          <ArrowRight className="h-5 w-5" />
        </Link>
        <Link
          href="/#servicos"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-base font-medium text-foreground transition hover:border-primary hover:text-primary"
        >
          Ver serviços
        </Link>
      </div>
    </div>
  )
}
