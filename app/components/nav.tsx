'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, PencilIcon, EnvelopeIcon, SunIcon, LanguageIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { Dock, DockIcon } from '@/ui/dock'
import { Separator } from '@/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip'
import { cn } from '@/lib/utils'
import LanguageSelector from './LanguageSelector'
import type { Language } from '@/lib/utils/lang'

const navigationLinks = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Blog', href: '/blog', icon: BookOpenIcon },
]

const socialLinks = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/MathysCogne', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        />
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/mathys-cogne-foucault/', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
        />
      </svg>
    )
  },
  { name: 'Email', href: 'mailto:mathys.cognef@gmail.com', icon: EnvelopeIcon },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <div className="relative hidden md:block">
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
        <TooltipProvider>
          <Dock 
            className="rounded-full border border-white/10 bg-black/70 px-4 backdrop-blur-md"
            iconDistance={100}
            iconMagnification={70}
          >
            {/* Navigation Links */}
            {navigationLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href

              return (
                <DockIcon key={link.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link 
                        href={link.href}
                        className={cn(
                          "flex h-12 w-12 items-center justify-center transition-colors",
                          isActive ? "text-white" : "text-white/60 hover:text-white/80"
                        )}
                      >
                        <Icon />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              )
            })}

            <Separator orientation="vertical" className="mx-2 h-8 bg-white/10" />

            {/* Social Links */}
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <DockIcon key={link.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center text-white/60 transition-colors hover:text-white/80"
                      >
                        <Icon />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              )
            })}

            <Separator orientation="vertical" className="mx-2 h-8 bg-white/10" />

            {/* Language Selector */}
            <DockIcon>
              <LanguageSelector />
            </DockIcon>
            
          </Dock>
        </TooltipProvider>
      </nav>
    </div>
  )
} 