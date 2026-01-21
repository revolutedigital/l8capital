'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'

// Server snapshot always returns false
const getServerSnapshot = () => false

// Subscribe to media query changes
const subscribe = (callback: () => void) => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  mediaQuery.addEventListener('change', callback)
  return () => mediaQuery.removeEventListener('change', callback)
}

// Get current snapshot
const getSnapshot = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
