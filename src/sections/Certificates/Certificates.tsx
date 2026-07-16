import { BadgeCheck } from 'lucide-react'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import { certificates } from '../../data/certificates'

export default function Certificates() {
  return (
    <div>
      <SectionTitle eyebrow="06 · Certificates" title="Certificates" />
      <div className="grid gap-3 sm:grid-cols-2">
        {certificates.map((cert) => (
          <Card key={cert.name} className="flex items-start gap-3 py-4">
            <BadgeCheck size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
            <div>
              <p className="text-sm font-medium text-[var(--color-text)]">{cert.name}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{cert.issuer}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
