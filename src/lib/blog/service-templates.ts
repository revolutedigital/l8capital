// Templates de serviços para geração programática de conteúdo
// Baseado em melhores práticas de SEO 2026 e E-E-A-T
// Atualizado em Janeiro 2026 com informações corretas da L8 Capital

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

A L8 Capital é uma plataforma digital de soluções financeiras para imobiliárias em São Paulo. Utilizamos a mesma tecnologia e modelo de negócio já validado por mais de 400 imobiliárias no Brasil através do nosso parceiro estratégico [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net). Não estamos testando algo novo - estamos trazendo para São Paulo algo que já funciona.

### Diferenciais para Imobiliárias ${locationContext}

- **Taxas Competitivas:** Negociação em volume com as principais seguradoras
- **Aprovação Rápida:** Até 72 horas, ideal para o mercado dinâmico ${locationPrep}
- **Comissão Recorrente:** Ganho contínuo enquanto o contrato estiver ativo
- **Gestão Automatizada:** Sistema integrado para facilitar o dia a dia da sua imobiliária
- **Tecnologia Própria:** Reduz sua carga operacional

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

A L8 Capital utiliza tecnologia própria e o mesmo modelo já validado por mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net). Nosso modelo funciona para todas as imobiliárias, pois a tecnologia reduz o operacional.

### Solução Completa para ${location.name}

- **Gestão Automatizada:** Sistema integrado para emissão e renovação de apólices
- **Taxas Competitivas:** Negociação em volume = melhores condições para seus clientes
- **Comissão Recorrente:** Ganho anual enquanto o contrato estiver ativo - não é receita única, é receita recorrente
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

A L8 Capital utiliza tecnologia própria e o mesmo modelo já validado por mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net). A capitalização é uma alternativa moderna, onde seu inquilino aplica o dinheiro (e ainda pode ser sorteado) e o proprietário tem garantia no contrato.

### Solução Completa de Capitalização

- **Parceiros Confiáveis:** Trabalhamos com as principais capitalizadoras do Brasil
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
// TEMPLATE 4: RENTABILIZAÇÃO DE FLOAT
// ============================================================================

