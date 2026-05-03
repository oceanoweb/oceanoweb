export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string }

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  readingTime: number
  category: string
  content: ContentBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'o-que-e-transformacao-digital',
    title: 'O que é transformação digital e como começar em 2026',
    description:
      'Transformação digital é mais do que tecnologia: é uma mudança de mentalidade e de processos. Saiba o que significa na prática e como dar os primeiros passos.',
    date: '2026-04-15',
    readingTime: 6,
    category: 'Transformação Digital',
    content: [
      {
        type: 'p',
        text: 'Poucas expressões são usadas com tanta frequência e compreendidas com tanta imprecisão como "transformação digital". Para algumas empresas significa ter um site. Para outras, adoptar um software de gestão. Na prática, a transformação digital é algo muito mais abrangente — e muito mais estratégico.',
      },
      {
        type: 'h2',
        text: 'O que é transformação digital, de facto',
      },
      {
        type: 'p',
        text: 'Transformação digital é o processo pelo qual uma empresa integra tecnologia em todas as suas áreas de operação, alterando fundamentalmente a forma como funciona e como cria valor para os seus clientes. Não é um projecto com início e fim — é uma mudança contínua de cultura, processos e modelos de negócio.',
      },
      {
        type: 'p',
        text: 'A diferença entre uma empresa digitalizada e uma empresa em transformação digital está precisamente aqui: a primeira adoptou ferramentas tecnológicas. A segunda mudou a forma de pensar e de operar com base nessas ferramentas.',
      },
      {
        type: 'h2',
        text: 'Os quatro pilares da transformação digital',
      },
      {
        type: 'ul',
        items: [
          'Experiência do cliente: digitalizar e melhorar todos os pontos de contacto com o cliente, do primeiro contacto ao pós-venda.',
          'Operações internas: automatizar processos manuais, integrar sistemas e eliminar fricções operacionais.',
          'Modelo de negócio: identificar novas fontes de receita ou formas de entregar valor habilitadas pela tecnologia.',
          'Cultura e pessoas: desenvolver competências digitais na equipa e criar uma mentalidade orientada a dados e inovação.',
        ],
      },
      {
        type: 'h2',
        text: 'Por que a maioria das transformações digitais falha',
      },
      {
        type: 'p',
        text: 'Estudos da McKinsey mostram que cerca de 70% das iniciativas de transformação digital não atingem os objectivos definidos. As razões são consistentes: falta de alinhamento da liderança, resistência cultural à mudança, ausência de uma estratégia clara e foco excessivo em tecnologia sem resolver primeiro os problemas de processo.',
      },
      {
        type: 'callout',
        text: 'A tecnologia resolve problemas. Se não houver clareza sobre quais são os problemas, a tecnologia apenas os automatiza — e frequentemente amplifica.',
      },
      {
        type: 'h2',
        text: 'Como começar: os primeiros passos práticos',
      },
      {
        type: 'ol',
        items: [
          'Diagnóstico de maturidade digital: avalie onde a sua empresa está hoje em relação à concorrência e ao potencial de digitalização de cada área.',
          'Identificação de quick wins: mapeie os processos manuais e repetitivos com maior impacto operacional e comece por aí.',
          'Definição de KPIs: estabeleça métricas claras antes de qualquer implementação. Sem métricas, não há transformação — há apenas mudança.',
          'Envolvimento da liderança: a transformação digital tem de ser liderada de cima. Sem comprometimento da gestão, os projectos ficam sem recursos e sem prioridade.',
          'Iteração contínua: comece pequeno, valide, aprenda e escale o que funciona. Grandes implementações de raiz têm taxas de insucesso muito superiores.',
        ],
      },
      {
        type: 'h2',
        text: 'Qual é o momento certo para começar',
      },
      {
        type: 'p',
        text: 'A resposta honesta é: o melhor momento foi há três anos. O segundo melhor momento é agora. As empresas que iniciam a transformação digital hoje ainda têm vantagem sobre as que não começaram. As que esperam mais alguns anos vão competir com organizações que já têm anos de dados, processos optimizados e capacidade de inovação muito superiores.',
      },
      {
        type: 'p',
        text: 'Em Portugal e no Brasil, o ritmo de adopção tecnológica acelerou significativamente após 2020. PMEs que antes adiavam a digitalização viram-se forçadas a avançar. As que fizeram esse percurso com estratégia saíram reforçadas. As que improvisaram ainda estão a tentar recuperar.',
      },
    ],
  },
  {
    slug: 'ia-reduzir-custos-operacionais',
    title: 'Como a IA pode reduzir custos operacionais na sua empresa',
    description:
      'A inteligência artificial não é apenas para grandes corporações. Descubra como PMEs em Portugal e Brasil estão a usar IA para reduzir custos e aumentar eficiência.',
    date: '2026-04-22',
    readingTime: 7,
    category: 'Inteligência Artificial',
    content: [
      {
        type: 'p',
        text: 'Quando se fala em inteligência artificial nas empresas, a conversa tende a girar em torno de grandes projectos de inovação ou de aplicações futuristas. A realidade mais relevante para a maioria das empresas é mais pragmática: a IA é hoje uma das ferramentas mais eficazes para reduzir custos operacionais de forma concreta e mensurável.',
      },
      {
        type: 'h2',
        text: 'Onde os custos operacionais realmente se concentram',
      },
      {
        type: 'p',
        text: 'Antes de perceber como a IA pode ajudar, é útil perceber onde os custos operacionais tipicamente se concentram nas empresas de serviços e comércio: atendimento ao cliente, processamento de documentos, tarefas administrativas repetitivas, erros humanos com custo de rectificação e ineficiências na gestão de recursos.',
      },
      {
        type: 'p',
        text: 'Estas são precisamente as áreas onde a IA tem maior impacto imediato — não porque substitua pessoas, mas porque liberta as pessoas de tarefas que não requerem julgamento humano.',
      },
      {
        type: 'h2',
        text: 'Cinco formas práticas de usar IA para reduzir custos',
      },
      {
        type: 'h3',
        text: '1. Automatização do atendimento ao cliente com IA generativa',
      },
      {
        type: 'p',
        text: 'Chatbots baseados em modelos de linguagem como o GPT-4 ou Claude conseguem responder a 60-80% das perguntas frequentes dos clientes com precisão e consistência. Um cliente nosso na área automóvel reduziu o tempo médio de resposta de 4 horas para menos de 2 minutos, com 70% das interacções resolvidas sem intervenção humana.',
      },
      {
        type: 'h3',
        text: '2. Processamento automático de documentos',
      },
      {
        type: 'p',
        text: 'Extractores de informação baseados em IA conseguem processar facturas, contratos, formulários e emails em segundos, classificando e encaminhando a informação para os sistemas correctos. O que antes ocupava horas de trabalho administrativo passa a ser executado automaticamente, com taxas de erro inferiores às humanas.',
      },
      {
        type: 'h3',
        text: '3. Previsão de procura e gestão de inventário',
      },
      {
        type: 'p',
        text: 'Modelos preditivos que analisam histórico de vendas, sazonalidade e factores externos conseguem prever a procura com muito maior precisão do que métodos manuais. Empresas de retalho e distribuição que implementam IA na gestão de stock reduzem tipicamente o excesso de inventário em 20-30% e as rupturas de stock em 40-60%.',
      },
      {
        type: 'h3',
        text: '4. Detecção automática de erros e anomalias',
      },
      {
        type: 'p',
        text: 'Sistemas de monitorização baseados em IA identificam padrões anómalos em dados financeiros, operacionais ou de qualidade antes que se tornem problemas. Uma empresa industrial que implementou detecção de anomalias em equipamentos reduziu paragens não planeadas em 35% e custos de manutenção em 25%.',
      },
      {
        type: 'h3',
        text: '5. Optimização de processos de recrutamento e onboarding',
      },
      {
        type: 'p',
        text: 'Ferramentas de IA para triagem de candidaturas, agendamento de entrevistas e onboarding automatizado reduzem significativamente o tempo e custo por contratação. Empresas com elevado volume de recrutamento têm reduzido o tempo de processo em 50% e o custo por contratação em 30-40%.',
      },
      {
        type: 'callout',
        text: 'A implementação de IA não precisa de começar com grandes projectos. Os resultados mais consistentes vêm de iniciativas focadas num problema específico, com ROI mensurável em 3 a 6 meses.',
      },
      {
        type: 'h2',
        text: 'Quanto investimento é necessário',
      },
      {
        type: 'p',
        text: 'O custo de implementação de IA caiu drasticamente nos últimos dois anos. Muitos projectos de automação com IA para PMEs têm investimentos iniciais entre 5.000€ e 30.000€, com retorno dentro de 6 a 18 meses. O acesso a APIs de modelos de linguagem como OpenAI e Anthropic democratizou o que antes requeria equipas de investigação internas.',
      },
      {
        type: 'p',
        text: 'A questão já não é se a sua empresa pode pagar IA — é se pode pagar não tê-la enquanto a concorrência avança.',
      },
    ],
  },
  {
    slug: 'agencia-digital-portugal-como-escolher',
    title: 'Agência digital em Portugal: como escolher a certa para o seu negócio',
    description:
      'Com centenas de agências digitais em Portugal, escolher a certa pode ser difícil. Saiba quais os critérios que realmente importam e as perguntas que deve fazer antes de contratar.',
    date: '2026-04-29',
    readingTime: 8,
    category: 'Marketing Digital',
    content: [
      {
        type: 'p',
        text: 'O mercado de agências digitais em Portugal cresceu significativamente na última década. Hoje existem centenas de empresas a oferecer serviços de marketing digital, desenvolvimento web, SEO e redes sociais — com propostas de valor e níveis de qualidade muito diferentes. Para uma empresa que quer crescer digitalmente, escolher o parceiro errado não é apenas caro: pode atrasar o crescimento em anos.',
      },
      {
        type: 'h2',
        text: 'Os erros mais comuns ao escolher uma agência digital',
      },
      {
        type: 'ul',
        items: [
          'Escolher com base no preço mais baixo, sem avaliar o que está incluído.',
          'Não verificar casos de estudo reais e resultados documentados.',
          'Contratar uma agência generalista para um problema que requer especialização.',
          'Não definir KPIs e métricas de sucesso antes de assinar contrato.',
          'Ignorar a cultura e forma de trabalho da agência — a compatibilidade operacional importa.',
        ],
      },
      {
        type: 'h2',
        text: 'Os critérios que realmente importam',
      },
      {
        type: 'h3',
        text: 'Especialização vs. generalismo',
      },
      {
        type: 'p',
        text: 'Uma agência que faz tudo tende a fazer tudo de forma mediana. Se o seu objectivo principal é SEO, procure uma agência com casos documentados em SEO. Se é transformação digital com IA, certifique-se que existe experiência técnica real — não apenas capacidade de subcontratar.',
      },
      {
        type: 'h3',
        text: 'Casos de estudo com resultados reais',
      },
      {
        type: 'p',
        text: 'Qualquer agência competente tem casos de estudo. O que diferencia as boas das medianas é a especificidade dos resultados: "aumentámos o tráfego orgânico em 180% em 8 meses para uma empresa de e-commerce no sector de mobiliário" é muito diferente de "ajudamos os nossos clientes a crescer digitalmente".',
      },
      {
        type: 'h3',
        text: 'Transparência no processo e nos relatórios',
      },
      {
        type: 'p',
        text: 'Uma agência de confiança não tem medo de mostrar o que está a fazer. Deve ter acesso ao que está a ser executado, aos dados de performance e a relatórios periódicos que expliquem o que funciona, o que não funciona e o que vai ser feito a seguir.',
      },
      {
        type: 'h3',
        text: 'Capacidade técnica interna',
      },
      {
        type: 'p',
        text: 'Pergunte directamente: quem vai executar o trabalho? É equipa interna ou é subcontratado? Qual é o background técnico das pessoas que vão trabalhar no seu projecto? A resposta a estas perguntas revela muito sobre a capacidade real de entrega.',
      },
      {
        type: 'h2',
        text: 'Perguntas que deve fazer antes de contratar',
      },
      {
        type: 'ol',
        items: [
          'Podem mostrar-me um caso de estudo de um cliente semelhante ao meu negócio?',
          'Quem vai ser o responsável pelo meu projecto e qual é a sua experiência?',
          'Como medem o sucesso e com que frequência reportam resultados?',
          'O que acontece se os resultados ficarem abaixo do esperado?',
          'Quais são as condições de saída do contrato?',
          'Tenho acesso e propriedade de todos os activos digitais criados?',
        ],
      },
      {
        type: 'callout',
        text: 'Uma agência que hesita em responder a estas perguntas ou que responde com generalidades está a dizer-lhe algo importante sobre como vai ser a relação de trabalho.',
      },
      {
        type: 'h2',
        text: 'Agência local vs. agência remota',
      },
      {
        type: 'p',
        text: 'Com a normalização do trabalho remoto, a localização da agência perdeu importância para a maioria dos projectos. Uma agência em Lisboa pode trabalhar eficazmente com uma empresa no Porto, em São Paulo ou no Rio de Janeiro. O que importa é o processo de comunicação, a disponibilidade e a compatibilidade de fusos horários — não a proximidade geográfica.',
      },
      {
        type: 'h2',
        text: 'O que esperar nos primeiros 90 dias',
      },
      {
        type: 'p',
        text: 'Uma boa agência digital deve conseguir entregar valor mensurável nos primeiros 90 dias. Não resultados finais — mas indicadores claros de progresso: diagnóstico completo, plano de acção definido, primeiras implementações em curso e dados iniciais de performance. Se ao fim de 3 meses não consegue ver o que está a acontecer, algo está errado.',
      },
    ],
  },
  {
    slug: 'automacao-processos-casos-reais',
    title: 'Automação de processos: casos reais e ROI comprovado',
    description:
      'Casos reais de empresas em Portugal e Brasil que automatizaram processos e os resultados que obtiveram. Com números, prazos e lições aprendidas.',
    date: '2026-05-06',
    readingTime: 7,
    category: 'Automação',
    content: [
      {
        type: 'p',
        text: 'A automação de processos é frequentemente vendida com promessas genéricas de "aumentar produtividade" e "reduzir custos". Neste artigo fazemos diferente: partilhamos casos reais com números concretos, contexto do problema e lições aprendidas. Todos os projectos foram implementados pela Oceano Web para clientes em Portugal e no Brasil.',
      },
      {
        type: 'h2',
        text: 'Caso 1 — Empresa de logística: automatização de tracking e comunicação',
      },
      {
        type: 'h3',
        text: 'O problema',
      },
      {
        type: 'p',
        text: 'Uma empresa de logística regional com 45 colaboradores processava manualmente as actualizações de estado de envios. Duas pessoas a tempo inteiro actualizavam registos no ERP, enviavam emails para clientes e respondiam a pedidos de informação sobre o estado das encomendas. O processo era lento, propenso a erros e escalava mal com o volume.',
      },
      {
        type: 'h3',
        text: 'A solução',
      },
      {
        type: 'p',
        text: 'Implementámos um pipeline de automação que integrava o sistema de tracking de transportadoras com o ERP e com a plataforma de email. Cada actualização de estado disparava automaticamente uma notificação ao cliente, actualizava o registo interno e classificava os envios que requeriam atenção manual.',
      },
      {
        type: 'h3',
        text: 'Os resultados (6 meses após implementação)',
      },
      {
        type: 'ul',
        items: [
          '94% das actualizações de estado processadas automaticamente, sem intervenção humana.',
          'Tempo de resposta a pedidos de informação reduzido de 4 horas para menos de 5 minutos.',
          'As duas pessoas anteriormente dedicadas ao processo foram realocadas para funções de maior valor.',
          'ROI estimado: 340% no primeiro ano, considerando custo de implementação e poupança operacional.',
        ],
      },
      {
        type: 'h2',
        text: 'Caso 2 — Empresa de serviços financeiros: processamento de propostas',
      },
      {
        type: 'h3',
        text: 'O problema',
      },
      {
        type: 'p',
        text: 'Uma empresa de mediação financeira processava propostas de crédito de forma manual: recebia pedidos por email, extraía informação para uma folha de cálculo, calculava simulações e enviava propostas formatadas. O processo demorava em média 2 dias por proposta e era o principal gargalo de crescimento do negócio.',
      },
      {
        type: 'h3',
        text: 'A solução',
      },
      {
        type: 'p',
        text: 'Desenvolvemos um sistema que automatizava a extracção de dados dos pedidos recebidos por email, alimentava uma engine de simulação e gerava propostas formatadas em PDF, prontas para envio. Casos de excepção eram sinalizados para revisão humana com toda a informação contextualizada.',
      },
      {
        type: 'h3',
        text: 'Os resultados',
      },
      {
        type: 'ul',
        items: [
          'Tempo de processamento de proposta reduzido de 2 dias para menos de 2 horas.',
          'Capacidade de processamento aumentou 4x sem contratar pessoal adicional.',
          'Taxa de erro em simulações reduziu para zero (era de 3-4% com processamento manual).',
          'Payback do investimento em automação: 4 meses.',
        ],
      },
      {
        type: 'h2',
        text: 'Caso 3 — Retailer online: sincronização de inventário multi-canal',
      },
      {
        type: 'h3',
        text: 'O problema',
      },
      {
        type: 'p',
        text: 'Um retailer com presença em três marketplaces (Amazon, FNAC e loja própria) geria o stock manualmente. Actualizações de inventário eram feitas canal a canal, com atraso de horas entre a venda e a actualização dos outros canais. Resultado: vendas duplicadas, penalizações dos marketplaces e clientes insatisfeitos.',
      },
      {
        type: 'h3',
        text: 'A solução e os resultados',
      },
      {
        type: 'p',
        text: 'Implementámos uma integração em tempo real entre os três canais e o sistema de gestão de stock. Cada venda actualiza imediatamente o inventário em todos os canais. As vendas duplicadas eliminadas representaram uma poupança directa de 8.000€ nos primeiros 3 meses.',
      },
      {
        type: 'callout',
        text: 'A regra que aplicamos em todos os projectos: automatizamos primeiro o que causa mais dor, tem maior volume e tem impacto mensurável em menos de 90 dias.',
      },
      {
        type: 'h2',
        text: 'O que estes casos têm em comum',
      },
      {
        type: 'ul',
        items: [
          'Nenhum deles exigiu substituir os sistemas existentes — as automações integraram-se com o que já existia.',
          'Todos tinham um problema de negócio claro antes de qualquer discussão tecnológica.',
          'O ROI foi definido e medido desde o início, com métricas acordadas antes da implementação.',
          'Os projectos foram concluídos em 6 a 12 semanas.',
        ],
      },
    ],
  },
  {
    slug: 'machine-learning-pmes-exemplos-praticos',
    title: 'Machine learning para PMEs: exemplos práticos sem necessidade de equipa técnica',
    description:
      'Machine learning não é exclusivo de grandes empresas. Veja como PMEs em Portugal e Brasil estão a usar modelos preditivos para crescer e tomar melhores decisões.',
    date: '2026-05-13',
    readingTime: 6,
    category: 'Machine Learning',
    content: [
      {
        type: 'p',
        text: 'Machine learning (ML) passou de território exclusivo de grandes empresas tecnológicas para uma tecnologia acessível a empresas de qualquer dimensão. O que mudou? O custo das ferramentas, a disponibilidade de plataformas que abstraem a complexidade técnica e a existência de parceiros especializados que implementam soluções sem exigir que a empresa construa capacidade técnica interna.',
      },
      {
        type: 'h2',
        text: 'O mito de que ML requer uma equipa de data science',
      },
      {
        type: 'p',
        text: 'A ideia de que implementar machine learning requer contratar data scientists, engenheiros de ML e investir meses em infraestrutura é um mito que persistiu durante anos. Hoje, um parceiro técnico experiente consegue implementar modelos preditivos úteis numa PME em 6 a 12 semanas, integrando com os sistemas existentes e entregando outputs em dashboards que qualquer gestor consegue interpretar.',
      },
      {
        type: 'h2',
        text: 'Exemplos práticos para PMEs',
      },
      {
        type: 'h3',
        text: 'Previsão de vendas para gestão de tesouraria',
      },
      {
        type: 'p',
        text: 'Uma PME de distribuição alimentar usava previsões manuais baseadas em experiência do gestor para planear compras e gerir tesouraria. Implementámos um modelo de séries temporais que analisa histórico de vendas, sazonalidade, dias da semana e feriados. A precisão das previsões melhorou de 65% para 88%, reduzindo o excesso de stock em 22% e as rupturas em 40%.',
      },
      {
        type: 'h3',
        text: 'Scoring de leads para priorização comercial',
      },
      {
        type: 'p',
        text: 'Uma empresa B2B de software com uma equipa comercial de 5 pessoas recebia mais de 200 leads por mês e não tinha forma sistemática de os priorizar. Desenvolvemos um modelo de scoring que analisa o comportamento no site, dados de empresa e padrões de interacção para prever a probabilidade de conversão. A equipa passou a focar nos leads com maior score, aumentando a taxa de conversão em 35% sem aumentar o número de contactos.',
      },
      {
        type: 'h3',
        text: 'Detecção de churn em subscriptions',
      },
      {
        type: 'p',
        text: 'Uma empresa de SaaS com 1.200 clientes não conseguia identificar antecipadamente quais os clientes em risco de cancelamento. Implementámos um modelo que analisa padrões de uso, frequência de login, suporte contactado e outros indicadores comportamentais. O modelo detecta clientes em risco 45 dias antes do cancelamento, com 78% de precisão, permitindo intervenção proactiva.',
      },
      {
        type: 'h3',
        text: 'Optimização de preços dinâmicos',
      },
      {
        type: 'p',
        text: 'Um hotel boutique em Lisboa usava tabelas de preços estáticas com apenas duas variações sazonais. Implementámos um modelo que analisa ocupação histórica, eventos locais, meteorologia e preços da concorrência para sugerir preços optimizados por data. A receita por quarto disponível (RevPAR) aumentou 18% no primeiro ano.',
      },
      {
        type: 'callout',
        text: 'O critério de viabilidade para ML numa PME é simples: existe histórico de dados (mínimo 12-18 meses) e existe um problema de negócio claro com impacto mensurável? Se sim, existe provavelmente um caso de uso.',
      },
      {
        type: 'h2',
        text: 'Por onde começar',
      },
      {
        type: 'p',
        text: 'O ponto de partida não é a tecnologia — é o problema. Identifique uma decisão que a sua empresa toma repetidamente (previsão de stock, priorização de leads, detecção de risco) e que actualmente é feita com base em intuição ou métodos manuais. Esse é o candidato ideal para um primeiro projecto de ML.',
      },
      {
        type: 'p',
        text: 'Um parceiro técnico experiente consegue avaliar a viabilidade em poucas horas de diagnóstico, analisando os dados disponíveis, a qualidade dos mesmos e o potencial de impacto. Na maioria dos casos, o maior trabalho não é o modelo — é garantir que os dados estão estruturados e acessíveis.',
      },
      {
        type: 'ul',
        items: [
          'Comece por um problema específico com impacto mensurável.',
          'Verifique se tem dados históricos suficientes (regra geral: mínimo 1.000 registos por classe para classificação).',
          'Defina a métrica de sucesso antes de começar.',
          'Prefira um projecto pequeno que funcione a um projecto grande que nunca termina.',
        ],
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
