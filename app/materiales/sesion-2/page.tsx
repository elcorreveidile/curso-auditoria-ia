import { loadMarkdown } from '@/lib/markdown';
import ProtectedDoc from '@/components/ProtectedDoc';

export default function Sesion2Page() {
  const content = loadMarkdown('sesion-2.md');
  return (
    <ProtectedDoc
      sessionLabel="Sesión 2 · 10 de septiembre"
      title="Riesgos y normas"
      subtitle="AI Act · ISO 42001 · ISO 23894 · Marcos de auditoría"
      content={content}
    />
  );
}
