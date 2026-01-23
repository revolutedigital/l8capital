'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks'

const stats = [
  { number: 400, prefix: '+', suffix: '', label: 'Imobiliárias parceiras', sublabel: '(via Alugue Sem Fiador, parceiro estratégico)' },
  { number: 20, prefix: '+', suffix: '', label: 'anos de experiência', sublabel: 'no mercado de seguros' },
  { number: 20, prefix: '+', suffix: '', label: 'especialistas atuando', sublabel: 'no backoffice operacional' },
  { number: 100, prefix: '', suffix: '%', label: 'Tecnologia própria', sublabel: 'integrada à rotina imobiliária' },
]

const partners = [
  { name: 'Parceiro 1', logo: '/images/logos/parceiro1.webp' },
  { name: 'Parceiro 2', logo: '/images/logos/parceiro2.webp' },
  { name: 'Garanteasy', logo: '/images/logos/garanteasy_logotipo.webp' },
  { name: 'Brava Capital', logo: '/images/logos/brava_logotipo.webp' },
]

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        setDisplayValue(value)
        return
      }

      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value, prefersReducedMotion])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue.toLocaleString('pt-BR')}{suffix}
    </span>
  )
}

export function CredibilityBar() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background - Premium Black */}
      <div className="absolute inset-0 bg-primary-900" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `url("/images/logos/bg_numeros_01.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              className="text-center relative"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl" />
              <div className="relative py-4 px-2">
                <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-1">
                  <AnimatedNumber value={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="text-white font-semibold text-base leading-tight">{stat.label}</p>
                <p className="text-secondary-400 text-xs mt-1">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-accent-500/30" />
          <span className="text-accent-400 text-sm font-medium uppercase tracking-wider">Nossos Parceiros</span>
          <div className="flex-1 h-px bg-accent-500/30" />
        </div>

        {/* Partners */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`grayscale brightness-200 opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300 flex items-center justify-center ${
                index === 0
                  ? 'h-[62px] w-[146px] md:h-[73px] md:w-[166px]'
                  : 'h-[58px] w-[134px] md:h-[67px] md:w-[154px]'
              }`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={index === 0 ? 166 : 154}
                height={index === 0 ? 73 : 67}
                loading="lazy"
                className="object-contain w-auto h-full max-w-full"
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.5 }}
          className="text-center text-secondary-300 mt-10 text-lg"
        >
          Modelo validado em <span className="font-semibold text-white">mais de 400 imobiliárias</span> no Brasil com o Alugue Sem Fiador.{' '}
          <span className="text-accent-400 font-semibold">Agora chegando a São Paulo.</span>
        </motion.p>
      </div>
    </section>
  )
}
