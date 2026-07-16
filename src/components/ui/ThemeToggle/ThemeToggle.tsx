import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../../hooks/useTheme'

export default function ThemeToggle() {
  const { isLight, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
