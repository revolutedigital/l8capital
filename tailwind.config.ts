import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // PRIMARY - Preto Premium (Elegância, Sofisticação)
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
        // SECONDARY - Cinza Warm (Suporte, Neutralidade Elegante)
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
        // ACCENT - Dourado Premium (CTAs, Exclusividade)
        accent: {
          50: '#FBF8F0',
          100: '#F7F0DC',
          200: '#EFE1B8',
          300: '#E5CD8A',
          400: '#D9B85C',
          500: '#C9A227', // BASE - Dourado Premium
          600: '#B8922A',
          700: '#967720',
          800: '#745C18',
          900: '#524110',
          950: '#302608',
        },
      },
      fontFamily: {
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.925rem + 0.375vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2.125rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.75rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.0rem)',
        'fluid-5xl': 'clamp(3rem, 2.25rem + 3.75vw, 4.5rem)',
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 6rem)',
        'container-x': 'clamp(1rem, 5vw, 5rem)',
      },
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(10, 10, 10, 0.25)',
        'primary-lg': '0 10px 25px -5px rgba(10, 10, 10, 0.3)',
        'accent': '0 4px 14px 0 rgba(201, 162, 39, 0.4)',
        'accent-lg': '0 10px 25px -5px rgba(201, 162, 39, 0.45)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-subtle': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
