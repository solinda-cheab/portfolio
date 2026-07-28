import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import { education } from '../../data/education'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <div>
      <SectionTitle
        eyebrow="07 · Education"
        title="Education"
        description="Academic background and ongoing studies."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((item, i) => (
          <Card
            key={item.school}
            className="group transition-all duration-150 hover:border-white/20 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius)] bg-[var(--color-surface-2)] text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <GraduationCap size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] font-bold text-[var(--color-text-muted)] uppercase">
                  0{i + 1}
                </span>
                <p className="mt-1 font-display font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                  {item.school}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.degree}</p>
                <p className="mt-2 font-mono text-xs text-[var(--color-accent)]">{item.period}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
