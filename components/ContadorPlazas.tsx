'use client';

import { useEffect, useState } from 'react';

interface PlazasData {
  total: number;
  vendidas: number;
  restantes: number;
  agotadas: boolean;
}

interface ContadorPlazasProps {
  stripeLink: string;
}

export default function ContadorPlazas({ stripeLink }: ContadorPlazasProps) {
  const [data, setData] = useState<PlazasData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/plazas')
      .then((res) => {
        if (!res.ok) throw new Error('error');
        return res.json();
      })
      .then((d: PlazasData) => {
        if (typeof d.restantes === 'number') {
          setData(d);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  // Mientras carga, mostramos placeholder neutro para evitar parpadeos
  if (!data && !error) {
    return (
      <div className="mb-6">
        <p className="font-mono text-xs tracking-widest text-muted uppercase">
          Comprobando plazas…
        </p>
      </div>
    );
  }

  // Si hay error, asumimos plazas disponibles (mejor permitir matrícula que bloquear)
  if (error || !data) {
    return null;
  }

  // Plazas agotadas
  if (data.agotadas) {
    return (
      <>
        <div className="mb-6 border-2 border-accent bg-paper-warm p-4">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-1">
            Plazas agotadas
          </p>
          <p className="text-sm leading-snug">
            La tarifa fundador ha alcanzado las {data.total} plazas. Sigue
            disponible la tarifa general.
          </p>
        </div>
        <div className="block text-center border border-muted bg-paper-warm text-muted py-3 font-mono text-xs uppercase tracking-wider cursor-not-allowed select-none">
          Plazas agotadas
        </div>
      </>
    );
  }

  // Aviso especial cuando quedan 5 o menos
  const pocas = data.restantes <= 5;

  return (
    <>
      <div className={`mb-6 border-l-2 ${pocas ? 'border-accent' : 'border-ink'} pl-4 py-1`}>
        <p
          className={`font-mono text-xs tracking-widest uppercase ${
            pocas ? 'text-accent' : 'text-ink'
          }`}
        >
          {data.restantes} de {data.total} plazas disponibles
        </p>
        {pocas && (
          <p className="font-serif italic text-sm text-accent mt-1 leading-snug">
            Últimas plazas a precio fundador.
          </p>
        )}
      </div>
      <a
        href={stripeLink}
        className="block text-center border border-ink py-3 font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
      >
        Matricularme · Precio fundador →
      </a>
    </>
  );
}
