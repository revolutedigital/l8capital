'use client'

import { SERVICES } from '@/lib/constants'
import { Tabs, TabsList, TabsTrigger, TabsContent, Button } from '@/components/ui'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import {
  IconShield,
  IconDocument,
  IconSavings,
  IconWallet,
  IconFloat,
  IconReserve,
  IconPartnership,
  IconSettings,
  IconClipboard,
} from '@/components/icons'
import { ArrowRight, Shield, Receipt, Users } from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, React.ElementType> = {
  'shield-check': IconShield,
  'file-check': IconDocument,
  'piggy-bank': IconSavings,
  receipt: IconWallet,
  'trending-up': IconFloat,
  wallet: IconReserve,
  users: IconPartnership,
  settings: IconSettings,
  'clipboard-check': IconClipboard,
}

const tabIcons = {
  seguros: Shield,
  financeiro: Receipt,
  capacitacao: Users,
}

const tabLabels = {
  seguros: 'Seguros',
  financeiro: 'Financeiro',
  capacitacao: 'Capacitação',
}

const tabColors = {
  seguros: { bg: 'from-primary-500 to-primary-600', light: 'bg-primary-50 dark:bg-primary-900/20', text: 'text-primary-600 dark:text-primary-400' },
  financeiro: { bg: 'from-secondary-500 to-secondary-600', light: 'bg-secondary-50 dark:bg-secondary-900/20', text: 'text-secondary-600 dark:text-secondary-400' },
  capacitacao: { bg: 'from-accent-500 to-accent-600', light: 'bg-accent-50 dark:bg-accent-900/20', text: 'text-accent-600 dark:text-accent-400' },
}

export function Services() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="solucoes" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
            Nossas Soluções
          </span>
          <h2 className="heading-2 text-gray-900 dark:text-white mb-4">
            Soluções que fazem diferença no seu caixa
          </h2>
          <p className="body-large text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cada serviço foi pensado para resolver problemas reais de imobiliárias
          </p>
        </motion.div>

        <Tabs defaultValue="seguros" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white dark:bg-gray-800 p-1.5 rounded-2xl shadow-lg">
              {Object.entries(tabIcons).map(([key, Icon]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl data-[state=active]:shadow-md transition-all"
                >
                  <Icon className="w-4 h-4" />
                  <span>{tabLabels[key as keyof typeof tabLabels]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(SERVICES).map(([category, services]) => {
            const colors = tabColors[category as keyof typeof tabColors]
            return (
              <TabsContent key={category} value={category}>
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.01 : 0.4 }}
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                      const Icon = iconMap[service.icon] || IconShield
                      return (
                        <motion.div
                          key={service.title}
                          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                          className="group"
                        >
                          <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            {/* Icon */}
                            <div className={`inline-flex p-3 rounded-xl ${colors.light} mb-5`}>
                              <div className={colors.text}>
                                <Icon size={40} />
                              </div>
                            </div>

                            {/* Content */}
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {service.description}
                            </p>

                            {/* Hover indicator */}
                            <div className={`mt-4 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r ${colors.bg} rounded-full transition-all duration-300`} />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  <div className="mt-10 text-center">
                    <Link href="#contato">
                      <Button variant="ghost" className="group">
                        Quero saber mais sobre {tabLabels[category as keyof typeof tabLabels]?.toLowerCase() || category}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
