# Tasks: Scroll-Based Animations with Framer Motion

## 1. Setup and Installation

- [x] 1.1 Install Framer Motion dependency
  - [x] 1.1.1 Run `npm install framer-motion` to add the package
  - [x] 1.1.2 Verify Framer Motion version is 11.0.0 or later in package.json
  - [x] 1.1.3 Verify React 19 compatibility with installed Framer Motion version

- [x] 1.2 Create animations folder structure
  - [x] 1.2.1 Create `src/components/animations/` directory
  - [x] 1.2.2 Verify folder follows existing project structure conventions

## 2. Core Component Implementation

- [x] 2.1 Create ScrollReveal component file
  - [x] 2.1.1 Create `src/components/animations/ScrollReveal.tsx` file
  - [x] 2.1.2 Add file header with component description

- [x] 2.2 Define TypeScript interfaces
  - [x] 2.2.1 Define `ScrollRevealProps` interface with all props (children, delay, stagger, className, variants)
  - [x] 2.2.2 Define `AnimationVariants` type for custom variants
  - [x] 2.2.3 Define `Variant` type for animation states
  - [x] 2.2.4 Add JSDoc comments for all interface properties

- [x] 2.3 Implement reduced motion detection
  - [x] 2.3.1 Create `useReducedMotion` hook or inline detection logic
  - [x] 2.3.2 Check `window.matchMedia('(prefers-reduced-motion: reduce)')`
  - [x] 2.3.3 Add SSR safety check (`typeof window !== 'undefined'`)
  - [x] 2.3.4 Return boolean indicating motion preference

- [x] 2.4 Implement default animation variants
  - [x] 2.4.1 Create `getDefaultVariants` function accepting delay and stagger
  - [x] 2.4.2 Define hidden state: `{ opacity: 0, y: 40 }`
  - [x] 2.4.3 Define visible state: `{ opacity: 1, y: 0 }`
  - [x] 2.4.4 Configure transition: duration 0.6s, easeOut, with delay and staggerChildren
  - [x] 2.4.5 Return AnimationVariants object

- [ ] 2.5 Implement ScrollReveal component logic
  - [ ] 2.5.1 Import motion from framer-motion
  - [ ] 2.5.2 Destructure props with default values (delay=0, stagger=0, className='')
  - [ ] 2.5.3 Call reduced motion detection
  - [ ] 2.5.4 Generate or use provided animation variants
  - [ ] 2.5.5 Configure viewport options: `{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }`
  - [ ] 2.5.6 Implement conditional rendering: plain div if reduced motion, motion.div otherwise
  - [ ] 2.5.7 Apply motion.div props: initial="hidden", whileInView="visible", viewport, variants
  - [ ] 2.5.8 Render children within wrapper

- [ ] 2.6 Export component
  - [ ] 2.6.1 Export ScrollReveal as named export
  - [ ] 2.6.2 Verify TypeScript compilation succeeds

## 3. Integration with Existing Sections

- [ ] 3.1 Integrate with Hero section
  - [ ] 3.1.1 Import ScrollReveal in `src/sections/Hero.tsx`
  - [ ] 3.1.2 Wrap main content (h1, p, buttons) with ScrollReveal
  - [ ] 3.1.3 Test animation triggers on page load/scroll
  - [ ] 3.1.4 Verify existing styles remain intact

- [ ] 3.2 Integrate with About section
  - [ ] 3.2.1 Import ScrollReveal in `src/sections/About.tsx`
  - [ ] 3.2.2 Wrap the card div with ScrollReveal and delay={0.2}
  - [ ] 3.2.3 Test animation triggers when scrolling to About section
  - [ ] 3.2.4 Verify card styling and shadow effects remain intact

- [ ] 3.3 Integrate with Projects section
  - [ ] 3.3.1 Import ScrollReveal in `src/sections/Projects.tsx`
  - [ ] 3.3.2 Wrap each StickerCard with ScrollReveal in the map function
  - [ ] 3.3.3 Add incremental delay: `delay={index * 0.1}` for stagger effect
  - [ ] 3.3.4 Test staggered animations for project cards
  - [ ] 3.3.5 Verify grid layout and card styling remain intact

