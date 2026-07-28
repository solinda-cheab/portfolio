import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import { education } from '../../data/education'

const STATS = [
  { value: '4+', label: 'Projects Built' },
  { value: '5+', label: 'Certificates' },
  { value: '3+', label: 'Technologies' },
  { value: '1+', label: 'Competition Medal' },
]

export default function About() {
  const current = education[0]

  return (
    <section id="about" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="01 · About"
          title="About Me"
          description="A quick overview of who I am, what I do, and where I'm headed."
        />
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
              <p>
                I'm a Computer Science student at Royal University of Phnom Penh with a strong passion for frontend development.
                I enjoy building clean, responsive, and accessible web applications using React and modern tools.
              </p>
              <p>
                Beyond coursework, I've competed in technical events, contributed to team-based competition systems, and built
                several public-facing projects. I care about polish: typography, spacing, motion, and reliable state management.
              </p>
              <p>
                I'm looking for frontend roles, internships, and freelance collaborations where I can keep growing while shipping real products.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius)] border border-white/10 bg-[var(--color-surface)] p-4 text-center shadow-sm transition-all duration-150 hover:border-white/20 hover:shadow-md"
                >
                  <p className="font-display text-2xl font-bold text-[var(--color-text)]">{stat.value}</p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {current && (
            <div className="lg:col-span-5">
              <div className="rounded-[var(--radius)] border border-white/10 bg-[var(--color-surface)] p-6 shadow-sm">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-accent)] uppercase">
                  Currently
                </span>
                <p className="mt-3 font-display text-lg font-semibold text-[var(--color-text)]">
                  {current.degree}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{current.school}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">{current.period}</span>
                </div>
              </div>

              <div className="mt-6 rounded-[var(--radius)] border border-white/10 bg-[var(--color-bg)] p-6 shadow-sm">
                <p className="text-sm font-medium text-[var(--color-text)]">Availability</p>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Open to internships, junior frontend roles, and freelance projects.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Available for work
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
