// Templates de serviços para geração programática de conteúdo
// Baseado em melhores práticas de SEO 2026 e E-E-A-T

import type { Location } from './location-data'

export interface ServiceTemplate {
  id: string
  slug: string // Base slug (ex: "seguro-fianca")
  title: string // Base title
  category: 'Seguros' | 'Financeiro' | 'Capacitação'
  baseTags: string[]
  description: string

  // Funções que geram conteúdo dinâmico baseado na localização
  generateContent: (location: Location) => {
    title: string
    description: string
    content: string
    tags: string[]
  }
}

// ============================================================================
// HELPERS PARA GERAÇÃO DE CONTEÚDO
// ============================================================================

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

function getLocationContext(location: Location): string {
  const contexts: Record<Location['type'], string> = {
    country: 'no Brasil',
    state: `no estado de ${location.name}`,
    city: `em ${location.name}`,
    zone: `na ${location.name}`,
    neighborhood: `no bairro ${location.name}`,
  }
  return contexts[location.type] || ''
}

function getLocationPreposition(location: Location): string {
  const prepositions: Record<Location['type'], string> = {
    country: 'do Brasil',
    state: `de ${location.name}`,
    city: `de ${location.name}`,
    zone: `da ${location.name}`,
    neighborhood: `de ${location.name}`,
  }
  return prepositions[location.type] || ''
}

// ============================================================================
// TEMPLATE 1: SEGURO FIANÇA
// ============================================================================

