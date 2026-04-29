/**
 * Unit tests for ScrollReveal component and useReducedMotion hook
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useReducedMotion } from '../../lib/useReducedMotion'

describe('useReducedMotion', () => {
  let originalWindow: typeof window
  let originalMatchMedia: typeof window.matchMedia

  beforeEach(() => {
    // Store original window and matchMedia
    originalWindow = global.window
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    // Restore original window and matchMedia
    global.window = originalWindow
    window.matchMedia = originalMatchMedia
  })

  it('should be exported as a named export', () => {
    expect(useReducedMotion).toBeDefined()
    expect(typeof useReducedMotion).toBe('function')
  })

  it('should return a boolean', () => {
    // Mock matchMedia to return a valid MediaQueryList
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const result = useReducedMotion()
    expect(typeof result).toBe('boolean')
  })

  it('should check window.matchMedia with prefers-reduced-motion query', () => {
    const mockMatchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    window.matchMedia = mockMatchMedia

    useReducedMotion()

    expect(mockMatchMedia).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)')
  })

  it('should return true when prefers-reduced-motion: reduce is matched', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const result = useReducedMotion()
    expect(result).toBe(true)
  })

  it('should return false when prefers-reduced-motion is not matched', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const result = useReducedMotion()
    expect(result).toBe(false)
  })

  it('should have SSR safety check (typeof window !== "undefined")', () => {
    // Simulate SSR environment by deleting window
    // @ts-expect-error - Intentionally testing SSR scenario
    delete global.window

    const result = useReducedMotion()
    
    // Should return false in SSR environment (no animations)
    expect(result).toBe(false)
  })

  it('should return false when matchMedia is not supported', () => {
    // Mock window without matchMedia support (older browsers)
    // @ts-expect-error - Intentionally testing legacy browser scenario
    window.matchMedia = undefined

    const result = useReducedMotion()
    expect(result).toBe(false)
  })
})
