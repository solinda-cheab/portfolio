import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import { education } from '../../data/education'

export default function Education() {
  return (
    <div>
      <SectionTitle eyebrow="07 · Education" title="Education" />
      {education.map((item) => (
        <Card key={item.school}>
          <p className="font-display font-semibold text-[var(--color-text)]">{item.school}</p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.degree}</p>
          <p className="mt-3 font-mono text-xs text-[var(--color-accent)]">{item.period}</p>
        </Card>
      ))}
    </div>
  )
}
