export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceData = {
  slug: string
  metaTitle: string
  metaDescription: string
  badge: string
  headline: string
  intro: string
  benefits: { title: string; description: string }[]
  useCases: string[]
  faq: ServiceFaq[]
  schemaDescription: string
}

export const services: ServiceData[] = [
  {
    slug: 'inteligencia-artificial',
    metaTitle: 'Inteligência Artificial para Empresas | Oceano Web, Portugal e Brasil',
    metaDescription:
      'Soluções de IA personalizadas para automatizar processos, gerar insights e aumentar resultados. Agência especializada em Portugal e Brasil. Fale com um especialista.',
    badge: 'Inteligência Artificial',
    headline: 'Inteligência Artificial para empresas que querem crescer de forma inteligente',
    intro: `A inteligência artificial deixou de ser uma tecnologia do futuro para se tornar uma vantagem competitiva real no presente. Empresas em Portugal e no Brasil que adoptam IA hoje ganham eficiência, reduzem custos operacionais e tomam decisões mais rápidas e precisas do que a concorrência.

Na Oceano Web, implementamos soluções de IA personalizadas que se integram directamente nos processos do seu negócio. Não trabalhamos com soluções genéricas: cada projecto começa por um diagnóstico aprofundado das necessidades da sua empresa, seguido de uma implementação pragmática orientada a resultados mensuráveis.

As nossas soluções de IA cobrem desde automação de atendimento ao cliente com modelos de linguagem (LLMs), passando por classificação e análise de dados não estruturados, até sistemas de recomendação e detecção de anomalias em operações críticas. Trabalhamos com as principais plataformas do mercado, como OpenAI, Google Cloud AI e Microsoft Azure AI, e integramos com os sistemas que a sua empresa já utiliza.

O impacto é concreto: clientes que implementaram IA nos processos de atendimento reduziram o tempo de resposta em até 70%. Empresas que adoptaram modelos preditivos para gestão de stock reduziram desperdício em 30%. Estas não são promessas. São resultados documentados de projectos que entregámos.`,
    benefits: [
      {
        title: 'Automação de atendimento',
        description:
          'Chatbots e assistentes virtuais com LLMs que respondem com precisão 24/7, reduzindo carga da equipa humana.',
      },
      {
        title: 'Análise de dados não estruturados',
        description:
          'Processamento de emails, documentos, feedback e reviews para extrair insights accionáveis automaticamente.',
      },
      {
        title: 'Sistemas de recomendação',
        description:
          'Motores de recomendação personalizados para e-commerce, plataformas de conteúdo e serviços financeiros.',
      },
      {
        title: 'Detecção de anomalias',
        description:
          'Identificação em tempo real de padrões anómalos em operações, fraudes ou falhas de equipamento.',
      },
    ],
    useCases: [
      'Atendimento ao cliente automatizado com IA generativa',
      'Análise e classificação automática de contratos e documentos',
      'Previsão de churn e gestão proactiva de clientes',
      'Optimização dinâmica de preços com machine learning',
      'Triagem automática de candidatos em processos de recrutamento',
    ],
    faq: [
      {
        question: 'A minha empresa precisa de dados históricos para implementar IA?',
        answer:
          'Depende do tipo de solução. Modelos preditivos requerem dados históricos, mas soluções de IA generativa (como assistentes de atendimento) podem ser implementadas com pouco ou nenhum histórico interno. Fazemos o diagnóstico antes de propor qualquer solução.',
      },
      {
        question: 'Quanto tempo demora a implementar uma solução de IA?',
        answer:
          'Um projecto de IA focado (como um chatbot ou sistema de classificação) pode estar em produção em 6 a 12 semanas. Soluções mais complexas, com integração de múltiplos sistemas, têm cronogramas de 3 a 6 meses.',
      },
      {
        question: 'A solução integra com os sistemas que já utilizamos?',
        answer:
          'Sim. Desenvolvemos integrações com CRMs, ERPs, plataformas de e-commerce, bases de dados e APIs existentes. A integração com os sistemas actuais é parte central de qualquer projecto que entregamos.',
      },
      {
        question: 'Como garantem a qualidade e segurança dos dados?',
        answer:
          'Seguimos as melhores práticas de segurança de dados, incluindo encriptação, controlo de acesso e conformidade com o RGPD. Os dados dos nossos clientes nunca são utilizados para treinar modelos de terceiros.',
      },
    ],
    schemaDescription:
      'Implementação de soluções de inteligência artificial personalizadas para empresas em Portugal e Brasil, incluindo automação, análise de dados e sistemas preditivos.',
  },
  {
    slug: 'machine-learning',
    metaTitle: 'Machine Learning para Empresas | Oceano Web, Portugal e Brasil',
    metaDescription:
      'Modelos preditivos e algoritmos de machine learning que transformam os seus dados em vantagem competitiva real. Consultoria especializada em Portugal e Brasil.',
    badge: 'Machine Learning',
    headline: 'Machine Learning que transforma dados em decisões e vantagem competitiva',
    intro: `Os dados que a sua empresa acumula todos os dias são um activo estratégico subutilizado. Com machine learning, esses dados tornam-se previsões precisas, padrões identificáveis e decisões automatizadas que aceleram o crescimento do negócio.

A Oceano Web desenvolve modelos de machine learning personalizados para empresas em Portugal e no Brasil, focados em problemas de negócio reais: previsão de vendas, segmentação de clientes, optimização de operações e muito mais. Não entregamos código. Entregamos resultados mensuráveis integrados nos seus processos.

O nosso processo começa pela compreensão do problema de negócio, não pela escolha do algoritmo. Depois de mapear os dados disponíveis e os objectivos do projecto, seleccionamos e treinamos os modelos mais adequados, seja regressão, classificação, clustering, séries temporais ou redes neuronais, e integramos os outputs directamente nos fluxos de trabalho existentes.

A manutenção e monitorização dos modelos em produção é parte do nosso serviço. Um modelo de ML degrada com o tempo se não for monitorado e retreinado periodicamente. Garantimos que os modelos continuam precisos e relevantes à medida que os dados e o negócio evoluem.`,
    benefits: [
      {
        title: 'Previsão de vendas e procura',
        description:
          'Modelos de séries temporais que prevêem vendas, stock necessário e picos de procura com semanas de antecedência.',
      },
      {
        title: 'Segmentação de clientes',
        description:
          'Algoritmos de clustering que identificam segmentos comportamentais para personalização e campanhas mais eficazes.',
      },
      {
        title: 'Modelos de scoring e risco',
        description:
          'Sistemas de pontuação para crédito, risco de churn, propensão de compra e qualificação de leads.',
      },
      {
        title: 'Optimização operacional',
        description:
          'Algoritmos que optimizam rotas, alocação de recursos, agendamento e processos logísticos em tempo real.',
      },
    ],
    useCases: [
      'Previsão de churn de clientes com 30 dias de antecedência',
      'Modelos de previsão de procura para gestão de inventário',
      'Scoring de leads para priorização da equipa comercial',
      'Detecção de fraude em transacções em tempo real',
      'Segmentação RFM avançada para e-commerce',
    ],
    faq: [
      {
        question: 'Que volume de dados é necessário para um projecto de ML?',
        answer:
          'Depende do problema. Para modelos de classificação ou regressão, recomendamos pelo menos alguns milhares de registos com boa qualidade. Para deep learning, os volumes são maiores. Avaliamos a viabilidade durante o diagnóstico.',
      },
      {
        question: 'Os modelos continuam a funcionar após a entrega?',
        answer:
          'Sim, mas requerem monitorização. Oferecemos planos de manutenção que incluem acompanhamento de performance, detecção de data drift e retreino periódico para manter a precisão dos modelos.',
      },
      {
        question: 'Trabalham com dados na cloud ou on-premise?',
        answer:
          'Ambos. Desenvolvemos soluções para Google Cloud, AWS, Azure e ambientes on-premise. A escolha depende dos requisitos de segurança, custo e infraestrutura existente do cliente.',
      },
      {
        question: 'Como explicam as previsões aos utilizadores do negócio?',
        answer:
          'Investimos em explainability: cada modelo tem dashboards e relatórios que traduzem as previsões para linguagem de negócio. Chefias e equipas comerciais conseguem perceber e confiar nos outputs sem conhecimento técnico.',
      },
    ],
    schemaDescription:
      'Desenvolvimento de modelos de machine learning personalizados para previsão, segmentação e optimização de negócio em empresas de Portugal e Brasil.',
  },
  {
    slug: 'crescimento-digital',
    metaTitle: 'Growth Marketing e Crescimento Digital | Oceano Web, Portugal e Brasil',
    metaDescription:
      'Estratégias de growth marketing orientadas por dados para escalar presença digital, aumentar leads e multiplicar resultados. Agência especializada em Portugal e Brasil.',
    badge: 'Crescimento Digital',
    headline: 'Crescimento digital orientado por dados para empresas que querem escalar',
    intro: `Crescer digitalmente não é uma questão de publicar mais conteúdo ou investir mais em anúncios. É uma questão de sistema: testes estruturados, hipóteses validadas, canais optimizados e funis que convertem de forma consistente e escalável.

A Oceano Web desenvolve estratégias de growth marketing para empresas em Portugal e no Brasil que querem sair de um crescimento dependente de esforço manual para um crescimento alavancado por dados e automação. Trabalhamos ao longo de todo o funil, aquisição, activação, retenção, receita e referência, identificando os pontos de maior alavancagem para cada negócio.

O nosso processo começa sempre pela análise de dados: tráfego, comportamento de utilizadores, taxas de conversão, cohorts de retenção e atribuição de canais. Com base nesse diagnóstico, definimos um backlog de experimentos prioritizados por impacto potencial e facilidade de implementação, testamos rapidamente e escalamos o que funciona.

Trabalhamos com equipas de marketing existentes ou como equipa externa dedicada, adaptando-nos à estrutura de cada empresa. O objectivo é sempre o mesmo: crescimento mensurável, sustentável e previsível.`,
    benefits: [
      {
        title: 'Estratégia de aquisição multi-canal',
        description:
          'Planeamento e execução de campanhas em Google Ads, Meta Ads, LinkedIn e canais orgânicos com atribuição correcta.',
      },
      {
        title: 'Optimização de conversão (CRO)',
        description:
          'Testes A/B, análise de heatmaps e optimização de landing pages para aumentar a taxa de conversão do tráfego existente.',
      },
      {
        title: 'Automação de marketing',
        description:
          'Fluxos automatizados de nutrição de leads, onboarding, reactivação e retenção com HubSpot, Make ou plataformas equivalentes.',
      },
      {
        title: 'Analytics e atribuição',
        description:
          'Implementação de tracking completo, modelos de atribuição e dashboards que mostram o ROI real de cada canal.',
      },
    ],
    useCases: [
      'Estruturação de funil de aquisição B2B com campanhas LinkedIn + Google',
      'Optimização de landing pages com testes A/B sistemáticos',
      'Automação de sequências de nurturing para leads qualificados',
      'Estratégia de SEO e conteúdo para geração de tráfego orgânico',
      'Setup de analytics e atribuição multi-toque para e-commerce',
    ],
    faq: [
      {
        question: 'Quanto tempo demora a ver resultados de growth marketing?',
        answer:
          'Campanhas pagas podem gerar resultados em semanas. SEO e conteúdo têm horizonte de 3 a 6 meses. Definimos KPIs claros no início e reportamos progresso mensalmente.',
      },
      {
        question: 'Trabalham com que canais digitais?',
        answer:
          'Google Ads, Meta Ads (Facebook e Instagram), LinkedIn Ads, SEO, email marketing, marketing de conteúdo e automação. A escolha dos canais é feita com base no perfil do cliente e nos objectivos de negócio.',
      },
      {
        question: 'Gerem as campanhas ou apenas as estratégias?',
        answer:
          'Fazemos ambos. Podemos definir a estratégia e entregar à equipa interna, ou gerir as campanhas de forma contínua como parceiro dedicado. O modelo é definido com base nas necessidades do cliente.',
      },
      {
        question: 'Como medem o ROI das acções de growth?',
        answer:
          'Implementamos tracking completo desde o primeiro dia: Google Analytics 4, pixel Meta, eventos de conversão e modelos de atribuição. Todos os relatórios mostram custo por lead, custo por aquisição e ROI por canal.',
      },
    ],
    schemaDescription:
      'Estratégias de growth marketing e crescimento digital orientadas por dados para empresas em Portugal e Brasil, cobrindo aquisição, conversão e retenção.',
  },
  {
    slug: 'automacao-de-processos',
    metaTitle: 'Automação de Processos Empresariais | Oceano Web, Portugal e Brasil',
    metaDescription:
      'Automatize fluxos de trabalho, reduza custos operacionais e elimine erros humanos com soluções de automação personalizadas. Especialistas em Portugal e Brasil.',
    badge: 'Automação de Processos',
    headline: 'Automação de processos que liberta a sua equipa para o que realmente importa',
    intro: `Os processos manuais e repetitivos são um dos maiores drenos de produtividade nas empresas. Cada hora que a sua equipa gasta em tarefas que um sistema pode executar automaticamente é uma hora que não está a ser investida em crescimento, inovação ou relações com clientes.

A Oceano Web implementa soluções de automação de processos para empresas em Portugal e no Brasil, cobrindo desde fluxos simples de notificação e transferência de dados entre sistemas, até pipelines complexos de processamento de documentos, aprovações multi-nível e integrações entre plataformas.

Trabalhamos com as principais ferramentas de automação do mercado, como Make (anteriormente Integromat), Zapier, n8n e automação via API directa, e desenvolvemos soluções customizadas quando as ferramentas existentes não chegam. A escolha da tecnologia é sempre subordinada ao problema: escolhemos o que melhor serve o negócio, não o que conhecemos melhor.

O impacto da automação é imediato e mensurável. Clientes que automatizaram processos de facturação e follow-up reduziram o tempo dedicado a essas tarefas em 80%. Empresas que automatizaram a transferência de dados entre CRM e ERP eliminaram erros de digitação e reduziram o tempo de processamento de horas para segundos.`,
    benefits: [
      {
        title: 'Integração entre sistemas',
        description:
          'Ligação automática entre CRM, ERP, plataformas de e-commerce, ferramentas de marketing e bases de dados sem intervenção manual.',
      },
      {
        title: 'Automação de documentos',
        description:
          'Geração automática de propostas, contratos, facturas e relatórios a partir de dados existentes nos seus sistemas.',
      },
      {
        title: 'Fluxos de aprovação',
        description:
          'Workflows de aprovação multi-nível com notificações automáticas, escalações e rastreamento de estado em tempo real.',
      },
      {
        title: 'Monitorização e alertas',
        description:
          'Sistemas que monitorizam métricas críticas e enviam alertas automáticos quando são detectados desvios ou problemas.',
      },
    ],
    useCases: [
      'Sincronização automática entre CRM e sistema de facturação',
      'Automação de onboarding de novos clientes com emails e tarefas',
      'Pipeline de processamento e classificação de documentos recebidos',
      'Relatórios automáticos semanais enviados para a gestão',
      'Integração entre loja online, ERP e plataforma de logística',
    ],
    faq: [
      {
        question: 'Que sistemas e plataformas conseguem integrar?',
        answer:
          'Integramos com praticamente qualquer sistema que tenha API: Salesforce, HubSpot, SAP, Microsoft 365, Google Workspace, Shopify, WooCommerce, Stripe, e centenas de outras plataformas. Se o sistema tem API, conseguimos automatizar.',
      },
      {
        question: 'E se um dos sistemas não tiver API?',
        answer:
          'Existem alternativas: automação de interface gráfica (RPA), extracção de dados por email ou ficheiros, ou integrações via base de dados. Avaliamos a viabilidade caso a caso.',
      },
      {
        question: 'As automações ficam dependentes de vós após a entrega?',
        answer:
          'Não. Entregamos documentação completa e formação à equipa interna. Para clientes que preferem, oferecemos também planos de suporte e manutenção contínua.',
      },
      {
        question: 'O que acontece quando uma automação falha?',
        answer:
          'Todas as automações que implementamos incluem tratamento de erros, logs e alertas. Quando algo corre mal, a equipa responsável é notificada imediatamente com o contexto necessário para resolver o problema.',
      },
    ],
    schemaDescription:
      'Implementação de automação de processos empresariais, integrações entre sistemas e fluxos de trabalho automatizados para empresas em Portugal e Brasil.',
  },
  {
    slug: 'analytics-bi',
    metaTitle: 'Analytics e Business Intelligence | Oceano Web, Portugal e Brasil',
    metaDescription:
      'Dashboards inteligentes, análise de dados e Business Intelligence para empresas que querem tomar decisões baseadas em dados. Especialistas em Portugal e Brasil.',
    badge: 'Analytics & BI',
    headline: 'Analytics e Business Intelligence que transformam dados em decisões claras',
    intro: `A maioria das empresas tem dados. Poucas têm visibilidade. A diferença entre uma empresa que cresce com confiança e uma que opera na incerteza é a capacidade de transformar dados dispersos em informação clara, acessível e accionável para quem decide.

A Oceano Web implementa soluções de Analytics e Business Intelligence para empresas em Portugal e no Brasil, desde a instrumentalização correcta do tracking de dados até à criação de dashboards executivos e operacionais que reflectem o estado real do negócio em tempo real.

O nosso trabalho começa frequentemente por corrigir o que está mal: tracking incompleto, dados duplicados, métricas calculadas de formas inconsistentes entre departamentos. Só com uma base de dados fiável é possível construir relatórios em que a gestão confie e com os quais tome decisões.

A partir daí, construímos dashboards em ferramentas como Looker Studio, Power BI ou Tableau, ligados directamente às fontes de dados, Google Analytics 4, bases de dados SQL, CRMs, plataformas de publicidade, e atualizados automaticamente. O resultado é visibilidade completa do negócio sem necessidade de exportar ficheiros Excel ou aguardar por relatórios manuais.`,
    benefits: [
      {
        title: 'Dashboards executivos',
        description:
          'Painéis com os KPIs mais relevantes para a gestão, atualizados em tempo real e acessíveis em qualquer dispositivo.',
      },
      {
        title: 'Tracking e instrumentalização',
        description:
          'Implementação correcta de Google Analytics 4, eventos de conversão, Google Tag Manager e rastreamento de campanhas.',
      },
      {
        title: 'Data warehouse e integração de dados',
        description:
          'Centralização de dados de múltiplas fontes numa única base de verdade para análise consistente e fiável.',
      },
      {
        title: 'Análise de cohorts e retenção',
        description:
          'Análise aprofundada do comportamento de clientes ao longo do tempo para identificar padrões de retenção e churn.',
      },
    ],
    useCases: [
      'Dashboard de performance de vendas com integração CRM + ERP',
      'Setup completo de GA4 com eventos de conversão e funis',
      'Relatório automatizado de campanhas pagas com atribuição correcta',
      'Data warehouse para consolidação de dados de múltiplas lojas',
      'Análise de cohorts para SaaS com visualização de retenção e LTV',
    ],
    faq: [
      {
        question: 'Que ferramentas de BI utilizam?',
        answer:
          'Trabalhamos com Looker Studio (Google), Power BI (Microsoft) e Tableau, dependendo das preferências e infraestrutura do cliente. Para projectos mais complexos, podemos também construir soluções customizadas.',
      },
      {
        question: 'Os dashboards actualizam automaticamente?',
        answer:
          'Sim. Todos os dashboards que construímos são ligados directamente às fontes de dados e actualizam automaticamente, em tempo real ou com frequência definida (horária, diária, etc.).',
      },
      {
        question: 'Conseguem corrigir o nosso GA4 que está mal configurado?',
        answer:
          'Sim, é um dos pedidos mais comuns. Auditamos a configuração existente, identificamos problemas e implementamos o tracking correcto com documentação completa do que foi feito.',
      },
      {
        question: 'É necessário ter uma equipa técnica interna para usar os dashboards?',
        answer:
          'Não. Construímos os dashboards para serem utilizados por qualquer pessoa da equipa, com formação incluída na entrega. O objectivo é que a equipa seja autónoma após o projecto.',
      },
    ],
    schemaDescription:
      'Implementação de Analytics, Business Intelligence e dashboards de dados para empresas em Portugal e Brasil, cobrindo tracking, visualização e análise avançada.',
  },
  {
    slug: 'transformacao-digital',
    metaTitle: 'Transformação Digital para Empresas | Oceano Web, Portugal e Brasil',
    metaDescription:
      'Consultoria e implementação de transformação digital para empresas que querem modernizar operações, digitalizar processos e escalar com tecnologia. Portugal & Brasil.',
    badge: 'Transformação Digital',
    headline: 'Transformação digital que moderniza operações e prepara a sua empresa para o futuro',
    intro: `A transformação digital não é um projecto com início e fim definidos. É uma mudança de mentalidade e de forma de operar que, quando bem executada, transforma a tecnologia no principal activo de crescimento de uma empresa.

A Oceano Web oferece consultoria e implementação de transformação digital para empresas em Portugal e no Brasil que querem modernizar os seus processos, digitalizar operações e construir a infraestrutura tecnológica necessária para crescer de forma sustentável.

O nosso trabalho começa por perceber onde a empresa está hoje: que sistemas utiliza, como os dados fluem (ou não fluem) entre departamentos, onde estão os maiores pontos de atrito operacional e qual é a maturidade digital da equipa. Com base nesse diagnóstico, construímos um roadmap de transformação por fases, pragmático, priorizado por impacto e dimensionado à realidade da empresa.

Não impingimos tecnologia pela tecnologia. Cada iniciativa de transformação tem de responder a um problema real de negócio e gerar retorno mensurável. É com esta abordagem que conseguimos que a transformação digital deixe de ser um conceito abstracto e passe a ser um motor tangível de crescimento.`,
    benefits: [
      {
        title: 'Diagnóstico e roadmap',
        description:
          'Avaliação da maturidade digital actual e plano de transformação por fases, priorizado por impacto e viabilidade.',
      },
      {
        title: 'Digitalização de processos',
        description:
          'Substituição de processos manuais e em papel por fluxos digitais eficientes, rastreáveis e automatizados.',
      },
      {
        title: 'Modernização de sistemas',
        description:
          'Migração ou substituição de sistemas legados por soluções modernas, integradas e escaláveis.',
      },
      {
        title: 'Cultura e capacitação',
        description:
          'Formação e acompanhamento das equipas para adopção efectiva das novas ferramentas e formas de trabalhar.',
      },
    ],
    useCases: [
      'Diagnóstico de maturidade digital e roadmap de transformação',
      'Migração de processos em papel para plataformas digitais',
      'Substituição de sistema legado por solução cloud moderna',
      'Digitalização da experiência do cliente em empresa de serviços',
      'Implementação de cultura data-driven em organização tradicional',
    ],
    faq: [
      {
        question: 'Por onde se começa uma transformação digital?',
        answer:
          'Começa-se por um diagnóstico honesto: onde estamos, quais são os maiores problemas operacionais e qual é o apetite da organização para a mudança. A partir daí, define-se um roadmap por fases com quick wins para gerar momentum.',
      },
      {
        question: 'A transformação digital implica substituir todos os sistemas existentes?',
        answer:
          'Não necessariamente. Muitas vezes a solução passa por integrar melhor os sistemas existentes, automatizar fluxos manuais ou adicionar camadas de dados e analytics. A substituição de sistemas é feita apenas quando é a opção mais custo-eficaz.',
      },
      {
        question: 'Como gerem a resistência interna à mudança?',
        answer:
          'A gestão da mudança é parte integrante do nosso processo. Envolvemos as equipas desde o início, comunicamos o propósito das mudanças, formamos os utilizadores e acompanhamos a adopção das novas ferramentas com métricas claras.',
      },
      {
        question: 'Trabalham com PMEs ou apenas grandes empresas?',
        answer:
          'Trabalhamos com ambas. A transformação digital não é exclusiva de grandes organizações. Muitas vezes PMEs ganham mais agilidade por terem menos camadas de burocracia. Adaptamos o âmbito e o investimento à realidade de cada empresa.',
      },
    ],
    schemaDescription:
      'Consultoria e implementação de transformação digital para empresas em Portugal e Brasil, cobrindo diagnóstico, roadmap, digitalização de processos e modernização tecnológica.',
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug)
}
