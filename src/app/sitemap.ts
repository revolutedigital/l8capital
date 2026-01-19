import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog/posts'
import { SITE_CONFIG } from '@/lib/constants'
import type { GeneratedBlogPost } from '@/lib/blog/generate-posts'

/**
 * Determina a prioridade do post no sitemap baseado no tipo de localização
 * Nacional > Cidade > Zona > Bairro
 */
function getPostPriority(post: GeneratedBlogPost): number {
  // Posts manuais (sem metadata) têm prioridade alta
  if (!post.metadata) {
    return 0.9
  }

  // Posts gerados programaticamente têm prioridade baseada no tipo de localização
  const priorityMap = {
    country: 0.9, // Posts nacionais - maior prioridade
    state: 0.85, // Posts estaduais
    city: 0.8, // Posts de cidade (São Paulo)
    zone: 0.75, // Posts de zona (Zona Sul, etc)
    neighborhood: 0.7, // Posts de bairro (Pinheiros, etc)
  }

  return priorityMap[post.metadata.locationType] || 0.7
}

/**
 * Determina a frequência de atualização baseada no tipo de localização
 */
function getChangeFrequency(
  post: GeneratedBlogPost
): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (!post.metadata) {
    return 'monthly' // Posts manuais atualizam mensalmente
  }

  const frequencyMap = {
    country: 'weekly' as const, // Posts nacionais atualizam semanalmente
    state: 'weekly' as const,
    city: 'weekly' as const, // Posts de cidade atualizam semanalmente
    zone: 'monthly' as const, // Posts de zona atualizam mensalmente
    neighborhood: 'monthly' as const, // Posts de bairro atualizam mensalmente
  }

  return frequencyMap[post.metadata.locationType] || 'monthly'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const baseUrl = SITE_CONFIG.url

  const blogPostsUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: getChangeFrequency(post as GeneratedBlogPost),
    priority: getPostPriority(post as GeneratedBlogPost),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPostsUrls,
  ]
}
