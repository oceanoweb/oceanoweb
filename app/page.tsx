import { HomePage } from '@/components/home-page'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Trabalham com empresas de que dimensão?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trabalhamos com PMEs e grandes empresas em Portugal e no Brasil. Não existe um tamanho mínimo. O que importa é que a empresa queira crescer, automatizar ou digitalizar processos de forma estratégica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Operam em Portugal e no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Temos experiência de trabalho com empresas em ambos os mercados. Operamos de forma remota e presencial conforme a necessidade de cada projecto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo demora um projecto de transformação digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do âmbito. Projectos de menor escala podem estar concluídos em 4 a 8 semanas. Projectos de transformação mais abrangentes têm duração de 3 a 12 meses, com entregas iterativas ao longo do caminho.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como é o processo de onboarding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Após o primeiro contacto, fazemos uma sessão de diagnóstico para entender o negócio e os objectivos. Com base nisso, apresentamos uma proposta com escopo, prazos e investimento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fazem acompanhamento após a entrega?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Todos os projectos incluem um período de acompanhamento pós-entrega. Para clientes que pretendam uma parceria contínua, oferecemos planos de manutenção, monitorização e optimização.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como medem os resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Definimos KPIs claros no início de cada projecto e implementamos rastreamento via Google Analytics 4, dashboards de BI e relatórios periódicos. Cada decisão é orientada por dados.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePage />
    </>
  )
}
