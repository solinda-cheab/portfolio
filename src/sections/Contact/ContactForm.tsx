import { useState } from 'react'
import Button from '../../components/common/Button'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:meym5913@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <div>
        <label className="mb-2 block text-xs font-medium text-[var(--color-text-muted)]">
          Name
        </label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="h-10 w-full rounded-[var(--radius)] border border-transparent bg-[var(--color-surface-2)] px-4 py-2 text-sm text-[var(--color-text)] outline-none transition-all duration-150 focus:border-[var(--color-accent)] focus:ring-[3px] focus:ring-[var(--color-accent)]/20 placeholder:text-[var(--color-text-muted)]/60"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-medium text-[var(--color-text-muted)]">
          Email
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className="h-10 w-full rounded-[var(--radius)] border border-transparent bg-[var(--color-surface-2)] px-4 py-2 text-sm text-[var(--color-text)] outline-none transition-all duration-150 focus:border-[var(--color-accent)] focus:ring-[3px] focus:ring-[var(--color-accent)]/20 placeholder:text-[var(--color-text-muted)]/60"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-medium text-[var(--color-text-muted)]">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project..."
          rows={5}
          className="w-full rounded-[var(--radius)] border border-transparent bg-[var(--color-surface-2)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-all duration-150 focus:border-[var(--color-accent)] focus:ring-[3px] focus:ring-[var(--color-accent)]/20 placeholder:text-[var(--color-text-muted)]/60"
        />
      </div>
      <Button onClick={handleSubmit} className="w-full sm:w-auto">
        <Send size={16} />
        {sent ? 'Opening Mail...' : 'Send Message'}
      </Button>
    </form>
  )
}
