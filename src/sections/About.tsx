import { Section } from '../components/ui/Section'
import { profile } from '../data/profile'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Hello"
      title="About"
      description="A quick snapshot of who I am and what I care about in my work."
    >
      <div className="max-w-3xl rounded-xl border-2 border-foreground bg-card p-6 shadow-sticker md:p-8">
        <p className="font-body text-base leading-relaxed text-foreground md:text-lg">
          {profile.personalInfo.about}
        </p>
      </div>
    </Section>
  )
}
