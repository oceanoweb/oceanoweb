export type Locale = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      inicio: 'Início',
      servicos: 'Serviços',
      sobre: 'Sobre',
      resultados: 'Resultados',
      contato: 'Contato',
      blog: 'Blog',
      cta: 'Fale Conosco',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    hero: {
      badge: 'Agência Digital · Portugal & Brasil',
      titleStart: 'Transformamos empresas em Portugal e Brasil com ',
      titleHighlight: 'IA e tecnologia de ponta',
      description:
        'Estratégia digital, inteligência artificial e automação para empresas que querem crescer, automatizar processos e escalar resultados.',
      ctaPrimary: 'Comece Agora',
      ctaSecondary: 'Nossos Serviços',
      stat1: 'Projetos Entregues',
      stat2: 'Satisfação',
      stat3: 'ROI Médio',
    },
    marquee: [
      'Inteligência Artificial',
      'Machine Learning',
      'Automação',
      'Growth Marketing',
      'Analytics',
      'Transformação Digital',
      'Produtividade',
      'Escala',
      'Inovação',
      'Performance',
    ],
    services: {
      subtitle: 'O que fazemos',
      title: 'Soluções que impulsionam a transformação digital',
      description:
        'Nossa coleção de serviços abrange todas as etapas do processo de transformação. Descubra como ajudamos negócios a se transformar.',
      learnMore: 'Saiba mais ->',
      items: [
        {
          title: 'Inteligência Artificial',
          description:
            'Implementamos soluções de IA personalizadas que automatizam processos, otimizam decisões e geram insights profundos para o seu negócio.',
        },
        {
          title: 'Machine Learning',
          description:
            'Modelos preditivos e algoritmos de aprendizado de máquina que transformam dados brutos em vantagem competitiva real.',
        },
        {
          title: 'Crescimento Digital',
          description:
            'Estratégias de growth marketing orientadas por dados para escalar sua presença digital e multiplicar seus resultados.',
        },
        {
          title: 'Automação de Processos',
          description:
            'Automatizamos fluxos de trabalho complexos para aumentar produtividade, reduzir custos e eliminar erros humanos.',
        },
        {
          title: 'Analytics & BI',
          description:
            'Dashboards inteligentes e análises avançadas que revelam oportunidades escondidas nos seus dados de negócio.',
        },
        {
          title: 'Transformação Digital',
          description:
            'Consultoria completa para digitalizar operações, modernizar sistemas e preparar sua empresa para o futuro.',
        },
      ],
    },
    about: {
      subtitle: 'Quem somos',
      title: 'Onde tecnologia profunda encontra mentalidade humana',
      p1: 'Somos um coletivo de especialistas apaixonados por tecnologia e transformação digital. Combinamos conhecimento profundo em IA, machine learning e estratégia digital com uma abordagem centrada nas pessoas para impulsionar negócios.',
      p2: 'Acreditamos que a verdadeira inovação acontece quando a tecnologia serve as pessoas. Cada projeto que tocamos é uma oportunidade de gerar impacto real e mensurável.',
      highlights: [
        'Equipe especializada em IA e dados',
        'Metodologia ágil e orientada a resultados',
        'Parceiros certificados das maiores plataformas',
        '+10 anos de experiência no mercado digital',
      ],
      yearsLabel: 'Anos de',
      yearsLabel2: 'experiência',
      partnersTitle: 'Plataformas & Parceiros',
      aiTitle: 'IA & Machine Learning',
    },
    process: {
      subtitle: 'Como trabalhamos',
      title: 'Um processo claro do início ao resultado',
      steps: [
        {
          number: '01',
          title: 'Diagnóstico',
          description:
            'Analisamos o seu negócio, os objectivos estratégicos e o ponto de partida actual para identificar as melhores oportunidades.',
        },
        {
          number: '02',
          title: 'Estratégia',
          description:
            'Definimos o plano de acção com prioridades, métricas de sucesso e prazos realistas alinhados ao seu negócio.',
        },
        {
          number: '03',
          title: 'Implementação',
          description:
            'Executamos com metodologia ágil, entregas iterativas e acompanhamento próximo em cada etapa do projecto.',
        },
        {
          number: '04',
          title: 'Resultados',
          description:
            'Medimos o impacto, optimizamos o que funciona e escalamos os resultados de forma contínua e mensurável.',
        },
      ],
    },
    metrics: {
      subtitle: 'Resultados que importam',
      title: 'Números que falam por si',
      stats: [
        { value: 50, suffix: '+', label: 'Projetos Entregues' },
        { value: 98, suffix: '%', label: 'Taxa de Retenção' },
        { value: 12, suffix: '+', label: 'Sectores Atendidos' },
        { value: 3, suffix: 'x', label: 'ROI Médio por Projecto' },
      ],
    },
    testimonials: {
      subtitle: 'Depoimentos',
      title: 'O que dizem nossos clientes',
      prevLabel: 'Depoimento anterior',
      nextLabel: 'Próximo depoimento',
      goTo: 'Ir para depoimento',
      items: [
        {
          quote:
            'A Oceano Web revolucionou nossa presença digital. O novo site moderno e intuitivo atraiu um público totalmente novo, e a implementação de IA nos processos de atendimento reduziu nosso tempo de resposta em 70%, aumentando drasticamente a satisfação dos clientes.',
          author: 'Edlene Lorenzzato',
          role: 'CEO, Lorenzzato Motor',
        },
        {
          quote:
            'Nosso novo site desenvolvido pela Oceano Web elevou completamente a presença digital do Grupo Nortearh. O design profissional e a experiência de navegação impecável aumentaram nossos leads qualificados em 85% nos primeiros 3 meses.',
          author: 'Carlos Nortearh',
          role: 'CEO, Grupo Nortearh',
        },
        {
          quote:
            'A plataforma de ecommerce que a Oceano Web criou para a Mobiliadora Bicalho superou todas as expectativas. Em 6 meses, as vendas online já representam 40% do nosso faturamento. A integração perfeita entre site e loja virtual fez toda a diferença.',
          author: 'Patricia Bicalho',
          role: 'Directora, Mobiliadora Bicalho',
        },
        {
          quote:
            'A plataforma customizada que a Oceano Web desenvolveu para a Concur revolucionou nossa forma de gerenciar conteúdo. Site profissional, sistema completo de publicação de vídeos, transmissões ao vivo e um dashboard intuitivo que centralizou toda nossa operação. Aumentamos o engajamento em 200%.',
          author: 'Rodrigo Fernandes',
          role: 'CTO, Concur',
        },
      ],
    },
    faq: {
      subtitle: 'FAQ',
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'Trabalham com empresas de que dimensão?',
          answer:
            'Trabalhamos com PMEs e grandes empresas em Portugal e no Brasil. Não existe um tamanho mínimo — o que importa é que a empresa queira crescer, automatizar ou digitalizar processos de forma estratégica.',
        },
        {
          question: 'Operam em Portugal e no Brasil?',
          answer:
            'Sim. Temos experiência de trabalho com empresas em ambos os mercados. Operamos de forma remota e presencial conforme a necessidade de cada projecto.',
        },
        {
          question: 'Quanto tempo demora um projecto de transformação digital?',
          answer:
            'Depende do âmbito. Projectos de menor escala, como um site ou automação pontual, podem estar concluídos em 4 a 8 semanas. Projectos de transformação mais abrangentes têm duração de 3 a 12 meses, com entregas iterativas ao longo do caminho.',
        },
        {
          question: 'Qual é o investimento mínimo para começar?',
          answer:
            'Cada projecto é orçamentado com base nos objectivos e no âmbito definidos no diagnóstico. Entraremos em contacto após o formulário para perceber a melhor forma de avançar.',
        },
        {
          question: 'Como é o processo de onboarding?',
          answer:
            'Após o primeiro contacto, fazemos uma sessão de diagnóstico para entender o negócio e os objectivos. Com base nisso, apresentamos uma proposta com escopo, prazos e investimento. O projecto arranca assim que a proposta for aprovada.',
        },
        {
          question: 'Fazem acompanhamento após a entrega?',
          answer:
            'Sim. Todos os projectos incluem um período de acompanhamento pós-entrega. Para clientes que pretendam uma parceria contínua, oferecemos planos de manutenção, monitorização e optimização.',
        },
        {
          question: 'Que tecnologias e plataformas utilizam?',
          answer:
            'Trabalhamos com as principais plataformas do mercado: Google Cloud, Microsoft Azure, OpenAI, Meta, HubSpot, entre outras. A escolha tecnológica é sempre feita com base no que melhor serve os objectivos do cliente.',
        },
        {
          question: 'Como medem os resultados?',
          answer:
            'Definimos KPIs claros no início de cada projecto e implementamos rastreamento via Google Analytics 4, dashboards de BI e relatórios periódicos. Cada decisão é orientada por dados.',
        },
      ],
    },
    cta: {
      subtitle: 'Contato',
      title: 'Vamos falar sobre o crescimento da sua empresa',
      description:
        'Preencha o formulário e um especialista entra em contacto em até 24 horas para perceber como podemos ajudar.',
      successTitle: 'Mensagem enviada!',
      successDescription: 'Entraremos em contato em breve.',
      labelName: 'Nome',
      labelEmail: 'Email',
      labelCompany: 'Empresa',
      labelCompanyOptional: '(opcional)',
      labelMessage: 'Mensagem',
      placeholderName: 'Seu nome',
      placeholderEmail: 'seu@email.com',
      placeholderCompany: 'Nome da empresa',
      placeholderMessage: 'Como podemos ajudar?',
      submit: 'Falar com um Especialista',
    },
    footer: {
      description:
        'Navegando o oceano digital com tecnologia, inteligência artificial e inovação para transformar seu negócio.',
      navigationTitle: 'Navegação',
      servicesTitle: 'Serviços',
      contactTitle: 'Contato',
      blogLink: 'Blog',
      copyright: '2026 Oceano Web. Todos os direitos reservados.',
      privacyLink: 'Política de Privacidade',
      termsLink: 'Termos de Serviço',
      serviceLinks: [
        'Inteligência Artificial',
        'Machine Learning',
        'Crescimento Digital',
        'Automação',
        'Analytics & BI',
      ],
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      servicos: 'Services',
      sobre: 'About',
      resultados: 'Results',
      contato: 'Contact',
      blog: 'Blog',
      cta: 'Get in Touch',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      badge: 'Digital Agency · Portugal & Brazil',
      titleStart: 'We transform businesses in Portugal and Brazil with ',
      titleHighlight: 'AI and cutting-edge technology',
      description:
        'Digital strategy, artificial intelligence and automation for businesses that want to grow, automate processes and scale results.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'Our Services',
      stat1: 'Projects Delivered',
      stat2: 'Satisfaction',
      stat3: 'Average ROI',
    },
    marquee: [
      'Artificial Intelligence',
      'Machine Learning',
      'Automation',
      'Growth Marketing',
      'Analytics',
      'Digital Transformation',
      'Productivity',
      'Scale',
      'Innovation',
      'Performance',
    ],
    services: {
      subtitle: 'What we do',
      title: 'Solutions that drive digital transformation',
      description:
        'Our suite of services covers every stage of the transformation process. Discover how we help businesses transform.',
      learnMore: 'Learn more ->',
      items: [
        {
          title: 'Artificial Intelligence',
          description:
            'We implement custom AI solutions that automate processes, optimize decisions, and generate deep insights for your business.',
        },
        {
          title: 'Machine Learning',
          description:
            'Predictive models and machine learning algorithms that turn raw data into real competitive advantage.',
        },
        {
          title: 'Digital Growth',
          description:
            'Data-driven growth marketing strategies to scale your digital presence and multiply your results.',
        },
        {
          title: 'Process Automation',
          description:
            'We automate complex workflows to increase productivity, reduce costs, and eliminate human errors.',
        },
        {
          title: 'Analytics & BI',
          description:
            'Intelligent dashboards and advanced analytics that reveal hidden opportunities in your business data.',
        },
        {
          title: 'Digital Transformation',
          description:
            'Full consulting to digitize operations, modernize systems, and prepare your company for the future.',
        },
      ],
    },
    about: {
      subtitle: 'Who we are',
      title: 'Where deep tech meets human mindset',
      p1: 'We are a collective of specialists passionate about technology and digital transformation. We combine deep knowledge in AI, machine learning, and digital strategy with a people-centric approach to drive business forward.',
      p2: 'We believe true innovation happens when technology serves people. Every project we touch is an opportunity to generate real, measurable impact.',
      highlights: [
        'Team specialized in AI and data',
        'Agile methodology oriented to results',
        'Certified partners of major platforms',
        '10+ years of experience in the digital market',
      ],
      yearsLabel: 'Years of',
      yearsLabel2: 'experience',
      partnersTitle: 'Platforms & Partners',
      aiTitle: 'AI & Machine Learning',
    },
    process: {
      subtitle: 'How we work',
      title: 'A clear process from start to results',
      steps: [
        {
          number: '01',
          title: 'Diagnosis',
          description:
            'We analyse your business, strategic objectives and current starting point to identify the best opportunities.',
        },
        {
          number: '02',
          title: 'Strategy',
          description:
            'We define the action plan with priorities, success metrics and realistic timelines aligned to your business.',
        },
        {
          number: '03',
          title: 'Implementation',
          description:
            'We execute with agile methodology, iterative deliveries and close monitoring at every stage of the project.',
        },
        {
          number: '04',
          title: 'Results',
          description:
            'We measure the impact, optimise what works and scale results in a continuous and measurable way.',
        },
      ],
    },
    metrics: {
      subtitle: 'Results that matter',
      title: 'Numbers that speak for themselves',
      stats: [
        { value: 50, suffix: '+', label: 'Projects Delivered' },
        { value: 98, suffix: '%', label: 'Retention Rate' },
        { value: 12, suffix: '+', label: 'Industries Served' },
        { value: 3, suffix: 'x', label: 'Average Project ROI' },
      ],
    },
    testimonials: {
      subtitle: 'Testimonials',
      title: 'What our clients say',
      prevLabel: 'Previous testimonial',
      nextLabel: 'Next testimonial',
      goTo: 'Go to testimonial',
      items: [
        {
          quote:
            'Oceano Web revolutionized our digital presence. The modern and intuitive new website attracted a completely new audience, and the AI implementation in customer service processes reduced our response time by 70%, drastically increasing customer satisfaction.',
          author: 'Edlene Lorenzzato',
          role: 'CEO, Lorenzzato Motor',
        },
        {
          quote:
            "Our new website developed by Oceano Web completely elevated Grupo Nortearh's digital presence. The professional design and impeccable navigation experience increased our qualified leads by 85% in the first 3 months.",
          author: 'Carlos Nortearh',
          role: 'CEO, Grupo Nortearh',
        },
        {
          quote:
            'The ecommerce platform that Oceano Web created for Mobiliadora Bicalho exceeded all expectations. In 6 months, online sales already represent 40% of our revenue. The seamless integration between website and online store made all the difference.',
          author: 'Patricia Bicalho',
          role: 'Director, Mobiliadora Bicalho',
        },
        {
          quote:
            'The custom platform that Oceano Web developed for Concur revolutionized how we manage content. Professional website, complete video publishing system, live streaming, and an intuitive dashboard that centralized our entire operation. We increased engagement by 200%.',
          author: 'Rodrigo Fernandes',
          role: 'CTO, Concur',
        },
      ],
    },
    faq: {
      subtitle: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          question: 'What size companies do you work with?',
          answer:
            'We work with SMEs and large companies in Portugal and Brazil. There is no minimum size — what matters is that the company wants to grow, automate or digitise processes strategically.',
        },
        {
          question: 'Do you operate in Portugal and Brazil?',
          answer:
            'Yes. We have experience working with companies in both markets. We operate remotely and in person depending on the needs of each project.',
        },
        {
          question: 'How long does a digital transformation project take?',
          answer:
            'It depends on the scope. Smaller projects, such as a website or one-off automation, can be completed in 4 to 8 weeks. More comprehensive transformation projects run from 3 to 12 months, with iterative deliveries along the way.',
        },
        {
          question: 'What is the minimum investment to get started?',
          answer:
            'Each project is budgeted based on the objectives and scope defined during diagnosis. We will get in touch after the form to understand the best way to move forward.',
        },
        {
          question: 'What does the onboarding process look like?',
          answer:
            'After the first contact, we run a diagnosis session to understand the business and objectives. Based on that, we present a proposal with scope, timelines and investment. The project kicks off once the proposal is approved.',
        },
        {
          question: 'Do you provide support after delivery?',
          answer:
            'Yes. All projects include a post-delivery support period. For clients who want an ongoing partnership, we offer maintenance, monitoring and optimisation plans.',
        },
        {
          question: 'What technologies and platforms do you use?',
          answer:
            'We work with leading market platforms: Google Cloud, Microsoft Azure, OpenAI, Meta, HubSpot, among others. The technology choice is always based on what best serves the client\'s objectives.',
        },
        {
          question: 'How do you measure results?',
          answer:
            'We define clear KPIs at the start of each project and implement tracking via Google Analytics 4, BI dashboards and periodic reports. Every decision is data-driven.',
        },
      ],
    },
    cta: {
      subtitle: 'Contact',
      title: "Let's talk about your company's growth",
      description:
        'Fill in the form and a specialist will get in touch within 24 hours to understand how we can help.',
      successTitle: 'Message sent!',
      successDescription: "We'll get back to you soon.",
      labelName: 'Name',
      labelEmail: 'Email',
      labelCompany: 'Company',
      labelCompanyOptional: '(optional)',
      labelMessage: 'Message',
      placeholderName: 'Your name',
      placeholderEmail: 'your@email.com',
      placeholderCompany: 'Company name',
      placeholderMessage: 'How can we help?',
      submit: 'Talk to a Specialist',
    },
    footer: {
      description:
        'Navigating the digital ocean with technology, artificial intelligence, and innovation to transform your business.',
      navigationTitle: 'Navigation',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      blogLink: 'Blog',
      copyright: '2026 Oceano Web. All rights reserved.',
      privacyLink: 'Privacy Policy',
      termsLink: 'Terms of Service',
      serviceLinks: [
        'Artificial Intelligence',
        'Machine Learning',
        'Digital Growth',
        'Automation',
        'Analytics & BI',
      ],
    },
  },
} as const
