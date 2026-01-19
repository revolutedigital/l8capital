'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'highlight' | 'stat'
  hoverable?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverable = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl'

    const variants = {
      default: `
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        p-6 shadow-sm
        ${hoverable ? 'transition-all duration-300 hover:border-primary-300 hover:shadow-lg hover:-translate-y-1' : ''}
      `,
      highlight: `
        bg-gradient-to-br from-primary-600 to-primary-800
        text-white p-8 rounded-2xl
      `,
      stat: `
        bg-white dark:bg-gray-800
        p-6 text-center
      `,
    }

    return (
      <div ref={ref} className={cn(baseStyles, variants[variant], className)} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardIcon = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 mb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)

CardIcon.displayName = 'CardIcon'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-display text-xl font-semibold mb-2 text-gray-900 dark:text-white', className)}
      {...props}
    >
      {children}
    </h3>
  )
)

CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('text-gray-700 dark:text-gray-300 leading-relaxed', className)} {...props}>
      {children}
    </p>
  )
)

CardDescription.displayName = 'CardDescription'

const StatNumber = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('block font-display text-4xl font-bold text-primary-600 mb-1 tabular-nums', className)}
      {...props}
    >
      {children}
    </span>
  )
)

StatNumber.displayName = 'StatNumber'

const StatLabel = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => (
    <span ref={ref} className={cn('text-gray-700 dark:text-gray-400 text-sm', className)} {...props}>
      {children}
    </span>
  )
)

StatLabel.displayName = 'StatLabel'

export { Card, CardIcon, CardTitle, CardDescription, StatNumber, StatLabel }
