import { GraduationCap } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { StickerCard } from '../components/ui/StickerCard'
import { profile } from '../data/profile'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Learning"
      title="Education"
      description="Formal training that grounds my engineering practice."
    >
      <div className="grid gap-8 md:grid-cols-1">
        {profile.education.map((edu) => (
          <StickerCard
            key={edu.institution}
            title={edu.degree}
            subtitle={`${edu.institution} · ${edu.duration}`}
            badge={`GPA ${edu.gpa}`}
            icon={
              <GraduationCap className="h-5 w-5 stroke-[2.5]" aria-hidden />
            }
          />
        ))}
      </div>
    </Section>
  )
}
