export default function Caso() {
  return (
    <>
      <section className="border-b border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Aprendizaje basado en casos
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl leading-none mb-6">
            El caso<br />Centro Lingua
          </h1>
          <p className="font-serif italic text-xl md:text-2xl max-w-2xl text-muted leading-snug">
            Un caso transversal que recorre las tres sesiones y permite al alumnado
            aplicar progresivamente los marcos aprendidos.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              Contexto
            </p>
            <h2 className="font-serif text-3xl leading-tight">
              Un centro universitario de lenguas
            </h2>
          </div>
          <div className="md:col-span-2 prose-curso">
            <p>
              Centro Lingua es un centro universitario público de enseñanza de lenguas
              modernas con 110 trabajadores, más de 4.000 estudiantes anuales y una
              oferta amplia que incluye español como lengua extranjera, idiomas
              europeos, preparación de certificaciones oficiales y formación docente.
            </p>
            <p>
              En los últimos 18 meses, la dirección ha promovido o tolerado la
              incorporación de varios sistemas con Inteligencia Artificial, con
              distinto grado de formalización. La universidad matriz solicita ahora
              un diagnóstico completo.
            </p>
            <p>
              <strong>El alumnado del curso asume el rol de equipo auditor.</strong> A
              lo largo de las tres sesiones, recibe progresivamente la información
              del caso, diseña inventario, evalúa riesgos, clasifica los sistemas
              según el AI Act y elabora un plan completo de auditoría.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-y border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Tres entregas progresivas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-10 leading-tight">
            Una metodología incremental
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: 1,
                titulo: 'Mapa de sistemas',
                desc: 'Inventario clasificado, identificación de sistemas en la sombra y formulación de preguntas clave a dirección.',
              },
              {
                num: 2,
                titulo: 'Riesgos y normativa',
                desc: 'Clasificación de cada sistema según el AI Act y elaboración de la matriz de riesgos transversales.',
              },
              {
                num: 3,
                titulo: 'Plan de auditoría',
                desc: 'Carta de encargo, plan detallado, estrategia de stakeholders, catálogo de pruebas e informe previsto.',
              },
            ].map((e, i) => (
              <div key={i} className="border border-ink bg-paper p-6">
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-2">
                  Entrega {e.num}
                </p>
                <h3 className="font-serif text-xl mb-3 leading-tight">
                  {e.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              Sistemas auditables
            </p>
            <h2 className="font-serif text-3xl leading-tight">
              Ocho usos de IA
            </h2>
          </div>
          <div className="md:col-span-2">
            <ul className="space-y-2 text-sm leading-relaxed">
              {[
                'Chatbot de atención al estudiante (LLM comercial)',
                'Asistente de corrección de pruebas escritas',
                'Generación automática de materiales didácticos',
                'Asistente conversacional para práctica oral',
                'Sistema de detección de fraude académico',
                'Análisis predictivo de abandono (en exploración)',
                'Traductores automáticos en comunicaciones',
                'Asistente de gestión de personal (en evaluación)',
              ].map((s, i) => (
                <li key={i} className="flex gap-4 border-b border-ink/15 py-2">
                  <span className="font-mono text-xs text-accent mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">{s}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted italic mt-6">
              Cada sistema presenta un perfil distinto de riesgo según el Reglamento
              UE 2024/1689 y exige consideraciones específicas de gobernanza, datos
              personales y supervisión humana.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
