import { Award, GraduationCap, Users } from 'lucide-react'
import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import { achievements } from '../../data/achievements'

const iconMap = {
  medal: Award,
  'graduation-cap': GraduationCap,
  users: Users,
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <Container>
        <SectionTitle eyebrow="05 · Achievements" title="Achievements" />
        <div className="grid gap-5 sm:grid-cols-3">
          {achievements.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <Card key={item.title} className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)]/15 text-[var(--color-accent)]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
                {item.org && (
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.org}</p>
                )}
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
