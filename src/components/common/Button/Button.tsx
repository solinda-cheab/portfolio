import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  onClick?: () => void
  className?: string
}

export default function Button({ children, href, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const base =
    'inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius)] border border-transparent bg-clip-padding px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-150 outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30'

  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]'
      : 'text-[var(--color-text)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text)] border border-white/10'

  const allClasses = `${base} ${styles} ${className}`

  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  )
}
