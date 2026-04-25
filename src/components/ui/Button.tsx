import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Common = {
  variant?: 'primary' | 'secondary'
  className?: string
  children: ReactNode
  icon?: ReactNode
}

export type ButtonProps =
  | (Common &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined
      })
  | (Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    className = '',
    children,
    icon,
    ...rest
  } = props

  const base =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-foreground px-6 py-3 text-center font-heading text-sm font-bold motion-safe-transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

  const variants = {
    primary:
      'bg-accent text-accent-foreground shadow-pop hover-pop active-pop [&_svg]:stroke-[2.5]',
    secondary:
      'bg-transparent text-foreground shadow-none hover:bg-tertiary hover:shadow-none active:translate-y-px [&_svg]:stroke-[2.5]',
  } as const

  const styles = `${base} ${variants[variant]} ${className}`.trim()

  const content = (
    <>
      <span>{children}</span>
      {variant === 'primary' ? (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-foreground">
          {icon ?? <ArrowRight className="h-4 w-4" aria-hidden />}
        </span>
      ) : null}
    </>
  )

  if ('href' in rest && typeof rest.href === 'string') {
    return (
      <a className={styles} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      type="button"
      className={styles}
    >
      {content}
    </button>
  )
}
