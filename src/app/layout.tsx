import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
import { GoogleAnalytics, WebVitals } from '@/components/analytics'
import { Providers } from '@/components/Providers'
import { ScrollToAnchor } from '@/components/ScrollToAnchor'
import { SITE_CONFIG } from '@/lib/constants'
import '@/styles/globals.css'

// Body font - Inter (variable font)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Display font - Plus Jakarta Sans (variable font)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'seguros para imobiliárias',
    'seguro fiança locatícia',
    'redução de custos imobiliária',
    'plataforma para imobiliárias',
    'gestão financeira imobiliária',
    'seguro incêndio aluguel',
    'capitalização locatícia',
    'L8 Capital',
    'imobiliária São Paulo',
    'imobiliária Centro-Oeste',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    creator: '@l8capital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
        {/* Preload critical logo for instant preloader */}
        <link rel="preload" href="/images/logos/l8-logo_transp_branco-sm.webp" as="image" type="image/webp" />
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Prefers-color-scheme fallback before JS loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body">
        {/* Instant Preloader - CSS only, no JS needed, appears immediately */}
        <div
          id="instant-preloader"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom right, #1A1A1A, #0A0A0A)',
            transition: 'opacity 0.3s ease-out',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/l8-logo_transp_branco-sm.webp"
            alt="L8 Capital"
            width={128}
            height={128}
            fetchPriority="high"
            style={{ width: 96, height: 96, objectFit: 'contain', marginBottom: 24 }}
          />
          <p style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 4 }}>L8 Capital</p>
          <p style={{ color: '#A8A8A0', fontSize: 14 }}>Sua imobiliária mais forte</p>
          <div style={{ width: 160, height: 4, background: '#2D2D2D', borderRadius: 2, marginTop: 24, overflow: 'hidden' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#C9A227',
                borderRadius: 2,
                animation: 'preloader-progress 0.8s ease-out forwards',
              }}
            />
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes preloader-progress {
                from { width: 0%; }
                to { width: 100%; }
              }
              .preloader-hidden {
                opacity: 0 !important;
                pointer-events: none !important;
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  var p = document.getElementById('instant-preloader');
                  if (p) {
                    p.classList.add('preloader-hidden');
                    setTimeout(function() { p.remove(); }, 300);
                  }
                }, 800);
              });
            `,
          }}
        />
        <GoogleAnalytics />
        <WebVitals />
        <ScrollToAnchor />
        <Providers>
          {/* Skip Link for Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-primary-600 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:font-medium"
          >
            Pular para conteúdo principal
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
