import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Auditoría de Procesos de IA · La Clase Digital',
  description:
    'Curso online sobre auditoría de procesos de Inteligencia Artificial. Marcos regulatorios, gobernanza, ciclo de vida y práctica auditora. Impartido por Javier Benítez Láinez · La Clase Digital.',
  authors: [{ name: 'Javier Benítez Láinez' }],
  openGraph: {
    title: 'Auditoría de Procesos de IA',
    description: 'La Clase Digital · 9–11 sept 2026 · Online',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Nav />
        <main className="min-h-[calc(100vh-180px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
