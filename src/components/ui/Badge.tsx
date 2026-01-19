'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'highlight'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-200',
      success: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-200',
      warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-200',
      info: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200',
      highlight: 'bg-accent-100 text-accent-700 dark:bg-accent-900/50 dark:text-accent-200',
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
