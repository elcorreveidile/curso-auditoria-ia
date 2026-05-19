'use client';

import { useState, useEffect, ReactNode } from 'react';
import { COURSE_CONFIG } from '@/lib/config';

// IMPORTANTE: contraseña client-side, no es seguridad real.
// Es una barrera para alumnado matriculado. Para producción seria,
// migrar a una ruta protegida en laclasedigital.com con backend.
const { STORAGE_KEY } = COURSE_CONFIG;

export function useAccess() {
  const [granted, setGranted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setGranted(localStorage.getItem(STORAGE_KEY) === 'ok');
      setChecked(true);
    }
  }, []);

  const grant = async (pwd: string) => {
    // Verificar contraseña vía API (server-side)
    const response = await fetch('/api/verify-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pwd }),
    });

    if (!response.ok) {
      return false;
    }

    const { isValid } = await response.json();

    if (isValid) {
      localStorage.setItem(STORAGE_KEY, 'ok');
      setGranted(true);
      return true;
    }
    return false;
  };

  const revoke = () => {
    localStorage.removeItem(STORAGE_KEY);
    setGranted(false);
  };

  return { granted, checked, grant, revoke };
}

export default function AccessGate({ children }: { children: ReactNode }) {
  const { granted, checked, grant } = useAccess();
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState(false);

  if (!checked) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center font-mono text-xs text-muted">
        Cargando…
      </div>
    );
  }

  if (granted) return <>{children}</>;

  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3 text-center">
        Acceso restringido
      </p>
      <h1 className="font-serif italic text-4xl md:text-5xl text-center mb-8 leading-tight">
        Materiales
      </h1>
      <p className="text-sm text-muted text-center mb-8 leading-relaxed">
        Los dossiers completos, plantillas y guion docente están reservados al
        alumnado matriculado. Introduce la clave proporcionada al inscribirte
        en el curso.
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const success = await grant(pwd);
          if (!success) setErr(true);
        }}
        className="space-y-4"
      >
        <input
          type="password"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
            setErr(false);
          }}
          placeholder="Clave de acceso"
          className="w-full px-4 py-3 border border-ink bg-paper font-mono text-sm focus:outline-none focus:border-accent"
          autoFocus
        />
        {err && (
          <p className="text-xs text-accent font-mono">
            Clave incorrecta. Comprueba la clave o consulta al docente.
          </p>
        )}
        <button
          type="submit"
          className="w-full border border-ink py-3 font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
        >
          Acceder →
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-ink/15 text-center">
        <p className="text-xs text-muted mb-4 italic">
          ¿Aún no estás matriculado?
        </p>
        <a
          href="/matricula/"
          className="inline-block border border-ink px-5 py-2 font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
        >
          Ver tarifas y matricularme →
        </a>
      </div>

      <p className="text-xs text-muted text-center mt-8 italic">
        Si eres alumno y no recuerdas la clave, escribe a través de{' '}
        <a href="https://laclasedigital.com" className="underline">
          laclasedigital.com
        </a>
        .
      </p>
    </section>
  );
}
