'use client'

import {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  useCallback,
  useId,
  Children,
  isValidElement,
  cloneElement,
  type ReactNode,
  type KeyboardEvent,
} from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface TabsContextType {
  activeTab: string
  setActiveTab: (value: string) => void
  tabValues: string[]
  registerTab: (value: string) => void
  tabsId: string
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

interface TabsProps {
  children: ReactNode
  defaultValue: string
  className?: string
}

export function Tabs({ children, defaultValue, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)
  const [tabValues, setTabValues] = useState<string[]>([])
  const tabsId = useId()

  const registerTab = useCallback((value: string) => {
    setTabValues((prev) => (prev.includes(value) ? prev : [...prev, value]))
  }, [])

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, tabValues, registerTab, tabsId }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

interface TabsListProps {
  children: ReactNode
  className?: string
}

export function TabsList({ children, className }: TabsListProps) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('TabsList must be used within Tabs')

  const { activeTab, setActiveTab, tabValues } = context
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = tabValues.indexOf(activeTab)
    let newIndex = currentIndex

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        newIndex = (currentIndex + 1) % tabValues.length
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        newIndex = (currentIndex - 1 + tabValues.length) % tabValues.length
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = tabValues.length - 1
        break
      default:
        return
    }

    setActiveTab(tabValues[newIndex])
    tabsRef.current[newIndex]?.focus()
  }

  // Clone children and add refs
  const enhancedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement<{ ref?: React.Ref<HTMLButtonElement> }>, {
        ref: (el: HTMLButtonElement | null) => {
          tabsRef.current[index] = el
        },
      })
    }
    return child
  })

  return (
    <div
      className={cn('inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg', className)}
      role="tablist"
      aria-orientation="horizontal"
      onKeyDown={handleKeyDown}
    >
      {enhancedChildren}
    </div>
  )
}

interface TabsTriggerProps {
  children: ReactNode
  value: string
  className?: string
}

export function TabsTrigger({ children, value, className }: TabsTriggerProps) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('TabsTrigger must be used within Tabs')

  const { activeTab, setActiveTab, registerTab, tabsId } = context
  const isActive = activeTab === value

  // Register this tab value on mount
  useEffect(() => {
    registerTab(value)
  }, [registerTab, value])

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveTab(value)}
      className={cn(
        'relative px-4 py-2 text-sm font-medium rounded-xl',
        'transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        isActive
          ? 'text-primary-700 dark:text-white'
          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10',
        className
      )}
    >
      {isActive && (
        <motion.div
          layoutId={`activeTab-${tabsId}`}
          className="absolute inset-0 bg-gray-200 dark:bg-white/20 rounded-xl shadow-sm"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )
}

interface TabsContentProps {
  children: ReactNode
  value: string
  className?: string
}

export function TabsContent({ children, value, className }: TabsContentProps) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('TabsContent must be used within Tabs')

  const { activeTab } = context

  if (activeTab !== value) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={className}
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
    >
      {children}
    </motion.div>
  )
}
