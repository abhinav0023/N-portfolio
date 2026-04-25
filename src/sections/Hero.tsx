import { MapPin } from 'lucide-react'
import { Marquee } from '../components/Marquee'
import { BackgroundShapes } from '../components/ui/BackgroundShapes'
import { Button } from '../components/ui/Button'
import { profile } from '../data/profile'

function initials(fullName: string) {
  const parts = fullName.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return `${first}${last}`.toUpperCase()
}

export function Hero() {
  const { personalInfo, experience } = profile
  const { contact } = personalInfo
  const currentRole = experience[0]
  const marqueeItems = personalInfo.headline
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean)

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b-2 border-foreground/10 bg-background pb-8 pt-12 md:pb-12 md:pt-16"
    >
      <BackgroundShapes />
      <div className="pointer-events-none absolute left-[-20%] top-1/4 h-64 w-64 rounded-full bg-tertiary/50 md:left-[-10%] md:h-80 md:w-80" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative">
          {currentRole ? (
            <p className="mb-3 inline-flex max-w-xl flex-wrap items-center gap-2 rounded-full border-2 border-foreground bg-white px-4 py-1 font-heading text-xs font-bold uppercase tracking-wide text-muted-foreground shadow-pop md:text-sm">
              <span className="text-accent">●</span>
              <span className="text-foreground">
                {currentRole.role} · {currentRole.company}
              </span>
            </p>
          ) : null}
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-2 font-body text-sm font-medium text-muted-foreground md:text-base">
            {personalInfo.pronouns}
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-foreground md:text-lg">
            {personalInfo.headline}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 font-body text-sm text-muted-foreground md:text-base">
            <MapPin className="h-5 w-5 shrink-0 stroke-[2.5]" aria-hidden />
            {personalInfo.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`mailto:${contact.email}`}>Email me</Button>
            <Button variant="secondary" href={contact.linkedin}>
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#cbd5e1_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-70" />
          <div
            className="relative flex h-56 w-56 items-center justify-center rounded-[2.5rem] border-4 border-foreground bg-secondary/30 font-heading text-5xl font-extrabold text-foreground shadow-sticker-pink motion-safe-transition md:h-64 md:w-64 md:text-6xl"
            style={{
              clipPath:
                'polygon(12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%)',
            }}
            aria-hidden
          >
            <span className="select-none">{initials(personalInfo.name)}</span>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-10">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}
