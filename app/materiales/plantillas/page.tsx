import { loadMarkdown } from '@/lib/markdown';
import ProtectedDoc from '@/components/ProtectedDoc';

export default function PlantillasPage() {
  const content = loadMarkdown('plantillas.md');
  return (
    <ProtectedDoc
      sessionLabel="Recursos profesionales"
      title="Plantillas"
      subtitle="Carta de encargo · Matriz de riesgos · Plan de auditoría · Ficha de hallazgo · Modelo de informe"
      content={content}
    />
  );
}
