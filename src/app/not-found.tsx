import Link from 'next/link'
import { Button } from '@/components/ui'
import { Home, BookOpen } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <span className="text-8xl font-bold text-gray-200 dark:text-gray-700">404</span>
        </div>
        <h1 className="heading-2 text-gray-900 dark:text-white mb-4">
          Ops! Página não encontrada.
        </h1>
        <p className="body-large text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button leftIcon={<Home className="h-4 w-4" />}>Voltar para a home</Button>
          </Link>
          <Link href="/blog">
            <Button variant="secondary" leftIcon={<BookOpen className="h-4 w-4" />}>
              Ir para o blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
