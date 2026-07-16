import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  onClick?: () => void
}

export default function Button({ children, href, variant = 'primary', onClick }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2'

  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-white hover:bg-blue-500'
      : 'border border-white/15 text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'

  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  )
}
