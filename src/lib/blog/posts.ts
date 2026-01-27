export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  publishedAt: string
  updatedAt: string
  author: {
    name: string
    role: string
  }
  category: string
  tags: string[]
  readingTime: number
  featured?: boolean
}

// Posts de exemplo - Em produção, usar CMS como Sanity
export const blogPosts: BlogPost[] = [
  {
    slug: 'seguro-fianca-locaticia-guia-completo',
    title: 'Seguro Fiança Locatícia: Guia Completo 2026',
    description:
      'Tudo que você precisa saber sobre seguro fiança locatícia: como funciona, quanto custa, vantagens para imobiliárias e inquilinos.',
    content: `
## O que é Seguro Fiança Locatícia?

> **Definição:** Seguro fiança locatícia é uma modalidade de garantia de aluguel onde uma seguradora assume a responsabilidade de pagar ao proprietário em caso de inadimplência do inquilino.

O seguro fiança funciona como um intermediário financeiro: o inquilino paga um prêmio à seguradora, e em troca, a seguradora garante ao proprietário que ele receberá os valores devidos mesmo se o inquilino não pagar.

Este modelo tem crescido significativamente no Brasil porque resolve dois problemas principais:
1. A dificuldade do inquilino em encontrar um fiador
2. O risco do proprietário em não receber o aluguel

---

## Quanto custa o Seguro Fiança?

| Perfil do Inquilino | Custo Médio Anual |
|---------------------|-------------------|
| CLT com renda estável | 1 a 1,5 aluguéis |
| Autônomo | 1,5 a 2 aluguéis |
| Empresa (PJ) | 1 a 1,5 aluguéis |

O valor do prêmio depende principalmente de:
- Valor do aluguel
- Perfil de crédito do inquilino
- Tipo de imóvel (residencial ou comercial)
- Coberturas adicionais escolhidas

---

## Vantagens para Imobiliárias

**Lista de benefícios:**
1. **Receita adicional** - Comissão sobre cada apólice vendida
2. **Menos inadimplência** - Seguradora assume o risco
3. **Processo mais rápido** - Aprovação em até 72h
4. **Carteira mais saudável** - Inquilinos pré-aprovados

---

## Como a L8 Capital pode ajudar

A L8 Capital é a parceira estratégica da sua imobiliária em São Paulo. Utilizamos tecnologia própria e o mesmo modelo já validado por mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net). Com +20 anos de experiência no mercado de seguros e um time humano especializado, atuamos para aumentar sua receita, reduzir custos e eliminar o operacional que trava sua equipe.

Na L8, oferecemos:
- Taxas competitivas negociadas em volume
- Aprovação em até 72 horas
- Comissão recorrente enquanto o contrato estiver ativo
- Gestão automatizada das apólices
- Tecnologia própria que reduz sua carga operacional

**Próximo passo:** [Agendar uma conversa gratuita](/#contato) para entender como aumentar sua receita com seguros.

---

## Perguntas Frequentes

### O inquilino recebe o valor de volta se não usar o seguro?
Não. O seguro fiança funciona como qualquer seguro: você paga pela proteção, não como investimento. Se não houver sinistro, o valor não é devolvido.

### Quanto tempo demora a aprovação?
Em média, 24 a 72 horas. Com a L8, trabalhamos para acelerar esse processo ao máximo.

### O seguro cobre danos ao imóvel?
Sim, a maioria das apólices inclui cobertura para danos ao imóvel até determinado limite. Verifique as condições específicas de cada seguradora.
    `,
    publishedAt: '2025-01-10',
    updatedAt: '2026-01-21',
    author: {
      name: 'Equipe L8',
      role: 'Especialistas em Seguros',
    },
    category: 'Seguros',
    tags: ['seguro fiança', 'garantia locatícia', 'aluguel', 'imobiliária'],
    readingTime: 8,
    featured: true,
  },
  {
    slug: 'como-reduzir-taxa-boleto-imobiliaria',
    title: 'Como Reduzir Taxa de Boleto na Imobiliária: Guia Prático',
    description:
      'Descubra como imobiliárias estão reduzindo significativamente os custos com boletos através de negociação em volume e parceiros especializados.',
    content: `
## Por que os boletos custam tanto?

> **Definição:** A taxa de boleto é o valor cobrado pelo banco ou processador para emitir e processar cada boleto bancário.

Bancos tradicionais cobram taxas elevadas porque:
1. Negociam individualmente com cada empresa
2. Não oferecem desconto por volume
3. Incluem serviços que você pode não precisar

---

## Como reduzir a taxa de boleto

**Estratégias que funcionam:**

1. **Negociação em grupo** - Junte-se a outras imobiliárias
2. **Processadores alternativos** - Não fique preso ao seu banco
3. **Volume consolidado** - Quanto mais boletos, melhor a taxa
4. **Parceiros especializados** - Use quem já tem poder de negociação

---

## O modelo L8 Capital

A L8 Capital é a parceira estratégica da sua imobiliária em São Paulo. Utilizamos tecnologia própria e o mesmo modelo já validado por mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net). Esse volume consolidado nos permite negociar taxas muito mais competitivas do que você conseguiria sozinho.

A economia pode ser instantânea e vai depender da sua volumetria. Com +20 anos de experiência no mercado de seguros e um time humano especializado, atuamos para reduzir custos e eliminar o operacional que trava sua equipe. Sem mensalidade.

**Próximo passo:** [Fale conosco](/#contato) para calcular sua economia potencial.
    `,
    publishedAt: '2025-01-08',
    updatedAt: '2026-01-21',
    author: {
      name: 'Equipe L8',
      role: 'Especialistas Financeiros',
    },
    category: 'Financeiro',
    tags: ['boleto', 'redução de custos', 'economia', 'imobiliária'],
    readingTime: 5,
    featured: true,
  },
  {
    slug: 'seguro-incendio-aluguel-obrigatorio',
    title: 'Seguro Incêndio para Aluguel: É Obrigatório? Guia Completo',
    description:
      'Entenda se o seguro incêndio é obrigatório em contratos de aluguel, quem paga, quanto custa e como a imobiliária pode ganhar com isso.',
    content: `
## O que diz a lei?

> **Lei 8.245/91, Art. 22:** "O locador é obrigado a: VIII - pagar os impostos e taxas, e ainda o prêmio de seguro complementar contra fogo, que incidam ou venham a incidir sobre o imóvel, salvo disposição expressa em contrário no contrato."

Na prática, a maioria dos contratos de locação transfere a responsabilidade do seguro para o inquilino.

---

## Quanto custa o seguro incêndio?

O valor do prêmio do seguro incêndio varia conforme o valor do imóvel, localização e coberturas escolhidas. Geralmente representa uma fração pequena do valor do aluguel anual, tornando-se um investimento acessível tanto para proprietários quanto para inquilinos.

Para saber o valor exato para os imóveis da sua carteira, [fale conosco](/#contato) e faremos uma simulação personalizada.

---

## Oportunidade para imobiliárias

O seguro incêndio pode ser fonte de receita recorrente:
- Comissão sobre cada apólice vendida
- Renovação automática anual
- Gestão simplificada com parceiros certos
- Com a L8, além de proteção, você ganha previsibilidade de receita

---

## Como a L8 Capital pode ajudar

A L8 Capital é a parceira estratégica da sua imobiliária em São Paulo. Utilizamos tecnologia própria e o mesmo modelo já validado por mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net). Com +20 anos de experiência no mercado de seguros e um time humano especializado, não estamos testando algo novo — estamos trazendo para São Paulo algo que já funciona. Sem mensalidade.

**Próximo passo:** [Descubra quanto sua imobiliária pode ganhar](/#contato) com seguros.
    `,
    publishedAt: '2025-01-05',
    updatedAt: '2026-01-21',
    author: {
      name: 'Equipe L8',
      role: 'Especialistas em Seguros',
    },
    category: 'Seguros',
    tags: ['seguro incêndio', 'obrigatório', 'lei do inquilinato', 'aluguel'],
    readingTime: 6,
  },
  {
    slug: 'capitalizacao-vs-caucao-qual-escolher',
    title: 'Capitalização vs Caução: Qual Garantia Escolher?',
    description:
      'Comparativo completo entre capitalização e caução como garantia locatícia. Entenda vantagens, desvantagens e qual é melhor para cada situação.',
    content: `
## O que é Caução?

> **Definição:** Caução é o depósito de até 3 meses de aluguel feito pelo inquilino como garantia, que fica depositado em poupança durante a locação.

---

## O que é Capitalização?

> **Definição:** Capitalização locatícia é um título onde o inquilino aplica um valor que serve como garantia, com possibilidade de sorteio e resgate parcial. É uma alternativa moderna, onde seu inquilino aplica o dinheiro (e ainda pode ser sorteado) e o proprietário tem garantia no contrato.

---

## Qual escolher?

**Escolha Caução se:**
- Inquilino prefere ter o dinheiro rendendo (pouco, mas rende)
- Contrato de curta duração
- Valor do aluguel é baixo

**Escolha Capitalização se:**
- Inquilino não tem os 3 aluguéis de uma vez
- Imobiliária quer gerar comissão
- Inquilino gosta da possibilidade de sorteio

---

## Como a L8 Capital pode ajudar

A L8 Capital oferece todas as modalidades de garantia locatícia: seguro fiança, capitalização e também orientação sobre caução. Utilizamos tecnologia própria e o mesmo modelo já validado por mais de 400 imobiliárias no Brasil através da [plataforma ASF (Alugue sem Fiador)](https://aluguesemfiador.net).

Nosso modelo funciona para todas as imobiliárias, pois a tecnologia própria reduz o operacional e temos um time humano especializado para apoiar você em todo o processo. Com +20 anos de experiência no mercado de seguros, atuamos para aumentar sua receita, reduzir custos e eliminar o operacional. Sem mensalidade.

**Próximo passo:** [Entenda todas as opções de garantia](/#contato) disponíveis para sua imobiliária.
    `,
    publishedAt: '2025-01-03',
    updatedAt: '2026-01-21',
    author: {
      name: 'Equipe L8',
      role: 'Especialistas em Garantias',
    },
    category: 'Seguros',
    tags: ['capitalização', 'caução', 'garantia locatícia', 'comparativo'],
    readingTime: 7,
  },
]

// Importar posts gerados programaticamente (Sprint 2+)
import { generatedPosts } from './posts-generated'
import { filterPublishedPosts } from './publishing-schedule'

// Combinar posts manuais + gerados
const allBlogPosts: BlogPost[] = [...blogPosts, ...generatedPosts]

/**
 * Retorna todos os posts PUBLICADOS (filtrando por progressive publishing)
 *
 * IMPORTANTE: Em produção, apenas posts com data de publicação <= hoje são retornados
 * Para ver todos os posts (dev/preview), configure PUBLISHING_CONFIG.enabled = false
 */
export function getAllPosts(): BlogPost[] {
  const publishedPosts = filterPublishedPosts(allBlogPosts)

  return publishedPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

/**
 * Retorna todos os posts (incluindo não publicados) - uso interno apenas
 */
export function getAllPostsIncludingUnpublished(): BlogPost[] {
  return allBlogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return allBlogPosts.filter((post) => post.featured)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return allBlogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export function getAllCategories(): string[] {
  const categories = allBlogPosts.map((post) => post.category)
  return [...new Set(categories)]
}
