import Container from '../../components/common/Container'
import Button from '../../components/common/Button'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Signature element: a quiet sudoku-grid motif nodding to the flagship
          competition platform project, with one cell resolved in accent color. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.35]">
        <svg
          viewBox="0 0 360 360"
          className="h-[420px] w-[420px] sm:h-[560px] sm:w-[560px]"
          aria-hidden="true"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={40 * (i + 1)}
              y1="0"
              x2={40 * (i + 1)}
              y2="360"
              stroke={i % 3 === 2 ? 'var(--color-primary)' : 'var(--color-text-muted)'}
              strokeOpacity={i % 3 === 2 ? 0.35 : 0.12}
              strokeWidth={i % 3 === 2 ? 1.4 : 0.6}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={40 * (i + 1)}
              x2="360"
              y2={40 * (i + 1)}
              stroke={i % 3 === 2 ? 'var(--color-primary)' : 'var(--color-text-muted)'}
              strokeOpacity={i % 3 === 2 ? 0.35 : 0.12}
              strokeWidth={i % 3 === 2 ? 1.4 : 0.6}
            />
          ))}
          <rect
            x="160"
            y="160"
            width="40"
            height="40"
            fill="var(--color-accent)"
            opacity="0.55"
            className="animate-pulse"
          />
        </svg>
      </div>

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="font-mono text-sm tracking-wide text-[var(--color-accent)]">
            Hi, I'm
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[var(--color-text)] sm:text-6xl">
            Cheab Solinda
          </h1>
          <p className="mt-4 text-lg font-semibold text-[var(--color-text)] sm:text-xl">
            Frontend Developer{' '}
            <span className="text-[var(--color-text-muted)] font-normal">
              &amp; Computer Science Student
            </span>
          </p>
          <p className="mt-5 max-w-xl text-[var(--color-text-muted)]">
            I build responsive, accessible, and modern web applications using React
            and modern web technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>
            <Button variant="ghost" href="/resume.pdf">
              Download Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
