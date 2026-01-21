import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getFeaturedPosts, getAllCategories } from '@/lib/blog/posts'
import { Card, Badge, Button } from '@/components/ui'
import { PostList } from '@/components/blog'
import { Clock, ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Conteúdo para Imobiliárias',
  description:
    'Artigos sobre seguros, redução de custos, gestão financeira e tendências do mercado imobiliário. Conteúdo prático para donos e gestores de imobiliárias.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const categories = getAllCategories()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="mb-4">Blog L8 Capital</Badge>
            <h1 className="heading-1 text-gray-900 dark:text-white mb-4">
              Conteúdo prático para sua imobiliária crescer
            </h1>
            <p className="body-large text-gray-700 dark:text-gray-300">
              Artigos sobre seguros, redução de custos, gestão financeira e tendências do mercado
              imobiliário. Escrito por quem entende do assunto.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <h2 className="heading-3 text-gray-900 dark:text-white mb-8">Artigos em Destaque</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card hoverable className="h-full">
                    <Badge variant="highlight" className="mb-4">
                      {post.category}
                    </Badge>
                    <h3 className="heading-4 text-gray-900 dark:text-white mb-3 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime} min de leitura
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 border-y border-gray-200 dark:border-gray-700">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-700 dark:text-gray-400 font-medium">Categorias:</span>
            <Link href="/blog">
              <Badge variant="default">Todos</Badge>
            </Link>
            {categories.map((category) => (
              <Link key={category} href={`/blog?categoria=${category.toLowerCase()}`}>
                <Badge>{category}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-3 text-gray-900 dark:text-white mb-8">Todos os Artigos</h2>
          <PostList posts={posts} postsPerPage={30} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        {/* Background - Premium Black */}
        <div className="absolute inset-0 bg-primary-900" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url("/images/logos/bg_numeros_01.webp")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="container-custom text-center relative z-10">
          <h2 className="heading-2 text-white mb-4">
            Quer receber conteúdo exclusivo?
          </h2>
          <p className="text-secondary-300 text-lg mb-8 max-w-2xl mx-auto">
            Agende uma conversa e descubra como a L8 pode ajudar sua imobiliária a crescer.
          </p>
          <Link href="/#contato">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Agendar Reunião Gratuita
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
