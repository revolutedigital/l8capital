'use client'

import {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  useCallback,
  Children,
  isValidElement,
  cloneElement,
  type ReactNode,
  type KeyboardEvent,
} from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionContextType {
  openItems: string[]
  toggleItem: (value: string) => void
  type: 'single' | 'multiple'
  itemValues: string[]
  registerItem: (value: string) => void
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

interface AccordionProps {
  children: ReactNode
  type?: 'single' | 'multiple'
  defaultValue?: string[]
  className?: string
}

export function Accordion({
  children,
  type = 'single',
  defaultValue = [],
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue)
  const [itemValues, setItemValues] = useState<string[]>([])
  const triggersRef = useRef<Map<string, HTMLButtonElement>>(new Map())

  const registerItem = useCallback((value: string) => {
    setItemValues((prev) => (prev.includes(value) ? prev : [...prev, value]))
  }, [])

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value])
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      )
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, currentValue: string) => {
    const currentIndex = itemValues.indexOf(currentValue)
    let newIndex = currentIndex

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        newIndex = (currentIndex + 1) % itemValues.length
        break
      case 'ArrowUp':
        e.preventDefault()
        newIndex = (currentIndex - 1 + itemValues.length) % itemValues.length
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = itemValues.length - 1
        break
      default:
        return
    }

    const newValue = itemValues[newIndex]
    triggersRef.current.get(newValue)?.focus()
  }

  return (
    <AccordionContext.Provider
      value={{
        openItems,
        toggleItem,
        type,
        itemValues,
        registerItem,
      }}
    >
      <div
        className={cn('divide-y divide-gray-200 dark:divide-gray-700', className)}
        role="region"
        onKeyDown={(e) => {
          const target = e.target as HTMLElement
          const value = target.closest('[data-accordion-trigger]')?.getAttribute('data-value')
          if (value) handleKeyDown(e, value)
        }}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child as React.ReactElement<{ triggersRef?: typeof triggersRef }>, {
              triggersRef,
            })
          }
          return child
        })}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  children: ReactNode
  className?: string
  triggersRef?: React.MutableRefObject<Map<string, HTMLButtonElement>>
}

export function AccordionItem({ value, children, className, triggersRef }: AccordionItemProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionItem must be used within Accordion')

  const { registerItem } = context

  // Register on mount
  useEffect(() => {
    registerItem(value)
  }, [registerItem, value])

  return (
    <div className={cn('py-4', className)} data-value={value}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(
            child as React.ReactElement<{
              value?: string
              triggersRef?: typeof triggersRef
            }>,
            {
              value,
              triggersRef,
            }
          )
        }
        return child
      })}
    </div>
  )
}

interface AccordionTriggerProps {
  children: ReactNode
  value?: string
  className?: string
  triggersRef?: React.MutableRefObject<Map<string, HTMLButtonElement>>
}

export function AccordionTrigger({
  children,
  value = '',
  className,
  triggersRef,
}: AccordionTriggerProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionTrigger must be used within Accordion')

  const { openItems, toggleItem } = context
  const isOpen = openItems.includes(value)

  return (
    <button
      type="button"
      ref={(el) => {
        if (el && triggersRef) {
          triggersRef.current.set(value, el)
        }
      }}
      onClick={() => toggleItem(value)}
      className={cn(
        'flex w-full items-center justify-between text-left',
        'font-semibold text-gray-900 dark:text-white',
        'hover:text-primary-600 dark:hover:text-primary-400',
        'transition-colors duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        className
      )}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
      id={`accordion-trigger-${value}`}
      data-accordion-trigger
      data-value={value}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-5 w-5 text-gray-500 transition-transform duration-300',
          isOpen && 'rotate-180'
        )}
        aria-hidden="true"
      />
    </button>
  )
}

interface AccordionContentProps {
  children: ReactNode
  value?: string
  className?: string
}

export function AccordionContent({ children, value = '', className }: AccordionContentProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionContent must be used within Accordion')

  const { openItems } = context
  const isOpen = openItems.includes(value)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
          id={`accordion-content-${value}`}
          role="region"
          aria-labelledby={`accordion-trigger-${value}`}
        >
          <div className={cn('pt-4 text-gray-700 dark:text-gray-300 leading-relaxed', className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
