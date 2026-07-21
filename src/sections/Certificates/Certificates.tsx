import { Award, ExternalLink } from 'lucide-react'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import { certificates } from '../../data/certificates'

function CertificateCard({
  cert,
  index,
}: {
  cert: { name: string; issuer: string; date?: string; url?: string }
  index: number
}) {
  return (
    <Card className="flex flex-col justify-between">
      <div className="flex items-start gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-[var(--color-accent)]">
          <Award size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <span className="font-mono text-[10px] font-medium text-[var(--color-text-muted)]">
            0{index + 1}
          </span>
          <h3 className="mt-1 text-sm font-semibold text-[var(--color-text)]">{cert.name}</h3>
          <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{cert.issuer}</p>
        </div>
      </div>

      {cert.url && (
        <div className="mt-4 flex justify-end border-t border-white/10 pt-3">
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)]"
          >
            View <ExternalLink size={12} />
          </a>
        </div>
      )}
    </Card>
  )
}

export default function Certificates() {
  return (
    <div>
      <SectionTitle
        eyebrow="06 · Certificates"
        title="Certificates"
        description="Coursework and technical certifications completed alongside my degree."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((cert, index) => (
          <CertificateCard key={cert.name} cert={cert} index={index} />
        ))}
      </div>
    </div>
  )
}
