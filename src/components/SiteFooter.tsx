import { profile } from '../data/profile'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const { name } = profile.personalInfo

  return (
    <footer className="border-t-2 border-foreground/10 bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p className="font-body text-sm text-muted-foreground">
          © {year} {name}. Built with React, Vite, and Tailwind CSS.
        </p>
        <a
          href="#hero"
          className="font-heading text-sm font-bold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
