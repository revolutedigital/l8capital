'use client'

import { SVGProps } from 'react'

interface IllustrationProps extends SVGProps<SVGSVGElement> {
  className?: string
}

// Ilustração Isométrica - Dashboard de Imobiliária
export function IllustrationDashboard({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Base do Monitor */}
      <path
        d="M200 260L260 230V240L200 270L140 240V230L200 260Z"
        fill="#0A3558"
      />
      <path
        d="M200 250L210 245V265L200 270L190 265V245L200 250Z"
        fill="#0F4C81"
      />

      {/* Tela Principal - Base */}
      <path
        d="M80 80L200 20L320 80V200L200 260L80 200V80Z"
        fill="#E6EEF5"
        stroke="#0F4C81"
        strokeWidth="2"
      />

      {/* Tela Interna */}
      <path
        d="M100 95L200 45L300 95V185L200 235L100 185V95Z"
        fill="#FFFFFF"
        stroke="#E5E7EB"
        strokeWidth="1"
      />

      {/* Gráfico de Barras */}
      <path d="M130 180L130 150" stroke="#2E8B57" strokeWidth="12" strokeLinecap="round" />
      <path d="M155 180L155 130" stroke="#2E8B57" strokeWidth="12" strokeLinecap="round" />
      <path d="M180 180L180 110" stroke="#2E8B57" strokeWidth="12" strokeLinecap="round" />
      <path d="M205 180L205 90" stroke="#F5A623" strokeWidth="12" strokeLinecap="round" />

      {/* Linha de Tendência */}
      <path
        d="M120 160L145 140L170 145L195 115L220 95"
        stroke="#0F4C81"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="220" cy="95" r="5" fill="#0F4C81" />

      {/* Cards no Dashboard */}
      <rect x="230" y="100" width="50" height="30" rx="4" fill="#0F4C81" fillOpacity="0.1" stroke="#0F4C81" strokeWidth="1" />
      <rect x="230" y="140" width="50" height="30" rx="4" fill="#2E8B57" fillOpacity="0.1" stroke="#2E8B57" strokeWidth="1" />
      <rect x="230" y="180" width="50" height="30" rx="4" fill="#F5A623" fillOpacity="0.1" stroke="#F5A623" strokeWidth="1" />

      {/* Ícone de Check */}
      <circle cx="255" cy="115" r="8" fill="#0F4C81" fillOpacity="0.2" />
      <path d="M251 115L254 118L259 112" stroke="#0F4C81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Elementos Flutuantes */}
      <circle cx="320" cy="60" r="20" fill="#F5A623" fillOpacity="0.2" />
      <text x="320" y="65" textAnchor="middle" fill="#F5A623" fontSize="12" fontWeight="bold">+</text>

      <circle cx="80" cy="60" r="15" fill="#2E8B57" fillOpacity="0.2" />
      <path d="M75 60L78 63L85 56" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Moedas flutuantes */}
      <ellipse cx="350" cy="150" rx="15" ry="8" fill="#F5A623" />
      <ellipse cx="350" cy="147" rx="15" ry="8" fill="#FFD700" />
      <text x="350" y="150" textAnchor="middle" fill="#B87600" fontSize="10" fontWeight="bold">$</text>

      <ellipse cx="50" cy="180" rx="12" ry="6" fill="#F5A623" />
      <ellipse cx="50" cy="177" rx="12" ry="6" fill="#FFD700" />
      <text x="50" y="180" textAnchor="middle" fill="#B87600" fontSize="8" fontWeight="bold">$</text>
    </svg>
  )
}

