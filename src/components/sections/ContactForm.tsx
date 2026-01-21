'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Input, PhoneInput, Select } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'
import { MessageCircle, Check, Lock, ArrowRight, Shield, Clock, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import {
  MeshGradient,
  FadeInOnScroll,
  TiltCard,
  TextReveal,
  Magnetic,
  Parallax,
  Shake
} from '@/components/animations'

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  company: z.string().min(2, 'Razão social deve ter pelo menos 2 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  whatsapp: z
    .string()
    .min(10, 'Digite um número com DDD')
    .regex(/^[0-9]+$/, 'Digite apenas números'),
  region: z.string().min(1, 'Selecione uma região'),
  size: z.string().min(1, 'Selecione uma opção'),
})

type ContactFormData = z.infer<typeof contactSchema>

const sizeOptions = [
  { value: 'ate-50', label: 'Até 50 imóveis' },
  { value: '51-150', label: '51-150 imóveis' },
  { value: '151-500', label: '151-500 imóveis' },
  { value: 'mais-500', label: 'Mais de 500 imóveis' },
]

const regionOptions = [
  { value: 'zona-sul', label: 'Zona Sul' },
  { value: 'zona-norte', label: 'Zona Norte' },
  { value: 'zona-leste', label: 'Zona Leste' },
  { value: 'zona-oeste', label: 'Zona Oeste' },
  { value: 'centro', label: 'Centro' },
  { value: 'grande-sp', label: 'Grande São Paulo' },
  { value: 'interior', label: 'Interior de SP' },
  { value: 'outros', label: 'Outros estados' },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [shakeForm, setShakeForm] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao enviar formulário')
      }

      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Erro ao enviar. Tente novamente.')
      setShakeForm(true)
      setTimeout(() => setShakeForm(false), 500)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contato" className="relative py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-600 via-secondary-700 to-primary-700" />
        {!prefersReducedMotion && (
          <MeshGradient className="opacity-20" />
        )}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl mx-auto text-center"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <motion.div
              className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-10"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles className="h-14 w-14 text-white" aria-hidden="true" />
              </motion.div>
            </motion.div>
            <h2 className="heading-2 text-white mb-4">Pronto!</h2>
            <p className="text-white/90 text-lg mb-10">
              Você receberá uma confirmação no WhatsApp em alguns minutos. Enquanto isso, que tal
              conhecer nosso blog?
            </p>
            <Magnetic strength={0.2}>
              <Link href="/blog">
                <Button variant="accent" size="lg" className="group">
                  Conhecer o Blog
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="relative py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
      {!prefersReducedMotion && (
        <MeshGradient className="opacity-15" />
      )}

      {/* Floating Orbs */}
      {!prefersReducedMotion && (
        <>
          <Parallax speed={0.3} className="absolute -top-20 -left-20">
            <motion.div
              className="w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </Parallax>
          <Parallax speed={-0.2} className="absolute -bottom-20 -right-20">
            <motion.div
              className="w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </Parallax>
        </>
      )}

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <FadeInOnScroll direction="left">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock className="w-5 h-5 text-accent-400" />
              </motion.span>
              <span className="text-sm font-semibold text-white/90">Resposta em 24h</span>
            </motion.div>

            <h2 className="heading-2 text-white mb-6">
              <TextReveal variant="slideUp">
                Sua imobiliária pode ser a próxima a
              </TextReveal>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                <TextReveal variant="slideUp" delay={0.3}>
                  aumentar receita e reduzir custos
                </TextReveal>
              </span>
            </h2>

            <p className="text-primary-100 text-lg mb-10 leading-relaxed">
              <TextReveal variant="wordByWord" delay={0.5} staggerChildren={0.03}>
                Agende 30 minutos. Vamos analisar sua operação e mostrar exatamente onde você pode
                economizar ou ganhar mais.
              </TextReveal>
            </p>

            <ul className="space-y-5 mb-12">
              {[
                'Análise personalizada da sua operação',
                'Números reais, não promessas genéricas',
                '30 minutos que podem mudar seu mês',
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 300 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-xl bg-secondary-500/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Check className="h-5 w-5 text-secondary-400" aria-hidden="true" />
                  </motion.div>
                  <span className="text-white text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              whileHover={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <span className="text-primary-200">Prefere WhatsApp?</span>
              <Magnetic strength={0.2}>
                <Link
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Olá! Gostaria de agendar uma reunião para conhecer a L8 Capital.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="whatsapp"
                    size="sm"
                    leftIcon={<MessageCircle className="h-4 w-4" />}
                    className="group"
                  >
                    Chamar no WhatsApp
                  </Button>
                </Link>
              </Magnetic>
            </motion.div>
          </FadeInOnScroll>

          {/* Form */}
          <FadeInOnScroll direction="right" delay={0.2}>
            <Shake shake={shakeForm}>
              <TiltCard maxTilt={4} glare={true}>
                <div className="relative">
                  {/* Form Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/30 to-secondary-500/30 rounded-[2rem] blur-2xl opacity-60" />

                  <div className="relative bg-white dark:bg-primary-800 rounded-3xl p-8 md:p-10 shadow-2xl border border-secondary-100 dark:border-primary-700">
                    {/* Form Header */}
                    <div className="text-center mb-10">
                      <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                        Agende sua reunião gratuita
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        Preencha o formulário e entraremos em contato
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          label="Nome completo"
                          placeholder="Digite seu nome"
                          error={errors.name?.message}
                          autoComplete="name"
                          required
                          {...register('name')}
                        />
                      </motion.div>

                      <Input
                        label="Razão social"
                        placeholder="Digite o nome da empresa"
                        error={errors.company?.message}
                        autoComplete="organization"
                        required
                        {...register('company')}
                      />

                      <Input
                        label="E-mail corporativo"
                        type="email"
                        placeholder="seu@email.com"
                        error={errors.email?.message}
                        autoComplete="email"
                        required
                        {...register('email')}
                      />

                      <PhoneInput
                        label="WhatsApp (com DDD)"
                        placeholder="(11) 99999-9999"
                        error={errors.whatsapp?.message}
                        autoComplete="tel"
                        required
                        onValueChange={(value) => setValue('whatsapp', value, { shouldValidate: true })}
                      />

                      <Select
                        label="Região"
                        placeholder="Selecione sua região"
                        options={regionOptions}
                        error={errors.region?.message}
                        required
                        {...register('region')}
                      />

                      <Select
                        label="Quantos imóveis sua imobiliária administra?"
                        placeholder="Selecione uma opção"
                        options={sizeOptions}
                        error={errors.size?.message}
                        required
                        {...register('size')}
                      />

                      <AnimatePresence>
                        {submitError && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            role="alert"
                            aria-live="assertive"
                            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300 text-sm"
                          >
                            {submitError}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <Magnetic strength={0.1}>
                        <Button
                          type="submit"
                          variant="accent"
                          size="lg"
                          className="w-full group"
                          isLoading={isSubmitting}
                          rightIcon={<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />}
                        >
                          Agendar Minha Reunião
                        </Button>
                      </Magnetic>

                      <div className="flex items-center justify-center gap-8 pt-6 border-t border-secondary-100 dark:border-primary-700">
                        <motion.div
                          className="flex items-center gap-2 text-secondary-500 dark:text-secondary-400 text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Lock className="h-4 w-4" aria-hidden="true" />
                          <span>Dados protegidos</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2 text-secondary-500 dark:text-secondary-400 text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Shield className="h-4 w-4" aria-hidden="true" />
                          <span>Conforme LGPD</span>
                        </motion.div>
                      </div>
                      <p className="text-center text-xs text-secondary-400 dark:text-secondary-500 mt-4">
                        Sem spam. Resposta em até 24 horas úteis.
                      </p>
                    </form>
                  </div>
                </div>
              </TiltCard>
            </Shake>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
