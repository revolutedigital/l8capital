// Schemas JSON-LD regionais para SEO programático
// Baseado em melhores práticas de Local SEO 2026

import type { Location } from './location-data'
import type { GeneratedBlogPost } from './generate-posts'
import { SITE_CONFIG } from '@/lib/constants'

// ============================================================================
// SCHEMA: LOCAL BUSINESS (Regional)
// ============================================================================

export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  telephone?: string
  areaServed: {
    '@type': string
    name: string
    containedInPlace?: string
  }
  geo?: {
    '@type': string
    latitude: number
    longitude: number
  }
  address?: {
    '@type': string
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  priceRange?: string
}

/**
 * Gera LocalBusiness schema específico para uma localização
 */
export function generateLocalBusinessSchema(location: Location): LocalBusinessSchema {
  const schema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE_CONFIG.name} - ${location.name}`,
    description: `Soluções financeiras para imobiliárias ${location.type === 'neighborhood' ? 'no bairro' : location.type === 'zone' ? 'na' : 'em'} ${location.name}`,
    url: SITE_CONFIG.url,
    areaServed: {
      '@type': getAreaServedType(location.type),
      name: location.name,
      containedInPlace: location.parent
        ? `${location.state}, Brasil`
        : location.state === 'Nacional'
          ? undefined
          : `${location.state}, Brasil`,
    },
    priceRange: '$$',
  }

  // Adicionar coordenadas geográficas se disponíveis
  if (location.geo) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    }
  }

  // Adicionar endereço para localizações específicas
  if (location.type === 'city' || location.type === 'zone' || location.type === 'neighborhood') {
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: location.type === 'city' ? location.name : 'São Paulo',
      addressRegion: location.state,
      addressCountry: 'BR',
    }
  }

  // Adicionar telefone
  if (SITE_CONFIG.whatsapp && SITE_CONFIG.whatsapp !== '5511912345678') {
    schema.telephone = `+55${SITE_CONFIG.whatsapp}`
  }

  return schema
}

function getAreaServedType(
  locationType: Location['type']
): 'Country' | 'State' | 'City' | 'Place' {
  const typeMap: Record<Location['type'], 'Country' | 'State' | 'City' | 'Place'> = {
    country: 'Country',
    state: 'State',
    city: 'City',
    zone: 'Place',
    neighborhood: 'Place',
  }
  return typeMap[locationType] || 'Place'
}

// ============================================================================
// SCHEMA: ARTICLE (Blog Post com Location)
// ============================================================================

export interface ArticleSchema {
  '@context': string
  '@type': string
  headline: string
  description: string
  image?: string
  author: {
    '@type': string
    name: string
    jobTitle?: string
  }
  publisher: {
    '@type': string
    name: string
    logo: {
      '@type': string
      url: string
    }
  }
  datePublished: string
  dateModified: string
  mainEntityOfPage: {
    '@type': string
    '@id': string
  }
  keywords?: string
  articleSection?: string
  wordCount?: number
  about?: {
    '@type': string
    name: string
    areaServed?: string
  }
}

/**
 * Gera Article schema para post de blog com informação de localização
 */
export function generateArticleSchema(
  post: GeneratedBlogPost,
  location?: Location
): ArticleSchema {
  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`

  const schema: ArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${SITE_CONFIG.url}/og-image.png`, // TODO: Usar OG image dinâmica
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  }

  // Adicionar word count se disponível
  if (post.metadata?.wordCount) {
    schema.wordCount = post.metadata.wordCount
  }

  // Adicionar informação sobre o serviço financeiro com localização
  if (post.metadata && location) {
    schema.about = {
      '@type': 'FinancialProduct',
      name: post.metadata.service,
      areaServed: location.name,
    }
  }

  return schema
}

// ============================================================================
// SCHEMA: BREADCRUMB LIST (Com Location)
// ============================================================================

export interface BreadcrumbListSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item?: string
  }>
}

/**
 * Gera BreadcrumbList schema para navegação com localização
 */
export function generateBreadcrumbSchema(
  post: GeneratedBlogPost,
  location?: Location
): BreadcrumbListSchema {
  const items: Array<{
    '@type': string
    position: number
    name: string
    item?: string
  }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_CONFIG.url,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: `${SITE_CONFIG.url}/blog`,
    },
  ]

  let position = 3

  // Se houver localização, adicionar hierarquia de localização
  if (location) {
    // Adicionar hierarquia de location (ex: SP > Zona Sul > Pinheiros)
    const locationHierarchy = getLocationHierarchy(location)
    for (const loc of locationHierarchy) {
      items.push({
        '@type': 'ListItem',
        position: position++,
        name: loc.name,
        // Não incluir URL para localizações intermediárias
      })
    }
  }

  // Adicionar o post atual (sem link pois é a página atual)
  items.push({
    '@type': 'ListItem',
    position: position,
    name: post.title,
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

/**
 * Obtém hierarquia de localização (ex: [SP Estado, SP Cidade, Zona Sul])
 */
function getLocationHierarchy(location: Location): Location[] {
  // Simplificado - em produção, seria melhor ter referência completa
  return [location]
}

// ============================================================================
// SCHEMA: FAQ PAGE (Extracted from Content)
// ============================================================================

export interface FAQSchema {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

/**
 * Extrai perguntas FAQ do conteúdo do post e gera schema
 */
export function extractAndGenerateFAQSchema(content: string): FAQSchema | null {
  // Regex para identificar seção FAQ no markdown
  const faqRegex = /##\s*(?:FAQ|Perguntas Frequentes)[^\n]*\n([\s\S]*?)(?=\n##|\n---|$)/i
  const faqMatch = content.match(faqRegex)

  if (!faqMatch) {
    return null
  }

  const faqContent = faqMatch[1]

  // Extrair perguntas e respostas (formato: ### Pergunta? \n Resposta)
  const qaRegex = /###\s*([^\n]+)\n\n([^\n#]+)/g
  const questions: Array<{
    '@type': string
    name: string
    acceptedAnswer: { '@type': string; text: string }
  }> = []

  let match
  while ((match = qaRegex.exec(faqContent)) !== null) {
    questions.push({
      '@type': 'Question',
      name: match[1].trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: match[2].trim(),
      },
    })
  }

  if (questions.length === 0) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions,
  }
}

// ============================================================================
// HELPER: Gerar todos os schemas de uma vez
// ============================================================================

export interface AllSchemas {
  localBusiness?: LocalBusinessSchema
  article: ArticleSchema
  breadcrumb: BreadcrumbListSchema
  faq?: FAQSchema
}

/**
 * Gera todos os schemas relevantes para um post regional
 */
export function generateAllPostSchemas(
  post: GeneratedBlogPost,
  location?: Location
): AllSchemas {
  const schemas: AllSchemas = {
    article: generateArticleSchema(post, location),
    breadcrumb: generateBreadcrumbSchema(post, location),
  }

  // Adicionar LocalBusiness schema se houver localização
  if (location && location.type !== 'country') {
    schemas.localBusiness = generateLocalBusinessSchema(location)
  }

  // Extrair e adicionar FAQ schema se houver
  const faqSchema = extractAndGenerateFAQSchema(post.content)
  if (faqSchema) {
    schemas.faq = faqSchema
  }

  return schemas
}

// ============================================================================
// COMPONENT HELPER: Render schemas as script tags
// ============================================================================

export interface SchemaScriptProps {
  schemas: AllSchemas
}

/**
 * Renderiza os schemas como tags script para inclusão no HTML
 * Uso: <SchemaScripts schemas={generateAllPostSchemas(post, location)} />
 */
export function renderSchemaScripts(schemas: AllSchemas): string {
  let html = ''

  if (schemas.localBusiness) {
    html += `<script type="application/ld+json">${JSON.stringify(schemas.localBusiness)}</script>\n`
  }

  html += `<script type="application/ld+json">${JSON.stringify(schemas.article)}</script>\n`

  html += `<script type="application/ld+json">${JSON.stringify(schemas.breadcrumb)}</script>\n`

  if (schemas.faq) {
    html += `<script type="application/ld+json">${JSON.stringify(schemas.faq)}</script>\n`
  }

  return html
}
