import { Cpu } from 'lucide-react'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import { Section } from '../components/ui/Section'
import { StickerCard } from '../components/ui/StickerCard'
import { Chip } from '../components/ui/Chip'
import { profile } from '../data/profile'
import { getCardRevealVariants } from '../lib/motion'

const tones = ['accent', 'secondary', 'tertiary'] as const

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Builds"
      title="Projects"
      description="Selected work spanning real-time systems, AI-assisted products, and full stack platforms."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map((project, index) => (
          <ScrollReveal
            key={project.name}
            className="h-full"
            variants={getCardRevealVariants(index, 3)}
          >
            <StickerCard
              title={project.name}
              subtitle={project.type}
              badge="Project"
              icon={<Cpu className="h-5 w-5 stroke-[2.5]" aria-hidden />}
            >
              <ul className="mb-4 list-inside list-disc space-y-2 marker:text-quaternary">
                {project.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <Chip key={tech} tone={tones[i % tones.length]}>
                    {tech}
                  </Chip>
                ))}
              </div>
            </StickerCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
