type ChipProps = {
  children: string
  tone?: 'accent' | 'secondary' | 'tertiary' | 'muted'
}

const tones: Record<NonNullable<ChipProps['tone']>, string> = {
  accent: 'bg-accent/15 text-foreground border-foreground',
  secondary: 'bg-secondary/20 text-foreground border-foreground',
  tertiary: 'bg-tertiary/35 text-foreground border-foreground',
  muted: 'bg-muted text-foreground border-border',
}

export function Chip({ children, tone = 'muted' }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-2 px-3 py-1 font-body text-xs font-medium md:text-sm ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
