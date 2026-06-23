'use client';

import Link from 'next/link';
import { Code, Share2, Mail } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'GitHub', href: siteConfig.github, icon: Code },
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: Share2 },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-bold">SM</span>
              </div>
              <span className="font-semibold text-foreground">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              {siteConfig.subtitle} building enterprise web applications with React, TypeScript, and
              Laravel.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-3 text-sm">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-3 text-sm">Connect</h3>
            <div className="flex gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className={cn(
                      'p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors'
                    )}
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <a
              href={siteConfig.resumePath}
              download
              className="inline-block mt-4 text-sm text-accent hover:text-accent-hover transition-colors"
            >
              Download resume →
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-muted">
          <p>
            &copy; {currentYear} {siteConfig.fullName}
          </p>
          <p>Built with Next.js, React, and TypeScript</p>
        </div>
      </Container>
    </footer>
  );
}
