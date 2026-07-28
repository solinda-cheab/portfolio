import Container from '../../components/common/Container'
import Button from '../../components/common/Button'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.15]">
        <svg
          viewBox="0 0 360 360"
          className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]"
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
              strokeOpacity={i % 3 === 2 ? 0.4 : 0.1}
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
              strokeOpacity={i % 3 === 2 ? 0.4 : 0.1}
              strokeWidth={i % 3 === 2 ? 1.4 : 0.6}
            />
          ))}
          <rect
            x="160"
            y="160"
            width="40"
            height="40"
            fill="var(--color-accent)"
            opacity="0.5"
            className="animate-pulse"
          />
        </svg>
      </div>

      <Container className="relative">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-mono text-sm tracking-wide text-[var(--color-accent)]">
            Hi, I'm
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
            Cheab <span className="text-gradient">Solinda</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
            Frontend Developer{' '}
            <span className="text-[var(--color-text-muted)] font-normal">
              &amp; Computer Science Student
            </span>
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            I build responsive, accessible, and modern web applications using React
            and modern web technologies. Focused on clean code, performance, and user experience.
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
