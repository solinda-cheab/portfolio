import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import Card from '../../components/common/Card'
import Badge from '../../components/common/Badge'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionTitle eyebrow="02 · Skills" title="What I Work With" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <Card key={group.category}>
              <h3 className="font-display font-semibold text-[var(--color-text)]">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
