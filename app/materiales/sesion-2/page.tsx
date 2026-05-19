import { loadMarkdown } from '@/lib/markdown';
import ProtectedDoc from '@/components/ProtectedDoc';

export default function Sesion2Page() {
  const content = loadMarkdown('sesion-2.md');
  return (
    <ProtectedDoc
      sessionLabel="Sesión 2 · 16 de septiembre"
      title="Marco regulatorio y sistemas de gestión"
      subtitle="AI Act · ISO 42001 · ISO 23894 · NIST AI RMF · Ciclos de vida"
      content={content}
      prevHref="/materiales/sesion-1/"
      prevLabel="← Volver a Sesión 1"
      nextHref="/materiales/sesion-3/"
      nextLabel="Continúa en Sesión 3 →"
    />
  );
}
