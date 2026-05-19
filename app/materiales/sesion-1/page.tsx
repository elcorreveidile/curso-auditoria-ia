import { loadMarkdown } from '@/lib/markdown';
import ProtectedDoc from '@/components/ProtectedDoc';

export default function Sesion1Page() {
  const content = loadMarkdown('sesion-1.md');
  return (
    <ProtectedDoc
      sessionLabel="Sesión 1 · 9 de septiembre"
      title="Disrupción algorítmica y nueva lógica de la utilidad"
      subtitle="NLPUE · Dilemas del algoritmo · Enfoques regulatorios comparados"
      content={content}
      nextHref="/materiales/sesion-2/"
      nextLabel="Continúa en Sesión 2 →"
    />
  );
}
