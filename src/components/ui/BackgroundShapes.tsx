/**
 * Decorative shapes — pointer-events none, kept behind content.
 */
export function BackgroundShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -right-10 top-10 h-56 w-56 rounded-full bg-tertiary/40 md:h-72 md:w-72" />
      <div className="absolute -left-8 bottom-20 h-32 w-32 rotate-12 border-4 border-secondary bg-transparent md:h-40 md:w-40" />
      <div className="absolute bottom-10 right-1/4 h-0 w-0 border-l-[36px] border-r-[36px] border-b-[62px] border-l-transparent border-r-transparent border-b-accent/30 md:border-l-[48px] md:border-r-[48px] md:border-b-[80px]" />
    </div>
  )
}
