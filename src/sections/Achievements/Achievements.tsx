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

const ICON_COLORS: Record<string, string> = {
  medal: 'text-yellow-400',
  'graduation-cap': 'text-blue-400',
  users: 'text-green-400',
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="05 · Achievements"
          title="Achievements"
          description="Recognition, awards, and team milestones."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Award
            const featured = i === 0
            const iconColor = ICON_COLORS[item.icon] ?? 'text-[var(--color-accent)]'

            return (
              <Card
                key={item.title}
                className={`group transition-all duration-150 hover:border-white/20 hover:shadow-md hover:-translate-y-0.5 ${
                  featured
                    ? 'sm:col-span-3 sm:flex sm:items-center sm:gap-6 bg-[var(--color-bg)] ring-1 ring-[var(--color-primary)]/30'
                    : ''
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius)] bg-[var(--color-surface-2)] ${featured ? 'bg-[var(--color-primary)] text-white' : iconColor}`}
                >
                  <Icon size={22} />
                </div>
                <div className={featured ? 'mt-4 sm:mt-0' : 'mt-4'}>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
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
