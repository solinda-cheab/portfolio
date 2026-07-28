import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function Card({ children, className = '', onClick }: CardProps) {
  const Component = onClick ? 'button' : 'div'

  return (
    <Component
      className={`rounded-[var(--radius)] border border-white/10 bg-[var(--color-surface)] shadow-sm ring-1 ring-foreground/5 transition-all duration-300 hover:shadow-md hover:border-white/20 dark:ring-foreground/10 ${className}`}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      {children}
    </Component>
  )
}
