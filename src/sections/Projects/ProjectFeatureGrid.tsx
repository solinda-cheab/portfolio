export default function ProjectFeatureGrid({ features }: { features: string[] }) {
  const tiles = features.slice(0, 4)

  return (
    <div className="grid h-full grid-cols-2 gap-2">
      {tiles.map((feature, i) => (
        <div
          key={feature}
          className={`flex items-center rounded-lg p-4 text-sm leading-tight font-semibold transition-colors duration-200 ${
            i % 3 === 0
              ? 'bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-black/40'
              : 'bg-[var(--color-surface-2)] text-[var(--color-text)] hover:bg-[var(--color-surface-2)]/70'
          }`}
        >
          {feature}
        </div>
      ))}
    </div>
  )
}