// Ilustração Isométrica - Prédio/Imobiliária
export function IllustrationBuilding({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Sombra do Prédio */}
      <ellipse cx="200" cy="280" rx="100" ry="20" fill="#0F4C81" fillOpacity="0.1" />

      {/* Prédio Principal */}
      <path
        d="M120 280V100L200 60L280 100V280H120Z"
        fill="#E6EEF5"
      />
      <path
        d="M200 60L280 100V280L200 240V60Z"
        fill="#C2D6E8"
      />
      <path
        d="M120 100L200 60L280 100L200 140L120 100Z"
        fill="#0F4C81"
      />

      {/* Janelas Lado Esquerdo */}
      <rect x="135" y="120" width="25" height="30" fill="#0F4C81" fillOpacity="0.3" />
      <rect x="170" y="120" width="25" height="30" fill="#F5A623" fillOpacity="0.5" />
      <rect x="135" y="160" width="25" height="30" fill="#F5A623" fillOpacity="0.5" />
      <rect x="170" y="160" width="25" height="30" fill="#0F4C81" fillOpacity="0.3" />
      <rect x="135" y="200" width="25" height="30" fill="#0F4C81" fillOpacity="0.3" />
      <rect x="170" y="200" width="25" height="30" fill="#F5A623" fillOpacity="0.5" />

      {/* Janelas Lado Direito */}
      <path d="M210 130L235 115V145L210 160V130Z" fill="#0F4C81" fillOpacity="0.3" />
      <path d="M245 115L270 100V130L245 145V115Z" fill="#F5A623" fillOpacity="0.5" />
      <path d="M210 170L235 155V185L210 200V170Z" fill="#F5A623" fillOpacity="0.5" />
      <path d="M245 155L270 140V170L245 185V155Z" fill="#0F4C81" fillOpacity="0.3" />
      <path d="M210 210L235 195V225L210 240V210Z" fill="#0F4C81" fillOpacity="0.3" />
      <path d="M245 195L270 180V210L245 225V195Z" fill="#F5A623" fillOpacity="0.5" />

      {/* Porta */}
      <rect x="175" y="240" width="30" height="40" fill="#0A3558" />
      <circle cx="200" cy="260" r="3" fill="#F5A623" />

      {/* Placa L8 */}
      <rect x="140" y="75" width="40" height="20" rx="3" fill="#0F4C81" />
      <text x="160" y="89" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">L8</text>

      {/* Elementos Decorativos */}
      <circle cx="60" cy="120" r="25" fill="#2E8B57" fillOpacity="0.2" />
      <circle cx="60" cy="120" r="15" fill="#2E8B57" fillOpacity="0.3" />

      <circle cx="340" cy="100" r="20" fill="#F5A623" fillOpacity="0.2" />
      <circle cx="340" cy="100" r="12" fill="#F5A623" fillOpacity="0.3" />

      {/* Escudo de Segurança */}
      <path
        d="M330 180L345 175V190C345 200 340 205 330 210C320 205 315 200 315 190V175L330 180Z"
        fill="#2E8B57"
        fillOpacity="0.3"
        stroke="#2E8B57"
        strokeWidth="2"
      />
      <path d="M325 190L328 193L335 185" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Documento/Contrato */}
      <rect x="50" y="200" width="35" height="45" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="1" />
      <path d="M58 215H78" stroke="#0F4C81" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 225H75" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 235H72" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Ilustração Isométrica - Parceria/Handshake
