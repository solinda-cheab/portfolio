import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../../common/Container'
import ThemeToggle from '../../ui/ThemeToggle'
import CertificateDialog from '../../common/CertificateDialog'
import { useScrollSpy } from '../../../hooks/useScrollSpy'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openCerts, setOpenCerts] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleOpenCerts = () => {
    setOpen(false)
    setOpenCerts(true)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--color-bg)]/80 backdrop-blur transition-all duration-300 ${
        scrolled ? 'border-white/10 shadow-sm' : 'border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="font-display text-lg font-bold tracking-tight text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
        >
          Solinda<span className="text-[var(--color-accent)]">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeId === item.id
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {activeId === item.id && (
                <span className="absolute -bottom-px left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--color-accent)]" />
              )}
              {item.label}
            </button>
          ))}
          <button
            onClick={handleOpenCerts}
            className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] hover:bg-white/5"
          >
            Certificates
          </button>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-[var(--radius)] text-[var(--color-text)] transition-colors hover:bg-white/5 md:hidden"
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
                className={`rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  activeId === item.id
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleOpenCerts}
              className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-[var(--color-text-muted)]"
            >
              Certificates
            </button>
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}

      <CertificateDialog open={openCerts} onClose={() => setOpenCerts(false)} />
    </header>
  )
}
