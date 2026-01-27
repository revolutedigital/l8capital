'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { Users, TrendingUp, Cpu, HeartHandshake, Shield, Target } from 'lucide-react'

const highlights = [
  { icon: Shield, text: 'Seguros que geram receita recorrente' },
  { icon: TrendingUp, text: 'Soluções financeiras que reduzem custos' },
  { icon: Cpu, text: 'Tecnologia própria' },
  { icon: Users, text: 'Time humano especializado assumindo o operacional' },
]

export function AboutUs() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="quem-somos"
      className="relative py-20 md:py-28 overflow-hidden bg-white dark:bg-primary-900"
      aria-labelledby="about-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%230F4C81' stroke-width='1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary-50/50 to-transparent dark:from-primary-800/30 dark:to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-full px-4 py-2 mb-6">
              <HeartHandshake className="w-4 h-4" />
              <span className="text-sm font-semibold">Quem Somos</span>
            </div>

            {/* Main heading */}
            <h2
              id="about-heading"
              className="text-[1.75rem] md:text-[2rem] font-display font-bold leading-tight text-primary-900 dark:text-white mb-6"
            >
              A L8 Capital nasceu para resolver um problema{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-secondary-500">
                simples e ignorado
              </span>{' '}
              no mercado imobiliário.
            </h2>

            {/* Intro paragraph */}
            <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
              Imobiliárias trabalham muito, faturam bem, mas poderiam operar com muito mais leveza e resultado quando a parte financeira é ajustada do jeito certo. É possível transformar o financeiro em um motor de crescimento e não só em uma rotina operacional.
            </p>

            <p className="text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed">
              Enquanto a maioria das soluções vende produtos isolados, a L8 atua como{' '}
              <strong className="text-primary-900 dark:text-white">parceira estratégica</strong>, olhando para o que
              realmente importa para o dono: receita, custo e controle operacional.
            </p>

            {/* Ecosystem description */}
            <div className="bg-secondary-50 dark:bg-primary-800/50 rounded-2xl p-6 mb-8 border border-secondary-100 dark:border-primary-700">
              <p className="text-secondary-700 dark:text-secondary-300 mb-4 font-medium">
                Somos um ecossistema financeiro especializado em imobiliárias, que une:
              </p>
              <ul className="space-y-3">
                {highlights.map((item, index) => (
                  <motion.li
                    key={item.text}
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="relative"
          >
            {/* Main card with partnership */}
            <div className="relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl p-8 md:p-10 shadow-2xl">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-bl-[100px]" />

              {/* Partnership logos */}
              <div className="relative z-10 mb-8">
                <p className="text-primary-300 text-sm font-medium uppercase tracking-wider mb-4">
                  Parceria Estratégica
                </p>
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Image
                      src="/images/logos/l8-logo_transp_branco.webp"
                      alt="L8 Capital"
                      width={80}
                      height={80}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <div className="text-2xl text-accent-400 font-light">+</div>
                  <a
                    href="https://aluguesemfiador.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <Image
                      src="/images/logos/parceiro2.webp"
                      alt="ASF - Alugue sem Fiador"
                      width={120}
                      height={80}
                      className="h-12 w-auto object-contain brightness-0 invert"
                    />
                  </a>
                </div>
              </div>

              {/* Stats highlight */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-accent-400 mb-1">+20</div>
                  <p className="text-primary-200 text-sm">anos de experiência</p>
                  <p className="text-primary-400 text-xs">no mercado de seguros</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-accent-400 mb-1">+400</div>
                  <p className="text-primary-200 text-sm">imobiliárias</p>
                  <p className="text-primary-400 text-xs">via plataforma ASF</p>
                </div>
              </div>

              {/* ASF Highlight */}
              <div className="relative z-10 bg-accent-500/20 backdrop-blur-sm rounded-xl p-5 border border-accent-400/30">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-2">
                      Modelo validado com a plataforma ASF
                    </p>
                    <p className="text-primary-200 text-sm leading-relaxed">
                      A{' '}
                      <a
                        href="https://aluguesemfiador.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-400 font-semibold underline decoration-1 underline-offset-2 hover:text-accent-300 transition-colors"
                      >
                        ASF (Alugue sem Fiador)
                      </a>{' '}
                      é nossa parceira estratégica e opera a plataforma de seguros que já transformou o mercado imobiliário no país.
                      Agora, esse mesmo modelo chega a São Paulo com a L8 Capital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
