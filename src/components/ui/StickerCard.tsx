import type { ReactNode } from 'react'

type StickerCardProps = {
  title: string
  subtitle?: string
  badge?: string
  featured?: boolean
  icon?: ReactNode
  children?: ReactNode
}

export function StickerCard({
  title,
  subtitle,
  badge,
  featured,
  icon,
  children,
}: StickerCardProps) {
  const shadow = featured ? 'shadow-sticker-pink' : 'shadow-sticker'

  return (
    <article
      className={`relative rounded-xl border-2 border-foreground bg-card p-6 pt-8 ${shadow} motion-safe-transition card-hover-wiggle md:p-8`}
    >
      {icon ? (
        <div
          className="absolute -top-5 left-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-quaternary text-foreground motion-safe-transition animate-wiggle-hover"
          aria-hidden
        >
          {icon}
        </div>
      ) : null}
      <div className={icon ? 'mt-2' : ''}>
        {badge ? (
          <span className="mb-2 inline-block rounded-full border-2 border-foreground bg-muted px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-foreground">
            {badge}
          </span>
        ) : null}
        <h3 className="font-heading text-xl font-extrabold text-foreground md:text-2xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-1 text-sm font-medium text-muted-foreground md:text-base">
            {subtitle}
          </p>
        ) : null}
        {children ? (
          <div className="mt-4 text-sm leading-relaxed text-foreground md:text-base">
            {children}
          </div>
        ) : null}
      </div>
    </article>
  )
}
