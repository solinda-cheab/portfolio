import { useState } from 'react'
import { Code2, Server, Database, Wrench, Layers, Sparkles } from 'lucide-react'
import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import { skills } from '../../data/skills'

const CATEGORY_CONFIG: Record<string, { icon: typeof Code2; description: string }> = {
  Frontend: { icon: Code2, description: 'Client-side UI and interaction.' },
  Backend: { icon: Server, description: 'Server-side logic and APIs.' },
  Database: { icon: Database, description: 'Data storage and persistence.' },
  Tools: { icon: Wrench, description: 'Workflow, version control, and design.' },
}

function TechBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[var(--color-surface-2)] px-2.5 py-1 text-xs font-medium text-[var(--color-text)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
      {skill}
    </span>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const totalSkills = skills.reduce((acc, curr) => acc + curr.skills.length, 0)

  return (
    <section id="skills" className="py-20">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="02 · Skills"
            title="What I Work With"
            description="A toolkit built through coursework, personal projects, and team competitions."
          />
          <div className="mb-12 inline-flex h-fit items-center gap-2 rounded-full border border-white/10 bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-text-muted)]">
            <Sparkles size={14} className="text-[var(--color-accent)]" />
            <span className="font-semibold text-[var(--color-text)]">{totalSkills}+ technologies</span>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-1.5 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeCategory === 'All'
                ? 'bg-[var(--color-primary)] text-white'
                : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)]'
            }`}
          >
            All Categories
          </button>
          {skills.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeCategory === group.category
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)]'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills
            .filter((group) => activeCategory === 'All' || activeCategory === group.category)
            .map((group, i) => {
              const Config = CATEGORY_CONFIG[group.category] ?? {
                icon: Layers,
                description: 'Core domain technologies.',
              }
              const Icon = Config.icon

              return (
                <div
                  key={group.category}
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-[var(--color-surface)] p-5 transition-colors duration-200 hover:border-[var(--color-primary)]/50"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                        <Icon size={16} />
                      </div>
                      <span className="font-mono text-[10px] tracking-widest text-[var(--color-text-muted)] uppercase">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-base font-semibold text-[var(--color-text)]">
                      {group.category}
                    </h3>
                    <p className="mt-1 min-h-[32px] text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {Config.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <TechBadge key={skill} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-[var(--color-text-muted)]">
                    <span className="font-mono">{group.skills.length} stack items</span>
                  </div>
                </div>
              )
            })}
        </div>
      </Container>
    </section>
  )
}