export const rentabilizacaoFloatTemplate: ServiceTemplate = {
  id: 'rentabilizacao-float',
  slug: 'rentabilizacao-float',
  title: 'Rentabilização de Float',
  category: 'Financeiro',
  baseTags: ['float', 'rentabilização', 'receita extra', 'imobiliária'],
  description: 'Como imobiliárias ganham com rentabilização de float',

  generateContent: (location: Location) => {
    const locationContext = getLocationContext(location)
    const locationPrep = getLocationPreposition(location)
    const avgContracts = location.metadata.realEstateAgencies ? 200 : 150
    const avgRent = location.metadata.avgRentResidential || 2800
    const floatValue = avgContracts * avgRent // Estimativa de float mensal
    const monthlyEarnings = Math.round(floatValue * 0.01) // 1% ao mês

    return {
      title: `Rentabilização de Float ${location.name}: Guia Completo 2026`,
      description: `Como imobiliárias ${locationPrep} ganham receita extra com float. Entenda o que é, quanto rende e como implementar sem risco.`,
      tags: [
        ...['float', 'rentabilização', 'receita extra', 'imobiliária'],
        location.slug,
        `float ${location.slug}`,
        `imobiliária ${location.slug}`,
      ],
      content: `
## TL;DR - Rentabilização de Float ${location.name}

- **O que é:** Rentabilizar o dinheiro que fica na conta da imobiliária entre receber e repassar
- **Potencial médio ${locationContext}:** ${formatCurrency(monthlyEarnings)}/mês para imobiliária com ${avgContracts} contratos
- **Rentabilidade:** 100% CDI (~1% ao mês em 2026)
- **Risco:** Zero - dinheiro líquido todos os dias
- **Complexidade:** Baixa - automação total

---

## O que é Float e Como Rentabilizar?

> **Definição:** Float é o período em que o dinheiro dos aluguéis fica na conta da imobiliária antes de ser repassado aos proprietários.

### Como Funciona ${locationContext}?

1. **Dia 5:** Inquilinos pagam aluguéis na conta da imobiliária
2. **Dia 5-10:** Dinheiro fica parado na conta corrente (0% de rendimento)
3. **Dia 10:** Imobiliária repassa aos proprietários

**Esses 5 dias são o "float" - e hoje você perde dinheiro deixando parado.**

${
  location.metadata.keyInsights[0]
    ? `\n**Contexto ${locationPrep}:** ${location.metadata.keyInsights[0]}\n`
    : ''
}

${
  location.type === 'neighborhood' || location.type === 'zone'
    ? `Em ${location.name}, com aluguel médio de ${formatCurrency(avgRent)}, uma imobiliária com ${avgContracts} contratos movimenta ${formatCurrency(floatValue)}/mês. Esse dinheiro fica parado por 5-10 dias antes do repasse.`
    : `No mercado ${locationPrep}, imobiliárias movimentam milhões por mês em aluguéis. Rentabilizar esse float é uma fonte de receita passiva significativa.`
}

---

## Quanto uma Imobiliária ${locationPrep} Pode Ganhar?

### Calculadora de Float

**Premissas ${location.name}:**
- Aluguel médio: ${formatCurrency(avgRent)}
- Contratos administrados: ${avgContracts}
- Dias de float: 7 dias (média)
- Rentabilidade: 100% CDI (~13% ao ano = ~1% ao mês)

| Cenário | Contratos | Float Mensal | Rendimento/Mês | Rendimento/Ano |
|---------|-----------|--------------|----------------|----------------|
| Pequena | 100 | ${formatCurrency(avgRent * 100)} | ${formatCurrency(Math.round(avgRent * 100 * 0.01))} | ${formatCurrency(Math.round(avgRent * 100 * 0.01 * 12))} |
| Média | ${avgContracts} | ${formatCurrency(floatValue)} | **${formatCurrency(monthlyEarnings)}** | **${formatCurrency(monthlyEarnings * 12)}** |
| Grande | 500 | ${formatCurrency(avgRent * 500)} | ${formatCurrency(Math.round(avgRent * 500 * 0.01))} | ${formatCurrency(Math.round(avgRent * 500 * 0.01 * 12))} |

${
  location.metadata.realEstateAgencies
    ? `\n### Mercado ${locationPrep}\n\nCom ${location.metadata.realEstateAgencies}+ imobiliárias ativas ${locationContext}, a maioria ainda deixa o float parado na conta corrente. Quem rentabiliza tem uma vantagem competitiva clara: receita extra sem esforço adicional.\n`
    : ''
}

**Importante:** Esse é dinheiro que você JÁ TEM. Não é venda, não é comissão. É apenas fazer o dinheiro trabalhar enquanto espera o repasse.

---

## Como Funciona a Rentabilização Segura?

### Modelo L8 Capital

A L8 Capital utiliza tecnologia própria e o mesmo modelo já validado por mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net). A economia pode ser instantânea e vai depender da sua volumetria. Além disso, podemos conversar sobre antecipação de recebíveis e fluxo de caixa.

**1. Conta Remunerada Automatizada**
- Dinheiro entra → automaticamente aplicado
- Liquidez diária (saca quando quiser)
- Rendimento 100% CDI
- Sem risco de mercado

**2. Gestão Transparente**
- Dashboard em tempo real
- Extrato detalhado por proprietário
- Conciliação automática
- Auditoria completa

**3. Zero Operacional**
- Integração com seu sistema atual
- Aplicação e resgate automáticos
- Você só vê o dinheiro entrando

${
  location.type === 'neighborhood' && location.metadata.realEstateAgencies
    ? `\n### Por que Imobiliárias de ${location.name} Escolhem Rentabilizar?\n\n- **Receita passiva:** ${formatCurrency(monthlyEarnings)}/mês sem trabalho extra
- **Zero risco:** Dinheiro 100% líquido todos os dias
- **Diferencial competitivo:** ${location.metadata.realEstateAgencies} imobiliárias, poucas rentabilizam\n`
    : ''
}

---

## Segurança e Legalidade

### É Legal Rentabilizar Float?

**Sim, desde que:**
1. Dinheiro esteja sempre disponível para repasse
2. Proprietário receba exatamente o que foi combinado
3. Rentabilização seja da imobiliária, não misture com dinheiro do proprietário

**O que a L8 garante:**
- Conta segregada (seu dinheiro separado)
- Liquidez D+0 (saca hoje, cai hoje)
- Auditoria e transparência total
- Compliance com CVM e Banco Central

### Riscos? Praticamente Zero

**Por quê:**
- Aplicação em títulos públicos (Tesouro)
- Liquidez diária garantida
- Rendimento pós-fixado (sem risco de mercado)
- Instituições reguladas pelo Banco Central

${
  location.state === 'SP'
    ? `\n### Regulamentação em São Paulo\n\n- CVM regula aplicações financeiras
- Banco Central fiscaliza instituições
- Código Civil define deveres da imobiliária
- Jurisprudência favorável à rentabilização (desde que transparente)\n`
    : ''
}

---

## Vantagens para Imobiliárias ${locationPrep}

${
  location.type === 'neighborhood' || location.type === 'zone'
    ? `**1. Receita Extra Garantida ${location.name}**
   - ${formatCurrency(monthlyEarnings)}/mês automático
   - Sem depender de novas vendas
   - ${location.metadata.economicProfile === 'premium' ? 'Valores mais altos em bairro premium' : 'Receita recorrente estável'}

**2. Diferencial Competitivo Local**
   - ${location.metadata.realEstateAgencies || 'Poucas'} imobiliárias ${locationContext} rentabilizam
   - Margem maior para reduzir taxa se necessário
   - Profissionalização da gestão financeira

**3. Zero Trabalho Adicional**
   - Automação 100%
   - Você continua fazendo exatamente o que já faz
   - Dinheiro entra sozinho`
    : `**1. Receita Passiva**
   - Ganho mensal sem esforço
   - Escala com crescimento da carteira
   - Previsível e recorrente

**2. Profissionalização**
   - Gestão financeira moderna
   - Transparência com proprietários
   - Diferencial de mercado`
}

---

## Características do Mercado ${locationPrep}

${
  location.metadata.propertyTypes && location.metadata.propertyTypes.length > 0
    ? `### Volume de Float por Tipo de Imóvel

${location.metadata.propertyTypes
  .map((type) => {
    const rent = type.includes('comercial') ? avgRent * 2 : avgRent
    return `- **${type.charAt(0).toUpperCase() + type.slice(1)}**: Aluguel médio ${formatCurrency(rent)} → Float maior em contratos comerciais`
  })
  .join('\n')}
`
    : ''
}

${
  location.metadata.keyInsights && location.metadata.keyInsights.length > 1
    ? `### Oportunidades Locais\n\n${location.metadata.keyInsights.slice(0, 3).map((insight) => `- ${insight}`).join('\n')}\n`
    : ''
}

---

## Implementação Passo a Passo

### Como Começar a Rentabilizar

**Passo 1:** Avaliar seu float médio
- Quantos contratos você administra?
- Qual o aluguel médio?
- Quantos dias entre receber e repassar?

**Passo 2:** Escolher parceiro confiável
- Regulamentação (CVM, Bacen)
- Liquidez diária garantida
- Transparência total

**Passo 3:** Integrar sistemas
- API com seu software de gestão
- Ou upload manual (também funciona)
- Testes com valores pequenos

**Passo 4:** Automação completa
- Regras de repasse automático
- Rentabilização do saldo
- Relatórios mensais

${
  location.type === 'neighborhood' && monthlyEarnings > 1000
    ? `\n### ROI para ${location.name}\n\n**Investimento:** R$ 0 (zero setup fee)
**Retorno mensal:** ${formatCurrency(monthlyEarnings)}
**Retorno anual:** ${formatCurrency(monthlyEarnings * 12)}
**Payback:** Imediato (sem investimento inicial)\n\n**Não faz sentido deixar ${formatCurrency(floatValue)} parado na conta corrente.**\n`
    : ''
}

---

## Perguntas Frequentes - Float ${location.name}

### O dinheiro fica bloqueado?

**Não.** Liquidez é D+0. Precisa repassar hoje? O dinheiro está disponível hoje.

### E se eu precisar do dinheiro de emergência?

Resgate instantâneo. O float sempre fica 100% líquido para você poder movimentar quando precisar.

### Proprietários ficam sabendo?

Só se você quiser compartilhar. A rentabilização é sua, o proprietário recebe exatamente o acordado.

### Quanto custa?

Na L8, não cobramos nada para rentabilizar. Você fica com 100% do rendimento. Nosso ganho é em outros serviços (seguros, etc).

${
  location.type === 'neighborhood'
    ? `\n### Vale a pena para imobiliárias ${location.name}?\n\n**Absolutamente.** Com ${avgContracts} contratos, você ganha ${formatCurrency(monthlyEarnings)}/mês sem fazer nada diferente do que já faz. É literalmente dinheiro na mesa que ${location.metadata.realEstateAgencies ? 'a maioria das ' + location.metadata.realEstateAgencies + ' imobiliárias locais' : 'muitas imobiliárias'} ainda não pegou.\n`
    : ''
}

---

## Próximos Passos

**Para imobiliárias ${locationPrep}:**

Quer calcular quanto sua imobiliária pode ganhar com float?

[Agendar calculadora gratuita](/contato) para:
- Simular seu float mensal ${location.name}
- Ver quanto você está deixando na mesa
- Entender o setup (spoiler: é simples)

**Calculadora personalizada. Sem compromisso. Apenas números reais.**

---

*Última atualização: Janeiro 2026 | Rentabilidade baseada em CDI atual (Selic 10,75% a.a.)*
`,
    }
  },
}

// ============================================================================
// TEMPLATE 5: GESTÃO DE FUNDO DE RESERVA
// ============================================================================

export const fundoReservaTemplate: ServiceTemplate = {
  id: 'fundo-reserva',
  slug: 'fundo-reserva-imobiliaria',
  title: 'Gestão de Fundo de Reserva',
  category: 'Financeiro',
  baseTags: ['fundo de reserva', 'condomínio', 'gestão financeira', 'imobiliária'],
  description: 'Gestão profissional de fundo de reserva de condomínios',

  generateContent: (location: Location) => {
    const locationContext = getLocationContext(location)
    const locationPrep = getLocationPreposition(location)
    const avgCondoFee = (location.metadata.avgRentResidential || 2800) * 0.4 // 40% do aluguel
    const avgUnits = 40 // Média de unidades por condomínio
    const avgFundoReserva = avgCondoFee * avgUnits * 3 // 3 meses de reserva

    return {
      title: `Gestão de Fundo de Reserva ${location.name}: Guia 2026`,
      description: `Como imobiliárias ${locationPrep} gerenciam fundo de reserva de condomínios com segurança, transparência e rentabilização.`,
      tags: [
        ...['fundo de reserva', 'condomínio', 'gestão financeira', 'síndico'],
        location.slug,
        `fundo reserva ${location.slug}`,
      ],
      content: `
## TL;DR - Fundo de Reserva ${location.name}

- **O que é:** Reserva financeira do condomínio para emergências e manutenções
- **Valor médio ${locationContext}:** ${formatCurrency(avgFundoReserva)} (condomínio de ${avgUnits} unidades)
- **Gestão profissional:** Rentabilização + segurança + transparência
- **Rentabilidade:** 100% CDI sem risco
- **Obrigatoriedade:** Sim, pela Lei 4.591/64

---

## O que é Fundo de Reserva?

> **Definição Legal:** Fundo de Reserva é a reserva financeira obrigatória que todo condomínio deve ter para cobrir despesas extraordinárias e emergências.

**Lei 4.591/64, Art. 22:** O regimento interno do condomínio deve prever a constituição de fundo de reserva.

### Por que Existe?

${
  location.metadata.keyInsights[0]
    ? `\n**Contexto ${locationPrep}:** ${location.metadata.keyInsights[0]}\n`
    : ''
}

Imagine situações ${locationContext}:
- Elevador quebra e precisa ser trocado: ${formatCurrency(80000)}
- Infiltração grave na garagem: ${formatCurrency(40000)}
- Pintura da fachada: ${formatCurrency(60000)}

**Sem fundo de reserva:** Síndico precisa fazer rateio emergencial entre condôminos.
**Com fundo de reserva:** Paga do fundo, resolve rápido, sem dor de cabeça.

---

## Quanto Deve Ter no Fundo de Reserva?

### Valores Recomendados ${location.name}

**Cálculo base:**
- Condomínio médio: ${avgUnits} unidades
- Taxa média: ${formatCurrency(avgCondoFee)}/unidade
- Arrecadação mensal: ${formatCurrency(avgCondoFee * avgUnits)}

| Nível | Meses de Reserva | Valor Total | Uso |
|-------|------------------|-------------|-----|
| Mínimo | 2-3 meses | ${formatCurrency(avgFundoReserva)} | Pequenas emergências |
| Ideal | 6-12 meses | ${formatCurrency(avgFundoReserva * 3)} | Segurança completa |
| Robusto | 12+ meses | ${formatCurrency(avgFundoReserva * 5)} | Grandes reformas |

${
  location.type === 'neighborhood' && location.metadata.economicProfile === 'premium'
    ? `\n### Padrão ${location.name}\n\nEm ${location.name}, condomínios de alto padrão costumam ter fundos mais robustos devido a:\n- Elevadores importados (manutenção cara)
- Acabamentos premium (reposição específica)
- Sistemas sofisticados (ar-central, automação)
- Áreas de lazer completas (piscina, sauna, academia)\n\nReserva recomendada: 12+ meses (${formatCurrency(avgFundoReserva * 5)})\n`
    : ''
}

---

## Gestão Profissional vs Conta Corrente

### Comparativo: Como Condomínios ${locationPrep} Gerenciam Hoje

| Aspecto | Conta Corrente | Gestão Profissional L8 |
|---------|----------------|------------------------|
| **Rendimento** | 0% | 100% CDI (~1% a.m.) |
| **Rendimento/ano** (${formatCurrency(avgFundoReserva)}) | R$ 0 | **${formatCurrency(Math.round(avgFundoReserva * 0.12))}** |
| **Segurança** | Garantia FGC | Garantia FGC + Segregação |
| **Liquidez** | Imediata | D+0 (mesma coisa) |
| **Transparência** | Extrato banco | Dashboard + Relatórios |
| **Auditoria** | Manual | Automática |

**Problema comum ${locationContext}:**
Síndicos deixam ${formatCurrency(avgFundoReserva)} parado na conta corrente rendendo 0%. Em 1 ano, perde ${formatCurrency(Math.round(avgFundoReserva * 0.12))} de rentabilização.

---

## Vantagens da Gestão Profissional

### Para Imobiliárias ${locationPrep}

${
  location.type === 'neighborhood' || location.type === 'zone'
    ? `**1. Diferencial Competitivo ${location.name}**
   - Ofereça gestão moderna para síndicos
   - ${location.metadata.realEstateAgencies || 'Poucas'} imobiliárias ${locationContext} fazem isso
   - Agregue valor além da administração básica

**2. Receita Adicional**
   - Comissão sobre gestão do fundo
   - Relacionamento mais forte com síndicos
   - Upsell de outros serviços

**3. Profissionalização**
   - Dashboard para síndico acompanhar
   - Relatórios automáticos para assembleia
   - Transparência que síndicos valorizam`
    : `**1. Diferencial de Mercado**
   - Poucos concorrentes oferecem
   - Valor agregado real
   - Fidelização do síndico

**2. Nova Fonte de Receita**
   - Gestão profissional tem valor
   - Relacionamento mais próximo
   - Cross-sell facilitado`
}

### Para Síndicos e Condôminos

- **Rentabilização:** Fundo cresce sozinho
- **Segurança:** Regulamentação e auditoria
- **Transparência:** Acesso online em tempo real
- **Profissionalização:** Gestão de nível corporativo

---

## Como Funciona a Gestão L8

A L8 Capital utiliza tecnologia própria e o mesmo modelo já validado por mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net). Nosso modelo funciona para todas as imobiliárias, pois a tecnologia reduz o operacional e temos um time especializado para apoiar você em todo o processo.

