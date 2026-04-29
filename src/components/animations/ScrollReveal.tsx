import { motion as Motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  getScrollRevealVariants,
  type ScrollRevealDirection,
} from '../../lib/motion'
import { useReducedMotion } from '../../lib/useReducedMotion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  stagger?: number
  className?: string
  variants?: Variants
  direction?: ScrollRevealDirection
  viewportAmount?: number
}

export function ScrollReveal({
  children,
  delay = 0,
  stagger = 0,
  className = '',
  variants,
  direction = 'up',
  viewportAmount = 0.2,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const animationVariants =
    variants ?? getScrollRevealVariants(delay, stagger, direction)

  const viewportOptions = {
    once: true,
    amount: viewportAmount,
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={animationVariants}
      className={className}
    >
      {children}
    </Motion.div>
  )
}

export type { ScrollRevealDirection }
