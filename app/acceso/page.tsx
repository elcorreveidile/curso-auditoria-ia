'use client';

import AccessGate from '@/components/AccessGate';
import Link from 'next/link';

export default function Acceso() {
  return (
    <AccessGate>
      <section className="border-b border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Zona del alumnado
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl leading-none mb-6">
            Materiales
          </h1>
          <p className="font-serif italic text-xl md:text-2xl max-w-2xl text-muted leading-snug">
            Dossiers completos, plantillas profesionales, guion docente y
            presentación de slides.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
          Dossiers por sesión
        </p>
        <h2 className="font-serif text-3xl mb-8 leading-tight">
          Contenido teórico completo
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              href: '/materiales/sesion-1/',
              num: 1,
              titulo: 'Disrupción algorítmica y nueva lógica de la utilidad',
              desc: 'NLPUE · 4 dilemas del algoritmo · Enfoques regulatorios comparados (UE/EEUU/China)',
            },
            {
              href: '/materiales/sesion-2/',
              num: 2,
              titulo: 'Marco regulatorio y sistemas de gestión',
              desc: 'AI Act · ISO 42001 · ISO 23894 · NIST AI RMF · Ciclos de vida',
            },
            {
              href: '/materiales/sesion-3/',
              num: 3,
              titulo: 'Riesgos, competitividad y ciberseguridad',
              desc: 'IA generativa · Concentración · Dependencia de proveedores · Ciberseguridad',
            },
            {
              href: '/materiales/sesion-4/',
              num: 4,
              titulo: 'Práctica auditora integral',
              desc: 'Metodología completa · Gobernanza · Comunicación triple dimensión',
            },
          ].map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="border border-ink p-6 hover:bg-ink hover:text-paper transition-colors group"
            >
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-2 group-hover:text-gold">
                Sesión {s.num}
              </p>
              <h3 className="font-serif text-2xl mb-3 leading-tight">
                {s.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-muted group-hover:text-paper/80">
                {s.desc}
              </p>
              <p className="font-mono text-xs tracking-wider mt-4 group-hover:text-gold">
                Leer →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper-warm border-y border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Recursos profesionales
          </p>
          <h2 className="font-serif text-3xl mb-8 leading-tight">
            Plantillas, guion y slides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/materiales/plantillas/"
              className="border border-ink bg-paper p-6 hover:bg-ink hover:text-paper transition-colors group"
            >
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-2 group-hover:text-gold">
                Recursos 01
              </p>
              <h3 className="font-serif text-2xl mb-3 leading-tight">
                Plantillas
              </h3>
              <p className="text-sm leading-relaxed text-muted group-hover:text-paper/80">
                Carta de encargo, matriz de riesgos, plan de auditoría, ficha de
                hallazgo, modelo de informe, cuestionario de madurez.
              </p>
              <p className="font-mono text-xs mt-4 group-hover:text-gold">Ver →</p>
            </Link>
            <Link
              href="/materiales/guion-docente/"
              className="border border-ink bg-paper p-6 hover:bg-ink hover:text-paper transition-colors group"
            >
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-2 group-hover:text-gold">
                Recursos 02
              </p>
              <h3 className="font-serif text-2xl mb-3 leading-tight">
                Guion docente
              </h3>
              <p className="text-sm leading-relaxed text-muted group-hover:text-paper/80">
                Notas pedagógicas para impartir el curso: tono, puntos críticos,
                gestión de situaciones difíciles, lectura mínima previa.
              </p>
              <p className="font-mono text-xs mt-4 group-hover:text-gold">Ver →</p>
            </Link>
            <Link
              href="/materiales/slides/"
              className="border border-ink bg-paper p-6 hover:bg-ink hover:text-paper transition-colors group"
            >
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-2 group-hover:text-gold">
                Recursos 03
              </p>
              <h3 className="font-serif text-2xl mb-3 leading-tight">
                Slides
              </h3>
              <p className="text-sm leading-relaxed text-muted group-hover:text-paper/80">
                Presentación HTML autocontenida para compartir pantalla en directo. Navegable
                con flechas, imprimible.
              </p>
              <p className="font-mono text-xs mt-4 group-hover:text-gold">Abrir →</p>
            </Link>
          </div>
        </div>
      </section>
    </AccessGate>
  );
}
