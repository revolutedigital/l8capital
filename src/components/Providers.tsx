'use client'

import { type ReactNode } from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { GlobalAnimations } from './animations'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary>
      {/* Global animation components */}
      <GlobalAnimations
        enablePreloader={false}
        enableCursor={false}
        enableScrollProgress={true}
      />
      {children}
    </ErrorBoundary>
  )
}
