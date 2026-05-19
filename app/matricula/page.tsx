import Link from 'next/link';
import ContadorPlazas from '@/components/ContadorPlazas';
import { COURSE_CONFIG } from '@/lib/config';

const { STRIPE_LINK_FUNDADOR, STRIPE_LINK_GENERAL } = COURSE_CONFIG;

export default function Matricula() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-paper border-b border-ink">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="font-mono text-xs tracking-widest text-gold mb-6">
            [|] MATRÍCULA ABIERTA · CURSO ONLINE
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl leading-none mb-6">
            Matrícula
          </h1>
          <p className="font-serif italic text-xl md:text-2xl max-w-2xl text-paper/80 leading-snug">
            Reserva tu plaza en el curso de Auditoría de Procesos de IA. 16 horas de formación especializada basadas en el Estudio del Ministerio de Economía. Plazas limitadas a 30 personas.
          </p>
        </div>
      </section>

      {/* INFORMACIÓN DEL CURSO */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              El curso
            </p>
            <h2 className="font-serif text-3xl leading-tight">
              Qué incluye tu matrícula
            </h2>
          </div>
          <div className="md:col-span-2">
            <ul className="space-y-3 text-sm leading-relaxed">
              {[
                '16 horas de formación online en directo (4 sesiones de 4 h: 9, 16, 23 y 30 de septiembre, 16:00–20:00).',
                'Acceso a las grabaciones de las sesiones para revisar el contenido cuando quieras.',
                'Dossier completo del curso por sesión (más de 120 páginas de contenido teórico).',
                'Plantillas profesionales editables: carta de encargo, matriz de riesgos, plan de auditoría, ficha de hallazgo, modelo de informe, cuestionario de madurez, matriz de dependencias, ficha de dilemas del algoritmo.',
                'Caso transversal "Centro Lingua" para practicar la auditoría en un escenario realista (trabajado por entregas semanales).',
                'Foro asíncrono activo entre sesiones para resolver dudas con el docente y compartir avances.',
                'Certificado de aprovechamiento al completar el curso (mínimo 80 % de asistencia).',
              ].map((item, i) => (
                <li key={i} className="flex gap-4 border-b border-ink/15 py-2">
                  <span className="font-mono text-xs text-accent mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section className="bg-paper-warm border-y border-ink">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Tarifas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-3 leading-tight">
            Dos tarifas, una misma formación
          </h2>
          <p className="font-serif italic text-lg text-muted max-w-2xl mb-10">
            Curso ampliado a 16 horas con base en el Estudio del Ministerio de Economía. Incluye dimensión competitiva, ciberseguridad IA y enfoques regulatorios comparados.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* TARJETA FUNDADOR */}
            <div className="border border-ink bg-paper p-8 flex flex-col">
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
                Precio fundador
              </p>
              <p className="font-serif italic text-base text-muted mb-6 leading-snug">
                Para quienes apuestan por la primera edición.
              </p>
              <div className="mb-6">
                <span className="font-serif text-6xl">299</span>
                <span className="font-mono text-lg ml-1">€</span>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed mb-8 flex-1">
                <li>· Plaza confirmada en la primera edición</li>
                <li>· Todos los materiales y plantillas</li>
                <li>· Grabaciones y certificado incluidos</li>
                <li>· Solo 20 plazas</li>
              </ul>
              <ContadorPlazas stripeLink={STRIPE_LINK_FUNDADOR} />
            </div>

            {/* TARJETA GENERAL */}
            <div className="border border-ink bg-paper p-8 flex flex-col">
              <p className="font-mono text-xs tracking-widest text-muted uppercase mb-3">
                Precio general
              </p>
              <p className="font-serif italic text-base text-muted mb-6 leading-snug">
                Tarifa estándar disponible hasta el inicio del curso.
              </p>
              <div className="mb-6">
                <span className="font-serif text-6xl">399</span>
                <span className="font-mono text-lg ml-1">€</span>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed mb-8 flex-1">
                <li>· Plaza confirmada en la primera edición</li>
                <li>· Todos los materiales y plantillas</li>
                <li>· Grabaciones y certificado incluidos</li>
                <li>· Mismo contenido íntegro</li>
              </ul>
              <a
                href={STRIPE_LINK_GENERAL}
                className="block text-center border border-ink py-3 font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
              >
                Matricularme · Precio general →
              </a>
            </div>
          </div>

          <p className="text-xs text-muted italic mt-6 max-w-2xl">
            Pago seguro mediante Stripe. Aceptamos tarjeta y otros métodos según país. Factura disponible bajo solicitud al email del docente.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-10 leading-tight">
          Antes de matricularte
        </h2>
        <div className="space-y-8 max-w-3xl">
          {[
            {
              q: '¿Cómo recibiré el acceso a los materiales tras pagar?',
              a: 'Tras formalizar tu matrícula, recibirás un email del docente en un plazo máximo de 24 horas con la clave de acceso a la zona privada del curso y las instrucciones para sumarte al foro.',
            },
            {
              q: '¿Qué pasa si no puedo asistir a alguna sesión en directo?',
              a: 'Todas las sesiones se graban y quedan a tu disposición. El alumnado matriculado puede revisar las grabaciones cuando quiera durante toda la edición.',
            },
            {
              q: '¿Puedo pedir factura?',
              a: 'Sí. Al inscribirte indícalo en el campo de Stripe o escribe al docente con tus datos de facturación. Se emite factura a particulares y a empresas.',
            },
            {
              q: '¿Hay política de devolución?',
              a: 'Sí. Puedes cancelar tu matrícula con devolución íntegra hasta 7 días antes del inicio del curso (2 de septiembre). Una vez iniciado el curso, no se realizan devoluciones, pero conservas el acceso a todos los materiales.',
            },
            {
              q: '¿A quién va dirigido el curso?',
              a: 'A profesionales de auditoría, técnicos en sistemas de IA, responsables de cumplimiento normativo, docentes universitarios, gestores que necesiten comprender e implantar IA con criterio en sus organizaciones. Público mixto.',
            },
            {
              q: '¿Se entrega certificado?',
              a: 'Sí, certificado de aprovechamiento de 16 horas al completar el curso con asistencia mínima del 80 % y entrega del plan de auditoría final.',
            },
          ].map((item, i) => (
            <div key={i} className="border-b border-ink/15 pb-6">
              <h3 className="font-serif text-xl mb-2 leading-tight">{item.q}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-paper-warm border-t border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            ¿Otras preguntas?
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl mb-6 leading-tight">
            Escríbeme antes de matricularte
          </h2>
          <p className="text-sm text-muted max-w-xl mx-auto leading-relaxed mb-8">
            Si tienes dudas sobre si este curso es para ti, sobre el contenido o sobre las condiciones, puedes contactar directamente con el docente.
          </p>
          <Link
            href="/"
            className="inline-block border border-ink px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
          >
            Volver a la portada
          </Link>
        </div>
      </section>
    </>
  );
}
