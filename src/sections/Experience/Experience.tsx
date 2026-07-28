import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="04 · Experience"
          title="Experience"
          description="Professional experience and team contributions."
        />
        <div className="relative grid gap-5 lg:grid-cols-12">
          <div className="hidden lg:col-span-1 lg:flex lg:flex-col items-center">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>
          <div className="space-y-5 lg:col-span-10">
            {experience.map((item, i) => (
              <Card
                key={item.org}
                className="group transition-all duration-150 hover:border-white/20 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface-2)] text-xs font-bold text-[var(--color-accent)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--color-text)]">
                      {item.role}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[var(--color-accent)]">{item.org}</span>
                </div>
                {item.period && (
                  <p className="mt-2 font-mono text-xs text-[var(--color-text-muted)]">{item.period}</p>
                )}
                <ul className="mt-4 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-[var(--color-text-muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] transition-transform duration-150 group-hover:scale-125" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
