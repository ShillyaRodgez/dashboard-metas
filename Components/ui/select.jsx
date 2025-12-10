import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SelectContext = React.createContext(null)

function useSelect() {
  const ctx = React.useContext(SelectContext)
  if (!ctx) {
    throw new Error('Select components must be used within <Select>')
  }
  return ctx
}

export function Select({ value, onValueChange, children }) {
  const [open, setOpen] = React.useState(false)

  const handleChange = (newValue) => {
    if (onValueChange) onValueChange(newValue)
  }

  return (
    <SelectContext.Provider
      value={{ value, onValueChange: handleChange, open, setOpen }}
    >
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  )
}

export function SelectTrigger({ className = '', children, ...props }) {
  const { open, setOpen, value } = useSelect()

  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded={open}
      className={cn(
        'flex w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        className,
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
    </button>
  )
}

export function SelectValue({ placeholder }) {
  const { value } = useSelect()
  return (
    <span className="truncate text-left text-sm text-slate-700">
      {value || placeholder}
    </span>
  )
}

export function SelectContent({ className = '', children }) {
  const { open } = useSelect()

  if (!open) return null

  return (
    <div
      className={cn(
        'absolute z-50 mt-1 max-h-64 w-full overflow-auto rounded-md border border-slate-200 bg-white py-1 text-sm shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function SelectItem({ value, className = '', children, ...props }) {
  const { onValueChange, setOpen } = useSelect()

  return (
    <div
      role="option"
      tabIndex={0}
      className={cn(
        'cursor-pointer select-none px-3 py-2 text-sm text-slate-700 hover:bg-slate-100',
        className,
      )}
      onClick={() => {
        onValueChange(value)
        setOpen(false)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onValueChange(value)
          setOpen(false)
        }
      }}
      {...props}
    >
      {children}
    </div>
  )
}
