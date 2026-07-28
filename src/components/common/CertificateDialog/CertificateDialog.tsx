import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Dialog from '../../common/Dialog'
import { certificates } from '../../../data/certificates'

interface CertificateDialogProps {
  open: boolean
  onClose: () => void
}

export default function CertificateDialog({ open, onClose }: CertificateDialogProps) {
  const [index, setIndex] = useState(0)

  const current = certificates[index]
  const hasPrev = index > 0
  const hasNext = index < certificates.length - 1

  const goPrev = () => hasPrev && setIndex((i) => i - 1)
  const goNext = () => hasNext && setIndex((i) => i + 1)

  return (
    <Dialog open={open} onClose={onClose} maxWidth="max-w-3xl">
      {current ? (
        <div className="flex flex-col gap-5">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[var(--color-bg)]">
            {current.image ? (
              <img
                src={current.image}
                alt={current.name}
                className="h-64 w-full object-contain sm:h-80"
              />
            ) : (
              <div className="flex h-64 items-center justify-center sm:h-80">
                <span className="text-[var(--color-text-muted)]">No preview available</span>
              </div>
            )}
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">
                {current.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {current.issuer}
                {current.date && <span className="ml-2 text-[var(--color-accent)]">{current.date}</span>}
              </p>
            </div>
            {current.url && (
              <a
                href={current.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                aria-label="Open certificate"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={goPrev}
              disabled={!hasPrev}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] disabled:opacity-40"
            >
              <ChevronLeft size={14} />
              Prev
            </button>
            <span className="font-mono text-xs text-[var(--color-text-muted)]">
              {index + 1} / {certificates.length}
            </span>
            <button
              onClick={goNext}
              disabled={!hasNext}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] disabled:opacity-40"
            >
              Next
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-[var(--color-text-muted)]">No certificates available.</p>
      )}
    </Dialog>
  )
}
