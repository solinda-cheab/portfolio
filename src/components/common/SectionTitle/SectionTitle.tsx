interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <span className="font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">{description}</p>
      )}
    </div>
  )
}
