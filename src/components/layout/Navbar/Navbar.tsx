import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../../common/Container'
import ThemeToggle from '../../ui/ThemeToggle'
import { useScrollSpy } from '../../../hooks/useScrollSpy'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id))

  const handleNavClick = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-bg)]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="font-display text-lg font-bold text-[var(--color-text)]"
        >
          Solinda<span className="text-[var(--color-accent)]">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeId === item.id
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center text-[var(--color-text)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-white/10 bg-[var(--color-bg)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium ${
                  activeId === item.id
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-muted)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
