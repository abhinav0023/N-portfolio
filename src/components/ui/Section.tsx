import type { ReactNode } from 'react'
import { motion as Motion } from 'framer-motion'
import { EASE } from '../../lib/motion'
import { useReducedMotion } from '../../lib/useReducedMotion'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <section
        id={id}
        className="relative scroll-mt-24 py-16 md:py-24"
        aria-labelledby={`${id}-heading`}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-10 max-w-3xl">
            {eyebrow ? (
              <p className="mb-2 font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={`${id}-heading`}
              className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          {children}
        </div>
      </section>
    )
  }

  return (
    <section
      id={id}
      className="relative scroll-mt-24 py-16 md:py-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-10 max-w-3xl">
          <Motion.div
            className="pointer-events-none absolute -left-2 -top-3 -z-10 h-[4.5rem] w-[min(100%,18rem)] rounded-lg border-2 border-foreground/15 bg-tertiary/35"
            initial={{ rotate: 0, scale: 0.85 }}
            whileInView={{ rotate: -2, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            aria-hidden
          />
          {eyebrow ? (
            <p className="mb-2 font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <Motion.h2
            id={`${id}-heading`}
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {title}
          </Motion.h2>
          {description ? (
            <Motion.p
              className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              {description}
            </Motion.p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}
