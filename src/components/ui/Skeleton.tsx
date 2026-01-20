'use client'

import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
  style?: React.CSSProperties
}

export function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  style,
}: SkeletonProps) {
  const variants = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-xl',
  }

  const animations = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: '',
  }

  return (
    <div
      className={cn(
        'bg-primary-200 dark:bg-primary-700',
        variants[variant],
        animations[animation],
        className
      )}
      style={{
        width: width,
        height: height || (variant === 'text' ? '1em' : undefined),
        ...style,
      }}
      aria-hidden="true"
    />
  )
}

// Card skeleton for loading states
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('bg-white dark:bg-primary-800 rounded-2xl p-6 border border-secondary-200 dark:border-primary-700', className)}>
      <Skeleton variant="circular" width={48} height={48} className="mb-4" />
      <Skeleton variant="text" className="h-6 w-3/4 mb-2" />
      <Skeleton variant="text" className="h-4 w-full mb-1" />
      <Skeleton variant="text" className="h-4 w-5/6" />
    </div>
  )
}

// Text block skeleton
export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={cn('h-4', i === lines - 1 ? 'w-3/4' : 'w-full')}
        />
      ))}
    </div>
  )
}

// Button skeleton
export function SkeletonButton({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = {
    sm: 'h-10 w-24',
    md: 'h-12 w-32',
    lg: 'h-14 w-40',
  }

  return <Skeleton variant="rounded" className={cn(sizes[size], className)} />
}

// Image skeleton
export function SkeletonImage({ className, aspectRatio = '16/9' }: { className?: string; aspectRatio?: string }) {
  return (
    <Skeleton
      variant="rounded"
      className={cn('w-full', className)}
      style={{ aspectRatio }}
    />
  )
}
