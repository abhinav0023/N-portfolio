import { motion as Motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Marquee } from '../components/Marquee'
import { BackgroundShapes } from '../components/ui/BackgroundShapes'
import { Button } from '../components/ui/Button'
import { useReducedMotion } from '../lib/useReducedMotion'
import { EASE, getBandRevealVariants, springHero } from '../lib/motion'
import { profile } from '../data/profile'

export function Hero() {
  const { personalInfo, experience } = profile
  const { contact } = personalInfo
  const currentRole = experience[0]
  const marqueeItems = personalInfo.headline
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean)

  const nameParts = personalInfo.name.trim().split(/\s+/)
  const headlineFirst = nameParts[0] ?? personalInfo.name
  const headlineSecond = nameParts.slice(1).join(' ')

  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <section
        id="hero"
        className="relative overflow-hidden border-b-2 border-foreground/10 bg-background pb-8 pt-12 md:pb-12 md:pt-16"
      >
        <BackgroundShapes />
        <div className="pointer-events-none absolute left-[-20%] top-1/4 h-64 w-64 rounded-full bg-tertiary/50 md:left-[-10%] md:h-80 md:w-80" />
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          {currentRole ? (
            <p className="mb-3 inline-flex max-w-xl flex-wrap items-center gap-2 rounded-full border-2 border-foreground bg-white px-4 py-1 font-heading text-xs font-bold uppercase tracking-wide text-muted-foreground shadow-pop md:text-sm">
              <span className="text-accent">●</span>
              <span className="text-foreground">
                {currentRole.role} · {currentRole.company}
              </span>
            </p>
          ) : null}
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {headlineSecond ? (
              <>
                {headlineFirst}{' '}
                <span className="text-accent">{headlineSecond}</span>
              </>
            ) : (
              personalInfo.name
            )}
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
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${contact.email}`}>Email me</Button>
            <Button variant="secondary" href={contact.linkedin}>
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="relative z-10 mt-10">
          <Marquee items={marqueeItems} />
        </div>
      </section>
    )
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b-2 border-foreground/10 bg-background pb-8 pt-12 md:pb-12 md:pt-16"
    >
      <BackgroundShapes />
      <div className="pointer-events-none absolute left-[-20%] top-1/4 h-64 w-64 rounded-full bg-tertiary/50 md:left-[-10%] md:h-80 md:w-80" />
      <Motion.div
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {currentRole ? (
          <Motion.p
            className="mb-3 inline-flex max-w-xl flex-wrap items-center gap-2 rounded-full border-2 border-foreground bg-white px-4 py-1 font-heading text-xs font-bold uppercase tracking-wide text-muted-foreground shadow-pop md:text-sm"
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ ...springHero, delay: 0.1 }}
          >
            <span className="text-accent">●</span>
            <span className="text-foreground">
              {currentRole.role} · {currentRole.company}
            </span>
          </Motion.p>
        ) : null}
        <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {headlineSecond ? (
            <>
              <Motion.span
                className="inline-block"
                initial={{ x: -120, rotate: -6 }}
                animate={{ x: 0, rotate: -1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              >
                {headlineFirst}{' '}
              </Motion.span>
              <Motion.span
                className="inline-block text-accent"
                initial={{ x: 120, rotate: 6 }}
                animate={{ x: 0, rotate: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
              >
                {headlineSecond}
              </Motion.span>
            </>
          ) : (
            <Motion.span
              className="inline-block"
              initial={{ x: -120, rotate: -6 }}
              animate={{ x: 0, rotate: -1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            >
              {personalInfo.name}
            </Motion.span>
          )}
        </h1>
        <Motion.p
          className="mt-2 font-body text-sm font-medium text-muted-foreground md:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        >
          {personalInfo.pronouns}
        </Motion.p>
        <Motion.p
          className="mt-4 max-w-xl font-body text-base leading-relaxed text-foreground md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        >
          {personalInfo.headline}
        </Motion.p>
        <Motion.p
          className="mt-3 inline-flex items-center gap-2 font-body text-sm text-muted-foreground md:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
        >
          <MapPin className="h-5 w-5 shrink-0 stroke-[2.5]" aria-hidden />
          {personalInfo.location}
        </Motion.p>
        <Motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
        >
          <Button href={`mailto:${contact.email}`}>Email me</Button>
          <Button variant="secondary" href={contact.linkedin}>
            LinkedIn
          </Button>
        </Motion.div>
      </Motion.div>
      <div className="relative z-10 mt-10 overflow-x-hidden">
        <Motion.div
          className="origin-left"
          variants={getBandRevealVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Marquee items={marqueeItems} />
        </Motion.div>
      </div>
    </section>
  )
}
