'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  once?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  variant?: 'fadeUp' | 'slideUp' | 'letterByLetter' | 'wordByWord' | 'highlight'
}

// Split text into words or characters
function splitText(text: string, type: 'words' | 'chars') {
  if (type === 'words') {
    return text.split(' ')
  }
  return text.split('')
}

// Animation variants
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: { opacity: 1, y: 0 }
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: { opacity: 1, y: 0, rotateX: 0 }
}

const highlightVariants: Variants = {
  hidden: { backgroundSize: '0% 100%' },
  visible: { backgroundSize: '100% 100%' }
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  once = true,
  as: Tag = 'span',
  variant = 'fadeUp'
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, margin: '-10% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay
      }
    }
  }

  // Render based on variant
  if (variant === 'highlight') {
    return (
      <motion.span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className={`relative inline ${className}`}
        initial="hidden"
        animate={controls}
        variants={highlightVariants}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(245, 166, 35, 0.3), rgba(46, 139, 87, 0.3))',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 85%',
        }}
      >
        {children}
      </motion.span>
    )
  }

  if (variant === 'letterByLetter') {
    const letters = splitText(children, 'chars')

    return (
      <Tag ref={ref as any} className={className}>
        <motion.span
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="inline-block"
          style={{ perspective: '1000px' }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ duration, ease: [0.215, 0.61, 0.355, 1] }}
              className="inline-block"
              style={{ transformOrigin: 'center bottom' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.span>
      </Tag>
    )
  }

  if (variant === 'wordByWord') {
    const words = splitText(children, 'words')

    return (
      <Tag ref={ref as any} className={className}>
        <motion.span
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="inline-block"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={fadeUpVariants}
              transition={{ duration, ease: 'easeOut' }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </Tag>
    )
  }

  if (variant === 'slideUp') {
    const words = splitText(children, 'words')

    return (
      <Tag ref={ref as any} className={className}>
        <motion.span
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="inline-block"
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                variants={slideUpVariants}
                transition={{ duration, ease: [0.215, 0.61, 0.355, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </Tag>
    )
  }

  // Default: fadeUp
  return (
    <Tag ref={ref as any} className={className}>
      <motion.span
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        transition={{ duration, delay, ease: 'easeOut' }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </Tag>
  )
}

// Animated line component for underline effects
export function AnimatedUnderline({
  children,
  className = '',
  color = 'accent',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  color?: 'primary' | 'secondary' | 'accent'
  delay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const colorClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    accent: 'bg-accent-500'
  }

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        className={`absolute bottom-0 left-0 h-[3px] ${colorClasses[color]} rounded-full`}
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
      />
    </span>
  )
}

// Counter animation for numbers
export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0
}: {
  from?: number
  to: number
  duration?: number
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const delayMs = delay * 1000
    const durationMs = duration * 1000

    const timer = setTimeout(() => {
      const animate = () => {
        const elapsed = Date.now() - startTime - delayMs
        const progress = Math.min(elapsed / durationMs, 1)

        // Easing function (easeOut)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentValue = from + (to - from) * easeOut

        setDisplayValue(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delayMs)

    return () => clearTimeout(timer)
  }, [isInView, from, to, duration, delay])

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span>{displayValue.toFixed(decimals)}</span>
      {suffix}
    </span>
  )
}
