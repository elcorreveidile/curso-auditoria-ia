'use client';

import AccessGate from '@/components/AccessGate';
import Link from 'next/link';

export default function SlidesPage() {
  return (
    <AccessGate>
      <section className="border-b border-ink">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/acceso/"
            className="inline-block font-mono text-xs tracking-wider uppercase text-muted hover:text-accent mb-8"
          >
            ← Volver a materiales
          </Link>
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Presentación
          </p>
          <h1 className="font-serif italic text-4xl md:text-6xl leading-none mb-4">
            Slides
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-muted leading-snug">
            Presentación HTML autocontenida. Navega con las flechas del teclado.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="border border-ink bg-paper-warm p-8 mb-8">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Abrir slides
          </p>
          <h2 className="font-serif text-3xl mb-4 leading-tight">
            12 diapositivas · ~12 minutos
          </h2>
          <p className="text-sm leading-relaxed text-muted mb-6">
            La presentación se abre a pantalla completa. Usa las flechas del
            teclado (← →), barra espaciadora, o los botones de navegación
            inferiores. Compatible con impresión a PDF.
          </p>
          <a
            href="/slides/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-ink px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
          >
            Abrir presentación ↗
          </a>
        </div>

        <div className="prose-curso">
          <h2>Estructura</h2>
          <ol>
            <li>Portada</li>
            <li>Índice de las tres sesiones</li>
            <li>Apertura Sesión 1 · Fundamentos</li>
            <li>Industria 5.0</li>
            <li>Ciclo de vida (7 fases)</li>
            <li>Siete principios para una IA confiable</li>
            <li>Apertura Sesión 2 · Riesgos y normas</li>
            <li>Pirámide del riesgo (AI Act)</li>
            <li>Matriz probabilidad × impacto</li>
            <li>Tres marcos articulados</li>
            <li>Apertura Sesión 3 · Práctica auditora</li>
            <li>Cierre</li>
          </ol>
          <hr />
          <p>
            <em>Las slides son una síntesis para proyección. El contenido completo
            está en los dossiers de cada sesión.</em>
          </p>
        </div>
      </section>
    </AccessGate>
  );
}
