import { motion as Motion } from 'framer-motion'
import { profile } from '../data/profile'
import { EASE, springHero } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const { name } = profile.personalInfo
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <footer className="border-t-2 border-foreground/10 bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <p className="font-body text-sm text-muted-foreground">
            © {year} {name}. Built with React, Vite, and Tailwind CSS.
          </p>
          <a
            href="#hero"
            className="font-heading text-sm font-bold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Back to top
          </a>
        </div>
      </footer>
    )
  }

  const nameParts = name.trim().split(/\s+/)
  const w1 = nameParts[0] ?? name
  const w2 = nameParts.slice(1).join(' ')

  return (
    <footer className="border-t-2 border-foreground/10 bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p className="flex flex-wrap items-baseline justify-center gap-x-1 font-body text-sm text-muted-foreground sm:justify-start">
          <Motion.span
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0 }}
          >
            © {year}
          </Motion.span>{' '}
          {w2 ? (
            <>
              <Motion.span
                className="font-semibold text-foreground"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              >
                {w1}
              </Motion.span>{' '}
              <Motion.span
                className="font-semibold text-foreground"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...springHero, delay: 0.3 }}
              >
                {w2}
              </Motion.span>
            </>
          ) : (
            <Motion.span
              className="font-semibold text-foreground"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            >
              {w1}
            </Motion.span>
          )}
          <Motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.45 }}
          >
            . Built with React, Vite, and Tailwind CSS.
          </Motion.span>
        </p>
        <Motion.a
          href="#hero"
          className="font-heading text-sm font-bold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.6 }}
        >
          Back to top
        </Motion.a>
      </div>
    </footer>
  )
}
