'use client'

import { useEffect, useRef, useState } from 'react'

interface MeshGradientProps {
  className?: string
}

// Optimized CSS-only mesh gradient - no WebGL overhead
// Inspired by Stripe but optimized for performance
export function MeshGradient({ className = '' }: MeshGradientProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only animate when visible (Intersection Observer)
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`absolute inset-0 ${className}`}
      style={{
        willChange: isVisible ? 'transform' : 'auto',
      }}
    >
      {/* Base gradient layer */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A3558 0%, #0F4C81 50%, #1a5a94 100%)',
          transform: 'skewY(-6deg) scale(1.2)',
          transformOrigin: 'center center'
        }}
      />

      {/* Animated blob 1 - Primary */}
      <div
        className={`absolute w-[600px] h-[600px] rounded-full blur-[100px] ${isVisible ? 'animate-blob-1' : ''}`}
        style={{
          background: 'radial-gradient(circle, rgba(15, 76, 129, 0.6) 0%, transparent 70%)',
          top: '-10%',
          left: '-10%',
          transform: 'skewY(-6deg)',
        }}
      />

      {/* Animated blob 2 - Secondary */}
      <div
        className={`absolute w-[500px] h-[500px] rounded-full blur-[80px] ${isVisible ? 'animate-blob-2' : ''}`}
        style={{
          background: 'radial-gradient(circle, rgba(46, 139, 87, 0.5) 0%, transparent 70%)',
          top: '30%',
          right: '-5%',
          transform: 'skewY(-6deg)',
        }}
      />

      {/* Animated blob 3 - Accent */}
      <div
        className={`absolute w-[400px] h-[400px] rounded-full blur-[60px] ${isVisible ? 'animate-blob-3' : ''}`}
        style={{
          background: 'radial-gradient(circle, rgba(245, 166, 35, 0.3) 0%, transparent 70%)',
          bottom: '10%',
          left: '20%',
          transform: 'skewY(-6deg)',
        }}
      />
    </div>
  )
}

// Simple static fallback
export function MeshGradientFallback({ className = '' }: MeshGradientProps) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(15, 76, 129, 0.6) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(46, 139, 87, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(245, 166, 35, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0A3558 0%, #0F4C81 50%, #1a5a94 100%)
        `,
        transform: 'skewY(-6deg) scale(1.2)',
        transformOrigin: 'center center'
      }}
    />
  )
}
