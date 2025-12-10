import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const baseClasses =
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  default: 'bg-slate-900 text-white hover:bg-slate-800',
  outline: 'border border-slate-200 bg-white hover:bg-slate-50 text-slate-900',
  ghost: 'bg-transparent hover:bg-slate-100 text-slate-900',
}

export function Button({ variant = 'default', className = '', ...props }) {
  return (
    <button
      className={cn(baseClasses, variants[variant] || variants.default, className)}
      {...props}
    />
  )
}
