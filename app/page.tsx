import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="font-mono text-xs tracking-widest text-gold mb-6">
            [|] LA CLASE DIGITAL · ONLINE · 9, 16, 23, 30 SEPT 2026
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-8">
            Auditoría de Sistemas<br />
            de <span className="text-gold not-italic font-medium">Inteligencia Artificial</span>
          </h1>
          <p className="font-serif italic text-xl md:text-2xl max-w-2xl text-paper/80 leading-snug">
            Un marco metodológico para evaluar, gobernar y documentar sistemas inteligentes en organizaciones.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 font-mono text-xs tracking-wider uppercase">
            <Link
              href="/matricula/"
              className="border border-gold bg-gold text-ink px-5 py-3 hover:bg-paper hover:border-paper transition-colors"
            >
              Matricularme →
            </Link>
            <Link
              href="/programa/"
              className="border border-paper px-5 py-3 hover:bg-paper hover:text-ink transition-colors"
            >
              Ver programa
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              Presentación
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              ¿Por qué auditar la IA?
            </h2>
          </div>
          <div className="md:col-span-2 prose-curso">
            <p>
              La irrupción de la Inteligencia Artificial en las organizaciones plantea
              retos que ningún departamento por sí solo puede resolver. Auditar la IA
              exige articular cuatro dimensiones: <em>técnica</em>, <em>normativa</em>,
              <em> organizativa</em> y <em>ética</em>.
            </p>
            <p>
              Este curso ofrece una formación práctica en auditoría de IA conforme a
              los marcos vigentes en 2026:{' '}
              <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" className="text-accent underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                el Reglamento europeo (UE) 2024/1689 (AI Act)
              </a>,{' '}
              <a href="https://www.iso.org/standard/81230.html" className="text-accent underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                la norma ISO/IEC 42001
              </a>,{' '}
              <a href="https://www.iso.org/standard/76977.html" className="text-accent underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                la ISO/IEC 23894 sobre gestión de riesgos
              </a>{' '}
              y{' '}
              <a href="https://www.nist.gov/itl/ai-risk-management-framework" className="text-accent underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                el NIST AI Risk Management Framework
              </a>.
            </p>
            <p>
              A lo largo de cuatro sesiones online en directo, el alumnado trabaja sobre un
              caso transversal real, recorriendo el ciclo completo de la auditoría:
              desde la carta de encargo hasta la presentación de hallazgos y la hoja
              de ruta de mejora.
            </p>
          </div>
        </div>
      </section>

      {/* CUATRO SESIONES */}
      <section className="bg-paper-warm border-y border-ink">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Estructura
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-12 leading-tight">
            Cuatro sesiones, una mirada
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                date: '9 sept',
                title: 'Disrupción algorítmica',
                desc: 'NLPUE, 4 dilemas del algoritmo, enfoques regulatorios comparados.',
              },
              {
                date: '16 sept',
                title: 'Marco regulatorio',
                desc: 'AI Act, ISO 42001, ISO 23894, NIST. Sistemas de gestión y ciclos de vida.',
              },
              {
                date: '23 sept',
                title: 'Riesgos y competitividad',
                desc: 'IA generativa, ciberseguridad, concentración, dependencia de proveedores.',
              },
              {
                date: '30 sept',
                title: 'Práctica auditora',
                desc: 'Metodología completa, gobernanza, comunicación triple dimensión.',
              },
            ].map((s, i) => (
              <div
                key={i}
                className="border border-ink bg-paper p-6 hover:bg-ink hover:text-paper transition-colors group"
              >
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-2 group-hover:text-gold">
                  Sesión {i + 1} · {s.date}
                </p>
                <h3 className="font-serif text-2xl mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
          Aprendizajes
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-10 leading-tight">
          Al finalizar el curso, el alumnado será capaz de…
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {[
            'Identificar y clasificar técnicas, algoritmos y modelos de IA según su naturaleza y riesgo.',
            'Aplicar el AI Act, ISO 42001, ISO 23894 e ISO 24368 a casos concretos.',
            'Diseñar un plan de auditoría de IA articulando ciclo, gobernanza y riesgos.',
            'Evaluar la explicabilidad, interpretabilidad y equidad de un modelo.',
            'Documentar y comunicar hallazgos conforme a estándares profesionales.',
            'Articular las dimensiones técnica, jurídica, organizativa y ética.',
          ].map((o, i) => (
            <div
              key={i}
              className="flex gap-4 py-3 border-b border-ink/15"
            >
              <span className="font-mono text-xs text-accent mt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed flex-1">{o}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCENTE */}
      <section className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs tracking-widest text-gold uppercase mb-3">
              Docente
            </p>
            <h2 className="font-serif italic text-4xl leading-tight">
              Javier Benítez<br />Láinez
            </h2>
          </div>
          <div className="md:col-span-2 text-paper/85 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              Profesor de español como lengua extranjera con más de 30 años de
              experiencia docente. Estudios de doctorado en Informática.
              Licenciado en Filología
              Hispánica. Formador de Formadores certificado por el Instituto
              Cervantes. Certificación oficial en Digitalización Aplicada al
              Sector Productivo.
            </p>
            <p>
              Tres años de investigación sobre integración de IA en la enseñanza
              y en organizaciones. Editor de <em>Olvidos de Granada</em> y
              fundador de la marca de formación digital <em>La Clase Digital</em>,
              espacio desde el que ofrece cursos especializados.
            </p>
            <p className="font-mono text-xs tracking-wider text-gold">
              <a href="https://laclasedigital.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
                ↗ laclasedigital.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-ink">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Matrícula abierta
          </p>
          <h2 className="font-serif italic text-4xl md:text-6xl mb-6 leading-tight">
            Reserva tu plaza
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-snug">
            Plazas limitadas a 30 personas. Precio fundador disponible hasta el inicio del curso.
          </p>
          <Link
            href="/matricula/"
            className="inline-block border border-ink bg-ink text-paper px-8 py-4 font-mono text-xs uppercase tracking-wider hover:bg-paper hover:text-ink transition-colors"
          >
            Ver tarifas y matricularme →
          </Link>
        </div>
      </section>
    </>
  );
}
