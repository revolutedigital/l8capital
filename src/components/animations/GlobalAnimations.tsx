'use client'

import { useState, useEffect } from 'react'
import { Preloader } from './Preloader'
import { CustomCursor } from './CustomCursor'
import { ScrollProgress } from './ScrollAnimations'

interface GlobalAnimationsProps {
  enablePreloader?: boolean
  enableCursor?: boolean
  enableScrollProgress?: boolean
}

export function GlobalAnimations({
  enablePreloader = true,
  enableCursor = true,
  enableScrollProgress = true
}: GlobalAnimationsProps) {
  const [isLoaded, setIsLoaded] = useState(!enablePreloader)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Preloader */}
      {enablePreloader && !isLoaded && (
        <Preloader
          minDuration={2500}
          onComplete={() => setIsLoaded(true)}
        />
      )}

      {/* Custom Cursor - only on desktop */}
      {enableCursor && isLoaded && (
        <CustomCursor />
      )}

      {/* Scroll Progress Bar */}
      {enableScrollProgress && isLoaded && (
        <ScrollProgress />
      )}
    </>
  )
}
