import { Medal, GraduationCap, Users, Award } from 'lucide-react'
import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import { achievements } from '../../data/achievements'

const ICONS: Record<string, typeof Medal> = {
  medal: Medal,
  'graduation-cap': GraduationCap,
  users: Users,
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <Container>
        <SectionTitle eyebrow="05 · Achievements" title="Achievements" />
        <div className="grid gap-5 sm:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Award
            const featured = i === 0
            return (
              <Card
                key={item.title}
                className={
                  featured
                    ? 'sm:col-span-3 sm:flex sm:items-center sm:gap-6 bg-[var(--color-bg)] ring-1 ring-[var(--color-primary)]/30'
                    : ''
                }
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                    featured
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[var(--color-surface-2)] text-[var(--color-accent)]'
                  }`}
                >
                  <Icon size={20} />
                </div>
                <div className={featured ? 'mt-4 sm:mt-0' : 'mt-4'}>
                  <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  {item.org && (
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.org}</p>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
