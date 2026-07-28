import type { Project } from '../../types'

export default function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg bg-[var(--color-bg)] p-5 ring-1 ring-white/5 transition-all duration-300 hover:ring-white/10">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
        <span className="font-mono text-xs font-semibold text-[var(--color-text)]">
          {project.name}
        </span>
        <nav className="ml-auto hidden gap-3 font-mono text-[10px] tracking-wide text-[var(--color-text-muted)] uppercase sm:flex">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-text-muted)] uppercase">
          Live build
        </span>
        <h4 className="mt-2 font-display text-xl leading-snug font-bold text-[var(--color-text)] sm:text-2xl">
          {project.tagline}
        </h4>
      </div>
    </div>
  )
}
