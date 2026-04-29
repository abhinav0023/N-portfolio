type MarqueeProps = {
  items: string[]
}

function track(items: string[], suffix: string) {
  return items.map((item) => (
    <span
      key={`${item}-${suffix}`}
      className="px-6 font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-foreground md:text-sm"
    >
      {item}
    </span>
  ))
}

export function Marquee({ items }: MarqueeProps) {
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-white py-3">
      <div className="marquee-row">
        <div className="flex shrink-0 items-center">{track(items, 'a')}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {track(items, 'b')}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {track(items, 'c')}
        </div>
      </div>
    </div>
  )
}
