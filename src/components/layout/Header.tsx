'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  // Focus trap for mobile menu
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isMobileMenuOpen || !mobileMenuRef.current) return

      const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    },
    [isMobileMenuOpen]
  )

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg shadow-gray-900/5'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              {/* Light mode logo */}
              <img
                src="/images/logos/l8-logo_transp_preto.png"
                alt="L8 Capital - Soluções Financeiras para Imobiliárias"
                className="w-full h-full object-contain transition-transform group-hover:scale-105 dark:hidden"
              />
              {/* Dark mode logo */}
              <img
                src="/images/logos/l8-logo_transp_branco.png"
                alt="L8 Capital - Soluções Financeiras para Imobiliárias"
                className="w-full h-full object-contain transition-transform group-hover:scale-105 hidden dark:block"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
                Capital
              </span>
              <span className="block text-xs text-gray-500 dark:text-gray-400 -mt-0.5">
                Sua imobiliária mais forte
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Olá! Gostaria de saber mais sobre a L8 Capital.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" leftIcon={<MessageCircle className="h-4 w-4" />}>
                WhatsApp
              </Button>
            </Link>
            <Link href="#contato">
              <Button variant="accent" size="sm" rightIcon={<ChevronRight className="h-4 w-4" />}>
                Agendar Reunião
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              className="p-2.5 text-gray-700 dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl"
            onKeyDown={handleKeyDown}
          >
            <nav className="container-custom py-6 space-y-2" aria-label="Menu mobile">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
                <Link href="#contato" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="accent" className="w-full" rightIcon={<ChevronRight className="h-4 w-4" />}>
                    Agendar Reunião
                  </Button>
                </Link>
                <Link
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="whatsapp" className="w-full" leftIcon={<MessageCircle className="h-4 w-4" />}>
                    WhatsApp
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
