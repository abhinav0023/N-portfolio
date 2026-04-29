import { useState } from 'react'
import {
  motion as Motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'
import { EASE, springNav, springScrollFollow } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

const displayName =
  profile.personalInfo.name.split(' ')[0] ?? profile.personalInfo.name

const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#achievements', label: 'Leadership' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()

  const scaleMotion = useTransform(scrollY, [0, 96], [1, 0.96])
  const scale = useSpring(scaleMotion, springScrollFollow)

  if (reduced) {
    return (
      <header className="sticky top-0 z-50 border-b-2 border-foreground/10 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="font-heading text-sm font-extrabold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:text-base"
          >
            {displayName}
            <span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 font-body text-sm font-medium text-muted-foreground motion-safe-transition hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border-2 border-foreground bg-tertiary px-3 py-2 font-heading text-xs font-bold shadow-pop hover-pop active-pop md:hidden"
          >
            Say hi
          </a>
        </div>
      </header>
    )
  }

  return (
    <Motion.header
      className="sticky top-0 z-50 border-b-2 border-foreground/10 bg-background/90 backdrop-blur-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{
        scale,
        transformOrigin: 'top center',
      }}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="font-heading text-sm font-extrabold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:text-base"
        >
          {displayName}
          <span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 font-body text-sm font-medium text-muted-foreground motion-safe-transition hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="rounded-full border-2 border-foreground bg-tertiary px-3 py-2 font-heading text-xs font-bold shadow-pop hover-pop active-pop"
          >
            Say hi
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-white text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 stroke-[2.5]" aria-hidden />
            ) : (
              <Menu className="h-5 w-5 stroke-[2.5]" aria-hidden />
            )}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen ? (
            <Motion.nav
              id="mobile-nav"
              className="absolute left-0 right-0 top-full z-50 border-b-2 border-foreground/10 bg-background/95 px-4 py-4 backdrop-blur-md md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={springNav}
              aria-label="Primary mobile"
            >
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-xl px-3 py-3 font-body text-sm font-semibold text-foreground hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </Motion.header>
  )
}
