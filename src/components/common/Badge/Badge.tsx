export default function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-[var(--color-surface)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-muted)]">
      {children}
    </span>
  )
}
