// Sistema de Progressive Publishing - SEO 2026 Best Practices
// Publica 3-4 posts por semana para evitar Google penalties

import type { BlogPost } from './posts'

/**
 * Configuração de publicação progressiva
 *
 * IMPORTANTE: Google penaliza publicação em massa de conteúdo programático
 * Estratégia: 3-4 posts/semana, priorizando alto valor primeiro
 */

export interface PublishingConfig {
  enabled: boolean // Set to false to publish all posts immediately
  startDate: string // Format: YYYY-MM-DD
  postsPerWeek: number // Recommended: 3-4
}

export const PUBLISHING_CONFIG: PublishingConfig = {
  enabled: true, // Set to false in development to see all posts
  startDate: '2026-01-20', // Start publishing from this date
  postsPerWeek: 4, // 4 posts per week = safe for Google
}

/**
 * Prioridade de publicação baseada em valor SEO/LMO
 *
 * Estratégia:
 * 1. Posts nacionais (fundação, alta autoridade)
 * 2. SP Capital (volume de busca alto)
 * 3. Bairros premium (alta conversão, baixa concorrência)
 * 4. Zonas (médio volume)
 * 5. Outros bairros (long-tail)
 */
export const PUBLISHING_PRIORITY = {
  // Tier 1: Alta prioridade (Semana 1-3)
  tier1: [
    'country', // Posts nacionais - fundação de autoridade
  ],

  // Tier 2: Média-alta prioridade (Semana 4-6)
  tier2: [
    'city', // São Paulo capital - volume alto
  ],

  // Tier 3: Média prioridade (Semana 7-20)
  tier3PremiumNeighborhoods: [
    'pinheiros', 'moema', 'itaim-bibi', 'vila-mariana',
    'jardins', 'brooklin', 'vila-olimpia',
  ],

  // Tier 4: Média-baixa prioridade (Semana 21-30)
  tier4Zones: [
    'zone', // Todas as zonas
  ],

  // Tier 5: Baixa prioridade (Semana 31-50)
  tier5OtherNeighborhoods: [
    // Outros bairros não premium
  ],
}

/**
 * Calcula a data de publicação de um post baseado em prioridade
 */
export function getPublishDate(
  post: BlogPost,
  metadata?: { locationType: string; locationSlug: string }
): Date {
  if (!PUBLISHING_CONFIG.enabled) {
    // Se publishing está desabilitado, publicar tudo imediatamente
    return new Date('2026-01-01')
  }

  const startDate = new Date(PUBLISHING_CONFIG.startDate)
  const { postsPerWeek } = PUBLISHING_CONFIG
  const daysPerPost = 7 / postsPerWeek // ~1.75 dias por post (4 posts/semana)

  // Posts manuais são publicados imediatamente
  if (!metadata) {
    return new Date('2026-01-01')
  }

  let weekOffset = 0

  // Tier 1: Posts nacionais (5 posts = 1-2 semanas)
  if (metadata.locationType === 'country') {
    weekOffset = 0 // Semana 1-2
  }

  // Tier 2: SP Capital (8 posts = 2 semanas)
  else if (metadata.locationType === 'city') {
    weekOffset = 2 // Semana 3-4
  }

  // Tier 3: Bairros premium (7 bairros × 8 serviços = 56 posts = 14 semanas)
  else if (
    metadata.locationType === 'neighborhood' &&
    PUBLISHING_PRIORITY.tier3PremiumNeighborhoods.includes(metadata.locationSlug)
  ) {
    weekOffset = 4 // Semana 5-18
  }

  // Tier 4: Zonas (40 posts = 10 semanas)
  else if (metadata.locationType === 'zone') {
    weekOffset = 18 // Semana 19-28
  }

  // Tier 5: Outros bairros (64 posts = 16 semanas)
  else if (metadata.locationType === 'neighborhood') {
    weekOffset = 28 // Semana 29-44
  }

  // Calcular data baseado no offset
  const daysOffset = weekOffset * 7
  const publishDate = new Date(startDate)
  publishDate.setDate(publishDate.getDate() + daysOffset)

  return publishDate
}

/**
 * Verifica se um post deve estar visível baseado na data atual
 */
export function isPostPublished(
  post: BlogPost,
  metadata?: { locationType: string; locationSlug: string }
): boolean {
  if (!PUBLISHING_CONFIG.enabled) {
    return true // Mostrar todos os posts se publishing está desabilitado
  }

  const publishDate = getPublishDate(post, metadata)
  const now = new Date()

  return now >= publishDate
}

/**
 * Filtra posts para mostrar apenas os já publicados
 */
export function filterPublishedPosts(
  posts: BlogPost[],
  includeMetadata = true
): BlogPost[] {
  if (!PUBLISHING_CONFIG.enabled) {
    return posts
  }

  return posts.filter((post) => {
    // Posts com metadata (gerados) verificam data de publicação
    const metadata = (post as any).metadata
    return isPostPublished(post, metadata)
  })
}

/**
 * Retorna estatísticas de publicação
 */
export function getPublishingStats(posts: BlogPost[]): {
  total: number
  published: number
  scheduled: number
  nextPublishDate: Date | null
} {
  const published = filterPublishedPosts(posts)
  const scheduled = posts.length - published.length

  // Encontrar próxima data de publicação
  let nextPublishDate: Date | null = null
  const now = new Date()

  for (const post of posts) {
    const metadata = (post as any).metadata
    if (metadata) {
      const publishDate = getPublishDate(post, metadata)
      if (publishDate > now) {
        if (!nextPublishDate || publishDate < nextPublishDate) {
          nextPublishDate = publishDate
        }
      }
    }
  }

  return {
    total: posts.length,
    published: published.length,
    scheduled,
    nextPublishDate,
  }
}

/**
 * Gera cronograma completo de publicação
 */
export function generatePublishingSchedule(posts: BlogPost[]): {
  week: number
  date: string
  posts: Array<{ title: string; slug: string; type: string }>
}[] {
  const schedule: Map<number, any> = new Map()

  for (const post of posts) {
    const metadata = (post as any).metadata
    if (!metadata) continue // Skip manual posts

    const publishDate = getPublishDate(post, metadata)
    const startDate = new Date(PUBLISHING_CONFIG.startDate)
    const weekNumber = Math.floor(
      (publishDate.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000)
    ) + 1

    if (!schedule.has(weekNumber)) {
      schedule.set(weekNumber, {
        week: weekNumber,
        date: publishDate.toISOString().split('T')[0],
        posts: [],
      })
    }

    schedule.get(weekNumber).posts.push({
      title: post.title,
      slug: post.slug,
      type: metadata.locationType,
    })
  }

  return Array.from(schedule.values()).sort((a, b) => a.week - b.week)
}
