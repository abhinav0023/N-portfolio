/**
 * ScrollReveal Component
 * 
 * A reusable wrapper component that applies scroll-triggered animations to its children
 * using Framer Motion's whileInView prop. Elements animate from an initial state of
 * opacity: 0 and translateY: 40px to a final state of opacity: 1 and translateY: 0
 * when they enter the viewport.
 * 
 * Features:
 * - Smooth fade-in and slide-up animations triggered on viewport entry
 * - Configurable animation delays and staggered child animations
 * - Animations execute exactly once per element (viewport.once: true)
 * - GPU-accelerated transforms for optimal performance (60fps target)
 * - Full accessibility support: respects prefers-reduced-motion setting
 * - When reduced motion is enabled, content renders immediately without animations
 * - TypeScript-first with complete type safety
 * 
 * Accessibility:
 * - Detects user's prefers-reduced-motion media query preference
 * - Disables all animations when prefers-reduced-motion: reduce is detected
 * - Ensures content remains fully accessible to keyboard and screen reader users
 * - Does not interfere with focus management or assistive technologies
 * 
 * @example
 * // Basic usage - Hero section
 * <ScrollReveal>
 *   <h1>Welcome to My Portfolio</h1>
 *   <p>Full-stack developer specializing in React and TypeScript</p>
 * </ScrollReveal>
 * 
 * @example
 * // With delay - About section
 * <ScrollReveal delay={0.2}>
 *   <div className="rounded-xl border-2 p-6">
 *     <p>About me content...</p>
 *   </div>
 * </ScrollReveal>
 * 
 * @example
 * // With staggered children - Projects grid
 * {projects.map((project, index) => (
 *   <ScrollReveal key={project.id} delay={index * 0.1}>
 *     <StickerCard title={project.name}>
 *       {project.description}
 *     </StickerCard>
 *   </ScrollReveal>
 * ))}
 * 
 * @example
 * // Custom variants for advanced animations
 * <ScrollReveal variants={{
 *   hidden: { opacity: 0, scale: 0.8, rotate: -10 },
 *   visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } }
 * }}>
 *   <div>Custom animated content</div>
 * </ScrollReveal>
 */

/**
 * Defines the structure for a single animation state (hidden or visible).
 * Used to specify animation properties like opacity, position, scale, rotation, and timing.
 */
type Variant = {
  /** Opacity value between 0 (transparent) and 1 (opaque) */
  opacity?: number
  /** Vertical translation in pixels or CSS string (e.g., "40px") */
  y?: number | string
  /** Scale transformation (1 = normal size, <1 = smaller, >1 = larger) */
  scale?: number
  /** Rotation in degrees */
  rotate?: number
  /** Transition timing configuration */
  transition?: {
    /** Animation duration in seconds */
    duration?: number
    /** Easing function name (e.g., "easeOut") or cubic-bezier array */
    ease?: string | number[]
    /** Delay before animation starts in seconds */
    delay?: number
    /** Delay between child animations in seconds (for staggered animations) */
    staggerChildren?: number
  }
}

/**
 * Defines the complete animation variant set with hidden and visible states.
 * Used to customize the animation behavior of the ScrollReveal component.
 */
type AnimationVariants = {
  /** Initial state before element enters viewport */
  hidden: Variant
  /** Final state when element is visible in viewport */
  visible: Variant
}

/**
 * Props for the ScrollReveal component.
 * Provides configuration options for scroll-triggered animations.
 */
interface ScrollRevealProps {
  /**
   * Content to be animated when entering the viewport.
   * Can be any valid React node (elements, text, components, etc.).
   * @required
   */
  children: React.ReactNode

  /**
   * Delay before animation starts, in seconds.
   * Useful for creating sequential animations or timing animations with other page events.
   * @default 0
   * @example
   * // Delay animation by 0.2 seconds
   * <ScrollReveal delay={0.2}>...</ScrollReveal>
   */
  delay?: number

  /**
   * Stagger delay between child animations, in seconds.
   * When multiple children are animated, each child will start after the previous one
   * by this amount of time, creating a cascading effect.
   * @default 0
   * @example
   * // Stagger children by 0.1 seconds each
   * <ScrollReveal stagger={0.1}>
   *   <div>Child 1</div>
   *   <div>Child 2</div>
   *   <div>Child 3</div>
   * </ScrollReveal>
   */
  stagger?: number

  /**
   * Additional CSS classes to apply to the wrapper element.
   * Allows combining ScrollReveal with Tailwind CSS or custom styles.
   * @default ''
   * @example
   * // Add custom styling
   * <ScrollReveal className="my-8 px-4">...</ScrollReveal>
   */
  className?: string

  /**
   * Custom animation variants to override the default fade-in and slide-up animation.
   * Provides full control over animation properties including opacity, position, scale, rotation, and timing.
   * @default undefined (uses default variants)
   * @example
   * // Custom scale and rotate animation
   * <ScrollReveal variants={{
   *   hidden: { opacity: 0, scale: 0.8, rotate: -10 },
   *   visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } }
   * }}>
   *   ...
   * </ScrollReveal>
   */
  variants?: AnimationVariants
}

/**
 * Hook to detect if the user prefers reduced motion.
 * Checks the prefers-reduced-motion media query and returns true if the user
 * has enabled reduced motion in their system accessibility settings.
 * 
 * This hook is SSR-safe and will return false during server-side rendering
 * (when window is undefined).
 * 
 * @returns {boolean} true if user prefers reduced motion, false otherwise
 * 
 * @example
 * const prefersReducedMotion = useReducedMotion()
 * if (prefersReducedMotion) {
 *   // Render without animations
 * }
 */
export function useReducedMotion(): boolean {
  // SSR safety check: return false if window is not available
  if (typeof window === 'undefined') {
    return false
  }

  // Check if matchMedia is supported (for older browsers)
  if (!window.matchMedia) {
    return false
  }

  // Query the prefers-reduced-motion media query
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  
  // Return true if user prefers reduced motion
  return mediaQuery.matches
}

export function ScrollReveal({
  children,
  delay: _delay = 0,
  stagger: _stagger = 0,
  className = '',
  variants: _variants
}: ScrollRevealProps) {
  // Placeholder implementation - will be completed in task 2.5
  return <div className={className}>{children}</div>
}
