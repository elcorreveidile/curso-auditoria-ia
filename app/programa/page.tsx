export default function Programa() {
  const sesiones = [
    {
      num: 1,
      fecha: '9 de septiembre',
      titulo: 'Fundamentos',
      subtitulo: 'Industria 5.0, ciclo de vida, principios éticos',
      bloques: [
        { t: '16:00–16:15', n: 'Apertura y diagnóstico inicial', m: 'Directo' },
        { t: '16:15–17:00', n: 'Industria 5.0 y panorama tecnológico de IA', m: 'Exposición' },
        { t: '17:00–17:45', n: 'Técnicas, algoritmos, modelos y ciclo de vida', m: 'Exposición + ejemplos' },
        { t: '17:45–18:00', n: 'Pausa', m: '—' },
        { t: '18:00–18:45', n: 'Principios éticos: sesgo, equidad, transparencia, robustez', m: 'Exposición + debate' },
        { t: '18:45–19:30', n: 'Explicabilidad e interpretabilidad · IA generativa', m: 'Exposición + demo' },
        { t: '19:30–20:00', n: 'Taller 1: inventario de IA en el caso transversal', m: 'Breakout rooms' },
      ],
    },
    {
      num: 2,
      fecha: '10 de septiembre',
      titulo: 'Riesgos y normas',
      subtitulo: 'AI Act, ISO 42001, ISO 23894',
      bloques: [
        { t: '16:00–16:15', n: 'Repaso S1 y conexión con S2', m: 'Directo' },
        { t: '16:15–17:15', n: 'Riesgos operativos asociados a sistemas de IA', m: 'Exposición + casos' },
        { t: '17:15–18:00', n: 'AI Act: arquitectura del Reglamento UE 2024/1689', m: 'Exposición' },
        { t: '18:00–18:15', n: 'Pausa', m: '—' },
        { t: '18:15–19:15', n: 'ISO 42001, 23894, 24368 y articulación normativa', m: 'Taller guiado' },
        { t: '19:15–19:45', n: 'Marcos de auditoría · Tipos de auditor · Certificación', m: 'Exposición + debate' },
        { t: '19:45–20:00', n: 'Taller 2: clasificación de riesgos en el caso', m: 'Breakout rooms' },
      ],
    },
    {
      num: 3,
      fecha: '11 de septiembre',
      titulo: 'Práctica auditora',
      subtitulo: 'Gobernanza, ciclo, documentación',
      bloques: [
        { t: '16:00–16:15', n: 'Repaso S2', m: 'Directo' },
        { t: '16:15–17:00', n: 'Auditoría del ciclo de vida + gobernanza de IA', m: 'Exposición' },
        { t: '17:00–17:45', n: 'Liderazgo, roles, gestión de procesos y riesgos', m: 'Exposición + ejemplos' },
        { t: '17:45–18:00', n: 'Pausa', m: '—' },
        { t: '18:00–19:00', n: 'Taller integrador: plan de auditoría completo', m: 'Breakout rooms con tutoría' },
        { t: '19:00–19:30', n: 'Documentación, no conformidades, comunicación', m: 'Exposición + plantillas' },
        { t: '19:30–20:00', n: 'Presentación de planes · Evaluación · Cierre', m: 'Directo' },
      ],
    },
  ];

  return (
    <>
      <section className="border-b border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            La Clase Digital · Online
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl leading-none mb-6">
            Programa
          </h1>
          <p className="font-serif italic text-xl md:text-2xl max-w-2xl text-muted leading-snug">
            12 horas online en directo, distribuidas en tres sesiones de 4 horas.
            Sesiones grabadas y disponibles para el alumnado. Público mixto.
          </p>
        </div>
      </section>

      {sesiones.map((s) => (
        <section key={s.num} className="border-b border-ink/20">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-2">
                  Sesión {s.num}
                </p>
                <p className="font-mono text-sm mb-4">{s.fecha}</p>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-2">
                  {s.titulo}
                </h2>
                <p className="font-serif italic text-base text-muted">
                  {s.subtitulo}
                </p>
              </div>
              <div className="md:col-span-3">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-ink">
                      <th className="text-left font-mono text-xs uppercase tracking-wider py-3 w-32 text-accent">
                        Horario
                      </th>
                      <th className="text-left font-mono text-xs uppercase tracking-wider py-3 text-accent">
                        Contenido
                      </th>
                      <th className="text-left font-mono text-xs uppercase tracking-wider py-3 w-48 text-accent hidden sm:table-cell">
                        Modalidad
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.bloques.map((b, i) => (
                      <tr key={i} className="border-b border-ink/10">
                        <td className="py-3 font-mono text-xs">{b.t}</td>
                        <td className="py-3 pr-4 leading-snug">{b.n}</td>
                        <td className="py-3 text-xs text-muted italic hidden sm:table-cell">
                          {b.m}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-paper-warm border-b border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              Evaluación
            </p>
            <h2 className="font-serif text-3xl mb-6 leading-tight">Sistema de evaluación</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-ink/15 pb-2">
                <span>Participación en talleres</span>
                <span className="font-mono">30 %</span>
              </li>
              <li className="flex justify-between border-b border-ink/15 pb-2">
                <span>Plan de auditoría (caso transversal)</span>
                <span className="font-mono">50 %</span>
              </li>
              <li className="flex justify-between border-b border-ink/15 pb-2">
                <span>Cuestionario de verificación</span>
                <span className="font-mono">20 %</span>
              </li>
            </ul>
            <p className="text-xs text-muted mt-4 italic">
              Asistencia mínima del 80 %. Umbral de aprobación: 5/10.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              Metodología online
            </p>
            <h2 className="font-serif text-3xl mb-6 leading-tight">Cómo trabajamos</h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>· Sesiones en directo por videoconferencia.</li>
              <li>· Grabaciones disponibles para el alumnado matriculado.</li>
              <li>· Caso transversal trabajado en breakout rooms.</li>
              <li>· Plantillas profesionales editables descargables.</li>
              <li>· Foro asíncrono entre sesiones para resolver dudas.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
