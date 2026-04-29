/**
 * Demonstration of useReducedMotion hook usage
 * This file shows how the hook can be used in different scenarios
 */

import { useReducedMotion } from './src/components/animations/ScrollReveal'

// Example 1: Basic usage in a component
function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion()
  
  if (prefersReducedMotion) {
    // User prefers reduced motion - render without animations
    return <div className="content">Static content (no animation)</div>
  }
  
  // User allows animations - render with animations
  return (
    <div className="content animate-fade-in">
      Animated content
    </div>
  )
}

// Example 2: Conditional animation classes
function ConditionalAnimation() {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <div className={prefersReducedMotion ? '' : 'animate-slide-up'}>
      Content with conditional animation
    </div>
  )
}

// Example 3: Using with inline styles
function InlineStyleAnimation() {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <div
      style={{
        transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
        transform: prefersReducedMotion ? 'none' : 'translateY(0)'
      }}
    >
      Content with conditional inline styles
    </div>
  )
}

// Example 4: Integration with Framer Motion (as used in ScrollReveal)
import { motion } from 'framer-motion'

function FramerMotionExample() {
  const prefersReducedMotion = useReducedMotion()
  
  if (prefersReducedMotion) {
    // Render plain div without motion
    return <div>Content without motion</div>
  }
  
  // Render with Framer Motion animations
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Animated content with Framer Motion
    </motion.div>
  )
}

/**
 * How the hook works internally:
 * 
 * 1. SSR Safety Check:
 *    - Checks if `window` is defined (returns false during SSR)
 *    - This prevents errors when rendering on the server
 * 
 * 2. Browser Compatibility Check:
 *    - Checks if `window.matchMedia` is supported
 *    - Returns false for very old browsers (graceful degradation)
 * 
 * 3. Media Query Check:
 *    - Queries '(prefers-reduced-motion: reduce)'
 *    - Returns true if user has enabled reduced motion in OS settings
 *    - Returns false if user allows animations
 * 
 * User Settings Locations:
 * - macOS: System Preferences > Accessibility > Display > Reduce motion
 * - Windows: Settings > Ease of Access > Display > Show animations
 * - iOS: Settings > Accessibility > Motion > Reduce Motion
 * - Android: Settings > Accessibility > Remove animations
 */

export {
  AnimatedComponent,
  ConditionalAnimation,
  InlineStyleAnimation,
  FramerMotionExample
}
