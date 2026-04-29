import { motion as Motion, useScroll, useSpring } from 'framer-motion'
import { springScrollFollow } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

export function ScrollProgress() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, springScrollFollow)

  if (reduced) {
    return null
  }

  return (
    <Motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-accent"
      style={{ scaleX }}
    />
  )
}