export function IllustrationPartnership({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Círculo de Fundo */}
      <circle cx="200" cy="150" r="100" fill="#0F4C81" fillOpacity="0.05" />
      <circle cx="200" cy="150" r="80" fill="#0F4C81" fillOpacity="0.05" />

      {/* Mãos */}
      {/* Mão Esquerda */}
      <path
        d="M100 160C100 160 130 140 150 150C170 160 170 170 180 170C190 170 200 160 200 160"
        stroke="#0F4C81"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 160C100 160 130 140 150 150C170 160 170 170 180 170C190 170 200 160 200 160"
        stroke="#E6EEF5"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Mão Direita */}
      <path
        d="M300 160C300 160 270 140 250 150C230 160 230 170 220 170C210 170 200 160 200 160"
        stroke="#0F4C81"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M300 160C300 160 270 140 250 150C230 160 230 170 220 170C210 170 200 160 200 160"
        stroke="#C2D6E8"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Braços */}
      <path d="M60 180L100 160" stroke="#0F4C81" strokeWidth="10" strokeLinecap="round" />
      <path d="M60 180L100 160" stroke="#E6EEF5" strokeWidth="6" strokeLinecap="round" />

      <path d="M340 180L300 160" stroke="#0F4C81" strokeWidth="10" strokeLinecap="round" />
      <path d="M340 180L300 160" stroke="#C2D6E8" strokeWidth="6" strokeLinecap="round" />

      {/* Ícones Flutuantes - Esquerda (L8) */}
      <rect x="70" y="80" width="60" height="40" rx="8" fill="#0F4C81" />
      <text x="100" y="105" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">L8</text>

      {/* Ícones Flutuantes - Direita (Cliente) */}
      <rect x="270" y="80" width="60" height="40" rx="8" fill="#2E8B57" />
      <path d="M290 100C290 95 295 90 300 90C305 90 310 95 310 100" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="300" cy="85" r="6" stroke="white" strokeWidth="2" fill="none" />

      {/* Elementos de Conexão */}
      <path d="M130 80L170 120" stroke="#F5A623" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M270 80L230 120" stroke="#F5A623" strokeWidth="2" strokeDasharray="4 4" />

      {/* Símbolo de União */}
      <circle cx="200" cy="130" r="15" fill="#F5A623" />
      <path d="M194 130L198 134L206 125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Estrelas de Sucesso */}
      <path d="M200 60L203 70L213 70L205 77L208 87L200 81L192 87L195 77L187 70L197 70Z" fill="#F5A623" />
      <path d="M140 200L142 206L148 206L143 210L145 216L140 212L135 216L137 210L132 206L138 206Z" fill="#F5A623" fillOpacity="0.5" />
      <path d="M260 200L262 206L268 206L263 210L265 216L260 212L255 216L257 210L252 206L258 206Z" fill="#F5A623" fillOpacity="0.5" />

      {/* Moedas */}
      <ellipse cx="80" cy="230" rx="20" ry="10" fill="#F5A623" />
      <ellipse cx="80" cy="225" rx="20" ry="10" fill="#FFD700" />

      <ellipse cx="320" cy="230" rx="20" ry="10" fill="#F5A623" />
      <ellipse cx="320" cy="225" rx="20" ry="10" fill="#FFD700" />
    </svg>
  )
}

// Ilustração Isométrica - Processo/Steps
export function IllustrationProcess({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Linha de Conexão */}
      <path
        d="M80 150H320"
        stroke="#E5E7EB"
        strokeWidth="4"
        strokeDasharray="8 8"
      />

      {/* Step 1 - Conversa */}
      <circle cx="80" cy="150" r="40" fill="#0F4C81" />
      <circle cx="80" cy="150" r="35" fill="#0F4C81" stroke="white" strokeWidth="2" />
      {/* Ícone de Telefone */}
      <path
        d="M70 145C70 142 72 140 75 140H78L80 148L77 151C77 151 78 156 82 160C86 164 90 164 90 164L93 161L100 164V168C100 170 98 172 95 172C80 172 68 160 70 145Z"
        fill="white"
      />
      <text x="80" y="200" textAnchor="middle" fill="#0F4C81" fontSize="14" fontWeight="bold">Conversa</text>

      {/* Step 2 - Diagnóstico */}
      <circle cx="200" cy="150" r="40" fill="#2E8B57" />
      <circle cx="200" cy="150" r="35" fill="#2E8B57" stroke="white" strokeWidth="2" />
      {/* Ícone de Lupa */}
      <circle cx="195" cy="145" r="12" stroke="white" strokeWidth="3" fill="none" />
      <path d="M204 154L212 162" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <text x="200" y="200" textAnchor="middle" fill="#2E8B57" fontSize="14" fontWeight="bold">Diagnóstico</text>

      {/* Step 3 - Implementação */}
      <circle cx="320" cy="150" r="40" fill="#F5A623" />
      <circle cx="320" cy="150" r="35" fill="#F5A623" stroke="white" strokeWidth="2" />
      {/* Ícone de Foguete */}
      <path
        d="M320 135C320 135 330 140 330 155L325 160L320 158L315 160L310 155C310 140 320 135 320 135Z"
        fill="white"
      />
      <circle cx="320" cy="148" r="4" fill="#F5A623" />
      <text x="320" y="200" textAnchor="middle" fill="#B87600" fontSize="14" fontWeight="bold">Implementação</text>

      {/* Setas de Progresso */}
      <path d="M125 150L155 150" stroke="#0F4C81" strokeWidth="3" fill="none" markerEnd="url(#arrow)" />
      <polygon points="155,145 165,150 155,155" fill="#0F4C81" />

      <path d="M245 150L275 150" stroke="#2E8B57" strokeWidth="3" fill="none" />
      <polygon points="275,145 285,150 275,155" fill="#2E8B57" />

      {/* Números */}
      <circle cx="80" cy="100" r="15" fill="white" stroke="#0F4C81" strokeWidth="2" />
      <text x="80" y="105" textAnchor="middle" fill="#0F4C81" fontSize="14" fontWeight="bold">1</text>

      <circle cx="200" cy="100" r="15" fill="white" stroke="#2E8B57" strokeWidth="2" />
      <text x="200" y="105" textAnchor="middle" fill="#2E8B57" fontSize="14" fontWeight="bold">2</text>

      <circle cx="320" cy="100" r="15" fill="white" stroke="#F5A623" strokeWidth="2" />
      <text x="320" y="105" textAnchor="middle" fill="#F5A623" fontSize="14" fontWeight="bold">3</text>

      {/* Tempo Estimado */}
      <text x="80" y="220" textAnchor="middle" fill="#6B7280" fontSize="10">30 min</text>
      <text x="200" y="220" textAnchor="middle" fill="#6B7280" fontSize="10">Gratuito</text>
      <text x="320" y="220" textAnchor="middle" fill="#6B7280" fontSize="10">7 dias</text>
    </svg>
  )
}

