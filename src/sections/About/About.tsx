import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import { education } from '../../data/education'

export default function About() {
  const current = education[0]

  return (
    <section id="about" className="py-20">
      <Container>
        <SectionTitle eyebrow="01 · About" title="About Me" />
        <div className="grid gap-8 lg:grid-cols-3">
          <p className="text-lg leading-relaxed text-[var(--color-text-muted)] lg:col-span-2">
            I'm a Computer Science student passionate about frontend development. I enjoy
            building clean, responsive web applications with React and modern web
            technologies. I'm continuously improving my skills through personal projects,
            competitions, and real-world team experience.
          </p>
          {current && (
            <div className="rounded-xl border border-white/10 bg-[var(--color-surface)] p-5">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-accent)] uppercase">
                Currently
              </span>
              <p className="mt-2 font-display font-semibold text-[var(--color-text)]">
                {current.degree}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{current.school}</p>
              <p className="mt-3 font-mono text-xs text-[var(--color-text-muted)]">
                {current.period}
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
