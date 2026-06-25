'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { RevealGroup, RevealItem, RevealOnView } from '@/components/layout/reveal';
import { Section } from '@/components/ui/section';
import { useToast } from '@/components/ui/toast';
import { Mail, Share2, Code, Download } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/seifeldin02',
    href: siteConfig.linkedin,
    icon: Share2,
  },
  {
    label: 'GitHub',
    value: 'github.com/Seifeldin02',
    href: siteConfig.github,
    icon: Code,
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (response.ok) {
        toast(result.message ?? 'Message sent successfully!', 'success');
        reset();
      } else {
        toast(result.error ?? 'Failed to send message. Please try again.', 'error');
      }
    } catch {
      toast('Network error. Please try again later.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pt-28 pb-8 sm:pt-32">
        <Container size="narrow">
          <RevealGroup>
            <RevealItem>
              <p className="text-sm font-medium uppercase tracking-wide text-accent mb-3">
                Contact
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Let&apos;s connect
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-lg text-muted leading-relaxed">
                Open to most software engineering roles, willing to learn. Reach out via email,
                LinkedIn, or the form below.
              </p>
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <RevealOnView className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground mb-2">Direct contact</h2>

            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={method.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
                >
                  <div className="p-2.5 rounded-lg bg-accent-subtle">
                    <Icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{method.label}</p>
                    <p className="text-sm text-muted truncate">{method.value}</p>
                  </div>
                </a>
              );
            })}

            <a
              href={siteConfig.resumePath}
              download
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
            >
              <div className="p-2.5 rounded-lg bg-surface-muted">
                <Download size={20} className="text-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium text-foreground">Resume</p>
                <p className="text-sm text-muted">Download PDF</p>
              </div>
            </a>

            <p className="text-sm text-muted pt-2">
              Prefer email?{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-9 items-center rounded-md text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {siteConfig.email}
              </a>
            </p>
          </RevealOnView>

          <RevealOnView delay={0.08}>
            <Card className="p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-foreground mb-1">Send a message</h2>
              <p className="text-sm text-muted mb-6">
                Form submissions are validated server-side. You can also email directly if
                preferred.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    {...register('name')}
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    {...register('subject')}
                    type="text"
                    placeholder="Role inquiry, collaboration, etc."
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    placeholder="Tell me about the opportunity..."
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" disabled={loading} className="w-full">
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </RevealOnView>
        </div>
      </Section>
    </>
  );
}
