import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionTitle eyebrow="01 · About" title="About Me" />
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
          I'm a Computer Science student passionate about frontend development. I enjoy
          building clean, responsive web applications with React and modern web
          technologies. I'm continuously improving my skills through personal projects,
          competitions, and real-world team experience.
        </p>
      </Container>
    </section>
  )
}
