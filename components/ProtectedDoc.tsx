'use client';

import AccessGate from '@/components/AccessGate';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface ProtectedDocProps {
  title: string;
  subtitle?: string;
  sessionLabel?: string;
  content: string;
  backHref?: string;
  backLabel?: string;
}

export default function ProtectedDoc({
  title,
  subtitle,
  sessionLabel,
  content,
  backHref = '/acceso/',
  backLabel = '← Volver a materiales',
}: ProtectedDocProps) {
  return (
    <AccessGate>
      <section className="border-b border-ink">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href={backHref}
            className="inline-block font-mono text-xs tracking-wider uppercase text-muted hover:text-accent mb-8"
          >
            {backLabel}
          </Link>
          {sessionLabel && (
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              {sessionLabel}
            </p>
          )}
          <h1 className="font-serif italic text-4xl md:text-6xl leading-none mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="font-serif italic text-lg md:text-xl text-muted leading-snug">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose-curso">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </section>
    </AccessGate>
  );
}
