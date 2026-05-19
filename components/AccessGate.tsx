'use client';

import { useState, useEffect, ReactNode } from 'react';

// IMPORTANTE: contraseña client-side, no es seguridad real.
// Es una barrera para alumnado matriculado. Para producción seria,
// migrar a una ruta protegida en laclasedigital.com con backend.
const ACCESS_PASSWORD = 'auditoria2026';
const STORAGE_KEY = 'curso-auditoria-ia-access';

export function useAccess() {
  const [granted, setGranted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setGranted(localStorage.getItem(STORAGE_KEY) === 'ok');
      setChecked(true);
    }
  }, []);

  const grant = (pwd: string) => {
    if (pwd === ACCESS_PASSWORD) {
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
        onSubmit={(e) => {
          e.preventDefault();
          if (!grant(pwd)) setErr(true);
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
