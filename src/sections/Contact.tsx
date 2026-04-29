import { Mail, Phone } from 'lucide-react'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import { IconGithub, IconLinkedin } from '../components/icons/SocialIcons'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { profile } from '../data/profile'

export function Contact() {
  const { contact } = profile.personalInfo

  const links = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail className="h-5 w-5 stroke-[2.5]" aria-hidden />,
    },
    {
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^\d+]/g, '')}`,
      icon: <Phone className="h-5 w-5 stroke-[2.5]" aria-hidden />,
    },
    {
      label: 'LinkedIn',
      value: contact.linkedin,
      href: contact.linkedin,
      icon: <IconLinkedin className="h-5 w-5" />,
    },
    {
      label: 'GitHub',
      value: contact.github,
      href: contact.github,
      icon: <IconGithub className="h-5 w-5" />,
    },
  ]

  return (
    <Section
      id="contact"
      eyebrow="Let’s talk"
      title="Contact"
      description="Reach out for internships, collaborations, or a friendly hello."
    >
      <ScrollReveal className="grid gap-8 lg:grid-cols-2" direction="up">
        <div className="rounded-xl border-2 border-foreground bg-card p-6 shadow-sticker md:p-8">
          <div className="flex flex-wrap gap-4">
            <Button href={`mailto:${contact.email}`}>Email</Button>
            <Button variant="secondary" href={contact.github}>
              GitHub
            </Button>
          </div>
        </div>
        <ul className="grid gap-4">
          {links.map((item, index) => (
            <li key={item.label}>
              <ScrollReveal
                delay={index * 0.1}
                viewportAmount={0.35}
                direction="right"
              >
                <a
                  href={item.href}
                  className="flex items-center gap-4 rounded-xl border-2 border-foreground bg-white p-4 shadow-pop motion-safe-transition hover-pop active-pop focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:p-5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-accent text-accent-foreground">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-heading text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="break-all font-body text-sm font-semibold text-foreground md:text-base">
                      {item.value}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </Section>
  )
}
