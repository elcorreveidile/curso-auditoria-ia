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
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

export default function ProtectedDoc({
  title,
  subtitle,
  sessionLabel,
  content,
  backHref = '/acceso/',
  backLabel = '← Volver a materiales',
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
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

      {/* NAVEGACIÓN ENTRE SESIONES */}
      {(prevHref || nextHref) && (
        <section className="border-t border-ink">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex justify-between gap-4">
              {prevHref && (
                <Link
                  href={prevHref}
                  className="flex-1 border border-ink px-6 py-4 font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors text-center"
                >
                  ← {prevLabel || 'Anterior'}
                </Link>
              )}
              <div className={`${prevHref && nextHref ? 'flex-1' : ''}`}></div>
              {nextHref && (
                <Link
                  href={nextHref}
                  className="flex-1 border border-ink bg-ink text-paper px-6 py-4 font-mono text-xs uppercase tracking-wider hover:bg-paper hover:text-ink transition-colors text-center"
                >
                  {nextLabel || 'Siguiente →'}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </AccessGate>
  );
}
