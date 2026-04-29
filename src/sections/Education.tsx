import { GraduationCap } from 'lucide-react'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import { Section } from '../components/ui/Section'
import { StickerCard } from '../components/ui/StickerCard'
import { profile } from '../data/profile'
import { getCardRevealVariants } from '../lib/motion'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Learning"
      title="Education"
      description="Formal training that grounds my engineering practice."
    >
      <div className="grid gap-8 md:grid-cols-1">
        {profile.education.map((edu, index) => (
          <ScrollReveal
            key={edu.institution}
            variants={getCardRevealVariants(index, 1)}
          >
            <StickerCard
              title={edu.degree}
              subtitle={`${edu.institution} · ${edu.duration}`}
              badge={`GPA ${edu.gpa}`}
              icon={
                <GraduationCap className="h-5 w-5 stroke-[2.5]" aria-hidden />
              }
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
