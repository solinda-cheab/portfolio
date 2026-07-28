import type { Project } from '../../types'
import Dialog from '../../components/common/Dialog'
import Badge from '../../components/common/Badge'
import { ExternalLink } from 'lucide-react'
import BrandIcon from '../../components/common/BrandIcon'

interface ProjectDetailsProps {
  project: Project
  open: boolean
  onClose: () => void
}

export default function ProjectDetails({ project, open, onClose }: ProjectDetailsProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      {project.image && (
        <div className="mb-6 overflow-hidden rounded-lg border border-white/10">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="h-56 w-full object-cover sm:h-64"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-[var(--color-text)]">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-accent)]">{project.tagline}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              <BrandIcon name="github" size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.description}</p>

      <div className="mt-6 space-y-5">
        {project.overview && (
          <DetailBlock title="Overview" content={project.overview} />
        )}
        {project.reflection && (
          <DetailBlock title="Reflection" content={project.reflection} />
        )}
        {project.challenges && (
          <DetailBlock title="Challenges" content={project.challenges} />
        )}
        {project.lessons && (
          <DetailBlock title="Lessons Learned" content={project.lessons} />
        )}
        {project.languages && project.languages.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Languages Used
            </h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.languages.map((lang) => (
                <li key={lang}>
                  <Badge>{lang}</Badge>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {project.stack.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      )}
    </Dialog>
  )
}

function DetailBlock({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]">{content}</p>
    </div>
  )
}