### Processo Completo

**1. Abertura de Conta Segregada**
- Conta em nome do condomínio
- Separada do dinheiro operacional
- Regulamentada pela CVM

**2. Aplicação Automática**
- Fundo aplicado em títulos públicos
- 100% CDI de rentabilidade
- Liquidez diária garantida

**3. Dashboard para Síndico**
- Saldo atualizado em tempo real
- Histórico de movimentações
- Relatórios para assembleia
- Exportação de dados

**4. Resgate Simplificado**
- Síndico solicita resgate
- Dinheiro cai em D+0
- Sem burocracia

${
  location.metadata.realEstateAgencies
    ? `\n### Adoção ${locationPrep}\n\n${location.metadata.realEstateAgencies}+ imobiliárias ${locationContext}, mas poucas oferecem gestão profissional de fundo de reserva. É uma oportunidade clara de diferenciação.\n`
    : ''
}

---

## Segurança e Compliance

### Regulamentação

**Federal:**
- Lei 4.591/64: Obrigatoriedade do fundo de reserva
- CVM: Regulamentação de aplicações financeiras
- Código Civil: Deveres do síndico

${
  location.state === 'SP'
    ? `\n**Estadual (São Paulo):**
- Regulamentação estadual de condomínios
- Fiscalização do Procon-SP
- Jurisprudência consolidada sobre gestão de fundos\n`
    : ''
}

