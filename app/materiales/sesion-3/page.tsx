import { loadMarkdown } from '@/lib/markdown';
import ProtectedDoc from '@/components/ProtectedDoc';

export default function Sesion3Page() {
  const content = loadMarkdown('sesion-3.md');
  return (
    <ProtectedDoc
      sessionLabel="Sesión 3 · 23 de septiembre"
      title="Riesgos, competitividad y ciberseguridad"
      subtitle="IA generativa · Concentración · Dependencia de proveedores · Ciberseguridad ofensiva y defensiva"
      content={content}
      prevHref="/materiales/sesion-2/"
      prevLabel="← Volver a Sesión 2"
      nextHref="/materiales/plantillas/"
      nextLabel="Ver plantillas profesionales →"
    />
  );
}
