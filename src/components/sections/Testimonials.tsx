'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Bianca Botelho',
    role: 'Gerente de Marketing',
    company: 'Imobiliária em Campo Grande-MS',
    content: 'Desde sua criação, fomos a primeira Imobiliária a utilizar o serviço em Campo Grande-MS. A parceria tem sido fundamental para o crescimento dos nossos negócios.',
    yearsSince: 2014,
  },
  {
    name: 'João Paulo Machado de Araujo',
    role: 'Proprietário',
    company: 'Imobiliária Betel',
    content: 'Em 2015 começamos a ser atendidos e desde então a parceria só cresce. O suporte é excelente e a tecnologia facilita muito nossa operação diária.',
    yearsSince: 2015,
  },
  {
    name: 'Leonel Marchiotti Fernandes',
    role: 'Gerente Administrativo',
    company: 'Imobiliária Colmeia',
    content: 'Parceiro desde 2015. A facilidade e segurança durante sinistros fazem toda a diferença na nossa operação. Confiamos plenamente na parceria.',
    yearsSince: 2015,
  },
  {
    name: 'Karina Abussafi',
    role: 'Proprietária',
    company: 'Imobiliária',
    content: 'Desde 2017 tem se tornado um grande fomentador de negócios. A agilidade e confiança na parceria nos permite fechar mais locações com segurança.',
    yearsSince: 2017,
  },
  {
    name: 'Thomaz Ugri',
    role: 'Sócio Proprietário',
    company: 'Colméia Imóveis',
    content: 'Parceiro desde 2017. A garantia é versátil e rápida, exatamente o que precisamos para atender nossos clientes com excelência.',
    yearsSince: 2017,
  },
  {
    name: 'Luciano Tannus',
    role: 'Corretor de Imóveis',
    company: '',
    content: 'Há aproximadamente dois anos nos oferece agilidade na efetivação das locações. A parceria facilita muito o dia a dia e aumenta nossa taxa de conversão.',
    yearsSince: 2022,
  },
]

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="section-padding bg-white dark:bg-primary-900 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 id="testimonials-heading" className="heading-2 text-primary-900 dark:text-white mb-4">
            O que nossos parceiros dizem
          </h2>
          <p className="body-large text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Imobiliárias que já transformaram suas operações com nossa tecnologia
          </p>
        </motion.div>

        {/* Testimonials Grid - 2 rows of 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-secondary-50 dark:bg-primary-800 rounded-3xl p-8 border border-secondary-100 dark:border-primary-700 hover:border-primary-200 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-2xl bg-primary-100 dark:bg-primary-700/50">
                    <Quote className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-secondary-700 dark:text-secondary-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-secondary-200 dark:border-primary-700">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">
                      {testimonial.role}
                      {testimonial.company && ` - ${testimonial.company}`}
                    </p>
                  </div>
                </div>

                {/* Years Badge */}
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 dark:bg-primary-700 text-secondary-600 dark:text-secondary-300">
                    Parceiro desde {testimonial.yearsSince}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-secondary-500 dark:text-secondary-400">
            Junte-se a <span className="font-semibold text-primary-600 dark:text-accent-400">+400 imobiliárias</span> que já confiam na nossa tecnologia
          </p>
        </motion.div>
      </div>
    </section>
  )
}
