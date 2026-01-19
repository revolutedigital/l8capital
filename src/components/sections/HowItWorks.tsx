'use client'

import Link from 'next/link'
import { STEPS } from '@/lib/constants'
import { Button } from '@/components/ui'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { IconPhone, IconSearch, IconRocket } from '@/components/icons'
import { Check, Clock, MapPin, Wallet } from 'lucide-react'
import { IllustrationProcess } from '@/components/illustrations'

const iconMap: Record<string, React.ElementType> = {
  phone: IconPhone,
  search: IconSearch,
  rocket: IconRocket,
}

const stepColors = [
  { bg: 'from-primary-500 to-primary-600', light: 'bg-primary-100 dark:bg-primary-900/30', text: 'text-primary-600' },
  { bg: 'from-secondary-500 to-secondary-600', light: 'bg-secondary-100 dark:bg-secondary-900/30', text: 'text-secondary-600' },
  { bg: 'from-accent-500 to-accent-600', light: 'bg-accent-100 dark:bg-accent-900/30', text: 'text-accent-600' },
]

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="como-funciona" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
            Como Começar
          </span>
          <h2 className="heading-2 text-gray-900 dark:text-white mb-4">
            Três passos para começar
          </h2>
          <p className="body-large text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Processo simples e sem burocracia para sua imobiliária crescer
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-[16.666%] right-[16.666%] h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((step, index) => {
              const Icon = iconMap[step.icon] || IconPhone
              const colors = stepColors[index]

              return (
                <motion.div
                  key={step.title}
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Step Number Background */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-0">
                    <span className="text-[120px] font-bold text-gray-100 dark:text-gray-800 select-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10 mb-8">
                    <div className={`relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${colors.bg} shadow-xl`}>
                      <div className="text-white">
                        <Icon size={48} />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 dark:border-gray-700">
                        <span className={`text-sm font-bold ${colors.text}`}>{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10 max-w-xs mx-auto">
                    {step.description}
                  </p>

                  {/* Time indicator */}
                  <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.light}`}>
                    <Clock className={`w-4 h-4 ${colors.text}`} />
                    <span className={`text-sm font-medium ${colors.text}`}>
                      {index === 0 ? '30 min' : index === 1 ? 'Gratuito' : '7 dias'}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.4 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Agende uma conversa gratuita e descubra quanto sua imobiliária pode economizar
            </p>

            <Link href="#contato">
              <Button variant="accent" size="lg" className="mb-6">
                Agendar Minha Conversa Gratuita
              </Button>
            </Link>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Clock, text: '30 minutos' },
                { icon: MapPin, text: 'Online ou presencial' },
                { icon: Wallet, text: 'Sem custo' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <div className="w-6 h-6 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center">
                    <item.icon className="h-3.5 w-3.5 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
