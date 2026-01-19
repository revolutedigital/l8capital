'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Component to handle smooth scroll to anchor links when navigating between pages
 *
 * Next.js doesn't automatically scroll to anchors when navigating from a different page.
 * This component detects hash changes and scrolls to the target element smoothly.
 */
export function ScrollToAnchor() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash

    if (hash) {
      // Remove the # from the hash to get the element ID
      const id = hash.replace('#', '')

      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(id)

        if (element) {
          // Scroll to the element smoothly
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)
    } else {
      // If no hash, scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname])

  // Also listen for hash changes on the same page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash

      if (hash) {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return null
}