### Garantias

- **FGC:** Fundo Garantidor de Créditos (até R$ 250 mil por CPF/CNPJ)
- **Segregação:** Conta separada, impossível misturar com outros fundos
- **Auditoria:** Trilha completa de todas as movimentações
- **Transparência:** Síndico e conselho têm acesso total

---

## Casos de Uso Comuns

### Quando Usar o Fundo de Reserva?

**Emergências:**
- Elevador quebrou
- Infiltração grave
- Sistema elétrico queimou
- Portão automático parou

**Manutenções Programadas:**
- Pintura de fachada (3-5 anos)
- Troca de bombas (10 anos)
- Reforma de áreas comuns
- Atualização de equipamentos

**NÃO usar para:**
- Despesas mensais normais (luz, água, limpeza)
- Inadimplência de condôminos
- "Empréstimo" para outra finalidade

${
  location.type === 'neighborhood'
    ? `\n### Perfil de Gastos ${location.name}\n\nCondomínios ${locationContext} têm padrão de gastos específico:\n${
        location.metadata.economicProfile === 'premium'
          ? '- Elevadores premium (manutenção cara)\n- Acabamentos importados\n- Sistemas sofisticados\n- Áreas de lazer extensivas'
          : '- Manutenções regulares\n- Equipamentos padrão\n- Estrutura básica consolidada'
      }\n\nFundo de reserva deve contemplar esses custos.\n`
    : ''
}

