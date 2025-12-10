import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Card({ className = '', ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({ className = '', ...props }) {
  return <div className={cn('flex flex-col gap-1 p-6', className)} {...props} />
}

export function CardTitle({ className = '', ...props }) {
  return (
    <h3
      className={cn('text-lg font-semibold leading-none tracking-tight text-slate-900', className)}
      {...props}
    />
  )
}

export function CardContent({ className = '', ...props }) {
  return <div className={cn('p-6 pt-0', className)} {...props} />
}
