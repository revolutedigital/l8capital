'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete?: () => void
  minDuration?: number
}

export function Preloader({ onComplete, minDuration = 800 }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const startTime = Date.now()

    // Fast progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Faster increments for quicker loading feel
        const increment = prev < 80 ? Math.random() * 25 : Math.random() * 10
        return Math.min(prev + increment, 100)
      })
    }, 50)

    // Check if page is loaded
    const handleLoad = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minDuration - elapsed)

      setTimeout(() => {
        setProgress(100)
        setTimeout(() => {
          setIsExiting(true)
          setTimeout(() => {
            setIsLoading(false)
            onComplete?.()
          }, 300) // Faster exit animation
        }, 100)
      }, remainingTime)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearInterval(progressInterval)
      window.removeEventListener('load', handleLoad)
    }
  }, [minDuration, onComplete])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-primary-900"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900" />

        {/* Logo */}
        <motion.div
          className="relative z-10 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/l8-logo_transp_branco-sm.webp"
              alt="L8 Capital"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Brand name */}
        <motion.div
          className="relative z-10 mb-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <h1 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
            L8 Capital
          </h1>
          <p className="text-secondary-400 text-sm">
            Sua imobiliária mais forte
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="relative z-10 w-40 md:w-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <div className="h-1 bg-primary-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
