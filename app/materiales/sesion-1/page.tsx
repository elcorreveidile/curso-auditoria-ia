import { loadMarkdown } from '@/lib/markdown';
import ProtectedDoc from '@/components/ProtectedDoc';

export default function Sesion1Page() {
  const content = loadMarkdown('sesion-1.md');
  return (
    <ProtectedDoc
      sessionLabel="Sesión 1 · 9 de septiembre"
      title="Fundamentos"
      subtitle="Industria 5.0 · Ciclo de vida · Principios éticos · Explicabilidad · IA generativa"
      content={content}
    />
  );
}
