export const SITE_CONFIG = {
  name: 'L8 Capital',
  tagline: 'Sua imobiliária mais forte.',
  description: 'Plataforma digital de soluções financeiras para imobiliárias. Tecnologia própria para aumentar receita, reduzir custos e eliminar carga operacional.',
  url: 'https://l8capital.com.br',
  whatsapp: '5511912345678', // TODO: Substituir pelo número real antes do lançamento
  email: 'contato@l8capital.com.br',
}

export const STATS = {
  agencies: '400+',
  experience: '+20',
  savings: '2.050',
  technology: '100%',
}

export const NAV_LINKS = [
  { href: '/#solucoes', label: 'Soluções' },
  { href: '/#como-funciona', label: 'Como Funciona' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
]

export const SERVICES = {
  seguros: [
    {
      title: 'Seguro Incêndio',
      description: 'Obrigatório por lei. Com a L8, além de proteção, você ganha previsibilidade de receita. Não é receita única — é receita recorrente.',
      icon: 'shield-check',
    },
    {
      title: 'Seguro Fiança',
      description: 'A garantia locatícia mais completa. Aprovação online, coberturas amplas, menos inadimplência e mais locações realizadas.',
      icon: 'file-check',
    },
    {
      title: 'Capitalização',
      description: 'Alternativa moderna, onde seu inquilino aplica o dinheiro (e ainda pode ser sorteado) e o proprietário tem garantia no contrato.',
      icon: 'piggy-bank',
    },
  ],
  financeiro: [
    {
      title: 'Redução de Boletagem',
      description: '',
      icon: 'receipt',
    },
    {
      title: 'Rentabilização de Float',
      description: '',
      icon: 'trending-up',
    },
    {
      title: 'Gestão de Fundo de Reserva',
      description: '',
      icon: 'wallet',
    },
    {
      title: 'Consórcio',
      description: '',
      icon: 'home',
    },
  ],
  capacitacao: [
    {
      title: 'Treinamento Comercial',
      description: 'Sua equipe vendendo mais, com técnica. Profissional com experiência real em imobiliária, não teoria de curso online.',
      icon: 'users',
    },
    {
      title: 'Treinamento Operacional',
      description: 'Processos otimizados. Menos retrabalho, mais produtividade. O que aprendemos em +400 imobiliárias, aplicado na sua.',
      icon: 'settings',
    },
    {
      title: 'Vistoria de Imóveis',
      description: 'Parceiro especializado com condições exclusivas para imobiliárias da rede L8.',
      icon: 'clipboard-check',
      comingSoon: true,
    },
  ],
}

export const FAQ_ITEMS = [
  {
    question: 'Quanto custa para começar?',
    answer: 'A análise inicial é 100% gratuita. E você só terá aumento de receita. Diferente de consultorias que cobram antes de entregar, a L8 aposta junto com você. Sem mensalidade fixa obrigatória.',
  },
  {
    question: 'Quanto tempo para ver resultados?',
    answer: 'A economia pode ser instantânea, vai só depender da sua volumetria. Ganhos com seguros, por exemplo, começam no segundo mês, já que as primeiras apólices são emitidas no primeiro mês. Em 90 dias, você tem visão clara do retorno.',
  },
  {
    question: 'Vocês atendem imobiliárias de qualquer tamanho?',
    answer: 'Nosso modelo funciona para todas as imobiliárias, pois a tecnologia é própria e reduz operacional da Imobiliária. Além disso temos um time especializado para te apoiar nessa análise e posteriormente em todo o processo.',
  },
  {
    question: 'Como funciona a economia em boletos?',
    answer: 'Simples: negociamos em volume com processadores de pagamento, o que nos permite ter uma tarifa e taxa bem competitiva. Além disso podemos conversar sobre antecipação de recebíveis e fluxo de caixa.',
  },
  {
    question: 'O que significa "modelo validado em 400 imobiliárias"?',
    answer: 'No Brasil, nosso parceiro estratégico, Alugue sem Fiador (ASF), já opera com a mesma tecnologia e modelo de negócio há anos. São mais de 400 imobiliárias utilizando a plataforma ASF no dia a dia. Não estamos testando algo novo. Estamos trazendo para São Paulo algo que já funciona.',
  },
  {
    question: 'Como vocês tratam os dados dos clientes? Estão em conformidade com a LGPD?',
    answer: 'Sim, a L8 Capital está em total conformidade com a Lei Geral de Proteção de Dados (LGPD). Utilizamos criptografia de ponta a ponta, servidores seguros em território nacional e políticas rígidas de acesso. Seus dados e os dados dos seus clientes são tratados com o mais alto padrão de segurança. Você pode solicitar informações sobre o tratamento de dados a qualquer momento pelo nosso canal de atendimento.',
  },
]

export const PROBLEMS = [
  {
    title: 'Margem Apertada',
    description: 'Boletos, seguros, comissões, taxas que só aumentam. No final do mês, o que sobra é cada vez menos.',
    icon: 'piggy-bank',
  },
  {
    title: 'Tempo Perdido',
    description: 'Sua equipe gasta horas com operacional que não gera negócio novo. Enquanto isso, imóveis esperam para ser alugados.',
    icon: 'clock',
  },
  {
    title: 'Difícil se Diferenciar',
    description: 'Portais, franquias, novos modelos. Todo mundo oferece a mesma coisa. Como mostrar que você é diferente?',
    icon: 'users',
  },
]

export const VALUE_PROPS = [
  {
    title: 'Aumentar Receita',
    description: 'Comissões de seguros e consórcio que você já oferece, mas ganha pouco. Rentabilização do dinheiro em trânsito na sua conta.',
    icon: 'trending-up',
    highlight: true,
  },
  {
    title: 'Reduzir Custos',
    description: 'Taxas de boleto mais baixas, vistorias com condições exclusivas (em breve). Negociamos em volume e repassamos a economia.',
    icon: 'piggy-bank',
    highlight: false,
  },
  {
    title: 'Eliminar Operacional',
    description: 'Gestão automatizada de apólices, cobranças integradas. Sua equipe livre para alugar.',
    icon: 'cpu',
    highlight: false,
  },
]

export const STEPS = [
  {
    number: '1',
    title: 'Conversa',
    description: '30 minutos para entender sua operação. Sem compromisso, sem pegadinha, sem vendedor te pressionando. Só uma conversa honesta.',
    icon: 'phone',
  },
  {
    number: '2',
    title: 'Diagnóstico',
    description: 'Analisamos seus custos e identificamos oportunidades. Você recebe um relatório gratuito com números reais da sua operação.',
    icon: 'search',
  },
  {
    number: '3',
    title: 'Implementação',
    description: 'Se fizer sentido para os dois lados, começamos em até 7 dias. Sem burocracia, sem dor de cabeça, sem traumas.',
    icon: 'rocket',
  },
]

export const COMPARISON = [
  { traditional: 'Fornecedor', l8: 'Parceiro / Sócio' },
  { traditional: 'Receita única', l8: 'Receita recorrente' },
  { traditional: '"Precisa de seguro?"', l8: '"Como aumentar sua receita?"' },
  { traditional: 'Tecnologia terceirizada', l8: 'Tecnologia própria' },
  { traditional: 'Processos rígidos', l8: 'Agilidade de startup' },
]
