import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const variants = {
  default:
    'border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-100 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
  secondary:
    'border border-slate-200 bg-slate-50 text-slate-700 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
}

export function Badge({ variant = 'default', className = '', ...props }) {
  return (
    <span className={cn(variants[variant] || variants.default, className)} {...props} />
  )
}
