'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle('dark', stored === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className={cn(
          'p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
          'hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
          'min-w-[44px] min-h-[44px] flex items-center justify-center',
          className
        )}
        aria-label="Alternar tema"
      >
        <Sun className="h-5 w-5 md:h-5 md:w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
        'hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
        'min-w-[44px] min-h-[44px] flex items-center justify-center',
        className
      )}
      aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
      title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 md:h-5 md:w-5" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5 md:h-5 md:w-5" aria-hidden="true" />
      )}
    </button>
  )
}
