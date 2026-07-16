import { Mail } from 'lucide-react'
import BrandIcon from '../../common/BrandIcon'
import { socials } from '../../../data/socials'

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          aria-label={social.label}
          target={social.url.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          {social.icon === 'mail' ? (
            <Mail size={16} />
          ) : (
            <BrandIcon name={social.icon} size={16} />
          )}
        </a>
      ))}
    </div>
  )
}
