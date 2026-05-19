import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="font-mono text-xs tracking-widest text-gold mb-6">
            [|] LA CLASE DIGITAL · ONLINE · 9–11 SEPT 2026
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-8">
            Auditoría de procesos<br />
            de <span className="text-gold not-italic font-medium">Inteligencia Artificial</span>
          </h1>
          <p className="font-serif italic text-xl md:text-2xl max-w-2xl text-paper/80 leading-snug">
            Un marco metodológico para evaluar, gobernar y documentar sistemas inteligentes en organizaciones.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 font-mono text-xs tracking-wider uppercase">
            <Link
              href="/programa/"
              className="border border-paper px-5 py-3 hover:bg-paper hover:text-ink transition-colors"
            >
              Ver programa →
            </Link>
            <Link
              href="/acceso/"
              className="border border-gold text-gold px-5 py-3 hover:bg-gold hover:text-ink transition-colors"
            >
              Materiales (acceso)
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
              los marcos vigentes en 2026: el Reglamento europeo (UE) 2024/1689 (AI
              Act), la norma ISO/IEC 42001, la ISO/IEC 23894 sobre gestión de riesgos
              y el NIST AI Risk Management Framework.
            </p>
            <p>
              A lo largo de tres sesiones online en directo, el alumnado trabaja sobre un
              caso transversal real, recorriendo el ciclo completo de la auditoría:
              desde la carta de encargo hasta la presentación de hallazgos y la hoja
              de ruta de mejora.
            </p>
          </div>
        </div>
      </section>

      {/* TRES SESIONES */}
      <section className="bg-paper-warm border-y border-ink">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Estructura
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-12 leading-tight">
            Tres sesiones, una mirada
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                date: '9 sept',
                title: 'Fundamentos',
                desc: 'Tecnologías, ciclo de vida, principios éticos. La base que todo auditor de IA necesita.',
              },
              {
                date: '10 sept',
                title: 'Riesgos y normas',
                desc: 'AI Act, ISO 42001, ISO 23894. El marco regulatorio europeo y sus articulaciones.',
              },
              {
                date: '11 sept',
                title: 'Práctica auditora',
                desc: 'Gobernanza, documentación, comunicación. Un plan completo para un caso real.',
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
              <a href="https://laclasedigital.com" className="hover:underline">
                ↗ laclasedigital.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
