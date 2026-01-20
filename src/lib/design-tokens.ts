/**
 * L8 Capital Design Tokens
 * Centralized design system values for consistency across the application
 */

// ===========================================
// COLORS
// ===========================================

export const colors = {
  // Primary - Premium Black (Elegance, Sophistication)
  primary: {
    50: '#F5F5F5',
    100: '#E8E8E8',
    200: '#D1D1D1',
    300: '#B0B0B0',
    400: '#888888',
    500: '#6A6A6A',
    600: '#4A4A4A',
    700: '#2D2D2D',
    800: '#1A1A1A',
    900: '#0A0A0A', // BASE
    950: '#050505',
  },
  // Secondary - Warm Gray (Support, Elegant Neutrality)
  secondary: {
    50: '#FAFAF8',
    100: '#F5F5F3',
    200: '#E8E8E4',
    300: '#D4D4CE',
    400: '#A8A8A0',
    500: '#7A7A72',
    600: '#5C5C56', // BASE
    700: '#4A4A45',
    800: '#3A3A36',
    900: '#2A2A27',
    950: '#1A1A18',
  },
  // Accent - Premium Gold (CTAs, Exclusivity)
  accent: {
    50: '#FBF8F0',
    100: '#F7F0DC',
    200: '#EFE1B8',
    300: '#E5CD8A',
    400: '#D9B85C',
    500: '#C9A227', // BASE - Premium Gold
    600: '#B8922A',
    700: '#967720',
    800: '#745C18',
    900: '#524110',
    950: '#302608',
  },
  // Semantic colors
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
} as const

// ===========================================
// TYPOGRAPHY
// ===========================================

export const typography = {
  fontFamily: {
    display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
    body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
    base: 'clamp(1rem, 0.925rem + 0.375vw, 1.125rem)',
    lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
    xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
    '2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2.125rem)',
    '3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.75rem)',
    '4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.0rem)',
    '5xl': 'clamp(3rem, 2.25rem + 3.75vw, 4.5rem)',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const

// ===========================================
// SPACING
// ===========================================

export const spacing = {
  section: 'clamp(4rem, 8vw, 6rem)',
  containerX: 'clamp(1rem, 5vw, 5rem)',
  gap: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
} as const

// ===========================================
// BORDERS
// ===========================================

export const borders = {
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },
  width: {
    thin: '1px',
    medium: '2px',
    thick: '4px',
  },
} as const

// ===========================================
// SHADOWS
// ===========================================

export const shadows = {
  sm: '0 1px 2px 0 rgba(10, 10, 10, 0.05)',
  md: '0 4px 6px -1px rgba(10, 10, 10, 0.1)',
  lg: '0 10px 15px -3px rgba(10, 10, 10, 0.1)',
  xl: '0 20px 25px -5px rgba(10, 10, 10, 0.1)',
  '2xl': '0 25px 50px -12px rgba(10, 10, 10, 0.25)',
  primary: '0 4px 14px 0 rgba(10, 10, 10, 0.25)',
  primaryLg: '0 10px 25px -5px rgba(10, 10, 10, 0.3)',
  accent: '0 4px 14px 0 rgba(201, 162, 39, 0.4)',
  accentLg: '0 10px 25px -5px rgba(201, 162, 39, 0.45)',
} as const

// ===========================================
// TRANSITIONS
// ===========================================

export const transitions = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const

// ===========================================
// BREAKPOINTS
// ===========================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// ===========================================
// Z-INDEX
// ===========================================

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  toast: 80,
  skip: 100,
} as const

// ===========================================
// COMPONENT TOKENS
// ===========================================

export const components = {
  button: {
    height: {
      sm: '2.5rem', // 40px
      md: '3rem',   // 48px
      lg: '3.5rem', // 56px
    },
    padding: {
      sm: '0 1.25rem',
      md: '0 1.75rem',
      lg: '0 2.25rem',
    },
  },
  input: {
    height: {
      sm: '2.5rem',
      md: '3rem',
      lg: '3.5rem',
    },
  },
  card: {
    padding: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
    },
  },
  touchTarget: {
    min: '44px', // WCAG 2.5.5 minimum touch target size
  },
} as const

// ===========================================
// EXPORTS
// ===========================================

export const tokens = {
  colors,
  typography,
  spacing,
  borders,
  shadows,
  transitions,
  breakpoints,
  zIndex,
  components,
} as const

export type DesignTokens = typeof tokens
