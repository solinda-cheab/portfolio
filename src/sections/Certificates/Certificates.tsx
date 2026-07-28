import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import { certificates } from '../../data/certificates'
import CertificateDialog from '../../components/common/CertificateDialog'
import { useState } from 'react'
import { Award } from 'lucide-react'

export default function Certificates() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <SectionTitle
        eyebrow="06 · Certificates"
        title="Certificates"
        description="Coursework and technical certifications completed alongside my degree."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((cert) => (
          <Card
            key={cert.name}
            onClick={() => setOpen(true)}
            className="group flex flex-col justify-between cursor-pointer"
          >
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius)] bg-[var(--color-surface-2)] text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <Award size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                  {cert.name}
                </h3>
                <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{cert.issuer}</p>
                {cert.date && (
                  <p className="mt-0.5 font-mono text-[10px] text-[var(--color-accent)]">{cert.date}</p>
                )}
              </div>
            </div>
            <p className="mt-3 text-xs text-[var(--color-text-muted)] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
              Click to view certificate
            </p>
          </Card>
        ))}
      </div>

      <CertificateDialog open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
