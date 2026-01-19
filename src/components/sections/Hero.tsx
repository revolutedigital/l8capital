'use client'

import Link from 'next/link'
import { Button, Badge } from '@/components/ui'
import { STATS } from '@/lib/constants'
import { ArrowRight, ChevronDown, Check, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { MeshGradient, MeshGradientFallback, TiltCard } from '@/components/animations'
import { IllustrationHero } from '@/components/illustrations'

// Fast animation config
const fast = { duration: 0.2, ease: [0.4, 0, 0.2, 1] }

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: fast }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {!prefersReducedMotion ? (
          <MeshGradient className="opacity-30 dark:opacity-40" />
        ) : (
          <MeshGradientFallback className="opacity-20 dark:opacity-30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-900" />
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={item} className="mb-8">
              <Badge variant="highlight" className="inline-flex items-center gap-2 px-4 py-2">
                <Zap className="w-4 h-4 text-accent-500" />
                <span className="font-semibold">Novo em São Paulo</span>
              </Badge>
            </motion.div>

            <motion.h1 variants={item} className="heading-1 text-gray-900 dark:text-white mb-6">
              Imobiliárias parceiras economizam{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-secondary-500">
                  R$ {STATS.savings}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full" />
              </span>{' '}
              /mês em boletos.
            </motion.h1>

            <motion.p variants={item} className="body-large text-gray-600 dark:text-gray-300 mb-10 max-w-xl">
              {`Tecnologia própria + ${STATS.experience} anos de experiência em seguros = mais dinheiro no seu caixa e menos trabalho operacional.`}
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/#contato">
                <Button
                  variant="accent"
                  size="lg"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Agendar Reunião Gratuita
                </Button>
              </Link>
              <Link href="/#como-funciona">
                <Button variant="secondary" size="lg" rightIcon={<ChevronDown className="h-5 w-5" />}>
                  Ver como funciona
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-x-8 gap-y-4">
              {[
                { text: 'Sem mensalidade fixa', icon: Check },
                { text: 'Análise gratuita', icon: Shield },
                { text: 'Resultados em 30 dias', icon: Zap },
              ].map((i) => (
                <div key={i.text} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="w-8 h-8 rounded-xl bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center">
                    <i.icon className="h-4 w-4 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <span className="text-sm font-medium">{i.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="relative lg:pl-8"
          >
            <TiltCard maxTilt={5} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/15 via-secondary-500/10 to-accent-500/15 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <IllustrationHero className="w-full h-auto" />
              </div>
            </TiltCard>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 lg:-left-12"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">{STATS.agencies}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Imobiliárias</p>
                    <p className="text-sm text-gray-500">já usam a solução</p>
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
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl shadow-xl p-5">
                <div className="flex items-center gap-3">
                  <Shield className="w-9 h-9" />
                  <div>
                    <p className="font-bold text-xl">{STATS.experience} anos</p>
                    <p className="text-xs text-primary-200">de experiência</p>
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
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
            Explore
          </span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent-500 rounded-full animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  )
}
