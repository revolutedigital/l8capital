'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, Badge, Button } from '@/components/ui'
import { Clock, ArrowRight } from 'lucide-react'

interface Post {
  slug: string
  title: string
  description: string
  category: string
  readingTime: number
}

interface PostListProps {
  posts: Post[]
  postsPerPage?: number
}

export function PostList({ posts, postsPerPage = 30 }: PostListProps) {
  const [visibleCount, setVisibleCount] = useState(postsPerPage)

  const visiblePosts = posts.slice(0, visibleCount)
  const hasMore = visibleCount < posts.length

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + postsPerPage, posts.length))
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card hoverable className="h-full flex flex-col">
              <Badge className="mb-4 w-fit">{post.category}</Badge>
              <h3 className="heading-4 text-gray-900 dark:text-white mb-3 hover:text-primary-600 transition-colors flex-grow">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min
                </span>
                <span className="text-primary-600 flex items-center gap-1">
                  Ler artigo <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" onClick={loadMore}>
            Carregar mais
          </Button>
        </div>
      )}
    </>
  )
}
