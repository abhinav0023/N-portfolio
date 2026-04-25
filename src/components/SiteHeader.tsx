import { profile } from '../data/profile'

const displayName = profile.personalInfo.name.split(' ')[0] ?? profile.personalInfo.name

const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#achievements', label: 'Leadership' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="font-heading text-sm font-extrabold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:text-base"
        >
          {displayName}
          <span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 font-body text-sm font-medium text-muted-foreground motion-safe-transition hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border-2 border-foreground bg-tertiary px-3 py-2 font-heading text-xs font-bold shadow-pop hover-pop active-pop md:hidden"
        >
          Say hi
        </a>
      </div>
    </header>
  )
}