- [ ] 3.4 Integrate with Skills section
  - [ ] 3.4.1 Import ScrollReveal in `src/sections/Skills.tsx`
  - [ ] 3.4.2 Wrap each skill category card with ScrollReveal
  - [ ] 3.4.3 Add incremental delay: `delay={sectionIndex * 0.15}` for stagger
  - [ ] 3.4.4 Test staggered animations for skill cards
  - [ ] 3.4.5 Verify chip styling and card hover effects remain intact

## 4. Accessibility Implementation

- [ ] 4.1 Test reduced motion behavior
  - [ ] 4.1.1 Enable "Reduce motion" in OS accessibility settings
  - [ ] 4.1.2 Verify no animations play with reduced motion enabled
  - [ ] 4.1.3 Verify content is immediately visible without fade-in
  - [ ] 4.1.4 Verify all content remains accessible and readable

- [ ] 4.2 Test keyboard navigation
  - [ ] 4.2.1 Navigate page using Tab key
  - [ ] 4.2.2 Verify focus indicators work correctly on animated elements
  - [ ] 4.2.3 Verify animations don't interfere with focus management
  - [ ] 4.2.4 Verify all interactive elements remain keyboard accessible

- [ ] 4.3 Test screen reader compatibility
  - [ ] 4.3.1 Test with screen reader (NVDA, JAWS, or VoiceOver)
  - [ ] 4.3.2 Verify animated content is announced correctly
  - [ ] 4.3.3 Verify no content is hidden from screen readers
  - [ ] 4.3.4 Verify animation states don't affect content semantics

## 5. Performance Optimization

- [ ] 5.1 Verify GPU acceleration
  - [ ] 5.1.1 Open Chrome DevTools Performance tab
  - [ ] 5.1.2 Record animation performance during scroll
  - [ ] 5.1.3 Verify animations use transform and opacity (GPU-accelerated)
  - [ ] 5.1.4 Verify animations run on compositor thread

- [ ] 5.2 Test frame rate
  - [ ] 5.2.1 Test on desktop browser (Chrome, Firefox, Safari)
  - [ ] 5.2.2 Verify 60fps frame rate during animations
  - [ ] 5.2.3 Test on mobile device (iOS Safari, Chrome Android)
  - [ ] 5.2.4 Verify smooth animations on mobile (60fps or 30fps minimum)

- [ ] 5.3 Measure layout stability
  - [ ] 5.3.1 Use Chrome DevTools Lighthouse to measure CLS
  - [ ] 5.3.2 Verify Cumulative Layout Shift (CLS) = 0 or near 0
  - [ ] 5.3.3 Verify no layout shifts during animations
  - [ ] 5.3.4 Verify page layout remains stable during scroll

- [ ] 5.4 Optimize bundle size
  - [ ] 5.4.1 Run `npm run build` to create production bundle
  - [ ] 5.4.2 Analyze bundle size with build output
  - [ ] 5.4.3 Verify Framer Motion adds ~30-35KB gzipped
  - [ ] 5.4.4 Verify ScrollReveal component adds minimal overhead (<2KB)

## 6. Testing

- [ ] 6.1 Write unit tests
  - [ ] 6.1.1 Set up Vitest and React Testing Library (if not already configured)
  - [ ] 6.1.2 Create `src/components/animations/ScrollReveal.test.tsx`
  - [ ] 6.1.3 Write test: "renders children correctly"
  - [ ] 6.1.4 Write test: "applies custom className"
  - [ ] 6.1.5 Write test: "respects reduced motion preference"
  - [ ] 6.1.6 Write test: "applies default delay and stagger values"
  - [ ] 6.1.7 Write test: "uses custom variants when provided"
  - [ ] 6.1.8 Run tests with `npm test` and verify all pass

