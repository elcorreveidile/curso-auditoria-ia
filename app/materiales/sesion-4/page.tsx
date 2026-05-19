import { loadMarkdown } from '@/lib/markdown';
import ProtectedDoc from '@/components/ProtectedDoc';

export default function Sesion4Page() {
  const content = loadMarkdown('sesion-4.md');
  return (
    <ProtectedDoc
      sessionLabel="Sesión 4 · 30 de septiembre"
      title="Práctica auditora integral"
      subtitle="Metodología completa · Gobernanza · Comunicación triple dimensión"
      content={content}
      prevHref="/materiales/sesion-3/"
      prevLabel="← Volver a Sesión 3"
    />
  );
}
