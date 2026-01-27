'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { Handshake, MapPin, BarChart3, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Modelo validado',
    text: '+400 imobiliárias já operam com a mesma tecnologia e lógica financeira.',
  },
  {
    icon: BarChart3,
    title: 'Resultados reais',
    text: 'Não é promessa — são números comprovados na operação diária.',
  },
  {
    icon: MapPin,
    title: 'Agora em São Paulo',
    text: 'Suporte local, proximidade e foco na realidade das imobiliárias paulistas.',
  },
]

export function Partnership() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-secondary-50 dark:bg-primary-800/50">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          className="text-center mb-14"
        >
          {/* Logos side by side */}
          <div className="flex justify-center items-center gap-5 md:gap-8 mb-8">
            <div className="h-10 md:h-14">
              <Image
                src="/images/logos/l8-logo-v2.webp"
                alt="L8 Capital"
                width={64}
                height={56}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900/30">
              <Handshake className="w-5 h-5 text-accent-600 dark:text-accent-400" />
            </div>
            <a
              href="https://aluguesemfiador.net"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 md:h-14 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/logos/parceiro2.webp"
                alt="ASF - Alugue sem Fiador"
                width={120}
                height={56}
                className="h-full w-auto object-contain"
              />
            </a>
          </div>

          <h2 className="heading-2 text-primary-900 dark:text-white mb-4">
            Uma parceria que já funciona no mercado
          </h2>
        </motion.div>

        {/* Content block */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.1 }}
            className="bg-white dark:bg-primary-900 rounded-3xl p-8 md:p-12 shadow-xl border border-secondary-100 dark:border-primary-700 mb-12"
          >
            <div className="space-y-5 text-secondary-600 dark:text-secondary-400 leading-relaxed">
              <p>
                A L8 Capital atua em parceria com o{' '}
                <a
                  href="https://aluguesemfiador.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 dark:text-accent-400 font-semibold hover:underline"
                >
                  Alugue Sem Fiador (ASF)
                </a>
                , uma das operações mais consolidadas do mercado imobiliário brasileiro.
              </p>
              <p>
                O ASF já opera há anos com o mesmo modelo, a mesma lógica financeira e a mesma tecnologia que a L8 leva agora para São Paulo —{' '}
                <strong className="text-primary-900 dark:text-white">
                  um modelo validado em mais de 400 imobiliárias.
                </strong>
              </p>
              <p>
                Essa parceria permite que a L8 entregue algo raro no mercado: não uma promessa, mas um{' '}
                <strong className="text-primary-900 dark:text-white">
                  modelo testado em escala
                </strong>
                , com resultados reais na operação diária das imobiliárias.
              </p>

              {/* Visual separator */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary-200 dark:via-primary-700 to-transparent" />
              </div>

              <p className="text-primary-900 dark:text-white font-medium text-lg">
                O resultado é simples: um modelo que já funciona, agora adaptado à realidade das imobiliárias paulistas, com suporte local, proximidade e foco em resultado financeiro.
              </p>
            </div>
          </motion.div>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, delay: prefersReducedMotion ? 0 : 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent-100 dark:bg-accent-900/30 mb-4">
                  <pillar.icon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
