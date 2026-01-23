'use client'

import Link from 'next/link'
import { Button, Badge } from '@/components/ui'
import { STATS } from '@/lib/constants'
import { ArrowRight, ChevronDown, Check, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { MeshGradient, MeshGradientFallback, TiltCard } from '@/components/animations'
import { IllustrationHero } from '@/components/illustrations'

// Ultra-fast animation config - only for non-LCP elements
const fast = { duration: 0.15, ease: [0.4, 0, 0.2, 1] }

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  // Animation only for secondary elements (not h1 - LCP element)
  const fadeIn = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: fast }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background - Use static fallback on mobile for better LCP */}
      <div className="absolute inset-0">
        {/* Mobile: always use static fallback for faster LCP */}
        <div className="md:hidden">
          <MeshGradientFallback className="opacity-20 dark:opacity-30" />
        </div>
        {/* Desktop: use animated gradient if motion is allowed */}
        <div className="hidden md:block">
          {!prefersReducedMotion ? (
            <MeshGradient className="opacity-30 dark:opacity-40" />
          ) : (
            <MeshGradientFallback className="opacity-20 dark:opacity-30" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white dark:from-primary-900/80 dark:via-primary-900/60 dark:to-primary-900" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%230F4C81' stroke-width='1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Static orbs */}
      <div className="absolute top-20 left-[10%] w-32 h-32 bg-accent-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-32 right-[15%] w-48 h-48 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fast, delay: 0.1 }}
              className="mb-8"
            >
              <Badge variant="highlight" className="inline-flex items-center gap-2 px-4 py-2">
                <Zap className="w-4 h-4 text-accent-100" aria-hidden="true" />
                <span className="font-semibold">Exclusivo para imobiliárias</span>
              </Badge>
            </motion.div>

            {/* H1 - LCP element - NO animation to improve LCP score */}
            <h1 className="heading-1 text-primary-900 dark:text-white mb-6">
              Sua imobiliária com{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-secondary-500">
                  mais receita recorrente
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full" />
              </span>{' '}
              e menos custo operacional.
            </h1>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fast, delay: 0.15 }}
              className="text-secondary-600 dark:text-secondary-300 mb-10 max-w-xl"
              style={{ fontSize: '1rem', lineHeight: '1.6' }}
            >
              <p className="mb-2">Sem aumentar o time, sem aumentar o risco e sem complicar a operação.</p>
              <p>A L8 ajuda imobiliárias a aumentarem receita, reduzirem custos e tirarem o peso do operacional, usando seguros, soluções financeiras e um time especializado que trabalha por você.</p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fast, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/#contato">
                <Button
                  variant="accent"
                  size="md"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  className="whitespace-nowrap"
                >
                  Agendar Conversa Gratuita
                </Button>
              </Link>
              <Link href="/#como-funciona">
                <Button variant="secondary" size="md" rightIcon={<ChevronDown className="h-5 w-5" />} className="whitespace-nowrap">
                  Ver como funciona
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fast, delay: 0.25 }}
              className="flex flex-wrap gap-x-4 gap-y-3"
            >
              {[
                { text: 'Sem mensalidade fixa', icon: Check },
                { text: 'Diagnóstico financeiro gratuito', icon: Shield },
                { text: `${STATS.experience} anos de mercado`, icon: Zap },
              ].map((i) => (
                <div key={i.text} className="flex items-center gap-2 text-secondary-600 dark:text-secondary-300">
                  <div className="w-6 h-6 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                    <i.icon className="h-3 w-3 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium">{i.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="relative lg:pl-8"
          >
            <TiltCard maxTilt={5} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-400/10 via-accent-400/15 to-secondary-400/10 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white/90 dark:bg-primary-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-secondary-200/50 dark:border-primary-700/50">
                <IllustrationHero className="w-full h-auto" />
              </div>
            </TiltCard>

            {/* Stats card - Hidden on smaller screens to prevent overlap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              className="hidden xl:block absolute -bottom-6 right-4"
            >
              <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-xl p-5 border border-secondary-200 dark:border-primary-700">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-900 text-xl font-bold">{STATS.agencies}</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary-900 dark:text-white">Imobiliárias</p>
                    <p className="text-sm text-secondary-500">já usam a solução</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.5 }}
              className="absolute -top-6 -right-6 lg:-right-12"
            >
              <div className="bg-gradient-to-br from-primary-800 to-primary-900 text-white rounded-2xl shadow-xl p-5">
                <div className="flex items-center gap-3">
                  <Shield className="w-9 h-9 text-accent-400" />
                  <div>
                    <p className="font-bold text-xl">{STATS.experience}</p>
                    <p className="text-xs text-secondary-300">anos de experiência</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="/#problemas" className="flex flex-col items-center gap-3 group">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary-400">
            Explore
          </span>
          <div className="w-6 h-10 border-2 border-secondary-300 dark:border-primary-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent-500 rounded-full animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  )
}
