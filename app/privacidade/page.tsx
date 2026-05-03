import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Política de Privacidade | ${SITE_NAME}`,
  description:
    'Saiba como a Oceano Web recolhe, utiliza e protege os seus dados pessoais, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).',
  alternates: {
    canonical: `${SITE_URL}/privacidade`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacidadePage() {
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
        <h1 className="font-heading text-4xl font-bold text-foreground">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última actualização: Maio de 2026
        </p>

        <div className="mt-12 space-y-12 text-base leading-relaxed text-muted-foreground">

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              1. Responsável pelo tratamento
            </h2>
            <p>
              A <strong className="text-foreground">Oceano Web</strong> é a entidade responsável pelo
              tratamento dos dados pessoais recolhidos através deste website. Para questões
              relacionadas com privacidade e protecção de dados, pode contactar-nos através do
              endereço:{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              2. Dados recolhidos e finalidade
            </h2>
            <p className="mb-4">
              Recolhemos apenas os dados estritamente necessários para as finalidades descritas
              abaixo:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-2">
              <li>
                <strong className="text-foreground">Formulário de contacto:</strong> nome, endereço
                de email, nome da empresa (opcional) e mensagem. Finalidade: responder ao pedido de
                contacto e estabelecer comunicação comercial.
              </li>
              <li>
                <strong className="text-foreground">Cookies analíticos (Google Analytics 4):</strong>{' '}
                dados de navegação anónimos e agregados, como páginas visitadas, tempo na página e
                origem do tráfego. Finalidade: análise do desempenho do website e melhoria da
                experiência do utilizador.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              3. Base legal do tratamento
            </h2>
            <ul className="list-disc list-inside space-y-3 pl-2">
              <li>
                <strong className="text-foreground">Formulário de contacto:</strong> execução de
                diligências pré-contratuais a pedido do titular (art.º 6.º, n.º 1, alínea b) do
                RGPD).
              </li>
              <li>
                <strong className="text-foreground">Cookies analíticos:</strong>{' '}
                consentimento do titular (art.º 6.º, n.º 1, alínea a) do RGPD). Pode revogar o
                consentimento a qualquer momento através das preferências de cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              4. Período de conservação
            </h2>
            <ul className="list-disc list-inside space-y-3 pl-2">
              <li>
                <strong className="text-foreground">Dados do formulário de contacto:</strong>{' '}
                conservados pelo período necessário à gestão da relação comercial, não excedendo 3
                anos após o último contacto, salvo obrigação legal em contrário.
              </li>
              <li>
                <strong className="text-foreground">Dados analíticos:</strong> retidos por até 14
                meses nas plataformas de terceiros (Google Analytics), conforme as políticas de cada
                fornecedor.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              5. Partilha de dados com terceiros
            </h2>
            <p className="mb-4">
              Os seus dados não são vendidos nem partilhados com terceiros para fins comerciais
              próprios. Partilhamos dados exclusivamente com os seguintes prestadores de serviços,
              no âmbito do tratamento descrito acima:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-2">
              <li>
                <strong className="text-foreground">Resend</strong>, plataforma de envio de email
                para processamento das mensagens do formulário de contacto.
              </li>
              <li>
                <strong className="text-foreground">Google Analytics (Google LLC)</strong>, análise
                de tráfego e comportamento no website.
              </li>
              <li>
                <strong className="text-foreground">Vercel, Inc.</strong>, alojamento do website.
              </li>
            </ul>
            <p className="mt-4">
              Todos os prestadores de serviços estão sujeitos a acordos de tratamento de dados que
              garantem a conformidade com o RGPD.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              6. Política de cookies
            </h2>
            <p className="mb-4">
              Utilizamos cookies para garantir o correcto funcionamento do website e para recolher
              informações sobre a sua utilização. Na sua primeira visita, é-lhe apresentado um aviso
              de cookies onde pode aceitar ou recusar categorias não essenciais.
            </p>
            <ul className="list-disc list-inside space-y-3 pl-2">
              <li>
                <strong className="text-foreground">Cookies essenciais:</strong> necessários para o
                funcionamento do website. Não requerem consentimento.
              </li>
              <li>
                <strong className="text-foreground">Cookies analíticos:</strong> Google Analytics 4.
                Requerem consentimento.
              </li>
            </ul>
            <p className="mt-4">
              Pode alterar as suas preferências de cookies a qualquer momento através do botão de
              preferências disponível no rodapé do website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              7. Os seus direitos
            </h2>
            <p className="mb-4">
              Nos termos do RGPD, tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-2">
              <li>
                <strong className="text-foreground">Acesso:</strong> solicitar confirmação de que os
                seus dados são tratados e obter uma cópia dos mesmos.
              </li>
              <li>
                <strong className="text-foreground">Rectificação:</strong> corrigir dados inexactos
                ou incompletos.
              </li>
              <li>
                <strong className="text-foreground">Apagamento:</strong> solicitar a eliminação dos
                seus dados, quando aplicável.
              </li>
              <li>
                <strong className="text-foreground">Limitação:</strong> restringir o tratamento em
                determinadas circunstâncias.
              </li>
              <li>
                <strong className="text-foreground">Portabilidade:</strong> receber os seus dados
                num formato estruturado e legível por máquina.
              </li>
              <li>
                <strong className="text-foreground">Oposição:</strong> opor-se ao tratamento baseado
                em interesses legítimos ou para fins de marketing directo.
              </li>
              <li>
                <strong className="text-foreground">Retirada do consentimento:</strong> revogar o
                consentimento a qualquer momento, sem prejuízo da licitude do tratamento efectuado
                anteriormente.
              </li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer destes direitos, contacte-nos através de{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
              . Responderemos no prazo máximo de 30 dias. Tem também o direito de apresentar
              reclamação à{' '}
              <a
                href="https://www.cnpd.pt"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Comissão Nacional de Protecção de Dados (CNPD)
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              8. Segurança dos dados
            </h2>
            <p>
              Adoptamos medidas técnicas e organizacionais adequadas para proteger os seus dados
              pessoais contra acesso não autorizado, perda, destruição ou divulgação. O website é
              servido exclusivamente via HTTPS e os dados do formulário são sanitizados antes de
              qualquer tratamento.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              9. Alterações a esta política
            </h2>
            <p>
              Podemos actualizar esta Política de Privacidade periodicamente. Sempre que o fizermos,
              actualizaremos a data de última actualização no topo desta página. Recomendamos que
              consulte esta página regularmente.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              10. Contacto
            </h2>
            <p>
              Para qualquer questão relacionada com esta política ou com o tratamento dos seus dados
              pessoais, contacte-nos através de{' '}
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
