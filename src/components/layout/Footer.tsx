'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import { MessageCircle, Mail, Linkedin, MapPin, Phone, Shield, Lock, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

const footerLinks = {
  solucoes: [
    { label: 'Seguros', href: '#solucoes' },
    { label: 'Financeiro', href: '#solucoes' },
    { label: 'Capacitação', href: '#solucoes' },
    { label: 'Como Funciona', href: '#como-funciona' },
  ],
  recursos: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Sobre Nós', href: '#sobre' },
  ],
  contato: [
    {
      label: 'WhatsApp',
      href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
      icon: MessageCircle,
      external: true,
    },
    {
      label: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/l8capital',
      icon: Linkedin,
      external: true,
    },
  ],
}

const badges = [
  { icon: Shield, label: 'Conforme LGPD' },
  { icon: Lock, label: 'Dados Protegidos' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const prefersReducedMotion = useReducedMotion()

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-600/10 rounded-full blur-3xl" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                {/* Always use white logo in footer (dark background) */}
                <img
                  src="/images/logos/l8-logo_transp_branco.webp"
                  alt="L8 Capital - Soluções Financeiras para Imobiliárias"
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">
                  Capital
                </span>
                <span className="block text-xs text-gray-400 -mt-0.5">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 max-w-xs">
              Plataforma digital de soluções financeiras que fortalece imobiliárias há mais de 24 anos.
            </p>

            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, SP - Brasil</span>
            </div>

            {/* Security badges */}
            <div className="flex gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                >
                  <badge.icon className="w-4 h-4 text-secondary-400" />
                  <span className="text-xs text-gray-400">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soluções */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="font-semibold text-white mb-5 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
              Soluções
            </h4>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Recursos */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="font-semibold text-white mb-5 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-secondary-500 to-secondary-600 rounded-full" />
              Recursos
            </h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="font-semibold text-white mb-5 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full" />
              Fale Conosco
            </h4>
            <ul className="space-y-3">
              {footerLinks.contato.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group p-2 -ml-2 rounded-lg hover:bg-white/5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <link.icon className="h-4 w-4" />
                    </div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Mini */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-white/10">
              <p className="text-sm text-gray-300 mb-2">Pronto para começar?</p>
              <Link
                href="/#contato"
                className="text-accent-400 font-semibold text-sm hover:text-accent-300 transition-colors inline-flex items-center gap-1"
              >
                Agendar Conversa Gratuita
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {SITE_CONFIG.name}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/politica-privacidade" className="text-gray-500 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-gray-500 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