---

## Implementação para Imobiliárias

### Como Oferecer aos Seus Clientes

**Passo 1:** Identificar condomínios com fundo de reserva
- Levantamento da carteira atual
- Priorizar fundos maiores (ROI maior)

**Passo 2:** Apresentar proposta ao síndico
- Calculadora de rentabilização
- Comparativo vs conta corrente
- Garantias e segurança

**Passo 3:** Aprovação em assembleia
- Apresentar em assembleia ordinária
- Mostrar benefícios para todos
- Votação (maioria simples)

**Passo 4:** Implementação
- Abertura de conta segregada
- Migração do fundo
- Treinamento do síndico no dashboard

---

## Perguntas Frequentes - Fundo de Reserva ${location.name}

### É obrigatório ter fundo de reserva?

**Sim.** A Lei 4.591/64 determina que todo condomínio deve constituir fundo de reserva. A assembleia define o valor.

### Síndico pode usar o fundo para qualquer coisa?

**Não.** O fundo é exclusivo para emergências e despesas extraordinárias aprovadas em assembleia. Uso indevido é crime (apropriação indébita).

### O dinheiro fica bloqueado?

**Não.** Liquidez é D+0. Se precisar usar o fundo hoje, o dinheiro está disponível hoje.

### Quanto rende?

