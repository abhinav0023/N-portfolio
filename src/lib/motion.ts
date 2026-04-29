import type { Variants } from 'framer-motion'

/** Snappy ease-out for tweens (portfolio motion language). */
export const EASE = [0.215, 0.61, 0.355, 1] as const

export const springHero = { type: 'spring' as const, stiffness: 220, damping: 14 }
export const springNav = { type: 'spring' as const, stiffness: 220, damping: 24 }
export const springLayout = { type: 'spring' as const, stiffness: 380, damping: 30 }
export const springFab = { type: 'spring' as const, stiffness: 300, damping: 22 }
export const springScrollFollow = {
  stiffness: 140,
  damping: 24,
  mass: 0.4,
  restDelta: 0.001,
}

export type ScrollRevealDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'scale'
  | 'pop'

export function hiddenForDirection(
  direction: ScrollRevealDirection
): Record<string, number> {
  switch (direction) {
    case 'up':
      return { opacity: 0, y: 60 }
    case 'down':
      return { opacity: 0, y: -60 }
    case 'left':
      return { opacity: 0, x: -80 }
    case 'right':
      return { opacity: 0, x: 80 }
    case 'scale':
      return { opacity: 0, scale: 0.85 }
    case 'pop':
      return { opacity: 0, scale: 0.6, rotate: -6 }
    default:
      return { opacity: 0, y: 60 }
  }
}

/** @deprecated Prefer `getScrollRevealVariants`; kept for callers that used the old name. */
export function getDefaultVariants(
  delay: number,
  stagger: number,
  direction: ScrollRevealDirection = 'up'
): Variants {
  return getScrollRevealVariants(delay, stagger, direction)
}

export function getScrollRevealVariants(
  delay: number,
  stagger: number,
  direction: ScrollRevealDirection = 'up'
): Variants {
  return {
    hidden: hiddenForDirection(direction),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: EASE,
        delay,
        staggerChildren: stagger,
      },
    },
  }
}

/** Project / tile cards: slight tilt in, column-aware stagger. */
export function getCardRevealVariants(index: number, columns: number): Variants {
  const stagger =
    columns <= 1 ? index * 0.12 : (index % columns) * 0.12
  return {
    hidden: {
      opacity: 0,
      y: 80,
      rotate: index % 2 === 0 ? -3 : 3,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: EASE,
        delay: stagger,
      },
    },
  }
}

/** Full-width band (e.g. behind marquee). Parent should clip overflow-x. */
export function getBandRevealVariants(): Variants {
  return {
    hidden: { opacity: 0, scaleX: 0.7, rotate: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      rotate: 1,
      transition: { duration: 0.7, ease: EASE },
    },
  }
}
