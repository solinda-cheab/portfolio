import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="03 · Projects"
          title="Featured Projects"
          description="A selection of projects that best represent how I build — from live competition systems to polished, interactive interfaces."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
