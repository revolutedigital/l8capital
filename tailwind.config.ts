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
        // PRIMARY - Azul Profundo (Confiança, Tecnologia)
        primary: {
          50: '#E6EEF5',
          100: '#C2D6E8',
          200: '#9ABCDA',
          300: '#72A2CC',
          400: '#538DC1',
          500: '#3479B6',
          600: '#0F4C81', // BASE
          700: '#0D4070',
          800: '#0A3558', // DARK
          900: '#072540',
          950: '#041626',
        },
        // SECONDARY - Verde Sucesso (Crescimento, Resultado)
        secondary: {
          50: '#E8F5EE',
          100: '#C7E8D5',
          200: '#A3DABB',
          300: '#7FCCA0',
          400: '#64C18B',
          500: '#48B676',
          600: '#2E8B57', // BASE
          700: '#277549',
          800: '#1F5F3B',
          900: '#18492E',
          950: '#0F2E1D',
        },
        // ACCENT - Dourado (CTAs, Destaques)
        accent: {
          50: '#FEF7E6',
          100: '#FDECC2',
          200: '#FBDF99',
          300: '#F9D170',
          400: '#F7C34A',
          500: '#F5A623', // BASE
          600: '#E09000',
          700: '#B87600',
          800: '#8F5C00',
          900: '#664200',
          950: '#3D2700',
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
        'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)',
        'fluid-5xl': 'clamp(3rem, 2.25rem + 3.75vw, 4.5rem)',
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 6rem)',
        'container-x': 'clamp(1rem, 5vw, 5rem)',
      },
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(15, 76, 129, 0.35)',
        'primary-lg': '0 10px 25px -5px rgba(15, 76, 129, 0.4)',
        'accent': '0 4px 14px 0 rgba(245, 166, 35, 0.35)',
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
