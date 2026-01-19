'use client'

import Image from 'next/image'
import { STATS } from '@/lib/constants'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks'

const stats = [
  { number: 400, suffix: '+', label: 'Imobiliárias', sublabel: 'parceiras' },
  { number: 24, suffix: '', label: 'Anos', sublabel: 'de experiência' },
  { number: 2050, prefix: 'R$ ', suffix: '', label: 'Economia', sublabel: 'por mês' },
  { number: 100, suffix: '%', label: 'Tecnologia', sublabel: 'própria' },
]

const partners = [
  { name: 'Parceiro 1', logo: '/images/logos/parceiro1.jpeg' },
  { name: 'Parceiro 2', logo: '/images/logos/parceiro2.png' },
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
      {/* Background */}
      <div className="absolute inset-0 bg-primary-700" />
      <div
        className="absolute inset-0 opacity-30"
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
              <div className="relative py-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedNumber value={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="text-white font-semibold text-lg">{stat.label}</p>
                <p className="text-primary-200 text-sm">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-primary-200 text-sm font-medium uppercase tracking-wider">Nossos Parceiros</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Partners */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.4 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative h-20 w-44 md:h-24 md:w-52 grayscale brightness-200 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-contain"
              />
            </div>
          ))}

          {/* L8 Logo */}
          <div className="relative h-20 w-44 md:h-24 md:w-52">
            <Image
              src="/images/logos/l8-logo.png"
              alt="L8 Capital"
              fill
              sizes="(max-width: 768px) 176px, 208px"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.5 }}
          className="text-center text-primary-100 mt-10 text-lg"
        >
          Solução validada em <span className="font-semibold text-white">+400 imobiliárias</span> no Centro-Oeste.{' '}
          <span className="text-accent-400 font-semibold">Agora chegando a São Paulo.</span>
        </motion.p>
      </div>
    </section>
  )
}
