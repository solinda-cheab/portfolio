export default function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-[var(--radius)] border border-white/10 bg-[var(--color-surface-2)] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[var(--color-text-muted)] transition-all duration-150 hover:border-[var(--color-primary)]/50 hover:text-[var(--color-text)]">
      {children}
    </span>
  )
}
