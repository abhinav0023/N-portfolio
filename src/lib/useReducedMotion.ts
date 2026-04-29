export function useReducedMotion(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  if (!window.matchMedia) {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
