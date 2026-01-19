'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      })
    }

    // Send to analytics in production using existing gtag from GoogleAnalytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = window.gtag as (
        command: string,
        action: string,
        params?: Record<string, unknown>
      ) => void

      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      })
    }
  })

  return null
}
