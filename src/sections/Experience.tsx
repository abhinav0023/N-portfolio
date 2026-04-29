import { Briefcase } from 'lucide-react'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import { Section } from '../components/ui/Section'
import { StickerCard } from '../components/ui/StickerCard'
import { profile } from '../data/profile'
import { getCardRevealVariants } from '../lib/motion'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Impact"
      title="Experience"
      description="Roles where I shipped features, improved performance, and collaborated with teams."
    >
      <div className="grid gap-8 md:grid-cols-1">
        {profile.experience.map((job, index) => (
          <ScrollReveal
            key={`${job.company}-${job.role}`}
            variants={getCardRevealVariants(index, 1)}
          >
            <StickerCard
              title={job.role}
              subtitle={`${job.company} · ${job.duration} · ${job.location}`}
              badge="Work"
              featured
              icon={<Briefcase className="h-5 w-5 stroke-[2.5]" aria-hidden />}
            >
              <ul className="list-inside list-disc space-y-2 marker:text-accent">
                {job.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </StickerCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
