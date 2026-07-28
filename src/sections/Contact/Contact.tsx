import { Mail, MapPin } from 'lucide-react'
import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import SocialLinks from '../../components/ui/SocialLinks'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="08 · Contact"
          title="Let's Work Together"
          description="Frontend roles, freelance work, and collaborations. Reach out through the form or any of the channels below."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <ContactForm />
          </Card>
          <Card className="flex flex-col justify-between gap-8 lg:col-span-2">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 text-[var(--color-text)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius)] bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">Email</p>
                    <p className="text-sm font-medium">meym5913@gmail.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[var(--color-text)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius)] bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">Location</p>
                    <p className="text-sm font-medium">Phnom Penh, Cambodia</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                Available for remote and on-site work. Usually respond within 24 hours.
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Connect
              </p>
              <SocialLinks />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
