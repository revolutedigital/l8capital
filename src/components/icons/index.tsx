'use client'

import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

// Ícone de Receita/Crescimento
export function IconRevenue({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M14 32L20 24L26 28L34 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 18H34V24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="34" r="2" fill="currentColor" />
      <circle cx="30" cy="34" r="2" fill="currentColor" />
      <circle cx="18" cy="34" r="2" fill="currentColor" />
    </svg>
  )
}

// Ícone de Economia/Cofrinho
export function IconSavings({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <ellipse cx="24" cy="26" rx="10" ry="8" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M20 26C20 24.8954 21.7909 24 24 24C26.2091 24 28 24.8954 28 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M22 18V16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="24" r="1.5" fill="currentColor" />
      <path d="M14 26C12 26 12 28 12 28L14 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 34L17 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 34L31 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Ícone de Automação/CPU
export function IconAutomation({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <rect x="16" y="16" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <rect x="20" y="20" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 32V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 32V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 28H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 20H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 28H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Ícone de Seguro/Escudo
export function IconShield({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M24 12L34 16V24C34 30 30 34 24 36C18 34 14 30 14 24V16L24 12Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 24L23 27L28 21"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Ícone de Boleto/Documento
export function IconDocument({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <rect x="14" y="12" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 18H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 23H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 28H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="26" y="26" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

// Ícone de Parceria/Usuários
export function IconPartnership({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="30" cy="18" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M12 32C12 28 14.6863 26 18 26C19.5 26 20.5 26.5 21.5 27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M36 32C36 28 33.3137 26 30 26C28.5 26 27.5 26.5 26.5 27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M21 30L24 33L27 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 33V36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Ícone de Calendário/Agendamento
export function IconCalendar({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <rect x="12" y="16" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 24H36" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 12V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 12V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="30" r="2" fill="currentColor" />
      <circle cx="28" cy="30" r="2" fill="currentColor" />
    </svg>
  )
}

// Ícone de Relógio/Tempo
export function IconClock({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 16V24L30 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Ícone de Carteira/Wallet
export function IconWallet({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <rect x="10" y="16" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 22H38" stroke="currentColor" strokeWidth="2.5" />
      <rect x="28" y="26" width="6" height="4" rx="1" fill="currentColor" />
      <path d="M14 16V14C14 12.8954 14.8954 12 16 12H32C33.1046 12 34 12.8954 34 14V16" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

// Ícone de Configuração/Engrenagem
export function IconSettings({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M24 12V16M24 32V36M36 24H32M16 24H12M32.5 15.5L29.5 18.5M18.5 29.5L15.5 32.5M32.5 32.5L29.5 29.5M18.5 18.5L15.5 15.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Ícone de Vistoria/Clipboard
export function IconClipboard({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <rect x="14" y="14" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="18" y="10" width="12" height="6" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M18 24L22 28L30 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Ícone de Conversa/Telefone
export function IconPhone({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M14 18C14 16.8954 14.8954 16 16 16H18L20 22L18 24C18 24 19 28 22 31C25 34 28 34 28 34L30 32L36 34V36C36 37.1046 35.1046 38 34 38C22 38 12 28 14 18Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Ícone de Busca/Diagnóstico
export function IconSearch({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="22" cy="22" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M28 28L34 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 18V26M18 22H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Ícone de Foguete/Implementação
export function IconRocket({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M24 12C24 12 32 16 32 26L28 30L24 28L20 30L16 26C16 16 24 12 24 12Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="22" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 34L20 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 34L28 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 34V38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

// Ícone de Margem Apertada (Problema)
export function IconMarginProblem({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 18V24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M21 20L24 18L27 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 28V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M19 34L18 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M29 34L30 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Ícone de Diferenciação (Problema)
export function IconDifferentiation({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <rect x="12" y="20" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="20" y="20" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="28" y="20" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M24 12L26 16H22L24 12Z" fill="currentColor" />
      <path d="M24 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Ícone Check Circle
export function IconCheckCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Ícone X Circle
export function IconXCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Ícone Capitalização
export function IconCapitalization({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 18V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 28V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 22C21 20.5 22.3431 20 24 20C25.6569 20 27 20.5 27 22C27 24 24 24 24 24C24 24 21 24 21 26C21 27.5 22.3431 28 24 28C25.6569 28 27 27.5 27 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Ícone Float/Rentabilização
export function IconFloat({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M14 30L20 24L26 28L34 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="30" r="2" fill="currentColor" />
      <circle cx="20" cy="24" r="2" fill="currentColor" />
      <circle cx="26" cy="28" r="2" fill="currentColor" />
      <circle cx="34" cy="18" r="2" fill="currentColor" />
      <path d="M14 36H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  )
}

// Ícone Fundo de Reserva
export function IconReserve({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <rect x="14" y="24" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 24V20C18 17.7909 19.7909 16 22 16H26C28.2091 16 30 17.7909 30 20V24" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="30" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M24 28V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Ícone Treinamento
export function IconTraining({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M24 14L36 20L24 26L12 20L24 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M12 20V28L24 34L36 28V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 26V34" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

// Ícone Casa/Consórcio
export function IconHome({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M14 24L24 14L34 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 22V34H30V22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="22" y="26" width="4" height="8" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

