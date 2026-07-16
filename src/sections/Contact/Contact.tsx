import { Mail } from 'lucide-react'
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
          description="Open to frontend roles, freelance work, and collaborations. Reach out through the form or any of the channels below."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <ContactForm />
          </Card>
          <Card className="flex flex-col justify-between lg:col-span-2">
            <div>
              <div className="flex items-center gap-2 text-[var(--color-text)]">
                <Mail size={16} className="text-[var(--color-accent)]" />
                <span className="text-sm">hello@example.com</span>
              </div>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                Based in Phnom Penh, Cambodia. Available for remote and on-site work.
              </p>
            </div>
            <SocialLinks className="mt-6" />
          </Card>
        </div>
      </Container>
    </section>
  )
}