- [ ] 6.2 Write property-based tests (optional)
  - [ ] 6.2.1 Install fast-check: `npm install -D fast-check`
  - [ ] 6.2.2 Create property test for delay values (∀ delay ∈ [0, 10])
  - [ ] 6.2.3 Create property test for stagger values (∀ stagger ∈ [0, 2])
  - [ ] 6.2.4 Create property test for opacity bounds (∀ opacity ∈ [0, 1])
  - [ ] 6.2.5 Run property tests and verify all pass

- [ ] 6.3 Write integration tests (optional)
  - [ ] 6.3.1 Set up Playwright or Cypress (if not already configured)
  - [ ] 6.3.2 Write E2E test: "animations trigger on scroll"
  - [ ] 6.3.3 Write E2E test: "reduced motion disables animations"
  - [ ] 6.3.4 Write E2E test: "staggered animations work correctly"
  - [ ] 6.3.5 Write E2E test: "multiple sections animate independently"
  - [ ] 6.3.6 Run E2E tests and verify all pass

## 7. Browser Compatibility Testing

- [ ] 7.1 Test on Chrome
  - [ ] 7.1.1 Test on Chrome 90+ (desktop)
  - [ ] 7.1.2 Verify animations work correctly
  - [ ] 7.1.3 Verify reduced motion works correctly
  - [ ] 7.1.4 Test on Chrome Android (mobile)

- [ ] 7.2 Test on Firefox
  - [ ] 7.2.1 Test on Firefox 88+ (desktop)
  - [ ] 7.2.2 Verify animations work correctly
  - [ ] 7.2.3 Verify reduced motion works correctly

- [ ] 7.3 Test on Safari
  - [ ] 7.3.1 Test on Safari 14+ (desktop)
  - [ ] 7.3.2 Verify animations work correctly
  - [ ] 7.3.3 Verify reduced motion works correctly
  - [ ] 7.3.4 Test on iOS Safari (mobile)

- [ ] 7.4 Test on Edge
  - [ ] 7.4.1 Test on Edge 90+ (desktop)
  - [ ] 7.4.2 Verify animations work correctly
  - [ ] 7.4.3 Verify reduced motion works correctly

## 8. Documentation

- [ ] 8.1 Add component documentation
  - [ ] 8.1.1 Add JSDoc comments to ScrollReveal component
  - [ ] 8.1.2 Document all props with @param tags
  - [ ] 8.1.3 Add usage examples in JSDoc @example tags
  - [ ] 8.1.4 Document return type with @returns tag

- [ ] 8.2 Create usage examples
  - [ ] 8.2.1 Document basic usage example in code comments
  - [ ] 8.2.2 Document usage with delay prop
  - [ ] 8.2.3 Document usage with stagger prop
  - [ ] 8.2.4 Document usage with custom variants

- [ ] 8.3 Update project README (optional)
  - [ ] 8.3.1 Add section about scroll animations
  - [ ] 8.3.2 Document Framer Motion dependency
  - [ ] 8.3.3 Add usage examples for developers
  - [ ] 8.3.4 Document accessibility features

## 9. Code Quality and Linting

- [ ] 9.1 Run linter
  - [ ] 9.1.1 Run `npm run lint` to check for ESLint errors
  - [ ] 9.1.2 Fix any linting errors in ScrollReveal.tsx
  - [ ] 9.1.3 Fix any linting errors in updated section files
  - [ ] 9.1.4 Verify all files pass linting

- [ ] 9.2 TypeScript type checking
  - [ ] 9.2.1 Run `npm run build` to verify TypeScript compilation
  - [ ] 9.2.2 Fix any TypeScript errors
  - [ ] 9.2.3 Verify no type errors in ScrollReveal component
  - [ ] 9.2.4 Verify no type errors in section integrations

