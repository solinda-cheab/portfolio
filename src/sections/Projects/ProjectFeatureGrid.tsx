export default function ProjectFeatureGrid({ features }: { features: string[] }) {
  const tiles = features.slice(0, 4)

  return (
    <div className="grid h-full grid-cols-2 gap-2">
      {tiles.map((feature, i) => (
        <div
          key={feature}
          className={`flex items-center rounded-lg p-4 text-sm leading-tight font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-black/5 ${
            i % 3 === 0
              ? 'bg-[var(--color-bg)] text-[var(--color-text)] hover:border-white/10 border border-transparent'
              : 'bg-[var(--color-surface-2)] text-[var(--color-text)] hover:border-white/10 border border-transparent'
          }`}
        >
          {feature}
        </div>
      ))}
    </div>
  )
}
