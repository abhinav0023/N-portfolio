import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 py-16 md:py-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? (
            <p className="mb-2 font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}
