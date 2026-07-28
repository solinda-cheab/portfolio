import Container from '../../common/Container'
import SocialLinks from '../../ui/SocialLinks'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg)] py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-[var(--color-text)]">Cheab Solinda</p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            Frontend Developer · Built with React + Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-6">
          <SocialLinks />
          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-[var(--radius)] border border-white/10 text-[var(--color-text-muted)] transition-all duration-150 hover:border-white/20 hover:text-[var(--color-text)] hover:shadow-md"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </Container>
      <p className="mt-8 text-center font-mono text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} Cheab Solinda. All rights reserved.
      </p>
    </footer>
  )
}