100% CDI, que em 2026 está em ~13% ao ano (~1% ao mês). Um fundo de ${formatCurrency(avgFundoReserva)} rende ~${formatCurrency(Math.round(avgFundoReserva * 0.12))}/ano.

${
  location.type === 'neighborhood'
    ? `\n### Vale a pena para condomínios ${location.name}?\n\n**Sim.** ${
        location.metadata.economicProfile === 'premium'
          ? `Em ${location.name}, condomínios de alto padrão têm fundos de R$ 200-500 mil. Deixar parado na conta corrente é perder R$ 24-60 mil/ano.`
          : `Condomínios ${locationContext} se beneficiam da rentabilização profissional e transparência.`
      }\n`
    : ''
}

---

## Próximos Passos

**Para imobiliárias ${locationPrep}:**

Quer oferecer gestão profissional de fundo de reserva?

[Agendar demonstração](/contato) para:
- Ver dashboard na prática
- Calcular potencial dos seus condomínios ${location.name}
- Entender modelo de comissionamento

**Sem compromisso. Apenas uma conversa sobre oportunidade.**

---

*Última atualização: Janeiro 2026 | Rentabilidade baseada em CDI (Selic 10,75% a.a.)*
`,
    }
  },
}

// ============================================================================
// TEMPLATES 6-8: CAPACITAÇÃO (Versões Concisas)
// ============================================================================

export const treinamentoComercialTemplate: ServiceTemplate = {
  id: 'treinamento-comercial',
  slug: 'treinamento-comercial-imobiliaria',
  title: 'Treinamento Comercial para Imobiliárias',
  category: 'Capacitação',
  baseTags: ['treinamento', 'vendas', 'comercial', 'imobiliária'],
  description: 'Treinamento comercial para aumentar vendas de imobiliárias',

  generateContent: (location: Location) => {
    const locationContext = getLocationContext(location)
    const locationPrep = getLocationPreposition(location)

    return {
      title: `Treinamento Comercial para Imobiliárias ${location.name} | 2026`,
      description: `Treinamento comercial especializado para imobiliárias ${locationPrep}. Aumente vendas de seguros, comissões e fechamento de contratos.`,
      tags: [
        ...['treinamento', 'vendas', 'comercial', 'capacitação'],
        location.slug,
        `treinamento ${location.slug}`,
      ],
      content: `
## TL;DR - Treinamento Comercial ${location.name}

- **Foco:** Aumentar vendas de seguros e serviços para imobiliárias
- **Público:** Corretores, gerentes e proprietários de imobiliárias
- **Duração:** Workshop de 4 horas + acompanhamento mensal
- **ROI:** Aumento médio de 30% em comissões de seguros
- **Investimento:** Gratuito para parceiros L8 Capital

---

## O Desafio Comercial das Imobiliárias ${locationPrep}

**Realidade ${locationContext}:**
- Comissão de aluguel cada vez mais competitiva
- Necessidade de receita adicional
- Equipe sem treinamento em seguros
- Dificuldade em apresentar valor aos clientes

**Solução:** Capacitação comercial focada em produtos financeiros que imobiliárias já deveriam vender.

---

## O Que Você Aprende

### Módulo 1: Fundamentos de Seguros
- Seguro fiança: como apresentar e vender
- Seguro incêndio: obrigatoriedade e oportunidade
- Capitalização: quando recomendar vs caução

### Módulo 2: Técnicas de Venda
- Abordagem consultiva (não empurrar produto)
- Objeções mais comuns e como contornar
- Fechamento de venda sem ser insistente

### Módulo 3: Rentabilização e Serviços Financeiros
- Como apresentar float para proprietários de imobiliária
- Gestão de fundo de reserva como diferencial
- Upsell e cross-sell natural

${location.metadata.realEstateAgencies ? `\n### Contexto ${location.name}\n\nCom ${location.metadata.realEstateAgencies}+ imobiliárias ${locationContext}, a concorrência é alta. Treinamento comercial é o diferencial que separa quem sobrevive de quem prospera.\n` : ''}

---

## Metodologia L8 Capital

