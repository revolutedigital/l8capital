'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button, Card } from '@/components/ui'
import { STATS } from '@/lib/constants'
import { Building2, Check, Cpu, Clock, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const validationPoints = [
  'Reduziram custos de boletagem',
  'Aumentaram receita com seguros',
  'Automatizaram processos operacionais',
]

const features = [
  { icon: Cpu, label: 'Tecnologia Própria', sublabel: '100% integrada' },
  { icon: Clock, label: '+20 Anos', sublabel: 'no setor de seguros' },
  { icon: BadgeCheck, label: 'Modelo Validado', sublabel: '+400 imobiliárias' },
]

export function Validation() {
  return (
    <section className="section-padding bg-secondary-50 dark:bg-primary-800/50" aria-labelledby="validation-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Partner Logos */}
          <div className="flex justify-center items-center gap-8 md:gap-12 mb-8">
            <div className="h-12 md:h-16">
              <Image
                src="/images/logos/l8-logo-v2.webp"
                alt="L8 Capital"
                width={64}
                height={64}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="text-2xl text-secondary-300 dark:text-primary-600 font-light">+</div>
            <div className="h-12 md:h-16">
              <Image
                src="/images/logos/parceiro2.webp"
                alt="Alugue sem Fiador (ASF)"
                width={120}
                height={64}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <h2 id="validation-heading" className="heading-2 text-primary-900 dark:text-white">Solução validada no mercado</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="h-7 w-7 text-primary-600" />
              </div>
              <div>
                <h3 className="heading-3 text-primary-900 dark:text-white mb-2">
                  +400 imobiliárias já usam esta solução
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  No Brasil, a{' '}
                  <a
                    href="https://aluguesemfiador.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 dark:text-accent-400 font-bold underline decoration-2 underline-offset-2 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                  >
                    plataforma ASF (Alugue sem Fiador)
                  </a>{' '}
                  opera com a mesma tecnologia e modelo que estamos trazendo para São Paulo.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-medium text-primary-900 dark:text-white mb-3">
                São mais de 400 imobiliárias que já:
              </p>
              <ul className="space-y-2" role="list">
                {validationPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-secondary-700 dark:text-secondary-300">
                    <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-secondary-200 dark:border-primary-700 pt-6 mb-6">
              <p className="text-lg text-secondary-700 dark:text-secondary-300 italic">
                "Agora é a vez de São Paulo conhecer o modelo que está transformando o mercado
                imobiliário no país."
              </p>
            </div>

            <Link href="/#contato">
              <Button size="lg" className="w-full sm:w-auto">
                Quero ser um dos primeiros em SP
              </Button>
            </Link>
          </Card>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-primary-900 dark:text-white">{feature.label}</h4>
                <p className="text-sm text-secondary-500 dark:text-secondary-400">{feature.sublabel}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
