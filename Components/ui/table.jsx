import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Table({ className = '', ...props }) {
  return (
    <table
      className={cn('w-full caption-bottom text-sm text-slate-700', className)}
      {...props}
    />
  )
}

export function TableHeader({ className = '', ...props }) {
  return <thead className={cn('[&_tr]:border-b', className)} {...props} />
}

export function TableBody({ className = '', ...props }) {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
}

export function TableRow({ className = '', ...props }) {
  return (
    <tr
      className={cn(
        'border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50/80',
        className,
      )}
      {...props}
    />
  )
}

export function TableHead({ className = '', ...props }) {
  return (
    <th
      className={cn(
        'h-10 px-3 text-left align-middle text-xs font-semibold text-slate-500',
        className,
      )}
      {...props}
    />
  )
}

export function TableCell({ className = '', ...props }) {
  return (
    <td
      className={cn('p-3 align-middle text-sm text-slate-700', className)}
      {...props}
    />
  )
}
