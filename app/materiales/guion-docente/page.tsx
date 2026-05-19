import { loadMarkdown } from '@/lib/markdown';
import ProtectedDoc from '@/components/ProtectedDoc';

export default function GuionDocentePage() {
  const content = loadMarkdown('guion-docente.md');
  return (
    <ProtectedDoc
      sessionLabel="Material del docente"
      title="Guion docente"
      subtitle="Notas pedagógicas para impartir el curso. Uso interno."
      content={content}
    />
  );
}
