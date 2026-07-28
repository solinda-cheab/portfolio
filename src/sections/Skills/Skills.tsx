import { useState, useEffect } from 'react'
import { Code2, Server, Database, Wrench, Layers, Sparkles } from 'lucide-react'
import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import { skills } from '../../data/skills'

const CATEGORY_CONFIG: Record<string, { icon: typeof Code2; description: string; color: string }> = {
  Frontend: { icon: Code2, description: 'Client-side UI and interaction.', color: 'text-blue-400' },
  Backend: { icon: Server, description: 'Server-side logic and APIs.', color: 'text-green-400' },
  Database: { icon: Database, description: 'Data storage and persistence.', color: 'text-yellow-400' },
  Tools: { icon: Wrench, description: 'Workflow, version control, and design.', color: 'text-purple-400' },
}

function TechBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[var(--radius)] border border-white/10 bg-[var(--color-surface-2)] px-2.5 py-1.5 text-xs font-medium text-[var(--color-text)] transition-all duration-150 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
      {skill}
    </span>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [visible, setVisible] = useState(false)
  const totalSkills = skills.reduce((acc, curr) => acc + curr.skills.length, 0)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="02 · Skills"
            title="What I Work With"
            description="A toolkit built through coursework, personal projects, and team competitions."
          />
          <div className="mb-12 inline-flex h-fit items-center gap-2 rounded-full border border-white/10 bg-[var(--color-surface)] px-4 py-1.5 text-xs text-[var(--color-text-muted)]">
            <Sparkles size={14} className="text-[var(--color-accent)]" />
            <span className="font-semibold text-[var(--color-text)]">{totalSkills}+ technologies</span>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-1.5 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`rounded-[var(--radius)] px-4 py-2 text-xs font-semibold transition-all duration-150 ${
              activeCategory === 'All'
                ? 'bg-[var(--color-primary)] text-white shadow-sm'
                : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text)]'
            }`}
          >
            All Categories
          </button>
          {skills.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`rounded-[var(--radius)] px-4 py-2 text-xs font-semibold transition-all duration-150 ${
                activeCategory === group.category
                  ? 'bg-[var(--color-primary)] text-white shadow-sm'
                  : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text)]'
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
                color: 'text-[var(--color-accent)]',
              }
              const Icon = Config.icon

              return (
                <div
                  key={group.category}
                  className={`flex flex-col rounded-[var(--radius)] border border-white/10 bg-[var(--color-surface)] p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-white/20 hover:-translate-y-0.5 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-[var(--color-surface-2)] ${Config.color}`}>
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-[10px] tracking-widest text-[var(--color-text-muted)] uppercase">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-base font-semibold text-[var(--color-text)]">
                      {group.category}
                    </h3>
                    <p className="mt-1.5 min-h-[32px] text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {Config.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <TechBadge key={skill} skill={skill} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3.5 text-[11px] text-[var(--color-text-muted)]">
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