A L8 Capital oferece capacitação com profissionais com experiência real em imobiliária, não teoria de curso online. O que aprendemos em mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net), aplicamos na sua.

**1. Workshop Presencial/Online**
- 4 horas de conteúdo prático
- Cases reais de imobiliárias que funcionaram
- Role-play de situações de venda
- Material de apoio completo

**2. Acompanhamento Mensal**
- 1 reunião/mês para tirar dúvidas
- Análise de resultados comerciais
- Ajustes na abordagem
- Compartilhamento de boas práticas

**3. Material de Vendas Pronto**
- Scripts de apresentação
- Calculadoras de benefício
- Apresentações em PDF
- Email templates

---

## Resultados Esperados

**Mês 1-3:**
- Equipe capacitada e confiante
- Primeiras vendas de seguros
- Aumento de 10-15% em comissões

**Mês 4-6:**
- Processo de venda natural
- Aumento de 20-30% em comissões
- Cross-sell consistente

**Mês 7-12:**
- Venda de seguros incorporada ao processo
- Aumento de 30%+ em comissões
- Diferencial competitivo claro

---

## Investimento

**Para parceiros L8 Capital:** GRATUITO
**Para não-parceiros:** Consulte condições

**ROI típico:** Primeira venda de seguro já paga o "investimento" (que é zero para parceiros)

---

## Próximos Passos

**Imobiliárias ${locationPrep}:**

[Agendar treinamento gratuito](/contato) para sua equipe.

**Sem compromisso. Capacitação real para sua equipe.**

---

*Última atualização: Janeiro 2026*
`,
    }
  },
}

export const treinamentoOperacionalTemplate: ServiceTemplate = {
  id: 'treinamento-operacional',
  slug: 'treinamento-operacional-imobiliaria',
  title: 'Treinamento Operacional para Imobiliárias',
  category: 'Capacitação',
  baseTags: ['treinamento', 'operacional', 'processos', 'imobiliária'],
  description: 'Treinamento operacional para otimizar processos de imobiliárias',

  generateContent: (location: Location) => {
    const locationContext = getLocationContext(location)
    const locationPrep = getLocationPreposition(location)

    return {
      title: `Treinamento Operacional para Imobiliárias ${location.name} | 2026`,
      description: `Otimize processos operacionais de imobiliárias ${locationPrep}. Reduza erros, ganhe eficiência e libere tempo para vendas.`,
      tags: [
        ...['treinamento', 'operacional', 'processos', 'eficiência'],
        location.slug,
        `treinamento operacional ${location.slug}`,
      ],
      content: `
## TL;DR - Treinamento Operacional ${location.name}

- **Foco:** Otimizar processos e reduzir erros operacionais
- **Público:** Equipe administrativa e operacional de imobiliárias
- **Duração:** Workshop de 6 horas + consultoria mensal
- **Benefício:** Redução de 40% no tempo gasto com retrabalho
- **Investimento:** Gratuito para parceiros L8 Capital

---

## O Problema Operacional ${locationPrep}

**Desafios comuns ${locationContext}:**
- Retrabalho por processos mal documentados
- Erros em repasses (float, proprietários, seguros)
- Falta de padronização entre colaboradores
- Tempo perdido com tarefas que poderiam ser automatizadas

**Impacto:** Menos tempo para vendas, mais custos operacionais, clientes insatisfeitos

---

## O Que Você Aprende

### Módulo 1: Mapeamento de Processos
- Fluxo de locação do início ao fim
- Pontos críticos onde erros acontecem
- Gargalos operacionais
- Oportunidades de automação

### Módulo 2: Gestão Financeira
- Controle de repasses (evitar erros)
- Conciliação bancária simplificada
- Gestão de inadimplência
- Relatórios gerenciais essenciais

### Módulo 3: Ferramentas e Automação
- Integração com sistemas L8
- Automação de repasses
- Dashboards em tempo real
- Alertas automáticos

${location.metadata.realEstateAgencies ? `\n### Realidade ${location.name}\n\nDas ${location.metadata.realEstateAgencies}+ imobiliárias ${locationContext}, poucas têm processos bem documentados. Operação eficiente é vantagem competitiva.\n` : ''}

---

## Metodologia L8 Capital

A L8 Capital oferece treinamento operacional com processos otimizados. O que aprendemos em mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net), aplicamos na sua. Menos retrabalho, mais produtividade.

**1. Diagnóstico Operacional**
- Auditoria dos processos atuais
- Identificação de gargalos
- Priorização de melhorias

**2. Workshop de 6 Horas**
- Processos otimizados documentados
- Treinamento prático com ferramentas
- Implementação assistida

**3. Acompanhamento Mensal**
- Revisão de processos
- Ajustes conforme necessidade
- Suporte técnico contínuo

---

## Resultados Esperados

**Mês 1:**
- Processos documentados
- Equipe treinada
- Primeiras automações implementadas