// Ilustração Isométrica - Economia/Savings
export function IllustrationSavings({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Cofre Isométrico */}
      <path
        d="M150 200L200 170L250 200V260L200 290L150 260V200Z"
        fill="#0F4C81"
      />
      <path
        d="M200 170L250 200V260L200 230V170Z"
        fill="#0A3558"
      />
      <path
        d="M150 200L200 170L250 200L200 230L150 200Z"
        fill="#3479B6"
      />

      {/* Fechadura */}
      <circle cx="200" cy="230" r="15" fill="#0A3558" />
      <circle cx="200" cy="230" r="10" fill="#F5A623" />
      <rect x="197" y="225" width="6" height="10" fill="#B87600" />

      {/* Moedas Empilhadas */}
      <ellipse cx="100" cy="240" rx="25" ry="12" fill="#F5A623" />
      <ellipse cx="100" cy="230" rx="25" ry="12" fill="#FFD700" />
      <ellipse cx="100" cy="220" rx="25" ry="12" fill="#F5A623" />
      <ellipse cx="100" cy="210" rx="25" ry="12" fill="#FFD700" />

      <ellipse cx="300" cy="250" rx="25" ry="12" fill="#F5A623" />
      <ellipse cx="300" cy="240" rx="25" ry="12" fill="#FFD700" />
      <ellipse cx="300" cy="230" rx="25" ry="12" fill="#F5A623" />

      {/* Gráfico de Economia */}
      <rect x="80" y="80" width="120" height="80" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2" />
      <path d="M95 140L115 120L135 130L175 100" stroke="#2E8B57" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="175" cy="100" r="5" fill="#2E8B57" />
      <text x="140" y="95" textAnchor="middle" fill="#2E8B57" fontSize="10" fontWeight="bold">-68%</text>

      {/* Card de Valor */}
      <rect x="220" y="80" width="100" height="60" rx="8" fill="#2E8B57" />
      <text x="270" y="105" textAnchor="middle" fill="white" fontSize="10">Economia</text>
      <text x="270" y="125" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">R$ 2.050</text>

      {/* Seta de Redução */}
      <path d="M50 150L50 180" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <polygon points="45,178 50,188 55,178" fill="#EF4444" />
      <text x="50" y="200" textAnchor="middle" fill="#EF4444" fontSize="10">R$ 6,00</text>

      {/* Seta para Economia */}
      <path d="M350 180L350 150" stroke="#2E8B57" strokeWidth="3" strokeLinecap="round" />
      <polygon points="345,152 350,142 355,152" fill="#2E8B57" />
      <text x="350" y="200" textAnchor="middle" fill="#2E8B57" fontSize="10">R$ 1,90</text>
    </svg>
  )
}