- [ ] 9.3 Code formatting
  - [ ] 9.3.1 Ensure consistent code formatting (Prettier if configured)
  - [ ] 9.3.2 Verify indentation and spacing consistency
  - [ ] 9.3.3 Verify import statements are organized
  - [ ] 9.3.4 Verify naming conventions follow project standards

## 10. Final Verification

- [ ] 10.1 Visual testing
  - [ ] 10.1.1 Load application in browser (`npm run dev`)
  - [ ] 10.1.2 Scroll through entire page and verify all animations
  - [ ] 10.1.3 Verify Hero section animates on load
  - [ ] 10.1.4 Verify About section animates on scroll
  - [ ] 10.1.5 Verify Projects cards animate with stagger
  - [ ] 10.1.6 Verify Skills cards animate with stagger
  - [ ] 10.1.7 Verify animations are smooth and performant

- [ ] 10.2 Responsive testing
  - [ ] 10.2.1 Test on desktop viewport (1920x1080)
  - [ ] 10.2.2 Test on tablet viewport (768x1024)
  - [ ] 10.2.3 Test on mobile viewport (375x667)
  - [ ] 10.2.4 Verify animations work correctly on all screen sizes

- [ ] 10.3 Accessibility final check
  - [ ] 10.3.1 Run Lighthouse accessibility audit
  - [ ] 10.3.2 Verify accessibility score remains high (90+)
  - [ ] 10.3.3 Fix any accessibility issues identified
  - [ ] 10.3.4 Verify reduced motion works in all sections

- [ ] 10.4 Production build verification
  - [ ] 10.4.1 Run `npm run build` to create production build
  - [ ] 10.4.2 Run `npm run preview` to test production build
  - [ ] 10.4.3 Verify animations work in production build
  - [ ] 10.4.4 Verify no console errors or warnings

## 11. Deployment Preparation

- [ ] 11.1 Final code review
  - [ ] 11.1.1 Review ScrollReveal component code for quality
  - [ ] 11.1.2 Review section integration changes
  - [ ] 11.1.3 Verify no unnecessary code or comments
  - [ ] 11.1.4 Verify all TODOs are resolved

- [ ] 11.2 Commit changes
  - [ ] 11.2.1 Stage all changes: `git add .`
  - [ ] 11.2.2 Commit with descriptive message: "feat: add scroll-based animations with Framer Motion"
  - [ ] 11.2.3 Verify commit includes all necessary files
  - [ ] 11.2.4 Push to repository

- [ ] 11.3 Create pull request (if applicable)
  - [ ] 11.3.1 Create PR with descriptive title
  - [ ] 11.3.2 Add PR description with feature overview
  - [ ] 11.3.3 Add screenshots or GIFs of animations
  - [ ] 11.3.4 Request code review

## Task Summary

**Total Tasks**: 11 major sections
**Estimated Effort**: 
- Core implementation: 4-6 hours
- Integration: 2-3 hours
- Testing: 3-4 hours
- Documentation: 1-2 hours
- Total: 10-15 hours

**Priority Order**:
1. Setup and Installation (Section 1)
2. Core Component Implementation (Section 2)
3. Integration with Existing Sections (Section 3)
4. Accessibility Implementation (Section 4)
5. Performance Optimization (Section 5)
6. Testing (Section 6)
7. Browser Compatibility Testing (Section 7)
8. Documentation (Section 8)
9. Code Quality and Linting (Section 9)
10. Final Verification (Section 10)
11. Deployment Preparation (Section 11)

**Critical Path**:
- Tasks 1.1, 2.1-2.6, 3.1-3.4 must be completed sequentially
- Tasks 4.1-4.3, 5.1-5.4, 6.1-6.3 can be done in parallel after core implementation
- Tasks 10.1-10.4 must be completed before deployment

**Dependencies**:
- Section 2 depends on Section 1 (Framer Motion must be installed)
- Section 3 depends on Section 2 (ScrollReveal component must exist)
- Sections 4-9 depend on Section 3 (integrations must be complete)
- Section 10 depends on all previous sections
- Section 11 depends on Section 10 (final verification must pass)
