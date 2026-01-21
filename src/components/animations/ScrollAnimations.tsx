'use client'

import { useRef, useState, useEffect, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

// Fast, snappy transitions
const fastTransition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1]
}

// Parallax DISABLED - just renders children
interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, className = '' }: ParallaxProps) {
  return <div className={className}>{children}</div>
}

// Fast FadeIn
interface FadeInOnScrollProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
}

export function FadeInOnScroll({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  once = true,
  threshold = 0.1
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const getOffset = () => {
    switch (direction) {
      case 'up': return { y: 16 }
      case 'down': return { y: -16 }
      case 'left': return { x: 16 }
      case 'right': return { x: -16 }
      default: return {}
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...getOffset() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getOffset() }}
      transition={{ ...fastTransition, delay }}
    >
      {children}
    </motion.div>
  )
}

// Fast Scale
interface ScaleOnScrollProps {
  children: ReactNode
  className?: string
  scaleFrom?: number
  scaleTo?: number
}

export function ScaleOnScroll({
  children,
  className = '',
  scaleFrom = 0.98,
  scaleTo = 1
}: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: scaleFrom }}
      animate={isInView ? { opacity: 1, scale: scaleTo } : { opacity: 0, scale: scaleFrom }}
      transition={fastTransition}
    >
      {children}
    </motion.div>
  )
}

// Simple wrapper
interface HorizontalScrollProps {
  children: ReactNode
  className?: string
}

export function HorizontalScroll({ children, className = '' }: HorizontalScrollProps) {
  return (
    <div className={`overflow-x-auto scrollbar-hide ${className}`}>
      <div className="flex gap-6">{children}</div>
    </div>
  )
}

// Scroll Progress - React-based for proper client navigation
interface ScrollProgressProps {
  color?: string
  height?: number
  position?: 'top' | 'bottom'
}

export function ScrollProgress({
  color = 'bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500',
  height = 3,
  position = 'top'
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div
      className={`fixed left-0 right-0 z-50 ${position === 'top' ? 'top-0' : 'bottom-0'}`}
      style={{ height }}
    >
      <div
        className={`h-full ${color} origin-left transition-transform duration-75`}
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  )
}

// Fast MaskReveal
interface MaskRevealProps {
  children: ReactNode
  className?: string
}

export function MaskReveal({ children, className = '' }: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        animate={isInView ? { y: 0 } : { y: '100%' }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Fast Stagger
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.05,
  once = true
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: fastTransition }
      }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic - faster response
interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className = '', strength = 0.1 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div
      ref={ref}
      className={`transition-transform duration-100 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

// Passthrough components
export function ScrollPin({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`sticky top-0 ${className}`}>{children}</div>
}

export function RotateOnScroll({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}
