import type { ReactNode } from 'react'

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-[var(--color-surface)] p-6 transition-colors duration-200 hover:border-[var(--color-primary)]/50 ${className}`}
    >
      {children}
    </div>
  )
}
