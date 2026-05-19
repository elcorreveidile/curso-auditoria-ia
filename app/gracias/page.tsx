import Link from 'next/link';

// Clave de acceso compartida (debe coincidir con la de AccessGate.tsx)
const ACCESS_PASSWORD = 'auditoria2026';

export default function Gracias() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="font-mono text-xs tracking-widest text-gold mb-6">
            [|] MATRÍCULA FORMALIZADA
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl leading-none mb-6">
            ¡Bienvenido<br />al curso!
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-paper/80 leading-snug max-w-xl mx-auto">
            Tu matrícula se ha registrado correctamente. Te esperamos en septiembre.
          </p>
        </div>
      </section>

      {/* ACCESO INMEDIATO A MATERIALES */}
      <section className="bg-gold border-b border-ink">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="font-mono text-xs tracking-widest text-ink uppercase mb-3">
            Acceso inmediato a los materiales
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl text-ink mb-6 leading-tight">
            Tu clave de acceso
          </h2>
          <div className="inline-block bg-ink text-paper px-8 py-5 mb-6 font-mono text-2xl md:text-3xl tracking-widest">
            {ACCESS_PASSWORD}
          </div>
          <p className="text-sm text-ink/80 max-w-xl mx-auto leading-relaxed mb-8">
            Guarda esta clave. Te da acceso a los dossiers completos, plantillas
            profesionales, guion docente y slides del curso. La usarás desde la
            zona de materiales.
          </p>
          <Link
            href="/acceso/"
            className="inline-block border border-ink bg-ink text-paper px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-paper hover:text-ink transition-colors"
          >
            Ir a los materiales →
          </Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
          Próximos pasos
        </p>
        <h2 className="font-serif text-3xl mb-8 leading-tight">
          Qué pasará a continuación
        </h2>
        <div className="space-y-6">
          <div className="border-l-2 border-accent pl-6 py-2">
            <p className="font-mono text-xs tracking-wider text-accent uppercase mb-1">
              01 · En las próximas horas
            </p>
            <p className="text-sm leading-relaxed">
              Recibirás un email de confirmación de Stripe con el detalle de tu pago.
              Si necesitas factura, responde a ese correo con tus datos de facturación.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <p className="font-mono text-xs tracking-wider text-accent uppercase mb-1">
              02 · En los próximos días
            </p>
            <p className="text-sm leading-relaxed">
              Te llegará un email personal de bienvenida del docente con detalles
              prácticos del curso y el enlace al foro asíncrono.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <p className="font-mono text-xs tracking-wider text-accent uppercase mb-1">
              03 · En las semanas previas al curso
            </p>
            <p className="text-sm leading-relaxed">
              Recibirás recordatorios con la agenda detallada, materiales preparatorios
              opcionales y el enlace de videoconferencia para cada sesión.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <p className="font-mono text-xs tracking-wider text-accent uppercase mb-1">
              04 · 9 de septiembre, 16:00
            </p>
            <p className="text-sm leading-relaxed">
              Primera sesión. Nos vemos.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-paper-warm border border-ink">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-2">
            ¿Algún problema?
          </p>
          <p className="text-sm leading-relaxed">
            Si la clave no te funciona o no has recibido el email de Stripe en 24 horas,
            comprueba tu carpeta de spam o escribe directamente al docente a través de{' '}
            <a href="https://laclasedigital.com" className="underline hover:text-accent">
              laclasedigital.com
            </a>
            .
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block border border-ink px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
          >
            ← Volver a la portada
          </Link>
        </div>
      </section>
    </>
  );
}
