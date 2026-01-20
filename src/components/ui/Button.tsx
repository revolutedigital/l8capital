'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-semibold rounded-xl
      transition-all duration-300 ease-out
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50
    `

    const variants = {
      primary: `
        bg-primary-900 text-white
        shadow-lg shadow-primary-900/25
        hover:bg-primary-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/30
        active:bg-primary-950 active:translate-y-0 active:shadow-md
        focus-visible:ring-accent-500
      `,
      accent: `
        bg-gradient-to-r from-accent-400 to-accent-500 text-primary-900
        shadow-lg shadow-accent-500/35
        hover:from-accent-300 hover:to-accent-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/45
        active:from-accent-500 active:to-accent-600 active:translate-y-0
        focus-visible:ring-accent-600
        font-bold
      `,
      secondary: `
        bg-transparent text-primary-900 dark:text-white
        border-2 border-primary-900 dark:border-white
        hover:bg-primary-50 dark:hover:bg-white/10 hover:border-primary-700 hover:-translate-y-0.5
        active:bg-primary-100 dark:active:bg-white/20
        focus-visible:ring-accent-500
      `,
      ghost: `
        bg-transparent text-primary-900 dark:text-white
        hover:bg-primary-50 dark:hover:bg-white/10
        focus-visible:ring-accent-500
      `,
      whatsapp: `
        bg-[#25D366] text-white
        shadow-lg shadow-[#25D366]/30
        hover:bg-[#20BD5A] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/40
        active:bg-[#1DA851] active:translate-y-0
        focus-visible:ring-[#25D366]
      `,
    }

    const sizes = {
      sm: 'h-10 px-5 text-sm',
      md: 'h-12 px-7 text-base',
      lg: 'h-14 px-9 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Aguarde...</span>
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
