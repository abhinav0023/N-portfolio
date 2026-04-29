import { Sparkles } from 'lucide-react'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import { Section } from '../components/ui/Section'
import { StickerCard } from '../components/ui/StickerCard'
import { profile } from '../data/profile'
import { getCardRevealVariants } from '../lib/motion'

export function Achievements() {
  if (profile.achievements.length === 0) return null

  return (
    <Section
      id="achievements"
      eyebrow="Community"
      title="Leadership & activities"
      description="Organizing, mentoring, and helping peers grow."
    >
      <div className="grid gap-8 md:grid-cols-1">
        {profile.achievements.map((item, index) => (
          <ScrollReveal
            key={item.title}
            variants={getCardRevealVariants(index, 1)}
          >
            <StickerCard
              title={item.title}
              subtitle={`${item.organization} · ${item.duration}`}
              badge="Highlight"
              icon={<Sparkles className="h-5 w-5 stroke-[2.5]" aria-hidden />}
            >
              <ul className="list-inside list-disc space-y-2 marker:text-secondary">
                {item.description.map((line) => (
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
