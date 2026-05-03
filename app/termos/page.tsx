import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Termos de Serviço | ${SITE_NAME}`,
  description:
    'Termos e condições de utilização do website e dos serviços da Oceano Web. Leia antes de utilizar os nossos serviços.',
  alternates: {
    canonical: `${SITE_URL}/termos`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Oceano<span className="text-primary">Web</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="font-heading text-4xl font-bold text-foreground">Termos de Serviço</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última atualização: Maio de 2026</p>

        <div className="mt-12 space-y-12 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              1. Aceitação dos termos
            </h2>
            <p>
              Ao aceder e utilizar o website{' '}
              <strong className="text-foreground">oceanoweb.com</strong> e os serviços da{' '}
              <strong className="text-foreground">Oceano Web</strong>, o utilizador aceita ficar
              vinculado pelos presentes Termos de Serviço. Se não concordar com alguma das condições
              aqui estabelecidas, deverá abster-se de utilizar o website e os nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              2. Descrição dos serviços
            </h2>
            <p className="mb-4">
              A Oceano Web presta serviços de consultoria e implementação nas seguintes áreas:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Transformação digital e estratégia tecnológica</li>
              <li>Inteligência artificial e machine learning</li>
              <li>Desenvolvimento web e plataformas digitais</li>
              <li>Automação de processos</li>
              <li>Growth marketing e estratégia digital</li>
              <li>Analytics e Business Intelligence</li>
            </ul>
            <p className="mt-4">
              Os termos específicos de cada projecto ou serviço contratado são definidos numa
              proposta comercial e/ou contrato celebrado entre a Oceano Web e o cliente.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              3. Utilização do website
            </h2>
            <p className="mb-4">
              O utilizador compromete-se a utilizar este website de forma lícita e a não praticar
              quaisquer actos que possam:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Violar direitos de propriedade intelectual da Oceano Web ou de terceiros</li>
              <li>Introduzir vírus, malware ou qualquer código malicioso</li>
              <li>Tentar aceder de forma não autorizada a sistemas ou dados</li>
              <li>
                Utilizar meios automatizados para recolher conteúdo do website sem autorização
                prévia e escrita
              </li>
              <li>Prejudicar a reputação ou os interesses legítimos da Oceano Web</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              4. Propriedade intelectual
            </h2>
            <p>
              Todo o conteúdo presente neste website, incluindo sem limitação textos, imagens,
              logótipos, ícones, designs, código-fonte e estrutura, é propriedade exclusiva da
              Oceano Web ou dos seus licenciantes, e está protegido pela legislação aplicável em
              matéria de direitos de autor e propriedade intelectual.
            </p>
            <p className="mt-4">
              É expressamente proibida a reprodução, distribuição, modificação ou utilização de
              qualquer conteúdo deste website para fins comerciais sem autorização prévia e escrita
              da Oceano Web.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              5. Limitação de responsabilidade
            </h2>
            <p className="mb-4">
              A Oceano Web envidará todos os esforços para manter o website disponível e atualizado,
              mas não garante a sua disponibilidade contínua, exactidão ou adequação a fins
              específicos.
            </p>
            <p>
              Na medida máxima permitida pela lei aplicável, a Oceano Web não será responsável por
              quaisquer danos directos, indirectos, incidentais ou consequenciais resultantes da
              utilização ou incapacidade de utilização deste website, incluindo perda de dados,
              lucros cessantes ou interrupção de negócio.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              6. Links para websites de terceiros
            </h2>
            <p>
              Este website pode conter ligações para websites de terceiros. Essas ligações são
              fornecidas apenas para conveniência do utilizador. A Oceano Web não tem controlo sobre
              o conteúdo de websites externos e não assume qualquer responsabilidade pelos mesmos ou
              pelas suas práticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              7. Alterações aos termos
            </h2>
            <p>
              A Oceano Web reserva-se o direito de actualizar estes Termos de Serviço a qualquer
              momento. As alterações entram em vigor no momento da sua publicação nesta página. A
              continuação da utilização do website após a publicação de alterações constitui
              aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              8. Lei aplicável e foro competente
            </h2>
            <p>
              Os presentes Termos de Serviço são regidos pela lei portuguesa. Para a resolução de
              quaisquer litígios emergentes da interpretação ou execução destes termos, as partes
              elegem o foro da comarca de Lisboa, com expressa renúncia a qualquer outro.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">9. Contacto</h2>
            <p>
              Para questões relacionadas com estes Termos de Serviço, contacte-nos através de{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-4xl px-6 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
          <p>© 2026 Oceano Web. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-primary transition-colors">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
