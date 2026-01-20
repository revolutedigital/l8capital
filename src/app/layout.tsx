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
        {/* Instant Preloader - CSS only with inline SVG, no external requests */}
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
            background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
            transition: 'opacity 0.2s ease-out',
          }}
        >
          {/* Inline base64 logo - no HTTP request needed */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="data:image/webp;base64,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"
            alt=""
            width={96}
            height={96}
            style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 20 }}
          />
          <p style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 2 }}>L8 Capital</p>
          <p style={{ color: '#A8A8A0', fontSize: 12 }}>Sua imobiliária mais forte</p>
          <div style={{ width: 140, height: 3, background: '#2D2D2D', borderRadius: 2, marginTop: 20, overflow: 'hidden' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#C9A227',
                borderRadius: 2,
                animation: 'preloader-progress 0.4s ease-out forwards',
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
              (function() {
                var hidePreloader = function() {
                  setTimeout(function() {
                    var p = document.getElementById('instant-preloader');
                    if (p) {
                      p.classList.add('preloader-hidden');
                      setTimeout(function() { p.remove(); }, 200);
                    }
                  }, 400);
                };
                if (document.readyState === 'complete') {
                  hidePreloader();
                } else {
                  window.addEventListener('load', hidePreloader);
                }
              })();
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
