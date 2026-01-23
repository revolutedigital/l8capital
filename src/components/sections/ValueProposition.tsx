'use client'

import { VALUE_PROPS, SITE_CONFIG } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { IconRevenue, IconSavings, IconAutomation } from '@/components/icons'
import { Sparkles } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  'trending-up': IconRevenue,
  'piggy-bank': IconSavings,
  cpu: IconAutomation,
}

const cardStyles = [
  { gradient: 'from-secondary-500 to-secondary-600', glow: 'bg-secondary-500/30' },
  { gradient: 'from-accent-500 to-accent-600', glow: 'bg-accent-500/30' },
  { gradient: 'from-primary-400 to-primary-500', glow: 'bg-primary-400/30' },
]

export function ValueProposition() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-white/90">Nossa proposta de valor</span>
          </div>

          <h2 className="heading-2 text-white mb-6">
            A L8 existe para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
              fortalecer financeiramente
            </span>{' '}
            a sua imobiliária.
          </h2>
          <p className="body-large text-primary-100 max-w-2xl mx-auto">
            Todo serviço que oferecemos passa por um filtro simples: aumenta receita, reduz custo ou
            tira operacional? Se não fizer pelo menos um, não faz parte da L8.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {VALUE_PROPS.map((prop, index) => {
            const Icon = iconMap[prop.icon] || IconRevenue
            const style = cardStyles[index]

            return (
              <motion.div
                key={prop.title}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.15 }}
                className={`group relative ${prop.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {/* Card Glow */}
                <div className={`absolute inset-0 ${style.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${prop.highlight ? style.gradient : 'from-white/10 to-white/5'} backdrop-blur-sm border ${prop.highlight ? 'border-white/20' : 'border-white/10'} transition-all duration-300 hover:border-white/30 hover:-translate-y-1`}>
                  {/* Highlight Badge */}
                  {prop.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-white text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        DESTAQUE
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-6 text-white">
                    <Icon size={64} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {prop.title}
                  </h3>
                  <p className={`leading-relaxed ${prop.highlight ? 'text-white/90' : 'text-primary-100'}`}>
                    {prop.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${style.gradient} opacity-60`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-primary-100">
            <span className="text-white font-semibold">"{SITE_CONFIG.tagline}"</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
