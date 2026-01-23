'use client'

import Image from 'next/image'
import { COMPARISON } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { IconCheckCircle, IconXCircle } from '@/components/icons'

export function Differentiator() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
            Nosso Diferencial
          </span>
          <h2 className="heading-2 text-gray-900 dark:text-white mb-4">
            Por que somos diferentes?
          </h2>
          <p className="body-large text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Compare e veja por que mais de 400 imobiliárias escolheram a nossa plataforma ASF
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Traditional Market */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-3xl opacity-50 blur-xl" />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 h-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-700 mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400">Mercado Tradicional</h3>
              </div>

              <ul className="space-y-4">
                {COMPARISON.map((row, index) => (
                  <motion.li
                    key={index}
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <IconXCircle size={20} className="text-red-500" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{row.traditional}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* L8 Capital */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl opacity-20 blur-xl" />
            <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 border border-primary-500/30 h-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4 p-2">
                  <Image
                    src="/images/logos/l8-logo_transp_branco-sm.webp"
                    alt="L8 Capital"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">L8 Capital</h3>
              </div>

              <ul className="space-y-4">
                {COMPARISON.map((row, index) => (
                  <motion.li
                    key={index}
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/10"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <IconCheckCircle size={20} className="text-secondary-400" />
                    </div>
                    <span className="text-white font-medium text-sm">{row.l8}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.3 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-50 via-white to-primary-50 dark:from-primary-900/30 dark:via-gray-800 dark:to-primary-900/30 rounded-2xl px-8 py-6 border border-primary-100 dark:border-primary-800">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              +20 anos de experiência no mercado de seguros.
            </p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              Agora do lado de quem realmente importa:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">você.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