**Mês 2-3:**
- Redução de 20-30% em retrabalho
- Menos erros em repasses
- Tempo liberado para vendas

**Mês 4-6:**
- Redução de 40%+ em tempo operacional
- Processos rodando no automático
- Equipe focada em crescimento

---

## Investimento

**Para parceiros L8 Capital:** GRATUITO
**Para não-parceiros:** Consulte condições

**ROI:** Tempo economizado = mais vendas

---

## Próximos Passos

**Imobiliárias ${locationPrep}:**

[Solicitar diagnóstico gratuito](/contato) dos seus processos.

**Análise sem compromisso.**

---

*Última atualização: Janeiro 2026*
`,
    }
  },
}

export const vistoriaTemplate: ServiceTemplate = {
  id: 'vistoria-imoveis',
  slug: 'vistoria-imoveis',
  title: 'Vistoria de Imóveis',
  category: 'Capacitação',
  baseTags: ['vistoria', 'laudo', 'imóveis', 'entrada e saída'],
  description: 'Parceria para vistoria profissional de imóveis',

  generateContent: (location: Location) => {
    const locationContext = getLocationContext(location)
    const locationPrep = getLocationPreposition(location)

    return {
      title: `Vistoria de Imóveis ${location.name}: Parceria L8 | 2026`,
      description: `Vistoria profissional de imóveis ${locationContext}. Laudos técnicos, fotos georreferenciadas e parceria sem custo para imobiliárias.`,
      tags: [
        ...['vistoria', 'laudo técnico', 'entrada e saída', 'imóveis'],
        location.slug,
        `vistoria ${location.slug}`,
      ],
      content: `
## TL;DR - Vistoria de Imóveis ${location.name}

- **Serviço:** Vistoria técnica de entrada e saída
- **Parceria:** Sem custo para imobiliária, inquilino paga
- **Benefício:** Laudo técnico que evita conflitos
- **Diferencial:** Fotos georreferenciadas e App móvel

---

## Por que Vistoria Profissional?

**Problema comum ${locationContext}:**
- Imobiliária faz vistoria "de vista"
- Sem fotos adequadas
- Laudo informal
- Conflito na saída (quem causou o dano?)

**Solução:** Vistoria técnica profissional com laudo que tem validade jurídica

---

## Como Funciona a Parceria

**Modelo de Negócio:**
1. Imobiliária indica vistoria para o inquilino
2. Inquilino contrata o serviço diretamente
3. Parceiro L8 faz a vistoria
4. Imobiliária recebe comissão
5. Todos ganham (especialmente o proprietário, que fica protegido)

${location.metadata.realEstateAgencies ? `\n### Oportunidade ${location.name}\n\n${location.metadata.realEstateAgencies}+ imobiliárias ${locationContext}. Poucas oferecem vistoria técnica. É um diferencial valorizado por proprietários.\n` : ''}

---

## O Que Está Incluso

**Vistoria de Entrada:**
- Inspeção completa do imóvel
- 100+ fotos georreferenciadas
- Laudo técnico detalhado
- Descrição de todo o estado do imóvel
- Assinatura de proprietário e inquilino

**Vistoria de Saída:**
- Comparativo com vistoria de entrada
- Identificação de danos
- Quantificação de custos de reparo
- Laudo para retenção de caução (se necessário)

**Tecnologia:**
- App móvel para vistoriador
- Fotos com localização GPS
- Upload automático para nuvem
- Acesso online 24/7

---

## Benefícios para Imobiliária

**1. Receita Adicional**
- Comissão por vistoria indicada
- Zero trabalho operacional

**2. Menos Conflitos**
- Laudo técnico elimina "achismos"
- Proprietário se sente seguro
- Inquilino não pode contestar danos comprovados

**3. Profissionalização**
- Imagem mais profissional
- Diferencial vs concorrentes
- Valor agregado real

---

## Investimento

**Para imobiliária:** R$ 0 (zero)
**Para inquilino:** Valor varia conforme o tamanho do imóvel
**Comissão imobiliária:** Consulte condições

---

## Próximos Passos

**Imobiliárias ${locationPrep}:**

[Conhecer parceiros de vistoria](/contato) na sua região.

**Parceria sem custo. Comissão por indicação.**

---

*Última atualização: Janeiro 2026*
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
  rentabilizacaoFloatTemplate,
  fundoReservaTemplate,
  treinamentoComercialTemplate,
  treinamentoOperacionalTemplate,
  vistoriaTemplate,
]

export function getTemplateById(id: string): ServiceTemplate | undefined {
  return allServiceTemplates.find((template) => template.id === id)
}

export function getTemplatesByCategory(
  category: ServiceTemplate['category']
): ServiceTemplate[] {
  return allServiceTemplates.filter((template) => template.category === category)
}
