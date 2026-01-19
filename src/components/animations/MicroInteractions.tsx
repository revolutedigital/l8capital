'use client'

import { ReactNode, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Ripple effect for buttons
interface RippleButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function RippleButton({
  children,
  className = '',
  onClick,
  disabled = false
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return

    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = { x, y, id: Date.now() }
    setRipples(prev => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)

    onClick?.()
  }

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            initial={{
              width: 0,
              height: 0,
              x: ripple.x,
              y: ripple.y,
              opacity: 0.5
            }}
            animate={{
              width: 500,
              height: 500,
              x: ripple.x - 250,
              y: ripple.y - 250,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </button>
  )
}

// Hover scale effect
interface HoverScaleProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function HoverScale({
  children,
  className = '',
  scale = 1.05
}: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}

// 3D Tilt card effect - optimized with CSS transitions
interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  perspective?: number
  glare?: boolean
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  perspective = 1000,
  glare = false
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)

    const tiltX = -percentY * maxTilt
    const tiltY = percentX * maxTilt

    card.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`
  }

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}

      {/* Glare effect - simplified */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-inherit overflow-hidden opacity-0 hover:opacity-10 transition-opacity"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 60%)',
          }}
        />
      )}
    </div>
  )
}

// Morphing icon (hamburger to X, etc.)
interface MorphIconProps {
  isOpen: boolean
  className?: string
  color?: string
}

export function MorphIcon({ isOpen, className = '', color = 'currentColor' }: MorphIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    >
      <motion.line
        x1="4" y1="6" x2="20" y2="6"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
          x1: isOpen ? 4 : 4,
          x2: isOpen ? 20 : 20
        }}
        style={{ transformOrigin: 'center' }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="4" y1="12" x2="20" y2="12"
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.line
        x1="4" y1="18" x2="20" y2="18"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
          x1: isOpen ? 4 : 4,
          x2: isOpen ? 20 : 20
        }}
        style={{ transformOrigin: 'center' }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  )
}

// Pulse animation on hover
interface PulseOnHoverProps {
  children: ReactNode
  className?: string
  pulseColor?: string
}

export function PulseOnHover({
  children,
  className = '',
  pulseColor = 'rgba(15, 76, 129, 0.3)'
}: PulseOnHoverProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-inherit pointer-events-none"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5 + i * 0.2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeOut'
                }}
                style={{ backgroundColor: pulseColor }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Hover reveal content
interface HoverRevealProps {
  children: ReactNode
  revealContent: ReactNode
  className?: string
}

export function HoverReveal({
  children,
  revealContent,
  className = ''
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ y: isHovered ? -10 : 0, opacity: isHovered ? 0.5 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {revealContent}
      </motion.div>
    </motion.div>
  )
}

// Loading spinner with brand colors
export function LoadingSpinner({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="url(#spinner-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="80 120"
        />
        <defs>
          <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F4C81" />
            <stop offset="50%" stopColor="#2E8B57" />
            <stop offset="100%" stopColor="#F5A623" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

// Bounce on click
interface BounceOnClickProps {
  children: ReactNode
  className?: string
}

export function BounceOnClick({ children, className = '' }: BounceOnClickProps) {
  return (
    <motion.div
      className={className}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  )
}

// Shake animation (for errors)
interface ShakeProps {
  children: ReactNode
  shake: boolean
  className?: string
}

export function Shake({ children, shake, className = '' }: ShakeProps) {
  return (
    <motion.div
      className={className}
      animate={shake ? {
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
      } : {}}
    >
      {children}
    </motion.div>
  )
}