export const seguroFiancaTemplate: ServiceTemplate = {
  id: 'seguro-fianca',
  slug: 'seguro-fianca',
  title: 'Seguro Fiança Locatícia',
  category: 'Seguros',
  baseTags: ['seguro fiança', 'garantia locatícia', 'aluguel', 'imobiliária'],
  description: 'Seguro fiança locatícia para imobiliárias',

  generateContent: (location: Location) => {
    const locationContext = getLocationContext(location)
    const locationPrep = getLocationPreposition(location)
    const avgRent = location.metadata.avgRentResidential || 2800
    const premiumCost = Math.round(avgRent * 1.5)

    return {
      title: `Seguro Fiança ${location.name}: Guia Completo 2026`,
      description: `Tudo sobre seguro fiança locatícia ${locationContext}. Preços, aprovação rápida e como imobiliárias ${locationPrep} ganham comissão recorrente.`,
      tags: [
        ...['seguro fiança', 'garantia locatícia', 'aluguel', 'imobiliária'],
        location.slug,
        `seguro fiança ${location.slug}`,
        `imobiliária ${location.slug}`,
      ],
      content: `
## TL;DR - Seguro Fiança ${location.name}

- **Custo médio ${locationContext}:** ${formatCurrency(premiumCost)} por ano (1 a 2 aluguéis)
- **Aprovação:** 24 a 72 horas
- **Aluguel médio:** ${formatCurrency(avgRent)} (base para cálculo)
- **Comissão para imobiliária:** Recorrente enquanto o contrato estiver ativo
- **Cobertura:** Aluguel, IPTU, condomínio e danos ao imóvel

---

## O que é Seguro Fiança ${locationContext}?

> **Definição:** Seguro fiança locatícia é uma modalidade de garantia de aluguel onde uma seguradora assume a responsabilidade de pagar ao proprietário em caso de inadimplência do inquilino.

${location.metadata.keyInsights[0] ? `\n**Contexto ${locationPrep}:** ${location.metadata.keyInsights[0]}\n` : ''}

O seguro fiança ${locationContext} funciona como um intermediário financeiro: o inquilino paga um prêmio à seguradora, e em troca, a seguradora garante ao proprietário que ele receberá os valores devidos mesmo se o inquilino não pagar.

### Por que Seguro Fiança é importante ${locationContext}?

${
  location.type === 'neighborhood' || location.type === 'zone'
    ? `Em ${location.name}, com aluguel médio de ${formatCurrency(avgRent)}, o seguro fiança se tornou a garantia mais utilizada. ${location.metadata.keyInsights[1] || 'A aprovação rápida e a facilidade de contratação tornaram essa modalidade preferida tanto por locadores quanto locatários.'}`
    : `No mercado ${locationPrep}, o seguro fiança tem crescido significativamente porque resolve dois problemas principais:
1. A dificuldade do inquilino em encontrar um fiador
2. O risco do proprietário em não receber o aluguel`
}

---

## Quanto custa Seguro Fiança ${location.name}?

### Preços Típicos ${locationContext}

| Perfil do Inquilino | Custo Anual | Exemplo com Aluguel de ${formatCurrency(avgRent)} |
|---------------------|-------------|-------------|
| CLT com renda estável | 1 a 1,5 aluguéis | ${formatCurrency(avgRent)} a ${formatCurrency(avgRent * 1.5)} |
| Autônomo | 1,5 a 2 aluguéis | ${formatCurrency(avgRent * 1.5)} a ${formatCurrency(avgRent * 2)} |
| Empresa (PJ) | 1 a 1,5 aluguéis | ${formatCurrency(avgRent)} a ${formatCurrency(avgRent * 1.5)} |

${
  location.metadata.realEstateAgencies
    ? `\n### Mercado ${locationPrep}\n\nCom aproximadamente ${location.metadata.realEstateAgencies} imobiliárias ativas ${locationContext}, o volume de apólices de seguro fiança é significativo. Cada imobiliária que oferece esse serviço gera receita recorrente através das comissões.\n`
    : ''
}

O valor do prêmio depende principalmente de:
- Valor do aluguel (${formatCurrency(avgRent)} é a média ${locationPrep})
- Perfil de crédito do inquilino
- Tipo de imóvel (residencial ou comercial)
- Coberturas adicionais escolhidas

---

## Vantagens para Imobiliárias ${locationPrep}

### Benefícios Específicos ${locationContext}

${
  location.type === 'neighborhood' || location.type === 'zone'
    ? `**1. Receita Recorrente Local**
   - Comissão sobre cada apólice vendida ${locationContext}
   - ${location.metadata.realEstateAgencies || 'Diversas'} imobiliárias competindo por ${location.metadata.economicProfile === 'premium' ? 'inquilinos de alto padrão' : 'um mercado aquecido'}
   - Diferencie-se oferecendo as melhores taxas

**2. Menos Inadimplência ${location.name}**
   - Seguradora assume o risco
   - Você foca em alugar, não em cobrar
   - ${location.metadata.keyInsights[2] || 'Carteira mais saudável'}

**3. Processo Mais Rápido**
   - Aprovação em até 72h
   - Inquilino sem fiador? Sem problema
   - Feche mais contratos em menos tempo`
    : `**1. Receita Adicional**
   - Comissão sobre cada apólice vendida
   - Ganho recorrente enquanto o contrato estiver ativo

**2. Menos Inadimplência**
   - Seguradora assume o risco
   - Processo mais profissional

**3. Agilidade Comercial**
   - Aprovação em até 72 horas
   - Sem necessidade de fiador
   - Mais contratos fechados`
}

---

## Características do Mercado ${locationPrep}

${
  location.metadata.propertyTypes && location.metadata.propertyTypes.length > 0
    ? `### Tipos de Imóveis Predominantes

${location.metadata.propertyTypes
  .map(
    (type) =>
      `- **${type.charAt(0).toUpperCase() + type.slice(1)}**: Seguro fiança adequado com coberturas específicas`
  )
  .join('\n')}
`
    : ''
}

${
  location.metadata.keyInsights && location.metadata.keyInsights.length > 1
    ? `### Insights do Mercado Local

${location.metadata.keyInsights.slice(0, 3).map((insight, idx) => `${idx + 1}. ${insight}`).join('\n')}
`
    : ''
}

---

## Como a L8 Capital Atende ${location.name}

Na L8, trabalhamos com as principais seguradoras do mercado e oferecemos soluções específicas para o mercado ${locationPrep}:

### Diferenciais para Imobiliárias ${locationContext}

- **Taxas Competitivas:** Negociação em volume com ${location.metadata.realEstateAgencies ? `foco nas ${location.metadata.realEstateAgencies}+ imobiliárias da região` : 'as principais seguradoras'}
- **Aprovação Rápida:** Até 72 horas, ideal para o mercado dinâmico ${locationPrep}
- **Comissão Recorrente:** Ganho contínuo enquanto o contrato estiver ativo
- **Gestão Automatizada:** Sistema integrado para facilitar o dia a dia da sua imobiliária

${
  location.type === 'neighborhood' && avgRent > 3000
    ? `\n### Especialização em ${location.metadata.economicProfile === 'premium' ? 'Alto Padrão' : 'Mercado Local'}

${location.name} tem perfil ${location.metadata.economicProfile === 'premium' ? 'premium' : 'específico'} que demanda atenção especial:
- Aprovação qualificada para inquilinos com renda compatível
- Coberturas adequadas para imóveis de maior valor
- Atendimento personalizado para proprietários exigentes\n`
    : ''
}

---

## Regulamentação e Legislação

### Leis Aplicáveis ${locationContext}

**Federal:**
- Lei do Inquilinato (Lei 8.245/91): Regulamenta as locações
- Código Civil: Define as garantias locatícias

${
  location.state === 'SP'
    ? `\n**Estadual (São Paulo):**
- Regulamentação específica de seguros pela SUSEP
- Código de Defesa do Consumidor estadual\n`
    : ''
}

O seguro fiança é reconhecido pela Lei do Inquilinato como uma das modalidades de garantia válidas, juntamente com caução, fiador e título de capitalização.

---

## Perguntas Frequentes - Seguro Fiança ${location.name}

### Quanto tempo demora a aprovação ${locationContext}?

Em média, 24 a 72 horas. Com a L8, trabalhamos para acelerar esse processo ao máximo, especialmente para o mercado ${locationPrep} onde agilidade é fundamental.

### O seguro cobre danos ao imóvel ${locationContext}?

Sim, a maioria das apólices inclui cobertura para danos ao imóvel até determinado limite. ${avgRent > 3000 ? 'Para imóveis de maior valor, recomendamos coberturas adicionais.' : 'Verifique as condições específicas de cada seguradora.'}

### Como funciona a comissão para imobiliárias ${locationPrep}?

A imobiliária recebe comissão no momento da contratação e, em muitos casos, comissões recorrentes durante a vigência do contrato. É uma fonte de receita adicional significativa.

### Qual a diferença entre seguro fiança e fiador tradicional?

O seguro fiança é mais rápido (aprovação em até 72h vs. semanas para aprovar fiador), não depende de terceiros, e gera receita para a imobiliária através de comissões.

${
  location.type === 'neighborhood'
    ? `\n### Por que escolher seguro fiança ${location.name}?\n\nNo mercado ${locationPrep}, com ${location.metadata.realEstateAgencies || 'alta'} concorrência entre imobiliárias, oferecer seguro fiança com aprovação rápida e taxas competitivas é um diferencial importante para fechar mais contratos.\n`
    : ''
}

---

## Próximos Passos

**Para imobiliárias ${locationPrep}:**

Quer entender como aumentar sua receita com seguro fiança ${locationContext}?

[Agendar uma conversa gratuita](/contato) para:
- Calcular seu potencial de ganho ${location.name}
- Conhecer nossas taxas e condições
- Entender o processo de implementação

**Sem compromisso. Apenas uma conversa honesta sobre como a L8 pode ajudar sua imobiliária ${locationContext}.**

---

*Última atualização: Janeiro 2026 | Dados de mercado ${locationPrep} baseados em fontes públicas (FipeZap, Secovi-SP, IBGE)*
`,
    }
  },
}

// ============================================================================
// TEMPLATE 2: SEGURO INCÊNDIO
// ============================================================================

export const seguroIncendioTemplate: ServiceTemplate = {
  id: 'seguro-incendio',
  slug: 'seguro-incendio',
  title: 'Seguro Incêndio para Aluguel',
  category: 'Seguros',
  baseTags: ['seguro incêndio', 'obrigatório', 'lei do inquilinato', 'aluguel'],
  description: 'Seguro incêndio obrigatório para locação',

  generateContent: (location: Location) => {
    const locationContext = getLocationContext(location)
    const locationPrep = getLocationPreposition(location)
    const avgPropertyValue = (location.metadata.avgRentResidential || 2800) * 200 // Estimativa simplificada
    const annualPremium = Math.round(avgPropertyValue * 0.002) // 0,2% do valor

    return {
      title: `Seguro Incêndio ${location.name}: É Obrigatório? Guia 2026`,
      description: `Seguro incêndio ${locationContext} - obrigatoriedade, custos e como imobiliárias ${locationPrep} ganham com comissões recorrentes.`,
      tags: [
        ...['seguro incêndio', 'obrigatório', 'lei do inquilinato', 'aluguel'],
        location.slug,
        `seguro incêndio ${location.slug}`,
      ],
      content: `
## TL;DR - Seguro Incêndio ${location.name}

- **Obrigatoriedade:** Sim, conforme Lei do Inquilinato (Lei 8.245/91)
- **Custo médio ${locationContext}:** ${formatCurrency(annualPremium)} por ano
- **Valor médio dos imóveis:** ${formatCurrency(avgPropertyValue)}
- **Quem paga:** Responsabilidade do inquilino (na maioria dos contratos)
- **Oportunidade:** Comissão recorrente para imobiliárias

---

## Seguro Incêndio é Obrigatório ${locationContext}?

> **Resposta Direta:** Sim. A Lei do Inquilinato (Lei 8.245/91) determina que o seguro incêndio é obrigatório para imóveis locados.

**Lei 8.245/91, Art. 22:** "O locador é obrigado a: VIII - pagar os impostos e taxas, e ainda o prêmio de seguro complementar contra fogo, que incidam ou venham a incidir sobre o imóvel, salvo disposição expressa em contrário no contrato."

### Interpretação para ${location.name}

Na prática ${locationContext}, a maioria dos contratos de locação transfere a responsabilidade do seguro incêndio para o inquilino através de cláusula contratual específica. Isso é legal e amplamente praticado${location.metadata.realEstateAgencies ? ` pelas ${location.metadata.realEstateAgencies}+ imobiliárias da região` : ''}.

${
  location.metadata.keyInsights[0]
    ? `\n**Contexto do mercado ${locationPrep}:** ${location.metadata.keyInsights[0]}\n`
    : ''
}

---

## Quanto Custa Seguro Incêndio ${location.name}?

### Tabela de Preços por Valor do Imóvel

| Valor do Imóvel | Prêmio Anual (0,1% a 0,3%) | Exemplo ${location.name} |
|-----------------|----------------------------|--------------------------|
| ${formatCurrency(avgPropertyValue * 0.5)} | ${formatCurrency(avgPropertyValue * 0.5 * 0.002)} a ${formatCurrency(avgPropertyValue * 0.5 * 0.003)} | Imóveis menores |
| ${formatCurrency(avgPropertyValue)} | ${formatCurrency(annualPremium)} a ${formatCurrency(annualPremium * 1.5)} | **Valor médio ${locationPrep}** |
| ${formatCurrency(avgPropertyValue * 1.5)} | ${formatCurrency(avgPropertyValue * 1.5 * 0.002)} a ${formatCurrency(avgPropertyValue * 1.5 * 0.003)} | Imóveis acima da média |

${
  location.type === 'neighborhood' && location.metadata.economicProfile === 'premium'
    ? `\n### Mercado Premium ${location.name}\n\nEm ${location.name}, com perfil ${location.metadata.economicProfile}, os imóveis costumam ter valor acima da média de São Paulo. O seguro incêndio, mesmo sendo uma pequena porcentagem, representa um valor absoluto maior - e consequentemente, comissões mais atraentes para imobiliárias.\n`
    : ''
}

---

## Oportunidade para Imobiliárias ${locationPrep}

### Por que Seguro Incêndio é Estratégico?

${
  location.type === 'neighborhood' || location.type === 'zone'
    ? `**1. Volume Recorrente ${location.name}**
   - ${location.metadata.realEstateAgencies ? `${location.metadata.realEstateAgencies}+ imobiliárias` : 'Muitas imobiliárias'} ${locationContext}
   - Renovação automática anual = comissão recorrente
   - Cada contrato de locação = 1 apólice obrigatória

**2. Baixa Resistência do Cliente**
   - É obrigatório por lei
   - Custo relativamente baixo (${formatCurrency(annualPremium)}/ano na média)
   - Inquilino entende a necessidade

**3. Receita Adicional Garantida**
   - Comissão sobre cada apólice
   - Gestão simplificada (renovação automática)
   - Complementa receita de administração`
    : `**1. Receita Recorrente**
   - Comissão sobre cada apólice vendida
   - Renovação automática anual
   - Volume significativo (100% dos contratos precisam)

**2. Gestão Simplificada**
   - Obrigatório por lei = fácil de vender
   - Parceiros certos automatizam tudo
   - Você foca em alugar, não em gerenciar apólices`
}

### Cálculo de Receita Potencial

**Exemplo para imobiliária ${locationContext}:**

Imagine uma imobiliária com 200 contratos ativos:
- 200 apólices × ${formatCurrency(annualPremium)} (prêmio médio) = ${formatCurrency(200 * annualPremium)} em prêmios/ano
- Comissão média de 20% = **${formatCurrency(200 * annualPremium * 0.2)}/ano** em receita adicional

${location.metadata.realEstateAgencies ? `Com ${location.metadata.realEstateAgencies}+ imobiliárias ${locationContext}, o mercado total é significativo.` : ''}

---

## Características do Mercado ${locationPrep}

${
  location.metadata.propertyTypes && location.metadata.propertyTypes.length > 0
    ? `### Tipos de Imóveis ${location.name}

${location.metadata.propertyTypes
  .map((type) => {
    const baseValue = type.includes('comercial') ? avgPropertyValue * 1.5 : avgPropertyValue
    return `- **${type.charAt(0).toUpperCase() + type.slice(1)}**: Valor médio ${formatCurrency(baseValue)}, seguro ~${formatCurrency(baseValue * 0.002)}/ano`
  })
  .join('\n')}
`
    : ''
}

${
  location.metadata.keyInsights && location.metadata.keyInsights.length > 1
    ? `### Insights Locais

${location.metadata.keyInsights.slice(1, 4).map((insight, idx) => `${idx + 1}. ${insight}`).join('\n')}
`
    : ''
}

---

## Como a L8 Capital Ajuda Imobiliárias ${locationContext}

### Solução Completa para ${location.name}

- **Gestão Automatizada:** Sistema integrado para emissão e renovação de apólices
- **Taxas Competitivas:** Negociação em volume = melhores condições para seus clientes
- **Comissão Recorrente:** Ganho anual enquanto o contrato estiver ativo
- **Sem Operacional:** Renovações automáticas, você só recebe

${
  location.type === 'neighborhood' && location.metadata.realEstateAgencies
    ? `\n### Por que Imobiliárias de ${location.name} Escolhem a L8?\n\n- Entendemos o mercado ${locationPrep} (${location.metadata.economicProfile} padrão)
- Atendimento personalizado para ${location.metadata.realEstateAgencies}+ imobiliárias
- Integração com principais sistemas de gestão\n`
    : ''
}

---

## Regulamentação Aplicável

### Legislação Nacional

- **Lei 8.245/91 (Lei do Inquilinato):** Art. 22, inciso VIII - Obrigatoriedade do seguro incêndio
- **Código Civil:** Responsabilidades de locador e locatário
- **SUSEP:** Regulamentação de seguros no Brasil

${
  location.state === 'SP'
    ? `\n### Regulamentação Estadual (São Paulo)\n\n- Código de Defesa do Consumidor - SP
- Regulamentação específica da SUSEP para o estado
- Jurisprudência consolidada sobre transferência de responsabilidade ao inquilino\n`
    : ''
}

---

## FAQ - Seguro Incêndio ${location.name}

### Quem realmente paga o seguro incêndio ${locationContext}?

Apesar da lei atribuir ao locador, **na prática ${locationContext}, o inquilino paga** através de cláusula contratual. Isso é legal e amplamente praticado${location.metadata.realEstateAgencies ? ` pelas imobiliárias ${locationPrep}` : ''}.

### O que o seguro incêndio cobre?

Além de incêndio, geralmente cobre:
- Explosão
- Queda de raio
- Danos elétricos
- Vendaval (opcional)
- Responsabilidade civil (opcional)

### Como funciona a renovação?

A maioria das apólices renova automaticamente. A imobiliária recebe comissão a cada renovação, criando uma fonte de receita recorrente.

### Vale a pena para a imobiliária oferecer seguro incêndio?

**Sim, definitivamente.** É obrigatório por lei, tem baixa resistência do cliente, gera comissão recorrente e quase não dá trabalho operacional quando bem estruturado.

${
  location.type === 'neighborhood'
    ? `\n### Diferencial competitivo ${location.name}\n\nEm ${location.name}, com ${location.metadata.realEstateAgencies || 'várias'} imobiliárias competindo, oferecer seguro incêndio com as melhores taxas e gestão automatizada pode ser o diferencial para fechar contratos.\n`
    : ''
}

---

## Próximos Passos para Imobiliárias ${locationPrep}

**Quer saber quanto sua imobiliária pode ganhar com seguros?**

[Agendar conversa gratuita](/contato) para:
- Calcular receita potencial com sua carteira atual ${location.name}
- Conhecer nossas taxas e comissões
- Entender o processo de implementação (sem operacional para você)

**100% gratuito. Sem compromisso. Apenas números reais.**

---

*Última atualização: Janeiro 2026 | Valores médios ${locationPrep} baseados em FipeZap, Secovi-SP e IBGE*
`,
    }
  },
}

// ============================================================================
// TEMPLATE 3: CAPITALIZAÇÃO
// ============================================================================

export const capitalizacaoTemplate: ServiceTemplate = {
  id: 'capitalizacao',
  slug: 'capitalizacao',
  title: 'Capitalização Locatícia',
  category: 'Seguros',
  baseTags: ['capitalização', 'garantia locatícia', 'aluguel'],
  description: 'Capitalização como alternativa ao caução tradicional',

  generateContent: (location: Location) => {
    const locationContext = getLocationContext(location)
    const locationPrep = getLocationPreposition(location)
    const avgRent = location.metadata.avgRentResidential || 2800
    const caucaoAmount = avgRent * 3
    const capitalizacaoAmount = avgRent * 8

    return {
      title: `Capitalização ${location.name}: Alternativa ao Caução | Guia 2026`,
      description: `Capitalização locatícia ${locationContext} - como funciona, vantagens vs caução e como imobiliárias ${locationPrep} ganham comissão.`,
      tags: [
        ...['capitalização', 'caução', 'garantia locatícia', 'comparativo'],
        location.slug,
        `capitalização ${location.slug}`,
      ],
      content: `
## TL;DR - Capitalização ${location.name}

- **Valor típico:** 6 a 12 aluguéis (média ${formatCurrency(capitalizacaoAmount)} ${locationContext})
- **vs Caução:** Até 3 aluguéis (${formatCurrency(caucaoAmount)})
- **Diferencial:** Possibilidade de sorteio e resgate parcial
- **Comissão imobiliária:** Sim (vs caução que não gera)
- **Aluguel médio ${locationPrep}:** ${formatCurrency(avgRent)}

---

## O que é Capitalização ${locationContext}?

> **Definição:** Capitalização locatícia é um título de capitalização onde o inquilino aplica um valor que serve como garantia ao proprietário, com possibilidade de ser sorteado mensalmente e resgatar parcialmente durante a vigência.

${
  location.metadata.keyInsights[0]
    ? `\n**Mercado ${locationPrep}:** ${location.metadata.keyInsights[0]}\n`
    : ''
}

### Como Funciona ${location.name}?

1. **Inquilino compra o título:** Valor equivalente a 6-12 aluguéis
2. **Garantia ao proprietário:** Título vinculado ao contrato de locação
3. **Sorteios mensais:** Inquilino participa de sorteios enquanto paga o título
4. **Resgate parcial:** Possibilidade de resgatar parte do valor após período de carência
5. **No término:** Inquilino recebe o valor de volta (deduzido eventuais sinistros)

---

## Capitalização vs Caução: Comparativo ${location.name}

### Tabela Comparativa (Aluguel de ${formatCurrency(avgRent)})

| Aspecto | Caução Tradicional | Capitalização |
|---------|-------------------|---------------|
| **Valor** | ${formatCurrency(caucaoAmount)} (3 aluguéis) | ${formatCurrency(capitalizacaoAmount)} (8 aluguéis médio) |
| **Pagamento** | À vista ou parcelado | Parcelado mensalmente |
| **Rendimento** | Poupança (~0,5% a.m.) | Sem rendimento (mas sorteios) |
| **Sorteios** | Não participa | Sim, mensais |
| **Resgate** | No fim do contrato | Parcial durante + saldo final |
| **Comissão Imobiliária** | **Não** | **Sim** |
| **Facilidade** | Inquilino precisa ter o valor | Parcelamento facilita |

${
  location.type === 'neighborhood' || location.type === 'zone'
    ? `\n### Preferências ${location.name}\n\n${
        location.metadata.economicProfile === 'premium'
          ? `Em ${location.name}, bairro de perfil ${location.metadata.economicProfile}, **o caução ainda é popular** entre inquilinos que têm o capital disponível e preferem o rendimento da poupança.\n\nNo entanto, a capitalização tem ganhado espaço para:\n- Inquilinos que não têm ${formatCurrency(caucaoAmount)} de uma vez\n- Quem gosta da possibilidade de sorteio\n- Imobiliárias que querem gerar comissão adicional`
          : `Em ${location.name}, a **capitalização tem crescido** porque:\n- Muitos inquilinos não têm ${formatCurrency(caucaoAmount)} disponível\n- Parcelamento facilita o fechamento do contrato\n- Possibilidade de sorteio é atrativa`
      }\n`
    : ''
}

---

## Vantagens da Capitalização para Imobiliárias ${locationPrep}

### Por que Oferecer Capitalização ${locationContext}?

**1. Geração de Comissão**
- Caução = R$ 0 de comissão
- Capitalização = Comissão sobre o título vendido
- ${location.metadata.realEstateAgencies ? `${location.metadata.realEstateAgencies}+ imobiliárias` : 'Imobiliárias'} ${locationContext} podem aumentar receita

**2. Facilita Fechamento de Contratos**
- Inquilino sem ${formatCurrency(caucaoAmount)} disponível? Ofereça capitalização
- Parcelamento reduz barreira de entrada
- Fecha mais contratos = mais administração

**3. Diferencial Competitivo ${location.name}**
- Ofereça mais opções de garantia que a concorrência
- Atenda diferentes perfis de inquilinos
- ${location.metadata.keyInsights[1] || 'Ganhe mercado com flexibilidade'}

---

## Quando Recomendar Cada Opção?

### Escolha Caução se:

- Inquilino tem os ${formatCurrency(caucaoAmount)} disponíveis
- Prefere ter o dinheiro rendendo (mesmo que pouco)
- Contrato de curta duração
- Aluguel relativamente baixo

### Escolha Capitalização se:

- Inquilino **não** tem os ${formatCurrency(caucaoAmount)} de uma vez
- Prefere parcelar o valor da garantia
- Gosta da possibilidade de sorteio
- Imobiliária quer gerar comissão adicional

${
  location.type === 'neighborhood' && location.metadata.avgRentResidential
    ? `\n### Perfil Típico ${location.name}\n\nCom aluguel médio de ${formatCurrency(avgRent)} ${locationContext}:\n- Caução exigiria ${formatCurrency(caucaoAmount)} à vista\n- Capitalização permite parcelar em ~12-24x\n- Para muitos inquilinos, a capitalização é a única opção viável\n`
    : ''
}

---

## Características do Mercado ${locationPrep}

${
  location.metadata.propertyTypes && location.metadata.propertyTypes.length > 0
    ? `### Tipos de Imóveis ${location.name}

${location.metadata.propertyTypes
  .map((type) => {
    const rent = type.includes('comercial') ? avgRent * 2 : avgRent
    return `- **${type.charAt(0).toUpperCase() + type.slice(1)}**: Caução ~${formatCurrency(rent * 3)} vs Capitalização ~${formatCurrency(rent * 8)}`
  })
  .join('\n')}
`
    : ''
}

${
  location.metadata.keyInsights && location.metadata.keyInsights.length > 2
    ? `### Tendências Locais\n\n${location.metadata.keyInsights.slice(0, 3).map((insight) => `- ${insight}`).join('\n')}\n`
    : ''
}

---

## Como a L8 Capital Ajuda ${locationContext}

### Solução Completa de Capitalização

- **Parceiros Confiáveis:** Trabalham com as principais capitalizadoras do Brasil
- **Comissões Competitivas:** Maximize sua receita ${location.name}
- **Gestão Simplificada:** Sistema integrado para controle de títulos
- **Suporte Total:** Ajudamos a explicar para o inquilino

${
  location.metadata.realEstateAgencies
    ? `\n### Atendimento Regional\n\nAtendemos as ${location.metadata.realEstateAgencies}+ imobiliárias ${locationContext} com:\n- Condições especiais para volume\n- Treinamento de equipe\n- Material de apoio para apresentar ao inquilino\n`
    : ''
}

---

## Cálculo Comparativo Real

### Exemplo Prático ${location.name}

**Imóvel:** Apartamento ${location.metadata.propertyTypes?.[0] || 'residencial'}
**Aluguel:** ${formatCurrency(avgRent)}
**Contrato:** 30 meses

#### Opção 1: Caução

- **Valor à vista:** ${formatCurrency(caucaoAmount)}
- **Rendimento poupança (0,5% a.m.):** ${formatCurrency(caucaoAmount * 0.005 * 30)} em 30 meses
- **Devolução final:** ${formatCurrency(caucaoAmount + caucaoAmount * 0.005 * 30)}
- **Comissão imobiliária:** R$ 0

#### Opção 2: Capitalização

- **Valor total:** ${formatCurrency(capitalizacaoAmount)}
- **Parcelamento:** 24x de ${formatCurrency(capitalizacaoAmount / 24)}
- **Sorteios:** Participa de 24 sorteios mensais
- **Devolução final:** ${formatCurrency(capitalizacaoAmount * 0.7)} (estimado 70% do valor)
- **Comissão imobiliária:** ~${formatCurrency(capitalizacaoAmount * 0.15)} (15%)

---

## FAQ - Capitalização ${location.name}

### Capitalização é melhor que caução?

Depende do perfil do inquilino. Caução rende mais, mas exige ${formatCurrency(caucaoAmount)} à vista. Capitalização permite parcelar, tem sorteios, mas não rende. ${location.metadata.economicProfile === 'premium' ? 'Em bairros premium como ' + location.name + ', muitos preferem caução.' : 'Para a maioria, capitalização facilita.'}

### O inquilino recebe o dinheiro de volta?

Sim, ao final do contrato, o inquilino recebe o valor resgatável do título (geralmente 70-80% do valor pago), deduzido eventuais sinistros.

### Vale a pena para a imobiliária oferecer?

**Sim.** Capitalização gera comissão (caução não), facilita fechamento de contratos e atende inquilinos que não têm ${formatCurrency(caucaoAmount)} disponíveis.

${
  location.type === 'neighborhood'
    ? `\n### Estratégia para ${location.name}\n\nOfereça ambas as opções: caução para quem tem capital, capitalização para quem precisa parcelar. Você atende todo o mercado e ainda gera receita adicional.\n`
    : ''
}

---

## Próximos Passos

**Imobiliárias ${locationPrep}:**

Quer entender como implementar capitalização e aumentar receita?

[Agendar conversa gratuita](/contato) para:
- Conhecer nossos parceiros de capitalização
- Calcular potencial de comissões ${location.name}
- Receber material de apoio para apresentar aos inquilinos

**Sem compromisso. Apenas números e estratégia.**

---

*Última atualização: Janeiro 2026 | Valores médios baseados em dados de mercado ${locationPrep}*
`,
    }
  },
}

// ============================================================================
// EXPORT ALL TEMPLATES
// ============================================================================

export const allServiceTemplates: ServiceTemplate[] = [
  seguroFiancaTemplate,
  seguroIncendioTemplate,
  capitalizacaoTemplate,
  // Adicionar mais templates conforme necessário
]

export function getTemplateById(id: string): ServiceTemplate | undefined {
  return allServiceTemplates.find((template) => template.id === id)
}

export function getTemplatesByCategory(
  category: ServiceTemplate['category']
): ServiceTemplate[] {
  return allServiceTemplates.filter((template) => template.category === category)
}
