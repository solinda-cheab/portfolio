import { useState } from 'react'
import Button from '../../components/common/Button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="grid gap-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]">
          Name
        </label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="w-full rounded-lg border border-white/10 bg-[var(--color-surface-2)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus-visible:border-[var(--color-accent)]"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]">
          Email
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-white/10 bg-[var(--color-surface-2)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus-visible:border-[var(--color-accent)]"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project..."
          rows={4}
          className="w-full resize-none rounded-lg border border-white/10 bg-[var(--color-surface-2)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus-visible:border-[var(--color-accent)]"
        />
      </div>
      <Button onClick={handleSubmit}>Send Message</Button>
    </div>
  )
}
