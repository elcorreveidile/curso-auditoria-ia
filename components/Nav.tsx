'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/programa/', label: 'Programa' },
    { href: '/caso/', label: 'Caso' },
    { href: '/bibliografia/', label: 'Bibliografía' },
    { href: '/acceso/', label: 'Materiales' },
  ];

  return (
    <nav className="border-b border-ink bg-paper sticky top-0 z-50 backdrop-blur-sm bg-paper/95">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-mono text-sm tracking-wider flex items-center">
          <a
            href="https://laclasedigital.com"
            className="hover:text-accent transition-colors"
            aria-label="Ir a laclasedigital.com"
          >
            <span className="text-accent">[|]</span>
            <span className="hidden sm:inline"> LA CLASE DIGITAL</span>
          </a>
          <span className="hidden sm:inline mx-2 text-muted">·</span>
          <Link
            href="/"
            className="hover:text-accent transition-colors"
            aria-label="Inicio del curso"
          >
            <span className="sm:ml-0 ml-2">AUDITORÍA IA</span>
          </Link>
        </div>
        <button
          className="md:hidden font-mono text-xs"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? '×' : '☰'}
        </button>
        <ul className="hidden md:flex gap-8 font-mono text-xs tracking-wider uppercase">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="md:hidden border-t border-ink px-6 py-3 flex flex-col gap-3 font-mono text-xs tracking-wider uppercase bg-paper">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block py-1 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
