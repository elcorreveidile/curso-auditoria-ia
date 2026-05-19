import { loadMarkdown } from '@/lib/markdown';
import ProtectedDoc from '@/components/ProtectedDoc';

export default function Sesion3Page() {
  const content = loadMarkdown('sesion-3.md');
  return (
    <ProtectedDoc
      sessionLabel="Sesión 3 · 11 de septiembre"
      title="Práctica auditora"
      subtitle="Gobernanza · Ciclo · Documentación · Comunicación"
      content={content}
    />
  );
}
