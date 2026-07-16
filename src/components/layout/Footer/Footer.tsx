import Container from '../../common/Container'
import SocialLinks from '../../ui/SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display font-bold text-[var(--color-text)]">Cheab Solinda</p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Frontend Developer · Built with React + Tailwind CSS
          </p>
        </div>
        <SocialLinks />
      </Container>
      <p className="mt-6 text-center font-mono text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  )
}
