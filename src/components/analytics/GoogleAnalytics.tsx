'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Funções de tracking para usar em componentes
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackCTAClick = (ctaName: string, ctaText: string) => {
  trackEvent('cta_click', 'conversion', `${ctaName}: ${ctaText}`)
}

export const trackFormStart = (formName: string) => {
  trackEvent('form_start', 'conversion', formName)
}

export const trackFormSubmit = (formName: string, source: string) => {
  trackEvent('generate_lead', 'conversion', `${formName} - ${source}`)
}

export const trackScrollDepth = (depth: string) => {
  trackEvent('scroll_depth', 'engagement', depth)
}

export const trackFAQExpand = (question: string) => {
  trackEvent('faq_expand', 'engagement', question)
}

export const trackTabClick = (tabName: string) => {
  trackEvent('tab_click', 'engagement', tabName)
}

export const trackOutboundLink = (url: string, label: string) => {
  trackEvent('click', 'outbound', `${label}: ${url}`)
}

// Adicionar tipos para window.gtag
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      targetOrDate: string | Date,
      params?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}
