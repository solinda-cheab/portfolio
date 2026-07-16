import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionTitle eyebrow="04 · Experience" title="Experience" />
        <div className="space-y-5">
          {experience.map((item) => (
            <Card key={item.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-[var(--color-accent)]">{item.org}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-primary)]">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
