'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'highlight'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-primary-100 text-primary-900 dark:bg-primary-800/50 dark:text-primary-100',
      success: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-200',
      warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-200',
      info: 'bg-secondary-100 text-secondary-700 dark:bg-secondary-800/50 dark:text-secondary-200',
      highlight: 'bg-accent-900 text-accent-100 dark:bg-accent-800 dark:text-accent-100',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
