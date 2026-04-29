import { ScrollReveal } from '../components/animations/ScrollReveal'
import { Section } from '../components/ui/Section'
import { Chip } from '../components/ui/Chip'
import { profile } from '../data/profile'
import type { Skills as SkillsType } from '../data/profile.types'

const labels: Record<keyof SkillsType, string> = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  databases: 'Databases',
  devops: 'DevOps & delivery',
  cloud: 'Cloud',
  core_cs: 'Core CS',
}

const tones = ['accent', 'secondary', 'tertiary', 'muted'] as const

export function Skills() {
  const entries = (
    Object.keys(profile.skills) as (keyof SkillsType)[]
  ).filter((key) => profile.skills[key].length > 0)

  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills & tech stack"
      description="Grouped by how I use these tools day to day."
    >
      <ScrollReveal className="overflow-x-hidden" direction="up">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((key, sectionIndex) => (
            <div
              key={key}
              className="rounded-xl border-2 border-foreground bg-white p-6 shadow-sticker motion-safe-transition card-hover-wiggle"
            >
              <h3 className="font-heading text-lg font-extrabold text-foreground">
                {labels[key]}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.skills[key].map((skill, i) => (
                  <Chip
                    key={skill}
                    tone={tones[(sectionIndex + i) % tones.length]}
                  >
                    {skill}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  )
}
