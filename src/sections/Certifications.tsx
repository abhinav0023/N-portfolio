import { Award } from 'lucide-react'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import { Section } from '../components/ui/Section'
import { profile } from '../data/profile'

export function Certifications() {
  if (profile.certifications.length === 0) return null

  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      description="Programs and certifications that sharpen my engineering toolkit."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.certifications.map((title, index) => (
          <ScrollReveal
            key={title}
            delay={index * 0.1}
            viewportAmount={0.45}
            direction="scale"
          >
            <div className="flex items-start gap-4 rounded-xl border-2 border-foreground bg-white p-4 shadow-sticker motion-safe-transition card-hover-wiggle md:p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-quaternary text-foreground">
                <Award className="h-5 w-5 stroke-[2.5]" aria-hidden />
              </span>
              <p className="font-heading text-base font-extrabold leading-snug text-foreground md:text-lg">
                {title}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
