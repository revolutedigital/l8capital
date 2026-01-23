'use client'

import { PROBLEMS } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { IconMarginProblem, IconClock, IconDifferentiation } from '@/components/icons'
import { AlertTriangle, ArrowRight } from 'lucide-react'
import {
  FadeInOnScroll,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  TextReveal
} from '@/components/animations'

const problemIcons: Record<string, React.ElementType> = {
  'piggy-bank': IconMarginProblem,
  clock: IconClock,
  users: IconDifferentiation,
}

const problemColors = [
  {
    gradient: 'from-red-500 to-red-600',
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-200 dark:border-red-800',
    iconBg: 'bg-red-100 dark:bg-red-900/50',
    text: 'text-red-600 dark:text-red-400',
    glow: 'shadow-red-500/20'
  },
  {
    gradient: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-800',
    iconBg: 'bg-amber-100 dark:bg-amber-900/50',
    text: 'text-amber-600 dark:text-amber-400',
    glow: 'shadow-amber-500/20'
  },
  {
    gradient: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    border: 'border-orange-200 dark:border-orange-800',
    iconBg: 'bg-orange-100 dark:bg-orange-900/50',
    text: 'text-orange-600 dark:text-orange-400',
    glow: 'shadow-orange-500/20'
  },
]

export function Problems() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="problemas" className="section-padding bg-white dark:bg-primary-900 overflow-hidden" aria-labelledby="problems-heading">
      <div className="container-custom">
        {/* Header */}
        <FadeInOnScroll className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-semibold">Problemas que Resolvemos</span>
          </motion.div>

          <h2 id="problems-heading" className="heading-2 text-primary-900 dark:text-white">
            <TextReveal variant="slideUp">
              Você enfrenta esses desafios?
            </TextReveal>
          </h2>
        </FadeInOnScroll>

        {/* Problems Grid - Tablet gets 2 cols, Desktop gets 3 */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10" staggerDelay={0.15}>
          {PROBLEMS.map((problem, index) => {
            const colors = problemColors[index]
            const Icon = problemIcons[problem.icon] || IconMarginProblem

            return (
              <StaggerItem key={problem.title}>
                <TiltCard maxTilt={5} glare={false}>
                  <motion.div
                    className={`relative h-full p-8 rounded-3xl ${colors.bg} border ${colors.border} transition-all duration-300 hover:shadow-2xl ${colors.glow}`}
                    whileHover={{ y: -8 }}
                  >
                    {/* Problem Number */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-6xl font-bold ${colors.text} opacity-10`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`relative z-10 w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div className={colors.text}>
                        <Icon size={32} />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3 relative z-10">
                      {problem.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 relative z-10 mb-4">
                      {problem.description}
                    </p>

                    {/* Impact indicator */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.iconBg} ${colors.text} text-sm font-medium`}>
                      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      {index === 0 ? 'Alto impacto financeiro' : index === 1 ? 'Perda de produtividade' : 'Perda de competitividade'}
                    </div>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Paragraph after problems */}
        <FadeInOnScroll className="text-center mb-16">
          <p className="body-large text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            <TextReveal variant="wordByWord" delay={0.3} staggerChildren={0.03}>
              Se isso soa familiar, o problema não é a sua imobiliária. É o modelo.
            </TextReveal>
          </p>
        </FadeInOnScroll>

        {/* Arrow to Solution */}
        <FadeInOnScroll delay={0.6}>
          <motion.div
            className="flex flex-col items-center"
            animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-secondary-500 dark:text-secondary-400 mb-4 text-sm font-medium">
              A L8 Capital resolve isso
            </p>
            <motion.div
              className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center shadow-lg shadow-secondary-500/30"
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: 90 }}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
