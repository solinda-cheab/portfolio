import { ExternalLink } from 'lucide-react'
import type { Project } from '../../types'
import Card from '../../components/common/Card'
import Badge from '../../components/common/Badge'
import BrandIcon from '../../components/common/BrandIcon'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className={project.featured ? 'ring-1 ring-[var(--color-primary)]/40 sm:col-span-2' : ''}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-accent)]">{project.tagline}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              aria-label={`${project.name} on GitHub`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              <BrandIcon name="github" size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              aria-label={`${project.name} live demo`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {project.description}
      </p>

      {project.features && (
        <ul className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {project.features.map((feature) => (
            <li key={feature} className="text-xs text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)]">✓</span> {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </Card>
  )
}