// Ilustração Hero - Combinação de elementos
export function IllustrationHero({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Fundo com Gradiente */}
      <defs>
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F4C81" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2E8B57" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <rect x="50" y="50" width="400" height="300" rx="20" fill="url(#heroGradient)" />

      {/* Dashboard Principal */}
      <rect x="100" y="80" width="200" height="150" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />

      {/* Header do Dashboard */}
      <rect x="100" y="80" width="200" height="30" rx="12" fill="#0F4C81" />
      <circle cx="115" cy="95" r="5" fill="#EF4444" />
      <circle cx="130" cy="95" r="5" fill="#F5A623" />
      <circle cx="145" cy="95" r="5" fill="#2E8B57" />
      <text x="200" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">L8 Dashboard</text>

      {/* Gráfico Principal */}
      <path d="M120 200L150 170L180 185L210 150L240 130L270 145" stroke="#0F4C81" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="270" cy="145" r="6" fill="#0F4C81" />

      {/* Barras */}
      <rect x="125" y="180" width="15" height="30" rx="2" fill="#2E8B57" fillOpacity="0.3" />
      <rect x="150" y="170" width="15" height="40" rx="2" fill="#2E8B57" fillOpacity="0.5" />
      <rect x="175" y="155" width="15" height="55" rx="2" fill="#2E8B57" fillOpacity="0.7" />
      <rect x="200" y="140" width="15" height="70" rx="2" fill="#2E8B57" />

      {/* Card Flutuante - Economia */}
      <rect x="280" y="100" width="140" height="80" rx="12" fill="white" stroke="#2E8B57" strokeWidth="2" />
      <circle cx="310" cy="130" r="20" fill="#2E8B57" fillOpacity="0.1" />
      <path d="M305 130L308 133L315 126" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="360" y="125" textAnchor="middle" fill="#6B7280" fontSize="10">Economia</text>
      <text x="360" y="145" textAnchor="middle" fill="#2E8B57" fontSize="18" fontWeight="bold">R$ 2.050</text>
      <text x="360" y="165" textAnchor="middle" fill="#6B7280" fontSize="10">/mês</text>

      {/* Card Flutuante - Parceiros */}
      <rect x="280" y="200" width="140" height="70" rx="12" fill="white" stroke="#F5A623" strokeWidth="2" />
      <text x="350" y="225" textAnchor="middle" fill="#6B7280" fontSize="10">Imobiliárias</text>
      <text x="350" y="250" textAnchor="middle" fill="#F5A623" fontSize="24" fontWeight="bold">400+</text>

      {/* Prédio Isométrico Simplificado */}
      <path d="M80 320V220L120 200L160 220V320H80Z" fill="#E6EEF5" stroke="#0F4C81" strokeWidth="2" />
      <rect x="90" y="240" width="20" height="25" fill="#0F4C81" fillOpacity="0.3" />
      <rect x="120" y="240" width="20" height="25" fill="#F5A623" fillOpacity="0.5" />
      <rect x="90" y="280" width="20" height="25" fill="#F5A623" fillOpacity="0.5" />
      <rect x="120" y="280" width="20" height="25" fill="#0F4C81" fillOpacity="0.3" />

      {/* Elementos Decorativos */}
      <circle cx="450" cy="100" r="30" fill="#F5A623" fillOpacity="0.2" />
      <circle cx="450" cy="100" r="20" fill="#F5A623" fillOpacity="0.3" />
      <text x="450" y="105" textAnchor="middle" fill="#F5A623" fontSize="16" fontWeight="bold">$</text>

      <circle cx="60" cy="380" r="25" fill="#2E8B57" fillOpacity="0.2" />
      <path d="M50 380L58 388L70 375" stroke="#2E8B57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Escudo de Segurança */}
      <path
        d="M430 280L450 270V295C450 310 443 318 430 325C417 318 410 310 410 295V270L430 280Z"
        fill="#0F4C81"
        fillOpacity="0.1"
        stroke="#0F4C81"
        strokeWidth="2"
      />
      <path d="M422 295L428 301L438 290" stroke="#0F4C81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

