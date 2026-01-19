'use client'

import { forwardRef, type InputHTMLAttributes } from 'react'
import { useIMask } from 'react-imask'
import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle } from 'lucide-react'

export interface PhoneInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  error?: string
  success?: boolean
  hint?: string
  required?: boolean
  onValueChange?: (value: string) => void
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, label, error, success, hint, id, required, onValueChange, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    const { ref: maskRef } = useIMask(
      {
        mask: '(00) 00000-0000',
        lazy: true,
      },
      {
        onAccept: (value, mask) => {
          if (onValueChange) {
            // Return only numbers
            onValueChange(mask.unmaskedValue)
          }
        },
      }
    )

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-hidden="true">*</span>
            )}
          </label>
        )}
        <div className="relative">
          <input
            ref={(el) => {
              // Combine refs
              if (typeof ref === 'function') ref(el)
              else if (ref) ref.current = el
              maskRef.current = el
            }}
            type="tel"
            id={inputId}
            inputMode="numeric"
            className={cn(
              `
              w-full h-12 px-4
              bg-white dark:bg-gray-800
              border rounded-lg
              text-gray-900 dark:text-white
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2
            `,
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                : success
                  ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
                  : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500/20',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {(error || success) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {error ? (
                <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
              ) : success ? (
                <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
              ) : null}
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-gray-500">
            {hint}
          </p>
        )}
      </div>
    )
  }
)

PhoneInput.displayName = 'PhoneInput'

export { PhoneInput }
