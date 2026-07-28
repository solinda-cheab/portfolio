import React from 'react'
import { ExternalLink } from 'lucide-react'
import type { Project } from '../../types'
import Card from '../../components/common/Card'
import Badge from '../../components/common/Badge'
import BrandIcon from '../../components/common/BrandIcon'
import ProjectPreview from './ProjectPreview'
import ProjectFeatureGrid from './ProjectFeatureGrid'
import ProjectDetails from './ProjectDetails'

export default function ProjectCard({ project }: { project: Project }) {
  const [detailsOpen, setDetailsOpen] = React.useState(false)

  return (
    <>
      <Card
        className={`${project.featured ? 'ring-1 ring-[var(--color-primary)]/40 sm:col-span-2' : ''} group cursor-pointer`}
        onClick={() => setDetailsOpen(true)}
      >
        {project.image && (
          <div className="mb-5 overflow-hidden rounded-[var(--radius)] border border-white/10">
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="h-44 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-accent)]">{project.tagline}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                aria-label={`${project.name} on GitHub`}
                onClick={(e) => e.stopPropagation()}
                className="flex h-9 w-9 items-center justify-center rounded-[var(--radius)] border border-white/10 text-[var(--color-text-muted)] transition-all duration-150 hover:border-white/20 hover:text-[var(--color-text)]"
              >
                <BrandIcon name="github" size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                aria-label={`${project.name} live demo`}
                onClick={(e) => e.stopPropagation()}
                className="flex h-9 w-9 items-center justify-center rounded-[var(--radius)] border border-white/10 text-[var(--color-text-muted)] transition-all duration-150 hover:border-white/20 hover:text-[var(--color-text)]"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {project.description}
        </p>

        {project.features &&
          (project.featured ? (
            <div className="mt-5 grid gap-3 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <ProjectPreview project={project} />
              </div>
              <div className="lg:col-span-2">
                <ProjectFeatureGrid features={project.features} />
              </div>
            </div>
          ) : (
            <ul className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {project.features.map((feature) => (
                <li key={feature} className="text-xs text-[var(--color-text-muted)]">
                  <span className="text-[var(--color-accent)]">✓</span> {feature}
                </li>
              ))}
            </ul>
          ))}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          <span>Click to view details</span>
        </div>
      </Card>

      <ProjectDetails project={project} open={detailsOpen} onClose={() => setDetailsOpen(false)} />
    </>
  )
}
