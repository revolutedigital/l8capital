'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete?: () => void
  minDuration?: number
}

export function Preloader({ onComplete, minDuration = 2000 }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const startTime = Date.now()

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Faster at start, slower near end
        const increment = prev < 70 ? Math.random() * 15 : Math.random() * 5
        return Math.min(prev + increment, 100)
      })
    }, 100)

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
          }, 800)
        }, 300)
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
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-600/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary-600/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Logo animation */}
        <motion.div
          className="relative z-10 mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40"
            animate={isExiting ? { scale: 1.5, opacity: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Logo with glow effect */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(201, 162, 39, 0.4))',
                  'drop-shadow(0 0 40px rgba(201, 162, 39, 0.6))',
                  'drop-shadow(0 0 20px rgba(201, 162, 39, 0.4))',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/images/logos/l8-logo_transp_branco.webp"
                alt="L8 Capital"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-accent-500/50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>

        {/* Brand name */}
        <motion.div
          className="relative z-10 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
            L8 Capital
          </h1>
          <motion.p
            className="text-secondary-300 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Sua imobiliária mais forte
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="relative z-10 w-48 md:w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="h-1 bg-primary-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Progress text */}
          <motion.div
            className="flex justify-between mt-3 text-xs text-secondary-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span>Carregando</span>
            <span className="font-mono">{Math.round(progress)}%</span>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary-600"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
