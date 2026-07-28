import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

interface DialogProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  maxWidth?: string
}

export default function Dialog({ open, onClose, children, maxWidth = 'max-w-2xl' }: DialogProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, handleKeyDown])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative w-full ${maxWidth} max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-surface)] shadow-xl`}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[var(--color-surface)] text-[var(--color-text-muted)] transition-all duration-150 hover:text-[var(--color-text)] hover:border-white/20"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>
        <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
