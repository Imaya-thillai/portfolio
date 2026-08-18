import { Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.04] dark:border-white/[0.04] py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-sm text-neutral-600">
          Designed &amp; built by{' '}
          <span className="text-neutral-600 dark:text-neutral-400">{siteConfig.name}</span>
        </p>

        <p className="text-xs text-neutral-700 text-center md:text-left">
          Made with Next.js, too much coffee, and the occasional existential
          crisis.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: siteConfig.github, label: 'GitHub' },
            { icon: Linkedin, href: siteConfig.linkedin, label: 'LinkedIn' },
            {
              icon: Mail,
              href: `mailto:${siteConfig.email}`,
              label: 'Email',
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-neutral-600 hover:text-neutral-700 dark:text-neutral-300 transition-colors duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
