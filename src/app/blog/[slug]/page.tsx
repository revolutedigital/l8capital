import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog/posts'
import { Badge, Button, Card } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'
import { Clock, Calendar, ArrowLeft, ArrowRight, User } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Artigo não encontrado',
    }
  }

  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      url: postUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    keywords: post.tags,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${SITE_CONFIG.url}/opengraph-image`,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/icon`,
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
    wordCount: post.content.split(/\s+/).length,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="pt-20">
        {/* Header */}
        <header className="bg-gray-50 dark:bg-gray-800/50 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao Blog
              </Link>

              <div className="mb-6">
                <Badge>{post.category}</Badge>
              </div>

              <h1 className="heading-1 text-gray-900 dark:text-white mb-6">{post.title}</h1>

              <p className="body-large text-gray-600 dark:text-gray-300 mb-8">{post.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author.name}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min de leitura
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg dark:prose-invert prose-headings:font-display prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author Box */}
        <div className="py-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Sobre a {SITE_CONFIG.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A L8 Capital é uma plataforma digital de soluções financeiras para imobiliárias.
                  Com tecnologia própria e modelo validado em +400 imobiliárias, ajudamos a aumentar
                  receita, reduzir custos e eliminar carga operacional.
                </p>
                <Link href="/#contato">
                  <Button size="sm">Agendar conversa gratuita</Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="py-12 border-t border-gray-200 dark:border-gray-700">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {prevPost && (
                  <Link href={`/blog/${prevPost.slug}`} className="group">
                    <Card hoverable className="h-full">
                      <span className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                        <ArrowLeft className="h-4 w-4" />
                        Artigo anterior
                      </span>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                        {prevPost.title}
                      </h4>
                    </Card>
                  </Link>
                )}
                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`} className="group md:ml-auto">
                    <Card hoverable className="h-full text-right">
                      <span className="text-sm text-gray-500 flex items-center justify-end gap-1 mb-2">
                        Próximo artigo
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                        {nextPost.title}
                      </h4>
                    </Card>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

function formatContent(content: string): string {
  // Remover seção TL;DR
  let processedContent = content.replace(/^## TL;DR[\s\S]*?(?=^---$|^## )/gm, '')

  // Converter markdown básico para HTML
  // Em produção, usar um parser como remark/rehype
  return processedContent
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^> \*\*(.*?)\*\* (.*$)/gim, '<blockquote><strong>$1</strong> $2</blockquote>')
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^---$/gim, '<hr>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter((c) => c.trim())
      return `<tr>${cells.map((c) => `<td>${c.trim()}</td>`).join('')}</tr>`
    })
}
